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
        for (i = 0; i < 28; i++) {    
            content += '<li class="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="./galleryimages/thumbnail/IMAGE_'+i+'.jpg" data-src="./galleryimages/view/IMAGE_'+i+'.jpg" data-download-url="./galleryimages/download/IMAGE_'+i+'.JPG"><a href=""><img class="img-responsive" src="./galleryimages/thumbnail/IMAGE_'+i+'.jpg"></a></li>';
        }        
        $('#lightgallery').html(content);
    $('#lightgallery').lightGallery(); 
});
