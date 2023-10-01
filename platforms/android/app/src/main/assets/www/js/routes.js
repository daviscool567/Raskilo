var routes = [

  // Splash page
  {
    path: '/landing/',
    url: './pages/landing.html',
    name: 'landing',
    options: {
      transition: 'f7-flip',
    },
  },
    // Splash page
  {
    path: '/thankyou/',
    url: './pages/thankyou.html',
    options: {
      transition: 'f7-flip',
    },
  },

  // login page
  {
    path: '/login/',
    url: './pages/login.html',
    name: 'login',
    options: {
      transition: 'f7-dive',
    },
  },
    {
    path: '/login2/',
    url: './pages/login2.html',
    name: 'login2',
  },
    
    //////verify
     {
    path: '/verify/',
    url: './pages/verify.html',
    name: 'verify',
  },
 // register
  {
    path: '/register/',
    url: './pages/register.html',
    options: {
      transition: 'f7-dive',
    },
  },
  
  // forgot password
  {
    path: '/forgotpassword/',
    url: './pages/forgotpassword.html',
    options: {
      transition: 'f7-dive',
    },
  },
  
  // reset password
  {
    path: '/resetpassword/',
    url: './pages/resetpassword.html',
    options: {
      transition: 'f7-dive',
    },
  },
  

  {
    path: '/terms/',
    url: './pages/terms.html',
  },
    
   // home
  {
    path: '/home/',
    url: './pages/home.html',
    options: {
      transition: 'f7-push',
    },
  },

 
  {
    path: '/about/',
    url: './pages/about.html',
  },

  // profile
  {
    path: '/profile/',
    url: './pages/profile.html',
  },
  
  {
    path: '/contact/',
    url: './pages/contact.html',
  },
 
  {
    path: '/order-service/',
    url: './pages/book-service.html',
  },
    
    {
    path: '/privacy/',
    url: './pages/privacy.html',
  },

    {
    path: '/my-service/',
    url: './pages/my-service.html',
  }, 
    {
    path: '/view-service/',
    url: './pages/view-service.html',
  }, 

    
////////shopping arena////////    
  {
    path: '/shop/',
    url: './pages/shop.html',
  },   
    
    // stats
  {
    path: '/stats/',
    url: './pages/stats.html',
    name: 'stats'
  },

  // product
  {
    path: '/product/',
    url: './pages/product.html',
  },

  // cart
  {
    path: '/cart/',
    url: './pages/cart.html',
  },

  // address
  {
    path: '/address/',
    url: './pages/address.html',
  },

  // addresses
  {
    path: '/addresses/',
    url: './pages/addresses.html',
  },

  // add addresses
  {
    path: '/addaddress/',
    url: './pages/addaddress.html',
  },

  // Payment
  {
    path: '/payment/',
    url: './pages/payment.html',
  },
  // PaymentAdd

  // thankyou order
  {
    path: '/thankyouorder/',
    url: './pages/thankyouorder.html',
  },

  // my orders
  {
    path: '/myorders/',
    url: './pages/myorders.html',
  },

  // invoice
  {
    path: '/invoice/',
    url: './pages/invoice.html',
  },

  // track order
  {
    path: '/trackorder/',
    url: './pages/trackorder.html',
  },
  
  // track order
  {
    path: '/faqs/',
    url: './pages/faqs.html',
  },   
  {
    path: '/category/',
    url: './pages/category.html',
  }, 
    {
    path: '/pending-review/',
    url: './pages/pending-review.html',
  }, 
       
    
    
    
    
    
    
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/landing.html',
  },


];
