/********************Description*************************
 Copyright 2017
 Theme Name:   99mt.js
 Version:      1.0
 author:       Bovin Phang
 author email: bovin.phang@msn.com
 time:         2017-05-15
 last modify:  2017-05-15
 **********************************************************/

//生成重复字符串
function strRepeat(str, num){
	return new Array( parseInt(num, 10) + 1 ).join( str );
}

//生成99乘法表
function creatMultiplicationTable(direction){

	var htmlStr1 = "",
		htmlStr2 = "";
	for(var i = 1,iLenth = 9; i <= iLenth;i++){
		var rowContent1 = "",
			rowContent2 = "";
		for(var j = 1;j <= i; j++){
			rowContent1 += "<li>"+i+"*"+j+"="+i*j+"</li>";
			rowContent2 += "<li>"+j+"*"+i+"="+j*i+"</li>";
		}
		htmlStr1 += "<ul class='mtable'>"+rowContent1+strRepeat("<li class='none'></li>",iLenth-i)+"</ul>";
		htmlStr2 += "<ul class='mtable'>"+strRepeat("<li class='none'></li>",iLenth-i)+rowContent2+"</ul>";
	}
	for(var i = 9,iLenth = 9; i >= 1;i--){
		var rowContent1 = "",
			rowContent2 = "";
		for(var j = 1;j <= i; j++){
			rowContent1 += "<li>"+i+"*"+j+"="+i*j+"</li>";
			rowContent2 += "<li>"+j+"*"+i+"="+j*i+"</li>";
		}
		htmlStr1 += "<ul class='mtable'>"+rowContent1+strRepeat("<li class='none'></li>",iLenth-i)+"</ul>";
		htmlStr2 += "<ul class='mtable'>"+strRepeat("<li class='none'></li>",iLenth-i)+rowContent2+"</ul>";
	}
	if( direction == "left"){
		document.getElementById("title").innerText = "99乘法表(三角形向左)";
		document.getElementById("mt").innerHTML = htmlStr2;
	} else {
		document.getElementById("title").innerText = "99乘法表(三角形向右)";
		document.getElementById("mt").innerHTML = htmlStr1;
	}
}
creatMultiplicationTable();

//切换99乘法表方向
function toggle() {
	var changBtn  = document.getElementById("changeBtn"),
		direction = changBtn.getAttribute("data-val");
	if (  direction == "left" ){
		creatMultiplicationTable("right");
		changBtn.setAttribute("data-val","right");
	} else {
		creatMultiplicationTable("left");
		changBtn.setAttribute("data-val","left");
	}
}
