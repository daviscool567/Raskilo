///////////////
function insertOrder(){
    
	var total =  Number(localStorage.getItem("total_cost"));
	var delivery_price = localStorage.getItem("delivery_price");
    var delivery_address = localStorage.getItem("delivery_address");
    var delivery_state = localStorage.getItem("delivery_state");
    var delivery_localoti = localStorage.getItem("delivery_locality");
	var email = localStorage.getItem("rask_email");
    var weight = localStorage.getItem("total_weight");

     //alert(weight);
$.ajax({
        url: api_url2+"pay_with_card.php",
        type: "POST",
		data:{
			email                : email,
			cartlist             : JSON.parse(localStorage.getItem("shoppingCart")),
			total_cost           : localStorage.getItem("total_cost"),
			delivery_locality    : localStorage.getItem("delivery_locality"),
			delivery_price       : localStorage.getItem("delivery_price"),
	        delivery_state       : localStorage.getItem("delivery_state"),
            delivery_address     : localStorage.getItem("delivery_address"),
		    weight               : localStorage.getItem('total_weight'),
            phone                : localStorage.getItem("rask_phone"),
            name                 : localStorage.getItem("rask_name")
		},
        dataType: "json",
        success: function(resp){
			console.log(resp);
			 msg = resp.message;
		if(resp.status){ 
            
            $("#wallet_pay").prop('disabled',false);
            $("#wallet_pay").html("Make Payment");
			localStorage.setItem("pay_ref",resp.reference);
            localStorage.setItem("pay_amount",resp.payable);
	        
		  }
		else
		{
		
		    toastWithButton = app.toast.create({text: msg,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
		}
		},
		error: function(resp) {
            console.log(resp);
		    toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000, });
            toastWithButton.open();
		
        }
	  })

}


//////////////////
/////////////////////maikg paymen

function payOrder()
{
    
    var ref       = localStorage.getItem("pay_ref");
    var amount    = localStorage.getItem("pay_amount");
    var email     = localStorage.getItem("rask_email");
    var phone     = localStorage.getItem("rask_phone");
		amount = Number(amount);
		
    // alert(email);
      const API_publicKey = "FLWPUBK-6628ebd8049d6427307e26cc4c0053c3-X";
     // const API_publicKey  ="FLWPUBK_TEST-1b936a791b2c93ac1d1507c685d986ff-X";
    var reference= Math.floor((Math.random() * 1000000000000) + 1);
       if(amount == '' || amount == null)
	{
		 var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.toast.create({position:'top',text: 'network error, am',closeTimeout: 2000,closeButton: true,});
        notificationFull.open();
	}
        else if(ref == '' || ref == null)
	{
		 var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.toast.create({position:'top',text: 'Network error, pr',closeTimeout: 2000,closeButton: true,});
        notificationFull.open();
	}
     else if(email == '' || email == null)
	{
		 var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.toast.create({position:'top',text: 'Network error, em',closeTimeout: 2000,closeButton: true,});
        notificationFull.open();
	}
        else{
            
        app.dialog.preloader('Making Payment...','multi');
      makePayment();
	 function makePayment(){
     FlutterwaveCheckout({
      public_key: API_publicKey,
      tx_ref: reference ,
      amount: amount,
      currency: 'NGN',
      payment_options: "card, banktransfer, ussd",
	   onclose: function(incomplete) {app.dialog.close(); },
	 callback: function(payment) {
          app.dialog.preloader('Confirming Payment...','multi');
        var treference=payment.transaction_id;
/////////////////calling back////////////////		
		  $.ajax({
        url: api_url2+"confirmCardPay.php",
        type: "POST",
		data:{
			email          : email,
			treference     : treference,
			ref            : ref
		},
        dataType: "json",
        success: function(resp){
			console.log(resp);
			 msg = resp.message;
		if(resp.status){ 
            
			toastWithButton = app.toast.create({text:'Payment Sucessful',closeButton: true, closeTimeout: 1000,position:'top' });
            toastWithButton.open();
			 var song = new Audio();
           song.src = 'audio.mp3';
           song.play();
            
            localStorage.removeItem("total_cost");
            localStorage.removeItem("delivery_price");
            localStorage.removeItem("delivery_address");
            localStorage.removeItem("delivery_state");
            localStorage.removeItem("delivery_locality");
            localStorage.removeItem("total_weight");
            localStorage.removeItem("shoppingCart");
            
		    app.views.main.router.navigate('/thankyouorder/', {reloadAll: true});
            
            app.dialog.close(); 
		   inner(1 ,"Booking","Booking Payment Successful");
	
		  }
		else
		{
            app.dialog.close(); 
		    toastWithButton = app.toast.create({text: msg,closeButton: true, closeTimeout: 2000,position:'top' });
            toastWithButton.open();
		}
		},
		error: function(resp) {
            app.dialog.close(); 
            console.log(resp);
			var pop="<div>Network Error!</div>";
		    toastWithButton = app.toast.create({text: pop,closeButton: true, closeTimeout: 4000,position:'top' });
            toastWithButton.open();
        }
	  })
      },
    	customer: { email: email, phone_number:phone, name: email,
      },
      customizations: {
        title: "Raskilo Group",
        description: "Raskilo Group",
        logo: "https://raskservices.com/img/logo.png",
      },
    });
  }	
		
			
	}
       
  
    
}
		
		
		
		
		
				
							
			      
			
   



   


