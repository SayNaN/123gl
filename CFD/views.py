# -*- coding: utf-8 -*-
#!/usr/bin/python
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponseRedirect,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
import json,time
from django.contrib.auth.models import User
from .models import UserProfile

@csrf_exempt
def _auth(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    return_json = {}
    if user is not None and user.is_active:
        login(request, user)
        return_json['ret']=1    # Redirect to a success page.
        return HttpResponseRedirect("/cfd/dashboard")  
    else:
        return_json['ret']=0    # Return a 'disabled account' error message
    return HttpResponse(json.dumps(return_json), content_type='application/json')

@csrf_exempt
def _regs(request):
    curtime=time.strftime("%Y-%m-%d %H:%M:%S",time.localtime());  
    
    if request.user.is_authenticated():#a*******************  
        return HttpResponseRedirect("/cfd/dashboard")  
    try:  
        if request.method=='POST':  
            username =request.POST['username']
            password =request.POST['password']
            email    =request.POST['email']
            phone    =request.POST['phone']
            work     =request.POST['work']
            error={}
              
            '''registerForm=RegisterForm({'username':username,'password1':password1,'password2':password2,'email':email})#b********  
            if not registerForm.is_valid():  
                errors.extend(registerForm.errors.values())  
                return render_to_response("blog/userregister.html",RequestContext(request,{'curtime':curtime,'username':username,'email':email,'errors':errors}))  
            if password1!=password2:  
                errors.append("两次输入的密码不一致!")  
                return render_to_response("blog/userregister.html",RequestContext(request,{'curtime':curtime,'username':username,'email':email,'errors':errors}))  
            '''
            filterResult=User.objects.filter(username=username)#c************  
            if len(filterResult)>0:
                error['ret']=0
                error['msg']="用户名已存在"
                return HttpResponse(json.dumps(error),content_type='application/json')
              
            user=User()#d************************  
            user.username=username  
            user.set_password(password)  
            user.email=email  
            user.save()  
            #用户扩展信息 profile  
            profile=UserProfile()#e*************************  
            profile.user_id=user.id
            profile.phone=phone
            profile.work =work
            profile.save()  
            #登录前需要先验证  
            newUser=auth.authenticate(username=username,password=password)#f***************  
            if newUser is not None:  
                auth.login(request, newUser)#g*******************  
                return HttpResponseRedirect("/cfd/dashboard")  
    except Exception,e:
        error['ret']=0
        error['msg']="输入信息不全，请重新输入"
        return HttpResponse(json.dumps(error),content_type='application/json')

@csrf_exempt
def _project(request):
    context = {}
    context['hidefoot']=True;
    return render(request, 'project.html', context)
