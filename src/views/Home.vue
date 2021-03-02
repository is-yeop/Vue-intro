<template>
  <div>
    <h1>Welcome to {{ title }} Home</h1>
    <input type="text" v-model="input1"/>
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <option v-for="(d,i) in options" :key="i" :value="d.v">{{ d.t }}</option>
    </select>

    <table class="table table-bordered" v-if="tableShow">
      <tr v-for="(d,i) in options" :key="i">
        <td>{{d.v}}</td>
        <td>{{d.t}}</td>
        <td>{{region == d.v ? "O" : " "}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "김상엽",
      title2: "Seoul",
      input1: "input please",
      options: [
        {v: "S", t: "Seoul"},
        {v: "J", t: "Jeju"},
        {v: "B", t: "Busan"},
      ],
      region: "J",
      tableShow: false,
    };
  },
  watch: {
    input1(now) {
      console.log(now);
    },
    title(now) {
      console.log(now)
    },
  },
  methods: {
    getData() {
      alert(this.input1)
    },
    setData() {
      this.input1 = "Fucking God..."
    },
    changeRegion() {
      this.tableShow = true
      // alert(this.region)
    },
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  },
}
</script>

<style scoped>

</style>