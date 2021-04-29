<template>
  <div class="example">
    <div>
      {{ msg }}
    </div>
    <span>
      {{ count }}
    </span>

    <myImg src="./assets/img/1.jpg" />
    <!-- <img src="./assets/img/1.jpg" alt="" /> -->

    <div class="bk"></div>

    <i class="iconfont icon-yibiyi"></i>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { add } from "@/assets/js/test";
import myImg from "./components/myImg.vue";

export default Vue.extend({
  data() {
    return {
      msg: "Hello world!",
      count: 0,
    };
  },
  created() {
    setInterval(() => {
      this.count++;
    }, 1000);

    add(1, 2).then((res) => console.log(res));
  },
  components: {
    myImg,
  },
});
</script>


<style lang="scss" scoped>
.example {
  color: aqua;
  span {
    color: hotpink;
  }

  .bk {
    width: 200px;
    height: 200px;
    background: center / contain no-repeat url("@/assets/img/2.jpg");
  }
}
</style>
