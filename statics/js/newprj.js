function newprj()

{
 var user_dir=window.prompt("Input Project Name:","");

if(user_dir)

  if(user_dir=="yyc/01"||user_dir=="yyc/02"||user_dir=="yyc/03"||user_dir=="pcj/01"||user_dir=="pcj/02"||user_dir=="pcj/03"||user_dir=="lyq/01"||user_dir=="lyq/02"||user_dir=="lyq/03"||user_dir=="ap/01"||user_dir=="ap/02"||user_dir=="ap/03"||user_dir=="crq/01"||user_dir=="crq/02"||user_dir=="crq/03"||user_dir=="hwq/01"||user_dir=="hwq/02"||user_dir=="hwq/03")

  {

    window.alert("���Ĺ���Ŀ¼Ϊ:/var/www/user/"+user_dir);   

  }

else

 {

  window.alert("�Բ�����������û���������!������һ��������ᣡ");

  var user_dir=window.prompt("����������Ŀ¼��:","");

if(user_dir)

  if(user_dir=="yyc/01"||user_dir=="yyc/02"||user_dir=="yyc/03"||user_dir=="pcj/01"||user_dir=="pcj/02"||user_dir=="pcj/03"||user_dir=="lyq/01"||user_dir=="lyq/02"||user_dir=="lyq/03"||user_dir=="ap/01"||user_dir=="ap/02"||user_dir=="ap/03"||user_dir=="crq/01"||user_dir=="crq/02"||user_dir=="crq/03"||user_dir=="hwq/01"||user_dir=="hwq/02"||user_dir=="hwq/03")

  {

    window.alert("���Ĺ���Ŀ¼Ϊ:/var/www/user/"+user_dir);   

  }

else

 {

  window.alert("�Բ�����������û���������!");

  window.open("","_self");

  window.close();

 }

else

 {

  window.alert("�Բ���ҳ�潫�ر� !");

  window.open("","_self");

  window.close();

 }

 }

else

 {

  window.alert("�Բ���ҳ�潫�ر� !");

  window.open("","_self");

  window.close();

 }
}