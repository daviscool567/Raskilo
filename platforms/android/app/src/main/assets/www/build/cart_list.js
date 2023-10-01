    function loadCart(){
      var list="";
      var storedItem=JSON.parse(localStorage.getItem("shoppingCart"));
			 console.log(storedItem);		
               
                  list="";
				  var count=0;
				  var charge,total_all = 0;
				  var cost = 0;
  var qty = 1;
  var product_cost =0;
  var total_cost = 0;
  var total_weight = 0;
				  
			////////////
	var nop ='<div id="noproductcart">\
		    <table width="100%"align="center"cellpadding="5px"><tr><td id=""align="center">Your Cart is Empty</td></tr>\
			 </table></div>';
	
			//////////
			
			if(storedItem == null || storedItem == 0 )
	{
	  	$("#cart_listing_frame").html(nop);
		
	}
	else{
//////////////////////////////////////////////////////////////////////

		var timestamp = new Date().getTime();
		$("#cartnumber").html(storedItem.length +' Item In Cart');
	for(i=0; i < Object.keys(storedItem).length; i++)
         {
		  
		  count++
		  
		      var price = Number(storedItem[i].price);
		  
		  qty = parseInt(storedItem[i].qty);
	      cost = parseFloat(price);
		  product_cost = cost * qty;
          var weight  = Number(storedItem[i].weight) * qty;
		  
				   
       list +='<div class="col-100 medium-50 large-33">\
                    <div class="card elevation-2 product margin-bottom-half">\
                        <div class="card-content card-content-padding">\
                            <div class="row">\
                                <div class="col-auto">\
                                    <figure class="text-align-center no-margin-bottom avatar avatar-90 page-bg rounded p-1">\
                                        <img src="'+api_url2+'product_image/'+storedItem[i].product_tag+'.png?t='+timestamp+'"id="image_edit" alt="" class="">\
                                    </figure>\
                                </div>\
                                <div class="col no-padding-left">\
                                    <h6 class="text-color-theme margin-bottom-half">'+storedItem[i].name+'</h6>\
                                    <div class="row">\
                                        <div class="col">\
                                            <p class="no-margin-bottom">&#8358;'+(product_cost).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+'<br></p>\
                                        </div>\
                                        <div class="col-auto">\
                                            <div class="counter-number">\
                                       <button class="btn btn-sm avatar avatar-30 no-padding rounded-circle"style="background:white;color:red;border:1px solid red;"type="button"onclick="cartMinus(this.value)"value="'+storedItem[i].product_tag+'">\
                        <i class="icons f7-icons">minus</i> </button>\
                                  <span>'+storedItem[i].qty+'</span>\
                                     <button type="button" class="btn btn-sm avatar avatar-30 no-padding rounded-circle"style="background:white;color:red;border:1px solid red;"\
                                      onclick="cartPlus(this.value)"value="'+storedItem[i].product_tag+'"><i class="icons f7-icons">plus</i>\
                                     </button>\
                                 </div>\
                                        </div>\
										<div class="col">\
                      <button type="button"class="btn btn-sm avatar avatar-30 no-padding rounded-circle"style="background:white;color:red;border:1px solid red;"onclick="cartRemove(this.value)"value="'+storedItem[i].product_tag+'">\
                        <i class="icons f7-icons">trash</i></button>\
                                            </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
	
	     total_cost += product_cost;
         total_weight += weight;
      }
	  
	  
	  setTimeout(function(){ $("#cart_listing_frame").html(list);  },1000);
	  
        
	 localStorage.setItem("total_cost" , total_cost);
     localStorage.setItem("total_weight" , total_weight);
	 var total =  localStorage.getItem("total_cost");
	 var weight = Number(localStorage.getItem("total_weight"));
	 var total_all = parseInt(total);
	 console.log(total);
	 
	$("#subtotal").html((total_cost).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')); 
	$("#total").html((total_all).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));	
    $("#weight").html(weight.toFixed(2));		
	
	}
	
	}		

	////////////////PLUS AND MINUS//////////////
//////////////////////////////////////////

function cartRemove(tag){
 
				var product_tag = tag;
				  var storedList = JSON.parse(localStorage.getItem("shoppingCart"));
				  
	             // console.log(savedItem);
	              if(storedList <= 1)
				  { 
			       localStorage.removeItem("shoppingCart");
				  }
				  else{
					  
					  for(let i in storedList)
					  {
						  if(storedList[i].product_tag === product_tag)
						  {
				
					      storedList.splice(i, 1);
						  
						  localStorage["shoppingCart"]= JSON.stringify(storedList);
						
						
						   var storedList = JSON.parse(localStorage.getItem("shoppingCart"));
						
						  console.log(storedList);
						  loadCart();
				}
				
					  }
				  }					  			
			      
					
				}
/////////////////////////////////////
		function cartPlus(product_tag){
			
				var product_tag = product_tag;
				  var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
				
					  
					   if(storedItem ==  null)
				  { 
				     allItem.push(item);
			        localStorage.setItem("shoppingCart" , JSON.stringify(allItem)); 
                    storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
				   var pop="<div>Item is added to your cart!</div>";
				    toastWithButton = app.toast.create({text: pop,closeButton: true, closeTimeout: 10000, });
            toastWithButton.open()
	              console.log(storedItem);					
					  
				  }
				  else{
					  for(let i in storedItem)
					  {
						  if(storedItem[i].product_tag === product_tag)
						  {
							 quantity = storedItem[i].qty;
							 qty = Number(quantity) + 1;
							storedItem[i].qty = qty;
							
						  localStorage["shoppingCart"]= JSON.stringify(storedItem);
					     	//alert(qty);
						
						   var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
						
						  console.log(storedItem);
						 loadCart();
						  }
				
					  }
				  }	
}				  
				  
				  
				  
				  /////////////////////////////////////
		function cartMinus(product_tag){
			
				var product_tag = product_tag;
				  var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
				
					  
					  for(let i in storedItem)
					  {
						  if(storedItem[i].product_tag === product_tag)
						  {
							 quantity = storedItem[i].qty;
							 if(quantity <= 1)
							 {
							 qty = 1;
							storedItem[i].qty = qty; 
							 }
							 else{
							 qty = Number(quantity) - 1;
							storedItem[i].qty = qty;
							 }
							
							
						  localStorage["shoppingCart"]= JSON.stringify(storedItem);
					     	//alert(qty);
						
						   var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
						
						  console.log(storedItem);
						  loadCart();
						  }
				
					  }
				  }			

				  
					
							
			      
////////////////////////////////
////////load delivery/////////
    function loadDelivery(){
      var list="";
      var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
      console.log(storedItem);		  
	
    var email = localStorage.getItem("rask_email");
        $.ajax({
            url: api_url2+"serviceCharge.php",
            type: "POST",
            data: {email : email},
            dataType: "json",
            success: function(res) {
                console.log(res);
                if (res.status == true)
				{
                   
                  $("#address_locality").html(res.address.locality);
                  $("#address_default").html(res.address.status);
                  $("#delivery_address").html(res.address.address+'<br>  '+res.address.state+'.');            
                    
                    
                    var price = Number(res.price) * Number(localStorage.getItem("total_weight"));
                 localStorage.setItem('delivery_price',price);
                 callDelivery();
				}
				else
				{
					
                    localStorage.setItem('delivery_price',0); 
                     app.views.main.router.navigate('/addresses/');
					
				}	
			}, error: function(res) {
                console.log(res);
                
            }
})
   }

   	
//////////////////////////////////////		
function  callDelivery(){
    
        
		var timestamp = new Date().getTime();
    var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
		$("#cartnumber2").html(storedItem.length +' Item In Cart');
	  
	 var total =  Number(localStorage.getItem("total_cost"));
     var weight = Number(localStorage.getItem("total_weight"));
     var delivery = Number(localStorage.getItem("delivery_price"));
	 var total_all = parseInt(total) + parseInt(delivery);
	 console.log(total);
	 
	$("#subtotal2").html((total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')); 
	$("#total2").html((total_all).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    $("#delivery").html((delivery).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
	$("#weight2").html(weight.toFixed(2));	
	
	}	
   


///////////load other address/////
////////////////////////////
function loadAddressLocality(){
	var list='';
    var state = $("#add_state").val();
        app.request.post(api_url2+'getDeliveryLocality.php',{state : state},
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){ 
			app.dialog.close();
            len = res.data.length;
		for(i=0; i< len; i++)
		  {
              
            list +='<option value="'+res.data[i].locality+'">'+res.data[i].locality.toUpperCase()+'</option>';  
			 
          }
           
			  $("#add_locality").html(list); 
        }
		else
        {
          setTimeout(function () {  loadAddressLocality();  }, 5000);
           
        }
        },function(err) {           
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
               setTimeout(function () {  loadAddressLocality();  }, 5000);

            
        }); 
		 
		 }

//////////////////////////
//////ADD ADDRESS
////////delete address////////

function deleteAddress(id){
        
     var email   = localStorage.getItem("rask_email");
	  $.ajax({
        url: api_url2+"delete_address.php",
        type: "POST",
        data:{ email : email, id : id },
        dataType: "json",
        success: function(resp){
			 console.log(resp);
		if(resp.status)
        { 
             loadAddressAll();
		}
		else
		{
                toastWithButton = app.toast.create({text: resp.message,closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
		}
		},
		error: function(resp) {
            console.log(resp);
			 toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }
		})
		}

/////////////////////////////////////
//////////ADD ADDRESS/////////
function addAddress(){
    
    var locality  =  $("#add_locality").val();
    var state     =  $("#add_state").val();
    var address   =  $("#add_address").val();
    var email     = localStorage.getItem("rask_email");
    
    
    if(email == '' || email == null)
        {
             toastWithButton = app.toast.create({text: 'Login Error',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
        }
    else if(state == '' || state == null)
        {
            toastWithButton = app.toast.create({text: 'State Needed',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
        }
    else if(address == '' || address == null)
        {
            toastWithButton = app.toast.create({text: 'Full Address Needed',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
        }
    else if(locality == '' || locality == null)
        {
            toastWithButton = app.toast.create({text: 'Select Locality',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
        }else
            {
    
                app.dialog.progress("Adding Address...",'multi');
	  $.ajax({
        url: api_url2+"add_address.php",
        type: "POST",
        data:{ email : email, state: state, locality : locality, address: address },
        dataType: "json",
        success: function(resp){
			 console.log(resp);
		if(resp.status)
        {    
             app.dialog.close();
              app.views.main.router.navigate('/shop/');
		}
		else
		{	
            app.dialog.close();
                toastWithButton = app.toast.create({text: resp.message,closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
		}
		},
		error: function(resp) {
            console.log(resp);
            app.dialog.close();
            toastWithButton = app.toast.create({text: 'network error',closeButton: true, closeTimeout: 2000,});
                toastWithButton.open();
        }
		})
		}
}

///////////////////
///////load all address/////
////////////////////////////
function loadAddressAll(){
	var list='';
    var email     = localStorage.getItem("rask_email");
    
        app.request.post(api_url2+'address_list.php',{email : email},
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){ 
			app.dialog.close();
            len = res.data.length;
		for(i=0; i< len; i++)
		  {
              
            list +=' <div class="col-100 medium-50 ">\
                        <div class="card elevation-2 product margin-bottom-half">\
                            <div class="card-header">\
                                <div class="row">\
                                    <div class="col align-self-center">\
                                        <h5 class="no-margin-bottom">'+res.data[i].locality+'<br/>\
                                            <span class="text-opac small">'+res.data[i].status+'</span>\
                                        </h5>\
                                    </div>\
                                   <div class="col-auto align-self-center">\
                                        <a href="#" onclick="makeDefault(\''+res.data[i].tag+'\')" class="btn btn-link text-color-theme"><i class="icons f7-icons">checkmark_shield_fill</i></a>\
                                        <a href="#"onclick="deleteAddress(\''+res.data[i].tag+'\')" class="btn btn-link text-color-theme"><i class="icons f7-icons">trash</i></a>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="card-content card-content-padding">\
                                <div class="row">\
                                    <div class="col"> '+res.data[i].address+'<br/>'+res.data[i].state+'</div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';  
              
              
          }
           
			  $("#my_address").html(list); 
        }
		else
        {
          
            
            
           
        }
        },function(err) {           
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
               setTimeout(function () {  loadAddressAll();  }, 3000);

            
        }); 
		 
		 }


//////////////
/////make default
function makeDefault(id){
       
     var email   = localStorage.getItem("rask_email");
   
	  $.ajax({
        url: api_url2+"default_address.php",
        type: "POST",
        data:{ email : email, id : id },
        dataType: "json",
        success: function(resp){
			 console.log(resp);
		if(resp.status)
        { 
             loadAddressAll();
             loadDelivery();
		}
		else
		{
                toastWithButton = app.toast.create({text: resp.message,closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
            loadAddressAll();
             loadDelivery();
		}
		},
		error: function(resp) {
            console.log(resp);
			 toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }
		})
		}

//////////////////////////
////////////////////////
//////////////////
////////////////////////////
function loadStateAll(){
	var list='';
    
        app.request.post(api_url2+'state_list.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status){ 
			app.dialog.close();
            len = res.data.length;
            
            list='<option value="">Select</option>';
		for(i=0; i< len; i++)
		  {
              
            list +=' <option value="'+res.data[i].states+'">'+res.data[i].states.toUpperCase()+'</option>';   
              
          }
           
			  $("#add_state").html(list); 
        }
		else
        {
          
             setTimeout(function () {  loadStateAll();  }, 3000);
            
           
        }
        },function(err) {           
                toastWithButton = app.toast.create({text: 'Check your connection',closeButton: true, closeTimeout: 5000,});
                toastWithButton.open();
               setTimeout(function () {  loadStateAll();  }, 3000);

            
        }); 
		 
		 }