var cors = "https://cors-anywhere.herokuapp.com/";
function movie_search(){
	$("#movie_results").prepend('<center><img src="img/google_load.gif" width="350" height="300" style="display: block;"></center>');
	var movie_name = $('#google_movie').val();
	var url = "https://www.google.com/search?q=" + movie_name;
	$.get(cors + url, function(response){
		console.log(response);
		$("#fake_7").html(response);
		$("#movie_results").html($("#fake_7").find("#rhs_block"));
		$("body").css("background", "black");
	})
}
function rottentomatoes(){
	$("#rotten").prepend('<center><img src="img/load.gif" id="loading2" width="200" height="200" style="display: block;"></center>');
	var movie_nam = $('#rotten_search').val();
	var final_movie = movie_nam.replace(" ", "_");
	var url = "https://www.rottentomatoes.com/m/" + final_movie;
	$.get(cors + url, function(response){
		console.log(response);
		$("#fake_8").html(response);
		$('link[rel=stylesheet][href~="https://staticv2-4.rottentomatoes.com/static/styles/css/rt_main.css"]').remove();
		$("#rotten").html($("#fake_8").find("#mainColumn"));
		$(".review_quote").css("font-color", "black");
		$("#showtimes").remove();
		$("#movie-videos-panel").remove();
		$("#movie-photos-panel").remove();
		$("#watch-it-now").remove();
		$('p').css('color', 'black');
		$("#newsSection").remove();
		$("#quotesList").remove();
		$("#criticHeaders").remove();
		$("#newsAndFeatures").remove();
		$("#rating_widget_desktop").remove();
		$("#showMoreCast").remove();
		$(".view_all_critic_reviews").remove();
		$(".view_all").remove();
		$(".heroImage").remove();	
		$(".franchiseLink").remove();
		$("#discussionForum").remove();
		$("body").css("background", "black");
	})
}
