from django.contrib import admin
from .models import *
from django_summernote.admin import SummernoteModelAdmin

class SummernoteAdmin(SummernoteModelAdmin):
    summernote_fields = 'description'

# admin.site.site_header = "Global IT Administration"
admin.site.register(Course)
admin.site.register(Facultet)
admin.site.register(Trainer)
admin.site.register(LearningTopic)
admin.site.register(Curriculum, SummernoteAdmin)
admin.site.register(StudentWork)
admin.site.register(Service)
admin.site.register(OurWork)
admin.site.register(WebsiteType, SummernoteAdmin)
admin.site.register(RegisterToCourse)
admin.site.register(OrderCall)
admin.site.register(Header)
admin.site.register(Subscribes)
