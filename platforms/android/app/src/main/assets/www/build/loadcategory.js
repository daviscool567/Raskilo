function loadCategory(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
/////////////////////////////
   
      app.request.post(api_url2+'categoryList.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
           len = res.data.length;
		 for(i=0; i< len; i++)
		  {
		
		  list +='<div class="col-100 medium-100 large-100">\
              <div class="card elevation-2 product margin-bottom-half">\
                <div class="card-content card-content-padding">\
                  <a href="/stats/"onclick="catLoad(\''+res.data[i].category_name+'\')" class="text-normal display-block">\
                    <h5 class="text-color-theme">'+res.data[i].category_name+'</h5>\
                  </a>\
                </div>\
              </div>\
            </div>';
            
          }
			 
			  $("#category_list").html(list);
        }
		
		else{
		
            toastWithButton = app.toast.create({text:res.message,closeButton: true, closeTimeout: 3000, });
            toastWithButton.open();

        }
        },function(err) {           

                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();

        }); 
		 }
   
   
 ///////////////////////////
///////ineerr caterorisse for filter/////////
function  loadCategoryFilter(){
	var list='';
    let toastBottom;
    let toastWithButton;
	let notificationFull;
//////////////////////////////////////////////

        app.request.post(api_url2+'categoryList.php',
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
        if(res.status == true){ 
          len = res.data.length;
		 for(i=0; i< len; i++)
		  {
		  list +='<a href="#" class="menu-dropdown-link menu-close"     onclick="loadStatSort(\''+res.data[i].category_name+'\')">'+res.data[i].category_name+'</a>';
              
			  } 
            setTimeout(function(){
                 $("#drop_category").html(list);
                
            },300) 

        }
		else{
			

        }
        },function(err) {           
                
                toastWithButton = app.toast.create({text: 'No Data Exchange from Our Server',closeButton: true, closeTimeout: 3000,});
                toastWithButton.open();
        }); 
		 
		 }
   









