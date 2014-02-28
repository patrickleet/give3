/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

// Filters

var filters = {

  isLoggedIn: function() {
    if (! Meteor.user()) {
      if (Meteor.loggingIn()) {
        this.render(this.loadingTemplate);
      }
      else {
        this.render('entrySignIn');
      }
      this.stop();
    }
  },
  isLoggedOut: function() {
    if (Meteor.user()) {
      this.stop();
      Router.go('dashboard');
    }
  },
  isAdmin: function() {
    if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      this.render('notFound');
      this.stop();
    }
  }
};

var helpers = {
  analyticsRequest: function() {
    // console.log('Make analytics request here', this, Meteor.user());
  },
  showLoadingBar: function() {
    if (this.ready()) {
      NProgress.done();
    } else {
      NProgress.start();
      this.stop();
    }
  }
};

// If logged in, redirect requests to account pages to dashboard
Router.before(filters.isLoggedOut, {only: [
  "entrySignIn",
  "entrySignUp",
  "homepage"
]});

// Check authenticated
Router.before(filters.isLoggedIn, {only: [
  'dashboard',
  'create',
  'discover'
]});

// Show loading bar for any route that loads a subscription
Router.before(helpers.showLoadingBar, {only: []});

Router.after(helpers.analyticsRequest);

// Routes

Router.map(function() {

  // Pages

  this.route('homepage', {
    path: '/'
  });

  // Create

  this.route('create');

  // Dashboard

  this.route('dashboard');

  // Discover

  this.route('discover')


});
