FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("defaultLayout", {main: "blank"});
    }
});

FlowRouter.route('/login', {
    action: function(params) {
        BlazeLayout.render("plainLayout", {main: "login"});
    }
});

FlowRouter.route('/profile', {
    action: function(params) {
        BlazeLayout.render("defaultLayout", {main: "profile"});
    }
});