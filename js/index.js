    var swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
    });
    var swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      pagination: {
          el: '.swiper-pagination',
        },  
    thumbs: {
        swiper: swiper,
    },
    });
