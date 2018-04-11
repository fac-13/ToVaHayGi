const { staticHandler, listHandler, profileHandler, loginHandler } = require('./handler'); 

const router = (req, res) => {
    const endpoint = req.url; 
    
    if (endpoint === '/') {
<<<<<<< HEAD
        staticHandler('public/auth.html', res) 
    }
    else if (endpoint === '/login'){
        (function loginHandler(req, res){
            let body = ''; 
            req.on('data', function(chunk){
                body += chunk; 
            })
            req.on('end', function(){
                console.log("Body:", body); 
            })
        })(req, res); 
    } 
    else if (endpoint.indexOf('public') !== -1) {
        staticHandler(endpoint, res); 
=======
        //function to check JWT to see if user is already logged in
        //redirects either to login page or directly to index.html
        if(true){ //if logged in
        staticHandler('public/index.html', res)   
        }
    }
    else if (endpoint === '/login') {
        //this comes in from auth.html to authenticate user login
        //this will redirect to index.html if authorised
        const dummyReq = {
            'form': {
              email: 'john@test.com',
              pw: 'Johnpassword1!'
            }
          }
        loginHandler(dummyReq, res);
    }
    else if (endpoint === '/signup') {
        //this comes in from auth.html to sign up a user
        //this will redirect to profile.html (editable state)

>>>>>>> b312a0db1e6883a932a3448b9522911a69f3f3a3
    }
    //this will be redundant when '/' directs to userlist
    else if (endpoint === '/userlist') {
        listHandler(endpoint, res); 
    }
    else if (endpoint === '/usernewprofile') {
        profileHandler(req, res); 
    }
    else if (endpoint.indexOf('public') !== -1) {
        staticHandler(endpoint, res); 
    }
    //TO DO: add paths: create or update profile
    else {
        res.writeHead(404, {'Content-Type': 'text/html'}); 
        res.end('<h1>404 page not found</h1>'); 
    }

}

module.exports = router; 
