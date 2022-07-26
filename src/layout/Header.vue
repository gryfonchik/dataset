<template>
  <div class="nav">
    <div class="nav_name"><router-link class="nav_link" to="/">название проекта</router-link></div>
    <div class="nav_name">
      <router-link class="nav_link" to="project">проекты</router-link>
    </div>
    <div class="nav_logout">
      <button v-if="!signedIn" class="nav_link" @click="SignIn">Вход</button>
      <button v-if="signedIn" class="nav_link" @click="SignOut">Выход</button>
      <button class="nav_link" @click="Account">Account</button>
    </div>
  </div>
</template>

<script>
import MsalAuth from '../auth';
import endpoints from '../endpoints';

const auth = new MsalAuth();

export default {
  
  name: "Header",

  data() {
    return {
      signedIn: false,
    };
  },


  created() {
    const token = localStorage.getItem('token');
    if (token){
      this.signedIn = true;
    }
  },

  methods: {
    async SignIn() {
      const token = await auth.signIn();
      try {
        const me = await endpoints.getMe(token);
        if (me.status === 200){
          this.signedIn = true;

        }
        localStorage.setItem("token", token);

      } catch (error) {
        if (error.response.status === 403){
          const c = await endpoints.createUser(token);
          this.signedIn = true;
          console.log(c);
          console.log("created user");
        } else {
        console.error(error);
        }
      }
      
    },

    async SignOut(){
      auth.signOut();
      this.signedIn = false;
      localStorage.clear();
    },

    async Account(){
      const token = localStorage.getItem('token');
      if (token){
      const user = await endpoints.getMe(token);
      console.log(user.data);
      } else {
        console.log('Not logged in');
      }
    }
  },
};



</script>

<style scoped>
.nav {
  background-color: #49006b;
  overflow: hidden;
  padding-top: 22px;
  padding-block-end: 22px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  font-family: "Syne", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  user-select: none;
}
.nav_logout {
  float: right;
  margin-right: 56px;
}


.nav_name {
  float: left;
  margin-left: 20px;
  margin-right: 20px;
}
.nav_link {
  color: #ffffff;
  text-decoration: none;
}
.nav_link:hover {
  color: #cacfda;
}
</style>
