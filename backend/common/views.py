from django.shortcuts import render

from rest_framework.response import Response
from  rest_framework.views import APIView

class Connection(APIView):
    def get(self, request):
        return Response({'connection':'SUCCESS'})  #reacting의 greeting, 딕셔너리 형태 벨류값이 데이터이당
