<template>
<div>
    <br>
    Time Slot:
<select v-model="timeNow">
  <option v-for="time in timings" :key="time" :value="time">{{time}}</option>
</select>
    Day:
<select v-model="dayNow">
  <option v-for="day in days" :key="day" :value="day">{{day}}</option>
</select>
<br>
<b-tabs>
    <b-tab title="Lecture">
        <!-- "Location": "",
        "StaffEID": "",
        "Staff": "",
        "Time": "",
        "SubjCode": "",
        "Subject": "",
        "Type": "L" -->
        <br><br>
        Location: 
        <select v-model="lecture.Location">
            <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        <!-- <input v-model="lecture.Location" type="text"/> -->
        <!-- StaffEID: 
        <select v-model="lecture.StaffEID">
            <option v-for="staffEID in staffEIDs" :key="staffEID">{{staffEID}}</option>
        </select> -->
        <br><br><br>
        Staff: 
        <select v-model="lecture.Staff">
            <option v-for="staff in staffs" :key="staff">{{staff}}</option>
        </select><br><br><br>
        <!-- SubjectCode: 
        <select v-model="lecture.SubjectCode">
            <option v-for="subjectCode in subjectCodes" :key="subjectCode">{{subjectCode}}</option>
        </select><br><br><br> -->
        Subject: 
        <select v-model="lecture.Subject">
            <option v-for="subject in subjects" :key="subject">{{subject}}</option>
        </select><br><br><br>
        



        <button @click="pushEntryLecture">Push the Lecture</button>
    </b-tab>



    <b-tab title="Practical">
        <!-- "Time": "",
        "Location": "",
        "SubjCode": "",
        "Subject": "",
        "day": "",
        "isAllocated": true,
        "Staff": "",
        "StaffEID": ""  -->
        <br><br>
        Batch1: <div>
        <br><br>
        Location: 
        <select v-model="batch1.Location">
            <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        <!-- <input v-model="batch1.Location" type="text"/> -->
        <br><br><br>
        <!-- SubjectCode: 
        <select v-model="batch1.SubjectCode">
            <option v-for="subjectCode in subjectCodes" :key="subjectCode">{{subjectCode}}</option>
        </select><br><br><br> -->
        Subject: 
        <select v-model="batch1.Subject">
            <option v-for="subject in subjects" :key="subject">{{subject}}</option>
        </select><br><br><br>
        <!-- StaffEID: 
        <select v-model="batch1.StaffEID">
            <option v-for="staffEID in staffEIDs" :key="staffEID">{{staffEID}}</option>
        </select> -->
        
        Staff: 
        <select v-model="batch1.Staff">
            <option v-for="staff in staffs" :key="staff">{{staff}}</option>
        </select><br><br><br>
        </div>

        <hr><hr>


        <br>
        Batch2: <div>
        <br><br>
        Location: 
        <select v-model="batch2.Location">
            <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        <!-- <input v-model="batch2.Location" type="text"/> -->
        <br><br><br>
        <!-- SubjectCode: 
        <select v-model="batch2.SubjectCode">
            <option v-for="subjectCode in subjectCodes" :key="subjectCode">{{subjectCode}}</option>
        </select><br><br><br> -->
        Subject: 
        <select v-model="batch2.Subject">
            <option v-for="subject in subjects" :key="subject">{{subject}}</option>
        </select>
        <!-- StaffEID: 
        <select v-model="batch2.StaffEID">
            <option v-for="staffEID in staffEIDs" :key="staffEID">{{staffEID}}</option>
        </select> -->
        <br><br><br>
        Staff: 
        <select v-model="batch2.Staff">
            <option v-for="staff in staffs" :key="staff">{{staff}}</option>
        </select><br><br><br>
        </div>

        <hr><hr>
        <br>
        Batch3: <div>
            <br><br>
        Location: 
        <select v-model="batch3.Location">
            <option v-for="location in locations" :key="location">{{location}}</option>
        </select>
        <!-- <input v-model="batch3.Location" type="text"/> -->
        <br><br><br>
        <!-- SubjectCode: 
        <select v-model="batch3.SubjectCode">
            <option v-for="subjectCode in subjectCodes" :key="subjectCode">{{subjectCode}}</option>
        </select><br><br><br> -->
        Subject: 
        <select v-model="batch3.Subject">
            <option v-for="subject in subjects" :key="subject">{{subject}}</option>
        </select><br><br><br>
        <!-- StaffEID: 
        <select v-model="batch3.StaffEID">
            <option v-for="staffEID in staffEIDs" :key="staffEID">{{staffEID}}</option>
        </select> -->
        Staff: 
        <select v-model="batch3.Staff">
            <option v-for="staff in staffs" :key="staff">{{staff}}</option>
        </select><br><br><br>
        </div>

        <hr><hr>

        <button @click="pushEntryPractical">Push the Practical</button>


    </b-tab>
    
</b-tabs>
<hr><hr>
<button @click='done'>Done</button>
<hr><hr>
</div>
</template>
<script>
let self = this
export default {
  name: 'TTgen',
  methods: {
    done () {
        console.log('done')
        this.$data.finalJSON['_id'] = this.$store.state.Dept+this.$store.state.AcYear+this.$store.state.Sem+this.$store.state.Div+this.$store.state.Year
        console.log(this.$data.finalJSON['_id'])
        this.$store.state.finalJSON = this.$data.finalJSON
        console.log(this.$data.finalJSON)
        console.log(this.$store.state.finalJSON)
        this.$router.push('/preview')
    },
    pushEntryLecture () {
        this.$data.lecture['Time'] = this.$data.timeNow
        this.$data.lecture['SubjCode'] = this.$store.state.subjectEIDMap[this.$data.lecture['Subject']].SubjectCode
        this.$data.lecture['StaffEID'] = this.$store.state.staffEIDs[this.$data.lecture['Staff']]
        this.$data.finalJSON[this.dayNow].push(this.$data.lecture)
        console.log(this.$data.finalJSON[this.dayNow])
    },
    pushEntryPractical () {
        this.$data.batch1['Time'] = this.$data.timeNow
        this.$data.batch2['Time'] = this.$data.timeNow
        this.$data.batch3['Time'] = this.$data.timeNow
        this.$data.batch1['day'] = this.$data.dayNow
        this.$data.batch2['day'] = this.$data.dayNow
        this.$data.batch3['day'] = this.$data.dayNow
        
        this.$data.batch1['SubjCode'] = this.$store.state.subjectEIDMap[this.$data.batch1['Subject']].SubjectCode
        this.$data.batch2['SubjCode'] = this.$store.state.subjectEIDMap[this.$data.batch2['Subject']].SubjectCode
        this.$data.batch3['SubjCode'] = this.$store.state.subjectEIDMap[this.$data.batch3['Subject']].SubjectCode

        this.$data.batch1['StaffEID'] = this.$store.state.staffEIDs[this.$data.batch1['Staff']]
        this.$data.batch2['StaffEID'] = this.$store.state.staffEIDs[this.$data.batch2['Staff']]
        this.$data.batch3['StaffEID'] = this.$store.state.staffEIDs[this.$data.batch3['Staff']]

        console.log('div')
        console.log(this.$store.state.Div)
        if (this.$store.getters['getDiv'] === 'A'){
        this.$data.practical.Batches["A1"] = this.$data.batch1
        this.$data.practical.Batches["A2"] = this.$data.batch2
        this.$data.practical.Batches["A3"] = this.$data.batch3
        }
        if (this.$store.getters['getDiv'] === 'B'){
        this.$data.practical.Batches["B1"] = this.$data.batch1
        this.$data.practical.Batches["B2"] = this.$data.batch2
        this.$data.practical.Batches["B3"] = this.$data.batch3
        }
        if (this.$store.getters['getDiv'] === 'C'){
        this.$data.practical.Batches["C1"] = this.$data.batch1
        this.$data.practical.Batches["C2"] = this.$data.batch2
        this.$data.practical.Batches["C3"] = this.$data.batch3
        }

        this.$data.finalJSON[this.dayNow].push(this.$data.practical)
        console.log(this.$data.finalJSON[this.$data.dayNow])
        console.log(this.$data.practical['Batches'])
    }
  },
  data () {
    return {
      batch1_name: '',
      batch2_name: '',
      batch3_name: '',
      dayNow: '',
      timeNow: '',
      finalJSON: {
        "_id": '',
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Friday": [],
        "Thursday": [],
        "Saturday": [],
      },
      days: this.$store.getters['getDays'],
      locations: this.$store.getters['getLocations'],
      timings: this.$store.getters['getTimings'],
      staffEIDs: this.$store.getters['getStaffEIDs'],
      staffs: this.$store.getters['getStaffs'],
      subjectCodes: this.$store.getters['getSubjectCodes'],
      subjects: this.$store.getters['getSubjects'],
      lecture: {
        "Location": "",
        "StaffEID": "",
        "Staff": "",
        "Time": "",
        "SubjCode": "",
        "Subject": "",
        "Type": "L"
      },
      practical: {
            "Subject": "Practical",
            "Type": "P",
            "Batches": {}
      },
      batch1: {
        "Time": "",
        "Location": "",
        "SubjCode": "",
        "Subject": "",
        "day": "",
        "isAllocated": true,
        "Staff": "",
        "StaffEID": ""          
      },
      batch2: {
        "Time": "",
        "Location": "",
        "SubjCode": "",
        "Subject": "",
        "day": "",
        "isAllocated": true,
        "Staff": "",
        "StaffEID": ""          
      },
      batch3: {
        "Time": "",
        "Location": "",
        "SubjCode": "",
        "Subject": "",
        "day": "",
        "isAllocated": true,
        "Staff": "",
        "StaffEID": ""          
      }
    }
  }
}
</script>
<style>

</style>
