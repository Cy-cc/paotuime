<template>
  <div id="loginpage" class="container"style="margin-top: 200px">
    <div id="form-container">
      <form class="form-sign" v-model="submitForm">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="submitForm.username" aria-describedby="UsernameHelp">`
          <div id="UsernameHelp" class="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="submitForm.password">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="button" class="btn btn-primary" @click="submitLogin(submitForm)">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {post} from "../utils/http";
export default {
  name: "login",
  data() {
    return{
      submitForm:{
        username: '',
        password: ''
      },
    }
  },
  methods: {

    submitLogin(forName){
      var that = this;
      post('/login',this.submitForm).then((response)=>{
        if (response.data.status.msg =='success'){
          // sessionStorage.setItem("status",response.)
          sessionStorage.setItem("uid",response.data.uid);
          sessionStorage.setItem("username",response.data.username);
          sessionStorage.setItem("status",response.data.status.code);
          that.$router.push('/');
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
