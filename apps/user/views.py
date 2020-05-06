from django.shortcuts import render, reverse, redirect
from .forms import RegisterForm, LoginForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return redirect("user:new")
    form = LoginForm()
    return render(request, "user/index.html", {'form': form})


def logins(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password1']

        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect(reverse("predictor:index"))
        else:
            messages.info(request, "Username OR Password is incorrect")
    return redirect(reverse("user:index"))

def logouts(request):
    logout(request)
    return redirect(reverse("user:index"))

def new(request):
    form = RegisterForm()
    return render(request, "user/new.html", {'form': form})


def create(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            messages.error(request, "Invalid user credentials")
    return redirect(reverse("user:new"))