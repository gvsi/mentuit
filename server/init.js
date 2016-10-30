import linkedInProfile from 'linkedin-public-profile';

Meteor.startup = function() {
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false,
        requestPermissions: {
            linkedin: ['r_basicprofile']
        },
    });

    AdminConfig = {
        adminEmails: ['me@giovannialcantara.com'],
    };

    const url = 'https://www.linkedin.com/in/giovannialcantara';

// standard usage
    linkedInProfile(url).then(profile => {  // chain your logic
        console.log(profile);
    });
};
