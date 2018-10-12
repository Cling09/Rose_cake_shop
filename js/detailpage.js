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
	window.location.href='../index.html'
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




//section部分
//收藏(缺少弹出框)
$('.allshoucang').hover(function(){
	$(this).css('color','#ff6537')
},function(){
	$(this).css('color','#666666')
})
$('.allshoucang').click(function(){
	if($(this).children(0).children(1).eq(2).css('display')=='none'){
		$(this).children(0).children(1).eq(2).addClass('mgsvgcurrent')
	console.log('3')
	}else{
		$(this).children(0).children(1).eq(2).removeClass('mgsvgcurrent')
	console.log('4')
	}
})
//在线客服？？

//加入购物车？？

//立即购买
$('.buy').click(function(){
	window,location.href='settlepage.html'
})

//选项卡
 $('.list li').click(function(event) {
            var index=$(this).index();
            // ol li
            $(this).addClass('licurrent');
            $(this).siblings().removeClass('licurrent');
            
            if(index==0){
            	$('.introduce').css('display','block')
            	$('.comment').css('display','none')
            	$('.salemen').css('display','none')
            }else if(index==1){
            	$('.introduce').css('display','none')
            	$('.comment').css('display','block')
            	$('.salemen').css('display','none')
            }else if(index==2){
            	$('.introduce').css('display','none')
            	$('.comment').css('display','none')
            	$('.salemen').css('display','block')
            }
        });
        
//表单校验？？
			//上传评价


formcomment.onsubmit=function(e){
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
				var tagcommentmatter=document.formcom.commentmatter;
				if(tagcommentmatter.value==''){
					tip.innerHTML="评论不能为空";
					flag=false;
				}
				if(tagcommentmatter.value.length<2&&tagcommentmatter.value!=''){
					tip.innerHTML="评论不能少于2个字";
					flag=false;
				}

				if(!flag){
					//阻止事件默认行为
					e.preventDefault();
				}else{
					e.preventDefault();
					var valname=name1.value
var valcomment=commentmatter.value
// 格式化日期
//console.log('1')
				var date=new Date();
				// 模板字符串。不用考虑拼接变量的问题，用``中间如果有变量${变量}
				date=`${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 ${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒 星期${date.getDay()}`;
				
				// 获取用户输入内容
				// 创建标签
				var newTag=document.createElement('li');
				// 追加内容
				newTag.innerHTML='<div class="evauserpic"><img src="../img/detail-div3.jpg" alt="头像" /></div><div class="evadetail"><p class="evadetusermess"><span>'+valname+ 
						'<span class="evamessicon"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-vip1-copy"></use></svg></span></span><span>'+date+
					'</span><span><svg class="icon" aria-hidden="true"><use xlink:href="#icon-31shoucangxuanzhong-copy"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-31shoucangxuanzhong-copy"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-31shoucangxuanzhong-copy"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-31shoucangxuanzhong-copy"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-31shoucangxuanzhong-copy"></use></svg></span></p><p class="evamess">'+valcomment+
				'</p></div>'
			
				// 追加标签
				ol.insertBefore(newTag,ol.children[0]);
				
				// 内容置空
				name1.value='';
				commentmatter.value='';
//				console.log('2')
alert('留言成功，请等待管理员审核')
				}
				



				
	
			
	
}	
				
				
//			}

//验证码生成
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
		changeImg()

//产品评星

//鼠标移入移出时:
//1分
$('.shoucangunselected').eq(0).mouseenter(function(){
	$('.shoucangselected').eq(0).stop().show()
	$('.shoucangunselected').eq(0).stop().hide()
	$('.outstar').css('left','18px')
	$('.starlevel span').eq(0).stop().show()
})
$('.shoucangselected').eq(0).mouseleave(function(){
	$('.shoucangselected').eq(0).stop().hide()
	$('.shoucangunselected').eq(0).stop().show()
	$('.outstar').css('left','0px')
	$('.starlevel span').eq(0).stop().hide()
})
//2分
$('.shoucangunselected').eq(1).mouseenter(function(){
	$('.shoucangselected').eq(0).stop().show()
	$('.shoucangselected').eq(1).stop().show()
	$('.shoucangunselected').eq(0).stop().hide()
	$('.shoucangunselected').eq(1).stop().hide()
	$('.outstar').css('left','36px')
	$('.starlevel span').eq(1).css('display','inline')
})
$('.shoucangselected').eq(1).mouseleave(function(){
	$('.shoucangselected').eq(0).stop().hide()
	$('.shoucangselected').eq(1).stop().hide()
	$('.shoucangunselected').eq(0).stop().show()
	$('.shoucangunselected').eq(1).stop().show()
	$('.outstar').css('left','0px')
	$('.starlevel span').eq(1).css('display','none')
})
//3分
$('.shoucangunselected').eq(2).mouseenter(function(){
	$('.shoucangselected').eq(0).stop().show()
	$('.shoucangselected').eq(1).stop().show()
	$('.shoucangselected').eq(2).stop().show()
	$('.shoucangunselected').eq(0).stop().hide()
	$('.shoucangunselected').eq(1).stop().hide()
	$('.shoucangunselected').eq(2).stop().hide()
	$('.outstar').css('left','54px')
	$('.starlevel span').eq(2).css('display','inline')
})
$('.shoucangselected').eq(2).mouseleave(function(){
	$('.shoucangselected').eq(0).stop().hide()
	$('.shoucangselected').eq(1).stop().hide()
	$('.shoucangselected').eq(2).stop().hide()
	$('.shoucangunselected').eq(0).stop().show()
	$('.shoucangunselected').eq(1).stop().show()
	$('.shoucangunselected').eq(2).stop().show()	
	$('.outstar').css('left','0px')
	$('.starlevel span').eq(2).css('display','none')
})
//4分
$('.shoucangunselected').eq(3).mouseenter(function(){
	$('.shoucangselected').eq(0).stop().show()
	$('.shoucangselected').eq(1).stop().show()
	$('.shoucangselected').eq(2).stop().show()
	$('.shoucangselected').eq(3).stop().show()
	$('.shoucangunselected').eq(0).stop().hide()
	$('.shoucangunselected').eq(1).stop().hide()
	$('.shoucangunselected').eq(2).stop().hide()
	$('.shoucangunselected').eq(3).stop().hide()
	$('.outstar').css('left','72px')
	$('.starlevel span').eq(3).css('display','inline')
})
$('.shoucangselected').eq(3).mouseleave(function(){
	$('.shoucangselected').eq(0).stop().hide()
	$('.shoucangselected').eq(1).stop().hide()
	$('.shoucangselected').eq(2).stop().hide()
	$('.shoucangselected').eq(3).stop().hide()
	$('.shoucangunselected').eq(0).stop().show()
	$('.shoucangunselected').eq(1).stop().show()
	$('.shoucangunselected').eq(2).stop().show()
	$('.shoucangunselected').eq(3).stop().show()	
	$('.outstar').css('left','0px')
	$('.starlevel span').eq(3).css('display','none')
})
//5分
$('.shoucangunselected').eq(4).mouseenter(function(){
	$('.shoucangselected').eq(0).stop().show()
	$('.shoucangselected').eq(1).stop().show()
	$('.shoucangselected').eq(2).stop().show()
	$('.shoucangselected').eq(3).stop().show()
	$('.shoucangselected').eq(4).stop().show()
	$('.shoucangunselected').eq(0).stop().hide()
	$('.shoucangunselected').eq(1).stop().hide()
	$('.shoucangunselected').eq(2).stop().hide()
	$('.shoucangunselected').eq(3).stop().hide()
	$('.shoucangunselected').eq(4).stop().hide()
	$('.outstar').css('left','90px')
	$('.starlevel span').eq(4).css('display','inline')
})
$('.shoucangselected').eq(4).mouseleave(function(){
	$('.shoucangselected').eq(0).stop().hide()
	$('.shoucangselected').eq(1).stop().hide()
	$('.shoucangselected').eq(2).stop().hide()
	$('.shoucangselected').eq(3).stop().hide()
	$('.shoucangselected').eq(4).stop().hide()
	$('.shoucangunselected').eq(0).stop().show()
	$('.shoucangunselected').eq(1).stop().show()
	$('.shoucangunselected').eq(2).stop().show()
	$('.shoucangunselected').eq(3).stop().show()	
	$('.shoucangunselected').eq(4).stop().show()	
	$('.outstar').css('left','0px')
	$('.starlevel span').eq(4).css('display','none')
})
//点击选择评星
//1分
$('.shoucangselected').eq(0).click(function(){
	console.log('1')
$('.shoucangunselected').eq(0).css('display','none')
$('.shoucangselected').eq(0).css('display','inline')
})
//2分
$('.shoucangselected').eq(1).click(function(){
	console.log('2')
$('.shoucangunselected').eq(1).css('display','none')
$('.shoucangselected').eq(1).css('display','inline')
})
//3分
$('.shoucangselected').eq(2).click(function(){
	console.log('3')
$('.shoucangunselected').eq(2).css('display','none')
$('.shoucangselected').eq(2).css('display','inline')
})
//4分
$('.shoucangselected').eq(3).click(function(){
	console.log('4')
$('.shoucangunselected').eq(3).css('display','none')
$('.shoucangselected').eq(3).css('display','inline')
})
//5分
$('.shoucangselected').eq(4).click(function(){
	console.log('5')
$('.shoucangunselected').eq(4).css('display','none')
$('.shoucangselected').eq(4).css('display','inline')
})




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