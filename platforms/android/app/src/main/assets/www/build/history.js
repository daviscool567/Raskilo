function loadHistory(){
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
	
	   //app.dialog.preloader('Loading Updates List...');
        app.request.post('https://barpay.app/application/user/historyList.php',
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
                    <button value="'+res.data[i].id+'"onclick="readhistory(this.value)" class="item-link item-content "style="margin:5px;background:'+cl+';outline:0;border:0;text-align:left;">\
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
			  
			  $("#history").html(list); 
			  loadHistory2();
			
			

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
   function loadHistory2(){
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
        app.request.post('https://barpay.app/application/user/historyList.php',
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
                    <button value="'+res.data[i].id+'"onclick="readhistory(this.value)" class="item-link item-content "style="margin:5px;background:'+cl+';outline:0;border:0;text-align:left;">\
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
			  
			  $("#history").html(list); 
			
			

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
   
   
   
   
   
   
   
   
   
   ////////////show single notification///////////////
   //////////////////////////////////////////////
   function readhistory(value){
	var list='';
	var value = value;
    let toastBottom;
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
        app.request.post('https://barpay.app/application/user/newsSingle.php',
            {
				email    : email,
				token    : token,
				value    : value
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
		 app.views.main.router.navigate('/history/', {reloadAll: true});
			app.dialog.close();
			 
			 
			 
		      $("#history_ti").html(res.name.title);	 
		  $("#history_category").html('Category : '+res.name.category);
          $("#history_date").html(res.name.date_created);
          $("#history_title").html('Title : '+res.name.title);
		  $("#history_id").html('Ref : '+res.name.user_id);
		  $("#history_value").html('Value : '+res.name.value);
          $("#history_text").html(res.name.text);
		   $("#history_update").html('Date Read : '+res.name.date_updated);
              readhistory2(value);
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
//////////////////////////////
//////////////////////////////////
   ////////////show single notification///////////////
   //////////////////////////////////////////////
   function readhistory2(value){
	var list='';
	var value = value;
    let toastBottom;
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
        app.request.post('https://barpay.app/application/user/newsSingle.php',
            {
				email    : email,
				token    : token,
				value    : value
            },

        function(res){
        var res =JSON.parse(res)
        
         console.log(res);		
        if(res.status == true){ 
		 app.views.main.router.navigate('/history/', {reloadAll: true});
			app.dialog.close();
			 
			 
			 
		    $("#history_ti").html(res.name.title);	 
		  $("#history_category").html('Category : '+res.name.category);
          $("#history_date").html(res.name.date_created);
          $("#history_title").html('Title : '+res.name.title);
		  $("#history_id").html('Ref : '+res.name.user_id);
		  $("#history_value").html('Value : '+res.name.value);
          $("#history_text").html(res.name.text);
		   $("#history_update").html('Date Read : '+res.name.date_updated);

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
		 
   