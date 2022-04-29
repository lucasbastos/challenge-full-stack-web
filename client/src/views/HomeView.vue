<template>
  <Dialog />
</template>

<script lang="ts">
import Vue from 'vue';
import Dialog from '../components/Dialog.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Dialog,
  },
});
</script>
