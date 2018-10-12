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

//轮播图部分
 var num=1
        $('.pic ol li').mouseenter(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('current');
            $(this).siblings().removeClass('current');


             // $('ul li').eq(index).css('z-index', num++);
            $('.pic ul li').eq(index).fadeIn(800)
             $('.pic ul li').eq(index).siblings().fadeOut(100)
        });
        
var num=0;
var timer
function go(){
	timer=setInterval(function(){
		num++;
		if(num>2){
			num=0;
			
		}
		if(num==2){
				$('.pic ol li').eq(0).addClass('current')
				$('.pic ol li').eq(0).siblings().removeClass('current')
				$('.pic ul li').eq(0).fadeIn(800)
             $('.pic ul li').eq(0).siblings().fadeOut(100)
		}
	
		$('.pic ol li').eq(num).addClass('current')
		$('.pic ol li').eq(num).siblings().removeClass('current')
		$('.pic ul li').eq(num).fadeIn(800)
             $('.pic ul li').eq(num).siblings().fadeOut(100)
	},2000)
}
go()

$('.pic').hover(function() {
	clearInterval(timer)
}, function() {
	go()
});


left.onclick=function(){
				num--;
				if(num<0){
					num=1;
				}
			$('.pic ul li').eq(num).show()
             $('.pic ul li').eq(num).siblings().hide()
             
				 $('.pic ol li').eq(num).addClass('current').siblings().removeClass('current');
           	
			}
			
			//下一张
			right.onclick=function(){
				num++;
				if(num>1){
					num=0
				}
				$('.pic ul li').eq(num).show()
             $('.pic ul li').eq(num).siblings().hide()
             
 $('.pic ol li').eq(num).addClass('current').siblings().removeClass('current');

			}
			

//section部分——表单校验



//必填项 账号 密码 重复密码 姓名 手机
//密码不能少于4位, 可数字字母符号
//确认密码与密码相同
//邮箱格式
//手机号7-11位数字
registered.onsubmit=function(e){
				var flag=true;
				
				//校验电话
var tagphone=document.formreg.phone;
var regp = /^[0-9]+$/; 
if(tagphone.value!=""&&!regp.test(tagphone.value)){ 
//phonetip.innerHTML="请输入正确的电话";
tip.innerHTML="请输入正确的电话";
tip.style.top='230px'
	flag=false;
}

//校验手机
var tagmobile=document.formreg.mobile;
				if(tagmobile.value==''){
//					mobiletip.innerHTML="请输入手机";
					tip.innerHTML="请输入手机";
					tip.style.top='192px'
					flag=false;
				}
				var regmp = /^[0-9]+$/; 
if(tagmobile.value!=""&&!regmp.test(tagmobile.value)){ 
//mobiletip.innerHTML="手机号码不正确，请输入7-11位的数字";
tip.innerHTML="手机号码不正确，请输入7-11位的数字";
tip.style.top='192px'
					flag=false;
}
if((tagmobile.value.length>11||tagmobile.value.length<7)&&tagmobile.value!=""){
//					mobiletip.innerHTML="手机号码不正确，请输入7-11位的数字";
					tip.innerHTML="手机号码不正确，请输入7-11位的数字";
					tip.style.top='192px'
					flag=false;
				}
			
//校验邮箱
var tagemail=document.formreg.email;
var regem = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
if(tagemail.value!=""&&!regem.test(tagemail.value))
{
//emailtip.innerHTML="请输入正确的邮箱";
tip.innerHTML="请输入正确的邮箱";
tip.style.top='155px'
					flag=false;
}				
	
//校验姓名
var tagname=document.formreg.name;
				if(tagname.value==''){
//					nametip.innerHTML="请输入姓名";
					tip.innerHTML="请输入姓名";
					tip.style.top='118px'
					flag=false;
				}
//校验密码				
var tagpassword=document.formreg.password1;
				if(tagpassword.value==''){
//					passwordtip.innerHTML="请输入密码";
					tip.innerHTML="请输入密码";
					tip.style.top='44px'
					flag=false;
				}				
				if(tagpassword.value.length<4&&tagpassword.value!=''){
//					passwordtip.innerHTML="密码不能少于4位";
					tip.innerHTML="密码不能少于4位";
					tip.style.top='44px'
					flag=false;
				}
				var regpd = /^[a-zA-Z0-9_\.\-\+]*$/; 
//				/^[a-zA-Z]*$/
				if(tagpassword.value!=""&&!regpd.test(tagpassword.value)){
//					passwordtip.innerHTML="密码只能由字母、数字、符号组成";
					tip.innerHTML="密码只能由字母、数字、符号组成";
					tip.style.top='44px'
					flag=false;
				}	
				
//校验确认密码
var tagrepassword=document.formreg.repassword;
				if(tagrepassword.value!=tagpassword.value){
//					repasswordtip.innerHTML="您输入的确认密码与密码不一致。";
					tip.innerHTML="您输入的确认密码与密码不一致。";
					tip.style.top='81px'
					flag=false;
				}

		

				
				
				
//校验账号
var tagaccount=document.formreg.account1;
				if(tagaccount.value==''){
//					accounttip.innerHTML="请输入账号";
					tip.innerHTML="请输入账号";
					tip.style.top='7px'
					flag=false;
					
				}


if(!flag){
					//阻止事件默认行为
					e.preventDefault();
				}
}















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