from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework import exceptions
from API.models import Photos
class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

    def validate(self,data):
        username=data.get("username","")
        password=data.get("password","")

        if username and password:
            user=authenticate(username=username,password=password)
            if user:
                if user.is_active:
                    data["user"]=user
                else:
                    msg="User Account Is Deactivated"
                    raise exceptions.ValidationError(msg)
            else:
                msg="Username or Password is incorrect"
                raise exceptions.ValidationError(msg)
        else:
            msg="Credentials were not provided"
            raise exceptions.ValidationError(msg)
        return data

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Photos
        fields=('title','path')
