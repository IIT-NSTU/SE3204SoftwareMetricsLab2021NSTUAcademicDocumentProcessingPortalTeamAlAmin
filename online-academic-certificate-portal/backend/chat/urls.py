from django.urls import include, path, re_path

from .views import index, room

app_name = 'chat'

urlpatterns = [
    path("", index, name="chat_home"),
    path("<str:room_name>/", room, name="room"),
]
