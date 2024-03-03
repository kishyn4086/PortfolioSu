
  
     


          
           
        var number = 1
        var clickCount = 0
        var 화면크기 = window.innerHeight;

        var projectTitle = ['Sanke Oil','Donuts','Endless apartment','Happy Valentine','Replica','Catch me if you can','Brightness','folding','Metall? Metall!','Ghost hunters','Ways of seeing ways of reading']
        var projectText = [`Snake Oil is a web-based game that informs about the environmental effects of our daily internet usage in a playful way, using ASCII aesthetics. This website creates a 0.1% carbon footprint every time it is visited.`,
      `The website is a self-archive documenting my journey in making donuts, crafted during the Ultralight website workshop hosted by Laural Schwulst and Andre Fuchs.`,
      `This website shows an endlessly long apartment that never ends. You can also print the section up to where you have scrolled.`,
      `A Chrome extension that can be used to surprise your Valentine on Valentine's Day by changing all images on a website to ❤️`,
      `Replicas of landmarks located around the world serve as an alternative travel experience, enabling people to visit famous landmarks without having to travel the globe. These replicas come in various sizes and materials, but they all represent one original, raising a variety of questions.
      <br><br>Can authenticity be reproduced?<br>
      Is there no original until there is a replica?<br>
      Does the copy make the original?<br>
      Is bigger better?<br>
      Can memories be recreated?<br>
      Is there an aura in the internet?<br>
      Can one click make you satisfied?
      `,
      'Catch me if you can.',
      `An event with snowfall that appears depending on screen brightness.`,
      `A collection of folded napkins.`,
      `This catalog showcases the diverse artworks created by 30 individuals from the Metal and Sculpture Art Class of 2022-2023. Each artist's section is divided into 3-5 pages, with each section beginning with an index page that provides detailed information 
about the artwork.`,
      `Experimental Offset Print: Concept and Design with Guiyun He, Melissa Treutlein, Lâm Nguyen, Max Dietrich, Mercedes Vitali, Nikola Lijučoková, Uli Holtschlag.`,
      `Typography project: materials(text, images etc.) from the book Ways of Seeing by John Berger.`
  ]

  var id = ['#snakeoil','#donut','#infinite','#heart','#replica','#catchme','#brightness','#folding','#metall','#ghosthunter', '#waysof']


          // 콜백 함수 정의
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          
            // 현재 보이는 요소의 ID에 따라 값을 변경
            let currentId = entry.target.id;
            console.log(currentId)

            // 예시: ID에 따른 제목, 텍스트 등을 설정
            switch (currentId) {
                case 'snakeoil':
                number = 1;
                    $('.title').text(projectTitle[0]);
                    $('.num').text(number);
                    $('.text').html(projectText[0]);
                    break;

                case 'donut':
                number = 2;
                $('.title').text(projectTitle[1]);
                $('.num').text(number);
                    $('.text').html(projectText[1]);
                    break;

                case 'infinite':
                number = 3;
                $('.title').text(projectTitle[2]);
                $('.num').text(number);
                $('.text').html(projectText[2]);
                    break;

                    case 'heart':
                number = 4;
                $('.title').text(projectTitle[3]);
                $('.num').text(number);
                $('.text').html(projectText[3]);
                    break;

                

                case 'replica':
                number = 5;
                $('.title').text(projectTitle[4]);
                $('.num').text(number);
                    $('.text').html(projectText[4]);
                    break;

                 case 'catchme':
                 number = 6;
                $('.title').text(projectTitle[5]);
                $('.num').text(number);
                    $('.text').html(projectText[5]);
                    break;

                case 'brightness':
                number = 7;
                $('.title').text(projectTitle[6]);
                $('.num').text(number);
                $('.text').html(projectText[6]);
       
                    break;

                    case 'folding':
                    number =8;
                $('.title').text(projectTitle[7]);
                $('.num').text(number);
                    $('.text').html(projectText[7]);
                    console.log('catchme')
                    break;

                    case 'metall':
                    number = 9;
                $('.title').text(projectTitle[8]);
                $('.num').text(number);
                    $('.text').html(projectText[8]);
                    console.log('replica')
                    break;

                    case 'ghosthunter':
                    number = 10;
                $('.title').text(projectTitle[9]);
                $('.num').text(number);
                    $('.text').html(projectText[9]);
                    break;

              
              
                // 나머지 id에 대한 케이스
            }
        }
    });
};

// IntersectionObserver 옵션
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // 10% 요소가 보일 때 콜백 실행
};

// IntersectionObserver 생성
let observer = new IntersectionObserver(callback, options);

// 각 .block 요소에 대해 관찰 시작
$('.block').each(function() {
    observer.observe(this);
});


   



    function getRandomColor() {
    var r = Math.floor(Math.random() * 256); // 0-255 사이의 랜덤 값
    var g = Math.floor(Math.random() * 256); // 0-255 사이의 랜덤 값
    var b = Math.floor(Math.random() * 256); // 0-255 사이의 랜덤 값
    var a = 0.4; // 알파 값을 고정값으로 설정

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

var randomColor = getRandomColor();




// color: rgba(84, 84, 84, 0.845);
//to verify our color

var time = 700



for (let i = 0; i < 6; i++) {
    time += 700;
    setTimeout(function() {
        $('.menu p').eq(i).css('border', '0.8px solid  rgb(50, 50, 50);');
        $('.menu p').eq(i).css('background-color', 'rgba(255, 255, 46, 0.961)');
        $('.menu p').eq(i).css('color', ' rgba(84, 84, 84, 0.845)');
        if(i == 3){
      $('button').css('color', 'rgba(84, 84, 84, 0.845)');
    }
    }, time);

   
}

setTimeout(function() {
  $('.intro').css('transition','all 2.5s ease');
    $('.intro').css('visibility','visible');
    $('.intro').css('opacity','1'); 
    
}, time - 700);




$('.menu p').eq(0).on('mouseenter', function() {
  $('.menu p').eq(0).css('height', '26vh');
});

$('.menu p').eq(0).on('mouseleave', function() {
    $('.menu p').eq(0).css('height', '2vh');
});
        




function updateTextHeight(element) {
    var textHeight = element.prop('scrollHeight');
    element.css('height', textHeight);
}

// dynamic-height 클래스를 가진 모든 요소에 대해 이벤트 리스너 추가
$('.menu p.dynamic-height').on('mouseenter', function() {
    updateTextHeight($(this));
});

$('.menu p.dynamic-height').on('mouseleave', function() {
    $(this).css('height', '2vh');
});

$('.menu p.dynamic-height').on('touchstart', function() {
    updateTextHeight($(this));
});

$('.menu p.dynamic-height').on('touchend', function() {
    $(this).css('height', '2vh');
});




       
  

        $('.next').on('click',function(){
          var randomColor = getRandomColor();

          if(number < 10){
          number++;
          $('.num').text(number)

        $(id[number - 1])[0].scrollIntoView({ behavior: 'smooth' });
        $('.title').text(projectTitle[number - 1]);
        $('.text').html(projectText[number - 1]);
        // $('.menu p').eq(1).css('background-color', randomColor);
          }
        });




        $('.pre').on('click',function(){

          var randomColor = getRandomColor();

          if(number > 1){
            number -= 1;
          $('.num').text(number)
          // window.scrollBy(0, 1100)
          $(id[number - 1])[0].scrollIntoView({ behavior: 'smooth' });
        $('.title').text(projectTitle[number - 1]);
        $('.text').html(projectText[number - 1]);
          } 
        })
  
 



// // 'observer' 대신 'videoObserver'를 사용
// let videoObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const iframe = entry.target.querySelector('iframe');
//       const player = new Vimeo.Player(iframe);
//       player.play(); // 비디오를 재생합니다.
//     } else {
//       // 화면에 들어왔을 때
//       const iframe = entry.target.querySelector('iframe');
//       const player = new Vimeo.Player(iframe);
//       player.play(); // 비디오를 재생합니다.
//     }
//   });
// }, { threshold: 0.5 });

// // 감시할 대상 요소 등록
// document.querySelectorAll('.vimeo').forEach((div) => {
//   videoObserver.observe(div);
// });

let videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const iframe = entry.target.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    if (entry.isIntersecting) {
      // 화면에 들어왔을 때 비디오 재생
      player.play();
    } else {
      // 화면에서 벗어났을 때 비디오 중지 또는 일시 정지
      player.pause(); // 또는 player.stop(); 
    }
  });
}, { threshold: 0.5 });

// 감시할 대상 요소 등록
document.querySelectorAll('.vimeo').forEach((div) => {
  videoObserver.observe(div);
});




var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      
    });







        