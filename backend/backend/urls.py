
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from API.views import LoginView,RefreshView,ListPhotosView,LogoutView,UploadView,DeleteView,SystemStorageView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', LoginView.as_view()),
    path('api/logout/', LogoutView.as_view()),
    path('api/refresh/', RefreshView.as_view()),
    path('api/', ListPhotosView.as_view()),
    path('api/upload/', UploadView.as_view()),
    path('api/delete/<int:id>/', DeleteView.as_view()),
    path('api/systemstorage/', SystemStorageView.as_view()),
    

    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
