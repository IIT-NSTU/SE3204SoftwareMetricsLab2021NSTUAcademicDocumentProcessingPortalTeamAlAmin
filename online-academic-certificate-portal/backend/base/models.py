from email.policy import default

from django.conf import settings
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.core.mail import send_mail
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django_rest_passwordreset.signals import reset_password_token_created
# password reset
from rest_framework.authtoken.models import Token

# Create your models here.


class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        print('hukka', extra_fields)
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, is_staff=extra_fields['is_staff'],
                          is_active=extra_fields['is_active'],
                          is_superuser=extra_fields['is_superuser'],)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        print('hukka superuser')
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()
    is_student = models.BooleanField(default=False)
    is_chairman = models.BooleanField(default=False)
    email_validation = models.BooleanField(default=False)
    fullname = models.CharField(
        max_length=150, default='test user', unique=True)
    new_email = models.EmailField(null=True, unique=True)
    new_email_validation = models.BooleanField(default=False)

    def __str__(self):
        return self.email


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class student(models.Model):
    user = models.OneToOneField(
        User, related_name="student", on_delete=models.CASCADE)
    roll = models.CharField(max_length=50)

    def __str__(self):
        return self.user.email


class chairman(models.Model):
    user = models.OneToOneField(
        User, related_name="chairman", on_delete=models.CASCADE)
    chairman_id = models.CharField(max_length=50)

    def __str__(self):
        return self.user.email


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(
        reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "souravdebnath97@gmail.com",
        # to:
        [reset_password_token.user.email]
    )
