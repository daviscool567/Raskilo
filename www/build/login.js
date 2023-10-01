function login(){
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	var semail       = $('#login_email').val();
	var pass         = $('#login_password').val();
    

     if(semail =='' || semail == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User Login',
        titleRightText: 'now',
        subtitle: 'Email Address Needed',
        text: 'email field empty',
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
        title: 'User login',
        titleRightText: 'now',
        subtitle: 'Password Needed',
        text: 'password field empty',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
		
	    app.dialog.preloader('Authenticating Details...','lightskyblue');
        app.request.post(api_url+'login.php',
            {
				user        : semail,
				password    : pass
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'YES'){       
            app.dialog.close(); 
            localStorage.setItem("rask_user", res.phone);
            localStorage.setItem("rask_email", res.email);
            localStorage.setItem("rask_phone", res.phone);
            localStorage.setItem("rask_address", res.address);
             //localStorage.setItem("rask_locality", res.locality);
            localStorage.setItem("rask_name", res.fname);
            app.views.main.router.navigate('/home/', {reloadAll: true});
        }
		else if(res.success == 'NO')
        { 
            app.dialog.close(); 		
            toastWithButton = app.toast.create({text: 'Password is Incorrect',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();

        }
            else if(res.success == 'Pending')
        { 
             app.dialog.close(); 
             localStorage.setItem("rask_email", res.email);
             app.views.main.router.navigate('/verify/', {reloadAll: true});

        }
         else if(res.success == 'Exist')
        { 
            app.dialog.close(); 		
            toastWithButton = app.toast.create({text: 'Account Does Not Exist!',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();

        }
        else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },function(err) {           
            if(err.status == 0 ){
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
            }
        }); 
		 
		 }
		 }

////////////////////////
//////////////////////
function login2(){
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	var semail       = $('#login_email2').val();
	var pass         = $('#login_password2').val();
    

     if(semail =='' || semail == null){
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        title: 'User Login',
        titleRightText: 'now',
        subtitle: 'Email Address Needed',
        text: 'email field empty',
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
        title: 'User login',
        titleRightText: 'now',
        subtitle: 'Password Needed',
        text: 'password field empty',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
		
	    app.dialog.preloader('Authenticating Details...','lightskyblue');
        app.request.post(api_url+'login.php',
            {
				user        : semail,
				password    : pass
            },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.success == 'YES'){       
            app.dialog.close(); 
            localStorage.setItem("rask_user", res.phone);
            localStorage.setItem("rask_email", res.email);
            localStorage.setItem("rask_phone", res.phone);
            localStorage.setItem("rask_address", res.address);
             localStorage.setItem("rask_locality", res.locality);
            localStorage.setItem("rask_name", res.fname);
            app.views.main.router.navigate('/home/', {reloadAll: true});
        }
		else if(res.success == 'NO')
        { 
            app.dialog.close(); 		
            toastWithButton = app.toast.create({text: 'Password is Incorrect',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();

        }
             else if(res.success == 'Pending')
        { 
             app.dialog.close(); 
             localStorage.setItem("rask_email", res.email);
             app.views.main.router.navigate('/verify/', {reloadAll: true});

        }
         else if(res.success == 'Exist')
        { 
            app.dialog.close(); 		
            toastWithButton = app.toast.create({text: 'Account Does Not Exist!',closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();

        }
        else{
          app.dialog.close(); 
            toastWithButton = app.toast.create({text: res.success,closeButton: true, closeTimeout: 2000, });
            toastWithButton.open();
        }
        },function(err) {           
            if(err.status == 0 ){
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'Network Error!',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
            }
        }); 
		 
		 }
		 }