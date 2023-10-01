function saveFCM(fcmToken){
////////////////////
   
	email = localStorage.getItem("rask_email");
    token = fcmToken;
   
///////////////////////////////////////////
 if(email == '' || email == null)
	{
		
	}
	else
	{
        app.request.post(api_url+'save_token.php', { email : email, token : token },
        function(res){
        var res =JSON.parse(res)
         console.log(res);		
         if(res.status)
         {   

        }
		else
        {

        }

        },function(err){           


            }
        )
    }  
		 
		 }
   


///////////////////////////////////////////////////

   