$(function() {
	$('#fullpage').fullpage({
		slidesColor: ['#0075D1', 'rgb(31,25,27)', '#FDF6E1', 'white'],
		'css3': true,
		'menu': '#menu',
		'loopBottom': true,
		//'verticalCentered':false,
		'sectionsColor': ['#254875', '#00FF00', '#254587', 'red'],
		'anchors': ['page1', 'page2', 'page3', 'page4'],
		'navigationPosition': 'right',
		'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
		afterLoad: function(anchorLink, index) {
			if(index==1){
				$('.btnleft').delay(0).animate({
					left: '0'
				}, 500, 'easeOutExpo');
				$('.btnright').delay(0).animate({
					right: '0'
				}, 500, 'easeOutExpo');
				$('.section_1').show(500);
				$('.btndown1').delay(0).animate({
					top: '0'
				}, 500, 'easeOutExpo');	
				$('#page1_cont').hide(1000);
				$('#page1_main').show(1000)
				
			}
			if(index == 3) {
				$('#menu').hide(1000);
			}
			if(index != 3) {
				$('#menu').show(1000);
			}
			if(index == 2) {
			    page2_in();	
			}
			if(index == 4) {
			    page4_in();	
			}
		},
		onLeave: function(index, direction) {
			if(index == 1){
				page1_out();
			}
			if(index == 2) {
				page2_out();	
			}
			if(index == 4) {
			    page4_out();	
			}
		}
	});
});
function page1_out(){
	$('.btnleft').delay(0).animate({
		left: '-100%'
		  }, 800, 'easeOutExpo');
    $('.btnright').delay(0).animate({
	    right: '-100%'
		  }, 200, 'easeOutExpo');
    $('.section_1').hide(500);
    $('.btndown1').delay(0).animate({
		top: '320px'
		  }, 1000, 'easeOutExpo');	
    $('#page1_main').hide(1000)
}

//login
function login(){
	page1_out();
	$('#page1_cont').show(1000);
}
function page2_in(){
    $('#fly_section').delay(0).animate({
					top: '5%',left: '42%'
				}, 4000, 'easeOutExpo'); 
    $('#conputer_1').slideDown(1000,'linear',function(){
    	 $('#text_1').show(1000);
    	 $('#text_2').show(1000,function(){
    	 	$('#btn_main').show();
    	 });
    });
    $('#conputer_2').slideDown(1000,'linear');
}
function page2_out(){
	$('#fly_section').delay(0).animate({
					top: '-30%',left: '10%'
				}, 2000, 'easeOutExpo');
	$('#conputer_1').hide(500,function(){
		$('#text_1').hide('linear');
    	 $('#text_2').hide('linear');
	});
    $('#conputer_2').hide(500);
    $('#btn_main').hide(500);
}
//飞机移动
function fly_move(e){  
var x = e.clientX;   
$('#fly_section').css('left',x);
}
function mos_move(e){
        	 var x = e.clientX/5; 
        	 var y = e.clientY/10;
        	 var z = e.clientY/2;
        	 $('#ball_move').css('right',x);
        	 $('#ball_move').css('top',y);
        	 $('#ball_move_1').css('left',x);
        	 $('#ball_move_1').css('top',z);
}
//自定义组件 1
function vue_onload(){
	
//注册 全局 组件
var func_1 = function(){
    Vue.component(
    	'my-component',{
        //选项
        template:'<div class="div_show"></div>'
     })
    Vue.component(
    	'my-component_1',{
        //选项
        template:'<div class="div_show_1"><div style="border: none;">技术<br><br><a href="#">后端开发</a><a href="#">前端开发</a><a href="#">移动开发</a><a href="#">测试</a><a href="#">运维</a><a href="#">硬件开发</a><a href="#">项目管理</a></div><div >产品<br><br><a href="#">产品专员</a><a href="#">产品经理</a></div><div>设计<br><br><a href="#">视觉设计</a><a href="#">交互设计</a></div><div>运营<br><br><a href="#">运营</a><a href="#">编辑</a><a href="#">客服</a><a href="#">策划</a></div></div>'
     })
//创建根实例
    var app1=new Vue({
        el:'#sec_2_left_id',
    })
          }
var func_2 = function(){
	var templates = Math.floor(Math.random().toFixed(2)*10);
	rows = templates%4;
	Vue.component(
    	'my-component_2',{
        //选项
        template:'<a href="page/resume.html" target="_blank"><div class="col-md-3 col-sm-3" style="margin-top: 30px;padding-left: 0;" >'+
               	  '<div class="col-md-12 col-sm-12" style="height: 156px;background-color: rgb(238,238,238);overflow: hidden;text-align: center;padding-top: 10px;" >'+
               	  	'<img v-bind:src="src" width="80%" >'+
               	  '</div>'+
                  '<div class="col-md-12 col-sm-12 sec_2_right_div">'+
                  	'{{ title }}<br><br>'+
                  	'<span style="color: #6d6d6d;">{{num}}</span>'+
                  	'<span style="color: #6d6d6d;float: right;">仅支持<span style="color:#00C091;font-size: 14px;">PDF</span>下载</span></div></div></a>',
        data: function () {
        	if(rows==0){
            return {
                    title: "前端开发求职简历模板",
                    src:"img/ed219eee-5ab0-4efe-bfa4-fb2a12620e44.png",
                    num:"141235412人使用"
                   }
           }
        	if(rows==1){
        		return {
                    title: "海运物流主管求职简历模板",
                    src:"img/e8d268d1-845c-4310-b8bc-2a60237af1c6.png",
                    num:"241512人使用"
                   }
        	}
        	if(rows==2){
        		return {
                    title: "销售经理简历模板",
                    src:"img/1797734.png",
                    num:"231242214人使用"
                   }
        	}
        	if(rows==3){
        		return {
                    title: "文案策划简历模板",
                    src:"img/2155966.png",
                    num:"89572184人使用"
                   }
        	}
           }
                  	
     })
	
	
	var app1=new Vue({
        el:'#sec_2_right_id',
    })

}
func_1();
func_2();
}
function page4_in(){
	$('#sec_4_conputer').slideDown(2000,function(){
		$('#sec_4_phone').show(1000);
	})
};
function page4_out(){
	$('#sec_4_conputer').slideUp(500,function(){
		$('#sec_4_phone').hide(500);
	})
}
function btn_move(id){
	if(id==0){
	  $('#sec_2_a').delay(0).animate({left: '20%'
				}, 1000, 'easeOutExpo');	
	}
	else{
		 $('#sec_2_a').delay(0).animate({left: '70%'
				}, 1000, 'easeOutExpo');
	}
}
       
       
       	  
       	
       	 