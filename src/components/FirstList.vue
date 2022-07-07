<template>
<v-card class="mx-auto" max-width="300" tile>
  <v-list dense>
    <v-subheader>First List</v-subheader>
    <v-list-item-group color="primary">
      <v-list-item v-for="(c, ci) in colleagues" :key="ci" @click="colClick(c)">
        <v-list-item-content>
          <v-list-item-title v-text="c.name"></v-list-item-title>
          <v-list-item-subtitle v-text="c.age"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-card>
</template>
<script>
export default {
  name: 'FirstList',
  props: {
    colleagues: Array
  },
  methods: {
    colClick (c) {
      this.$emit('colClick', c)
    }
  }
}
</script>
