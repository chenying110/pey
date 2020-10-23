var sp = document.getElementById('small-img').getElementsByTagName('a');
for(var i = 0;i < sp.length;i++){
    sp[i].onmouseover = function(){
        document.querySelectorAll("#image").src = this.href;
        return false;
    }
}