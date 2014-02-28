Template.footer.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
      var currentPath, pathForName, _ref, _ref1;

      currentPath = (_ref = (_ref1 = Router.current()) != null ? _ref1.path : void 0) != null ? _ref : location.pathname;
      pathForName = Router.path(name);

      if (pathForName === '/') {
        return currentPath === pathForName;
      }
      else if (pathForName === '/signup') {
        return currentPath.indexOf('sign-up') > -1 || currentPath.indexOf(pathForName) > -1;
      }
      else {
        return currentPath.indexOf(pathForName) > -1;
      }
    });
    return active && 'active' || '';
  }
});