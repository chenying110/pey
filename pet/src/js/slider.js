class Slider{
    constructor(selector){
        this.big_box = document.querySelector(selector);
        this.ul_li = this.big_box.children[1].children;
        this.num = this.ul_li.length;
        this.o_li = this.big_box.children[2].children
        // this.o_bc = this.big_box.parentNode.parentNode;
        this.index_cur = 0;
        this.timer = null;
        this.autoPlay();
        this.addEvent();
    }
    addEvent(){
        for(let i = 0;i < this.num;i ++){
            this.o_li[i].onmouseover = function(){
                this.index_cur = i;
                this.slide();
            }.bind(this);
        }
    }
    slide(){
        for(let i = 0;i < this.num;i ++){
            this.ul_li[i].style.display = 'none';
            this.o_li[i].style.background = 'gray';
        }
        this.ul_li[this.index_cur].style.display = 'block';
        this.o_li[this.index_cur].style.background = 'pink';
    }
    autoPlay(){
        this.timer = setInterval(() => {
            this.index_cur ++;
            if(this.index_cur === this.num){
                this.index_cur = 0;
            }
            this.slide();
        }, 3000);
        this.big_box.onmouseenter = function(){
            clearInterval(this.timer);
        }.bind(this);
        this.big_box.onmouseleave = function(){
            this.autoPlay();
        }.bind(this);
    }
}
new Slider("#wrap");