from django.contrib.gis.db import models

class Bridge(models.Model):
    name = models.CharField(max_length=255)
    location = models.PointField()
    length = models.FloatField()
    width = models.FloatField()
    material = models.CharField(max_length=255)

    def __str__(self):
        return self.name