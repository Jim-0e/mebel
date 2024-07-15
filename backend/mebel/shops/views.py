from django.shortcuts import render
from rest_framework import viewsets
from .models import Cabinets, Category, Images
from .serializers import CabinetSerializers, CategorySerializer, ImS


# Create your views here.
class CabinetsViewSet(viewsets.ModelViewSet):
    queryset = Cabinets.objects.all()
    serializer_class = CabinetSerializers


class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ImgSer(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImS