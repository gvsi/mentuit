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