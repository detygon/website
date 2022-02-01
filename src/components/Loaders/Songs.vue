<template>
  <main class="space-y-20">
    <div>
      <Title class="mb-4">Détails</Title>

      <div class="grid px-4 gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2">
        <div class="flex space-x-4 items-center">
          <span>Profil</span>

          <div class="flex space-x-2 w-full justify-end items-center">
            <SkeletonLoader class="h-5 w-1/2" />
            <SkeletonLoader class="h-6 w-6 !rounded-full" />
          </div>
        </div>

        <!-- Play count -->
        <div class="flex space-x-4 items-center justify-between">
          <span class="flex-shrink-0">Lecture totales</span>

          <div class="flex space-x-2 w-full justify-end items-center">
            <SkeletonLoader class="h-5 w-1/3" />
            <SkeletonLoader class="h-6 w-6 !rounded-full" />
          </div>
        </div>

        <!-- Registered -->
        <div class="flex space-x-4 items-center justify-between">
          <span class="flex-shrink-0">Ancienneté du compte</span>

          <div class="flex space-x-2 w-full justify-end items-center">
            <SkeletonLoader class="h-5 w-1/4" />
            <SkeletonLoader class="h-6 w-6 !rounded-full" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <Title class="mb-4">Top chansons (7 derniers jours)</Title>

      <div class="grid gap-2 md:grid-cols-2">
        <SkeletonLoader v-for="top in 6" :key="top" type="lastfm" />
      </div>
    </div>

    <div>
      <Title class="mb-4">Top des artistes (7 derniers jours)</Title>

      <div class="grid gap-2 md:grid-cols-2">
        <SkeletonLoader v-for="top in 4" :key="top" type="lastfm" />
      </div>
    </div>

    <div>
      <Title class="mb-4">Chansons récentes</Title>

      <div class="grid gap-2 md:grid-cols-2">
        <SkeletonLoader v-for="recent in 15" :key="recent" type="lastfm" />
      </div>
    </div>
  </main>
</template>
