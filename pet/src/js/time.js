// window.onload = function(){
//     setInterval(function(){
//         var laterdate = new Date('2020/10/31');
//         var now = new Date();
//         var seconds = Math.floor((laterdate - now) / 1000);
//         var day = Math.floor(seconds / 60 / 60 / 24)
//         var hours = Math.floor((seconds - day * 24 * 60 * 60) / 60 / 60)
//         var minutes = Math.floor((seconds - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
//         var sec = seconds % 60;
//         if (minutes <= 9) minutes = '0' + minutes;
//         if (sec <= 9) sec = '0' + sec;
//         if(hours <= 9) hours = '0' + hours;
//         $('.time-1').html(day)
//         $('.time1-2').html(hours)
//         $('.time1-3').html(minutes)
//         $('.time1-4').html(sec)
//     },1000)
// }
function time(change){
    setInterval(function(){
        var laterdate = new Date(change);
        var now = new Date();
        var seconds = Math.floor((laterdate - now) / 1000);
        var day = Math.floor(seconds / 60 / 60 / 24)
        var hours = Math.floor((seconds - day * 24 * 60 * 60) / 60 / 60)
        var minutes = Math.floor((seconds - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
        var sec = seconds % 60;
        if (minutes <= 9) minutes = '0' + minutes;
        if (sec <= 9) sec = '0' + sec;
        if(hours <= 9) hours = '0' + hours;
        $('.time-1').html(day)
        $('.time1-2').html(hours)
        $('.time1-3').html(minutes)
        $('.time1-4').html(sec)
    },1000)
}
time('2020/11/29')