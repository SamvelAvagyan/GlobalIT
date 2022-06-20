from django.db import models
from ckeditor.fields import RichTextField
from colorfield.fields import ColorField

class LearningTopic(models.Model):
    title = models.CharField(blank=True, max_length=50)
    image = models.FileField(blank=True, upload_to='images/course/learning-topic')
    description = models.TextField(default='')
    draft =  models.BooleanField(default=False)
    
    def __str__(self):
        return self.title

class Facultet(models.Model):
    title = models.CharField(blank=True, max_length=50)
    image = models.FileField(blank=True, upload_to='images/facultet/images/')
    hover_image = models.FileField(blank=True, upload_to='images/facultet/hover-images/')
    learning_topics = models.ManyToManyField(LearningTopic)
    draft =  models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Curriculum(models.Model):
    button_text = models.CharField(max_length=50)
    description = models.TextField(default='')
    draft =  models.BooleanField(default=False)

    def __str__(self):
        return self.button_text

class StudentWork(models.Model):
    title = models.CharField(blank=True, max_length=50)
    image = models.FileField(blank=True, upload_to='images/course/students-works')

    def __str__(self):
        return self.title

class Course(models.Model):
    title = models.CharField(blank=True, max_length=50)
    div_image = models.FileField(blank=True, upload_to='images/course/div-images')
    header_image = models.FileField(blank=True, upload_to='images/course/header-images')
    title_color = ColorField(default='#FF0000')
    description = models.TextField(default='')
    facultet = models.ManyToManyField(Facultet)  
    option_group = models.CharField(blank=True, max_length=100, help_text="Խմբային տարբերակի ուսանողների քանակը")
    option_personal = models.BooleanField(default=False, help_text="Անհատական տարբերակ")
    armenian = models.BooleanField(default=False)
    russian = models.BooleanField(default=False)
    english = models.BooleanField(default=False)
    personal_money = models.PositiveIntegerField(default=0)
    group_money = models.PositiveIntegerField(default=0)
    course_duration = models.CharField(blank=True, max_length=50)
    weekly_time = models.PositiveIntegerField(default=0)
    lesson_duration = models.CharField(blank=True, max_length=50)
    learning_topics = models.ManyToManyField(LearningTopic)
    curriculum = models.ManyToManyField(Curriculum)
    average_salary = models.PositiveIntegerField(default=0)
    average_salary_description = models.TextField(default='')
    salary_diagram = models.FileField(blank=True, upload_to='images/course/salary_diagrams')
    certificate = models.FileField(blank=True, upload_to='images/course/certificates')
    draft =  models.BooleanField(default=False)
    students_works = models.ManyToManyField(StudentWork)

    def __str__(self):
        return self.title

class Trainer(models.Model):
    name = models.CharField(blank=True, max_length=20)
    surname = models.CharField(blank=True, max_length=25)
    photo = models.FileField(blank=True, upload_to='images/trainers')
    course =  models.ForeignKey(Course, on_delete=models.SET_DEFAULT, default=None, related_name='course', null=True)
    draft =  models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} {self.surname} ({self.course})"

class OurWork(models.Model):
    title = models.CharField(max_length=20)
    screen = models.FileField(blank=True,upload_to = "images/service/our-works")

    def __str__(self):
        return self.title

class WebsiteType(models.Model):
    button_text =  models.CharField(blank=True, max_length=50)
    title = models.CharField(blank=True, max_length=50)
    description = models.TextField(default='')

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(blank=True, max_length=50)
    div_image = models.FileField(blank=True, upload_to='images/service/div-images')
    header_image = models.FileField(blank=True, upload_to='images/service/header-images')
    description = models.TextField(default='')
    you_will_receive_icon1 = models.FileField(blank=True, upload_to='images/service/you-will-receive')
    you_will_receive_icon2 = models.FileField(blank=True, upload_to='images/service/you-will-receive')
    you_will_receive_icon3 = models.FileField(blank=True, upload_to='images/service/you-will-receive')
    you_will_receive_title1 = models.CharField(blank=True, max_length=30)
    you_will_receive_title2 = models.CharField(blank=True, max_length=30)
    you_will_receive_title3 = models.CharField(blank=True, max_length=30)
    our_works = models.ManyToManyField(OurWork)
    website_types = models.ManyToManyField(WebsiteType)

    def __str__(self):
        return self.title

class RegisterToCourse(models.Model):
    name = models.CharField(blank=True, max_length=20)
    surname = models.CharField(blank=True, max_length=25)
    phone = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50)
    language = models.CharField(blank=True, max_length=15)

    PLACE_CHOICES = [('Երևան', 'Երևան'), ('Մարզերում', 'Մարզերում'), ('Միջազգային', 'Միջազգային')]
    place = models.CharField(
        max_length = 15,
        choices = PLACE_CHOICES,
        default = '',
    )
    
    LANGUAGE_CHOICES = [('Հայերեն', 'Հայերեն'), ('Русский', 'Русский'), ('English', 'English')]
    language = models.CharField(
        max_length = 15,
        choices = LANGUAGE_CHOICES,
        default = '',
    )

    OPTION_CHOICES = [('Անհատական', 'Անհատական'), ('Խմբային', 'Խմբային')]
    option = models.CharField(
        max_length = 15,
        choices = OPTION_CHOICES,
        default = '',
    )

    course = models.CharField(blank=True, max_length=50)

    def __str__(self):
        return self.name + " " + self.surname

class OrderCall(models.Model):
    fullname = models.CharField(blank=True, max_length=50)
    date = models.DateTimeField(default=None)
    phone = models.CharField(blank=True, max_length=30)

    def __str__(self):
        return self.fullname

class Header(models.Model):
    title = models.CharField(max_length=50)
    header_image = models.FileField(blank=True, upload_to='images/Home_Page/header-images')
    draft = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.title}'

class Subscribes(models.Model):
    email = models.EmailField()

    def __str__(self):
        return f'{self.email}'

    class Meta:
        verbose_name = "Mail"
        verbose_name_plural = "Mails"