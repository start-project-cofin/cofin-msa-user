from rest_framework import serializers
from admin.user.models import User, User_Vaccine


class UVaccSerializer(serializers.Serializer):
    vaccine_type = serializers.CharField()
    innoculation_date = serializers.CharField()
    vaccine_side_effect = serializers.CharField()

    class Meta:
        model = User_Vaccine
        fields = '__all__'


class UserSerializer(serializers.Serializer):
    user_email = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField()
    user_name = serializers.CharField()
    user_birthday = serializers.CharField()
    user_sex = serializers.CharField()
    user_phone = serializers.CharField()
    user_address = serializers.CharField()
    user_vaccinated = serializers.CharField()
    vaccine_type = serializers.CharField()

    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        User.objects.filter(pk=instance.user_email).update(**validated_data)
