var cors = 'https://cors-anywhere.herokuapp.com/';

function cineplex_movies(){
	$("#nowshowing_cineplex").prepend('<center><img src="img/load.gif" width="200" height="200" style="display: block;"></center>');
	var cineplex_url = "http://www.cineplexbd.com/";
			$.get(cors + cineplex_url, function(data){
				console.log(data);
				$("#fake_5").html(data);
				$("#nowshowing_cineplex").html($("#fake_5").find(".tabs"));
				$(".nav-tabs li:contains(Buy Ticket)").remove();
				$(".nav-tabs li:contains(Music)").remove();
				$(".tabs").find('a[href=""]').remove();
				$('link[rel=stylesheet][href~="http://www.cineplexbd.com/common/css/common.min.css"]').remove();
				$(".btn-xs").css("display", "none");
				$('.caption').find('a').removeAttr('href');
				$('.thumbnail').find('a').removeAttr('href');
				$('h4').css("font-size", "15px");
				$('h4').css("color", "black");
			})
}
function cineplex_showtime(){
	$("#schedule_cineplex").prepend('<center><img src="img/load.gif" width="200" height="200" style="display: block;"></center>');
	var showtime_url = "http://www.cineplexbd.com/cineplexbd/showtime";
			$.get(cors + showtime_url, function(data){
				console.log(data);
				$("#fake_4").html(data);
				$('link[rel=stylesheet][href~="http://www.cineplexbd.com/common/css/common.min.css"]').remove();
				$("#schedule_cineplex").html($("#fake_4").find(".row"));
				$(".news").css("display", "none");
				$(".block_title").css("display", "none");
				$(".content1").css("display", "none");
				$(".col-md-3").css("display", "none");
				$(".col-md-6").css("display", "none");
				$(".row").css("color", "#000");
				$('.row').find('a').removeAttr('href');
				$("row").css("text-align", "justify");
			})
}
function blockbuster_movies_now(){
	$("#now_showing").prepend('<center><img src="img/load.gif" width="200" height="200" style="display: block;"></center>');
	var movies_url = "http://www.blockbusterbd.com/now_showing.php";
			$.get(cors + movies_url, function(data){
				console.log(data);
				$("#fake_1").html(data);
				$("#now_showing").html($("#fake_1").find("#all"));
				$(".btn_1").css("display", "none");
				$(".text_align_style_center").css("color", "black");
				$(".text_align_style_center").css("font-size", "15px");
				$(".uppercase_style").css("font-weight", "1000");
				$('.border_style_for_image').find('a').removeAttr('href');
			})
}
function blockbuster_movies_future(){
	$("#next_arrival").prepend('<center><img src="img/load.gif" width="200" height="200" style="display: block;"></center>');
	var future_url = "http://www.blockbusterbd.com/next_arrival.php";
			$.get(cors + future_url, function(data){
				console.log(data);
				$("#fake_2").html(data);
				$("#next_arrival").html($("#fake_2").find(".bg_gray"));
				$(".btn_1").css("display", "none");
				$(".text_align_style_center").css("font-size", "15px");
				$(".text_align_style_center").css("color", "black");
				$(".uppercase_style").css("font-weight", "1000");
			})
}
function blockbuster_schedule(){
	$("#schedule_blockbuster").prepend('<center><img src="img/load.gif" width="200" height="200" style="display: block;"></center>');
	var schedule_url = "http://www.blockbusterbd.com/schedule.php";
			$.get(cors + schedule_url, function(data){
				console.log(data);
				$("#fake_3").html(data);
				$("#schedule_blockbuster").html($("#fake_3").find(".strip_all_rooms_list"));
				$(".clearfix").css('display', 'none');
				$(".table-striped thead th").filter(':nth-child('+3+')').remove();
				$(".btn_1").css("display", "none");
				$(".strip_all_rooms_list").css("color", "#000");
				$("#schedule_blockbuster").find("a").removeAttr("href");
				$(".table-striped").css("text-align", "center");
			})
}

