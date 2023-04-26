var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "李翊琪",
          cover:
            "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
          address: "淡江大學 教育科技學系",
          tel: "看日劇、看美劇",
          opentime: "無尾熊（Koala）",
          title_url: "https://www.facebook.com/IlluminationBooks/",
          bgimage: ""
        },
        ],

        cards5: [
          {
          // title: "李翊琪",
          // cover:
          //   "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
          // address: "410730302",
          // tel: "淡江大學 教育科技學系",
          // opentime: "無尾熊（Koala）",
          // title_url: "https://www.facebook.com/IlluminationBooks/",
          bgimage: ""
        },
        ],

        cards2: [
          {
            // title: "作品集-攝影課",
            // cover:
            //   "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
            // address: "作品集-攝影課",
            // tel: "02 2550 7288",
            // opentime: "今日正常營業，14:00-2130",
            // title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          ],


          cards3: [
            {
              bgimage: ""
            },
            ],


          cards4: [
            {
              // title: "其他攝影作品",
              bgimage: ""
            },
            ],

          cards6: [
            {
            // title: "李翊琪",
            // cover:
            //   "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
            // address: "410730302",
            // tel: "淡江大學 教育科技學系",
            // opentime: "無尾熊（Koala）",
            // title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          ],

          cards7: [
            {
              // title: "其他攝影作品",
              bgimage: ""
            },
            ],
    

    },
    
    mounted:function(){        
        const swiper = new Swiper('.carousel', {
          loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },    
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            }
        });  

        }
  });
