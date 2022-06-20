from rest_framework import serializers
from .models import *

class LearningTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningTopic
        fields = '__all__'

class FacultetSerializer(serializers.ModelSerializer):
    learning_topics = LearningTopicSerializer(many=True, read_only=True)
    
    class Meta:
        model = Facultet
        fields = '__all__'
        
class TrainerSerializer(serializers.ModelSerializer):
    course = serializers.ReadOnlyField(source="course.title")

    class Meta:
        model = Trainer
        fields = '__all__'

class CurriculumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curriculum
        fields = '__all__'

class StudentWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentWork
        fields = '__all__'

class OurWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurWork
        fields = '__all__'

class WebsiteTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteType
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    our_works = OurWorkSerializer(many=True, read_only=True)
    website_types = WebsiteTypeSerializer(many=True, read_only=True)
    
    class Meta:
        model = Service
        fields = '__all__'

class RegisterToCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterToCourse
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    learning_topics = LearningTopicSerializer(many=True, read_only=True)
    curriculum = CurriculumSerializer(many=True, read_only=True)
    facultet = FacultetSerializer(many=True, read_only=True)
    students_works = StudentWorkSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'

class OrderCallSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderCall
        fields = '__all__'

class HeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Header
        fields = '__all__'

class SubscribesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribes
        fields = '__all__'