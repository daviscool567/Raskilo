    function loadCartAll(){
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
	  	$("#cart_listing_frame2").html(nop);
		
	}
	else{
//////////////////////////////////////////////////////////////////////
loadDelivery2();
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
	  
	  
	  setTimeout(function(){ $("#cart_listing_frame2").html(list);  },500);

		var timestamp = new Date().getTime();

		$("#cartnumber3").html(storedItem.length +' Item In Cart');
	 var total =  Number(localStorage.getItem("total_cost"));
     var weight = Number(localStorage.getItem("total_weight"));
     var delivery = Number(localStorage.getItem("delivery_price"));
	 var total_all = parseInt(total) + parseInt(delivery);
	 console.log(total);
	 
	$("#subtotal3").html((total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')); 
	$("#total3").html((total_all).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    $("#delivery2").html((delivery).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
	$("#weight3").html(weight.toFixed(2));	
	
    
        
	}
}
   


///////////load other address/////

      //////////
        //////
            function loadDelivery2(){
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
                   
                  $("#address_locality2").html(res.address.locality);
                  $("#address_default2").html(res.address.status);
                  $("#delivery_address2").html(res.address.address+'<br>  '+res.address.state+'.');    
                    
                   localStorage.setItem("delivery_address",res.address.address);
                   localStorage.setItem("delivery_state",res.address.state);
                   localStorage.setItem("delivery_locality",res.address.locality)
                   
                    insertOrder();
				}
				else
				{
					
                     app.views.main.router.navigate('/cart/');
					
				}	
			}, error: function(res) {
                console.log(res);
                
            }
})
   }
     


