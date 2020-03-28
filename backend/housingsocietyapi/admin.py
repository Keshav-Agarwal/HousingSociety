from django.contrib import admin
from .models import Bill, Complaint, Residents, Notices

# Register your models here.
admin.site.register(Bill)

admin.site.register(Complaint)

admin.site.register(Residents)


admin.site.register(Notices)
