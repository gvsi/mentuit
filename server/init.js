Meteor.startup = function() {
    console.log('hello');
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    });
};
