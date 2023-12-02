/////////load details
////////image///////////////
	  function  pic_upload(){
	var file = document.getElementById("pic");
          file.click();
	 file.onchange = function(){
		var input = this.files[0];
		var reader = new FileReader();
		reader.onload = function(e){
		$("#pic_display").attr('src',e.target.result);
	     $("#RemovePic").show();
		}
		reader.readAsDataURL(input);
	}
}

function pic_remove()
{
    
    $("#pic_display").attr('src','img/ui.png');
    $("#RemovePic").hide(); 
}


function sendRequest(){
    let toastWithButton;
	let notificationFull;
   
    var name          = $('#booking_name').val();
    var phone         = $('#booking_mobile').val();
	var address       = $('#booking_address').val();
	var locality      = $('#booking_state').val();
	var service       = $('#booking_service').val();
	var email         = $('#booking_email').val();
    var message       = $('#booking_message').val();
    var service_date  = $("#service_date").val();
    
            var user    = localStorage.getItem("rask_user");
    
   
     if(user == '' || user == null)
	{
         app.views.main.router.navigate('/login2/', {reloadAll: true});
	}
     else if(name =='' || name == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        titleRightText: 'now',
        title  : 'Service Request',
        subtitle: 'Fullname Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
     else if(phone =='' || phone == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Service Request',
        titleRightText: 'now',
        subtitle: 'Mobile Number Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(email =='' || email == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Service Request',
        titleRightText: 'now',
        subtitle: 'Email Address Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(locality == '' || locality == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Service Request',
        titleRightText: 'now',
        subtitle: 'Select Locality',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(address =='' || address == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Service Request',
        titleRightText: 'now',
        subtitle: 'Address Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(service =='' || service == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Service Request',
        titleRightText: 'now',
        subtitle: 'Select Preferred Service Again',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    else if(service_date =='' || service_date == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Service Request',
        titleRightText: 'now',
        subtitle: 'Service Date Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    else if(message =='' || message == null){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'New Visitor',
        titleRightText: 'now',
        subtitle: 'Message Field Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    else{
        app.dialog.preloader('Submitting Details...','lightskyblue');
			$.ajax({
			url: api_url+"send_request.php",
			type: "POST",
			data: new FormData($('#put_service')[0]),
            cache: true,
            contentType: false,
            processData: false,
			dataType: "json",
			success: function(res){
			msg = res.message;
			console.log(res);
        if(res.status == true){                                 
             app.dialog.close();
            
             var phone = sessionStorage.getItem("rask_phone");
             var email = sessionStorage.getItem("rask_email");
            app.views.main.router.navigate('/thankyou/', {reloadAll: true});

        }else{
            app.dialog.close();
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },
        error: function(res){
			console.log(res);
			app.dialog.close(); 
            toastWithButton = app.toast.create({text: 'Connection Error',closeButton: true, closeTimeout: 4000,position:'top' });
            toastWithButton.open();
			}
            }); 
		 
		 }
		 
		 
		 }
   
   
 /////////////////
///////load my requestservice//////
//////////////////
function loadMyService(){
	var list='';
   
	var phone = localStorage.getItem("rask_phone");
    var email = localStorage.getItem("rask_email");
///////////////////////////////////////////
if(email == '' || email == null || phone == '' || phone == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else{
        app.request.post(api_url+'get_requests.php',{ email : email },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'Success'){ 
			app.dialog.close();
            len = res.data.length;
            markService();
		for(i=0; i< len; i++)
		  {
              
              
          
                    list +='<li style="margin-bottom:5px;">\
                    <a href="/view-service/"onclick="viewService(\''+res.data[i].id+'\')"  class="item-link item-content padding"style="background:white;">\
                        <div class="item-inner">\
                            <div class="item-title-row">\
                                <div class="item-title">'+res.data[i].service+'</div>\
                            </div>\
                            <div class="itemtitle">Request Date: '+res.data[i].date_t+'</div>\
                             <div class="itemtitle">Locality: '+res.data[i].locality+'</div>\
                              <div class="itemtitle">Status: '+res.data[i].req_stat+'</div>\
                        </div>\
                    </a>\
                </li>';  
			 
          }
           
			  $("#my_service_list").html(list); 
            
        }
		else{
          app.dialog.close(); 
             list +='<li>\
                    <a href="#" class="item-link item-content bg-light">\
                        <div class="item-media align-self-center">\
                            <figure class="avatar avatar-40 rounded-circle">\
                                <i class="icon f7-icons size-22">book_close</i>\
                            </figure>\
                        </div>\
                        <div class="item-inner">\
                            <div class="item-title-row">\
                                <div class="item-title">No History Found</div>\
                            </div>\
                        </div>\
                    </a>\
                </li>';
			  
			 $("#my_service_list").html(list);  

        }

        },function(err) {           

            if(err.status == 0 ){
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
}

//////////////////////////////
//////////loas general services

////////////////////////////
function loadService(){
	var list='';
    
//////////////////////
        app.request.post(api_url+'get_services.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'Success'){ 
			app.dialog.close();
            len = res.data.length;
            
		for(i=0; i< len; i++)
		  {
              
            list +='<div class="col-25 medium-15 large-10"style="padding:10px;">\
                <div class="card elevation-2 marginbottomhalf">\
                <div class="card-content card-contentpadding"style="height:95px;">\
                  <a href="/order-service/"onclick="orderService(\''+res.data[i].service+'\')" class="text-normal display-block">\
                    <figure class="text-align-center"style="padding:5px;">\
                    <img src="https://raskservices.com/admin/icons/'+res.data[i].icon+'" alt=""style="width:50px;height:40px;margin-bottom:5px;" />\
                 <h6 class="text-color-theme"style="font-size:8pt;font-weight:400;word-break:break-all;">'+res.data[i].service+'</h6>\
                    </figure>\
                  </a>\
                </div>\
              </div>\
            </div>';  
			 
          }
           
			  $("#service_list").html(list); 
            
        }
		else{
          app.dialog.close(); 
         
            setTimeout(function () {  loadService();  }, 1000);
        }

        },function(err) {           

                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
            setTimeout(function () {  loadService();  }, 2000);

            
        }); 
		 
		 }

/////////////////////////
/////////////load locality///////
////////////////////////////
function loadLocality(){
	var list='';
    
//////////////////////
        app.request.post(api_url+'get_locality.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'Success'){ 
			app.dialog.close();
            len = res.data.length;
                    list='<option value="">Select</option>';
             
		for(i=0; i< len; i++)
		  {
              
            list +='<option value="'+res.data[i].states+'">'+res.data[i].states.toUpperCase()+'</option>';  
			 
          }
           
			  $("#booking_state").html(list); 
            
            
        }
		else{
          app.dialog.close(); 
         
            setTimeout(function () {  loadLocality();  }, 2000);
        }

        },function(err) {           

                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
            setTimeout(function () {  loadLocality();  }, 5000);

            
        }); 
		 
		 }

///////////////////////////////////////
/////////////load locality//222/////
////////////////////////////
function loadLocality2(){
	var list='';
    
//////////////////////
        app.request.post(api_url+'get_locality.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'Success'){ 
			app.dialog.close();
            len = res.data.length;
           
            list='<option value="">Select</option>';
            
		for(i=0; i< len; i++)
		  {
              
            list +='<option value="'+res.data[i].states+'">'+res.data[i].states.toUpperCase()+'</option>';  
			 
          }
           
			  $("#register_state").html(list); 
            
        }
		else{
          app.dialog.close(); 
         
            setTimeout(function () {  loadLocality2();  }, 2000);
        }

        },function(err) {           

                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
            setTimeout(function () {  loadLocality2();  }, 5000);

            
        }); 
		 
		 }

/////////////////////////
///////////////////
 function viewService(value)
{
	 var timestamp = new Date().getTime();
	   app.dialog.preloader('Reading...','blue');
        app.request.post(api_url+'view_request.php',
            { id : value },
        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.success == 'Success'){ 
			app.dialog.close();
            
             setTimeout(function () {
            $("#view_service_title").html(res.data[0].service);
           
            $("#view_address").html('Service Address: '+res.data[0].address);
            $("#view_date_t").html('Request Date: '+res.data[0].date_t);
            $("#view_updated").html('Last Updated: '+res.data[0].last_updated);
            $("#view_locality").html('Service Locality: '+res.data[0].locality);
            $("#view_response_status").html('Status: '+res.data[0].req_stat);
            $("#view_response").html('Response: '+res.data[0].response);
            $("#user_message").html('Request Message: '+res.data[0].message);
            $("#staff_name").html('Workman Name: '+res.data[0].staff);    
            $("#staff_pic").attr('src', ''+res.data[0].staff_pic+'');    
            localStorage.setItem("service_id",res.data[0].request_id);
                 
                 
            if( res.data[0].req_stat == 'Delivered')
                {
                    
                   $("#service_review").show(); 
                   
                }
                 else{
                     
                     $("#service_review").hide(); 
                     
                 }
                 
                 if( res.data[0].req_stat != 'Delivered'  && res.data[0].req_stat != "Cancelled")
                {
                    
                  
                   $("#service_cancel").show(); 
                }
                 else{
                     
                  
                     $("#service_cancel").hide();
                 }
                 
                 
                 
                 
          }, 200); 
            
            
        }
		
		else{
            app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 4000, });
            toastWithButton.open()

        }

        },function(err) {           
      
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
        }); 
    
}

/////////////////////////
///////////mark services/////
  function markService()
{
    
     var user    = localStorage.getItem("rask_user");
      var email   = localStorage.getItem("rask_email");
   
        app.request.post(api_url+'update_not.php',
            {
				email : email,
                
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'YES'){       
           
         
        }
        else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },function(err) {           
            
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
            
        });  
     
    
}



//////////////////////////////post servuew review
  function poseServiceReview()
{
     let toastWithButton;
	let notificationFull;
    
     var user    = localStorage.getItem("rask_user");
     var tag     = localStorage.getItem("service_id");
    var title    = $("#rev_title").val();
    var text     = $("#rev_text").val();
    
   
     if(user == '' || user == null)
	{
         app.views.main.router.navigate('/login2/', {reloadAll: true});
	}
     else if(tag =='' || tag == null)
     {
       app.popup.close();
       
    }
     else if(title =='' || title == null){
     
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Request',
        titleRightText: 'now',
        subtitle: 'Title Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(text =='' || text == null){
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Request',
        titleRightText: 'now',
        subtitle: 'Review Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	
    else{
        app.dialog.progress('Submitting Review...','multi');
			$.ajax({
			url: api_url+"send_reviews.php",
			type: "POST",
			data: { phone  : user,
                    title  : title,
                    review : text,
                    req_id : tag
            },
			dataType: "json",
			success: function(res){
			msg = res.message;
			console.log(res);
        if(res.success == 'YES'){                                 
             app.dialog.close();
            
             app.popup.close();
            app.dialog.close();
            toastWithButton = app.toast.create({text: 'Review Submitted',closeButton: true, closeTimeout: 2000});
            toastWithButton.open();

        }else{
            app.dialog.close();
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000 });
            toastWithButton.open();
        }
        },
        error: function(res){
			console.log(res);
			app.dialog.close(); 
            toastWithButton = app.toast.create({text: 'Connection Error',closeButton: true, closeTimeout: 4000 });
            toastWithButton.open();
			}
            }); 
		 
		 } 
    
    
    
    
    
}


//////////////////////////////////////////
//////////////cancel service///////////// 
  function cancelService()
{
    
    var user    = localStorage.getItem("rask_user");
     var tag     = localStorage.getItem("service_id");
   
     if(user == '' || user == null)
	{
         app.views.main.router.navigate('/login2/', {reloadAll: true});
	}
    else
    {
        app.dialog.progress('Cancelling Service...','skyblue');
			$.ajax({
			url: api_url+"cancel_service.php",
			type: "POST",
			data: { phone  : user,  req_id : tag },
			dataType: "json",
			success: function(res){
			msg = res.message;
			console.log(res);
        if(res.success == 'YES'){                                 
             app.dialog.close();
             app.views.main.router.navigate('/my-service/');
        }
        else
        {
            app.dialog.close();
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000 });
            toastWithButton.open();
        }
        },
        error: function(res){
			console.log(res);
			app.dialog.close(); 
            toastWithButton = app.toast.create({text: 'Connection Error',closeButton: true, closeTimeout: 4000 });
            toastWithButton.open();
			}
            }); 
		 }
}


///////////////////////////////////////////////////////////////////
/////////////////serch services
  function searchService()
{
    var list='';
    $("#service_list").html(""); 
    var value = $("#service_search").val();
    
    
    if(value == '' || value == null)
        {
             $("input#service_search").css('background-image' , 'url(img/search.png)');
            loadService();
            
            
        }
    else{   
       
        $("input#service_search").css('background-image' , 'none');
        
          app.request.post(api_url+'search_services.php',{value : value},
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
            len = res.data.length;
            
		for(i=0; i< len; i++)
		  {
              
            list +='<div class="col-25 medium-15 large-10"style="padding:10px;">\
                <div class="card elevation-2 marginbottomhalf">\
                <div class="card-content card-contentpadding"style="height:95px;">\
                  <a href="/order-service/"onclick="orderService(\''+res.data[i].service+'\')" class="text-normal display-block">\
                    <figure class="text-align-center"style="padding:5px;">\
                    <img src="https://raskservices.com/admin/icons/'+res.data[i].icon+'" alt=""style="width:50px;height:40px;margin-bottom:5px;" />\
                 <h6 class="text-color-theme"style="font-size:8pt;font-weight:400;word-break:break-all;">'+res.data[i].service+'</h6>\
                    </figure>\
                  </a>\
                </div>\
              </div>\
            </div>';  
			 
          }
           
			  $("#service_list").html(list); 
            
        }
		else{
          app.dialog.close(); 
          $("#service_list").html('<div class="col-100 medium-100 large-100"style="padding:10px;">\
                <div class="card elevation-2 marginbottomhalf">No service found!!</div></div>'); 
            //setTimeout(function () {  loadService();  }, 1000);
        }

        },function(err) {           

                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
            setTimeout(function () {  loadService();  }, 2000);

            
        });   
    }
    
   
}

////////open browser//////////
  function openPhotoBrowser()
{    
    
    var timestamp = new Date().getTime();
 photoGallery = app.photoBrowser.create({
       
        photos: [
            api_url_admin+'products/'+localStorage.getItem('product_tag')+'.png?t='+timestamp,
            api_url_admin+'products/'+localStorage.getItem('product_tag')+'2.png?t='+timestamp,
            api_url_admin+'products/'+localStorage.getItem('product_tag')+'3.png?t='+timestamp,
            api_url_admin+'products/'+localStorage.getItem('product_tag')+'4.png?t='+timestamp,
            api_url_admin+'products/'+localStorage.getItem('product_tag')+'5.png?t='+timestamp,
           
        ],
        type: 'standalone',
        theme: 'light',
        virtualSlides: true,
        navbarShowCount: false,
        momentumBounce: false,
        popupCloseLinkText: '<i class="f7-icons">xmark</i>',
        swiper: {
            speed: 600,
            navigation: {
                nextEl: '.photo-browser-next',
                prevEl: '.photo-browser-prev',
            },
            pagination: {
                el: '.gallery-pagination',
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
            zoom: {
                enabled: false,
                maxRatio: 0,
                minRatio: 0,
              },
            
            
        },
        renderNavbar: function () {
            return '<div class="close-photo-gallery link popup-close"><i class="f7-icons">xmark</i></div>';
        },
        renderToolbar: function () {
            return `
            <div class="photo-gallery-footer d-flex"><i class="f7-icons link photo-browser-prev">arrow_left</i>
            <div class="gallery-pagination"></div><i class="f7-icons link photo-browser-next">arrow_right</i></div>
            `;
        },
    }); 


    var tag = localStorage.getItem('product_tag');

    if(tag == '')
        {
            
        }
    else{
       // alert(tag);
photoGallery.open();
}
    
  }

