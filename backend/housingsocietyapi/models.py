from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import User

CATEGORIES = (
    ("Cleanliness", "Cleanliness"),
    ("Parking", "Parking"),
    ("Staff", "Staff"),
    ("Billing", "Billing"),
    ("Residents", "Residents"),
    ("Other", "Other")
)


class Residents(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstname = models.TextField(max_length=30, default=None, blank=True)
    lastname = models.TextField(max_length=30, default=None, blank=True)
    flat_number = models.CharField(max_length=5, blank=False)
    number_of_people = models.IntegerField(default=None, blank=True)
    profession = models.TextField(max_length=20, default=None, blank=True)


class Complaint(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=15, choices=CATEGORIES)
    description = models.TextField(max_length=1000, blank=True)
    title = models.CharField(max_length=250)
    time_published = models.DateTimeField(default=now, editable=False)
    time_completed = models.DateTimeField(default=None, blank=True)
    isCompleted = models.BooleanField(default=False, blank=False)


class Bill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=20, default="Miscellaneous")
    description = models.TextField(max_length=1000, blank=True, default=None)


class Notices(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(max_length=1000, blank=True)
    time_published = models.DateTimeField(default=now, editable=False)

