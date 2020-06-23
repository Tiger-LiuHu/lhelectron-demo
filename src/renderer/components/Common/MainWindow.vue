<template>
    <Frame>
      <mainHead slot="header"></mainHead>
      <mainFooter slot="footer"></mainFooter> 
    </Frame>
</template>
<script>
import Frame from '@/components/Common/MainFrame.vue'
import mainHead from '@/components/Common/MainHeader.vue'
import mainFooter from '@/components/Common/MainFooter.vue'
export default {
  name: 'MainWindow',
  components: { Frame, mainHead,mainFooter }
}
</script>
<style>

.iconfont{
  cursor: pointer;
}
</style>