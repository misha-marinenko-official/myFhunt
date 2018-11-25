<template>
  <div class="auth">

  Авторизация:  (<a href="https://freelancehunt.com/my/api">Где их найти?</a>) <br>
    <md-field>
      <label>Идентификатор</label>
      <md-input v-model="ident" required></md-input>
      <span class="md-error">Требуеться Идентификатор</span>
    </md-field>
    <md-field>
      <label>Секретный ключ</label>
      <md-input v-model="seckey" required type="password"></md-input>
      <span class="md-error">Требуеться Секретный ключ</span>
    </md-field>
    <div v-if="ident !== '' && seckey !== ''">
    Перепроверьте данные:
    <pre v-html="ident" />
    <pre v-html="seckey" />
    <md-button @click="authnew()" class="md-raised md-primary">Войти</md-button>
    </div>
     <md-button v-if="ident == '' || seckey == ''" disabled class="md-raised md-primary">Войти</md-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ident: "",
      seckey: ""
    }
  },
  methods: {
    authnew: function () {
      let lsValue = this.$localStorage.get('fhunt')
      this.$localStorage.set('ident', this.$data.ident);
      this.$localStorage.set('seckey', this.$data.seckey);
      location.href = "#/posts";
    }
  }
}
</script>

<style>
</style>
