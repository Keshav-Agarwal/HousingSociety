from django.urls import path, include
from .views import BillAPI, ComplaintAPI, ResidentAPI, NoticeAPI


urlpatterns = [
    path('residentapi/<pk>/', ResidentAPI.as_view(), name='residentapipk'),
    path('residentapi/', ResidentAPI.as_view(), name='residentapi'),
    path('billapi/<pk>/', BillAPI.as_view(), name='billapipk'),
    path('billapi/', BillAPI.as_view(), name='billapi'),
    path('noticeapi/', NoticeAPI.as_view(), name='noticeapi'),
    path('complaintapi/', ComplaintAPI.as_view(), name='complaintapi'),
]