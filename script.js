/*ANDREA MUNARIN MATRICOLA = 879607*/

$(document).ready(function() {
		
		/*inserisco tutte le immagini e i bottoni in un div <center> in modo siano posizionate al centro della pagina*/
		$("img").wrapAll("<center></center>");
		$("button").wrapAll("<center></center>")
		
		/*imposto stile css dei bottoni*/
		$("button").addClass("glass");
		
		/*nascondo tutte le immagini e imposto il loro stile*/
		$("img").hide();
		$("img").css("width", "50%").css("height" , "auto");
		
		/*aggiungo un attributo ad ogni immagini che definisce se l'immagine è visualizzata*/
		$("img").eq(0).attr("visual", "true");
		$("img").eq(1).attr("visual", "false");
		$("img").eq(2).attr("visual", "false");
		$("img").eq(3).attr("visual", "false");
		
		/*visualizzo la prima immagine (con effetto show)*/
		$("img[visual='true']").show(1000);
		
		/*implementazione funzioni onclick dei due bottoni*/
		$("#nextbutton").click(function(){
			/*salvo quale è l'immagine ora visualizzata*/
			var aux = $("img[visual='true']");
			
			/*se si tratta dell'ultima devo ritornare alla prima*/
			if($("img").last().attr("visual")=="true")
				$("img").first().attr("visual", "true");
			else/*altrimenti imposto l'attributo visual a true per l'elemento successivo presente nello stesso div*/
				aux.next("img[visual='false']").attr("visual", "true");
			
			/*avendo salvato l'immagine visualizzata precedentemente posso ora impostare il suo attributo a false*/
			aux.attr("visual", "false");
			
			/*faccio svanire l'immagine e con una funzione di callback faccio apparire tutte quelle con attributo visual = true (ce ne sarà sempre solo una)*/
			aux.fadeOut(1000,function(){
				$("img[visual='true']").fadeIn(1000);
			});

		});
		
		$("#prevbutton").click(function(){
			var aux = $("img[visual='true']");

			if($("img").first().attr("visual")=="true")
				$("img").last().attr("visual", "true");
			else
				aux.prev("img[visual='false']").attr("visual", "true");
			
			aux.attr("visual", "false");
			
			aux.fadeOut(1000,function(){
				$("img[visual='true']").fadeIn(1000);
			});
		});
});