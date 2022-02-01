<script lang="ts">
import Vue, { PropType } from "vue"

export default Vue.extend({
  layout: "default",
  props: {
    error: {
      type: Object as PropType<{
        title: string
        statusCode: number
        description: string
      }>,
      default: null,
    },
  },
  data() {
    return {
      errors: {
        400: {
          title: "Mauvaise requête",
          description: "Mauvaise, mauvaise requête !",
        },
        401: {
          title: "Non autorisé",
          description:
            "Cette page nécessite une autorisation, ou peut-être que vous ne pouvez pas y accéder.",
        },
        403: {
          title: "Interdit",
          description: "Peut-être que tu ne devrais pas être ici !",
        },
        404: {
          title: "Page non trouvée",
          description: "Êtes-vous sûr d'avoir entré une bonne URL ?",
        },
        500: {
          title: "Erreur de serveur interne",
          description:
            "Heureusement ce n'est pas lié à vous. C'est de ma faute. S'il vous plaît, contactez-moi pour que je puisse régler ce problème.",
        },
      },
    }
  },
  head() {
    return {
      title: `Erreur ${this.$props.error.statusCode}`,
    }
  },
  computed: {
    /**
     * Checks through the common error object and returns the title-description if exists.
     * @returns {{title: string, description: string}} The object that contains error title and description.
     */
    getErrorMeta(): { title: string; description: string } {
      const statusCode = this.error.statusCode

      return {
        // @ts-ignore-next-line
        title: this.errors[statusCode]?.title || "Inconnu",
        // @ts-ignore-next-line
        description: this.errors[statusCode]?.description || "Aucune description.",
      }
    },
  },
  mounted() {
    console.error(this.$props.error)
  },
  methods: {
    /**
     * Refreshes the page.
     */
    refresh() {
      window.location.reload()
    },
  },
})
</script>

<template>
  <div class="space-y-4 py-8 px-4">
    <div>
      <h1 class="text-2xl text-gray-900 dark:text-gray-100">
        Quelque chose de grave est arrivé...
      </h1>

      <p class="text-lg text-gray-700 dark:text-gray-300">Peut-être que ça aiderait :</p>
    </div>

    <div
      class="rounded space-y-4 bg-gray-200 p-4 items-center md:flex md:space-y-0 md:space-x-4 dark:bg-neutral-800 dark:text-gray-200"
    >
      <div>
        <SmartImage
          :src="`https://http.cat/${error.statusCode}.jpg`"
          class="rounded md:h-50 md:w-50"
        />
      </div>

      <div class="space-y-4 whitespace-normal">
        <div class="flex flex-col">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">Titre:</h3>
          <code>{{ getErrorMeta.title }}</code>
        </div>

        <div class="flex flex-col">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">
            Description:
          </h3>
          <code>{{ getErrorMeta.description }}</code>
        </div>

        <div class="flex flex-col">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">
            Détails:
          </h3>
          <code>{{ JSON.stringify(error) }}</code>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap space-x-2">
      <button title="Cliquez pour revenir en arrière" @click="$router.back()">Retour en arrière</button>

      <button title="Cliquez pour rafraîchir la page" @click="refresh">
        Rafraîchir la page
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply rounded cursor-pointer bg-gray-200 py-2 px-4 transition-colors text-gray-900 select-none dark:bg-neutral-800 dark:text-gray-100 dark:hover:bg-neutral-700 hover:bg-gray-300 focus:outline-none;
}
</style>
