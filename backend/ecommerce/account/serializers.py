from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer, CharField

User = get_user_model()

class RegisterSerializer(ModelSerializer):
    password = CharField(write_only=True)

    class Meta:
        model = User
        fields = ("id", "username", "email", "password")

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email"),
            password=validated_data["password"],
        )
        return user

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email") 