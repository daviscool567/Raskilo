// Dom7
var $ = Dom7;
// Theme
var theme = 'ios';
// Init App
var app = new Framework7({
  el: '#app',
  theme : theme,
  routes: routes,
  view : { browserHistory: true, },
});









$(document).on('page:init', '.page[data-name="splash"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/landing/');
  }, 1000);
})

$(document).on('page:init', '.page[data-name="landing"]', function (e) {
  var swiper1 = app.swiper.create(".swiper-intro", {
    slidesPerView: "auto",
    spaceBetween: 10,
       autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    pagination: {
      el: '.pagination-intro'
    }
  });
});

$(document).on('page:init', '.page[data-name="home"]', function (e) {
     setTimeout(function () {
         loadShopBanner();
    /////////////////////////
     var ndate = new Date();
    var hours = ndate.getHours();
    var message = hours < 12 ? 'Good Morning!  ' : hours < 16 ? 'Good Afternoon!  ' : 'Good Evening!   ';
    $("#currenttime").html(message);      
      callProfile();   
      loadService(); 
         loadCount();
     }, 300);
    
  /* filter sliders range picker for filter */
  var html5Slider = document.getElementById('rangeslider');
  noUiSlider.create(html5Slider, {
    start: [100, 200],
    connect: true,
    range: {
      'min': 0,
      'max': 500
    }
  });

  var inputNumber = document.getElementById('input-number');
  var select = document.getElementById('input-select');

  html5Slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
      inputNumber.value = value;
    } else {
      select.value = Math.round(value);
    }
  });

  select.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });
  inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });

  /* carousel */
  var swiper2 = new Swiper(".offerslides", {
    slidesPerView: "1",
    spaceBetween: 10,
      autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".pagination-offerslides",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }); 
 
})

//////////////////
//////////profile////
$(document).on('page:init', '.page[data-name="profilex"]', function (e) {
     setTimeout(function (){
         
     var user = localStorage.getItem("rask_user");
     var eml  = localStorage.getItem("rask_email");
     var name  = localStorage.getItem("rask_name");
         
     if(user == '' || user == null || eml == '' || eml == null || name =='' || name == null)
	{
       
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	} 
         else
         {
           callProfilex();  
         }
  }, 500);  
})
//////////////
$(document).on('page:init', '.page[data-name="thankyou"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/home/');
  }, 2000);
})

/////thank you order
$(document).on('page:init', '.page[data-name="thankyouorder"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/shop/', {reloadAll: true});
  }, 3000);
})

////////////////////////////////
///////////////////////////////
$(document).on('page:init', '.page[data-name="my-service-list"]', function (e) {
  setTimeout(function () {
    loadMyService();
  }, 500);
})

///////////////////////////////
$(document).on('page:init', '.page[data-name="booking"]', function (e) {
  setTimeout(function () {
    loadLocality();
     // callProfilex()
  }, 200);
})

/////////////verify////////////////////////////////
$(document).on('page:init', '.page[data-name="verify"]', function (e) {
  document.getElementById('timer').innerHTML = '5' + ':' + '00';
  startTimer();

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
     
     app.dialog.alert("Verification", "Click Resend to Send OTP Again"); 
         return
    }

    document.getElementById('timer').innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
      
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
  }

});
////////////////
/////////////
///////////////////////////////
///////////ecommerce///
$(document).on('page:init', '.page[data-name="shop"]', function (e) {
     loadShopBanner();
  
    
    
    ////////////
    setTimeout(function () {
    loadShortMenu();
           
        
  }, 500);
    
    
     
    ////////////
    setTimeout(function () {
    
        
     var swiper1x = app.swiper.create(".offerslides2", {
    slidesPerView: "1.3",
    spaceBetween: 10,
       autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    pagination: {
      el: '.pagination-offerslides2'
    }
  });    
        
  }, 2000);
    
    
    
    
      var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
                      
					   if(storedItem.length==0)
					   {
					   
					   }
					   else{
					       $(".countercart").html(storedItem.length);
                           $(".countercart2").html(storedItem.length);
                           $(".countercart3").html(storedItem.length);
                           $(".countercart4").html(storedItem.length);
                           $(".countercart5").html(storedItem.length);
                           $(".countercart6").html(storedItem.length);
                           $(".countercart7").html(storedItem.length);
                          // app.dialog.alert(storedItem.length);
						   
					   }
    /////////////////////////////////
});


//////////all product////
$(document).on('page:init', '.page[data-name="all_product"]', function (e) {
    setTimeout(function () {
       // loadCategoryFilter();
         var cat =  localStorage.getItem("current_category");
       // alert(cat);
        if(cat !='' && cat != null)
            {
               loadStatCat();   
            }
        else{
    loadStat();
        }
       
  }, 500);
    
    
    var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
                      
					   if(storedItem.length==0)
					   {
					   
					   }
					   else{
					      
                           $(".countercart4").html(storedItem.length);
                           
						   
					   } 
    
});
//////////all category////
$(document).on('page:init', '.page[data-name="category"]', function (e) {
    setTimeout(function () {
        loadCategory();
    
  }, 500);
    
    var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
                      
					   if(storedItem.length==0)
					   {
					   
					   }
					   else{
					      
                           $(".countercart3").html(storedItem.length);
						   
					   } 
});


///////////////
/////cart load
//////////all category////
$(document).on('page:init', '.page[data-name="cart"]', function (e) {
    setTimeout(function () {
        loadCart();
    
  }, 500);
     
});

//////////////////
//////////all delivery address////
$(document).on('page:init', '.page[data-name="delivery"]', function (e) {
    setTimeout(function () {
        loadDelivery();
    
  }, 500);
     
});


//////////all load list address////
$(document).on('page:init', '.page[data-name="address-list"]', function (e) {
    setTimeout(function () {
        loadAddressAll();
    
  }, 500);
     
});

//////////all load payment///
$(document).on('page:init', '.page[data-name="summary-pay"]', function (e) {
    setTimeout(function () {
        loadCartAll();
    
  }, 500);
     
});


//////////all load my orders///
$(document).on('page:init', '.page[data-name="my-orders"]', function (e) {
    setTimeout(function () {
        loadSales();
    
  }, 700);
     
});


//////////all load list state////
$(document).on('page:init', '.page[data-name="all-state"]', function (e) {
    setTimeout(function () {
        loadStateAll();
    
  }, 500);
     
});

/////review//////
$(document).on('page:init', '.page[data-name="pending-review"]', function (e) {
    setTimeout(function () {
        loadAllReview();
    
  }, 500);
     
});

//////////////////

$(document).on('page:init', '.page[data-name="product_page"]', function (e) {
  var swiper1 = app.swiper.create(".imageswiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
       autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    pagination: {
      el: '.imageswiper-pagination'
    }
  });
});





/////////////////////////////////
//////////////////////
 //////////////////
     $(document).on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});










