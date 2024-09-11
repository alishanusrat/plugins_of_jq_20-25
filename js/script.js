/*-----------------jq-----------------*/

   $(document).ready(function() {
  $('.wrapper').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
  });
  });

     /*----preloader--*/
$(document).ready(function() {
$('.js-preloader').preloadinator({
  animation: 'fadeOut',
  animationDuration: 800,
  minTime: 2000

});
 });


/*------lightbox----------*/

var gallery = $('.gallery a').simpleLightbox();
gallery.on('next.simplelightbox', function () {
   });


/*---------mixitup-----------*/

$('#mix-wrapper').mixItUp({
  load: {
    sort: 'order:asc'
  },
    animation: {
    effects: 'fade rotateZ(-180deg)',
    duration: 700
  },
  selectors: {
    target: '.mix-target',
    filter: '.filter-btn',
    sort: '.sort-btn'
  },
  callbacks: {
    onMixEnd: function(state){
      console.log(state)
    }
  }
});

/*----------counter1-----------*/
//1

$('.count').counterUp({
    delay: 5,
    time: 500
});



//3
    var countdown = $("#countdown2").countdown360({

    radius      : 60,

    seconds     : 100,

    fontColor   :'#333333',

    autostart   :true,

    onComplete  :function () { console.log('done') }

});
    countdown.start();




/*-----------counter seven digit,page2--------------*/
//5

  var segments = {
  0:   ['a', 'b', 'c',    'e', 'f', 'g'],
  1:   [   'c','f'   ],
  2:   ['a',    'c', 'd', 'e',    'g'],
  3:   ['a',    'c', 'd',    'f', 'g'],
  4:   [   'b', 'c', 'd',    'f'   ],
  5:   ['a', 'b',    'd',    'f', 'g'],
  6:   ['a', 'b',    'd', 'e', 'f', 'g'],
  7:   ['a',    'c',   'f'   ],
  8:   ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9:   ['a', 'b', 'c', 'd',    'f', 'g'],
  'all': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  '-':   [     'd'     ]
};

var lightSegments = function(number, clazz) {
  segments['all'].forEach(function(seg) {
    $(clazz + '.' + seg).css("background-color", 'red');

var opacity = 0.15;
if ($.inArray(seg, segments[number]) > -1) {
  opacity = 1;
}
$(clazz + '.' + seg).fadeTo(300, opacity);
  });
};

var i1 = 0;
var i2 = 0;
var counter = function () {
  lightSegments(i1, 'div.d1 div');
  lightSegments(i2, 'div.d2 div');

  i1++;
  if (i1 == 10) {
    i1 = 0;
    i2++;
  }
  if (i2 == 10) {
    i2 = 0;
  }
};


  lightSegments('-', 'div.d1 div');
  lightSegments('-', 'div.d2 div');

 
  var myTimer = window.setInterval(function () {
    counter();
  }, 1000); // 1000ms












/*-------------------js------------------*/

/*---------box animation,page3----------*/
//2
  wow = new WOW( {
  boxClass:     'wow',     
   animateClass: 'animated', 
   offset:       0,         
     mobile:       true,      
     live:         true       
    }
   )
    wow.init();



/*----------hr,min counter-----------*/
//4
     
    window.addEventListener('load', function () {
    // console.log("Windows loading");

    //Getting dashboard  ( Checking if we are in dashboard or not)
    var dashboard = document.getElementById("page_name");
    //Start button 
    var start_button = document.getElementById("start_button");
    //Stop button
    var stop_button = document.getElementById("timer_submit");
    //timer 
    var hour = document.getElementById("hour");
    var mint = document.getElementById("min");
    var secd = document.getElementById("sec");

    // console.log(timer.innerHTML);

    if (dashboard != null && localStorage.getItem('start_button') == null) {
        // console.log("in Dashboard and start button not clicked");
        //Declaring variable  
        var hr = 0;
        var min = 0;
        var sec = 0;

    } else if ((dashboard != null && localStorage.getItem('start_button') != null)) {
        $("#start_button").prop("disabled", true);
        $("#start_button").removeClass("btn-outline-success");
        $("#start_button").addClass("btn-light");
        start_button.innerHTML = "Running";

    }




    if (start_button) {
        start_button.addEventListener('click', function () {
            // console.log('start button working');
            localStorage.setItem('start_button', 'clicked');
            $("#start_button").prop("disabled", true);
            $("#start_button").removeClass("btn-outline-success");
            $("#start_button").addClass("btn-light");
            start_button.innerHTML = "Running";
            var total_time = document.getElementById("total_time");
            if (total_time) {
                total_time.innerHTML = "Counting...";
            }
            timerCycle();

        })
    }
    if (stop_button) {
        stop_button.addEventListener('click', function () {

            // saveData(hr, min, sec);                          To get data after stop button active this fuction
            localStorage.clear();
            hour.innerHTML = '00';
            mint.innerHTML = '00';
            secd.innerHTML = '00';
            var total_time = document.getElementById("total_time");
            if (total_time) {
                total_time.innerHTML = hr + ':' + min + ':' + sec;
            }
            //Stopping the cycle
            clearTimeout(cycle);
            hr = 0;
            min = 0;
            sec = 0;
            $("#start_button").prop("disabled", false);
            $("#start_button").addClass("btn-success");
            $("#start_button").removeClass("btn-light");
            start_button.innerHTML = "Start";


        })
    }
    //continue timer on other pages 
    if (dashboard == null && localStorage.getItem('start_button') != null) {
        sec = localStorage.getItem('sec');
        min = localStorage.getItem('min');
        hr = localStorage.getItem('hr');
        timerCycle();
        //continue timer on coming back Dashboard
    } else if (dashboard != null && localStorage.getItem('start_button') != null) {
        sec = localStorage.getItem('sec');
        min = localStorage.getItem('min');
        hr = localStorage.getItem('hr');
        timerCycle();
    }
    function timerCycle() {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        localStorage.setItem('hr', hr);
        localStorage.setItem('min', min);
        localStorage.setItem('sec', sec);
        // console.log(timer);
        // console.log(timer.innerHTML);

        hour.innerHTML = hr;
        mint.innerHTML = min;
        secd.innerHTML = sec;

        // if (dashboard == null && localStorage.getItem('start_button') != null) {
        //     var side_timer = document.getElementById('time_title');
        //     if (side_timer) {
        //         handling other counter changeing URL        [Put Where you want to show your counter after URL change]
        //         hour.innerHTML = hr;
        //         min.innerHTML = min;
        //         sec.innerHTML = sec;
        //     }

        // } else {

        // }


        cycle = setTimeout(timerCycle, 1000);
    }

   });



