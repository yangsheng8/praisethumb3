import PraiseButton from './index.es'
//那么事件稀释和判断的操作去哪里呢，放在methods和event中
const f = new PraiseButton();
xtag.register('x-praise', {
    content: "<div class='hand' id='thumb'>" +
        "<div class='finger'></div>" +
        "<div class='finger'></div>" +
        "<div class='finger'></div>" +
        "<div class='finger'></div>" +
        "<div class='finger thumb'></div>" +
        "<div class='arm'></div>" +
        "</div>" +
        "<span class='hide' id='animation'>+1</span>",

    methods: {
        praise: function() {
            let _this = this;
            f.clickAction();//向后台请求
            //然后让animation出现，首先通过id来找到animation
            let animation = _this.querySelector("#animation");
            animation.className = "hide num";//且把animation的className重新赋值
            setTimeout(function() {
                animation.className = "hide"
            }, 800)
        }
    },

    events: {
        click: function(e) {
            let _this = this;
            if (e.target.id == "thumb") {//首先判断点击事件是否点击到thumb
                let t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(() => {
                    _this.praise();
                }, 500);
            }
        },
    }
});