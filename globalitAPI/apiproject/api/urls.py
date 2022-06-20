from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    #path('', views.apiOverview, name="api-overview"),
    path('course-list/', views.CourseList.as_view()),
    path('course-detail/<int:pk>/', views.CourseDetail.as_view()),
    path('facultet-list/', views.FacultetList.as_view()),
    path('facultet-detail/<int:pk>/', views.FacultetDetail.as_view()),
    path('trainer-list/', views.TrainerList.as_view()),
    path('trainer-detail/<int:pk>/', views.TrainerDetail.as_view()),
    path('learning-topic-list/', views.LearningTopicList.as_view()),
    path('learning-topic-detail/<int:pk>/', views.LearningTopicDetail.as_view()),
    path('curriculum-list/', views.CurriculumList.as_view()),
    path('curriculum-detail/<int:pk>/', views.CurriculumDetail.as_view()),
    path('student-work-list/', views.StudentWorkList.as_view()),
    path('student-work-detail/<int:pk>/', views.StudentWorkDetail.as_view()),
    path('service-list/', views.ServiceList.as_view()),
    path('service-detail/<int:pk>/', views.ServiceDetail.as_view()),
    path('our-work-list/', views.OurWorkList.as_view()),
    path('our-work-detail/<int:pk>/', views.OurWorkDetail.as_view()),
    path('website-type-list/', views.WebsiteTypeList.as_view()),
    path('website-type-detail/<int:pk>/', views.WebsiteTypeDetail.as_view()),
    path('register-to-course-list/', views.RegisterToCourseList.as_view()),
    path('register-to-course-detail/<int:pk>/', views.RegisterToCourseDetail.as_view()),
    path('order-call-list/', views.OrderCallList.as_view()),
    path('order-call-course-detail/<int:pk>/', views.OrderCallDetail.as_view()),
    path('subscribes-list/', views.SubscribesList.as_view()),
    path('subscribes-detail/<int:pk>/', views.SubscribesDetail.as_view()),
    path('header-list/', views.HeaderList.as_view()),
    path('header-detail/<int:pk>/', views.HeaderDetail.as_view()),
    # path('course-list/', views.courseList, name="course-list"),
    # path('course-detail/<str:pk>/', views.courseDetail, name="course-detail"),
    # path('course-create/', views.courseCreate, name="course-create"),
    # path('course-update/<str:pk>/', views.courseUpdate, name="course-update"),
    # path('course-delete/<str:pk>/', views.courseDelete, name="course-delete"),
]

urlpatterns = format_suffix_patterns(urlpatterns)