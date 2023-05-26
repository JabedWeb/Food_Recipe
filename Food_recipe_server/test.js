jQuery(window).scroll(function() {
    var navWrapper = jQuery('.wd-nav-wrapper.wd-nav-tabs-wrapper.text-center');
  var navWrapperTop = navWrapper.offset().top;
    if (jQuery(this).scrollTop() > navWrapperTop) {
      jQuery('span.price.amount.final').addClass('sticky');
    } else {
      jQuery('span.price.amount.final').removeClass('sticky');
    }
  });
  
  var navWrapper = jQuery('.wd-nav-wrapper.wd-nav-tabs-wrapper.text-center');
  var navWrapperTop = navWrapper.offset().top;


  jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
      if (jQuery('.span.price.amount.final').hasClass('sticky')) {
        jQuery('.wd-sticky-btn-cart .price').css('display', 'none');
      } else {
        jQuery('.wd-sticky-btn-cart .price').css('display', 'block');
      }
    });
  });
  


  jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
      if (jQuery('.sticky').length > 0 || jQuery('.sticky').find('.sticky').length > 0) {
        jQuery('.price').css('display', 'none !important' );
      } else {
        jQuery('.price').css('display', 'block !important');
      }
    });
  });
  

