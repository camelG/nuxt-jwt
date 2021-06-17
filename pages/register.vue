<template>
  <div>
    <div class="card-body mx-auto my-5 border rounded" style="max-width: 640px">
      <!----><!---->
      <h2>アカウントを作成</h2>
      <div class="d-flex">
        <div class="mr-2">
          <label for="input-name" class="m-0"
            ><i class="fas fa-user" aria-hidden="true"></i>
            名前
          </label>
          <input
            id="input-name"
            type="text"
            class="form-control form-control-sm"
          />
        </div>
        <div class="mr-2">
          <label for="tel" class="m-0"
            ><i class="fas fa-phone-alt" aria-hidden="true"></i>
            電話
          </label>
          <input
            id="tel"
            type="text"
            class="mr-sm-2 form-control form-control-sm"
          />
        </div>
      </div>
      <div class="mr-2 width110px">
        <label for="postal" class="m-0"> 〒 郵便 </label>
        <input
          id="postal"
          type="text"
          class="mr-sm-2 form-control form-control-sm"
        />
      </div>
      <div class="mr-2">
        <label for="address" class="m-0"
          ><i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          住所
        </label>
        <input
          id="address"
          type="text"
          class="mr-sm-2 form-control form-control-sm"
        />
      </div>
      <div class="mr-2">
        <label for="input-email" class="m-0"
          ><i class="fas fa-envelope" aria-hidden="true"></i>
          メールアドレス
        </label>
        <input
          id="input-email"
          type="text"
          class="form-control form-control-sm is-valid"
        />
      </div>
      <div role="group" class="pt-2 pb-1">
        <label for="input-password" class="font-weight-bold bg-transperant"
          ><i class="fas fa-key" aria-hidden="true"></i>
          パスワード
        </label>
        <input
          id="input-password"
          type="password"
          class="form-control form-control-sm is-valid"
        />
        <div class="small">パスワードの長さは最低6文字です。</div>
      </div>
      <div role="group" class="pt-2 pb-1">
        <label for="input-password2" class="font-weight-bold">
          もう一度パスワードを入力してください
        </label>
        <input
          id="input-password2"
          type="password"
          class="form-control form-control-sm"
        />
      </div>
      <button type="button" class="btn my-2 btn-warning">アカウント作成</button>
      <div class="small border-top pt-3 mt-3">
        すでにアカウントをお持ちですか？
        <a href="/login" class="font-weight-bold"> ログイン </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>