Meteor.startup(function() {
    console.log("sup");

    ServiceConfiguration.configurations.update(
        { "service": "linkedin" },
        {
            $set: {
                "clientId": Meteor.settings.linkedInClientId,
                "secret": Meteor.settings.linkedInSecret
            }
        },
        { upsert: true }
    );

    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false,
    });

    // Accounts.emailTemplates.siteName = "Mentuit";
    // Accounts.emailTemplates.from     = "Mentuit <noreply@mentuit.com>";
    // Accounts.emailTemplates.verifyEmail = {
    //     subject() {
    //         return "Welcome to Mentuit!";
    //     },
    //     text( user, url ) {
    //         let emailAddress   = user.emails[0].address,
    //             urlWithoutHash = url.replace( '#/', '' ),
    //             supportEmail   = "support@mentuit.com",
    //             emailBody      = `To verify your email address (${emailAddress}) click the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;
    //
    //         return emailBody;
    //     }
    // };
    //

});

