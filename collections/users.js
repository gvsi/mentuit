if (Meteor.isServer) {
    Meteor.methods({
        sendVerificationEmail: function (userId) {
            console.log("creating... " + userId);

            //process.env.MAIL_URL = 'smtp://***:***@smtp.gmail.com:587';

            this.unblock();

            Accounts.sendVerificationEmail(userId);
        }
    });
}