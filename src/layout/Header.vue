<template>
  <div class="nav">
    <div class="add_n">
      <div class="nav_name">
        <router-link class="nav_link" to="/">название проекта</router-link>
      </div>
      <div class="nav_name">
        <router-link class="nav_link" to="project">projects</router-link>
      </div>
      <div class="nav_logout">
        <div v-if="!signedIn" class="nav_link" @click="SignIn">Sign in</div>
      </div>
    </div>
    <Dropdown
      v-if="signedIn"
      ref="dropDown"
      :func="SignOut"
      title="ФИО ПОЛЬЗОВАТЕЛЯ"
      class="drop"
    />
  </div>
</template>

<script>
import MsalAuth from "../auth";
import endpoints from "../endpoints";
import Dropdown from "./Dropdown.vue";

const auth = new MsalAuth();
export default {
  name: "Header",

  data() {
    return {
      signedIn: false,
    };
  },

  created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.signedIn = true;
    }
  },

  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.signedIn = true;
    }
    const fullName = localStorage.getItem("fullName");
    if (fullName) {
      this.updateDropdownData(fullName);
    }
  },

  methods: {
    updateDropdownData(newTitle) {
      this.$refs.dropDown.title = newTitle;
    },
    async SignIn() {
      const token = await auth.signIn();
      try {
        const me = await endpoints.getMe(token);
        if (me.status === 200) {
          this.signedIn = true;
          await this.signedIn;
          this.updateDropdownData(me.data.full_name.split(" ", 2).join(" "));
        }
        localStorage.setItem("token", token);
        localStorage.setItem(
          "fullName",
          me.data.full_name.split(" ", 2).join(" ")
        );
      } catch (error) {
        if (error.response.status == 403) {
          const c = await endpoints.createUser(token);
          const me = await endpoints.getMe(token);
          this.signedIn = true;
          localStorage.setItem("token", token);
          localStorage.setItem(
            "fullName",
            me.data.full_name.split(" ", 2).join(" ")
          );
          console.log(c);
          console.log("created user");
        } else {
          console.error(error);
        }
      }
    },

    async SignOut() {
      auth.signOut();
      this.signedIn = false;
      console.log("vishel");
      localStorage.clear();
    },

    async Account() {
      const token = localStorage.getItem("token");
      if (token) {
        const user = await endpoints.getMe(token);
        console.log(user.data);
      } else {
        console.log("Not logged in");
      }
    },
  },

  components: {
    Dropdown,
  },
};
</script>

<style scoped>
.add_n {
  max-width: 1536px;
  margin: auto;
}
.drop {
  float: right;
  margin-right: 40px;
  max-width: 500px;
  height: 30px;
}
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
  height: 27px;
  padding-top: 3px;
}
.nav_link {
  color: #ffffff;
  text-decoration: none;
}
.nav_link:hover {
  color: #cacfda;
}
</style>
