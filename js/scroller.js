$(function() {
Touch_Start = 0;  // Коорд нач. точки
Touch_End = 0;    // Коорд кон. точки
Touch_Moove = 0;  // Коорд текущ. точки 

 $(".scroller").on("touchstart", function(e) {     
     event.preventDefault();
     event.stopPropagation();
     Touch_Start = event.targetTouches[0].screenY;

    
});//---touchstart


 $(".Middle_Sector").on("touchmove", function(e) {     
     event.preventDefault();
     event.stopPropagation();
     Touch_Moove =  event.targetTouches[0].pageY;   
     //console.log(Touch_Moove);
     var  up_moove = $(".swiper-wrapper").css("transform");
     up_moove = up_moove.substring(22, 26);
     up_moove = parseInt(up_moove);
     up_moove = up_moove + 10;
    // console.log(up_moove, "up_moove")
     if(up_moove <= -144){
         up_moove = -300
     }
     up_moove = up_moove - (up_moove*2);
     scroller($(".scroller"), up_moove);

});//---touchmove 


 $(".scroller").on("touchend", function(e) {     
     event.preventDefault();
     event.stopPropagation();
     Touch_End =  event.changedTouches[0].pageY;
     Touch_Start = 0;//---обнуляем координаты нач.точки
});//---touchend
   var scroller = function(el,y){
       startY = parseInt(y);
    if(startY < 1){
       startY = 0;
       $(el).css({"top" : startY });
    }else if(startY > 280){
       startY = 280;
       $(el).css({"top" : startY });
    }else if(startY < 280){
       $(el).css({"top" : startY });
    }
   }  
});