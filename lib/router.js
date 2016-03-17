FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("defaultLayout", {main: "blank"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("plainLayout", {main: "login"});
    }
});

FlowRouter.route('/register', {
    action: function() {
        BlazeLayout.render("plainLayout", {main: "register"});
    }
});