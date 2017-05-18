(function($){
    $(document).ready( function(){
       $("#send").click(function(){
           $("#restTest").load("test.html",function(){$(".comment").animate({backgroundColor:'pink'},1000)});
       })
    });
})(jQuery);
