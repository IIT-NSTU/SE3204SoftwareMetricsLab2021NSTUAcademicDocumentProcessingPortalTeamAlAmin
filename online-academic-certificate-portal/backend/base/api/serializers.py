import email

from base.models import User, chairman, student
from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "fullname", "email", "is_student",
                  "is_chairman", "email_validation", "new_email_validation"]


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = student
        fields = ["id", "roll", "user"]


class emailChangeSerializer(serializers.ModelSerializer):
    oldEmail = serializers.EmailField()
    newEmail = serializers.EmailField()

    class Meta:
        model = User
        fields = ["oldEmail", "newEmail"]

    def save(self, **kwargs):
        user = User.objects.get(email=self.validated_data['oldEmail'])
        print(user, "in user")
        user.new_email = self.validated_data["newEmail"]
        user.new_email_validation = False
        user.save()
        return user


class chairmanSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ["fullname", "email", "password", "password2"]
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def save(self, **kwargs):
        user = User(
            fullname=self.validated_data["fullname"],
            email=self.validated_data["email"],
        )
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]
        if password != password2:
            raise serializers.ValidationError(
                {"error": "Password do not match"})
        user.set_password(password)
        user.is_chairman = True
        user.save()

        chairman.objects.create(user=user)
        return user


class studentSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ["fullname", "email", "password", "password2"]
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def save(self, **kwargs):
        user = User(
            fullname=self.validated_data["fullname"],
            email=self.validated_data["email"],
        )
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]
        if password != password2:
            raise serializers.ValidationError(
                {"error": "Password do not match"})
        user.set_password(password)
        user.is_student = True
        user.save()
        student.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
