


function register(){
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
    var fname            = $('#register_fullname').val();
	var phone            = $('#register_mobile').val();
	var semail            = $('#register_email').val();
	var pass             = $('#register_pass').val();
	var cpassword        = $('#register_cpass').val();
    var address          = $('#register_address').val();
   
///////////////////////////////////////////
   
    if(fname =='' || fname == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Fullname Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(phone =='' || phone == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Mobile Number Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(semail == '' || semail == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Email Address Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
    else if(address == '' || address == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Address Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(pass =='' || pass == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Password Needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(cpassword =='' || cpassword == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Confirm Password',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(cpassword  != pass){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User SignUp',
        titleRightText: 'now',
        subtitle: 'Password MisMatch',
        text: 'password does not match',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
        
	    app.dialog.preloader('Submitting Details...','lightskyblue');
        app.request.post(api_url+'signup.php',
            {
                 name          : fname,
                 address        : address,
				 phone          : phone,
				 email          : semail,
				 password       : pass
            },
        function(res){
        var res =JSON.parse(res)
        app.dialog.close();  
            console.log(res);
        if(res.success == 'YES'){  
            
            localStorage.setItem("rask_email", res.email);
          
             app.dialog.close();
            toastWithButton = app.toast.create({text: 'Registration Successful',closeButton: true, closeTimeout: 1000, });
            toastWithButton.open();
            app.views.main.router.navigate('/verify/', {reloadAll: true});

        }
        else if(res.success == 'Phone')
        {  
            app.dialog.close();
            toastWithButton = app.toast.create({text: 'Phone number already used',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        else if(res.success == 'Email')
        {  
            app.dialog.close();
            toastWithButton = app.toast.create({text: 'Email already used',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        } 
        else{
            app.dialog.close();
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },function(err) {           
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network error',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
    }
		 }
   
   
 ///////////////////////////
