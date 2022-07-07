<template>
<v-card class="mx-auto" max-width="300" tile>
  <v-list dense>
    <v-subheader>Second List</v-subheader>
    <v-list-item-group color="primary">
      <transition-group name="fade" mode="out-in">
        <v-list-item v-for="(l, li) in list2" :key="li">
          <v-fade-transition>
            <v-list-item-content>
              <v-list-item-title v-text="l.name"></v-list-item-title>
              <v-list-item-subtitle v-text="l.age"></v-list-item-subtitle>
            </v-list-item-content>
          </v-fade-transition>
        </v-list-item>
      </transition-group>
    </v-list-item-group>
  </v-list>
</v-card>
</template>
<script>
export default {
  props: {
    list2: Array
  },
  name: 'SecondList',
  data () {
    return {}
  }
}
</script>
