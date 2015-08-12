
// here it's simple you have to just change your  date !!!
$(document).ready(function() {
	$("#count").countdown({
		//to change date just replace the current date with yours .
		date: "2015-08-15 22:50:12", 
		//html code in count div here.
		htmlTemplate: "<div id='days-count' class='numbers'>%{d}<span class='days-label'>days</span></div> <div id='hours-count' class='numbers'>%{h}<span class='hours-label'>hours</span></div><div id='min-count' class='numbers'>%{m}<span class='min-label'>min</span></div><div id='sec-count' class='numbers'>%{s}<span class='sec-label'>sec</span></div>"
	});
});

$("#mail-submit").live("click",function(){
	var inputstr = $("#mail-input").val();
	var now = new Date();
	var timearr = inputstr.split(":");
	if (timearr.length == 2){
		now.setMinutes(now.getMinutes() + parseInt(timearr[0]));
		now.setSeconds(now.getSeconds() + parseInt(timearr[1]));
	}
	else if (timearr.length == 3){
		now.setHours(now.getHours() + parseInt(timearr[0]));
		now.setMinutes(now.getMinutes() + parseInt(timearr[1]));
		now.setSeconds(now.getSeconds() + parseInt(timearr[2]));	
	}
	console.log(now.toUTCString());

	$("#count").countdown({
		//to change date just replace the current date with yours .
		//date: "2016/8/12 22:50:12", 
		date:now.toUTCString(),
		//html code in count div here.
		htmlTemplate: "<div id='days-count' class='numbers'>%{d}<span class='days-label'>days</span></div> <div id='hours-count' class='numbers'>%{h}<span class='hours-label'>hours</span></div><div id='min-count' class='numbers'>%{m}<span class='min-label'>min</span></div><div id='sec-count' class='numbers'>%{s}<span class='sec-label'>sec</span></div>"
	});
});

////////////////////show-hide tools panel////////////////////////
$("#show-hide").live("click", function(){ 
	if ($('#tools').is(':visible'))
		{$(this).html('+');$("#tools").hide();}
	else{$(this).html('-');$("#tools").show();}
 }); 

////////////////////skins selectors change////////////////////////
$("#blue-skin").live("click", function(){ 
	$("#container").attr("class","blue");
 }); 

$("#red-skin").live("click", function(){ 
	$("#container").attr("class","red");
 }); 

$("#purple-skin").live("click", function(){ 
	$("#container").attr("class","purple");
 }); 

$("#green-skin").live("click", function(){ 
	$("#container").attr("class","green");
 }); 


////////////////////patterns selectors change////////////////////////
$("#pat1").live("click", function(){ 
	 $('html').attr("class","bg1");
 }); 

$("#pat2").live("click", function(){ 
	$('html').attr("class","bg2");
 }); 

$("#pat3").live("click", function(){ 
	$('html').attr("class","bg3");
 }); 

$("#pat4").live("click", function(){ 
	$('html').attr("class","bg4");
 }); 

