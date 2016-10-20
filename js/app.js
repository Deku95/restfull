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

});
