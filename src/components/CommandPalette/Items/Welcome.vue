<template>
  <div class="space-y-2">
    <Title size="xs">Bienvenue sur mon site web !</Title>

    <CommandPaletteControls class="space-y-4">
      <Card :truncate="false" tight>
  Bienvenue sur la palette de commande, un outil pour vous aider ! Tu peux utiliser cette fenêtre partout sur le site ! N'oublie pas la combinaison de touches !
      </Card>

      <Card tight> Ce que vous pouvez faire avec cet outil : </Card>

      <div class="grid grid-cols-2 overflow-x-auto">
        <Card :truncate="false" tight>
          Afficher les derniers articles du blog que vous pouvez lire
        </Card>

        <Card :truncate="false" tight>
          Accès rapide à certaines pages du site
        </Card>

        <Card :truncate="false" tight>
          Voir mes activités récentes sur GitHub
        </Card>
        <Card :truncate="false" tight> Certains de mes comptes de médias sociaux </Card>
      </div>

      <Card tight> Cliquez sur l'un des articles à gauche pour commencer ! </Card>
    </CommandPaletteControls>
  </div>
</template>
