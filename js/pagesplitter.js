/* makes a link with a page from an anchor link.
	href="#myEntry" ==> get first character (lowercase).
	=
	href="../pages/m.html#myEntry"
*/
$(document).ready(function()
{
	$("a").click(function()
	{
		if($(this).hasClass("excludelink"))
			return;
		
		var h = $(this).attr("href");
		var h2="";
		if(h.length>0)
		{
			if(h[0]=="#")
			{
				var ch=h[1].toLowerCase();
				h2="../pages/"+ch+".html";
			}
		}
		h2+=h;
		$(this).attr("href", h2);
		//alert("link clicked: "+$(this).attr("href"));
	});
});