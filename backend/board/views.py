from django.shortcuts import render
from rest_framework.views import APIView
from icecream import ic
from .serializers import BooardSerializers
from rest_framework.response import Response

class Board(APIView):
    def post(self, request):
        data = request.data['body']
        ic(data)
        serializer =BooardSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'result':f'UPload, {serializer.data.get("name")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)