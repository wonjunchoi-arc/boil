from rest_framework import serializers
from board.models import Post


class BooardSerializers(serializers.Serializer):
    title = serializers.CharField(max_length=30)
    content = serializers.TextField()
    created_at = serializers.DateTimeField(auto_now=True)
    updated_at = serializers.DateTimeField(auto_now=True)

    def create(self, validated_data):
        return Post.objects.create(**validated_data)


