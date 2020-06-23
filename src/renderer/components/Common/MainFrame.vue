<template>
    <div class="fullWindow" :style="fontColor">
        <div class="backgroundclass" style="transition: all 0.5s" :style="backGroundParent">
      	  <div class="backBodyClass" style="transition: all 0.5s" :style="backGroundChild"></div>
        </div>
        <div class="headDiv">
          <slot name="header"></slot>
        </div>
        <main class="bodyDiv">
      <slot>
          <transition :name="transitionGroup.trransitionName" :mode="transitionGroup.mode">
            <router-view :class="transitionGroup.routerClass"></router-view>
          </transition>
        </slot>
        </main>
    <footer class="footDiv">
            <slot name="footer"></slot>
    </footer>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'mainFrame',
  computed: {
    ...mapGetters([
      'backGroundParent',
      'backGroundChild',
      'fontColor',
      'transitionGroup'
    ])
  }
}
</script>
<style lang="scss" scoped>
.fullWindow {
  border-radius: 3px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}
.bodyDiv {
  width:100%;
  height: 100%;
  overflow-y: auto;
  word-break: break-all;
  flex-grow: 1;
  position: relative;
  overflow-x: hidden;
}
.headDiv {
  flex-shrink: 0;
}
.footDiv {
  flex-shrink: 0;
  height:20px;
}
.backgroundclass{
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
/* .backgroundclass::after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    background: inherit;
    filter: attr(data-attr);
    overflow: hidden;
    box-sizing: border-box;
} */
.backBodyClass{
  width:100%;
  height:100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>