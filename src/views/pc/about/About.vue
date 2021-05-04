<template>
  <div class="about">
    <div>我是 about 页面</div>
    <div>num:{{ num }}</div>
    <div>doubleNum:{{ doubleNum }}</div>
    <button @click="add(1)">add</button>
    <button @click="asyAdd(1)">asyAdd</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      num: (state: any) => state.count.num,
    }),
    ...mapGetters({
      doubleNum: "doubleNum",
    }),
  },
  created() {
    setTimeout(() => {
      import(
        /* webpackChunkName: 'math', webpackPrefetch: true */ "@/assets/js/math"
      ).then(({ add }) => {
        add(1, 2).then((res) => console.log(res));
      });
    }, 3000);
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["asyAdd"]),
  },
});
</script>


<style lang="scss" scoped>
.about {
  color: pink;
}
</style>