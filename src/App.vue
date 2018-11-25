<template>
  <div id='#app' class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-section-end">
            <!-- md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button -->
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
          <span class="md-display-1">Fhunt++</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Freelancehunt++</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Лента</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Сообщения</span>
          </md-list-item>

          <md-list-item>
            <md-icon>list</md-icon>
            <span class="md-list-item-text">Проекты</span>
          </md-list-item>

          <md-list-item>
            <md-icon>close</md-icon>
            <span class="md-list-item-text">Выйти</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app, #app {
    position:absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
  }

  .md-app-toolbar {
    height: 196px;
  }
  
</style>

<script>
export default {
  name: 'Flexible',
  data: () => ({
    menuVisible: false
  })
}
</script>