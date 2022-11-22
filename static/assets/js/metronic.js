
"use strict";
var Import=function (){
  return{
    init:function(){
      import KTUtil from "~/assets/js/components/util";
      import KTCard from "~/assets/js/components/card";
      import KTCookie from "~/assets/js/components/cookie";
      import KTMenu from "~/assets/js/components/menu";
      import KTScrolltop from "~/assets/js/components/scrolltop";
      import KTToggle from "~/assets/js/components/toggle";
      import KTLayoutAsideMenu from "~/assets/js/layout/base/aside-menu";
      import KTLayoutAsideToggle from "~/assets/js/layout/base/aside-toggle";
      import KTLayoutBrand from "~/assets/js/layout/base/brand";
      import KTLayoutContent from "~/assets/js/layout/base/content";
      import KTLayoutFooter from "~/assets/js/layout/base/footer";
      import KTLayoutHeader from "~/assets/js/layout/base/header";
      import KTLayoutHeaderMenu from "~/assets/js/layout/base/header-menu";
      import KTLayoutHeaderTopbar from "~/assets/js/layout/base/header-topbar";
      import KTLayoutStickyCard from "~/assets/js/layout/base/sticky-card";
      import KTLayoutStretchedCard from "~/assets/js/layout/base/stretched-card";
      import KTLayoutChat from "~/assets/js/layout/extended/chat";
      import KTLayoutSubheader from "~/assets/js/layout/base/subheader";
      import KTLayoutExamples from "~/assets/js/layout/extended/examples";
      import KTLayoutQuickActions from "~/assets/js/layout/extended/quick-actions";
      import KTLayoutQuickCartPanel from "~/assets/js/layout/extended/quick-cart";
      import KTLayoutQuickNotifications from "~/assets/js/layout/extended/quick-notifications";
      import KTLayoutQuickPanel from "~/assets/js/layout/extended/quick-panel";
      import KTLayoutQuickSearch from "~/assets/js/layout/extended/quick-search";
      import KTLayoutQuickUser from "~/assets/js/layout/extended/quick-user";
      import KTLayoutScrolltop from "~/assets/js/layout/extended/scrolltop";
      import KTLayoutSearch from "~/assets/js/layout/extended/search";
    }
  }
}();
// Component Definition
var KTAppB = function() {
  /** @type {object} colors State colors **/


  return {
    init: function(settingsArray) {

      // Import.init()
      KTApp.initComponents();
    },


  };
}();

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = KTAppB;
}

// Initialize KTApp class on document ready
$(document).ready(function() {
  KTAppB.init(KTAppSettings);
});
