from django.conf.urls import url
from . import views

app_name = "user"

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^new$', views.new, name="new"),
    url(r'^create$', views.create, name="create"),
    url(r'^logins$', views.logins, name="logins"),
    url(r'^logouts$', views.logouts, name="logouts"),
]