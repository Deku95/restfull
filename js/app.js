$(document).ready(function() {
	$("#search").submit(function(event){
		event.preventDefault();
		
		var titolo=$("input[name='titolo']").val();
		console.log(titolo);
		$.ajax({
			url:"http://www.omdbapi.com/?s="+titolo,
			method:"GET"
		}).then(function(data){
			var tr="";
			for (var i=0;i<data.Search.length;i++){
				
				var obj=data.Search[i];
				tr += "<tr"+obj.Title+">";
				tr+="<td>" + obj.Years + "</td>";
				tr+="<td>" + obj.imdbID + "</td>";
				tr+="<td>" + obj.Type + "</td>";
				tr+="<td>" + obj.Poster + "</td>";
				tr+="</tr>";
					
			}
			$("#listafilm").html(tr);
		});
	
	});

});
