//  App's Global JS
!function ($, window, document, undefined) {
  "use strict";

  var Application = {
    init: function(){
      this._initAlerts();
    },
    _initAlerts: function(){
      $('#flash').delay(500).fadeIn('normal', function() {
        $(this).delay(1500).fadeOut();
      });
    }
  };

  window.App = window.App || {};
  window.App.Application = Application;
  $(document).on('ready page:load', function(){ Application.init(); });

}(jQuery, window, document);