Meteor.startup(function () {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
  });

  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/dashboard'
  });

  AccountsEntry.setProfile = function(profile) {
    profile.signUpRole = Session.get('userSignUpType');
  }
});

