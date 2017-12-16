function newprj()

{
 var user_dir=window.prompt("Input Project Name:","");

if(user_dir)

  if(user_dir=="yyc/01"||user_dir=="yyc/02"||user_dir=="yyc/03"||user_dir=="pcj/01"||user_dir=="pcj/02"||user_dir=="pcj/03"||user_dir=="lyq/01"||user_dir=="lyq/02"||user_dir=="lyq/03"||user_dir=="ap/01"||user_dir=="ap/02"||user_dir=="ap/03"||user_dir=="crq/01"||user_dir=="crq/02"||user_dir=="crq/03"||user_dir=="hwq/01"||user_dir=="hwq/02"||user_dir=="hwq/03")

  {

    window.alert("您的工作目录为:/var/www/user/"+user_dir);   

  }

else

 {

  window.alert("对不起，您输入的用户名不存在!您还有一次输入机会！");

  var user_dir=window.prompt("请输入您的目录名:","");

if(user_dir)

  if(user_dir=="yyc/01"||user_dir=="yyc/02"||user_dir=="yyc/03"||user_dir=="pcj/01"||user_dir=="pcj/02"||user_dir=="pcj/03"||user_dir=="lyq/01"||user_dir=="lyq/02"||user_dir=="lyq/03"||user_dir=="ap/01"||user_dir=="ap/02"||user_dir=="ap/03"||user_dir=="crq/01"||user_dir=="crq/02"||user_dir=="crq/03"||user_dir=="hwq/01"||user_dir=="hwq/02"||user_dir=="hwq/03")

  {

    window.alert("您的工作目录为:/var/www/user/"+user_dir);   

  }

else

 {

  window.alert("对不起，您输入的用户名不存在!");

  window.open("","_self");

  window.close();

 }

else

 {

  window.alert("对不起，页面将关闭 !");

  window.open("","_self");

  window.close();

 }

 }

else

 {

  window.alert("对不起，页面将关闭 !");

  window.open("","_self");

  window.close();

 }
}