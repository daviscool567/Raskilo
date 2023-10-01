


function addToCart(product_tag){
	var allItem=[];
   // localStorage.removeItem("shoppingCart");
var product_tag = product_tag;

 $.ajax({
            url: api_url2+"cartAdd.php",
            type: "POST",
            data: {
                product_tag: product_tag
            },
            dataType: "json",
            success: function(res) {
                console.log(res);
                if (res.status) {
                  var name 	 =res.data.product_name;
				  var price  =res.data.item_price;
				  var product_tag    =res.data.product_tag;
				  var qty	=1;
                  var weight =  res.data.item_weight;
				  
				 var item = {product_tag:product_tag, name:name, price:price, qty:qty, weight:weight};
				  var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
	              if(storedItem ==  null)
				  { 
				     allItem.push(item);
			        localStorage.setItem("shoppingCart" , JSON.stringify(allItem)); 
                    storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
				   var pop="<div>Item is added to your cart!</div>";
				    toastWithButton = app.toast.create({text: pop,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()
                        var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
	              console.log(storedItem);
                      $(".countercart").html(storedItem.length);
                           $(".countercart2").html(storedItem.length);
                           $(".countercart3").html(storedItem.length);
                           $(".countercart4").html(storedItem.length);
                           $(".countercart5").html(storedItem.length);
                           $(".countercart6").html(storedItem.length);
                           $(".countercart7").html(storedItem.length);
					  
				  }
				 
				  else{
					  for(let i in storedItem)
					  {
						  if(storedItem[i].product_tag === item.product_tag)
						  {
					        var pop="<div>Item is Already added to your cart!</div>";	
							toastWithButton = app.toast.create({text: pop,closeButton: true, closeTimeout: 2000, });
                            toastWithButton.open()
							
							
							console.log(storedItem);	
					        ///////////////////////////////
					       $(".countercart").html(storedItem.length);
                           $(".countercart2").html(storedItem.length);
                           $(".countercart3").html(storedItem.length);
                           $(".countercart4").html(storedItem.length);
                           $(".countercart5").html(storedItem.length);
                           $(".countercart6").html(storedItem.length);
                           $(".countercart7").html(storedItem.length);
					   
							return;						
						  }
					  }
					var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
					storedItem.push(item);//push into same existing aary;  
			        localStorage.setItem("shoppingCart" , JSON.stringify(storedItem)); 
                    var storedItem = JSON.parse(localStorage.getItem("shoppingCart"));
                      
					 
				}					
					 var pop="<div>Item is added to your cart!</div>";	
							toastWithButton = app.toast.create({text: pop,closeButton: true, closeTimeout: 2000, });
                            toastWithButton.open()
							  var song = new Audio();
                           song.src = 'audio.mp3';
                           song.play();
			               console.log(storedItem);
					       $(".countercart").html(storedItem.length);
                           $(".countercart2").html(storedItem.length);
                           $(".countercart3").html(storedItem.length);
                           $(".countercart4").html(storedItem.length);
                           $(".countercart5").html(storedItem.length);
                           $(".countercart6").html(storedItem.length);
                           $(".countercart7").html(storedItem.length);
					
				
			
				}
				else{
					var pop="<div>Product Not Available!</div>";	
						toastWithButton = app.toast.create({text: pop,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()
					
				}
			},
            error: function(res) {
                console.log(res);
                toastWithButton = app.toast.create({text: 'Check your connection!',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()
            }
        
    
})
          
		 
}
//////////////////////////////////////

			
   





