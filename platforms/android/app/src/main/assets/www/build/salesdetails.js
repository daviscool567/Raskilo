
function salesDetails(tag){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email  = localStorage.getItem("rask_email");
	tag = tag;
	
 if(email == '' || email == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else
	{
	   app.dialog.preloader('Loading Order Details...','multi');
        app.request.post(api_url2+'loadOrder.php',
            {  email : email,  tag : tag },
        function(res){
        var res =JSON.parse(res)
         var timestamp = new Date().getTime();
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
		      
			setTimeout( function(){
			
			$("#order_locality").html(res.name.locality);
			$("#order_address").html(res.name.address);
			$("#order_status").html(res.name.status);
			$("#order_state").html(res.name.state);
			$("#order_email").html(res.name.email);
			$("#order_name").html(res.name.name);
			 price = Number(res.name.total_cost);
			  price2 = Number(res.name.amount_payable);
			 delivery = Number(res.name.delivery_price);
			$("#order_amount").html('&#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
			$("#order_total").html('&#8358;'+(price2).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
			$("#order_delivery").html('&#8358;'+(delivery).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
			$("#order_ref").html(res.name.reference);
			$("#order_date").html(res.name.date);
				},500);
			
			
			/////////////////////////////////
			//////////////////////////
			len = res.data.length;
		for(i=0; i< len; i++)
		  {
			 
              if(res.data[i].reviewed == '' && res.data[i].status =='Delivered')
                  {
                          price = Number(res.data[i].item_price);
			  
		                  list +='<div class="col-100 medium-50 large-33">\
                    <div class="card elevation-2 product margin-bottom-half">\
                        <div class="card-content card-content-padding">\
                            <div class="row">\
                                <div class="col-auto">\
                                    <figure class="text-center avatar-70 avatar">\
                                       <img src="'+api_url2+'product_image/'+res.data[i].item_tag+'.png?t='+timestamp+'" class="">\
                                    </figure>\
                                </div>\
                                <div class="col no-padding-left align-self-center">\
                                    <p class="no-margin-bottom">\
                                        <small class="text-opac">Status : '+res.data[i].status+'</small>\
                                    </p>\
                                    <h6 class="text-color-theme margin-bottom-half">'+res.data[i].item_name+'</h6>\
                                    <div class="row">\
                                        <div class="col">\
                                            <p class="text-color-blue">Amount &#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+'</p>\
                                        </div>\
                                        <div class="col-auto">\
                                            <a href="#" class="link text-color-theme ">Qty : '+res.data[i].item_qty+'</a></div>\
                                        </div><button onclick="openReview(\''+res.data[i].reference+'\',\''+res.data[i].item_tag+'\')" class="button button-fill color-green link popup-open" data-popup=".demo-popup-swipe">Write Review</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                      
                  }
              else{
                 
			 
			       price = Number(res.data[i].item_price);
			  
		                  list +='<div class="col-100 medium-50 large-33">\
                    <div class="card elevation-2 product margin-bottom-half">\
                        <div class="card-content card-content-padding">\
                            <div class="row">\
                                <div class="col-auto">\
                                    <figure class="text-center avatar-70 avatar">\
                                       <img src="'+api_url2+'product_image/'+res.data[i].item_tag+'.png?t='+timestamp+'" class="">\
                                    </figure>\
                                </div>\
                                <div class="col no-padding-left align-self-center">\
                                    <p class="no-margin-bottom">\
                                        <small class="text-opac">Status : '+res.data[i].status+'</small>\
                                    </p>\
                                    <h6 class="text-color-theme margin-bottom-half">'+res.data[i].item_name+'</h6>\
                                    <div class="row">\
                                        <div class="col">\
                                            <p class="text-color-blue">Amount &#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+'</p>\
                                        </div>\
                                        <div class="col-auto">\
                                            <a href="#" class="link text-color-theme ">Qty : '+res.data[i].item_qty+'</a></div>\
                                        </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
          }
			  }
			  
			 setTimeout( function(){ $("#order_info").html(list);},500);
			
			

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 3000, });
            toastWithButton.open()

        }

        },function(err) {           

            if(err.status == 0 ){
                app.dialog.close();
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 6000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
}


///////////////////////////
  function openReview(ref,item)
{
    
   // alert(ref);
   // alert(item);
  
    localStorage.setItem("review_ref",ref);
    localStorage.setItem("review_item",item);
   // $(".review-popup").show('open');
   
}
 
//////////////
 function ratingStar(value)
{
    var star = Number(value);
    
    
    if(star == 1)
        {
            $("#rate_one").css('color','orange');
            $("#rate_two").css('color','black');
            $("#rate_three").css('color','black');
            $("#rate_four").css('color','black');
            $("#rate_five").css('color','black');
            
        }
     else if(star == 2)
        {
            $("#rate_one").css('color','orange');
            $("#rate_two").css('color','orange');
            $("#rate_three").css('color','black');
            $("#rate_four").css('color','black');
            $("#rate_five").css('color','black');
            
        }
     else if(star == 3)
        {
            $("#rate_one").css('color','orange');
            $("#rate_two").css('color','orange');
            $("#rate_three").css('color','orange');
            $("#rate_four").css('color','black');
            $("#rate_five").css('color','black');
            
        }
     else if(star == 4)
        {
            $("#rate_one").css('color','orange');
            $("#rate_two").css('color','orange');
            $("#rate_three").css('color','orange');
            $("#rate_four").css('color','orange');
            $("#rate_five").css('color','black');
            
        }
     else if(star == 5)
        {
            $("#rate_one").css('color','orange');
            $("#rate_two").css('color','orange');
            $("#rate_three").css('color','orange');
            $("#rate_four").css('color','orange');
            $("#rate_five").css('color','orange');
          
            
        }
    
    localStorage.setItem("current_star",star);
    
}

////////////////////////////
///////////add review
 function addReview()
{   
    
      let toastBottom;
    let toastWithButton;
	let notificationFull;
///////////////////
    
    var email  = localStorage.getItem("rask_email");
    var ref    = localStorage.getItem("review_ref");
    var item   = localStorage.getItem("review_item");
	var text   = $('#rating_text').val();
    var title  = $('#rating_title').val();
	var star   = localStorage.getItem("current_star");

     if(email =='' || email == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'error',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(ref =='' || ref == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Error!',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    	else if(item =='' || item == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Error!',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    	else if(star =='' || star == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Select Rating Star!',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    	else if(text =='' || text == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Product Experience Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    else if(title =='' || title == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Rating Title Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
		
	    app.dialog.preloader('Posting Review...','lightskyblue');
        app.request.post(api_url2+'reviewAdd.php',
            {
				email  : email,
				ref    : ref,
                item   : item,
                text   : text,
                star   : star,
                title  : title
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){       
            app.dialog.close(); 
            localStorage.removeItem("review_ref");
            localStorage.removeItem("review_item");
            localStorage.removeItem("current_star");
           salesDetails(res.ref);
            app.popup.close();
            
            
        }
        else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },function(err) {           
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
		 
		 }
    
    
}

///////////////////////////
//////allpending review////////
function loadAllReview()
{ 
    
    var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email  = localStorage.getItem("rask_email");
	
 if(email == '' || email == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else
	{
        app.request.post(api_url2+'loadOrderPending.php',
            {  email : email},
        function(res){
        var res =JSON.parse(res)
         var timestamp = new Date().getTime();
         console.log(res);		
        if(res.status == true){ 
			len = res.data.length;
		for(i=0; i< len; i++)
		  {
                          price = Number(res.data[i].item_price);
			  
		                  list +='<div class="col-100 medium-50 large-33">\
                    <div class="card elevation-2 product margin-bottom-half">\
                        <div class="card-content card-content-padding">\
                            <div class="row">\
                                <div class="col-auto">\
                                    <figure class="text-center avatar-70 avatar">\
                                       <img src="'+api_url2+'product_image/'+res.data[i].item_tag+'.png?t='+timestamp+'" class="">\
                                    </figure>\
                                </div>\
                                <div class="col no-padding-left align-self-center">\
                                    <p class="no-margin-bottom">\
                                        <small class="text-opac">Status : '+res.data[i].status+'</small>\
                                    </p>\
                                    <h6 class="text-color-theme margin-bottom-half">'+res.data[i].item_name+'</h6>\
                                    <div class="row">\
                                        <div class="col">\
                                            <p class="text-color-blue">Amount &#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+'</p>\
                                        </div>\
                                        <div class="col-auto">\
                                            <a href="#" class="link text-color-theme ">Qty : '+res.data[i].item_qty+'</a></div>\
                                        </div><button onclick="openReview2(\''+res.data[i].reference+'\',\''+res.data[i].item_tag+'\')" class="button button-fill color-green link popup-open" data-popup=".demo-popup-swipe2">Write Review</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                      
                  }
			  
			 setTimeout( function(){ $("#order_info_review").html(list);},500);
			
			

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 3000, });
            toastWithButton.open()
            
            
             list ='<div class="col-100 medium-100 large-100">\
                    <div class="card elevation-2 product margin-bottom-half">\
                        <div class="card-content card-content-padding">\
                            <div class="row">\
                                <div class="col padding-left align-self-center">\
                                    <h4 class="text-color-theme margin-bottom-half">Pending Review Empty</h4>\
                            </div>\
                        </div>\
                    </div>\
                </div></div>';
                      
            
            
             setTimeout( function(){ $("#order_info_review").html(list);},500);

        }

        },function(err) {           

            if(err.status == 0 ){
                app.dialog.close();
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 6000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
    
 
    
}

/////////////////
/////////////////////
//////post 2 review

  function openReview2(ref,item)
{
  
    localStorage.setItem("review_ref",ref);
    localStorage.setItem("review_item",item);
   
}

///////////add review
 function addReview2()
{   
    
      let toastBottom;
    let toastWithButton;
	let notificationFull;
///////////////////
    
    var email  = localStorage.getItem("rask_email");
    var ref    = localStorage.getItem("review_ref");
    var item   = localStorage.getItem("review_item");
	var text   = $('#rating_text2').val();
    var title  = $('#rating_title2').val();
	var star   = localStorage.getItem("current_star");

     if(email =='' || email == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'error',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(ref =='' || ref == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Error!',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    	else if(item =='' || item == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Error!',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    	else if(star =='' || star == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Select Rating Star!',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    	else if(text =='' || text == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Product Experience Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    else if(title =='' || title == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'Review Item',
        titleRightText: 'now',
        subtitle: 'Rating Title Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
		
	    app.dialog.preloader('Posting Review...','lightskyblue');
        app.request.post(api_url2+'reviewAdd.php',
            {
				email  : email,
				ref    : ref,
                item   : item,
                text   : text,
                star   : star,
                title  : title
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){       
            app.dialog.close(); 
            localStorage.removeItem("review_ref");
            localStorage.removeItem("review_item");
            localStorage.removeItem("current_star");
            loadAllReview();
            app.popup.close();
            
            
        }
        else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },function(err) {           
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
		 
		 }
    
    
}

///////////////////////////
   