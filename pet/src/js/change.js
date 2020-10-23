$('.mask-1').mouseover(function(){
    $('.float-block-1').show()
    $('.big-image').show()
})
$('.mask-1').mouseout(function(){
    $('.float-block-1').hide()
    $('.big-image').hide()
})
$('.mask-1').mousemove(function(evt){
    var left = evt.pageX - $('.dog-det').offset().left - ($('.float-block-1').width() / 2);
    var top = evt.pageY - $('.dog-det').offset().top - ($('.float-block-1').height() / 2);
        if(left <= 0){
            left = 0
        }else if(left >= $('.mask-1').width() - $('.float-block-1').width()){
            left = $('.mask-1').width() - $('.float-block-1').width()
        }
        if(top <=0){
            top = 0
        }else if(top >= $('.mask-1').height() - $('.float-block-1').height()){
            top = $('.mask-1').height() - $('.float-block-1').height()
        }
        $(".float-block-1").css({
            "left": left,
            "top": top
        })
        var movex= left / ($(".mask-1").width() - $(".float-block-1").width())
        var movey = top / ($(".mask-1").height() - $(".float-block-1").height())
        $(".big-image img").css({
            "left": -movex * ($(".big-image img").width() - $(".big-image").width()),
            "top": -movey * ($(".big-image img").height() - $(".big-image").height())
        }) 
})