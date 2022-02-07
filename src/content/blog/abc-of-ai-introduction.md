---
title: "L'ABC de l'IA: Introduction"
header: /assets/images/posts/abc-of-ai-introduction.jpg
tags:
  - machine learning
---

Les données représentent le fondement et le carburant de l'IA. Pour mieux comprendre et utiliser les données, vous devez être prêt à apprendre des concepts parfois compliqués. Mon but dans cette série est de vous permettre d'avoir une compréhension claire et simple de ces concepts. J'aborderais aussi un sujet dont l'on ne parle pas souvent, à savoir, les défis que rencontrent certaines entreprises à rendre opérationnels leurs modèles d'IA/ML et à les intégrer à leurs propres activités. Vous développerez votre intuition, votre appréciation et un scepticisme sain à l'égard des chiffres et des termes que vous rencontrerez. Grâce à des explications claires, des exercices de réflexion et des analogies, je vous aiderai à développer un modèle mental pour la data science, les statistiques et le machine learning. C'est ce que nous allons faire dans l'exemple suivant.

## Mise en situation

<smart-image src="/assets/images/posts/abc-of-ai-construction-1.jpg"></smart-image>

Imaginez que vous vous promenez et que vous passez devant la façade d’un batiment en construction comme l'image ci-dessus avec le panneau "Bientôt ouvert" . Vous êtes un amateur de mode et vous êtes toujours à l'affût de nouveaux endroits pour l’achat de vos accessoires. Vous ne pouvez donc pas vous empêcher de vous demander : "S'agira-t-il d'une boutique de mode ou d’un restaurant?" Posons cette question de manière plus formelle : **Pensez-vous que le nouveau batiment sera une boutique de mode ou un restaurant**?

Essayez de deviner. Sérieusement, devinez avant de poursuivre.

## Problématique

Si ce scénario se produisait dans la vie réelle, vous auriez une assez bonne intuition en une fraction de seconde. Si vous êtes dans un quartier branché, entouré de bars et de restaurants, vous devinerez un restaurant. Si vous êtes près d'une zone commerciale ou d'un centre commercial, vous devinerez une boutique de mode. Mais quand on a posé la question, vous avez hésité. *Ils ne m'ont pas donné assez d'informations*, avez-vous pensé. Et vous aviez raison. Nous ne vous avons pas donné de données pour prendre une décision.

> Première leçon: Pour prendre des décisions éclairées, il faut des données.

<smart-image src="/assets/images/posts/abc-of-ai-introduction-map-1.png"></smart-image>

Regardez maintenant les données sur cette image. Le nouveau restaurant est marqué d'un X, les point jaunes indiquent des restaurants (R) et les bleus des boutiques (B). Que devineriez-vous cette fois-ci ? La plupart des gens devinent (R) parce que la plupart des batiments environnants sont également des restaurants (R). Mais remarquez qu'il y a aussi plusieurs boutiques près de l'endroit. Si nous vous demandions d'évaluer votre confiance dans votre prédiction entre 0 et 100, nous nous attendrions à ce qu'elle soit élevée, mais pas à 100. Il est tout à fait possible qu'une autre boutique s'installe dans le quartier.

> Deuxième leçon: Les prédictions ne doivent jamais être sûres à 100%.

<smart-image src="/assets/images/posts/abc-of-ai-introduction-map-2.png"></smart-image>

Ensuite, regardez les données sur cette image. Cette zone comprend plusieurs centres commerciaux et plusieurs boutiques. Si on vous demandait de prédire la nature du nouveau batiment, la majorité repondront boutique (B). Mais il est tout à fait aussi possible que quelqu'un choisisse (R), cela met en évidence plusieurs leçons importantes.

Au cours de cette expérience, chacun crée un algorithme légèrement différent dans sa tête. Bien sûr, tout le monde regarde les marqueurs entourant le point d'intérêt, X, pour comprendre le voisinage, mais à un moment donné, vous devez décider quand un batiment est trop éloigné pour influencer votre prédiction. Par exemple, quelqu'un pourrait baser sa prédiction sur le voisin le plus proche: "Le plus proche voisin de X est un (R), donc ma prédiction est (R)." La plupart des gens, cependant, regardent plusieurs batiments voisins pour faire leur prédiction.

## Passons en revue quelques concepts

Revoyons ce que vous avez appris, petit à petit :

- Vous avez effectué une classification en prédisant l'étiquette (restaurant, boutique) sur un nouveau bâtiment en entraînant un algorithme à l'aide d'un ensemble de données (emplacement du bâtiment et son étiquette restaurant/boutique)
- C'est précisément ce qu'est le machine learning ! Vous n'avez juste pas développé l'algorithme sur un ordinateur - vous avez utilisé votre tête.
- Plus précisément, il s'agit d'un type de machine learning appelé apprentissage supervisé/supervised learning. C'était "supervisé" parce que vous connaissiez les bâtiments existant autour du restaurant ou de la boutique. L'étiquette a orienté (c'est-à-dire supervisé) votre réflexion sur le lien entre l'emplacement du bâtiment et le fait qu'il s'agisse d'une boutique ou d'un restaurant.
- Plus précisément encore, vous avez exécuté un algorithme de classification par apprentissage supervisé appelé `K-nearest-neighbor`. Si K = 1, on regarde le bâtiment le plus proche et on prédit la majorité. C'est un algorithme intuitif et puissant. Et ce n'est pas de la magie.
- Vous avez appris que vous avez besoin de données pour prendre des décisions éclairées. Réalisez, cependant, que vous avez besoin de plus que cela. Après tout, cette série porte sur la pensée critique. Je veux vous montrer comment les choses fonctionnent, mais aussi comment elles échouent. Si je vous demandais de prédire, à partir des données contenues dans les images de cette introduction, si le nouveau bâtiment sera ouvert 24h/24, vous ne seriez pas en mesure de répondre. Pour prendre des décisions éclairées, toutes les données ne suffisent pas. Vous avez besoin de données précises, pertinentes et suffisantes.

Vous avez beaucoup appris dans cette introduction, et vous l'avez fait sans même vous en rendre compte. Dans le prochain épisode, nous allons développer notre perspicacité en matière de données.
