webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//那么事件稀释和判断的操作去哪里呢，放在methods和event中
var f = new _index2.default();
xtag.register('x-praise', {
    content: "<div class='hand' id='thumb'>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger thumb'></div>" + "<div class='arm'></div>" + "</div>" + "<span class='hide' id='animation'>+1</span>",

    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction(); //向后台请求
            //然后让animation出现，首先通过id来找到animation
            var animation = _this.querySelector("#animation");
            animation.className = "hide num"; //且把animation的className重新赋值
            setTimeout(function () {
                animation.className = "hide";
            }, 800);
        }
    },

    events: {
        click: function click(e) {
            var _this = this;
            if (e.target.id == "thumb") {
                //首先判断点击事件是否点击到thumb
                var t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ })

},[4]);