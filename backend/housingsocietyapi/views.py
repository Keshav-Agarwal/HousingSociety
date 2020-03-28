from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Residents, Complaint, Bill, Notices
from .serliazers import BillSerializer, ComplaintSerializer, ResidentSerializer, NoticeSerializer
from rest_framework.permissions import IsAuthenticated


class BillAPI(APIView):
    def get(self, request, format=None, *args, **kwargs):
        if self.kwargs.get('pk'):
            bill = Bill.objects.filter(user=self.kwargs.get('pk'))
        else:
            bill = Bill.objects.all()
        serializer = BillSerializer(bill, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BillSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ComplaintAPI(APIView):
    def get(self, request, format=None, *args, **kwargs):
        complaint = Complaint.objects.all()
        serializer = ComplaintSerializer(complaint, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NoticeAPI(APIView):
    def get(self, request, format=None, *args, **kwargs):
        notices = Notices.objects.all()
        serializer = NoticeSerializer(notices, many=True)
        return Response(serializer.data)


class ResidentAPI(APIView):
    def get(self, request, format=None, *args, **kwargs):
        if self.kwargs.get('pk'):
            residents = Residents.objects.get(pk=self.kwargs.get('pk'))
            serializer = ResidentSerializer(residents)
        else:
            print("here0")
            residents = Residents.objects.all()
            print("here", residents)
            serializer = ResidentSerializer(residents, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ResidentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

