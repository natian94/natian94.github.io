//环形图
function canvasstart1(id,rows){
var ctx = document.getElementById(id).getContext("2d");   
var doughnutOptions = {
   //Boolean - Whether we should show a stroke on each segment
   segmentShowStroke : true,
   //String - The colour of each segment stroke
   segmentStrokeColor : "#fff",
   //Number - The width of each segment stroke
   segmentStrokeWidth : 2,
   //Number - The percentage of the chart that we cut out of the middle
   percentageInnerCutout : 50, // This is 0 for Pie charts
   //Number - Amount of animation steps
   animationSteps : 100,
   //String - Animation easing effect
   animationEasing : "easeOutBounce",
   //Boolean - Whether we animate the rotation of the Doughnut
   animateRotate : true,
   //Boolean - Whether we animate scaling the Doughnut from the centre
   animateScale : true,
   //Boolean - Re-draw chart on page resize
       responsive: false,
  };
var doughnutData = [
  {
       value: rows[0],
       color: "rgba(220,220,220,0.8)",
       highlight: "rgba(220,220,220,0.7)",
       label: "Grey"
   },
   {
       value: rows[1],
       color: "rgba(151,187,205,1)",
       highlight: "rgba(151,187,205,0.8)",
       label: "Blue"
   },
   {
       value: rows[2],
       color: "rgba(169, 3, 41, 0.7)",
       highlight: "rgba(169, 3, 41, 0.7)",
       label: "Red"
   }
   ];
new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
}
//饼图
function canvasstart2(id,rows){
	var ctx = document.getElementById(id).getContext("2d");
	var options = {				
	segmentShowStroke : true,
	
	//String - The colour of each segment stroke
	segmentStrokeColor : "#fff",
	
	//Number - The width of each segment stroke
	segmentStrokeWidth : 2,
	
	//Boolean - Whether we should animate the chart	
	animation : true,
	
	//Number - Amount of animation steps
	animationSteps : 100,
	
	//String - Animation easing effect
	animationEasing : "easeOutBounce",
	
	//Boolean - Whether we animate the rotation of the Pie
	animateRotate : true,

	//Boolean - Whether we animate scaling the Pie from the centre
	animateScale : false,
	
	//Function - Will fire on animation completion.
	onAnimationComplete : null
	
};
var data = [
	{
		value: rows[0],
		color:"#F38630"
	},
	{
		value : rows[1],
		color : "#E0E4CC"
	},
	{
		value : rows[2],
		color : "#69D2E7"
	}			
];
new Chart(ctx).Pie(data,options);
};
//极地区域图
function canvasstart3(id,rows){
	var ctx = document.getElementById(id).getContext("2d");
	var data = [
	{
		value : rows[0],
		color: "#D97041"
	},
	{
		value : rows[1],
		color: "#C7604C"
	},
	{
		value : rows[2],
		color: "#21323D"
	},
	{
		value : rows[3],
		color: "#9D9B7F"
	},
	{
		value : rows[4],
		color: "#7D4F6D"
	}
]
 var options = {
				
	//Boolean - Whether we show the scale above or below the chart segments
	scaleOverlay : true,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : false,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : null,
	//Number - The centre starting value
	scaleStartValue : null,
	
	//Boolean - Show line for each value in the scale
	scaleShowLine : true,
	
	//String - The colour of the scale line
	scaleLineColor : "rgba(0,0,0,.1)",
	
	//Number - The width of the line - in pixels
	scaleLineWidth : 1,
	
	//Boolean - whether we should show text labels
	scaleShowLabels : true,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",
	
	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : true,
	
	//String - The colour of the label backdrop	
	scaleBackdropColor : "rgba(255,255,255,0.75)",
	
	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,
	
	//Number - The backdrop padding to the side of the label in pixels	
	scaleBackdropPaddingX : 2,

	//Boolean - Stroke a line around each segment in the chart
	segmentShowStroke : true,
	
	//String - The colour of the stroke on each segement.
	segmentStrokeColor : "#fff",
	
	//Number - The width of the stroke value in pixels	
	segmentStrokeWidth : 2,
	
	//Boolean - Whether to animate the chart or not
	animation : true,
	
	//Number - Amount of animation steps
	animationSteps : 100,
	
	//String - Animation easing effect.
	animationEasing : "easeOutBounce",

	//Boolean - Whether to animate the rotation of the chart
	animateRotate : true,
	
	//Boolean - Whether to animate scaling the chart from the centre
	animateScale : false,

	//Function - This will fire when the animation of the chart is complete.
	onAnimationComplete : null
	
};
new Chart(ctx).PolarArea(data,options);
};
//柱状图
function canvasstart4(id,rows,rows1,rows2){
	if(rows2==undefined){
		rows2 = 0 ;
	}
	var ctx = document.getElementById(id).getContext("2d");
	var data = {
//	labels : ["January","February","March","April","May","June","July"],
	labels : rows1,
	datasets : [
		{
			fillColor : "rgb(240,156,34)",
			strokeColor : "rgb(163,206,153)",
			data : rows,
			label:'月销售量'
		},
		{
			fillColor : "grey",
			strokeColor : "rgba(151,187,205,1)",
			data : rows2
		}
	]
};
   var options = {
   //Boolean - If we show the scale above the chart data			
	scaleOverlay : true,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : false,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : null,
	//Number - The scale starting value
	scaleStartValue : null,

	//String - Colour of the scale line	
	scaleLineColor : "rgba(0,0,0,.1)",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : true,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",	
	
	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,
	
	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	
	//Number - Width of the grid lines
	scaleGridLineWidth : 1,	

	//Boolean - If there is a stroke on each bar	
	barShowStroke : true,
	
	//Number - Pixel width of the bar stroke	
	barStrokeWidth : 2,
	
	//Number - Spacing between each of the X value sets
	barValueSpacing : 5,
	
	//Number - Spacing between data sets within X values
	barDatasetSpacing : 1,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
	
   };
   new Chart(ctx).Bar(data,options);
   
};
//曲线图
function canvasstart5(id,rows,rows1,rows2){
	if(rows2==undefined){
		rows2 = 0;
	}
	var ctx = document.getElementById(id).getContext("2d");
	var data = {
	labels : rows1,
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "grey",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : rows2
		},
		{
			fillColor : "rgb(240,156,34)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : rows
		}
	]
}; 
    var options = {
    	//Boolean - If we show the scale above the chart data			
	scaleOverlay : true,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : false,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : null,
	//Number - The scale starting value
	scaleStartValue : null,

	//String - Colour of the scale line	
	scaleLineColor : "rgba(0,0,0,.1)",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : true,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",	
	
	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,
	
	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	
	//Number - Width of the grid lines
	scaleGridLineWidth : 1,	
	
	//Boolean - Whether the line is curved between points
	bezierCurve : true,
	
	//Boolean - Whether to show a dot for each point
	pointDot : true,
	
	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,
	
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,
	
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
    };
	new Chart(ctx).Line(data,options);
}
//雷达图
function canvasstart6(id,rows,rows1){
var ctx = document.getElementById(id).getContext("2d");   
var doughnutOptions = {
   //Boolean - If we show the scale above the chart data			
	scaleOverlay : true,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : false,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : null,
	//Number - The centre starting value
	scaleStartValue : null,
	
	//Boolean - Whether to show lines for each scale point
	scaleShowLine : true,

	//String - Colour of the scale line	
	scaleLineColor : "rgba(0,0,0,.1)",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : false,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",
	
	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : true,
	
	//String - The colour of the label backdrop	
	scaleBackdropColor : "rgba(255,255,255,0.75)",
	
	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,
	
	//Number - The backdrop padding to the side of the label in pixels	
	scaleBackdropPaddingX : 2,
	
	//Boolean - Whether we show the angle lines out of the radar
	angleShowLineOut : true,
	
	//String - Colour of the angle line
	angleLineColor : "rgba(0,0,0,.1)",
	
	//Number - Pixel width of the angle line
	angleLineWidth : 1,			
	
	//String - Point label font declaration
	pointLabelFontFamily : "'Arial'",
	
	//String - Point label font weight
	pointLabelFontStyle : "normal",
	
	//Number - Point label font size in pixels	
	pointLabelFontSize : 12,
	
	//String - Point label font colour	
	pointLabelFontColor : "#666",
	
	//Boolean - Whether to show a dot for each point
	pointDot : true,
	
	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,
	
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,
	
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
  };
var doughnutData  = {
	labels : rows1,
	datasets : [
		{
			fillColor : "rgb(240,156,34)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : rows
		}
	]
}
new Chart(ctx).Radar(doughnutData, doughnutOptions);
}