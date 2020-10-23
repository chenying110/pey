// $('.menus li').mouseenter(function(){
//     $('.menus li i').css({
//         "transform" : 'rotateZ(360deg)',
//         "transition" : "all 1s "
//     }
//     );
// })
let $li = $('.menus li');
// for(let i = 0;i < $li.length;i++){
//     $li.eq(i).mouseenter(function(){
//         $('.menus li i').css({
//             "transform" : 'rotateZ(360deg)',
//             "transition" : "all 1s"
//         })
//     })
// }

$li.each(function(i,value){
    $(this).mouseenter(function(){
        $(this).find('i').css({
                        "transform" : `rotateZ(${360}deg)`,
                        "transition" : "all 1s "
        })
    })
    $(this).mouseleave(function(){
        $(this).find('i').css({
                        "transform" : ``,
                        "transition" : ""
        })
    })
})
$('.shark-first a img').each(function(){
    $(this).mouseenter(function(){
        $(this).animate({left : '-6px'},500)
    })
    $(this).mouseleave(function(){
        $(this).animate({left : '0px'},500)
    })
})
$('.merge a img').each(function(){
    $(this).mouseenter(function(){
        $(this).css({
            'transform' : 'translateX(-6px)',
            "transition" : "all 1s"
        })
    })
    $(this).mouseleave(function(){
        $(this).css({
            'transform' : 'translateX(0px)',
            "transition" : "all 1s"
        })
    })
})
$('.dog-right-guan img').each(function(){
    $(this).mouseenter(function(){
        $(this).css({
            'transform' : 'translateX(-6px)',
            "transition" : "all 1s"
        })
    })
    $(this).mouseleave(function(){
        $(this).css({
            'transform' : 'translateX(0px)',
            "transition" : "all 1s"
        })
    })
})
$('.dog-three').find('img').each(function(){
    $(this).mouseenter(function(){
        $(this).animate({opacity : '0.7'},500)
    })
    $(this).mouseleave(function(){
        $(this).animate({opacity : '1'},500)
    })
})
$('.clearFix').find('li').each(function(){
    $(this).mouseenter(function(){
        $(this).css({
            'transform' : 'translateY(-10px)',
            "transition" : "all 1s"
        })
    })
    $(this).mouseleave(function(){
        $(this).css({
            'transform' : 'translateY(0px)',
            "transition" : "all 1s"
        })
    })
})
$('.banner-right').find('img').each(function(){
    $(this).mouseenter(function(){
        $(this).animate({left : '-6px'},500)
    })
    $(this).mouseleave(function(){
        $(this).animate({right : '0px'},500)
    })
})
$('.product-img img').each(function(){
    $(this).mouseenter(function(){
        $(this).css({
            'transform' : 'translateY(-6px)',
            'transition' : 'all 1s'
        })
    })
    $(this).mouseleave(function(){
        $(this).css({
            'transform' : 'translateY(0px)',
            'transition' : 'all 1s'
        })
    })
})
$('.foodHead ul li a').each(function(){
    $(this).mouseenter(function(){
        $(this).css('color','green')
    })
    $(this).mouseleave(function(){
        $(this).css('color','black')
    })
})
$('#foodHead ul li a').eq(0).css('color','green')
$('.all .shar').eq(0).css('display','block')
$('#foodHead ul li').mouseenter(function(){
    var index = $(this).index()
    $('.all .shar').eq(index).show().siblings().hide();
    $(this).addClass('change').siblings().removeClass('change')
})
$('#fg ul li a').eq(0).css('color','green')
$('#all .shar').eq(0).css('display','block')
$('#fg ul li').mouseenter(function(){
    var index = $(this).index()
    $('#all .shar').eq(index).show().siblings().hide();
    $(this).addClass('change').siblings().removeClass('change')
})
$('#foodHead2 ul li a').eq(0).css('color','green')
$('#all1 .shar').eq(0).css('display','block')
$('#foodHead2 ul li').mouseenter(function(){
    var index = $(this).index()
    $('#all1 .shar').eq(index).show().siblings().hide();
    $(this).addClass('change').siblings().removeClass('change')
})
$('#foodHead3 ul li a').eq(0).css('color','green')
$('#all2 .shar').eq(0).css('display','block')
$('#foodHead3 ul li').mouseenter(function(){
    var index = $(this).index()
    $('#all2 .shar').eq(index).show().siblings().hide();
    $(this).addClass('change').siblings().removeClass('change')
})
$('#foodHead4 ul li a').eq(0).css('color','green')
$('#all3 .shar').eq(0).css('display','block')
$('#foodHead4 ul li').mouseenter(function(){
    var index = $(this).index()
    $('#all3 .shar').eq(index).show().siblings().hide();
    $(this).addClass('change').siblings().removeClass('change')
})
