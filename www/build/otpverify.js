function verifyOTP(){
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	var email       = localStorage.getItem("rask_email");
	var otp         = $('#otp').val();
    //alert("DDDDDDDDD");
///////////////////////////////////////////

     if(email =='' || email == null){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User Verification',
        titleRightText: 'now',
        subtitle: 'Network Error',
        text: 'error',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(otp =='' || otp == null){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User Verification',
        titleRightText: 'now',
        subtitle: 'OTP Needed',
        text: 'veriication code needed',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
	    app.dialog.preloader('Authenticating Details...','cyan');
        app.request.post(api_url+'verify.php',
            {
				email  : email,
				code    : otp
            },

        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'YES'){       
              app.dialog.close(); 
			   toastWithButton = app.toast.create({text: 'Verification Successful, Kingly Login!!!',closeButton: true, closeTimeout: 1000, });
            toastWithButton.open()
            localStorage.removeItem("rask_email",res.email);
            app.views.main.router.navigate('/login/', {reloadAll: true});

        }
		else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()

        }

        },function(err) {           

            if(err.status == 0 ){
                app.dialog.close();
                
                toastWithButton = app.toast.create({text: 'Network Error',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
		 
		 
		 }
   
   
 ////////////////
/////otp resend////
function resendOTP(){
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////
   
	var email  = localStorage.getItem("rask_email");
  //////////////

     if(email =='' || email == null){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User Verification',
        titleRightText: 'now',
        subtitle: 'Network Error',
        text: 'error',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
	
	    app.dialog.preloader('Sending OTP...','cyan');
        app.request.post(api_url+'resend_otp.php', { email  : email },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'YES'){       
              app.dialog.close(); 
			   $('#otp').val("");
             app.views.main.router.navigate('/verify/', {reloadAll: true});
             toastWithButton = app.toast.create({text: 'OTP Sent',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()

        }
		else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open()

        }
        },function(err) {           
            if(err.status == 0 ){
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network error',closeButton: true, closeTimeout: 4000,});
                toastWithButton.open();
            }
        }); 
		 
		 }
		 }

