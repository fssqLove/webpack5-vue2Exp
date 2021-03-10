<template>
  <div>
    <img src="../assets/img/1.jpg" alt="" class="myImg" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    console.log(this.$attrs.src);
  },
});
</script>

<style lang="scss" scoped>
.myImg {
  width: 100px;
  height: 100px;
}
</style>