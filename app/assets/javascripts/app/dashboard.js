!function ($, window, document, undefined) {
  "use strict";

  var DashboardController = {
    init: function(){
      this.$el = $('[data-controller="DashboardController"]');
      this.initDashboard();
    },
    initDashboard: function(){
    }
  };

  window.App = window.App || {};

  $(document).on('ready page:load', function(){
    $('[data-controller="DashboardController"]').length ? DashboardController.init() : '';
  });

}(jQuery, window, document);
