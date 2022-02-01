<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      ratings: [
        {
          name: "Daredevil",
          rating: 10,
          platform: "Netflix",
          seasons: 3,
          status: 2,
          anchor: "#daredevil",
          isNew: true,
        },
      ].sort((a, b) => b.rating - a.rating),
    }
  },
})
</script>

<template>
  <div class="mb-6 grid gap-2 lg:grid-cols-2">
    <BlogRating
      v-for="item in ratings"
      :key="item.name"
      :rating="item.rating"
      :platform="item.platform"
      :seasons="item.seasons"
      :isnew="item.isNew"
      :status="item.status"
    >
      <a :href="item.anchor">{{ item.name }}</a>
    </BlogRating>
  </div>
</template>
