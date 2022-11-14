export default function({ $gates, store, route, redirect }) {
  // console.log("authentification")
  //  console.log(store.getters)

  const anonymousUserIUrlName = ["index", "reset-finish", "reset-password-employee", "reset-password", "forgot-password-employee", "panelys-login", "authentification"];


  /**  console.log("-----------------------");
   console.log(store.state.loggedIn);
   console.log(store.getters.loggedInUser);
   console.log("-----------------------");

   // console.log($gates, typeof $gates);
   // console.log(!anonymousUserIUrlName.includes($auth.ctx.from.name));
   // console.log("must be redirected   -> ", store.state.loggedIn && anonymousUserIUrlName.includes(route.name));

   **/

  // if(store.state.loggedIn){
  //   console.log("herre")
  //   //$auth.logout();
  //   //window.localStorage.clear();
  //   // location.reload();
  //   //location.reload();
  // } else if (store.state.loggedIn && store.getters.loggedInUser.isDefaultPassword || store.state.loggedIn && store.getters.loggedInUser.passwordExpired) {
  //   // console.log("checkForcePassword");
  //   // console.log([store.state.loggedIn, store.getters.loggedInUser.isDefaultPinCode]);
  //   if(route.name !== "reset-password-admin-panelys") {
  //     // return redirect();
  //   }
  // }

}
