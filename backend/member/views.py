from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from icecream import ic

from member.models import MemberVO
from member.serializers import MemberSerializers
from rest_framework.decorators import api_view, parser_classes # 주어진 상황 및 용도에 따라 어떤 객체에 덧붙이는 패턴으로 기능확장이
from rest_framework import serializers
from rest_framework.response import Response


@api_view(['GET', 'POST','DELETE'])
@parser_classes([JSONParser])
def members(request):
    print('=== 여기까지는 왔따!!')
    if request.method == 'GET':
        all_members = MemberVO.objects.all()
        # ic(all_members)
        # serializer =MemberSerializers(all_members, many=True)
        # ic(serializer.data)
        serializer = MemberSerializers(all_members, many=True)##여기 불러온serialize는 서버에서 끄내올때 쓰느 serialize임
        return JsonResponse(data=serializer.data, safe=False)#저장하지 않겠당
    elif request.method == 'POST':
        new_member = request.data['body']
        ic(new_member)
        serializer = MemberSerializers(data=new_member)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)  # 저장하지 않겠당

@api_view(['GET', 'PUT','DELETE'])
def member(request, pk):
    if request.method == 'GET':
        serializer =MemberSerializers()
        return JsonResponse(serializer.data, safe=False)#저장하지 않겠당
    elif request.method == 'POST':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)  # 저장하지 않겠당
    elif request.method == 'DELETE':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)  # 저장하지 않겠당