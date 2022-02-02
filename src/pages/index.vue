<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  icon?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      showModal: false,
      repos: [] as Repository[],
      projects: [
        {
          title: "Ce site web",
          to: "/",
          description:
            "Mon espace pour partager mes expériences, mes échecs et succès et bien plus encore !",
          icon: "website",
        },
      ] as Project[],
      experiences: {
        jobs: [
          {
            title: "Futurafric IA",
            url: "https://futurafric.com/",
            position: "Data Engineer",
            date: "2019-2022",
          },
          {
            title: "AKIL Technologies",
            url: "https://akiltechnologies.com",
            position: "Développeur Back-End",
            date: "2019-2019",
          },
          {
            title: "Save The Children CI",
            url: "https://cotedivoire.savethechildren.net/",
            position: "Assistant bilingue",
            date: "2018-2019",
          },
        ],
        education: [
          {
            title: "University of Central Lancashire",
            url: "https://www.uclan.ac.uk/",
            position: "Bsc Business Computing & Information systems",
            date: "2016-2020",
          },
          {
            title: "Lycée de garçon de Bingerville",
            url: "https://www.facebook.com/groups/231206027294980",
            position: "Terminale A2",
            date: "2013-2016",
          },
        ],
      } as ExperienceObject,
      cards: {
        me: [
          {
            title: "Dépôts",
            description:
              "Vous voulez voir et/ou contribuer à mon code et à mes dépôts publics ?",
            href: "/me/repos",
          },
          // {
          //   title: "Objectifs",
          //   description:
          //     "Vous voulez savoir sur quoi je travaille en ce moment et ce que je ferai à l'avenir ?",
          //   href: "/me/goals",
          // },
          {
            title: "Contact",
            description:
              "Vous avez besoin d'aide pour quoi que ce soit ? Vous voulez entrer en contact avec moi ? Envoyez-moi un message !",
            href: "/me/contact",
          },
          // {
          //   title: "Chansons",
          //   description:
          //     "Vous avez confiance en vos goûts ? Comparez vos chansons et artistes préférés avec les miens !",
          //   href: "/me/songs",
          // },
        ],
        pages: [
          {
            title: "Blog",
            description:
              "Mon espace de partage sur la programmation, la technologie et mon expérience !",
            href: "/blog",
          },
          {
            title: "Faire un don",
            description:
              "Vous voulez me soutenir et soutenir mes projets pour que je puisse créer de meilleures choses à l'avenir ?",
            href: "/donate",
          },
        ],
      },
      skills: [
        "Python",
        "DBT",
        "Snowflake",
        "PySpark",
        "Dagster",
        "Docker",
        "AWS",
        "Databriks",
      ],
    }
  },
  head: {
    title: "Accueil",
  },
})
</script>

<template>
  <div class="space-y-14 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 mx-4 py-10 justify-between md:flex-row md:items-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-2">
          <div
            class="font-semibold text-xl text-neutral-700 md:text-3xl dark:text-neutral-200"
          >
            <h1>
              <SmartLink
                href="https://www.clementine.jobs/fiches-metiers/metiers-du-big-data/data-engineer"
                class="cursor-help border-b-2 border-blue-700 text-blue-700 dark:border-neutral-500 dark:text-neutral-500"
                blank
                >Data Engineer</SmartLink
              >
            </h1>
          </div>

          <p class="text-neutral-500">
            Salut ! Je suis Salomon Dion, Data Engineer originaire de Côte
            d'Ivoire. J'aide à la prise de décision et l'amélioration des
            performances des entreprises en leur donnant une meilleure
            visibilité de leurs activités.
          </p>
        </div>

        <Status class="mt-4" />
      </div>

      <div class="rounded-full mb-4 md:mb-0">
        <SmartImage
          src="/assets/images/memoji.png"
          class="rounded-full h-30 w-30 md:h-40 md:w-40"
        />
      </div>
    </header>

    <section id="me" class="my-16">
      <Title>Moi</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="pages" class="my-16">
      <Title>Pages</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.pages"
          :key="`card-p-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="projects">
      <Title>Les projets sur lesquelles je travaille actuellement:</Title>

      <div class="mt-4 grid gap-2 md:gap-4 md:grid-cols-2">
        <Card
          v-for="(project, index) in projects"
          :key="`project-${index}`"
          :href="project.to || project.href"
          :title="project.title"
          :description="project.description"
          :blank="!!project.href"
          class="h-full"
        >
          {{ project.description }}

          <template v-if="project.icon" #icon>
            <IconDev
              :brand="project.icon"
              class="rounded-full bg-gray-100 h-14 p-2 text-neutral-500 w-14 dark:bg-neutral-800 dark:text-white"
            />
          </template>
        </Card>
      </div>
    </section>

    <section
      id="experiences"
      class="mt-4 grid gap-6 sm:mt-6 md:mt-10 md:gap-8 md:grid-cols-2"
    >
      <div>
        <Title>Expérience professionel</Title>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <Title>Education</Title>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies" class="mt-6">
      <Title>Les technologies que j'utilise</Title>

      <div class="mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-4">
        <CardSkill
          v-for="(skill, index) in skills"
          :key="`skill-${index}`"
          :title="skill"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.description-link {
  @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
