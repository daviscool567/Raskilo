
function orderService(value)
{
  //  alert(value);
    localStorage.setItem("rask_service",value);
     $("#booking_service").val(localStorage.getItem("rask_service"));
   setTimeout(function () {
    callProfile();  
  }, 200);  
    
}


function callProfile(){
  ///////////////////
    setTimeout(function () {
     $("#booking_service").val(localStorage.getItem("rask_service"));
        
            var user    = localStorage.getItem("rask_user");
            var email   = localStorage.getItem("rask_email");
            var phone   = localStorage.getItem("rask_phone");
            var address = localStorage.getItem("rask_address");
             var locality = localStorage.getItem("rask_locality");
            var name    = localStorage.getItem("rask_name");
     if(user == '' || user == null || email == '' || email == null || name =='' || name == null)
	{
        
	} 
    else
    {      
         app.request.post(api_url+'check_stat.php', { email : email},
        function(res){
        var res =JSON.parse(res)
        console.log(res);
         if(res.success == 'YES')
         {  
	
  
             
        $("#session_fname").html(res.fname);
        $("#session_name").html(res.fname);
        $("#session_email").html(res.email);
        $("#session_phone").html(res.phone);
        ////////////////////////////////
        $("#booking_name").val(name);
        $("#booking_address").val(res.address);
        $("#reg_local").html(locality);
        $("#booking_email").val(email);
        $("#booking_mobile").val(phone);
        $("#booking_service").val(localStorage.getItem("rask_service"));
        
            
         $("#booking_name").prop('readonly', true); 
            $("#booking_email").prop('readonly', true); 
             
             
             
         $("#edit_name").val(res.fname);
         $("#edit_phone").val(res.phone);
         $("#edit_locality").val(locality);
         $("#edit_address").val(res.address);    
             
             
             
             
             
      
             
        }
		else if(res.message == 'pending')
        { 
            localStorage.setItem("rask_email",res.email);
            app.views.main.router.navigate('/verify/', {reloadAll: true});
        }
		else{
          app.dialog.close(); 
		  app.views.main.router.navigate('/login/', {reloadAll: true});
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 3000, });
            toastWithButton.open()

        }

        },function(err) {           

                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network error',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
        
    
        
    }   }, 200);  
         
	
}
//////////////////////////

function callProfilex(){
  ///////////////////
        setTimeout(function () {
            
            var user    = localStorage.getItem("rask_user");
            var email   = localStorage.getItem("rask_email");
            var phone   = localStorage.getItem("rask_phone");
            var address = localStorage.getItem("rask_address");
            var locality = localStorage.getItem("rask_locality");
            var name    = localStorage.getItem("rask_name");
     if(user == '' || user == null || email == '' || email == null || name =='' || name == null)
	{
		app.views.main.router.navigate('/login/', {reloadAll: true});
	} 
    else
    {
        
        callProfile();
    }
        },500);

}


/////////logout/////
function logout()
{
    
    
  app.dialog.confirm("Raskilo Group","Are you sure you want to logout?" ,function (){
     localStorage.clear();
     app.views.main.router.navigate('/login/', {reloadAll: true});
  }
     ) 
    
}


////////////////////////////
///////////delete account
/////////logout/////
function confirmAccount()
{
     
  app.dialog.confirm("Raskilo Group","Are you sure you want to delete your account?" ,function (){
    
      var user    = localStorage.getItem("rask_user");
      var email   = localStorage.getItem("rask_email");
      
      app.dialog.preloader('Deleting Account...','lightskyblue');
        app.request.post(api_url+'delete_account.php',
            {
				email        : email
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'YES'){       
            app.dialog.close(); 
            localStorage.clear();
      
            app.views.main.router.navigate('/home/', {reloadAll: true});
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
     ) 
    
}

/////////////////////////
////////notification
function loadCount()
{
    
      var user    = localStorage.getItem("rask_user");
      var email   = localStorage.getItem("rask_email");
   
        app.request.post(api_url+'check_notification.php',
            {
				email        : email
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.not !='0')
        {       
           
            $("#not_icon").html(res.not);
         
        }
        else{
          app.dialog.close(); 
             $("#not_icon").html('0');
        }
        },function(err) {           
            
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
            
        });  
     
      
  }

////////////////////////
///////////edit profile
//////////////////////////////////////////
//////////////cancel service///////////// 
  function editProfile()
{
    
     var address     = $("#edit_address").val();
     var name        = $("#edit_name").val();
     var phone       = $("#edit_phone").val();
    // var locality   = $("#edit_locality").val();
     var email        = localStorage.getItem("rask_email");
   
     if(email == '' || email == null)
	{
         app.views.main.router.navigate('/login2/', {reloadAll: true});
	}
    else
    {
        app.dialog.progress('Updating Details...','skyblue');
			$.ajax({
			url: api_url+"edit_profile.php",
			type: "POST",
			data: { 
                    phone    : phone,
                    email    : email,
                    address  : address,
                    name     :  name
            
            },
			dataType: "json",
			success: function(res){
			msg = res.message;
			console.log(res);
        if(res.success == 'YES'){                                 
             app.dialog.close();
            app.popup.close();
             app.views.main.router.navigate('/home/');
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

      
    
