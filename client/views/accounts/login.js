Template.login.rendered = function() {
    App.init();
    console.log('login rendered');
    var BasePagesLogin = function() {
        // Init Login Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
        var initValidationLogin = function(){
            jQuery('.js-validation-login').validate({
                errorClass: 'help-block text-right animated fadeInDown',
                errorElement: 'div',
                errorPlacement: function(error, e) {
                    jQuery(e).parents('.form-group > div').append(error);
                },
                highlight: function(e) {
                    jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                    jQuery(e).closest('.help-block').remove();
                },
                success: function(e) {
                    jQuery(e).closest('.form-group').removeClass('has-error');
                    jQuery(e).closest('.help-block').remove();
                },
                rules: {
                    'login-email': {
                        required: true,
                        email: true
                    },
                    'login-password': {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {
                    'login-email': {
                        required: 'Please enter a valid email address',
                    },
                    'login-password': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 5 characters long'
                    }
                }
            });
        };

        return {
            init: function () {
                // Init Login Form Validation
                initValidationLogin();
            }
        };
    }();

    // Initialize when page loads
    jQuery(function(){ BasePagesLogin.init(); });
}

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = $('#login-email').val();
        var passwordVar = $('#login-password').val();

        Meteor.loginWithPassword(emailVar, passwordVar, function(e){
            if (e) {
                switch (e.reason) {
                    case "Incorrect password":
                        $('.js-validation-login').validate().showErrors({"login-password": "Invalid password"});
                        break;
                    case "User not found":
                        $('.js-validation-login').validate().showErrors({"login-email": "We can't recognize this email"});
                        break;
                    default:
                        break;
                }
            } else {
                FlowRouter.go("/");
            }
        });
    },
    'click #linkedinBtn': function(event) {
        Meteor.loginWithLinkedin({}, function(err) {
            if (err) {
                if (err.errorType != "Accounts.LoginCancelledError")
                    Bert.alert( "There was an error signing up with LinkedIn", 'danger' );
            } else {
                FlowRouter.go("/");
            }
        });
    }
});