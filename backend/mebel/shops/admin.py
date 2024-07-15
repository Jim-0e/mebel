from django.contrib import admin
from .models import Cabinets, Category, Images

from django.forms import ModelForm, ClearableFileInput
from django import forms



class PhotoAlbumForm(ModelForm):
    image = forms.FileField(widget=ClearableFileInput(attrs={'multiple': True}))
    
    class Meta:
        model = Cabinets
        fields = "__all__"


class CabinetsAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'image')
    # list_editable = (
    #     'name',
    #     'price'
    # )
    list_editable = ( 'price',)
    list_display_links = ('name', )
    list_filter = ('price', )
    search_fields = ('name', )
    empty_value_display = 'Не задано'
    form = PhotoAlbumForm

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name',  'image')


admin.site.register(Cabinets, CabinetsAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Images)
