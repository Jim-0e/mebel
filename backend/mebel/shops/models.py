from django.db import models



class Category(models.Model):
    category_name = models.CharField(max_length=50)
    image = models.ImageField(
        upload_to='category/images',
        null=True,
        default=None,
        max_length=1024000
    )

    def __str__(self):
        return self.category_name


class Cabinets(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.IntegerField()
    image = models.ImageField(
        upload_to='cabinets/images/',
        null=True,
        default=None
    )
    category = models.ForeignKey(
        Category,
        related_name='title',
        on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
        

class Images(models.Model):
    image = models.ImageField(
        upload_to='category/images',
        null=True,
        default=None,
        max_length=1024000
    )
    tovar = models.ForeignKey(
       Cabinets,
       related_name='images_name',
       on_delete=models.CASCADE
    )

    def __str__(self):
        return str(self.image)
    