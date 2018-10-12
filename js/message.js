//header部分
$('.shopcar').hover(function(){
				$('.shopcar-hidden').stop().fadeIn(200)
			},function(){
				$('.shopcar-hidden').stop().fadeOut(200)
			})
$('.eg #coffee').click(function(){
	window,location.href='search.html'
})
//导航栏部分
$('nav li').mouseenter(function(){
				$(this).css('background','#33c0e0')
			})
			$('nav li').mouseleave(function(){
				if($(this).hasClass('current')){
					$(this).css('background','#33c0e0')
				}else
				$(this).css('background','#2d2d2d')
			})
$('nav li').eq(0).click(function(){
	window,location.href='../index.html'
})
$('nav li').eq(1).click(function(){
	window,location.href='suggest.html'
})
$('nav li').eq(2).click(function(){
	window,location.href='drinks.html'
})
$('nav li').eq(3).click(function(){
	window,location.href='cake.html'
})
$('nav li').eq(4).click(function(){
	window,location.href='diy.html'
})
$('nav li').eq(5).click(function(){
	window,location.href='login.html'
})

//section校验部分
//必填项,姓名,内容,验证码
//电话只能填数字
//邮箱格式

formmessage.onsubmit=function(e){
				var flag=true;
//	校验验证码			
				var input_code=document.getElementById('checkcode').value;
			
			if(input_code.toLowerCase()==''){
				document.getElementById('tip').style.display='block'
				document.getElementById('tip').innerHTML='请输入验证码'
				flag=false;
//				验证码为空,表单不提交
			}else if(input_code.toLowerCase()==code.toLowerCase())
			{
				//验证码正确(表单提交)
				flag=true;
			}else{
			document.getElementById('tip').innerHTML='验证码错误，请输入正确的验证码'
			//验证码不正确,表单不允许提交
			flag=false;
			}
				
//	校验内容			
				//通过name值获取标签：document.form的name值，表单的name值  如果对应表单的name值只有一个，得到的标签是唯一的，如果有多个则是类数组(有value的属性)
				var tagmatter=document.formmess.matter;
				if(tagmatter.value==''){
					tip.innerHTML="请输入内容。";
					flag=false;
				}
	
//	校验电话
var tagphone=document.formmess.phone;
	var reg = /^[0-9]+$/; 
if(tagphone.value!=""&&!reg.test(tagphone.value)){ 
tip.innerHTML="请输入正确的电话";
					flag=false;
}
//校验邮箱	
var tagemail=document.formmess.email;
var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
if(tagemail.value!=""&&!myreg.test(tagemail.value))
{
tip.innerHTML="请输入正确的邮箱";
					flag=false;
}
//	校验姓名
				var tagname=document.formmess.name;
				if(tagname.value==''){
					tip.innerHTML="请输入姓名。";
					flag=false;
				}
				
				if(!flag){
					//阻止事件默认行为
					e.preventDefault();
				}else{
					alert('留言成功，请等待管理员审核')
				}
			}

//验证码校验
var code;//声明一个变量用于存储生成的验证码
		document.getElementById("code").onclick=changeImg;


		function changeImg(){
			
			var arrays=new Array(
				'1','2','3','4','5','6','7','8','9','0',
				'a','b','c','d','e','f','g','h','i','j',
				'k','l','m','n','o','p','q','r','s','t',
				'u','v','w','x','y','z',
				'A','B','C','D','E','F','G','H','I','J',
				'K','L','M','N','O','P','Q','R','S','T',
				'U','V','W','X','Y','Z'				
			);
			code='';//重新初始化验证码
			
			//随机从数组中获取四个元素组成验证码
			for(var i=0;i<4;i++){
			//随机获取一个数组的下标
				var r=parseInt(Math.random()*arrays.length);
				code+=arrays[r];
				
			}
			
			document.getElementById('code').innerHTML=code;//将验证码写入指定区域

		}
		
		//校验验证码(表单被提交时触发)
//		function check(){
//			//获取用户输入的验证码
//			var input_code=document.getElementById('checkcode').value;
//			
//			if(input_code.toLowerCase()==''){
//				document.getElementById('tip').style.display='block'
//				document.getElementById('tip').innerHTML='请输入验证码'
//				return false;
////				验证码为空,表单不提交
//			}else if(input_code.toLowerCase()==code.toLowerCase())
//			{
//				//验证码正确(表单提交)
//				return true;
//			}else{
//			document.getElementById('tip').innerHTML='验证码错误，请输入正确的验证码'
//			//验证码不正确,表单不允许提交
//			return false;
//			}
//		}
//		






//aside部分

$('aside li').eq(0).mouseenter(function(){
	$('.aside-tip li').eq(0).stop().show();
})
$('aside li').eq(0).mouseleave(function(){
	$('.aside-tip li').eq(0).stop().hide();
})
$('aside li').eq(1).mouseenter(function(){
	$('.aside-tip li').eq(1).stop().show();
})
$('aside li').eq(1).mouseleave(function(){
	$('.aside-tip li').eq(1).stop().hide();
})

$('aside li').eq(3).mouseenter(function(){
	$('.aside-tip li').eq(2).stop().show();
})
$('aside li').eq(3).mouseleave(function(){
	$('.aside-tip li').eq(2).stop().hide();
})

$('aside li').eq(4).mouseenter(function(){
	$('.aside-tip li').eq(3).stop().show();
})
$('aside li').eq(4).mouseleave(function(){
	$('.aside-tip li').eq(3).stop().hide();
})

$('aside li').eq(5).mouseenter(function(){
	$('.aside-tip li').eq(4).stop().show();
})
$('aside li').eq(5).mouseleave(function(){
	$('.aside-tip li').eq(4).stop().hide();
})

/*鼠标点击侧边栏图标时显示*/
$('aside li').eq(3).click(function(){
	window,location.href='message.html'
})
//document.form_name.action="aaa.htm";
//window.location.href=
$('aside li').eq(5).click(function(){
	$(window).scrollTop(0)
})

var j=0,k=0,l=0;
$('aside li').eq(0).click(function(){
	if($('.mycollect').css('display')!=='none'){
		$('.mycollect').stop().hide()
		k++
	}
	if($('.myshopcar').css('display')!=='none'){
		$('.myshopcar').stop().hide()
		$('aside').css('right','0px')
		l++
	}
	
	
	if(j%2==0){
	$('.mymessage').stop().show()	
	j++
	}else{
		$('.mymessage').stop().hide()
		j++
	}
	
})
//提交校验
login1.onsubmit=function(e){
				var flag=true;	
				//通过name值获取标签：document.form的name值，表单的name值  如果对应表单的name值只有一个，得到的标签是唯一的，如果有多个则是类数组(有value的属性)
				var tagaccount1=document.formlogin1.account;
				if(tagaccount1.value==''){
					accounttip1.innerHTML="请输入账号";
					accounttip1.style.color='red'
					flag=false;
				}
				var tagpassword1=document.formlogin1.password;
				if(tagpassword1.value==''){
					passwordtip1.innerHTML='请输入密码';
					passwordtip1.style.color='red'
					flag=false;
				}
				if(!flag){
					//阻止事件默认行为
					e.preventDefault();
				}
			}


//var k=0;
$('aside li').eq(1).click(function(){
	if($('aside li').eq(0).css('display')!=='none'){
		$('.mymessage').stop().hide()
		j++
	}
	if($('aside li').eq(2).css('display')!=='none'){
		$('.myshopcar').stop().hide()
		$('aside').css('right','0px')
		l++
	}
	
	if(k%2==0){
	$('.mycollect').stop().show()
	k++
	}else{
		$('.mycollect').stop().hide()
		k++
	}
	
})
//提交校验
login2.onsubmit=function(e){
				var flag=true;	
				//通过name值获取标签：document.form的name值，表单的name值  如果对应表单的name值只有一个，得到的标签是唯一的，如果有多个则是类数组(有value的属性)
				var tagaccount2=document.formlogin2.account;
				if(tagaccount2.value==''){
					accounttip2.innerHTML="请输入账号";
					accounttip2.style.color='red'
					flag=false;
				}
				var tagpassword2=document.formlogin2.password;
				if(tagpassword2.value==''){
					passwordtip2.innerHTML='请输入密码';
					passwordtip2.style.color='red'
					flag=false;
				}
				if(!flag){
					//阻止事件默认行为
					e.preventDefault();
				}
			}


//鼠标覆盖微信登录图标
$('.svgweixin svg').hover(function(){
	$('.svgweixin svg:nth-of-type(2)').stop().show()
	$('.svgweixin svg:nth-of-type(1)').stop().hide()
},function(){
	$('.svgweixin svg:nth-of-type(1)').stop().show()
	$('.svgweixin svg:nth-of-type(2)').stop().hide()
})

//var l=0
$('aside li').eq(2).click(function(){
	if($('aside li').eq(0).css('display')!=='none'){
		$('.mymessage').stop().hide()
		j++
	}
	if($('aside li').eq(1).css('display')!=='none'){
		$('.mycollect').stop().hide()
		k++
	}
	
	if(l%2==0){
	$('.myshopcar').stop().show()
	$('aside').css('right','279px')
	l++
	}else{
		$('.myshopcar').stop().hide()
		$('aside').css('right','0px')
		l++
	}
	
})
$('.myshopcar .left').click(function(){
	$('.myshopcar').stop().hide()
		$('aside').css('right','0px')
		l++
})
$('.myshopcar input').click(function(){
	window,location.href='shopcar.html'
})