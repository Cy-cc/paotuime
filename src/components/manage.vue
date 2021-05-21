<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top"
         style="border-bottom: 2px #409EFF solid;background-color: white;padding: 0px">
      <div class="container">
        <a class="navbar-brand" href="javascript:void(0)" style="text-decoration: none">闪送</a>
          <ul class="navbar-nav" style="position: relative">
            <li class="nav-item dropdown" >
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-text="this.username">

              </a>
              <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink" style="position:absolute;width: 80px">
                <li><a class="dropdown-item" href="#">订单</a></li>
                <li><a class="dropdown-item" href="#">寻赏</a></li>

                <li style="text-align: center" ><button type="button" class="btn btn-outline-secondary dropdown-item">退出登录</button></li>
              </ul>
            </li>
          </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light" style="position:relative;padding-top: 0px;z-index: 20">
      <div class="container" style="padding: 0px;">
        <a class="navbar-brand" href="javascript:void(0)" style="text-decoration: none;margin-left: 40px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active router_link" to="/toManage/toOrderSquare" style="color: rgba(0,0,0,.55);">广场</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active router_link" to="/toManage/toSearch" style="color: rgba(0,0,0,.55);">我的寻赏</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active router_link" to="/toManage/toMyOrder" style="color: rgba(0,0,0,.55);">我的接单</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active router_link" to="/toManage/toLeastOrder" style="color: rgba(0,0,0,.55)">最近接单</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view :key="$route.fullPath" class="container-fluid" ></router-view>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    username: ''
  },
  created() {
    this.username=sessionStorage.getItem('username')
  }
}
</script>

<style scoped>
.bg-light{
  background-color: white;
}
.nav-item a{
  text-decoration: none;
}
.router_link{
  text-decoration: none;
  font-size: 16px;
  padding: .5rem 1rem;
}

</style>
