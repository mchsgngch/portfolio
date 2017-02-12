/*カルーセルの設定*/

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: true,
            dots: true,
            items: 1,
            autoplay: true,
//            autoHeight: true,
//            autoWidth: true,
//            mergeFit: true,
            navigationText: ["戻る", "次へ"]
        }
    );
});
