<template>
  <div class="multiselect">
    <multiselect v-model="selected"
                 tag-placeholder="Add this as new tag"
                 placeholder="Search or add a tag"
                 label="name" track-by="code"
                 :options="options"
                 :multiple="true"
                 :taggable="true">
    </multiselect>
  </div>
</template>

<script>
import Vue from 'vue';
import Multiselect from 'vue-multiselect';

Vue.use('multiselect', Multiselect);

export default {
  name: "MultiSelect",
  components: {Multiselect},
  props: {
    selected: {
      type: Array,
      default: null
    },
    options: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>

</style>