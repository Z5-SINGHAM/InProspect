<template>
  <div class="hello">
    <img src="@/assets/logo.png" alt="Vue.js PWA">
    <h1>Department :</h1>
    <select id="dept" v-model='dept'>
      <option value="Computer">Computer</option>
    </select>
    <h1>Academic Year :</h1>
    <select id="acyear" v-model="acyear">
      <option value="SE">SE</option>
      <option value="TE">TE</option>
      <option value="BE">BE</option>
    </select>
    <h1>Division :</h1>
    <select id="div" v-model="div">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <h1>Semester :</h1>
    <select id="sem" v-model="sem">
      <option value="Sem2">Sem2</option>
    </select>
    <h1>Year :</h1>
    <select id="year" v-model="year">
      <option value="2018">2018</option>
      <option value="2019">2019</option>
    </select>

    <br>
    <br>
    <br>

    <button @click='fun'>Submit</button>
    <router-link to='/preview'><button>Go To Preview</button></router-link>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      try: '',
      dept: 'select dept',
      acyear: 'select acyear',
      div: 'select div',
      sem: 'select sem',
      year: 'select year'
    }
  },
  methods: {
    fun () {
      // this.$store.dispatch('setDept',this.dept)
      this.$store.state.Dept = this.dept
      console.log(this.dept)
      // this.$store.dispatch('setAcYear',this.acyear)
      this.$store.state.AcYear = this.acyear
      console.log(this.acyear)
      // this.$store.dispatch('setDiv',this.div)
      this.$store.state.Div = this.div
      console.log(this.div)
      // this.$store.dispatch('setSem',this.sem)
      this.$store.state.Sem = this.sem
      console.log(this.sem)
      // this.$store.dispatch('setYear',this.year)
      this.$store.state.Year = this.year
      console.log(this.year)
      this.$router.push('/ttgen')
      if (this.acyear === 'SE') {
        this.$store.state.subjects = this.$store.state.subjectsSE
      }
      if (this.acyear === 'TE') {
        this.$store.state.subjects = this.$store.state.subjectsTE
      }
      if (this.acyear === 'BE') {
        this.$store.state.subjects = this.$store.state.subjectsBE
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

img{
  width: 200px;
  height: auto;
}
</style>
