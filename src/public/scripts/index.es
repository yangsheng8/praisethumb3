import css from '../css/index.css' //extract-text-webpack-plugin

class PraiseButton {
    constructor() {

    }
    clickAction() {
       alert(11);
        axios.get('/index/update')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

export default PraiseButton 
/*let f=new Thumb(0,$('#thumb'));
f.clickAction();*/