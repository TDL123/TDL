
var JsonProject={
	//header节点
	navNode:$('.nav'),
	productNode:$('.nav').children().eq(1),
	serviceNode:$('.nav').children().eq(2),
	aboutNode:$('.nav').children().eq(4),
	productList:$('.product'),
	productOne:$('.productOne'),
	productTwo:$('.productTwo'),
	productThree:$('.productThree'),
	serviceList:$('.service'),
	serviceOne:$('.serviceOne'),
	serviceTwo:$('.serviceTwo'),
	serviceThree:$('.serviceThree'),
	serviceFour:$('.serviceFour'),
	serviceFive:$('.serviceFive'),
	aboutList:$('.about'),
	//banner节点
	leftNode:$('.bannerLeft'),
	rightNode:$('.bannerRight'),
	bannerNode:$('#banner'),
	bannerSpan:$('.banner_span'),
	bannerUl:$('.bannerImg'),
	
	//四个圆节点
	CircleSpan:$('#circle').find('span'),
	lisNode:$('#circle').find('li'),
	enterAndLeave:function(obj,list){//nav移入移出函数
		obj.hover(
			function(){//移入
				list.show();
			},
			function(){//移出
				list.hide();
			})
	},
	listFun:function(list){//list移入移出函数
		list.hover(
	function(){//移入
		list.show();
		},
	function(){//移出
		list.hide();
		});
	}
}
//banner幻灯片放映
//banner左右按钮淡入淡出
	JsonProject.bannerNode.hover(
			function(){//移入
				$('.bannerLeft,.bannerRight').stop().fadeIn();
				window.clearInterval(autoDo);
			},
			function(){//移出
				$('.bannerLeft,.bannerRight').stop().fadeOut();
				autoDo=window.setInterval(function(){JsonProject.rightNode.click();},3000);
			});
	//banner图片淡入淡出
	JsonProject.bannerSpan.children().mouseover(function(){
		var oldPos=$('.current').index();
		var nowPos=$(this).index();
		if($(this).is('.current')){
			return;
		}else{
		JsonProject.bannerSpan.children().eq(oldPos).removeClass();
		JsonProject.bannerSpan.children().eq(nowPos).addClass('current');
		JsonProject.bannerUl.children().eq(oldPos).stop(false,true).fadeOut();
		JsonProject.bannerUl.children().eq(nowPos).stop(false,true).fadeIn();
		}
	});
	JsonProject.leftNode.click(function(){
		var oldPos=$('.current').index();
		var nowPos;
		var last=JsonProject.bannerUl.children().length-1;
		nowPos=oldPos==0?last:oldPos-1;
		JsonProject.bannerSpan.children().eq(oldPos).removeClass();
		JsonProject.bannerSpan.children().eq(nowPos).addClass('current');
		JsonProject.bannerUl.children().eq(oldPos).stop(false,true).fadeOut();
		JsonProject.bannerUl.children().eq(nowPos).stop(false,true).fadeIn();
	});
	
		JsonProject.rightNode.click(function(){
		var oldPos=$('.current').index();
		var nowPos;
		var last=JsonProject.bannerUl.children().length-1;
		
		nowPos=oldPos==last?0:oldPos+1;
		JsonProject.bannerSpan.children().eq(oldPos).removeClass();
		JsonProject.bannerSpan.children().eq(nowPos).addClass('current');
		JsonProject.bannerUl.children().eq(oldPos).stop(false,true).fadeOut();
		JsonProject.bannerUl.children().eq(nowPos).stop(false,true).fadeIn();
	});
	var autoDo=window.setInterval(function(){JsonProject.rightNode.click();},3000);

//circle

JsonProject.CircleSpan.mouseenter(function(){
		var nowPow=$(this).parent().index();
	    var oldPos=$('.curCircle').index();
	    if($(this).parent().is('.curCircle')){
	    	return;
	    }else{
	    	
	    	//JsonProject.lisNode.eq(nowPow).addClass('curCircle');
	    	//JsonProject.lisNode.eq(oldPos).removeClass();
	    	
	    	JsonProject.lisNode.eq(nowPow).addClass('curCircle').stop(true,false).animate({width:'475px'},1000);
	    	JsonProject.lisNode.eq(oldPos).removeClass('curCircle','curOO').stop(true,false).animate({width:'160'},1000);
	    }
});
//产品菜单列表
//product
JsonProject.enterAndLeave(JsonProject.productNode,JsonProject.productList);
JsonProject.enterAndLeave(JsonProject.productOne.parent(),JsonProject.productOne);
JsonProject.enterAndLeave(JsonProject.productTwo.parent(),JsonProject.productTwo);
JsonProject.enterAndLeave(JsonProject.productThree.parent(),JsonProject.productThree);
JsonProject.listFun(JsonProject.productList);
JsonProject.listFun(JsonProject.productOne);
JsonProject.listFun(JsonProject.productTwo);
JsonProject.listFun(JsonProject.productThree);
//service
JsonProject.listFun(JsonProject.serviceList);
JsonProject.enterAndLeave(JsonProject.serviceNode,JsonProject.serviceList);
JsonProject.enterAndLeave(JsonProject.serviceOne.parent(),JsonProject.serviceOne);
JsonProject.enterAndLeave(JsonProject.serviceTwo.parent(),JsonProject.serviceTwo);
JsonProject.enterAndLeave(JsonProject.serviceThree.parent(),JsonProject.serviceThree);
JsonProject.enterAndLeave(JsonProject.serviceFour.parent(),JsonProject.serviceFour);
JsonProject.enterAndLeave(JsonProject.serviceFive.parent(),JsonProject.serviceFive);
//about
JsonProject.enterAndLeave(JsonProject.aboutNode,JsonProject.aboutList);
JsonProject.listFun(JsonProject.aboutList);
