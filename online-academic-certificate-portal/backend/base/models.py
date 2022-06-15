from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token

# Create your models here.


class User(AbstractUser):
    is_student = models.BooleanField(default=False)
    is_chairman = models.BooleanField(default=False)

    def __str__(self):
        return self.username


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class student(models.Model):
    user = models.OneToOneField(User, related_name="student", on_delete=models.CASCADE)
    roll = models.CharField(max_length=50)

    def __str__(self):
        return self.user.username


class chairman(models.Model):
    user = models.OneToOneField(User, related_name="chairman", on_delete=models.CASCADE)
    chairman_id = models.CharField(max_length=50)

    def __str__(self):
        return self.user.username
