function AppEntryPoint(){

  var menuController = window._context["MenuController"];
  var sidebarController = window._context["SidebarController"];
  var apiClient = window._context["ApiClient"];

  this.init = async() => {
    await apiClient.init()
    menuController.init();
    sidebarController.init();
    sidebarController.openSidebar();
  }

  $( document ).ready(()=> {
      this.init();
  });

}

if(typeof window._context === 'undefined'){
   window._context = {};
}
window._context["AppEntryPoint"] = new AppEntryPoint();
