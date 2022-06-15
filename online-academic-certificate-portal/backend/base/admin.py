from django.contrib import admin

from .models import User, chairman, student

# Register your models here.
admin.site.register(User)
admin.site.register(student)
admin.site.register(chairman)
