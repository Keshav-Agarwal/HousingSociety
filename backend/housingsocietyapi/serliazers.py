from rest_framework.serializers import ModelSerializer

from .models import Bill, Residents, Complaint, Notices


class ResidentSerializer(ModelSerializer):
    class Meta:
        model = Residents
        fields = '__all__'


class ComplaintSerializer(ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'


class NoticeSerializer(ModelSerializer):
    class Meta:
        model = Notices
        fields = '__all__'



class BillSerializer(ModelSerializer):
    class Meta:
        model = Bill
        fields = '__all__'



