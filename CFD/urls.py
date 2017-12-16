from django.conf.urls import url
from django.views.static import serve
from NextCFD import settings
from . import views

urlpatterns = [
    url(r'^auth$',      views._auth),
    url(r'^regs$',      views._regs),
    url(r'^dashboard$', views._project),
    url(r'^/?js/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/js'}),
    url(r'^/?css/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/css'}),
    url(r'^/?images/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/images'}),
    url(r'^/?font/(?P<path>.*)$',serve, {'document_root':settings.STATIC_ROOT+'/font'}),
]










