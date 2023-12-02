function loadShortMenu(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
    
        app.request.post(api_url2+'shortMenuList.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
            var timestamp = new Date().getTime();
				len = res.data.length;
			 
		 for(i=0; i< len; i++)
		  {
			  price = Number(res.data[i].item_price);
		 
            list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="max-height:300px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;height:180px;">\
                    <img src="'+api_url_admin+'products/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;min-height:130px;max-height:180px;" />\
                  </figure></a>\
                  <p class="">\
                    <small class="text-opac"style="font-size:9pt;padding-left:5px;">'+res.data[i].product_category+'</small>\
                  </p>\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')" class="text-normal margin-bottom-half display-block">\
                    <h6 class="text-color-theme" style="font-size:10pt;padding-left:5px;height:30px;line-height:1.5;">'+res.data[i].product_name.substring(0,35)+'</h6>\
                  </a>\
                  <div class="row">\
                    <div class="col">\
                      <p class="no-margin-bottom" style="font-size:10pt;padding-left:5px;">&#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+'</p>\
                    </div>\
                    <div class="col-auto no-padding-left"style="width:25px;height:25px;margin-bottom:15px;margin-right:30px;">\
                      <button class="button avatar avatar-40 no-padding rounded-circle elevation-3 button-gradient popup-open"\
                        data-popup=".addproduct" onclick="addToCart(\''+res.data[i].product_tag+'\')" >\
                        <i class="icons f7-icons">cart</i>\
                      </button>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>';
              
              
              
			  }
			
             setTimeout(function(){ $("#short_menu").html(list); },200);
			  

        }
		
		else{
         
		
           list='<div class="col-100 medium-10 large-100">\
              <div class="card elevation-2 product margin-bottom">\
                <div class="card-content card-content-padding"style="padding:4px;">\
                  <figure class="text-align-center"style="background: none;">\
                    <img src="img/noproduct.png" alt=""style="width:100%;" />\
                  </figure>\
                </div>\
              </div>\
            </div>';
            
             setTimeout(function(){ $("#short_menu").html(list); },200);

        }

        },function(err) {           

           
                toastWithButton = app.toast.create({text: 'Check your network',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
             setTimeout(function(){ loadShortMenu() },200);

            
        }); 
		 
		 }
   
   
 ///////////////////////////
///////look up product single///////
function lookProduct(tag){
	var list='';
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   

	tag = tag;


	   app.dialog.preloader('Loading Product Details...','multi');
        app.request.post(api_url2+'loadProduct.php', {tag  : tag },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
            
			localStorage.setItem('product_tag',res.tag);
            
            setTimeout(function(){  
			$("#edit_name").html(res.name.product_name);
			$("#edit_branch").html(res.name.branch_name);
			$("#edit_category").html(res.name.product_category);
			$("#pdescription").html(res.name.full_description);
			 price = Number(res.name.item_price);
	
			$("#edit_amount").html('&#8358;'+(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
			$("#cart_minus").html('<button class="button avatar elevation-3 button-gradient"style="background:white;color:red;border:0;"value="'+res.name.product_tag+'"onclick="addToCart(this.value)">                        Add to Cart<i class="icons f7-icons">cart</i></button>');
			
			
			
			var timestamp = new Date().getTime();
			$("#edit").html('<img src="'+api_url_admin+'products/'+res.name.product_tag+'.png?t='+timestamp+'"id="image_edit" alt="" class="h-190" loading="lazy"style="width:100%;">');	
			
            
                if(res.name.product_image2 !='')
                    {
                        $("#edit2").html('<img src="'+api_url_admin+'products/'+res.name.product_tag+'2.png?t='+timestamp+'" alt="..." loading="lazy" class="h-190"style="width:100%;">');	
                        
                    }
                if(res.name.product_image3 !='')
                    {
                        $("#edit3").html('<img src="'+api_url_admin+'products/'+res.name.product_tag+'3.png?t='+timestamp+'" alt="..." loading="lazy" class="h-190"style="width:100%;">');
                       
                    }
                if(res.name.product_image4 !='')
                    {
                        $("#edit4").html('<img src="'+api_url_admin+'products/'+res.name.product_tag+'4.png?t='+timestamp+'" alt="..." loading="lazy" class="h-190"style="width:100%;">');	
                       
                    }
                if(res.name.product_image5 !='')
                    {
                        $("#edit5").html('<img src="'+api_url_admin+'products/'+res.name.product_tag+'5.png?t='+timestamp+'" alt="..." loading="lazy" class="h-190"style="width:100%;">');	
                       
                    }
                
                
                
                
                
                
                
                
			
                            },500);
        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()

        }

        },function(err) {           

            if(err.status == 0 ){
                app.dialog.close();
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
   
   ////////////////////oad single waiter ///////
//////////////////////////
//////////////
//////////shop banner//////
function loadShopBanner(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
    
        app.request.post(api_url2+'shop_banners.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
            var timestamp = new Date().getTime();
				len = res.data.length;
			 
		 for(i=0; i< len; i++)
		  {
              
              list +='<div class="swiper-slide">\
                <div class="card elevation-2" style="padding:0px;background:transparent">\
                  <div class="card-content"style="background:none;height:100px;">\
                    <div class="row">\
                      <div class="col-100">\
                        <img src="'+api_url_admin+'shop_banner/'+res.data[i].banners+'?t='+timestamp+'" alt="" class="mw-100"style="height:100px;width:100%;"/>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>';
              
			  }
			
			  
            setTimeout(function(){ $("#homeoffer").html(list); },200);

        }
		
		else{
         
		 setTimeout(function(){ loadShopBanner() },2000);
           

        }

        },function(err) {           

           
                toastWithButton = app.toast.create({text: 'Check your network',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
              setTimeout(function(){ loadShopBanner() },2000);

            
        }); 
		 
		 }
   