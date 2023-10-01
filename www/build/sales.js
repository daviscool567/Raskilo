
 ///////////////////////////
 //////////////////////////////////////
 ////////////////////////
 function loadSales(){
	
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
    //////////////////
  // $("#full_sales").html("");
	email   = localStorage.getItem("rask_email");
	
  if(email == '' || email == null)
	{
		  app.views.main.router.navigate('/login/');
	}
	else
	{
        app.request.post(api_url2+'fullSales.php',{ email : email },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
              app.dialog.close();
				len = res.data.length;
		for(i=0; i< len; i++)
		  {
			 
			       price = Number(res.data[i].total_cost);
			  
		                  list +='<div class="col-100 medium-50 large-33">\
                    <div class="card elevation-2 product margin-bottom-half">\
                        <div class="card-content card-content-padding">\
                            <div class="row">\
                                <div class="col-auto">\
                                    <figure class="text-center avatar-70 avatar">\
                                        <img src="img/logo.png" alt="">\
                                    </figure>\
                                </div>\
                                <div class="col no-padding-left align-self-center">\
                                    <p class="no-margin-bottom">\
                                        <small class="text-opac">'+res.data[i].address+'</small>\
                                    </p>\
                                    <h6 class="text-color-theme margin-bottom-half">Order ID: '+res.data[i].reference+'</h6>\
                                    <div class="row">\
                                        <div class="col">\
                                            <p class="text-black">Status : '+res.data[i].status+'</p>\
                                        </div>\
                                        <div class="col-auto">\
                                            <a href="#" class="link text-color-theme no-padding">Amount: &#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+'</a>\
                                        </div>\
                                    </div>\
									 <div class="row">\
                                        <div class="col">\
                                            <p class="text-black" style="font-size:9pt;">Order Date : '+res.data[i].date+'</p>\
                                        </div>\
                                        <div class="col-auto">\
                                             <a href="/invoice/"type="button" onclick="salesDetails(\''+res.data[i].reference+'\')" class="link text-color-primary no-padding">\
											View <i class="icons f7-icons">chevron_right</i></a>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
			  }
			  
			 setTimeout(function(){$("#full_sales").html(list);},500);
			

        }
		
		else{
         app.dialog.close();
		
            toastWithButton = app.toast.create({text:res.message,closeButton: true, closeTimeout: 3000, });
            toastWithButton.open()

        }

        },function(err) {           

                app.dialog.close();
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 4000,});
                toastWithButton.open();

        }); 
		 
		 }

 }
   
   
 ///////////////////////////
 ////////////////////////
 