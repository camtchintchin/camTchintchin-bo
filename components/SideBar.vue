<template>
  <div class="deznav">
    <div class="deznav-scroll">
      <ul id="menu" class="metismenu">
        <li :class="{ 'nav-active': active('/') }">
          <a
            role="button"
            class="ai-icon my-2 ml-4"
            href="/">
            <span class="nav-text" >Tableau de bord</span>
          </a>
        </li>
<!--        <li>-->
<!--          <a-->
<!--            role="button"-->
<!--            class="ai-icon my-2 ml-4"-->
<!--            :class="'nav-active'">-->
<!--            <span class="nav-text" >Délégation Régionale</span>-->
<!--          </a>-->
<!--        </li>-->
        <li :class="{ 'nav-active': active('/kyc') }">
          <a
            role="button"
            class="ai-icon my-2 ml-4"
            >
            <span class="nav-text" >Kyc</span>
          </a>
        </li>
        <li :class="{ 'nav-active': active('/parametre') }">
          <a
            role="button"
            class="ai-icon my-2 ml-4"
            >
            <span class="nav-text" >Paramètres</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods:{
    active(path) {
      // @ts-ignore
      let route = this.$route.path
      console.log("route",route)
      if (path !== '/') {
        path = path.replace('/', '')
        route = route.replace('/', '')
        return route === path || route.indexOf(path) === 0
      } else {
        return route === path
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .metismenu{
    li:hover{
      background: white;
      span{
        color: #000;
      }
    }
    .nav-active{
      //background: white;
      border-left:5px solid white ;

    }
  }
</style>
