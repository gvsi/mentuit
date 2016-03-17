Template.register.rendered = function() {
    appInit();
    var BasePagesRegister = function() {
        // Init Register Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
        var initValidationRegister = function(){
            jQuery('.js-validation-register').validate({
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
                    'register-email': {
                        required: true,
                        email: true
                    },
                    'register-password': {
                        required: true,
                        minlength: 6
                    },
                    'register-password2': {
                        required: true,
                        equalTo: '#register-password'
                    },
                    'register-terms': {
                        required: true
                    }
                },
                messages: {
                    'register-email': 'Please enter a valid email address',
                    'register-password': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 6 characters long'
                    },
                    'register-password2': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 6 characters long',
                        equalTo: 'Please enter the same password as above'
                    },
                    'register-terms': 'You must agree to the service terms!'
                }
            });
        };

        return {
            init: function () {
                // Init Register Form Validation
                initValidationRegister();
            }
        };
    }();

// Initialize when page loads
    jQuery(function(){ BasePagesRegister.init(); });
}

Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = $('#register-email').val();
        var passwordVar = $('#register-password').val();

        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        }, function(e) {
            if (e) {
                console.log(e);
                switch (e.reason) {
                    case "Email already exists.":
                        $('.js-validation-register').validate().showErrors({"register-email": "It seems like you are already registered!"});
                        break;
                    default:
                        break;
                }
            } else {
                FlowRouter.go("/");
            }
        });
    }
});