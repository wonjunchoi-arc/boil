# from rest_framework.parsers import JSONParser
# from django.http.response import JsonResponse, HttpResponse, Http404
# from rest_framework import status
# from icecream import ic
#
# from member.models import MemberVO
# from member.serializers import MemberSerializers
# from rest_framework.decorators import api_view, parser_classes # 주어진 상황 및 용도에 따라 어떤 객체에 덧붙이는 패턴으로 기능확장이
# from rest_framework import serializers
# from rest_framework.response import Response
#
#
# @api_view(['GET', 'POST','PUT','DELETE'])
# @parser_classes([JSONParser])
# def members(request):
#     print('=== 여기까지는 왔따!!')
#     if request.method == 'GET':
#         all_members = MemberVO.objects.all()
#         # ic(all_members)
#         # serializer =MemberSerializers(all_members, many=True)
#         # ic(serializer.data)
#         serializer = MemberSerializers(all_members, many=True)##여기 불러온serialize는 서버에서 끄내올때 쓰느 serialize임
#         ic(serializer.data)
#         return JsonResponse(data=serializer.data, safe=False)#저장하지 않겠당
#     elif request.method == 'POST':
#         new_member = request.data['body']
#         ic(new_member)
#         serializer = MemberSerializers(data=new_member)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         serializer = MemberSerializers()
#         return JsonResponse(serializer.data, safe=False)  # 저장하지 않겠당
#
# @api_view(['GET','POST', 'PUT','DELETE'])
# def member(request):
#     if request.method == 'GET':
#         serializer =MemberSerializers()
#         return JsonResponse(serializer.data, safe=False)#저장하지 않겠당
#     elif request.method == 'POST':
#         data = request.data['body']
#         pk = data['username']
#         user_input_password = data['password']
#         print(f'----------- ok 아이디 :  ------------- {pk}')
#         print(f'----------- ok 비밀번호 :  ------------- {user_input_password}')
#         # member = MemberVO.objects.get()
#         if MemberVO.objects.filter(pk=pk).exists():
#             member = MemberVO.objects.get(pk=pk)
#             ic('-----------------------------')
#             ic(member)
#             if user_input_password == member.password :
#                 print('----------- ok 2-------------')
#                 serializers = MemberSerializers(member, many=False)
#                 ic(data)
#                 ic(serializers.data)
#                 ic(type(serializers.data))
#                 ic(serializers)
#                 return JsonResponse(data=serializers.data,status=201)
#             else:
#                 print('비밀번호가 다릅니다')
#                 return JsonResponse({'result':'PASSWORD-FAIL'}, status=201)
#         else:
#             Response({'result': 'ID-FAIL'},status=201)  #http Response
#
#     elif request.method == 'PUT':
#         data=request.data['body']
#         updated_member=data['member']
#         ic(data)
#         ic(updated_member)
#         pk=updated_member['username']
#         member = MemberVO.objects.get(pk=pk)
#         user_change_password = updated_member['password']
#         ic(user_change_password)
#
#         serializer = MemberSerializers(member, data=data['member'],partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse({'result':f'Update Success,{serializer.data.get("name")}'}, status=201)
#         return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         serializer = MemberSerializers()
#         return JsonResponse(serializer.data, safe=False)
#
#
# '''
# @api_view(['GET', 'PUT','DELETE'])
# def member(request, pk):
#     if request.method == 'GET':
#         serializer =MemberSerializers()
#         return JsonResponse(serializer.data, safe=False)#저장하지 않겠당
#     elif request.method == 'POST':
#         serializer = MemberSerializers()
#         return JsonResponse(serializer.data, safe=False)  # 저장하지 않겠당
#     elif request.method == 'DELETE':
#         serializer = MemberSerializers()
#         return JsonResponse(serializer.data, safe=False)  # 저장하지 않겠당
# '''

from django.core.exceptions import ObjectDoesNotExist
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse
from rest_framework import status
from member.models import MemberVO
from rest_framework.response import Response
from member.serializers import MemberSerializers
from rest_framework.decorators import api_view, parser_classes
from icecream import ic
import datetime
now = datetime.datetime.now()
@api_view(['GET', 'POST'])
@parser_classes([JSONParser])
def members(request):
    if request.method == 'GET':
        all_members = MemberVO.objects.all()
        serializer = MemberSerializers(all_members, many=True)
        ic(serializer.data) ## [OrderedDict([('username', '11'), ('password', '33'), ('name', '11'), ('email', '123123@asdsd.com')]).....]  ,
        return JsonResponse(data=serializer.data, safe=False)
    elif request.method == 'POST':
        new_member = request.data['body']
        ic(new_member)
        serializer = MemberSerializers(data = new_member)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'result':f'Welcome, {serializer.data.get("name")}'}, status=201)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def member(request, pk):
    try:
        print(f'------ {now.strftime("%Y-%m-%d %H:%M:%S")} ------') ## 시간을 찍어보는 코드
        member = MemberVO.objects.filter(username=pk)
        if member is not None:
            ic(member)
        else:
            print('member is None')
    except MemberVO.DoesNotExist :
        return JsonResponse({'result': 'USERNAME-FAIL'}, status=201)

    if request.method == 'GET':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'DELETE':
        MemberVO.objects.get(username=pk).delete()
        return JsonResponse({'result': 'Deleted Complete'}, status=201)

@api_view(['PUT'])
def member_modify(request):
    data = request.data['body']
    ic(data)
    update_member = data['member']
    ic(update_member)
    pk = update_member['username']
    member = MemberVO.objects.get(pk=pk)
    user_change_password = update_member['password']
    ic(user_change_password)
    serializer = MemberSerializers(member, data=data['member'], partial=True) ## 부분만 변형한다는 개념
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({'result': f'Update Success , {serializer.data.get("name")}'}, status=201)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    try:
        data = request.data['body']
        pk = data['username']
        user_input_password = data['password']
        member = MemberVO.objects.get(pk=pk)
        ic(member)
        if user_input_password == member.password:
            serializer = MemberSerializers(member, many=False)
            ic(type(serializer.data))
            return JsonResponse(data=serializer.data, safe=False)
        else:
            print('비밀번호가 다릅니다.')
            return JsonResponse({'result': 'PASSWORD-FAIL'}, status=201)
    except MemberVO.DoesNotExist:
        return JsonResponse({'result': 'USERNAME-FAIL'}, status=201)


    return HttpResponse(status=104)