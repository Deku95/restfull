$(document).ready(function() {
	// <!-- rendere visibile il bottone	
	$("#titolo").on("keydown",function(event){
		var testo =	$("#titolo").val();
		if (testo != "" ){
			$("#cerca").prop("disabled", false);
		}else{
			$("#cerca").prop("disabled", true);
		}
	});
			// <!-- Visualizzare la lista quando si preme il pulsante -->
	$("#cerca").on("click",function(){		
			$("#vedi ").show() ;
	});
	
	
	
	$("#cerca").on("click" ,function(event){
		event.preventDefault();
		var titolo=$("input[name='titolo']").val();
console.log(titolo);
		$.ajax({
			url:"http://www.omdbapi.com/?s="+titolo,
			method:"GET",
		}).then(function(data){
			var tr="";
			for (var i=0;i<data.Search.length;i++){
				var obj=data.Search[i];
				console.log(obj);
				tr += "<tr id='"+ obj.imdbID +"'>";
				if (obj.Poster !='N/A'){
					tr+="<td class='col-md-3'><img id='locandina' src='"+ obj.Poster  +"'/></td>";
				}else {
					tr+="<td class='col-md-3'><img id='locandina' src='http://placehold.it/100x150'/></td>";
				}
				tr+="<td class='col-md-3'>" + obj.Title + "</td>";
				tr+="<td class='col-md-3'>" + obj.Year + " </td>";
				tr+="<td class='col-md-3'> " + obj.Type + "</td>";
				tr+="<td class='col-md-0' id='invis'> " + obj.imdbID + "</td>";
				tr+="</tr>";
			}
			$("#listafilm").html(tr);
		});
	
	});

	$("tbody").on("click",'tr',function(){	
			// ($("#vedi").css("display")=="none") ? $("#vedi").show() :  $("#vedi").hide();
			if ($("#vedi").css("display")=="none"){
				$("#vedi").show()	
			}else{
				$("#vedi").hide()
			}
			
			
			if ($("#film").css("display")=="none"){
				$.ajax({
			url:"http://www.omdbapi.com/?t="+id,
			method:"GET",
		}).then(function(data){
			var tr="";
			for (var i=0;i<data.Search.length;i++){
				var obj=data.Search[i];
				console.log(obj);
				tr += "<tr>";
				if (obj.Poster !='N/A'){
					tr+="<td class='col-md-3'><img id='locandinag' src='"+ obj.Poster  +"'/></td>";
				}else {
					tr+="<td class='col-md-3'><img id='locandinag' src='http://placehold.it/200x350'/></td>";
				}
				// un td con le informazioni
				tr+="<td class='col-md-3'> <ul>	<li>			</li><li>			</li><li>			</li><li>			</li></ul></td>";
				
				
				
				
				
				tr+="<td class='col-md-3'>" + obj.Year + " </td>";
				tr+="<td class='col-md-3'> " + obj.Type + "</td>";
				tr+="<td class='col-md-0' id='invis'> " + obj.imdbID + "</td>";
				tr+="</tr>";
			}
			$("#listafilm").html(tr);
		});
				
				
				
				$("#film").show()
				console.log($(this).attr("id"));
			}else{
				$("#film").hide()
			}
			
			
			
			
			
			// ($("#film").css("display")=="none") ? $("#film").show() :  $("#film").hide();
			
		});
	$("#film").on("click",function(){			
			($("#vedi").css("display")=="none") ? $("#vedi").show() :  $("#vedi").hide();
			($("#film").css("display")=="none") ? $("#film").show() :  $("#film").hide();
		});		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
