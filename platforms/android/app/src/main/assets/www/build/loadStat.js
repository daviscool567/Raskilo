function loadStat(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
/////////////////////////////
        app.request.post(api_url2+'loadStat.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){
            localStorage.setItem("max_count",1000);
            localStorage.removeItem("current_category");
            localStorage.removeItem("current_sort");
             localStorage.setItem("current_count",1);
            app.infiniteScroll.create();
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
             
            setTimeout(function(){
              $("#product_list").html(list); 
                
            },500);
			  
           
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
             $("#product_list").html(list);

        }

        },function(err) {           
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

        }); 
		 
		 }
   
  /////////////////////////////// 
 // Loading flag
         var loading = false;


    $('.infinite-scroll').on('scroll', function () {
  
        // Max items to load
         var maxItems = Number(localStorage.getItem("max_count"));
        // Exit, if loading in progress
            if (loading) return;
            // Set loading flag
            loading = true;
        
   // Emulate 1s loading
            setTimeout(function () {
               // Reset loading flag
               loading = false;
              lastIndex = Number(localStorage.getItem("current_count"));
               if (lastIndex >= maxItems) {
                
                 // app.dialog.alert("bottom loa allll....");
                  // Remove preloader
                  $('.infinite-scroll-preloader').remove();
                  return;
               }
               
                //  app.dialog.alert("bottom loa more....");
                
    var cat =  localStorage.getItem("current_category");
    var sort = localStorage.getItem("current_sort");
   
     localStorage.getItem("current_count");
    if(cat !='' && cat != null)
        {
             $("#scoll_loader").show();
            loadStatScrollCat();
           
        }
    else if(sort !='' && sort != null)
        {
             $("#scoll_loader").show();
            loadStatScrollSort();
            
        }
    else{
         $("#scoll_loader").show();
        loadStatScroll(); 
        
    }       
                
            }, 200);   
        
});
   


/////////////////////////////////////
//////////////scroll empty

function loadStatScroll(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
    var count = Number(localStorage.getItem("current_count"));
        app.request.post(api_url2+'loadStatScroll.php',{  count : count },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){
            var counter = count + 1;
             localStorage.setItem("current_count",counter);
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
            setTimeout(function(){
              $("#product_list").append(list);
                
            },300);
			  
            
        }
		else{
            setTimeout(function(){
                $("#scoll_loader").hide();
              localStorage.setItem("max_count",0);
            },300);
          
        }

        },function(err) {           

            
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

        }); 
		 
		 }

////////////////////
/////////stat scroll cart

 function catLoad(value)
{
    
  localStorage.setItem("current_category",value);  
   
   
    
}


/////////////
////normal cat load

function loadStatCat(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
/////////////////////////////
    var cat =  localStorage.getItem("current_category");
        app.request.post(api_url2+'loadStatCat.php',{cat: cat},
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){
            localStorage.setItem("max_count",1000);
             localStorage.setItem("current_count",1);
            app.infiniteScroll.create();
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
             
            setTimeout(function(){
              $("#product_list").html(list); 
                
            },500);
			  
           
             
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
             $("#product_list").html(list);
             localStorage.setItem("fired","true");

        }

        },function(err) {           

            if(err.status == 0 ){
                
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 10000,});
                toastWithButton.open();

            }
        }); 
		 
		 }



////////cart sort loagin

function loadStatScrollCat(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
    var cat =  localStorage.getItem("current_category");
    var count = Number(localStorage.getItem("current_count"));
        app.request.post(api_url2+'loadStatScrollCat.php',{  count : count, cat:cat },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){
            var counter = count + 1;
             localStorage.setItem("current_count",counter);
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
            setTimeout(function(){
              $("#product_list").append(list);
                
            },300);
			  
            
        }
		else{
            setTimeout(function(){
                $("#scoll_loader").hide();
              localStorage.setItem("max_count",0);
            },300);
          
        }

        },function(err) {           

            
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

        }); 
		 
		 }

////////////////////
///////create loading sort//////
 function sortLoad(value)
{
    
  localStorage.setItem("current_sort",value);  
   
  loadStatSort();   
    
}

/////////stat scroll load sorting....

function loadStatSort(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
/////////////////////////////
    var sort =  localStorage.getItem("current_sort");
        app.request.post(api_url2+'loadStatSort.php',{sort: sort},
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){
            localStorage.setItem("max_count",1000);
             localStorage.setItem("current_count",1);
            app.infiniteScroll.create();
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
             
            setTimeout(function(){
              $("#product_list").html(list); 
                
            },500);
			  
          
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
             $("#product_list").html(list);
             localStorage.setItem("fired","true");

        }

        },function(err) {           

            if(err.status == 0 ){
                
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 10000,});
                toastWithButton.open();

            }
        }); 
		 
		 }











/////////////
///////////////
/////////sort scrolling....
function loadStatScrollSort(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
    var sort =  localStorage.getItem("current_sort");
    var count = Number(localStorage.getItem("current_count"));
        app.request.post(api_url2+'loadStatScrollSort.php',{  count : count, sort:sort },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){
            var counter = count + 1;
             localStorage.setItem("current_count",counter);
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
            setTimeout(function(){
              $("#product_list").append(list);
                
            },300);
			  
            
        }
		else{
            setTimeout(function(){
                $("#scoll_loader").hide();
              localStorage.setItem("max_count",0);
            },300);
          
        }

        },function(err) {           

            
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

        }); 
		 
		 }

////////////////////

///////////////
///////search////
 function searchProduct()
{
    
   	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
/////////////////////////////
    var value = $("#food_search").val();
        app.request.post(api_url2+'loadStatSearch.php',{value : value},
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){
            localStorage.setItem("max_count",1000);
             localStorage.setItem("current_count",1);
            app.infiniteScroll.create();
				len = res.data.length;
			 var timestamp = new Date().getTime();
		 for(i=0; i< len; i++)
		  {
		   price = Number(res.data[i].item_price);
		  list +='<div class="col-50 medium-33 large-25">\
              <div class="card elevation-2 product margin-bottom" style="min-height:260px;">\
                <div class="card-content card-content-padding"style="padding:4px;min-height:150px;">\
                  <a href="/product/"onclick="lookProduct(\''+res.data[i].product_tag+'\')">\
                     <figure class="text-align-center"style="background: none;min-height:130px">\
                    <img src="'+api_url2+'product_image/'+res.data[i].product_tag+'.png?t='+timestamp+'" alt=""style="width:100%;border-radius:5px;object-fit: cover;" />\
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
			
             
            setTimeout(function(){
              $("#product_list").html(list); 
                
            },500);
           
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
             $("#product_list").html(list);
            

        }

        },function(err) {           

            if(err.status == 0 ){
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

            }
        }); 
    
    
    
}