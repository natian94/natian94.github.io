var func_num = 1;
//读取数据
function handleFiles(files) {
	$('#datatable').empty();
	var line_ste = $('#line_ste').val();
	var line_end = $('#line_end').val();
	if(files.length) {
		var file = files[0];
		var reader = new FileReader();
		if(/text\/\w+/.test(file.type)) {
			reader.onload = function() {
				var all_return = new Array;
				if(line_end == "") {
					var line_split = this.result.split(/\n/);
					for(var i = 0; i < line_split.length; i++) {
						all_return[i] = new Array;
						var end_return = line_split[i].split(line_ste);
						for(var j = 0; j < end_return.length; j++) {
							all_return[i][j] = end_return[j];
						}
					}
					show_all(all_return);
				} else {
					var line_split = this.result.split(line_end);
					for(var i = 0; i < line_split.length; i++) {
						all_return[i] = new Array;
						var end_return = line_split[i].split(line_ste);
						for(var j = 0; j < end_return.length; j++) {
							all_return[i][j] = end_return[j];
						}
						show_all(all_return);

					}
				}

			}
			reader.readAsText(file, ['gb2312']);
		}
	}

}
//显示数据
function show_all(rows){
	$('#table_name').show(500);
	$('#save_btn').show(1000);
	datatable = document.getElementById('datatable');
	var tr = document.createElement('tr');
	for(i=0;i<rows.length;i++){
		var tr = document.createElement('tr');
		for(j=0;j<rows[i].length;j++){
		var td = document.createElement('td');
		td.innerHTML = rows[i][j]; 
		tr.appendChild(td);
		}
		datatable.appendChild(tr)
	}
	$("#save_btn").click(function(){
       up_function(rows);
});
}
//上传操作
function up_function(rows){
	    var table_val =  "a" +Math.floor(Math.random().toFixed(5)*100000);
		var num = rows[0].length;
		var line_name_rows = get_val(num);
		var line_name_all = '('+line_name_rows+')';
		var sql = 'CREATE TABLE IF NOT EXISTS '+table_val +' '+ line_name_all;//新建表		
		configeDB(sql,1);
	   //插入数据
	   var line_name_rows_2 = '('+line_name_rows+')';
	   //循环为数组加引号
	   for(var i in rows){
		for(var j in rows[i]){
			rows[i][j] = "'" + rows[i][j] +"'";
		}
	   }
	   for(i=0;i<rows.length-1;i++){
	   	var sql2 = 'insert into '+table_val+' '+line_name_rows_2 +' values('+rows[i]+')';
	    configeDB(sql2,2);	    
	   }
	   alert("插入数据库成功！");
	   $('#table_name').hide(500);
	   $('#save_btn').hide(500);
	   
}
//生成InputK值
function get_val(num){
	var return_row = new Array ; 
	for(i=0;i<num;i++){
			input_val = 'a'+i;		
		return_row.push(input_val);
	}
	return return_row ;
}
//配置和启动数据库
function configeDB(sql,a){	
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	switch (a) {
		case 1:  //新建表  		
		db.transaction(function (tx) {
        tx.executeSql(sql,[],
        	function(tx,result){
        	  console.log('创建表成功'); 
        	},
            function(tx, error){ 
        	  console.log('创建表失败:' + error.message);});
	   });
        break;
        case 2://插入数据        
        db.transaction(function (tx) {
	    tx.executeSql(sql,[],function(){
        	  console.log('插入数据成功'); 
        	  $('.rows_num').html(func_num);
        	  $('.progress-bar').css('width',func_num/10+'%')
        	  func_num++;
        	  if(func_num==1000){
        	  	$('.row_hide').hide(1000);
        	  	$('.row_show').show(1000);        		
        	  }
        	},
            function(tx, error){ 
        	  console.log('插入数据失败:' + error.message);});
	   
	   });
        break;
        case 3://删除数据
        db.transaction(function (tx) {
	    tx.executeSql(sql,[],function(){
        	  console.log('删除数据成功'); 
        	},
            function(tx, error){ 
        	  console.log('删除数据失败:' + error.message);});
	   
	   });
        break;
        case 4://修改数据
        db.transaction(function (tx) {
	    tx.executeSql(sql,[],function(){
        	  console.log('修改成功'); 
        	},
            function(tx, error){ 
        	  console.log('修改失败:' + error.message);});
	   
	   });
        break;
        case 5://查询数据
          db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log(result);
                 	console.log('查询成功');
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });

        break;
        case 6://删除表
        db.transaction(function (tx) {
	    tx.executeSql(sql,[],function(){
        	  console.log('删除表成功'); 
        	},
            function(tx, error){ 
        	  console.log('删除表失败:' + error.message);});
	   
	   });
        break;
        
	}
	
}
//自动生成数据并插入表中
function onload_insert(){		
    var a = new Array ;//产品编号
    var b = new Array ;//产品价格
    var province = ['河北省','山西省','吉林省','辽宁省','黑龙江省','陕西省','甘肃省','青海省','山东省','福建省','浙江省','台湾省','河南省','湖北省','湖南省','江西省','江苏省','安徽省','广东省','海南省','四川省','贵州省','云南省'];//23
	var mon = [1,2,3,4,5,6,7,8,9,10,11,12];
	var rows = new Array;//最终结果
	for(var i=0;i<10;i++){	
	a.push(Math.floor(Math.random().toFixed(5)*100000));
	}
	for(var j=0;j<10;j++){
		b.push(Math.floor(Math.random().toFixed(3)*100));
	}
	for(i=0;i<1000;i++){
		rows[i] = new Array;
		for(j=0;j<4;j++){
			if(j==0){
				 random = parseInt(10*Math.random());
				 rows[i][j] = a[random];
				 rows[i][j+1] = b[random];
			}
			if(j==2){
			     random = parseInt(23*Math.random());
			     rows[i][j] = province[random];
				
			}
			if(j==3){
				random = parseInt(12*Math.random());
				rows[i][j] = mon[random]
			}
		}
	}
	console.log(rows);
	var sql = 'CREATE TABLE IF NOT EXISTS  table_test(产品编号,价格,省份,月份)';//新建表		
    configeDB(sql,1);
    for(var i in rows){
		for(var j in rows[i]){
			if(j!=3){
				rows[i][j] = "'" + rows[i][j] +"'";
			}			
		}
	   }
    for(i=0;i<rows.length;i++){
	   	var sql2 = 'insert into table_test values('+rows[i]+')';
	    configeDB(sql2,2);
	 }
    var date=new Date();
    var expiresDays=10;
      //将date设置为10天以后的时间
    date.setTime(date.getTime()+expiresDays*24*3600*1000);
     //将userId设置为10天后过期
    document.cookie="userId=828; expires="+date.toGMTString();
}
//获取指定名称的cookie的值
function cookie_search(objName){	
            var arrStr = document.cookie.split("; ");
            for (var i = 0; i < arrStr.length; i++) {
                var temp = arrStr[i].split("=");
                if (temp[0] == objName) {
                    return unescape(temp[1]);
                }
            }
}
//获取数据，渲染画布
function get_rows(sql,device){
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数    
                 	console.log(result);
                 	var rows = new Array;
                 	var rows1 = new Array;
                 	for(var i =0;i<result.rows.length;i++){
                 		rows.push(result.rows[i].aa);
                 	}
                 	for(var i =0;i<result.rows.length;i++){
                 		if(device=='mm'){                 			
                 		     rows1.push(result.rows[i].mm);
                 		}
                 		else{
                 			rows1.push(result.rows[i].pp);
                 		}                 		
                 	}           
                 	console.log(rows1);
                 	$('#my_canvas').remove();                 	
                 	$("<canvas id='my_canvas' style='width:1000px;height:300px;margin-left:30px' width='1000%' height='300%'></canvas>").appendTo($("#span_canvas")); 
                 	$('#my_canvas_6').remove();
                 	$("<canvas id='my_canvas_6' style='margin-left:30px;margin-top:5%' width='700%' height='300%'></canvas>").appendTo($("#span_canvas")); 
                 	$('#my_canvas_7').remove();
                 	$("<canvas id='my_canvas_7' style='margin-top:5%' width='300%' height='300%'></canvas>").appendTo($("#span_canvas")); 
                 	canvasstart5('my_canvas',rows,rows1);
                 	canvasstart4('my_canvas_6',rows,rows1);
                 	canvasstart6('my_canvas_7',rows,rows1);
                 	console.log('查询成功');
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//月划分
function month_device(){
	$('#month_pro').html('按月绘制');
	var sql = 'select count(*) aa,月份 mm from table_test group by 月份 order by 月份 ' ;
	get_rows(sql,'mm');
}
//地区划分
function Province_device(){
	$('#month_pro').html('按省绘制');
	var sql = 'select count(*) aa,省份 pp from table_test group by 省份' ;
	get_rows(sql,'pp');
}
//滑块显示
function slide_show(){
	slide_change();
    $( "#month_1" ).slider({
      value:1,
      min: 1,
      max: 12,
      step: 1,
      slide: function( event, ui ) {
        $( "#month_1_p" ).html(ui.value );
        slide_change()
      }
    });
    $( "#month_2" ).slider({
      value:12,
      min: 1,
      max: 12,
      step: 1,
      slide: function( event, ui ) {
        $( "#month_2_p" ).html( ui.value );
        slide_change()
      }
    });
}
//滑块改变修改月份
function slide_change(){
	var a =  $( "#month_1_p" ).html();
	var b =  $( "#month_2_p" ).html();
	var sql = 'select count(*) aa,月份 mm,省份 pp  from table_test where 月份='+a+' or 月份='+b+' group by 省份 order by 月份';
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	 db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');
                 	var rows = new Array;
                 	var rows1 = new Array;
                 	var rows2 = new Array;
                 	for(i=0;i<result.rows.length;i++){                 		
                 		if(result.rows[i].mm==a){
                 			rows.push(result.rows[i].aa);
                 			rows1.push(result.rows[i].pp);
                 		}
                 		else{
                 			rows2.push(result.rows[i].aa);
                 		}
                 		
                 	}
                 	$('#my_canvas_8').remove();                 	
                 	$("<canvas id='my_canvas_8' width='750%' height='300%'></canvas>").appendTo($("#span_canvas_1"));
                 	$('#my_canvas_9').remove();                 	
                 	$("<canvas id='my_canvas_9' width='1050%' height='350%'></canvas>").appendTo($("#span_canvas_2")); 
                    canvasstart4('my_canvas_8',rows,rows1,rows2);
                    canvasstart5('my_canvas_9',rows,rows1,rows2);
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//季度收入
function quarter(){
	var a= 0;
	var b= 0;
	var c= 0;
	var d= 0;
	var sql = 'select 月份 mm,价格 pp from table_test' ;
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');
                 	for(i=0;i<result.rows.length;i++){
                 		if(result.rows[i].mm<4){
                 			a= parseInt(a) + parseInt(result.rows[i].pp);
                 			$('#month_get_1').html(a);
                 		}
                 		if(3<result.rows[i].mm<7){
                 			b= parseInt(b) + parseInt(result.rows[i].pp);
                 			$('#month_get_2').html(b);
                 		}
                 		if(6<result.rows[i].mm<10){
                 			c= parseInt(c) + parseInt(result.rows[i].pp);
                 			$('#month_get_3').html(c);
                 		}
                 		if(result.rows[i].mm>9){
                 			d= parseInt(d) + parseInt(result.rows[i].pp);
                 			$('#month_get_4').html(d);
                 		}
                 	}
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
         top_3_p();
         top_3_m();
         top_3_g();
         top_month();
         top_goods();
}
//排名前五的省份
function top_3_p(){
	var rows = new Array;
	var rows1 = new Array;
	var sql = 'select count(*) aa,省份 pp from table_test group by pp order by aa desc';
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	 db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');
                 	for(i=0;i<6;i++){
                 		rows.push(result.rows[i].aa);
                 		rows1.push(result.rows[i].pp);
                 	}
                 	console.log(rows);
                 	$('#my_canvas_10').remove();                 	
                 	$("<canvas id='my_canvas_10' width='300%' height='300%'></canvas>").appendTo($("#span_canvas_3"));
                     canvasstart6('my_canvas_10',rows,rows1);
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//排名前五的月份
function top_3_m(){
	var rows = new Array;
	var rows1 = new Array;
	var sql = 'select count(*) aa,月份 mm from table_test group by mm order by aa desc';
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	 db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');
                 	
                 	for(i=0;i<6;i++){
                 		rows.push(result.rows[i].aa);
                 		rows1.push(result.rows[i].mm);
                 	}
                 	console.log(rows);
                 	$('#my_canvas_11').remove();                 	
                 	$("<canvas id='my_canvas_11' width='300%' height='300%'></canvas>").appendTo($("#span_canvas_4"));
                     canvasstart6('my_canvas_11',rows,rows1);
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//销量前五的产品
function top_3_g(){
	var rows = new Array;
	var rows1 = new Array;
	var sql = 'select count(*) aa,产品编号  gg from table_test group by gg order by aa desc';
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	 db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');
                 	
                 	for(i=0;i<6;i++){
                 		rows.push(result.rows[i].aa);
                 		rows1.push(result.rows[i].gg);
                 	}
                 	console.log(rows);
                 	$('#my_canvas_12').remove();                 	
                 	$("<canvas id='my_canvas_12' width='300%' height='300%'></canvas>").appendTo($("#span_canvas_5"));
                     canvasstart6('my_canvas_12',rows,rows1);
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//每个月的收益曲线图
function top_month(){
	var rows = new Array;
	var rows1 = new Array;
	var sql = 'select sum(价格) aa,月份  mm from table_test group by mm order by mm ';
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	 db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');                 	
                 	for(i=0;i<result.rows.length;i++){
                 		rows.push(result.rows[i].aa);
                 		rows1.push(result.rows[i].mm);
                 	}
                 	$('#my_canvas_13').remove();                 	
                 	$("<canvas id='my_canvas_13' width='500%' height='250%'></canvas>").appendTo($("#span_canvas_6"));
                     canvasstart5('my_canvas_13',rows,rows1);
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//产品销售量
function top_goods(){
	var rows = new Array;
	var rows1 = new Array;
	
	var sql = 'select count(*) aa,产品编号  gg from table_test group by gg  ';
	var db = openDatabase('Analysisdb', '1.0', 'Analysis_DB', 32*1024*1024*1024);
	 db.transaction(function (tx) {
             tx.executeSql(sql, [],
                 function selectt(tx, result) { //执行成功的回调函数
                 	console.log('查询成功');                 	
                 	for(i=0;i<result.rows.length;i++){
                 		rows.push(result.rows[i].aa);
                 		rows1.push(result.rows[i].gg);
                 	}
                 	$('#my_canvas_14').remove();                 	
                 	$("<canvas id='my_canvas_14' width='580%' height='280%'></canvas>").appendTo($("#span_canvas_7"));
                     canvasstart4('my_canvas_14',rows,rows1);
                 },
                 function (tx, error) {
                    console.log('查询失败: ' + error.message);                    
                 });
         });
}
//游戏canvas
function game_canvas(){
	var game_open = 0;
	var canvas = document.getElementById('my_game_canvas');
	var ctx = canvas.getContext("2d");
	var raf;
//启动可拖拽DIV
var div_left = 9999;
var div_top = 9999;
var divObj=document.getElementById("cover");
    var moveFlag=false;

        divObj.onmousedown=function(e){
        start();
        moveFlag=true;
        var clickEvent=window.event||e;
        var mwidth=clickEvent.clientX-divObj.offsetLeft;
        var mheight=clickEvent.clientY-divObj.offsetTop;
        document.onmousemove=function(e){
            var moveEvent=window.event||e;
            if(moveFlag){  
            	divObj.style.left=moveEvent.clientX-mwidth+"px";
                divObj.style.top=moveEvent.clientY-mheight+"px";
                div_left=parseInt(moveEvent.clientX-mwidth)-parseInt(22) ;
                div_top=parseInt(moveEvent.clientY-mheight)-parseInt(174);
                console.log("黄块",div_left,div_top);
                divObj.onmouseup=function(){
                    moveFlag=false;
                }
                
                
            }
        }
    };
//计时器
    var hour,minute,second;//时 分 秒
    hour=minute=second=0;//初始化
    var millisecond=0;//毫秒
    var time_rows = 0;
    var int;
    function Reset()//重置
    {
      window.clearInterval(int);
      millisecond=hour=minute=second=0;
      document.getElementById('timetext').value='00时00分00秒000毫秒';
    }
  
    function start()//开始
    {
      int=setInterval(timer,50);
    }
  
    function timer()//计时
    {
      millisecond=millisecond+50;
      if(millisecond>=1000)
      {
        millisecond=0;
        second=second+1;
      }
      if(second>=60)
      {
        second=0;
        minute=minute+1;
      }
  
      if(minute>=60)
      {
        minute=0;
        hour=hour+1;
      }
      time_rows = hour+':'+minute+':'+second+':'+millisecond;
      
    }
  
    function stop()//暂停
    {
      window.clearInterval(int);
    }
    function write_time(){
    	ctx.font = "30px 隶书";
        ctx.fillStyle = "black";
        ctx.fillText(time_rows, 800,50);
    }
var running = false;
var ball_1 = {
  x: 200,
  y: 200,
  vx: 5,
  vy: 7,
  draw: function() {
    var img = new Image();
	  img.src = "../img/46017920cb0929004ed8ce47505a7ef1.png";
	  	ctx.drawImage(img, this.x, this.y,100,100);

  }
};
var ball_2 = {
  x: 0,
  y: 0,
  vx: 7,
  vy: 5,
  
  draw: function() {
    var img = new Image();
	  img.src = "../img/46017920cb0929004ed8ce47505a7ef1.png";
	  	ctx.drawImage(img, this.x, this.y,100,100);
  }
};
var ball_3 = {
  x: 500,
  y: 500,
  vx: 5,
  vy: 3,
  draw: function() {
    var img = new Image();
	  img.src = "../img/46017920cb0929004ed8ce47505a7ef1.png";
	  	ctx.drawImage(img, this.x, this.y,100,100);
    
  }
};

//清除屏幕
function clear() {
  $('#game_btn').hide();
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  var img = new Image();
 img.src = "../img/0298187.jpg";
 ctx.drawImage(img, 0, 0,1200,800);
}
//游戏开始
var game = function(){
	draw();	
}
function draw() {	
clear();
write_time();
ball_1.draw();
ball_2.draw();
ball_3.draw();
ball_1.x += ball_1.vx ;
ball_1.y += ball_1.vy ;
if (ball_1.y + ball_1.vy > canvas.height-100 || ball_1.y + ball_1.vy < 0) {
    ball_1.vy = -ball_1.vy;
}
if (ball_1.x + ball_1.vx > canvas.width-100 || ball_1.x + ball_1.vx < 0) {
    ball_1.vx = -ball_1.vx;
}
ball_2.x += ball_2.vx  ;
ball_2.y += ball_2.vy ;
if (ball_2.y + ball_2.vy > canvas.height-100 || ball_2.y + ball_2.vy < 0) {
    ball_2.vy = -ball_2.vy;
}
if (ball_2.x + ball_2.vx > canvas.width-100 || ball_2.x + ball_2.vx < 0) {
    ball_2.vx = -ball_2.vx;
}
ball_3.x += ball_3.vx  ;
ball_3.y += ball_3.vy ;
if (ball_3.y + ball_3.vy > canvas.height-100 || ball_3.y + ball_3.vy < 0) {
    ball_3.vy = -ball_3.vy;
}
if (ball_3.x + ball_3.vx > canvas.width-100 || ball_3.x + ball_3.vx < 0) {
    ball_3.vx = -ball_3.vx;
}
judge_crash(ball_1.x,ball_1.y);
judge_crash(ball_2.x,ball_2.y);
judge_crash(ball_3.x,ball_3.y);
if(game_open==0){
raf = window.requestAnimationFrame(draw);	
}

}
function judge_crash(ball_x,ball_y){
	var ball_x_100 = parseInt(ball_x)+parseInt(100);
	var ball_y_100 = parseInt(ball_y)+parseInt(100);
	var div_left_100 = parseInt(div_left)+parseInt(100);
	var div_top_100 = parseInt(div_top)+parseInt(100);
//左上角碰撞判断
	if(ball_x<=div_left&&div_left<=ball_x_100){
		if(ball_y<=div_top&&div_top<=ball_y_100){
			console.log("左上角碰撞！游戏结束！");
			game_over();
		}
		else if(ball_y<=div_top_100&&div_top_100<=ball_y_100){
			console.log("右上角碰撞！游戏结束！");
			game_over();
		}
	}
//右上角碰撞判断
	if(ball_x<=div_left_100&&div_left_100<=ball_x_100){
		if(ball_y<=div_top&&div_top<=ball_y_100){
			console.log("右上角碰撞！游戏结束！");
			game_over;
		}
		else if(ball_y<=div_top_100&&div_top_100<=ball_y_100){
			console.log("右上角碰撞！游戏结束！");
			game_over;
		}
	}

}
//初始化游戏
function bagin_game(){	
	 ctx.font = "30px 隶书";
	 ctx.fillStyle = "wheat";
	  var img = new Image();
	  img.src = "../img/ee8a9e9e783676000031.jpg";
	  img.onload = function(){
	  	ctx.drawImage(img, 0, 0,1200,800);	  	
	    ctx.fillText("飞机大战-是男人就坚持30S", 300,280);
	  }
	 
}
//游戏结束
var game_over = function() {
	stop();
	game_open=1;
	$('#cover').hide();
	$('#game_again').show();
	var img = new Image();
	 ctx.font = "30px 隶书";
	 ctx.fillStyle = "wheat";
	  img.src = "../img/88e9020aff01b0fd360f699b5da52cd8.jpg";
	  img.onload = function(){
	  	ctx.drawImage(img, 0, 0,1200,800);	  	
	    ctx.fillText("游戏结束！", 400,280);
	    ctx.fillStyle = "yellow";
	    ctx.fillText("很强！您坚持了："+time_rows+"秒", 300,380);
	  }
}
//draw();
bagin_game();
return game;
}
function oppen_game(){	
	var game = game_canvas() ;
	game();
	$('#game_again').hide();
	$('#cover').show();
	$('#cover').delay(0).animate({
		left: '40%',top: '60%'
		  }, 3000, 'easeOutExpo');	
}

