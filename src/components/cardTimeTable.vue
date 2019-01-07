<template>
  <div class="card mb-3" id="wholecard" >
    <div class='card mb-3 cardSingle' v-for='entry in obj'>
      <div v-if='entry.Type === "L"' class='lecture'>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <div class="card-body" id="cardbody">
        <table width="100%">
          <tr>
            <td width="17%">{{entry.Time}}</td>
            <td width="17%">{{year}}</td>
            <td width="17%">{{div}}</td>
            <td width="17%">{{entry.Subject}}</td>
            <td width="17%">{{entry.Type}}</td>
          </tr>
        </table>                      
      </div>
    </div>
    <div v-if='entry.Type === "P"' class='practical'>
        <div class='lectureEntry' v-for='entr in Object.keys(entry.Batches)'>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <table width="100%">
          <tr>
            <td width="17%">{{entry.Batches[entr].Time}}</td>
            <td width="17%">{{year}}</td>
            <td width="17%">{{entr}}</td>
            <td width="17%">{{entry.Batches[entr].Subject}}</td>
            <td width="17%">P</td>
          </tr>
        </table>                      
      </div>

    </div>
    </div>
  </div><!-- /.card -->
</template>

<script>
export default {
  name: 'cardTimetable',
  props: [
    'obj',
    'year',
    'div'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wholecard{
  border-radius: 10px;
  top: 10px;
  font-size: cacl(1vw+1vh);
}
.cardSingle{
    margin: 1%;
    width: 98%;
}
.lectureEntry{
    margin-top: 5px;
    margin-bottom: 10px;
}
</style>
