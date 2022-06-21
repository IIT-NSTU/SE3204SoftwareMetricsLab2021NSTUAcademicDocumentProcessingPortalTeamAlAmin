from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import isChairmanUser, isStudentUser
from .serializers import (UserSerializer, chairmanSignupSerializer,
                          studentSignupSerializer)


class chairmanSignupView(generics.GenericAPIView):
    serializer_class = chairmanSignupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
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
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                "token": Token.objects.get(user=user).key,
                "message": "account created successfully",
            }
        )


class customAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        return Response(
            {
                # "user": UserSerializer(
                #     user, context=self.get_serializer_context()
                # ).data,
                "token": token.key,
                "user_id": user.pk,
                "is_chairman": user.is_chairman,
            }
        )


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
