<template>
<div>
    <h4>Current JSON: </h4>
    {{this.$store.state.finalJSON}}
    <br><br>
    <h4>Previously created: </h4>
    <b-tabs>
      <b-tab title="SEA">
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='sea[day]' :year='"SE"' :div='"A"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>


      <b-tab title="SEB">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='seb[day]' :year='"SE"' :div='"B"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
      
      
      <b-tab title="SEC">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='sec[day]' :year='"SE"' :div='"C"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
      
      
      <b-tab title="TEA">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='tea[day]' :year='"TE"' :div='"A"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
      
      
      <b-tab title="TEB">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='teb[day]' :year='"TE"' :div='"B"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
      
      
      <b-tab title="TEC">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='tec[day]' :year='"TE"' :div='"C"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
      
      
      <b-tab title="BEA">
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='bea[day]' :year='"BE"' :div='"A"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div></b-tab>
      
      
      <b-tab title="BEB">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='beb[day]' :year='"BE"' :div='"B"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
      
      
      <b-tab title="BEC">
        
          <div class="container">
    <div id="contentlayer">
      <!-- /.this is second layer from bottom (Profile pic and all cards)-->

      <!-- /.(Card Container))-->
      <div id="cardcontain">
            
            <b-tabs pills card v-model="tabIndex">
              <b-tab v-for='day in days' :title='day' :key='day' >
                <div class="card mb-3" id="wholecard" >
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <div class="card-body" id="cardbody">
                    <table width="100%">
                      <tr>
                        <td width="17%">Time</td>
                        <td width="17%">Year</td>
                        <td width="17%">Division</td>
                        <td width="17%">Subject</td>
                        <td width="17%">Type</td>
                      </tr>
                    </table>                      
                  </div>
                </div><!-- /.card <cardTimetable :obj='try1[day]'/> -->
                <cardTimetable :obj='bec[day]' :year='"BE"' :div='"C"'/>
              </b-tab>
            </b-tabs>
            <!-- /.(Populate the cardattLecture here))-->     
      </div>
            <div class="text-center" id="botbut">
                <b-button-group class="mt-2">
                  <b-btn class='but2' @click="tabIndex--"><i class='material-icons'>navigate_before</i></b-btn>
                  <b-btn class='but2' @click="tabIndex++"><i class='material-icons'>navigate_next</i></b-btn>
                </b-button-group>
            </div>

    
    </div>
    </div>
      </b-tab>
    </b-tabs>
</div>
</template>
<script>
import cardTimetable from '@/components/cardTimeTable'
import sea1 from '@/assets/SEA_test.json'
import seb1 from '@/assets/SEB_test.json'
import sec1 from '@/assets/SEC_test.json'
import tea1 from '@/assets/TEA_test.json'
import teb1 from '@/assets/TEB_test.json'
import tec1 from '@/assets/TEC_test.json'
import bea1 from '@/assets/BEA_test.json'
import beb1 from '@/assets/BEB_test.json'
import bec1 from '@/assets/BEC_test.json'

export default {
  name: 'Preview',
  data () {
    return {
      tabIndex: 0,
      days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      sea: sea1,
      seb: seb1,
      sec: sec1,
      tea: tea1,
      teb: teb1,
      tec: tec1,
      bea: bea1,
      beb: beb1,
      bec: bec1,
    }
  },
  components: {
    cardTimetable
  }
}
</script>
<style>
#botbut{
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: auto;
  height: auto;
}
</style>
