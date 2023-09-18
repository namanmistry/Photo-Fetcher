from django.shortcuts import render
from rest_framework.authentication import BasicAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView,ListAPIView
from rest_framework.mixins import ListModelMixin
from API.serializers import LoginSerializer,PhotoSerializer
from API.models import Photos
from rest_framework.authtoken.models import Token
import random
from rest_framework.response import Response
from django.contrib.auth import login as django_login,logout as djang_logout
from rest_framework import viewsets
from os import listdir
from os import rename,remove
from os.path import isfile,join
import os
from django.core.files.storage import FileSystemStorage
from pathlib import Path



class LoginView(APIView):
    '''Returns existing or new Token if username and password are correct'''
    def post(self,request):
        data=request.data
        serializer=LoginSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        django_login(request,user)
        token,created=Token.objects.get_or_create(user=user)
        return Response({"key":str(token)})

class LogoutView(APIView):
    '''Log's out user from the server side by removing session id from cliend and server side'''
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    def post(self,request):
        djang_logout(request)
        return Response({"message":"Logout Successfull"})

class RefreshView(APIView):
    '''This will refresh database based on database'''
    # authentication_classes=[TokenAuthentication]
    # permission_classes=[IsAuthenticated]
    BASE_DIR = Path(__file__).resolve().parent.parent
    def get(self,request):
        files_list=[f for f in listdir(join(self.BASE_DIR,'photos')) if isfile(join(join(self.BASE_DIR,'photos'),f))]
        for photo in files_list:
            try:
                is_there=Photos.objects.get(title=photo)
            except Photos.DoesNotExist as e:
                    p=Photos(None,photo,join('http://naman1172-23795.portmap.io:23795/static/',photo))
                    p.save()
        return Response({"details":"refresh successfull"})

class ListPhotosView(GenericAPIView,ListModelMixin):
    '''This will return all api results'''
    # authentication_classes=[TokenAuthentication]
    # permission_classes=[IsAuthenticated]
    serializer_class=PhotoSerializer
    queryset=Photos.objects.all()
    
    def get(self,request):
        return self.list(request)

class UploadView(APIView):
    '''This will handle upload files and save them into database'''
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    BASE_DIR = Path(__file__).resolve().parent.parent
    def post(self,request):
        
        fs=FileSystemStorage(join(self.BASE_DIR,'photos'))
        uploaded_file=request.FILES['file']
        photo=uploaded_file.name
        try:
            is_there=Photos.objects.get(title=photo)
            if is_there is not None:
                digit=self.ten_digit_code_generator()
                array=uploaded_file.name.split('.')
                length=len(array)
                uploaded_file.name=digit+"."+array[length-1]
                p=Photos(None,uploaded_file.name,join('http://naman1172-23795.portmap.io:23795/static/',uploaded_file.name))
                p.save()
                fs.save(uploaded_file.name,uploaded_file)
        except Photos.DoesNotExist as e:
            p=Photos(None,photo,join('http://naman1172-23795.portmap.io:23795/static/',photo))
            p.save()
            fs.save(photo,uploaded_file)
        return Response({"data":"photo uploaded successfully"})
    def ten_digit_code_generator(self):
        digit=""
        for i in range(10):
            random_num=random.randint(0,9)
            digit=digit+str(random_num)
        return digit
    

class DeleteView(APIView):
    '''This view will delete specific photos based on their ids'''
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    BASE_DIR = Path(__file__).resolve().parent.parent
    
    def post(self,request,id=None):
        try:
            delete_photo=Photos.objects.get(id=id)
        except Photos.DoesNotExist as e:
            return Response({"details":"The Photo that you are trying to delete does not exist!"})
        remove(join(self.BASE_DIR,'photos/'+delete_photo.title))
        delete_photo.delete()
        return Response({"details":"Photo Deleted Successfully"})

class SystemStorageView(APIView):
    '''This will reuturn Systemstorage infomation'''
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    BASE_DIR = Path(__file__).resolve().parent.parent
    TOTAL_STORAGE=100
    def get(self,request):
        used_storage=0
        for f in listdir(join(self.BASE_DIR,'photos')):
            if (isfile(join(self.BASE_DIR,'photos\\'+f))):
                used_storage=used_storage+os.path.getsize(join(self.BASE_DIR,'photos\\'+f))
        used_storage=used_storage/1000000000
        free_storage=self.TOTAL_STORAGE-used_storage
        return Response({"used":str(used_storage)+" GB",
                            "free":str(free_storage)+" GB"})