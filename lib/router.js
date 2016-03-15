FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("defaultLayout", {main: "blank"});
    }
});