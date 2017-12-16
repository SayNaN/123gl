"""NextCFD URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
from django.views.static import serve
from CFD import urls
from . import view
from . import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^index$', view._index),
    url(r'^flowsim$', view._flowsim),
    url(r'^flowmech$', view._flowmech),
    url(r'^flowexp$', view._flowexp),
    url(r'^aboutus$', view._aboutus),
    url(r'^contactus$', view._contactus),
    url(r'^authentication$', view._authentication),
    url(r'^register$', view._register),
    url(r'^cfd/', include('CFD.urls')),
    url(r'^/?js/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/js'}),
    url(r'^/?css/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/css'}),
    url(r'^/?images/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/images'}),
    url(r'^/?font/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/font'}),
    url(r'^$', view._index),
]
