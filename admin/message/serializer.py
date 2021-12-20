from rest_framework import serializers
from admin.message.models import Message


class MsgSerializer(serializers.Serializer):
    msg_id = serializers.CharField()
    msg_type = serializers.CharField()
    msg_city = serializers.CharField()
    msg_district = serializers.CharField()
    msg_date = serializers.CharField()
    msg_time = serializers.CharField()

    class Meta:
        model = Message
        fields = '__all__'

    def create(self, validated_data):
        return Message.objects.create(**validated_data)

    def update(self, instance, validated_data):
        Message.objects.filter(pk=instance.msg_id).update(**validated_data)
