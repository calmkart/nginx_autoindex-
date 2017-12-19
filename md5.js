$(document).ready(function(){
	var current_index = 1;
	function get_md5(){
		if(current_index==$("tr").length){
			return;
		}

		var url = $("tr")[current_index].childNodes[0].childNodes[0].href;
		$.ajax({
        	url: url,           
        	type: "HEAD",
        	complete: function(jqXHR, textStatus) {
        		var file_size = $("tr")[current_index].childNodes[1].childNodes[0].data;     
        		var md5 = jqXHR.getResponseHeader("Content-MD5");
        		console.log(jqXHR.getAllResponseHeaders());
        		if(md5!=null && file_size!="-"){
        			$("tr")[current_index].childNodes[1].innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"+"[md5:"+md5+"]");
        			}
        		current_index++;
        		get_md5();
        		}
    		});
		}
	get_md5();
});
