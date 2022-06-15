from django.urls import path

from .views import (
    chairmanSignupView,
    studentSignupView,
    customAuthToken,
    LogoutView,
    studentOnlyView,
    chairmanOnlyView,
)

urlpatterns = [
    path("signup/chairman/", chairmanSignupView.as_view(), name="chairman"),
    path("signup/student/", studentSignupView.as_view(), name="student"),
    path("login/", customAuthToken.as_view(), name="auth-token"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("student/dashboard/", studentOnlyView.as_view(), name="student-only"),
    path("chairman/dashboard/", chairmanOnlyView.as_view(), name="chairman-only"),
]
