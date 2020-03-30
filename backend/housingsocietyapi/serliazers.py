from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from .models import Bill, Residents, Complaint, Notices


class ResidentSerializer(ModelSerializer):
    class Meta:
        model = Residents
        fields = '__all__'


class ComplaintSerializer(ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'
        
    def to_representation(self, instance):
        serialized_data = super(ComplaintSerializer, self).to_representation(instance)
        user_id = serialized_data.get('user')
        user = Residents.objects.get(pk=user_id)
        serialized_data['firstname'] = user.firstname
        serialized_data['lastname'] = user.lastname
        serialized_data['flat_number'] = user.flat_number
        return serialized_data


class NoticeSerializer(ModelSerializer):
    class Meta:
        model = Notices
        fields = '__all__'


class BillSerializer(ModelSerializer):
    class Meta:
        model = Bill
        fields = '__all__'

