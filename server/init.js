Meteor.startup = function() {
    console.log('hello');
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    });
};

if (Meteor.isServer) {
    AdminConfig = {
        adminEmails: ['me@giovannialcantara.com'],
    };
}