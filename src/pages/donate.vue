<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Sponsor } from "~/@types/runtimeConfig"

export default Vue.extend({
  data() {
    return {
      accounts: [
        {
          image: "https://i.vgy.me/QJNSYE.png",
          name: "Afriland First Bank",
          iban: "OMFNCIABXXX 009831900301",
          revealed: false,
        },
      ],
    }
  },
  head() {
    const title = "Faire un don"
    const description =
      "Vous aimez ce que je fait ? Vous pouvez faire un don pour m'encourager et m'aider à créer plus de projets de meilleure qualité à l'avenir !"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "donate",
        url: "https://detygon.com/donate",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://detygon.com/donate",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the Sponsor object in runtime config.
     * @returns {Sponsor}
     */
    getSponsorLinks(): Sponsor {
      const sponsor = this.$config.sponsor as Sponsor
      return sponsor
    },
  },
})
</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500 sm:w-9/12 dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">
          Faire un don
        </h1>

        <p>
          Si vous aimez mes projets et/ou ce que je fais et que vous voulez
          contribuer, me faire plaisir, vous pouvez me faire un don avec les
          informations de cette page ! Merci ♥
        </p>

        <p class="text-xs">
          P.S. Utilisez le nom "<span class="underline"
            >Dion Dety Gon Salomon</span
          >" comme nom de vos transactions.
        </p>
      </header>

      <section class="space-y-4">
        <Title> Soutenez-moi sur </Title>

        <Button
          variant="patreon"
          :href="getSponsorLinks.patreon"
          class="mx-4"
          blank
        >
          <template #icon>
            <SmartImage
              src="https://i.vgy.me/qxpY9T.png"
              class="rounded h-7 w-7"
            />
          </template>

          Devenir un Patron
        </Button>
      </section>

      <section class="space-y-4">
        <Title> Mes comptes </Title>

        <div class="grid px-4 gap-4">
          <div
            v-for="(account, index) in accounts"
            :key="`account-${index}`"
            class="flex h-full items-center"
          >
            <div
              class="rounded-tl rounded-bl bg-gray-200/75 dark:bg-neutral-800"
            >
              <SmartImage :src="account.image" class="h-24 w-24" />
            </div>

            <div
              class="rounded-tr rounded-br flex h-full bg-gray-200/50 w-full pl-4 items-center dark:bg-neutral-800"
            >
              <div>
                <h3
                  class="font-medium text-lg text-gray-900 dark:text-neutral-300"
                >
                  {{ account.name }}
                </h3>

                <span
                  v-if="account.revealed == true"
                  class="text-gray-800 dark:text-neutral-500"
                  >{{ account.iban }}</span
                >

                <span
                  v-else
                  class="cursor-pointer text-gray-800 dark:text-neutral-500 hover:underline"
                  @click="account.revealed = true"
                  >Cliquez pour afficher</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
