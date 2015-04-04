jQuery(document).ready(function($) {
	var et_settings_box_jqueryObject = $("p.et_pb_page_settings.et_pb_page_layout_settings");
	var target = document.querySelector('p.et_pb_page_settings.et_pb_page_layout_settings');
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log("style changed");
        		et_settings_box_jqueryObject.show();
    		});    
	});
	
	if (target) {
		console.log("I'm going to load the observer");
		observer.observe(target, { attributes : true, attributeFilter : ['style'] });	
	}
	
// Solo si el post es nuevo o está en draft y es del tipo banda o lección
	if ( $("#publish").val() === "Publish" && ($("body.post-type-bands") || $("body.post-type-lessons")) ) {
		$("select#et_pb_page_layout").val("et_full_width_page");	
	}
	
	var taxonomyCategory = $("#taxonomy-category");
	if (taxonomyCategory) {
		taxonomyCategory.prepend('<input placeholder="Search Me" id="box" type="text" />');
		$('#box').keyup(function(){
			   var valThis = $(this).val().toLowerCase();
			    $('ul.categorychecklist>li>label').each(function(){
			     var text = $(this).html().toLowerCase();
				(text.indexOf(valThis) >= 0) ? $(this).parent().show() : $(this).parent().hide();            
			   });
			});
	}
	
})