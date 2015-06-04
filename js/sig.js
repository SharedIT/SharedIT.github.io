$(document).ready(function()
{
	$("input, textarea").keyup(function() {
		$("#" + $(this).data("span")).text($(this).val());
		$("#" + $(this).data("span") + "mail").attr("href","mailto:" + $(this).val());
	})

	$("#remove").click(function() {
		$("input[type='tel']").each(function() {
			$(this).val() == "" ? $("#" + $(this).data("span")).remove(): false;
			$(this).val() == "" ? $("#" + $(this).data("span") + "wrap" ).remove(): false;
		})

	})

	$("#png").change(function() {
		$("#svgImage").hide();
		$("#pngImage").show();
	})
	$("#svg").change(function() {
		$("#pngImage").hide();
		$("#svgImage").show();
	})

});
