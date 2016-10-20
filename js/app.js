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
				tr += "<tr>";
				tr+="<td>" + obj.Year + "</td>";
				tr+="<td>" + obj.Title + "</td>";
				tr+="<td>" + obj.Type + "</td>";
				tr+="<td><img src='"+ obj.Poster  +"'/></td>";
				tr+="</tr>";
					
			}
			$("#listafilm").html(tr);
		});
	
	});

});
