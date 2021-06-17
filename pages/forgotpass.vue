<template>
  <div>
    <div class="card mx-auto mt-5" style="max-width: 320px">
      <div class="card-body">
        <div role="group" class="form-group" id="__BVID__160">
          <label
            for="loginID"
            class="d-block text-left"
            id="__BVID__160__BV_label_"
            >メール</label
          >
          <div>
            <input
              id="loginID"
              type="email"
              required="required"
              aria-required="true"
              class="bg-transparent form-control"
            />
          </div>
        </div>
        <button type="button" class="btn btn-warning d-block w-100 mt-5">
          メール送信
        </button>
        <ul class="my-2 small text-left">
          <li>
            新しいお客様ですか？
            <a href="/register" class="font-weight-bold"> アカウント作成 </a>
          </li>
          <li>
            すでにアカウントをお持ちですか？
            <a href="/login" class="font-weight-bold"> ログイン </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>