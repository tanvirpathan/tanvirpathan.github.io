$(function() {

	smoothScroll(1500);
	qualificationBelt();
	workLoad ();
	experienceStuff();
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function qualificationBelt() {

	$('.thumb-unit').click(function () {
		$('.qualification-belt').css('left' , '-100%');
		$('.qualification-container').show();
	});
	
	$('.qualification-return').click(function () {
		$('.qualification-belt').css('left' , '0%');
		$('.qualification-container').hide();
	});
	
}

function workLoad() {

	$.ajaxSetup({ cache: true});
	$('.thumb-unit').click(function () {
		
		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newfolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '/qualification/'+newfolder+'.html'; 
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
		
	});
}
function experienceStuff() {
  
  $('.experience-unit').first().addClass('active-experience');
  $('.experience-logo').first().addClass('active-experience');
  $('.experience-mobile-nav span').first().addClass('active-experience');

  
  
  $('.experience-logo, .experience-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);
        
    $('.experience-unit').removeClass('active-experience').eq(position).addClass('active-experience');
    $siblings.removeClass('active-experience');
    $this.addClass('active-experience');
  });
  
  
  $('.experience-control-next, .experience-control-prev').click(function() {
  
    var $this = $(this),
        curActiveexperience = $('.experience-belt').find('.active-experience'),
        position = $('.experience-belt').children().index(curActiveexperience),
        experienceNum = $('.experience-unit').length;
        
      if($this.hasClass('experience-control-next')) {
        
        if(position < experienceNum -1){
          $('.active-experience').removeClass('active-experience').next().addClass('active-experience');
        } else {
          $('.experience-unit').removeClass('active-experience').first().addClass('active-experience');
          $('.experience-logo').removeClass('active-experience').first().addClass('active-experience');
        }
        
      } else {
        
        if (position === 0) {
          $('.experience-unit').removeClass('active-experience').last().addClass('active-experience');
          $('.experience-logo').removeClass('active-experience').last().addClass('active-experience');
        } else {
          $('.active-experience').removeClass('active-experience').prev().addClass('active-experience');  
        }

      }
        
  
  });
  
}  
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

 


