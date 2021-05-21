<template>
  <div id="index" style="background-color: rgb(246,246,246);padding: 0px">
<!--    modal-->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="text-align: center;font-size: 16px;font-weight: 600">
            <span class="badge rounded-pill bg-warning text-dark">No Authorized</span>
            <br>
            请先进行登录,将跳转至登录界面
          </div>
          <div class="modal-footer" style="border: 0px">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="confimToLogin()">确认</button>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: white">
      <div class="container">
        <a class="navbar-brand" href="javascript:void(0)"style="text-decoration: none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          闪送
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin-top: 0px">
              <li v-for="(item,index) in navInfo" class="nav-item" :style="index==curIndex?boxstyle:null"
                  @mouseover="mouseOver(index)" @mouseout="mouseout()">
                <a href="#" class="nav-link" v-html="item" style="text-decoration: none;font-size: 16px"></a>
              </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">search</button>
            <button type="button" class="btn btn-primary" @click="toLogin()" v-show="loginStatus==200?false:true">sign
            </button>
            <button type="button" class="btn btn-primary" @click="tologinOut()" v-show="loginStatus==200?true:false">signout
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div id="container" class="container" style="height: 600px;width: auto;z-index: 1"></div>
    <div class="container" style="position: relative;padding-top: 20px;padding-left:0px;padding-right:0px;background-color: rgb(246,246,246)">
      <div class="layui-row layui-col-space8">
        <div class="layui-col-xs12 layui-col-sm8 layui-col-md8 layui-col-lg8"
             style="padding: 0px;background-color: white">
          <nav class="nav"
               style="position: sticky;z-index: 2;height: 59px;background-color: white;
               padding-top: 0px;border: 1px rgb(246,246,246) solid;border-bottom: 2px #409EFF solid">
            <a class="nav-link active" aria-current="page" href="#" v-for="(item,index) in noteNavLi" v-text="item"
            style="align-items: center;margin: 0 22px;display: -webkit-box;-webkit-box-align: center;font-size: 16px;text-decoration: none;padding: 0px">
            </a>
          </nav>
          <ul  class="note-list">
            <li  v-bind:id="item.noteId" class="note-list-li" v-for="(item,index) in contentList"
                 style="border-bottom: rgb(239,235,235) 2px solid;">
              <div class="note-content">
                <a class="note-content-title" href="" v-text="item.noteTitle"></a>
                <p class="note-content-article" v-text="item.noteArticle"></p>
              </div>
              <div class="note-description">
                <a href=""><i class="fa fa-user-o" aria-hidden="false"
                              style="margin-right: 4px;letter-spacing: 1px" v-text="item.noteAuthor"></i></a>
                <a href="" ><i class="fa fa-bar-chart" aria-hidden="true"
                               style="margin-right: 4px" v-text="item.noteBrowse"></i></a>
                <span><i class="fa fa-heart" aria-hidden="true" style="margin-right: 4px" v-text="item.likeCount"></i></span>
              </div>
            </li>
          </ul>

          <div class="container d-flex align-self-center" style="height: 30px;line-height: 30px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"style="margin-top: 8px">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <p style="text-align: center;font-size: 13px;font-weight: 600;line-height: 100%;height: 100%;display: -webkit-box;-webkit-box-align: center;">
              <a href="javascript:void(0)" class="align-middle" style="text-decoration: none;color: #c2c2c2"@click="getMoreNotes()">加载更多</a></p>
          </div>
        </div>
        <div class="layui-hide-xs layui-col-sm3 layui-col-md3 layui-col-lg3"
             style="margin-left: 1%;background-color: white;position: -webkit-sticky;position: sticky;top: 50px">
          <div style="height: auto">
            <div class="card w-100"  style="border: 0px;border-radius:0 ;box-shadow: 0px 2px #409EFF;height: 100%" v-show="loginStatus==200?false:true">
              <div class="d-flex align-items-center">
                <ul class="list-group" style="width: 100%;">
                  <li class="list-group-item d-flex justify-content-between align-items-center"
                      style="border: 0px;border-radius: 0px;box-shadow: 0px 2px rgb(246,246,246);margin-top: 5px;font-size: 14px;font-weight: 450;color: #8590a6">
                    发帖量
                    <span class="badge bg-primary rounded-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center"
                      style="border: 0px;border-radius: 0px;box-shadow: 0px 2px rgb(246,246,246);margin-top: 5px;font-size: 14px;font-weight: 450;color: #8590a6">
                    访问量
                    <span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center"
                      style="border: 0px;border-radius: 0px;box-shadow: 0px 2px rgb(246,246,246);margin-top: 5px;font-size: 14px;font-weight: 450;color: #8590a6">
                    帮助中心
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card w-100" style="border: 0px;border-radius:0 ;box-shadow: 0px 2px #409EFF" v-show="loginStatus==200?true:false">
              <div class="card-body">
                <div class="d-grid gap-2" style="width: 80%;margin:auto auto">
                  <button type="button" class="btn btn-primary" @click="loginManage()">
                    我的发帖<span class="badge bg-secondary">9</span>
                  </button>
                  <button type="button" class="btn btn-primary" @click="loginManage">
                    我的接单<span class="badge bg-secondary">9</span>
                  </button>

                  <button class="btn btn-primary" type="button" @click="loginManage">
                    我要发帖<span class="badge bg-secondary">0</span></button>
                  <button class="btn btn-primary" type="button" @click="loginManage">
                    我要接单<span class="badge bg-secondary">9</span></button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="layui-hide-xs layui-col-sm1 layui-col-md1 layui-col-lg1" style="background-color: white;height: auto;
        position: sticky;top: 70px;width:6%;padding: 0px;margin-left: 5px;border-top-left-radius:10px;border-top-right-radius: 10px;
border-bottom-left-radius:10px;border-bottom-right-radius: 10px">
          <div style="align-items: center;text-align: center;font-size: 14px;height:30px;line-height:30px;margin-top: 15px">首页</div>
          <div style="align-items: center;text-align: center;font-size: 14px;height:30px;line-height:30px;margin-top: 5px">热帖</div>
          <div style="align-items: center;text-align: center;font-size: 14px;height:30px;line-height:30px;margin-top: 5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MapLoader from "../utils/AMap";
import {get} from "../utils/http";
import {post} from "../utils/http";

export default {
  name: "index",
  data(){
    return{
      title:"你好",
      content:"",
      boxstyle:"",
      navInfo: ['首页','地图'],
      noteNavLi: ['最新','关注','热榜'],
      curIndex: -1,
      loginStatus: sessionStorage.getItem("status"),
      contentList: [],
      currentPage: 1,
      page:{
        pageNum: 1,
      }
    }
  },
  methods:{
    mouseOver:function (index){
      this.curIndex=index;
      this.boxstyle="border-bottom: 4px green solid";

    },
    mouseout:function (){
      this.boxstyle="";
    },
    toLogin:function (){
      this.$router.push('/toLogin');
    },
    tologinOut:function (){
      sessionStorage.removeItem("status");
      this.$router.push('/toLogin');
    },
    getMoreNotes:function (){
      if (this.loginStatus!=200){
        var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
          keyboard: false
        });
        myModal.show();
      }else{
        var pagenum =this.currentPage+1;
        this.page.pageNum=pagenum;
        this.currentPage=this.currentPage+1;
        post('/getMore',this.page).then((res)=>{
          // console.log(this.contentList)
          res.data.forEach((item,index,array)=>{
            this.contentList.push(item)
          })
        });
        // console.log(this.currentPage);
        }
      },
    loginManage:function (){
      this.$router.push('/toManage');
    },
    confimToLogin:function (){
      var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
      });
      this.$router.push('/toLogin');
      myModal.hide();
      $('.modal-backdrop').remove();
    }

  },
  created() {

  },
  mounted() {
    let that= this;
    MapLoader().then(AMap=> {
      that.map = new AMap.Map('container', {
        resizeEnable: true
      });
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition: 'RB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

        });
        that.map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            // onComplete(result)
          } else {
            // onError(result)
          }
        });
      });
    });

  },
  beforeCreate() {
    var that=this;
    get('/getLimitNotes').then((response)=>{
      this.contentList=response.data
    })
  }


}
</script>
<link rel="stylesheet" type="text/css" href="static/css/note.list.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<style scoped>
@media (min-width: 1920px) {
  .mobile-container,#container{
    height: 600px;
    width: auto;
  }
}


</style>
