from django.conf.urls import url
from . import views

app_name = "predictor"

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^new$', views.new, name="new"),
    url(r'^create$', views.create, name="create"),
    url(r'^show$', views.show, name="show"),
]