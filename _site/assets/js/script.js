jQuery(document).ready(function(){
	var windowHeight = jQuery(window).height();
	var windowScrollPosTop = jQuery(window).scrollTop();
	var windowScrollPosBottom = windowHeight + windowScrollPosTop;
	
	jQuery.fn.bounceInLeft = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			
			if(!jQuery(this).hasClass("bounceInLeft animated")){
				
				if (windowScrollPosBottom + 80> objectOffset){
					
					jQuery(this).addClass("bounceInLeft animated");
				}

			}
		});
	}
	jQuery.fn.fadeInUp = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			if(!jQuery(this).hasClass("fadeInUp animated")){
				if (windowScrollPosBottom + 80 > objectOffset){

					jQuery(this).addClass(" fadeInUp animated " );
					
				}
			}
		});
	}
	jQuery.fn.fadeInDown = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			if(!jQuery(this).hasClass("fadeInDown animated")){
				if (windowScrollPosBottom + 80 > objectOffset){

					jQuery(this).addClass(" fadeInDown animated " );
				}
			}
		});
	}
	jQuery.fn.fadeInLeft = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			if(!jQuery(this).hasClass("fadeInLeft animated")){
				if (windowScrollPosBottom + 80 > objectOffset){

					jQuery(this).addClass(" fadeInLeft animated " );
				}
			}
		});
	}
	jQuery.fn.fadeInRight = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			if(!jQuery(this).hasClass("fadeInRight animated")){
				if (windowScrollPosBottom + 80 > objectOffset){

					jQuery(this).addClass(" fadeInRight animated " );
				}
			}
		});
	}
	jQuery.fn.zoomInUp = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			if(!jQuery(this).hasClass("zoomInUp animated")){
				if (windowScrollPosBottom + 80 > objectOffset){

					jQuery(this).addClass(" zoomInUp animated " );
				}
			}
		});
	}
	jQuery.fn.bounce = function(){
		return this.each(function(){

			var objectOffset = jQuery(this).offset();
			var objectOffset = objectOffset.top;
			if(!jQuery(this).hasClass("bounce animated")){
				if (windowScrollPosBottom + 80 > objectOffset){

					jQuery(this).addClass(" bounce animated " );
				}
			}
		});
	}


	jQuery(window).scroll(function(){
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;

		jQuery("#about, #qualifications, #experience, #contact").bounceInLeft();
		jQuery(".face-lockup, .blurb, .thumb-wrap").fadeInUp();
		
		jQuery(".experience-picture, .address, .address1, .address2").fadeInLeft();
		jQuery(".experience-content, .form").fadeInRight();
		jQuery(".experiences-logos").zoomInUp();
		jQuery(".social-links").bounce();
	

	});
});