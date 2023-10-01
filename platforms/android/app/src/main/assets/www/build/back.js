
	////////////////////////////////////////////////////////////
	function inner(id,title,message){
    var title = title ;
    var message = message ;
    var id = id ;
	document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log("notification");
   schedule(id, title, message); 
function schedule(id, title, message)
{
    cordova.plugins.notification.local.schedule({
        id: id,
        title: title,
        text: message,
		smallIcon: 'file://img/logo.png',
		foreground: true,
		icon: "file://img/logo.png"
    });
	var audio =  new Audio('sound.mp3');
		   audio.play();
		 
	cordova.plugins.notification.local.on("click",function(notification , schedule){
	   app.views.main.router.navigate('/home/', {reloadAll: true});
	});
}	
}
	}

