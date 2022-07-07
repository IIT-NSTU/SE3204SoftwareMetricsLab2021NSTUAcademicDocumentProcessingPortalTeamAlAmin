from django.urls import include, path

from .views import (LogoutView, VerifyEmail, chairmanOnlyView,
                    chairmanSignupView, checkVerificationView,
                    continuousVerificationView, customAuthToken,
                    studentOnlyView, studentSignupView)

urlpatterns = [
    path("signup/chairman/", chairmanSignupView.as_view(), name="chairman"),
    path('email-verify/', VerifyEmail.as_view(), name='email-verify'),
    path("signup/student/", studentSignupView.as_view(), name="student"),
    path("login/", customAuthToken.as_view(), name="auth-token"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("student/dashboard/", studentOnlyView.as_view(), name="student-only"),
    path("chairman/dashboard/", chairmanOnlyView.as_view(), name="chairman-only"),
    path("checkauth/", continuousVerificationView.as_view(),
         name="continuous-verification"),
    path("hulocheck/", checkVerificationView.as_view(),
         name="hulo-verification"),
    path('password_reset/',
         include('django_rest_passwordreset.urls', namespace='password_reset')),
]
