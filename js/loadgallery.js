/*
--------------------------------------------------------
  
  Version       :  1.0 
  
  Author        :  Abhiram Giri
  
  Author URI    :  https://abhiramgiri.in
  
  Author Email  : abhiram.giri@gmail.com

--------------------------------------------------------
*/

/*  ------------------
    Remove Preloader
    ------------------  */

// $(window).load(function () {
    
        
// });

$(document).ready(function () {
    var i;
        var content="";
        for (i = 0; i < 29; i++) {    
            content += '<li class="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="./galleryimages/IMAGE_'+i+'.JPG" data-src="./galleryimages/IMAGE_'+i+'.JPG" data-sub-html=""><a href=""><img class="img-responsive" src="./galleryimages/IMAGE_'+i+'.JPG"></a></li>';
        }        
        $('#lightgallery').html(content);
    $('#lightgallery').lightGallery(); 
});
