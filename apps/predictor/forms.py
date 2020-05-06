from django import forms

LEARN_FORM_CHOICES = [
    (',', 'Comma'),
    ('\t', 'Tab'),
    (';', 'Semi-colon'),
]
class LearnForm(forms.Form):
    name = forms.CharField(max_length=120)
    first = forms.CharField(max_length=120)
    second = forms.CharField(max_length=120)
    third = forms.CharField(max_length=120)
    size = forms.FloatField()
    file = forms.FileField()    
    separator = forms.ChoiceField(choices = LEARN_FORM_CHOICES)  
    def __init__(self, *args, **kwargs):
        super(LearnForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'example.csv'})
        self.fields['first'].widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder':'first'})
        self.fields['second'].widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder':'second'})
        self.fields['third'].widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder':'third'})
        self.fields['size'].widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder':'float int'})
        