FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("defaultLayout", {main: "blank"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("plainLayout", {main: "login"});
    }
});

FlowRouter.route('/profile', {
    action: function() {
        BlazeLayout.render("defaultLayout", {main: "profile"});
    }
});

FlowRouter.route('/register', {
    action: function() {
        BlazeLayout.render("plainLayout", {main: "register"});
    }
});

FlowRouter.route( '/verify-email/:token', {
    name: 'verify-email',
    action( params ) {
        Accounts.verifyEmail( params.token, ( error ) =>{
            if ( error ) {
                Bert.alert( error.reason, 'danger' );
            } else {
                FlowRouter.go( '/' );
                Bert.alert( 'Email verified! Thanks!', 'success' );
            }
        });
    }
});