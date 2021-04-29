<template>
  <div class="about">我是 about 页面</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    setTimeout(() => {
      import(
        /* webpackChunkName: 'math', webpackPrefetch: true */ "@/assets/js/math"
      ).then(({ add }) => {
        add(1, 2).then((res) => console.log(res));
      });
    }, 3000);
  },
});
</script>


<style lang="scss" scoped>
.about {
  color: pink;
}
</style>