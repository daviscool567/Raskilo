function loadNotification(){
	var list='';
	var c =1;
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////
if(email == '' || email == null || token == '' || token == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else{
		//https://project.readoneglobal.com/barpay/owner/
	   //app.dialog.preloader('Loading Notification List...');
        app.request.post('https://barpay.app/application/user/notificationList.php',
            {
				email    : email,
				token    : token
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
			
            	
				len = res.data.length;
		for(i=0; i< len; i++)
		  {
			 
		   list +='<li>\
                                    <div class="item-content">\
                                        <div class="item-media">\
                                            <figure class="avatar avatar-40 rounded p-1 page-bg">\
                                                <img src="img/favicon192.png" alt="">\
                                            </figure>\
                                        </div>\
                                        <div class="item-inner">\
                                            <div class="row">\
                                                <div class="col">\
                                                    <p>N'+res.data[i].value+'<br /><small class="text-opac">'+res.data[i].text+'</small>\
                                                    </p>\
                                                    <p>'+res.data[i].title+'<br /><small class="text-opac">'+res.data[i].category+'</small>\
                                                    </p>\
                                                </div>\
                                                <div class="col-auto">\
                                                    <p>\
                                                        <small class="text-opac">'+res.data[i].date_created+'</small>\
                                                    </p>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </li>';
		
		
			  }
			  
			  $("#notify").html(list); 
			  loadNotification2();
			
			

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 10000, });
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
   /////////////////////////
   function loadNotification2(){
	var list='';
	var c =1;
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////
if(email == '' || email == null || token == '' || token == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else{
		//https://project.readoneglobal.com/barpay/owner/
	  // app.dialog.preloader('Loading Notification List...');
        app.request.post('https://barpay.app/application/user/notificationList.php',
            {
				email    : email,
				token    : token
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
			
            	
				len = res.data.length;
		for(i=0; i< len; i++)
		  {
			 
		  list +='<li>\
                                    <div class="item-content">\
                                        <div class="item-media">\
                                            <figure class="avatar avatar-40 rounded p-1 page-bg">\
                                                <img src="img/favicon192.png" alt="">\
                                            </figure>\
                                        </div>\
                                        <div class="item-inner">\
                                            <div class="row">\
                                                <div class="col">\
                                                    <p>N'+res.data[i].value+'<br /><small class="text-opac">'+res.data[i].text+'</small>\
                                                    </p>\
                                                    <p>'+res.data[i].title+'<br /><small class="text-opac">'+res.data[i].category+'</small>\
                                                    </p>\
                                                </div>\
                                                <div class="col-auto">\
                                                    <p>\
                                                        <small class="text-opac">'+res.data[i].date_created+'</small>\
                                                    </p>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </li>';
		
			  }
			  
			  $("#notify").html(list); 
			
			

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 10000, });
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
   /////////////////////////
   /////////////////////////////
   ///////////////////////
   ////////////show single notification///////////////
   //////all notification///////////////
   function allNotification(){
	var list='';
	var c =1;
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////
if(email == '' || email == null || token == '' || token == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else{
		//https://project.readoneglobal.com/barpay/owner/
	   //app.dialog.preloader('Loading Notification List...');
        app.request.post('https://barpay.app/application/user/notificationList.php',
            {
				email    : email,
				token    : token
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
			
            	
				len = res.data.length;
		for(i=0; i< len; i++)
		  {
			  if(res.data[i].status =='unread')
		   {
		   var cl='white';
		   }
		   else
		   {
		   var cl ='light-blue';
		   }
			 
		  list +='<li>\
                    <button value="'+res.data[i].id+'"onclick="readNotify(this.value)" class="item-link item-content "style="margin:5px;background:'+cl+';outline:0;border:0;text-align:left;">\
                        <div class="item-inner">\
                            <div class="item-title-row">\
                                <div class="item-title">'+res.data[i].category+'</div>\
                                <div class="item-after">'+res.data[i].date_created+'</div>\
                            </div>\
                            <div class="item-subtitle">'+res.data[i].title+'</div>\
                            <div class="item-text">'+res.data[i].text.substring(0,45)+'</div>\
                        </div>\
                    </button>\
                </li>';
		
			  }
			  
			  $("#notify2").html(list); 
			  allNotification2();
			
			

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 10000, });
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
   /////////////////////////
   function allNotification2(){
	var list='';
	var c =1;
    let toastBottom;
    let toastTop;
    let toastCenter;
    let toastIcon;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////
if(email == '' || email == null || token == '' || token == null)
	{
		 app.views.main.router.navigate('/login/', {reloadAll: true});
	}
	else{
		//https://project.readoneglobal.com/barpay/owner/
	  // app.dialog.preloader('Loading Notification List...');
        app.request.post('https://barpay.app/application/user/notificationList.php',
            {
				email    : email,
				token    : token
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
			app.dialog.close();
			
            	
				len = res.data.length;
		for(i=0; i< len; i++)
		  {
			  if(res.data[i].status =='unread')
		   {
		   var cl='white';
		   }
		   else
		   {
		   var cl ='light-blue';
		   }
			 
		  list +='<li>\
                    <button value="'+res.data[i].id+'"onclick="readNotify(this.value)" class="item-link item-content "style="margin:5px;background:'+cl+';outline:0;border:0;text-align:left;">\
                        <div class="item-inner">\
                            <div class="item-title-row">\
                                <div class="item-title">'+res.data[i].category+'</div>\
                                <div class="item-after">'+res.data[i].date_created+'</div>\
                            </div>\
                            <div class="item-subtitle">'+res.data[i].title+'</div>\
                            <div class="item-text">'+res.data[i].text.substring(0,45)+'</div>\
                        </div>\
                    </button>\
                </li>';
		
			  }
			  
			  $("#notify2").html(list); 
			
			

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 10000, });
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
   /////////////////////////
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   //////////////////////////////////////////////
   function readNotify(value){
	var list='';
	var value = value;
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////

		//https://project.readoneglobal.com/barpay/owner/
	  // app.dialog.preloader('Reading Notification...');
        app.request.post('https://barpay.app/application/user/notificationSingle.php',
            {
				email    : email,
				token    : token,
				value    : value
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
		 app.views.main.router.navigate('/notify/', {reloadAll: true});
			app.dialog.close();
			 
			
			 
		      $("#notify_ti").html(res.name.title);	 
		  $("#notify_category").html('Category : '+res.name.category);
          $("#notify_date").html(res.name.date_created);
          $("#notify_title").html('Title : '+res.name.title);
		  $("#notify_id").html('Ref : '+res.name.user_id);
		  $("#notify_value").html('Value : '+res.name.value);
          $("#notify_text").html(res.name.text);
		   $("#notify_update").html('Date Read : '+res.name.date_updated);
		    readNotify2(value);

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 10000, });
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
//////////////////////////////
//////////////////////////////////
   ////////////show single notification///////////////
   //////////////////////////////////////////////
   function readNotify2(value){
	var list='';
	var value = value;
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////
   
	email = localStorage.getItem("bar_email");
    token = localStorage.getItem("bar_token");
///////////////////////////////////////////

		//https://project.readoneglobal.com/barpay/owner/
	  // app.dialog.preloader('Reading Notification...');
        app.request.post('https://barpay.app/application/user/notificationSingle.php',
            {
				email    : email,
				token    : token,
				value    : value
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
		 app.views.main.router.navigate('/notify/', {reloadAll: true});
			app.dialog.close();
			 
			 
			 
		    $("#notify_ti").html(res.name.title);	 
		  $("#notify_category").html('Category : '+res.name.category);
          $("#notify_date").html(res.name.date_created);
          $("#notify_title").html('Title : '+res.name.title);
		  $("#notify_id").html('Ref : '+res.name.user_id);
		  $("#notify_value").html('Value : '+res.name.value);
          $("#notify_text").html(res.name.text);
		  $("#notify_update").html('Date Read : '+res.name.date_updated);

        }
		
		else{
          app.dialog.close(); 
		
            toastWithButton = app.toast.create({text: res.message,closeButton: true, closeTimeout: 10000, });
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
   