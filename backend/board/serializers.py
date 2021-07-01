from rest_framework import serializers
from board.models import Post


class BooardSerializers(serializers.Serializer):
    title = serializers.CharField(max_length=30)
    content = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Post.objects.create(**validated_data)


