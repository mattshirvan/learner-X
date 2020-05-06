from django.shortcuts import render, redirect, reverse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .forms import LearnForm
from .predictor import predictor

# Create your views here.
@login_required(login_url="/user/")
def index(request):
    return render(request, "predictor/index.html")

@login_required(login_url="/user/")
def new(request):
    form = LearnForm()
    return render(request, "predictor/new.html", {'form': form})

@login_required(login_url="/user/")
def create(request):
    if request.method == "POST":
        form = LearnForm(request.POST, request.FILES)
        
        if form.is_valid():
            prediction = predictor(request.FILES['file'], request.POST['first'], request.POST['second'], request.POST['third'], request.POST['size'], request.POST['separator'])
            return show(request, prediction)
            
    return redirect(reverse("predictor:new")) 

@login_required(login_url="/user/")
def show(request, data):
    info = {
        "name": request.POST['name'],
        "size": request.POST['size'],
        "first": request.POST['first'],
        "second": request.POST['second'],
        "third": request.POST['third'],
        "separator": request.POST['separator']
    }
    print(request.POST)
    return render(request, "predictor/show.html", {'data': data, 'info': info})