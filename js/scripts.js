
        //var oContainer = getElementById("container");
        //var oImages = getElementById("images");
        //var oTab = getElementById("tab");
        //var aImg = getElementsByTagName(oImages,"img");
        //var aLi = getElementsByTagName(oTab,"li");
        //var nowIdx = 0;
        //var imgNumber = 1;//图片数量
        //var count = 0;
        //for (var i = 0; i<imgNumber; i++) {
            //var oLi = document.createElement("li"); 
            //oLi.innerHTML = i+1;
            //oTab.appendChild(oLi);
            //var oImg = new Image();
            //oImg.onload = function(){
                //count++;
                //if (count == imgNumber) {
                    //loadSuccess();
                //}
            //};
            //oImg.src = "images/index_03.png";
            //oImages.appendChild(oImg);
        //}
        //function loadSuccess(){
            //changeImg(nowIdx);
            //for (var i = 0; i < aLi.length; i++) {
                //aLi[i].index = i;
                //aLi[i].onmouseover = function(){
                    //changeImg(this.index);
                //};
            //};
        //}
        
        
        //function changeImg(idx){
            //for(var j = 0; j <aLi.length; j++){
                //aLi[j].style.background = 'gray';
                //aImg[j].style.display = 'none';
            //}
            //aLi[idx].style.background = 'yellow';
            //aImg[idx].style.display='block';
        //}       

        


        //function getElementById(id){
            //return document.getElementById(id)
        //}
        //function getElementsByTagName(o,tag){
            //return o.getElementsByTagName(tag)
        //}
        


(function (window) {
    function gnMenu(el) {
        this.el = el;
        this._init();
    }

    gnMenu.prototype = {
        _init: function() {
            var self = this;
            this.trigger = document.getElementById('nav_trigger');
            this.menu = document.getElementById('')
            this.trigger.addEventListener('mouseover', function(ev) {
                self.addClass('gn-open');
            })
            this.trigger.addEventListener('mouseout', function(ev) {
                self.removeClass('gn-open');
            })
        }
    }
    window.gnMenu = gnMenu;
})(window)
