
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from shops.views import  CabinetsViewSet, CategoriesViewSet, ImgSer


from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'cabinets', CabinetsViewSet)
router.register(r'categories', CategoriesViewSet)
router.register(r'images', ImgSer)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)