<template>
  <div class="container-fluid" style="background-color: rgb(246,246,246);height: 100%">
<!--noteInfoModal-->
    <div class="modal fade" id="noteInfo" tabindex="-1" aria-labelledby="noteInfoLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="border-radius: 20px 20px" v-model="noteInfo">
              <div class="modal-header">
                <h1 class="modal-title modal-note-title" id="noteInfoLabel" v-text="noteInfo.noteTitle"></h1>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
          <div class="nodeContent" style="display: flex;justify-content:flex-end;flex-direction: column;height: 100%">
            <div class="nodeMContent" style="height: 100px">
              <p class="modal-note-content" v-text="noteInfo.noteArticle">

                闪送必达
              </p>
            </div>
            <div class="nodePrice"style="height: 60px;display: flex;justify-content:flex-end;flex-direction: column">
              <div style="display:flex;flex-direction: row;justify-content: flex-end;height: 60px;line-height: 60px">
                <h1 style="font-weight: 600;height: 60px;line-height: 60px;color: #DEECFF">Price:</h1>
                <h1 style="font-weight: 600;height: 60px;line-height: 60px;color: #DEECFF" v-text="noteInfo.notePrice"></h1>
                <svg style="margin-top: 10px;color: #DEECFF"
                  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-currency-yen" viewBox="0 0 16 16">
                  <path d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="modal-footer" style="display: flex;justify-content: space-between">
            <div style="display: flex;justify-content: flex-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <span style="margin-left: 5px" v-text="noteInfo.createTime"></span>
            </div>
            <div style="display: flex;justify-content: flex-end">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary">接单</button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="container" style="background-color: white;box-shadow: 0px 2px #C0C4CC" >
      <div class="row row-cols-1 row-clos-sm 2 row-cols-md-3 lg-4">
        <div class="col shadow-sm p-3 mb-5 bg-body rounded" style="padding: 0px" v-for="(item,index) in NotesContext">
          <div class="card h-100">
<!--            <img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <h4 class="card-title" style="font-weight: 600" v-text="item.noteTitle"></h4>
              <p class="card-text" v-text="item.noteArticle">
              </p>
            </div>
            <div class="card-body">
              <small class="text-muted">发布时间</small>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
              <small class="text-muted" style="margin-left: 20px">
<!--                <input type="hidden" v-text="item.noteId">-->
                <a href="javascript:void(0)" style="text-decoration: none" @click="getNoteInfo(item.noteId)">
                  更多
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                  </svg>
                </a>
              </small>
            </div>
            <div class="card-footer" style="background-color: rgb(160,207,255);">
              <small class="text-muted" v-text="item.createTime"></small>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="..." style="display: flex;justify-content: flex-end;"v-show="status==200?false:true">
        <ul class="pagination">
          <li class="page-item page-link" @click="getPrePageInfo()"v-show="CurrentPage==1?false:true">
            上一页
          </li>
          <li class="page-item page-link" style="height: 33.2px" v-for="index in pages" v-text="index" @click="getPageInfo(index)"
              :class="{'checked':index==CurrentPage}" v-show="index<=CurrentPage+3&&index>=CurrentPage-2"></li>
          <li class="page-item page-link" @click="getNextPageInfo()" v-show="CurrentPage==totalPage?false:true">
            下一页
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<script>
import {post} from "../utils/http";
export default {
  name: "OrderSquare",
  data(){
    return {
      NotesContext: [],
      CurrentPage: 1,
      pageNum: {
        page: 1,
      },
      pages: [],
      noteInfo:[],
      totalPage: 1,
      status: 404,
    }
  },
  created() {
    post('/note/leastNotes',this.pageNum).then((res)=>{
      this.CurrentPage=1;
      this.NotesContext=res.data.data;
      var pages = res.data.pages;
      this.status=res.data.status;
      this.totalPage=pages;
      var pagearr = new Array();
      for(var i=1;i<=pages;i++){
        pagearr.push(i);
      };
      this.pages=pagearr;
    })
  },
  methods: {
    getPageInfo:function(index){
      this.CurrentPage=index;
      this.pageNum.page=index;
      post('/note/leastNotes',this.pageNum).then((res)=>{
        this.NotesContext=res.data.data;
      })
    },
    getPrePageInfo:function (){
      this.pageNum.page=this.CurrentPage-1;
      post('/note/leastNotes',this.pageNum).then((res)=>{
        this.NotesContext=res.data.data;
      })
    },
    getNextPageInfo:function (){
      this.pageNum.page=this.CurrentPage+1;
      post('/note/leastNotes',this.pageNum).then((res)=>{
        this.NotesContext=res.data.data;
      })
    },
    getNoteInfo:function (noteId){
      var myModal = new bootstrap.Modal(document.getElementById('noteInfo'), {
        keyboard: false
      });
      myModal.show();
      var noteId=(noteId-1)%9;
      this.noteInfo=this.NotesContext[noteId];
    }
  }
}
</script>

<style scoped>
.page-item a{
  text-decoration: none;
}
.checked {
  background:#64a281;
  color:#fff;
}
.modal-note-title{
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  width: 100%;
}
.modal-note-content{
  margin: 1.4em 0.8em;
  font-size: 16px;
}

</style>
