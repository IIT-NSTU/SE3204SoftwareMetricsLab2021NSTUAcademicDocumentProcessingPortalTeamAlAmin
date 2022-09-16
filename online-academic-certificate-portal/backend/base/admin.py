from django.contrib import admin

from .models import (ProvisionalCertificate, Student, StudentResult, User,
                     chairman, testTable)

# Register your models here.
admin.site.register(User)
admin.site.register(chairman)
admin.site.register(Student)
admin.site.register(StudentResult)
admin.site.register(ProvisionalCertificate)
admin.site.register(testTable)
