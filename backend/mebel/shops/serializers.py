from rest_framework import serializers
from .models import Cabinets, Category, Images
from django.core.files.base import ContentFile

import base64

class CategorySerializer(serializers.ModelSerializer):
    title = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'category_name', 'image', 'title')


class ImageBase64Field(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
        return super().to_internal_value(data)



class ImS(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = "__all__"


class CabinetSerializers(serializers.ModelSerializer):
    image = ImageBase64Field(required=False, allow_null=True)
    category = serializers.StringRelatedField(read_only=True)
    images_name = ImS(many=True, read_only=True)

    class Meta:
        model = Cabinets
        fields = ('id', 'image', 'category', 'name', 'description', 'price', 'images_name')






