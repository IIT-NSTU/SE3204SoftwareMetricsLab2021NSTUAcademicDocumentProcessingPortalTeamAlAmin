from calendar import c

from base.models import User, chairman, student
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import redirect
from django.urls import reverse
from jwt import ExpiredSignatureError, decode, encode, exceptions
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import isChairmanUser, isStudentUser
from .serializers import (LoginSerializer, StudentSerializer, UserSerializer,
                          chairmanSignupSerializer, studentSignupSerializer)
from .utils import Util


class chairmanSignupView(generics.GenericAPIView):
    serializer_class = chairmanSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        user_data = User.objects.get(email=serializer.data['email'])

        token = encode({'id': user_data.id},
                       settings.SECRET_KEY, algorithm='HS256')
        current_site = get_current_site(request).domain
        relative_link = reverse('email-verify')
        absurl = 'http://' + current_site + \
            relative_link + "?token=" + str(token)

        email_body = 'Hi ' + user_data.fullname + \
            ' User the link bellow to verify your email: \n' + absurl
        data = {'to_email': user_data.email,
                'email_subject': 'Verify your email', 'email_body': email_body}
        Util.send_email(data)

        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": Token.objects.get(user=user).key,
                "message": "account created successfully",
            }
        )


class studentSignupView(generics.GenericAPIView):
    serializer_class = studentSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        user_data = User.objects.get(email=serializer.data['email'])

        token = encode({'id': user_data.id},
                       settings.SECRET_KEY, algorithm='HS256')
        current_site = get_current_site(request).domain
        relative_link = reverse('email-verify')
        absurl = 'http://' + current_site + \
            relative_link + "?token=" + str(token)

        email_body = 'Hi ' + user_data.fullname + \
            ' User the link bellow to verify your email: \n' + absurl
        data = {'to_email': user_data.email,
                'email_subject': 'Verify your email', 'email_body': email_body}
        Util.send_email(data)

        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": Token.objects.get(user=user).key,
                "message": "account created successfully",
            }
        )


class VerifyEmail(generics.GenericAPIView):

    @staticmethod
    def get(request):
        token = request.GET.get('token')
        try:
            payload = decode(token, settings.SECRET_KEY, algorithms='HS256')
            user = User.objects.get(id=payload['id'])
            if user.email_validation is False:
                user.email_validation = True
                user.save()
            # return Response({'message': 'Successfully activated'}, status=status.HTTP_200_OK)
            return redirect("http://localhost:3000/login")
        except ExpiredSignatureError:
            return Response({'message': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)
        except exceptions.DecodeError:
            return Response({'message': 'Invalid Token'}, status=status.HTTP_400_BAD_REQUEST)


class customAuthToken(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        # if user.email_validation is False:
        #     return Response({
        #         "message": "Your username has not been activated"
        #     }, status=status.HTTP_400_BAD_REQUEST)
        # else:
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token.key
        })


class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)


class studentOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated & isStudentUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class chairmanOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated & isChairmanUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class continuousVerificationView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class checkVerificationView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # a_serialzer_data = UserSerializer
        b_serialzer_data = StudentSerializer(student.objects.all(), many=True)
        return Response({
            # "A": a_serialzer_data.data,
            "B": b_serialzer_data.data
        })
