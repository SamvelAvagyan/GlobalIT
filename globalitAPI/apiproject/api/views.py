from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .serializers import *
from .models import *
from django.core.mail import send_mail
from django.conf import settings

class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def perform_create(self, serializer):
        serializer.save()

class CourseDetail(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class FacultetList(generics.ListCreateAPIView):
    queryset = Facultet.objects.all()
    serializer_class = FacultetSerializer

    def perform_create(self, serializer):
        serializer.save()

class FacultetDetail(generics.RetrieveAPIView):
    queryset = Facultet.objects.all()
    serializer_class = FacultetSerializer

class TrainerList(generics.ListCreateAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

    def perform_create(self, serializer):
        serializer.save()

class TrainerDetail(generics.RetrieveAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

class LearningTopicList(generics.ListCreateAPIView):
    queryset = LearningTopic.objects.all()
    serializer_class = LearningTopicSerializer

    def perform_create(self, serializer):
        serializer.save()

class LearningTopicDetail(generics.RetrieveAPIView):
    queryset = LearningTopic.objects.all()
    serializer_class = LearningTopicSerializer


class CurriculumList(generics.ListCreateAPIView):
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer

    def perform_create(self, serializer):
        serializer.save()

class CurriculumDetail(generics.RetrieveAPIView):
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer

class StudentWorkList(generics.ListCreateAPIView):
    queryset = StudentWork.objects.all()
    serializer_class = StudentWorkSerializer

    def perform_create(self, serializer):
        serializer.save()

class StudentWorkDetail(generics.RetrieveAPIView):
    queryset = StudentWork.objects.all()
    serializer_class = StudentWorkSerializer

class ServiceList(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    def perform_create(self, serializer):
        serializer.save()

class ServiceDetail(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class OurWorkList(generics.ListCreateAPIView):
    queryset = OurWork.objects.all()
    serializer_class = OurWorkSerializer

    def perform_create(self, serializer):
        serializer.save()

class OurWorkDetail(generics.RetrieveAPIView):
    queryset = OurWork.objects.all()
    serializer_class = OurWorkSerializer

class WebsiteTypeList(generics.ListCreateAPIView):
    queryset = WebsiteType.objects.all()
    serializer_class = WebsiteTypeSerializer

    def perform_create(self, serializer):
        serializer.save()

class WebsiteTypeDetail(generics.RetrieveAPIView):
    queryset = WebsiteType.objects.all()
    serializer_class = WebsiteTypeSerializer

class RegisterToCourseList(generics.ListCreateAPIView):
    queryset = RegisterToCourse.objects.all()
    serializer_class = RegisterToCourseSerializer

    def perform_create(self, serializer):
        serializer.save()
        subject = 'Դասընթացի գրանցում'
        message = f'Ողջույն, ես {serializer["name"].value} {serializer["surname"].value}ն եմ: Ցանկանում եմ գրանցվել {serializer["course"].value} դասընթացին: Հեռախոս - {serializer["phone"].value}, էլ. փոստ - {serializer["email"].value}, վայր - {serializer["place"].value}, լեզու - {serializer["language"].value}, տարբերակ - {serializer["option"].value}:'
        send_mail_message(subject, message)

class RegisterToCourseDetail(generics.RetrieveAPIView):
    queryset = OrderCall.objects.all()
    serializer_class = OrderCallSerializer

class OrderCallDetail(generics.RetrieveAPIView):
    queryset = RegisterToCourse.objects.all()
    serializer_class = RegisterToCourseSerializer

class OrderCallList(generics.ListCreateAPIView):
    queryset = OrderCall.objects.all()
    serializer_class = OrderCallSerializer

    def perform_create(self, serializer):
        serializer.save()
        subject = 'Պատվիրել զանգ'
        message = f'Ողջույն, {serializer["fullname"].value}: Օր/ժամ - {serializer["date"].value}, Հեռախոս - {serializer["phone"].value}:'
        send_mail_message(subject, message)

def send_mail_message(subject, message):
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email_from]
    send_mail(subject, message , email_from ,recipient_list )


class HeaderList(generics.ListCreateAPIView):
    queryset = Header.objects.all()
    serializer_class = HeaderSerializer

    def perform_create(self, serializer):
        serializer.save()

class HeaderDetail(generics.RetrieveAPIView):
    queryset = Header.objects.all()
    serializer_class = HeaderSerializer

class SubscribesList(generics.ListCreateAPIView):
    queryset = Subscribes.objects.all()
    serializer_class = SubscribesSerializer

    def perform_create(self, serializer):
        serializer.save()

class SubscribesDetail(generics.RetrieveAPIView):
    queryset = Subscribes.objects.all()
    serializer_class = SubscribesSerializer

# @api_view(['GET'])
# def apiOverview(request):
#     api_urls = {
#         'List': '/course-list/',
#         'Detail View': '/course-detail/<str:pk>/',
#         'Create': '/course-create/',
#         'Update': '/course-update/<str:pk>/',
#         'Delete': '/course-delete/<str:pk>/',
#     }

#     return Response(api_urls)

# @api_view(['GET'])
# def courseList(request):
#     courses = Course.objects.all()
#     serializer = CourseSerializer(courses, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def courseDetail(request, pk):
#     course = Course.objects.get(id=pk)
#     serializer = CourseSerializer(course, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# def courseCreate(request):
#     serializer = CourseSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['POST'])
# def courseUpdate(request, pk):
#     course = Course.objects.get(id=pk)
#     serializer = CourseSerializer(instance=task, data=request.data)
#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['DELETE'])
# def courseDelete(request, pk):
#     course = Course.objects.get(id=pk)
#     course.delete()
#     return Response('Item successfully delete!')
