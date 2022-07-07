<template>
  <v-app>
    <v-main>
      <v-container style="width:600px;margin-top:50px;" class="grey lighten-5">
        <v-row>
          <v-col>
            <v-form ref="form" v-model="valid">
              <v-text-field v-model="user.name" dense label="Name" ref="name" :rules="[value => !!value || 'Required.']" required />
              <v-text-field v-model="user.age" dense label="Age" type="number" ref="age" :rules="[value => !!value || 'Required.']" required />
              <v-btn @click="addUser">Add</v-btn>
            </v-form>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <FirstList :colleagues="colleagues" />
          </v-col>
          <v-col>
            <SecondList :list2="list2" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-snackbar v-model="showNotif" timeout="1500">
      {{ notifMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn :color="notifColor" text v-bind="attrs" @click="showNotif = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import FirstList from './components/FirstList';
import SecondList from './components/SecondList';
import store from './store';

export default {
  store,
  name: 'App',
  computed: {
    colleagues () {
      return store.getters.getColleagues;
    },
    list2 () {
      return store.getters.getList2;
    }
  },
  components: {
    FirstList,
    SecondList,
  },
  data () {
    return {
      valid: false,
      user: { name: '', age: '' },
      showNotif: false,
      notifMsg: '',
      notifColor: ''
    }
  },
  methods: {
    addUser () {
      this.$refs.form.validate();
      if (this.valid) {
        store.dispatch("addToList2", this.user).then(() => {
          store.dispatch("searchRemove", this.user);
          this.user = { name: '', age: '' };
          this.$refs.name.focus();
          this.$refs.form.resetValidation();
          this.showNotification('User added');
        }).catch(err => {
          this.showNotification(err, 'red');
        })
      }
    },
    showNotification (msg, color) {
      this.showNotif = true;
      this.notifMsg = msg;
      this.notifColor = color;
    }
  }
};
</script>
<style>
.fade-enter {
  opacity:0;
}
.fade-enter-active{
  animation: fadein 1s;
}
@keyframes fadein {
  from {opacity: 0;}
  to   {opacity: 1;}
}
</style>
