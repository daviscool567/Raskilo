function loadOffer(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////

		//https://project.readoneglobal.com/barpay/owner/
	  // app.dialog.preloader('Loading Branch List...');
        app.request.post('https://barpay.app/application/user/offerList.php',
           

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
            
				len = res.data.length;
			 
		 for(i=0; i< len; i++)
		  {
		  list +='<div class="swiper-slide"style="margin-right:10px;">\
                <div class="card elevation-2 card-theme">\
                  <div class="card-content card-content-padding ">\
                    <div class="row">\
                      <div class="col-50">\
                        <img src="img/Banner.png" alt="" class="mw-100" />\
                      </div>\
                      <div class="col text-align-left align-self-center no-padding-left">\
                        <h6 class="fw-normal no-margin-bottom">'+res.data[i].offer_title.toUpperCase()+'</h6>\
                        <h2>'+res.data[i].percent+'% OFF</h2>\
                        <p>Use Code<br /><strong>"'+res.data[i].code+'"</strong></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>';
			  }
			
			  $("#home_offer").html(list);

        }
		
		else{
         
		
            toastWithButton = app.toast.create({text:res.message,closeButton: true, closeTimeout: 10000, });
            toastWithButton.open()

        }

        },function(err) {           

            if(err.status == 0 ){
                
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 10000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
   
   
 ///////////////////////////










