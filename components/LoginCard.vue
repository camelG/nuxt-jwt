<template>
  <div class="card-body">
    <form @submit.prevent="userLogin()">
      <div role="group" class="form-group">
        <label for="loginID" class="d-block text-left">メール</label>
        <div>
          <input
            id="loginID"
            v-model="login.email"
            type="email"
            required="required"
            aria-required="true"
            class="bg-transparent form-control"
          />
        </div>
      </div>
      <div role="group" class="form-group">
        <label for="loginPW" class="d-block text-left">パスワード</label>
        <div>
          <input
            id="loginPW"
            v-model="login.password"
            type="password"
            required="required"
            aria-required="true"
            class="bg-transparent form-control"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-warning d-block w-100 mt-5">
        ログイン
      </button>
    </form>
    <div class="mt-3 small a-divider-break"></div>
    <ul class="my-2 small text-left">
      <li>
        新しいお客様ですか？
        <a href="/register" class="font-weight-bold"> アカウント作成 </a>
      </li>
      <li>
        <a href="/forgotpass" class="font-weight-bold">
          パスワードを忘れた場合
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { login } from "@/api";
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      this.$auth.loginWith("local", { data: this.login });
    },
  },
};
</script>

<style scoped>
</style>