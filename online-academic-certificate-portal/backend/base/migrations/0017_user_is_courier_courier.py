# Generated by Django 4.0.5 on 2022-09-21 11:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0016_alter_student_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_courier',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='Courier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Courier_id', models.CharField(max_length=50)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='courier', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
