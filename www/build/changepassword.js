function changePassword(){
	
    let toastBottom;
    let toastWithButton;
	let notificationFull;
    //////////////////
	
	pass  = $("#Epass").val();
	cpass  = $("#Ecpass").val();
    ///////////////////
	if(email == '' || email == null || token == '' || token == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
  else if(pass =='' || pass == null){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
        icon: '<i class="fa fa-edit"></i>',
        title: 'Password Update',
        titleRightText: 'now',
        subtitle: 'Password Needed',
        text: 'password field empty',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(cpass =='' || cpass == null){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
         icon: '<i class="fa fa-edit"></i>',
        title: 'Password Update',
        titleRightText: 'now',
        subtitle: 'Confirm Password',
        text: 'confirm password field empty',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else if(cpass  != pass){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
         icon: '<i class="fa fa-edit"></i>',
        title: 'Password Update',
        titleRightText: 'now',
        subtitle: 'Password MisMatch',
        text: 'password does not match',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }else if(pass.length < 6){
	
       var song = new Audio();
       song.src = 'audio.mp3';
         song.play();
        // Create full-layout notification
        notificationFull = app.notification.create({
         icon: '<i class="fa fa-edit"></i>',
        title: 'Password Update',
        titleRightText: 'now',
        subtitle: 'Minimum Password Lenght is 6',
        text: 'password too short',
        closeTimeout: 2000,
      });
        notificationFull.open();
    }
	else{
 
	   app.dialog.preloader('Updating Details...');
        app.request.post('https://barpay.app/application/user/changePassword.php',
            {
				email    : email,
				token    : token,
				pass     : pass,
				cpass    : cpass
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
              app.dialog.close();
			 $("#Epass").val("");
	         $("#Ecpass").val("");
		    app.views.main.router.navigate('/settings/', {reloadAll: true});
		    toastWithButton = app.toast.create({text:res.message,closeButton: true, closeTimeout: 10000, });
            toastWithButton.open()
        }
		
		else{
         app.dialog.close();
		
            toastWithButton = app.toast.create({text:res.message,closeButton: true, closeTimeout: 10000, });
            toastWithButton.open()

        }

        },function(err) {           

            if(err.status == 0 ){
                
                app.dialog.close();
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 10000,});
                toastWithButton.open();

            }
        }); 
		 
		 }
		 

}



