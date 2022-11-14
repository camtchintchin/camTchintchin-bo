export default function({ $gates, $router,store, route, redirect }) {

  console.log('loggin',store.state.loggedIn)
  console.log('user',store.state.user)
  console.log('route',route.path)
  if (route.path === '/login' ){
    if(store.state.loggedIn){
      return redirect("/");
    }else{
      console.log("")
    }
  }else{
    if(!store.state.loggedIn){
      return redirect("/login");
    }
  }
  // if (route.path === '/login' && store.state.loggedIn){
  //   return redirect("/");
  // }else{
  //   if(!store.state.loggedIn){
  //     return redirect("/login");
  //     //$auth.logout();
  //     //window.localStorage.clear();
  //     // location.reload();
  //     //location.reload();
  //   }
  // }
}
