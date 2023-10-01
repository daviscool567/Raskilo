
        function forgotPassword(){
            
            emailF = $("#emailF").val();
        
                if(emailF == '' || emailF == null)
	          {
			 toastWithButton = app.toast.create({text: 'Email Address Needed',closeButton: true, closeTimeout: 2000,});
             toastWithButton.open();
	
            } 
			else
				{
					 app.dialog.preloader('Sending Reset Code...');
                    app.request.post(api_url+'forgot_pass.php',{ email: emailF },
                     function(res){
                     var res =JSON.parse(res)
                     app.dialog.close();  
                      console.log(res);
                      if(res.success == 'Yes'){ 
                           localStorage.setItem('resEmail',emailF);
							 app.dialog.close(); 
							 app.views.main.router.navigate('/resetpassword/', {reloadAll: true});
							
                         
                        } else {
							 app.dialog.close(); 
                           toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 4000,});
                           toastWithButton.open();
                        }
                    },function(err) 
                    {           
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network error',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
                        
                }
            }
        
	//////////////////
	/////////
	///////////////////////////
        function resetPassword(){
          
            emailx =  localStorage.getItem('resEmail');
            codex = $("#code").val();
            passx = $("#passwordRS").val();
            pass2x = $("#cpasswordRS").val();

            if (emailx == "") {
              
                        toastWithButton = app.toast.create({text: 'Network error',closeButton: true, closeTimeout: 4000,});
                     toastWithButton.open();
            } else if (codex == "") {
             
                        toastWithButton = app.toast.create({text: 'Reset Code Needed',closeButton: true, closeTimeout: 4000,});
                     toastWithButton.open();
            } else if (passx == "" || passx == null)
				{
                
                        toastWithButton = app.toast.create({text: 'Enter Password',closeButton: true, closeTimeout: 4000,});
                     toastWithButton.open();
            }
			else if (pass2x == "" || pass2x == null)
				{
              
                        toastWithButton = app.toast.create({text: 'Confirn Password Needed',closeButton: true, closeTimeout: 4000,});
                     toastWithButton.open();
            } 
			else if (passx.length < 6)
				{
            
                        toastWithButton = app.toast.create({text: 'Password too short',closeButton: true, closeTimeout: 4000,});
                     toastWithButton.open();
            } 
			else if (passx != pass2x)
				{
              
                        toastWithButton = app.toast.create({text: 'Password Does not Match',closeButton: true, closeTimeout: 4000,});
                     toastWithButton.open();
            } 
			
			
			else {
              // alert(emailx);
				app.dialog.preloader('Resetting Password...','blue');
                    app.request.post(api_url+'reset.php',
                     {  email    : emailx,
                        code     : codex,
                        password : passx 
                     },
                     function(res){
                     var res =JSON.parse(res)
                     app.dialog.close();  
                      console.log(res);
                      if(res.success == 'YES'){
                            app.dialog.close(); 
				            app.views.main.router.navigate('/login/', {reloadAll: true});
							
                        }
                        else 
                        {
                            app.dialog.close(); 
                            toastWithButton = app.toast.create({text:res.success,closeButton: true, closeTimeout: 4000,});
                            toastWithButton.open();
                        }
                     },function(err) 
                    {           
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network error',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
               
            }
        }


////////////
/////////////////////
////////////resending///////