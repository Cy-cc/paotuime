<template>

  <div class="containter-fluid" style="background-color: rgb(246,246,246);">
<!--    noteInfoModal-->
    <div class="modal fade" id="noteEditInfo" tabindex="-1" aria-labelledby="noteEditInfoLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="border-radius: 20px 20px" v-model="noteEditInfo">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="nodeContent" style="display: flex;justify-content:flex-end;flex-direction: column;height: 100%">
            <div class="nodeMContent" style="height: auto;margin-left: 5px;margin-right: 5px;margin-bottom: 10px;margin-top: 10px">
              <form class="row g-3" v-model="editNoteInfo">
                <div class="col-md-6">
                  <label for="inputNoteTitle" class="form-label">内容标题</label>
                  <input type="text" class="form-control" id="inputNoteTitle" v-model="editNoteInfo.noteTitle">
                </div>
                <div class="col-md-6">
                  <label for="inputNoteClass" class="form-label">内容分类</label>
                  <input type="text" class="form-control" id="inputNoteClass">
                </div>
                <div class="col-12">
                  <label for="inputNoteArticle" class="form-label">文章内容</label>
                  <textarea class="form-control" id="inputNoteArticle" rows="auto" v-model="editNoteInfo.noteArticle">

                  </textarea>
                </div>
                <div class="col-md-6">
                  <label for="inputNotePrice" class="form-label">Price</label>
                  <input type="text" class="form-control" id="inputNotePrice" v-model="editNoteInfo.notePrice">
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">发布状态</label>
                  <select id="inputState" class="form-select" v-model="editNoteInfo.display">
                    <option selected value="1">立即发布</option>
                    <option value="0">稍后发布</option>
                  </select>
                </div>
              </form>
            </div>
          </div>

          <div class="modal-footer" style="display: flex;justify-content: space-between">
            <div style="display: flex;justify-content: flex-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <span style="margin-left: 5px">时间</span>
            </div>
            <div style="display: flex;justify-content: flex-end">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="subEditNote(editNoteInfo)">修改</button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--modal AddNoteInfo-->
    <div class="modal fade" id="noteAddInfo" tabindex="-1" aria-labelledby="noteAddInfoLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="border-radius: 20px 20px">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="nodeContent" style="display: flex;justify-content:flex-end;flex-direction: column;height: 100%">
            <div class="nodeMContent" style="height: auto;margin-left: 5px;margin-right: 5px;margin-bottom: 10px;margin-top: 10px">
              <form class="row g-3" v-model="subEditNote">
                <div class="col-md-6">
                  <label for="subNoteTitle" class="form-label">内容标题</label>
                  <input type="text" class="form-control" id="subNoteTitle" v-model="subEditNote.noteTitle">
                </div>
                <div class="col-md-6">
                  <label for="subNoteClass" class="form-label">内容分类</label>
                  <input type="text" class="form-control" id="subNoteClass">
                </div>
                <div class="col-12">
                  <label for="subNoteArticle" class="form-label">文章内容</label>
                  <textarea class="form-control" id="subNoteArticle" rows="auto" v-model="subEditNote.noteArticle">

                  </textarea>
                </div>
                <div class="col-md-6">
                  <label for="subNotePrice" class="form-label">Price</label>
                  <input type="text" class="form-control" id="subNotePrice" v-model="subEditNote.notePrice">
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">发布状态</label>
                  <select id="subState" class="form-select" v-model="subEditNote.display">
                    <option selected value="1">立即发布</option>
                    <option value="0">稍后发布</option>
                  </select>
                </div>
              </form>
            </div>
          </div>

          <div class="modal-footer" style="display: flex;justify-content: space-between">
            <div style="display: flex;justify-content: flex-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <span style="margin-left: 5px">时间</span>
            </div>
            <div style="display: flex;justify-content: flex-end">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="subAddNote(subNoteInfo)">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>







<!--    布局-->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
      <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16"
          style="color: #FF5722">
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
          </svg>
          <strong class="me-auto" style="margin-left: 5px">闪送</strong>
<!--          <small>11 mins ago</small>-->
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body" v-text="toastContent">
        </div>
      </div>
    </div>
    <div class="container" style="height: 100%;padding-top: 0px;background-color: white">
      <nav class="navbar navbar-light bg-light" style="padding-top: 0px;">
        <div class="container-fluid" style="background-color: white;display: flex;justify-content: flex-end">
          <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="reLoadPage()">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>

          <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="addNoteInfo()">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>


        </div>
      </nav>
      <table class="layui-table">
        <colgroup>
        </colgroup>
        <thead>
        <tr>
          <th width="auto">内容标题</th>
          <th>内容简要</th>
          <th width="auto">发布时间</th>
          <th width="90px">是否发布</th>
          <th width="145px">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData">
          <input type="hidden" v-text="item.noteId">
          <td v-text="item.noteTitle"></td>
          <td v-text="item.noteArticle"></td>
          <td v-text="item.createTime"></td>
          <td>
            <div class="form-check form-switch" style="margin-left: 15px">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" :checked="item.display" @click="changeDisplay(item.noteId)">
            </div>
          </td>
          <td>
            <div class="layui-btn-group">
              <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="deleteNote(item.noteId)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </button>
              <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="editNote(item.noteId)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </button>
              <button type="button" class="layui-btn layui-btn-primary layui-btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import {get} from "../utils/http";
import {post} from "../utils/http";

export default {
  name: "search",
  data() {
    return {
      tableData: [],
      noteTitle: '',
      noteArticle: '',
      createTime: '',
      toastContent: '',
      editNoteInfo: {
        noteTitle: '',
        noteArticle: '',
        notePrice: 0,
        display: 0,
      },
      subNoteInfo: {
        noteUid: 0,
        noteTitle: '',
        noteArticle: '',
        notePrice: 0,
        display: 0,
      }
    }
  },
  created() {
    get('/note/myNotes').then((res) => {
      res.data.data.forEach(function (value, index, array) {
        value.noteArticle = value.noteArticle.slice(0, 15);
      })
      this.tableData = res.data.data;
      console.log(res.data.data);
    })
  },
  methods: {

    changeDisplay: function (note_id) {
      var that = this;
      post('/note/changeNotesDisplay', {"note_id": note_id}).then((res) => {
        if (res.data.msg == '取消发布成功') {
          $(".toast").toast('show');
          that.toastContent = res.data.msg;
        } else {
          $(".toast").toast('show');
          that.toastContent = res.data.msg;
        }
      })
    },
    deleteNote: function (note_delete_id) {
      var that = this;
      post('/note/deleteNote', {"note_id": note_delete_id}).then((res) => {
        get('/note/myNotes').then((res) => {
          this.tableData = res.data.data;
        });
      })
    },
    reLoadPage: function () {
      get('/note/myNotes').then((res) => {
        this.tableData = res.data.data;
      })
    },
    editNote: function (note_edit_id) {
      var myModal = new bootstrap.Modal(document.getElementById('noteEditInfo'), {
        keyboard: false
      });
      myModal.show();
      this.editNoteInfo = this.tableData[note_edit_id - 1];
    },
    subEditNote: function (forName) {
      var that = this;
      post('/note/subEditNote', this.editNoteInfo).then((res) => {
        if (res.data.status.msg = '更新成功') {
          this.reLoadPage();
          $(".toast").toast('show');
          $("#noteEditInfo").modal('hide');
          that.toastContent = res.data.status.msg;
        } else {
          $(".toast").toast('show');
          that.toastContent = res.data.status.msg;
        }
        ;
      })
    },
    addNoteInfo: function (forName) {
      $("#noteAddInfo").modal('show');
      this.subNoteInfo.noteUid = sessionStorage.getItem("uid");
      post('/note/addNoteInfo', this.subNoteInfo).then((res) => {
        if (res.data.status.msg = '插入成功') {
          this.reLoadPage();
          $(".toast").toast('show');
          $("#noteEditInfo").modal('hide');
          that.toastContent = res.data.status.msg;
        } else {
          $(".toast").toast('show');
          that.toastContent = res.data.status.msg;
        }
      })
    },
  }
}
</script>

<style scoped>


</style>
