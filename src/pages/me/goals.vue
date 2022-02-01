<script lang="ts">
import Vue from "vue"
// @ts-ignore-next-line
import { getPageBlocks, NotionRenderer } from "vue-notion"

export default Vue.extend({
  components: {
    NotionRenderer,
  },
  data() {
    return {
      blockMap: null,
    }
  },
  fetchOnServer: false,
  async fetch() {
    const blocks = await getPageBlocks("Goals-a1f6bdceb42040ae87c4b5dfbf49ec6e")
    this.blockMap = blocks
  },
  head(): any {
    const title = "Objectifs"
    const description =
      "Les objectifs que je souhaite atteindre à l'avenir, tels que les habitudes, les loisirs, les connaissances, etc."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
      }),
    }
  },
  computed: {
    /**
     * Returns last edited time.
     */
    getLastEditedTime(): string {
      const lastMapName = Object.keys(this.blockMap || {})?.[0]
      const lastMap: any = this.blockMap?.[lastMapName]
      const lastEditedDate = lastMap?.value?.last_edited_time

      return this.$moment(lastEditedDate).format("DD/MM/YYYY HH:mm")
    },
  },
})
</script>

<template>
  <div class="mt-2">
    <LoadersGoals v-if="blockMap === null" />

    <div v-else class="px-4 text-gray-500 dark:text-neutral-600">
      <header class="space-y-2 my-12">
        <h1 class="text-gray-900 text-4xl dark:text-neutral-300">Objectifs</h1>
        <p>Les choses que je veux réaliser.</p>

        <small class="text-xs" title="Last edited on">
          {{ getLastEditedTime }}
        </small>
      </header>

      <div class="max-w-full prose prose-md">
        <NotionRenderer
          class="notion"
          :unofficial="true"
          :block-map="blockMap"
        />
      </div>
    </div>
  </div>
</template>
