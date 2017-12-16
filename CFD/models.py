# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
 
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    GENDER_CHOICES = (
        (1, 'male'),
        (2, 'female'),
    )
    gender = models.IntegerField(choices=GENDER_CHOICES,
                                 default=1)
    phone = models.CharField(max_length=14)
    work = models.CharField(max_length=150)
    

