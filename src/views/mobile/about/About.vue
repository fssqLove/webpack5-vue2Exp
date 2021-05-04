<template>
  <div>
    <div>我是移动端 About页</div>
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
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["asyAdd"]),
  },
});
</script>