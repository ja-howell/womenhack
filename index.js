window.addEventListener('load', function() {
    console.log("loaded");
    var swiper = {

        touchStartX: 0,
        touchEndX: 0,
        minSwipePixels: 30,
        detectionZone: undefined,
        swiperCallback: function() {},

        init: function(detectionZone, callback) {
            console.log("init");
            swiper.swiperCallback = callback
            detectionZone.addEventListener('touchstart', function(event) {
                swiper.touchStartX = event.changedTouches[0].screenX;
            }, false);
            detectionZone.addEventListener('touchend', function(event) {
                swiper.touchEndX = event.changedTouches[0].screenX;
                swiper.handleSwipeGesture();
            }, false);
        },

        handleSwipeGesture: function() {
            var direction,
                moved
            if (swiper.touchEndX <= swiper.touchStartX) {
                moved = swiper.touchStartX - swiper.touchEndX
                direction = "left"
            }
            if (swiper.touchEndX >= swiper.touchStartX) {
                moved = swiper.touchEndX - swiper.touchStartX
                direction = "right"
            }
            console.log(direction);
            // if (moved > swiper.minSwipePixels && direction !== "undefined") {
            //     swiper.swipe(direction, moved)
            // }
        },

        swipe: function(direction, movedPixels) {
            var ret = {}
            ret.direction = direction
            ret.movedPixels = movedPixels
            swiper.swiperCallback(ret)
        }
    }


    var gestureZone = document.getElementById('container');
    //var gestureZone = document;
    swiper.init(gestureZone, function(e) {
        console.log(e)
    })
}, false);