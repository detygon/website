<template>
  <!-- JavaScript -->
  <svg
    v-if="isSame('JavaScript')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#EFD81D"
  >
    <path
      d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"
    />
  </svg>

  <!-- TypeScript -->
  <svg
    v-else-if="isSame('TypeScript')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0V0z" fill="#fff" />
    <path
      d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z"
      fill="#007ACC"
    />
  </svg>

  <!-- Vue.js -->
  <svg
    v-else-if="isSame('Vue.js')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"
      fill="#35495E"
    />
    <path
      d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"
      fill="#41B883"
    />
  </svg>

  <!-- Nuxt.js -->
  <svg
    v-else-if="isSame('Nuxt.js')"
    viewBox="0 0 124 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M55.75 27.155c-3.222-5.54-11.278-5.54-14.5 0L6.134 87.535C2.912 93.075 6.94 100 13.384 100h27.413c-2.753-2.407-3.773-6.57-1.69-10.142L65.704 44.27 55.75 27.155z"
      fill="#80EEC0"
    />
    <path
      d="M78 40.4c2.667-4.533 9.333-4.533 12 0L119.06 89.8c2.667 4.533-.666 10.199-5.999 10.199H54.938c-5.333 0-8.666-5.666-6-10.199L78 40.4z"
      fill="#00DC82"
    />
  </svg>

  <!-- React.js -->

  <svg
    v-else-if="isSame('React.js')"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#61DAFB" width="25" height="25">
      <path
        d="M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z"
      />
      <path
        d="M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z"
      />
    </g>
  </svg>

  <!-- Node.js -->
  <svg
    v-else-if="isSame('Node.js')"
    xmlns="http://www.w3.org/2000/svg"
    fill="#6FA660"
    viewBox="0 0 512 512"
  >
    <path
      d="M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z"
    />
    <path
      d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z"
    />
  </svg>

  <!-- PHP -->
  <svg
    v-else-if="isSame('PHP')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#prefix__clip0)" fill="#8B5CF6">
      <path
        d="M2.778 8.054h3.098c.91.01 1.569.354 1.977 1.03.409.677.544 1.6.405 2.772a6.6 6.6 0 01-.358 1.576c-.178.515-.424.98-.74 1.393-.386.526-.798.859-1.237 1-.44.142-.894.212-1.364.212H3.17l-.44 2.879H1.126L2.778 8.054zm1.353 1.727l-.694 4.545c.046.01.093.015.139.015h.162c.74.01 1.356-.086 1.85-.288.493-.212.824-.95.994-2.212.138-1.06 0-1.671-.417-1.833-.408-.161-.92-.237-1.537-.227-.093.01-.181.015-.266.015h-.243l.012-.015M10.088 5.16h1.596l-.451 2.894h1.433c.787.02 1.372.233 1.758.636.393.404.508 1.172.346 2.303l-.774 5.044h-1.619l.74-4.817c.077-.505.054-.863-.07-1.075-.122-.212-.388-.318-.797-.318l-1.283-.016-.948 6.226H8.424l1.664-10.876zM16.484 8.054h3.098c.91.01 1.568.354 1.977 1.03.408.677.543 1.6.404 2.772a6.6 6.6 0 01-.358 1.576c-.177.515-.424.98-.74 1.393-.385.526-.798.859-1.237 1-.44.142-.894.212-1.364.212h-1.387l-.44 2.879H14.83l1.654-10.862zm1.352 1.727l-.693 4.545c.046.01.092.015.138.015h.162c.74.01 1.357-.086 1.85-.288.493-.212.825-.95.994-2.212.139-1.06 0-1.671-.416-1.833-.409-.161-.921-.237-1.538-.227-.092.01-.18.015-.266.015h-.242l.011-.015"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path
          fill="#fff"
          transform="translate(1.125 4.875)"
          d="M0 0h21.813v14.291H0z"
        />
      </clipPath>
    </defs>
  </svg>

  <!-- Sass -->
  <svg
    v-else-if="isSame('Sass')"
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
    fill="#cf649a"
  >
    <path
      d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z"
    />
  </svg>

  <!-- HTML5 -->
  <svg
    v-else-if="isSame('HTML5')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#dd4b25"
  >
    <path
      d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"
    />
  </svg>

  <!-- WordPress -->
  <svg
    v-else-if="isSame('WordPress')"
    xmlns="http://www.w3.org/2000/svg"
    class="prefix__ionicon"
    viewBox="0 0 512 512"
    fill="#3B82F6"
  >
    <path
      d="M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0049.5 6.5 157 157 0 0024.9-1.8 184.3 184.3 0 0032.5-7.1c2.6-.8 5.2-1.7 7.8-2.6-2.8-6-8.8-19.3-9.1-19.9zM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8 6.9 71.2 52.9 131 116.1 157.9 2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1z"
    />
    <path
      d="M430.2 175.4a188 188 0 00-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 00325.1 77a189.2 189.2 0 00-69.2-13 191.51 191.51 0 00-149.4 71.7A196 196 0 0089 161.3c14.2.1 31.8.1 33.8.1 18.1 0 46-2.2 46-2.2 9.4-.6 10.4 13.1 1.1 14.2 0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8 1-14.2 0 0 28.5 2.2 45.5 2.2 18.1 0 46-2.2 46-2.2 9.3-.6 10.5 13.1 1.1 14.2 0 0-9.3 1.1-19.7 1.6l62.3 185.6 17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7 0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4 0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8 0 17.4-3.3 37.1-13.1 61.8l-39 112.8-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5 56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 001.9-26 191.11 191.11 0 00-17.8-80.8z"
    />
    <path
      d="M256 48a208.06 208.06 0 0181 399.66A208.06 208.06 0 01175 64.34 206.7 206.7 0 01256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32z"
    />
  </svg>

  <!-- Tailwind CSS -->
  <svg
    v-else-if="isSame('Tailwind CSS')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z"
      fill="url(#prefix__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1=".667"
        y1="-6.689"
        x2="23.333"
        y2="31.089"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2383AE" />
        <stop offset="1" stop-color="#6DD7B9" />
      </linearGradient>
    </defs>
  </svg>

  <!-- Windi CSS -->
  <svg
    v-else-if="isSame('Windi CSS')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#prefix__prefix__clip0)">
      <path
        d="M12.694 4.687A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966zm0 0A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966z"
        fill="url(#prefix__prefix__paint0_linear)"
      />
      <path
        d="M17.722 19.313a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966zm0 0a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966z"
        fill="url(#prefix__prefix__paint1_linear)"
      />
      <path
        d="M18.316 4.217c-2.5 0-4.263 1.901-4.263 4.401h2.008c0-1.243.902-2.145 2.255-2.145 1.354 0 2.03.902 2.03 2.145 0 1.243-.878 2.266-3.27 2.266H1.849v2.267h15.565c3.542 0 5.188-2.277 5.188-4.533 0-2.5-1.691-4.4-4.286-4.4z"
        fill="url(#prefix__prefix__paint2_linear)"
      />
      <path
        d="M4.82 15.347H1.849v2.286h2.97v-2.286z"
        fill="url(#prefix__prefix__paint3_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__prefix__paint0_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__paint1_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__paint2_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__paint3_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <clipPath id="prefix__prefix__clip0">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>

  <!-- Figma -->
  <svg
    v-else-if="isSame('Figma')"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.25 19c1.794 0 3.25-1.344 3.25-3v-3H7.25c-1.793 0-3.249 1.344-3.249 3s1.456 3 3.25 3z"
      fill="#0ACF83"
    />
    <path
      d="M4.001 10c0-1.656 1.456-3 3.25-3H10.5v6H7.25c-1.793 0-3.249-1.344-3.249-3z"
      fill="#A259FF"
    />
    <path
      d="M4.002 4c0-1.656 1.455-3 3.249-3h3.25v6H7.25C5.457 7 4 5.656 4 4z"
      fill="#F24E1E"
    />
    <path
      d="M10.5 1h3.25c1.793 0 3.249 1.344 3.249 3s-1.456 3-3.25 3H10.5V1z"
      fill="#FF7262"
    />
    <path
      d="M16.999 10c0 1.656-1.456 3-3.25 3-1.793 0-3.249-1.344-3.249-3s1.456-3 3.25-3c1.793 0 3.249 1.344 3.249 3z"
      fill="#1ABCFE"
    />
  </svg>

  <!-- Firebase -->
  <svg
    v-else-if="isSame('Firebase')"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x="3"
      y="1"
      width="14"
      height="19"
    >
      <path
        d="M15.299 5.14a.412.412 0 00-.697-.225l-2.121 2.134-1.68-3.176a.4.4 0 00-.718 0L9.172 5.61 6.866 1.341c-.185-.347-.707-.255-.769.133L3.884 15.625l5.933 3.319a1.25 1.25 0 001.199 0L17 15.625 15.299 5.14z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        d="M15.299 5.14a.412.412 0 00-.697-.225l-2.121 2.134-1.68-3.176a.4.4 0 00-.718 0L9.172 5.61 6.866 1.341c-.185-.347-.707-.255-.769.133L3.884 15.625l5.933 3.319a1.25 1.25 0 001.199 0L17 15.625 15.299 5.14z"
        fill="url(#prefix__prefix__prefix__paint0_linear)"
      />
      <path
        d="M3.884 15.625L6.108 1.474c.061-.388.584-.48.768-.133L9.171 5.61l.912-1.736a.41.41 0 01.728 0L17 15.625H3.884z"
        fill="#FFA000"
      />
      <path
        fill="url(#prefix__prefix__prefix__pattern0)"
        d="M3.064 4.7h8.915v11.333H3.064z"
      />
      <path
        d="M11.549 10.112L9.16 5.609 3.884 15.625l7.665-5.513z"
        fill="#F57C00"
      />
      <path
        fill="url(#prefix__prefix__prefix__pattern1)"
        d="M3.474 3.884H17.82v15.724H3.474z"
      />
      <path
        d="M17 15.626L15.299 5.14a.412.412 0 00-.697-.225L3.884 15.625l5.933 3.319a1.25 1.25 0 001.199 0L17 15.626z"
        fill="#FFCA28"
      />
      <path
        d="M15.299 5.14a.411.411 0 00-.697-.225l-2.121 2.134-1.68-3.176a.4.4 0 00-.718 0L9.172 5.61 6.866 1.341c-.185-.347-.707-.255-.769.133L3.884 15.625h-.01l.01.01.062.031 8.525-8.515 2.131-2.124a.413.413 0 01.697.225l1.68 10.384.021-.01-1.701-10.487zM3.904 15.604L6.108 1.576c.061-.388.584-.48.768-.133l2.295 4.268.912-1.736a.41.41 0 01.728 0l1.64 3.104-8.546 8.526z"
        fill="#fff"
        fill-opacity=".2"
      />
      <path
        opacity=".2"
        d="M11.016 18.842a1.25 1.25 0 01-1.2 0l-5.922-3.309-.01.092 5.933 3.319a1.25 1.25 0 001.199 0L17 15.625l-.01-.092-5.974 3.309z"
        fill="#A52714"
      />
      <path
        d="M15.299 5.14a.412.412 0 00-.697-.225l-2.121 2.134-1.68-3.176a.4.4 0 00-.718 0L9.172 5.61 6.866 1.341c-.185-.347-.707-.255-.769.133L3.884 15.625l5.933 3.319a1.25 1.25 0 001.199 0L17 15.625 15.299 5.14z"
        fill="url(#prefix__prefix__prefix__paint1_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__prefix__prefix__paint0_linear"
        x1="3.427"
        y1="4.185"
        x2="19.748"
        y2="12.847"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff" stop-opacity=".1" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__prefix__paint1_linear"
        x1="3.427"
        y1="4.185"
        x2="19.748"
        y2="12.847"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff" stop-opacity=".1" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <pattern
        id="prefix__prefix__prefix__pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#prefix__prefix__prefix__image0"
          transform="scale(.0115 .00893)"
        />
      </pattern>
      <pattern
        id="prefix__prefix__prefix__pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#prefix__prefix__prefix__image1"
          transform="scale(.00714 .00645)"
        />
      </pattern>
      <image
        id="prefix__prefix__prefix__image0"
        width="87"
        height="112"
        xlink:href="data:image/png;base64,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"
      />
      <image
        id="prefix__prefix__prefix__image1"
        width="140"
        height="155"
        xlink:href="data:image/png;base64,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"
      />
    </defs>
  </svg>

  <!-- Linux -->
  <svg
    v-else-if="isSame('Linux')"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057a2.924 2.924 0 01-1.155.835c-1.652.72-.441 1.925-.898 2.78a1.57 1.57 0 00-.192.74c0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zM11.434 8.584c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922a1.686 1.686 0 00-.523-.127c.062-.923.658-1.737 1.451-1.61zM9.696 3.7c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zM7.581 22.943c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z"
    />
  </svg>

  <!-- PreMiD -->
  <svg
    v-else-if="isSame('PreMiD')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M459.17 105H52.83a30.35 30.35 0 00-30.34 30.34v241.32A30.35 30.35 0 0052.83 407h406.34a30.35 30.35 0 0030.34-30.34V135.34A30.35 30.35 0 00459.17 105zm-185 94.4a13.93 13.93 0 019.9-4.11h90.29a14 14 0 010 28H284a14 14 0 01-9.9-23.91zm-63.64 63.11L92.14 330.83a7.51 7.51 0 01-11.27-6.51V187.68a7.51 7.51 0 0111.27-6.51l118.34 68.32a7.52 7.52 0 010 13.02zm231.28 50.09a13.93 13.93 0 01-9.9 4.11H284a14 14 0 010-28h147.91a14 14 0 019.9 23.91zm0-46.7a13.93 13.93 0 01-9.9 4.11H284a14 14 0 010-28h147.91a14 14 0 019.9 23.91z"
    />
  </svg>

  <!-- Play Store -->
  <svg
    v-else-if="isSame('PlayStore')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#prefix__prefix__clip0)">
      <path
        d="M16.751 15.057c2.536-1.301 4.458-2.293 4.624-2.37.53-.263 1.078-.96 0-1.502-.348-.17-2.22-1.13-4.624-2.369l-3.331 3.143 3.331 3.098z"
        fill="#FFD900"
      />
      <path
        d="M13.42 11.96L2.812 21.947c.249.03.53-.03.862-.201.695-.356 8.071-4.12 13.077-6.69L13.42 11.96z"
        fill="#F43249"
      />
      <path
        d="M13.42 11.96l3.33-3.13S4.42 2.544 3.674 2.173a1.37 1.37 0 00-.878-.156L13.42 11.96z"
        fill="#00EE76"
      />
      <path
        d="M13.42 11.96L2.796 2.016C2.364 2.11 2 2.467 2 3.194v17.577c0 .666.282 1.146.812 1.192L13.42 11.96z"
        fill="#00D3FF"
      />
    </g>
    <defs>
      <clipPath id="prefix__prefix__clip0">
        <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>

  <!-- App Store -->
  <svg
    v-else-if="isSame('AppStore')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.818 1h12.364A4.818 4.818 0 0123 5.818v12.364A4.818 4.818 0 0118.182 23H5.818A4.818 4.818 0 011 18.182V5.818A4.818 4.818 0 015.818 1z"
      fill="url(#prefix__paint0_linear)"
    />
    <path
      d="M8.05 16.968h.003L7.3 18.273a.994.994 0 11-1.722-.995l.554-.96.054-.092c.094-.136.329-.372.798-.327 0 0 1.103.12 1.183.693 0 0 .01.188-.116.377zm10.67-3.327h-2.346c-.16-.011-.23-.068-.257-.101l-.002-.003-2.511-4.35-.003.003-.15-.216c-.248-.378-.64.588-.64.588-.467 1.075.067 2.298.253 2.668l3.488 6.04a.994.994 0 101.722-.994l-.872-1.51c-.017-.037-.047-.136.132-.137h1.185a.994.994 0 000-1.989zm-4.557 1.351s.125.637-.359.637H5.133a.994.994 0 010-1.989h2.23c.36-.02.444-.228.444-.228h.002l2.91-5.04a.222.222 0 000-.203l-.96-1.665a.994.994 0 111.722-.994l.445.772.445-.77a.994.994 0 011.723.994l-4.05 7.013c-.017.043-.023.11.109.121h2.42v.024s1.4.022 1.59 1.328z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1="12"
        y1="1"
        x2="12"
        y2="23"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#17C9FB" />
        <stop offset="1" stop-color="#1A74E8" />
      </linearGradient>
    </defs>
  </svg>

  <!-- Website -->
  <svg
    v-else-if="isSame('website')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.018 4.856c.482 0 .992.018 1.53.052.541.035 1.104.102 1.69.202v1.192a10.146 10.146 0 00-1.61-.3c-.27-.028-.539-.049-.808-.061-.269-.013-.536-.02-.802-.024-.129 0-.271.003-.427.01a12.56 12.56 0 00-1.62.131v1.708h4.102v1.155H5.971v1.887c.304.044.62.076.948.098.329.022.695.033 1.099.033.544 0 1.085-.026 1.624-.08a9.031 9.031 0 001.595-.305v1.193c-.585.1-1.146.167-1.685.201A23.84 23.84 0 018.036 12c-.481 0-.993-.017-1.534-.052a16.464 16.464 0 01-1.695-.201V5.11c.592-.1 1.156-.167 1.695-.202a23.826 23.826 0 011.516-.052zm7.734-.009c.473 0 .919.042 1.338.127.42.084.786.202 1.099.352.316.15.566.33.75.54.185.21.277.44.277.69v.76h-1.22v-.404a.589.589 0 00-.155-.385 1.337 1.337 0 00-.446-.323 2.79 2.79 0 00-.704-.221 4.71 4.71 0 00-.938-.085c-.338 0-.645.027-.92.08a3.114 3.114 0 00-.71.216 1.3 1.3 0 00-.454.324.59.59 0 00-.16.394v3.042c0 .137.053.269.16.394.106.122.258.23.455.324.197.09.433.162.709.216.275.053.582.08.92.08.35 0 .663-.027.938-.08.279-.057.513-.132.704-.226.194-.094.343-.202.446-.324a.589.589 0 00.155-.384v-.676c-.291 0-.552.008-.784.023-.228.016-.424.032-.587.047-.19.022-.36.046-.506.07l.122-1.135c.478-.038.929-.057 1.351-.057.567 0 1.108.029 1.624.085v2c0 .25-.092.48-.277.69a2.334 2.334 0 01-.75.534 4.67 4.67 0 01-1.099.352c-.42.082-.865.122-1.338.122-.472 0-.918-.04-1.337-.122a4.76 4.76 0 01-1.103-.352 2.345 2.345 0 01-.746-.535 1.022 1.022 0 01-.277-.69V6.556c0-.25.092-.48.277-.69.184-.21.433-.39.746-.54.316-.15.684-.268 1.103-.352.42-.085.865-.127 1.338-.127zm-7.847 8c.426 0 .837.027 1.234.08.4.05.76.138 1.075.263.32.122.58.288.784.497.207.21.327.471.361.784l-1.22.338a.599.599 0 00-.192-.46 1.278 1.278 0 00-.503-.286 3.18 3.18 0 00-.713-.15 7.862 7.862 0 00-.826-.043c-.278 0-.552.013-.821.038-.27.025-.512.072-.728.14a1.364 1.364 0 00-.516.287.618.618 0 00-.197.474v1.117h5.716v2.431c0 .21-.046.398-.14.564-.091.162-.218.305-.38.427-.16.119-.351.22-.573.305a4.56 4.56 0 01-.714.197c-.253.05-.52.086-.802.108a10.892 10.892 0 01-1.695 0 6.732 6.732 0 01-.793-.108 4.474 4.474 0 01-.7-.197A2.536 2.536 0 015 19.348a1.544 1.544 0 01-.395-.427c-.1-.163-.16-.351-.183-.564l1.22-.338c0 .194.066.352.198.474.131.122.303.218.516.287.216.069.459.115.728.14a8.876 8.876 0 001.647 0 3.38 3.38 0 00.713-.145c.21-.072.378-.169.503-.291a.613.613 0 00.192-.465v-1.145H4.422v-2.403c0-.21.046-.394.137-.554.093-.162.22-.303.38-.422a2.24 2.24 0 01.577-.305c.222-.085.462-.152.718-.202.26-.05.53-.086.812-.108.285-.022.571-.033.859-.033zm6.486.075c-.015.141-.03.291-.042.45-.01.16-.014.32-.014.48 0 .269.034.506.103.713.072.203.17.386.291.55.122.159.263.303.423.43.163.126.335.243.516.353a5.56 5.56 0 00.516-.352c.163-.128.305-.272.427-.432.126-.163.224-.346.296-.55.075-.206.113-.443.113-.713 0-.16-.006-.319-.019-.478a8.325 8.325 0 00-.047-.45c.257.009.5.026.732.05a13.671 13.671 0 011.202.165v1.192a8.382 8.382 0 00-.4-.103 7.647 7.647 0 00-.407-.085 2.807 2.807 0 01-.118.817 2.44 2.44 0 01-.76 1.136 4.61 4.61 0 01-.55.394l-.422.244v2.225c.41-.012.778-.04 1.103-.08.326-.04.604-.083.836-.127a9.2 9.2 0 00.718-.168v1.192c-.585.1-1.147.167-1.685.202a23.77 23.77 0 01-1.516.051c-.482 0-.994-.017-1.535-.051a16.464 16.464 0 01-1.694-.202v-1.192c.21.059.449.115.718.169.231.043.51.086.835.126.326.04.693.067 1.103.08v-2.225l-.413-.244a4.425 4.425 0 01-.554-.394 2.41 2.41 0 01-.756-1.136 2.807 2.807 0 01-.117-.817 2.657 2.657 0 00-.183.033 17.743 17.743 0 00-.46.108l-.173.047v-1.192a13.94 13.94 0 011.197-.164c.234-.025.48-.042.736-.052z"
      fill="currentColor"
    />
  </svg>

  <!-- Unblock Please -->
  <svg
    v-else-if="isSame('UnblockPlease')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.005 11.63V8.925A4.93 4.93 0 0012.081 4a4.93 4.93 0 00-4.925 4.925v.208h1.942v-.208a2.985 2.985 0 012.983-2.983 2.985 2.985 0 012.982 2.983v2.705H6V20h12.161v-8.37h-1.156zm-3.664 6.45H10.82l.678-2.035a1.316 1.316 0 01-.735-1.177 1.318 1.318 0 112.636 0c0 .517-.3.96-.735 1.177l.678 2.034z"
      fill="currentColor"
    />
  </svg>

  <!-- is-inside.me -->
  <svg
    v-else-if="isSame('isinsideme')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.997 13.077c0 .465.08.956.238 1.473.165.512.367.935.609 1.27H4.11c-.211-.3-.4-.708-.564-1.226a5.218 5.218 0 01-.238-1.517c0-.488.08-.994.238-1.517.165-.523.353-.935.564-1.235h.733c-.236.33-.436.753-.6 1.27-.165.5-.247.994-.247 1.482zm2.712-5.324c.833 0 1.534.137 2.105.41.576.269.984.668 1.223 1.199h-.599c-.2-.308-.522-.55-.966-.728-.44-.176-1.024-.265-1.754-.265-.405 0-.782.034-1.13.103a3.043 3.043 0 00-.915.325c-.263.142-.474.33-.633.565h-.6A2.58 2.58 0 014.742 8.13c.57-.251 1.227-.377 1.968-.377zm1.322 2.837c.259 0 .48.094.662.282a.887.887 0 01.282.662.897.897 0 01-.282.67.901.901 0 01-.662.273.941.941 0 01-.68-.273.912.912 0 01-.273-.67c0-.265.092-.489.274-.67a.922.922 0 01.68-.274zm0 1.579c.17 0 .315-.062.432-.186a.632.632 0 00.186-.45.574.574 0 00-.186-.432.574.574 0 00-.432-.185.612.612 0 00-.45.185.574.574 0 00-.185.432.632.632 0 00.635.636zm3.008 4.799c-.553 0-1.05-.06-1.489-.18-.445-.12-.821-.3-1.13-.539a2.292 2.292 0 01-.71-.89h.6c.136.206.325.383.564.53.24.15.54.263.898.343.354.08.773.12 1.258.12.405 0 .782-.034 1.13-.103.348-.068.653-.177.915-.325.268-.148.48-.336.633-.565h.6a2.58 2.58 0 01-1.301 1.232c-.57.251-1.227.377-1.968.377zm1.6-1.882c-.297 0-.576-.043-.839-.129a2.723 2.723 0 01-.693-.35l.283-.565c.114.085.24.16.376.222.143.063.285.111.428.146.142.034.28.051.41.051.24 0 .437-.04.59-.12a.748.748 0 00.352-.35c.074-.155.11-.343.11-.565 0-.2-.036-.391-.11-.574a1.507 1.507 0 00-.308-.496 2.146 2.146 0 00-.505-.41 2.993 2.993 0 00-.668-.3V8.497h.753v2.755c.297.137.548.294.753.471.206.171.371.354.497.548a2.143 2.143 0 01.36 1.18c-.001.337-.07.628-.206.873a1.31 1.31 0 01-.6.565c-.262.131-.59.197-.983.197zm3.67-7.333c.833 0 1.535.137 2.105.41.576.269.984.668 1.224 1.199h-.6c-.199-.308-.521-.55-.966-.728-.44-.176-1.024-.265-1.754-.265-.405 0-.781.034-1.13.103a3.043 3.043 0 00-.915.325c-.262.142-.473.33-.633.565h-.599a2.58 2.58 0 011.3-1.232c.571-.251 1.227-.377 1.969-.377zm1.322 2.837c.26 0 .48.094.662.282a.888.888 0 01.282.662.898.898 0 01-.282.67.901.901 0 01-.662.273.941.941 0 01-.679-.273.912.912 0 01-.273-.67c0-.265.091-.489.273-.67a.922.922 0 01.68-.274zm0 1.579c.171 0 .315-.062.433-.186a.632.632 0 00.185-.45.574.574 0 00-.185-.432.574.574 0 00-.433-.185.612.612 0 00-.45.185.574.574 0 00-.185.432.632.632 0 00.636.636zm2.336.908c0-.464-.082-.953-.247-1.464-.158-.518-.361-.947-.608-1.288h.732c.217.3.406.712.564 1.235.16.517.238 1.023.238 1.517 0 .488-.079.994-.238 1.517-.158.518-.347.926-.564 1.226h-.732c.24-.335.444-.758.608-1.27.165-.5.247-.99.247-1.473z"
      fill="currentColor"
    />
  </svg>

  <!-- Python -->
  <svg
    v-else-if="isSame('Python')"
    width="2500"
    height="2490"
    viewBox="0 0 256 255"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
  >
    <defs>
      <linearGradient
        x1="12.959%"
        y1="12.039%"
        x2="79.639%"
        y2="78.201%"
        id="a"
      >
        <stop stop-color="#387EB8" offset="0%" />
        <stop stop-color="#366994" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="19.128%"
        y1="20.579%"
        x2="90.742%"
        y2="88.429%"
        id="b"
      >
        <stop stop-color="#FFE052" offset="0%" />
        <stop stop-color="#FFC331" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
      fill="url(#a)"
    />
    <path
      d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
      fill="url(#b)"
    />
  </svg>

  <!-- Docker -->
  <svg
    v-else-if="isSame('Docker')"
    width="2500"
    height="2100"
    viewBox="0 0 256 215"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732"
        fill="#364548"
      />
      <path
        d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196"
        fill="#22A0C8"
      />
      <path
        d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436"
        fill="#37B1D9"
      />
      <path
        d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645"
        fill="#1B81A5"
      />
      <path
        d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367"
        fill="#1D91B4"
      />
      <path
        d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z"
        fill="#23A3C2"
      />
      <path
        d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z"
        fill="#34BBDE"
      />
      <path
        d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z"
        fill="#23A3C2"
      />
      <path
        d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z"
        fill="#34BBDE"
      />
      <path
        d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z"
        fill="#23A3C2"
      />
      <path
        d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z"
        fill="#34BBDE"
      />
      <path
        d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z"
        fill="#23A3C2"
      />
      <path
        d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935"
        fill="#D3ECEC"
      />
      <path
        d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163"
        fill="#364548"
      />
      <path
        d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118"
        fill="#BDD9D7"
      />
      <path
        d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05"
        fill="#D3ECEC"
      />
    </g>
  </svg>

  <!-- Apache Spark -->
  <svg
    v-else-if="isSame('PySpark')"
    inkscape:version="1.0.2 (e86c870879, 2021-01-15, custom)"
    sodipodi:docname="Apache_Spark_logo.svg"
    version="1.1"
    viewBox="0 0 414 215"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  >
    <title>Apache Spark logo</title>
    <metadata>
      <rdf:RDF>
        <cc:Work rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          <dc:title />
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <sodipodi:namedview
      bordercolor="#666666"
      borderopacity="1"
      gridtolerance="10"
      guidetolerance="10"
      inkscape:current-layer="g12650"
      inkscape:cx="89.093483"
      inkscape:cy="177.49819"
      inkscape:pageopacity="0"
      inkscape:pageshadow="2"
      inkscape:window-height="1014"
      inkscape:window-maximized="1"
      inkscape:window-width="1920"
      inkscape:window-x="0"
      inkscape:window-y="36"
      inkscape:zoom="1.086315"
      objecttolerance="10"
      pagecolor="#ffffff"
      showgrid="false"
    />
    <g
      transform="matrix(1.33 0 0 1.33 0 4.05e-6)"
      inkscape:groupmode="layer"
      inkscape:label="spark"
    >
      <path
        d="m284 81.5c-.269-.575-.39-.864-.535-1.14-3.89-7.4-7.77-14.8-11.7-22.2-.394-.742-.344-1.18.195-1.82 6.19-7.23 12.3-14.5 18.5-21.7.219-.254.414-.523.496-.976-1.8.469-3.6.933-5.41 1.41-7.47 1.98-15 3.95-22.4 5.96-.695.187-1.01-.016-1.36-.594-4.24-7.09-8.51-14.2-12.8-21.2-.219-.367-.458-.723-.926-1.03-.344 1.89-.692 3.77-1.03 5.66-1.19 6.67-2.38 13.3-3.56 20-.129.719-.305 1.44-.367 2.16-.059.688-.414.942-1.04 1.14-8.81 2.77-17.6 5.56-26.4 8.35-.386.121-.765.281-1.18.656 7.2 2.86 14.4 5.72 21.7 8.63-.266.211-.442.375-.637.5-4.5 2.91-9.01 5.82-13.5 8.74-.539.352-.965.402-1.57.129-5.38-2.42-10.8-4.8-16.2-7.2-2.42-1.08-4.59-2.51-6.28-4.59-3.83-4.68-3.07-10 2.03-13.3 1.67-1.07 3.57-1.86 5.46-2.48 8.63-2.81 17.3-5.52 25.9-8.24.726-.231 1.06-.555 1.2-1.34 1.16-6.68 2.35-13.4 3.56-20 .644-3.57.984-7.22 2.72-10.5.665-1.26 1.46-2.49 2.42-3.54 3.44-3.82 8.23-3.96 11.9-.328 1.23 1.23 2.28 2.67 3.19 4.16 4 6.53 7.94 13.1 11.9 19.7.465.777.883.933 1.74.707 9.65-2.59 19.3-5.14 29-7.69 2-.527 4.01-.718 6.06-.335 4.45.832 6.4 4.22 4.89 8.53-.683 1.96-1.87 3.61-3.2 5.18-6.74 7.93-13.5 15.9-20.2 23.8-.551.648-.562 1.11-.18 1.84 4.04 7.61 8.04 15.2 12.1 22.9.961 1.82 1.7 3.72 1.72 5.81.047 4.76-3.44 8.66-8.17 9.36-2.65.387-5.11-.179-7.6-.945-6.05-1.87-12.1-3.71-18.2-5.54-.563-.168-.778-.391-.879-.996-.696-4.27-1.46-8.53-2.2-12.8-.019-.117.016-.242.036-.504 6.91 1.91 13.8 3.79 20.9 5.76"
        style="fill-rule: evenodd; fill: #e25a1c"
      />
      <path
        d="m272 144c-5.46-.008-10.9-.035-16.4-.011-.723 0-1.13-.207-1.53-.821-6.46-9.84-13-19.7-19.4-29.5-.207-.312-.426-.613-.793-1.14-1.39 10.6-2.76 21-4.13 31.4h-14.3c.168-1.39.317-2.74.493-4.08 1.39-10.7 2.8-21.3 4.2-32 1.34-10.2 2.67-20.4 4.03-30.6.039-.301.242-.688.488-.848 4.92-3.21 9.86-6.39 14.8-9.57.071-.047.172-.051.426-.125-1.49 11.4-2.97 22.7-4.46 34 .059.039.117.082.176.121 7.75-8.58 15.5-17.2 23.4-25.9.227 1.32.426 2.45.621 3.58.555 3.23 1.09 6.48 1.68 9.71.121.652-.055 1.05-.488 1.51-5.01 5.24-10 10.5-15 15.8-.219.231-.426.469-.676.743.16.253.297.5.457.726 8.61 12.1 17.2 24.2 25.8 36.3.156.219.382.391.574.586v.191"
        style="fill-rule: evenodd; fill: #3c3a3e"
      />
      <path
        d="m103 112c-.219-1.11-.375-2.75-.871-4.28-2.4-7.39-9.97-11.4-17.8-9.61-8.61 2-14.8 8.77-15.6 17.6-.66 6.5 2.84 12.8 9.34 15.1 5.24 1.89 10.3 1.1 15-1.71 6.21-3.72 9.57-9.25 10-17.1zm-37.8 27.5c-.422 3.18-.828 6.17-1.22 9.17-.523 3.98-1.05 7.97-1.55 12-.058.465-.199.672-.699.668-3.93-.015-7.86-.011-11.8-.019-.09 0-.18-.047-.391-.109.238-1.88.469-3.77.715-5.65.867-6.6 1.73-13.2 2.61-19.8 1.01-7.56 1.8-15.1 3.09-22.6 2.28-13.3 13.6-24.7 26.8-27.6 7.67-1.66 15-.891 21.7 3.43 6.68 4.3 10.5 10.6 11.4 18.4 1.24 11.1-2.85 20.3-10.7 28-5.18 5.01-11.4 8.19-18.5 9.27-7.37 1.11-14.3-.117-20.5-4.46-.227-.16-.473-.3-.863-.546"
        style="fill-rule: evenodd; fill: #3c3a3e"
      />
      <path
        d="m58.6 76.5c-4.4 3.28-8.65 6.44-12.9 9.61-.687-1.08-1.3-2.16-2.02-3.17-1.85-2.59-4.15-4.52-7.49-4.75-2.78-.196-5.16.718-7.05 2.77-1.69 1.83-1.91 4.44-.332 6.51 1.74 2.28 3.64 4.44 5.59 6.55 3.23 3.5 6.6 6.86 9.8 10.4 2.91 3.2 5.24 6.78 5.96 11.2.856 5.2-.183 10.1-2.64 14.7-4.55 8.45-11.7 13.4-21.2 14.9-4.18.675-8.34.543-12.4-.657-5.41-1.59-9.18-5.14-11.6-10.1-.855-1.77-1.51-3.64-2.28-5.54 4.73-2.53 9.34-5 14-7.49.16.387.277.711.426 1.02.797 1.59 1.45 3.28 2.43 4.75 2.93 4.35 7.65 5.67 12.4 3.52 1.23-.555 2.42-1.33 3.43-2.23 3.08-2.74 3.66-6.56 1.38-10-1.31-1.98-2.95-3.76-4.55-5.53-3.82-4.24-7.8-8.35-11.5-12.7-2.57-2.98-4.32-6.44-4.88-10.4-.605-4.36.266-8.46 2.53-12.1 5.63-9.11 13.8-13.8 24.6-13.5 6.17.223 11.1 3.11 14.9 7.91 1.13 1.42 2.19 2.89 3.34 4.43"
        style="fill-rule: evenodd; fill: #3c3a3e"
      />
      <path
        d="m163 125c-.719 5.49-1.4 10.7-2.1 15.9-.039.266-.246.625-.469.727-10.7 4.94-24.7 4.25-33.4-5.69-4.7-5.34-6.67-11.7-6.38-18.7.683-16.3 14.2-30.6 30.4-32.6 9.45-1.16 17.7 1.39 24.1 8.74 4.36 5 6.38 11 6.08 17.6-.195 4.36-.879 8.69-1.42 13-.77 6.14-1.61 12.3-2.42 18.4-.031.214-.074.433-.125.711h-12.7c.168-1.41.324-2.79.504-4.17.922-7.09 1.94-14.2 2.75-21.3.504-4.42.187-8.81-1.84-12.9-2.15-4.35-5.75-6.66-10.5-7.16-9.82-1.04-19.2 5.78-21.2 15.4-1.38 6.38.797 12.5 5.88 15.9 4.95 3.29 10.2 3.3 15.6 1.17 2.74-1.08 5.06-2.8 7.28-5.11"
        style="fill-rule: evenodd; fill: #3c3a3e"
      />
      <path
        d="m217 86.3c-.582 4.42-1.16 8.77-1.74 13.2-2.7 0-5.34-.015-7.98.004-2.14.016-4.09 1.4-4.74 3.4-.25.781-.343 1.62-.453 2.44-1.34 10.2-2.67 20.3-4 30.4-.336 2.56-.66 5.12-.996 7.72h-13.3c.246-1.95.48-3.84.726-5.73.863-6.58 1.73-13.2 2.6-19.7.754-5.69 1.43-11.4 2.32-17.1 1.19-7.6 8.75-14.4 16.4-14.7 3.66-.16 7.33-.027 11.1-.027"
        style="fill-rule: evenodd; fill: #3c3a3e"
      />
      <path
        d="m288 144v-5.6h-.031l-2.2 5.6h-.699l-2.2-5.6h-.035v5.6h-1.1v-6.71h1.71l2 5.1 1.97-5.1h1.7v6.71zm-9.74-5.81v5.81h-1.1v-5.81h-2.1v-.899h5.31v.899h-2.1"
        style="fill: #3c3a3e"
      />
      <path
        d="m76.3 67.1h3.29l-.778-4.98zm3.81 3.22h-5.47l-1.74 3.41h-3.88l8.55-16h3.74l2.91 16h-3.59l-.516-3.41"
        style="fill: #3c3a3e"
      />
      <path
        d="m99.7 61h-1.95l-.656 3.69h1.95c1.18 0 2.11-.773 2.11-2.23 0-.965-.586-1.46-1.46-1.46zm-4.72-3.22h5.12c2.68 0 4.55 1.6 4.55 4.34 0 3.46-2.44 5.78-5.92 5.78h-2.21l-1.04 5.85h-3.34l2.82-16"
        style="fill: #3c3a3e"
      />
      <path
        d="m116 67.1h3.29l-.777-4.98zm3.8 3.22h-5.47l-1.74 3.41h-3.88l8.55-16h3.74l2.91 16h-3.59l-.516-3.41"
        style="fill: #3c3a3e"
      />
      <path
        d="m141 73.2c-1.13.516-2.37.824-3.62.824-4.23 0-6.88-3.17-6.88-7.14 0-5.08 4.27-9.35 9.35-9.35 1.27 0 2.42.305 3.36.82l-.469 3.83c-.703-.777-1.84-1.32-3.24-1.32-2.91 0-5.5 2.63-5.5 5.68 0 2.32 1.46 4.14 3.76 4.14 1.41 0 2.77-.543 3.69-1.29l-.445 3.8"
        style="fill: #3c3a3e"
      />
      <path
        d="m162 67.3h-6.95l-1.13 6.43h-3.33l2.82-16h3.34l-1.12 6.32h6.95l1.13-6.32h3.34l-2.82 16h-3.34l1.12-6.43"
        style="fill: #3c3a3e"
      />
      <path
        d="m174 73.7 2.82-16h8.86l-.563 3.22h-5.52l-.563 3.1h5.07l-.563 3.22h-5.07l-.563 3.22h5.52l-.563 3.22h-8.86"
        style="fill: #3c3a3e"
      />
    </g>
  </svg>

  <!-- Snowflake -->
  <svg
    v-else-if="isSame('Snowflake')"
    width="184px"
    height="44px"
    viewBox="0 0 184 44"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Group"
        transform="translate(-0.002027, 0.531250)"
        fill="#29B5E8"
        fill-rule="nonzero"
      >
        <path
          d="M37.2637465,33.128906 L28.0879655,27.828125 C26.7989025,27.085938 25.1504655,27.527344 24.4043715,28.816406 C24.1153085,29.324219 24.0020275,29.882812 24.0567155,30.425781 L24.0567155,40.785156 C24.0567155,42.265625 25.2598395,43.46875 26.7442155,43.46875 C28.2246835,43.46875 29.4278085,42.265625 29.4278085,40.785156 L29.4278085,34.828125 L34.5684335,37.796875 C35.8574965,38.542969 37.5098395,38.097656 38.2520275,36.808594 C38.9981215,35.519531 38.5567155,33.871094 37.2637465,33.128906"
          id="Path"
        ></path>
        <path
          d="M14.4434335,21.769531 C14.4590585,20.8125 13.9551525,19.921875 13.1270275,19.441406 L3.95124649,14.144531 C3.55280849,13.914062 3.09577749,13.792969 2.63874649,13.792969 C1.69733949,13.792969 0.822339495,14.296875 0.353589495,15.109375 C-0.372972505,16.367188 0.060621495,17.980469 1.31843349,18.707031 L6.60749649,21.757812 L1.31843349,24.8125 C0.709058495,25.164062 0.271558495,25.730469 0.091871495,26.410156 C-0.091722505,27.089844 0.00202749496,27.800781 0.353589495,28.410156 C0.822339495,29.222656 1.69733949,29.726562 2.63483949,29.726562 C3.09577749,29.726562 3.55280849,29.605469 3.95124649,29.375 L13.1270275,24.078125 C13.9473395,23.601562 14.4512465,22.71875 14.4434335,21.769531"
          id="Path2"
        ></path>
        <path
          d="M6.03327749,10.390625 L15.2090585,15.6875 C16.2793715,16.308594 17.5996835,16.105469 18.4434335,15.28125 C18.9785895,14.789062 19.3106215,14.085938 19.3106215,13.304688 L19.3106215,2.6875 C19.3106215,1.203125 18.1074965,0 16.6270275,0 C15.1426525,0 13.9395275,1.203125 13.9395275,2.6875 L13.9395275,8.730469 L8.72858949,5.722656 C7.43952749,4.976562 5.79108949,5.417969 5.04499649,6.707031 C4.29890249,7.996094 4.74421549,9.644531 6.03327749,10.390625"
          id="Path3"
        ></path>
        <path
          d="M26.6660895,22.199219 C26.6660895,22.402344 26.5489025,22.683594 26.4043715,22.832031 L22.7676525,26.46875 C22.6231215,26.613281 22.3379655,26.730469 22.1348395,26.730469 L21.2090585,26.730469 C21.0059335,26.730469 20.7207775,26.613281 20.5762465,26.46875 L16.9356215,22.832031 C16.7910895,22.683594 16.6739025,22.402344 16.6739025,22.199219 L16.6739025,21.273438 C16.6739025,21.066406 16.7910895,20.785156 16.9356215,20.640625 L20.5762465,17 C20.7207775,16.855469 21.0059335,16.738281 21.2090585,16.738281 L22.1348395,16.738281 C22.3379655,16.738281 22.6231215,16.855469 22.7676525,17 L26.4043715,20.640625 C26.5489025,20.785156 26.6660895,21.066406 26.6660895,21.273438 L26.6660895,22.199219 Z M23.4199965,21.753906 L23.4199965,21.714844 C23.4199965,21.566406 23.3340585,21.359375 23.2285895,21.25 L22.1543715,20.179688 C22.0489025,20.070312 21.8418715,19.984375 21.6895275,19.984375 L21.6504655,19.984375 C21.5020275,19.984375 21.2949965,20.070312 21.1856215,20.179688 L20.1153085,21.25 C20.0098395,21.355469 19.9239025,21.5625 19.9239025,21.714844 L19.9239025,21.753906 C19.9239025,21.90625 20.0098395,22.113281 20.1153085,22.21875 L21.1856215,23.292969 C21.2949965,23.398438 21.5020275,23.484375 21.6504655,23.484375 L21.6895275,23.484375 C21.8418715,23.484375 22.0489025,23.398438 22.1543715,23.292969 L23.2285895,22.21875 C23.3340585,22.113281 23.4199965,21.90625 23.4199965,21.753906 Z"
          id="Combined-Shape"
        ></path>
        <path
          d="M28.0879655,15.6875 L37.2637465,10.390625 C38.5528085,9.648438 38.9981215,7.996094 38.2520275,6.707031 C37.5059335,5.417969 35.8574965,4.976562 34.5684335,5.722656 L29.4278085,8.691406 L29.4278085,2.6875 C29.4278085,1.203125 28.2246835,-5.68434189e-14 26.7442155,-5.68434189e-14 C25.2598395,-5.68434189e-14 24.0567155,1.203125 24.0567155,2.6875 L24.0567155,13.09375 C24.0059335,13.632812 24.1114025,14.195312 24.4043715,14.703125 C25.1504655,15.992188 26.7989025,16.433594 28.0879655,15.6875"
          id="Path4"
        ></path>
        <path
          d="M17.0489025,27.515625 C16.4395275,27.398438 15.7871835,27.496094 15.2090585,27.828125 L6.03327749,33.128906 C4.74421549,33.871094 4.29890249,35.519531 5.04499649,36.808594 C5.79108949,38.101562 7.43952749,38.542969 8.72858949,37.796875 L13.9395275,34.789062 L13.9395275,40.785156 C13.9395275,42.265625 15.1426525,43.46875 16.6270275,43.46875 C18.1074965,43.46875 19.3106215,42.265625 19.3106215,40.785156 L19.3106215,30.167969 C19.3106215,28.828125 18.3301525,27.71875 17.0489025,27.515625"
          id="Path5"
        ></path>
        <path
          d="M42.9981215,15.078125 C42.2559335,13.785156 40.6035895,13.34375 39.3145275,14.089844 L30.1387465,19.386719 C29.2598395,19.894531 28.7754655,20.824219 28.7910895,21.769531 C28.7832775,22.710938 29.2676525,23.628906 30.1387465,24.128906 L39.3145275,29.429688 C40.6035895,30.171875 42.2520275,29.730469 42.9981215,28.441406 C43.7442155,27.152344 43.2989025,25.503906 42.0098395,24.757812 L36.8145275,21.757812 L42.0098395,18.757812 C43.3028085,18.015625 43.7442155,16.367188 42.9981215,15.078125"
          id="Path6"
        ></path>
        <path
          d="M183.998121,21.136719 C183.998121,21.136719 183.998121,21.140625 183.998121,21.140625 L183.998121,21.238281 C183.998121,21.738281 183.580152,22.109375 183.064527,22.109375 L170.173902,22.109375 C170.197339,22.414062 170.236402,22.710938 170.298902,23.003906 C170.896558,25.796875 173.287183,27.875 176.127027,27.898438 C176.134839,27.898438 176.279371,27.898438 176.502027,27.898438 C176.537183,27.898438 176.572339,27.898438 176.607496,27.898438 L176.877027,27.898438 C176.935621,27.898438 176.994215,27.898438 177.056715,27.894531 C177.111402,27.894531 177.166089,27.890625 177.220777,27.886719 C177.224683,27.886719 177.228589,27.886719 177.232496,27.882812 C178.173902,27.808594 179.123121,27.429688 179.970777,26.820312 C179.970777,26.820312 179.970777,26.820312 179.974683,26.820312 C180.017652,26.789062 180.064527,26.753906 180.107496,26.71875 C180.115308,26.714844 180.123121,26.707031 180.134839,26.699219 C180.169996,26.671875 180.209058,26.640625 180.248121,26.609375 C180.263746,26.597656 180.275465,26.585938 180.291089,26.574219 C180.322339,26.550781 180.353589,26.523438 180.384839,26.496094 C180.404371,26.480469 180.427808,26.460938 180.447339,26.445312 C180.470777,26.421875 180.494215,26.398438 180.521558,26.378906 C180.544996,26.355469 180.572339,26.332031 180.595777,26.308594 C180.615308,26.292969 180.634839,26.273438 180.654371,26.253906 C180.685621,26.226562 180.712965,26.199219 180.744215,26.171875 C180.759839,26.15625 180.775465,26.136719 180.791089,26.121094 C180.822339,26.089844 180.853589,26.058594 180.884839,26.027344 C180.900465,26.011719 180.912183,26 180.927808,25.984375 C180.959058,25.949219 180.990308,25.914062 181.021558,25.878906 C181.037183,25.867188 181.048902,25.851562 181.060621,25.835938 C181.095777,25.800781 181.127027,25.765625 181.158277,25.730469 C181.169996,25.714844 181.185621,25.699219 181.197339,25.683594 C181.228589,25.644531 181.255933,25.609375 181.287183,25.574219 C181.302808,25.554688 181.318433,25.535156 181.334058,25.515625 C181.361402,25.480469 181.388746,25.449219 181.412183,25.417969 C181.435621,25.386719 181.455152,25.359375 181.474683,25.332031 C181.494215,25.304688 181.513746,25.28125 181.533277,25.253906 C181.564527,25.210938 181.595777,25.167969 181.623121,25.125 C181.634839,25.109375 181.642652,25.097656 181.650465,25.085938 C181.728589,24.972656 181.802808,24.855469 181.877027,24.734375 C181.877027,24.734375 181.877027,24.730469 181.880933,24.726562 C181.896558,24.699219 181.916089,24.675781 181.935621,24.648438 C181.943433,24.636719 181.951246,24.625 181.962965,24.617188 C181.974683,24.597656 181.990308,24.585938 182.002027,24.570312 C182.013746,24.558594 182.025465,24.546875 182.037183,24.535156 C182.052808,24.523438 182.064527,24.511719 182.080152,24.5 C182.091871,24.488281 182.103589,24.476562 182.119215,24.46875 C182.138746,24.453125 182.162183,24.4375 182.185621,24.425781 C182.201246,24.414062 182.220777,24.402344 182.236402,24.394531 C182.255933,24.386719 182.271558,24.378906 182.287183,24.371094 C182.302808,24.363281 182.318433,24.359375 182.330152,24.351562 C182.353589,24.34375 182.373121,24.339844 182.396558,24.332031 C182.408277,24.328125 182.416089,24.324219 182.427808,24.320312 C182.502027,24.304688 182.580152,24.292969 182.654371,24.292969 C182.736402,24.292969 182.822339,24.304688 182.900465,24.328125 C182.904371,24.328125 182.904371,24.328125 182.908277,24.328125 C182.939527,24.339844 182.974683,24.347656 183.005933,24.363281 C183.013746,24.367188 183.021558,24.367188 183.029371,24.371094 C183.064527,24.386719 183.095777,24.402344 183.127027,24.421875 L183.142652,24.429688 C183.572339,24.742188 183.705152,25.289062 183.443433,25.738281 L183.439527,25.742188 C183.408277,25.792969 183.377027,25.84375 183.345777,25.890625 C183.337965,25.902344 183.330152,25.914062 183.322339,25.925781 C182.408277,27.316406 181.166089,28.425781 179.779371,29.089844 C179.748121,29.101562 179.720777,29.117188 179.689527,29.132812 C179.685621,29.132812 179.677808,29.136719 179.673902,29.136719 C179.033277,29.433594 178.345777,29.640625 177.611402,29.726562 C177.595777,29.726562 177.580152,29.730469 177.564527,29.730469 C177.502027,29.738281 177.439527,29.746094 177.377027,29.75 C177.341871,29.75 177.306715,29.753906 177.267652,29.757812 C177.224683,29.757812 177.177808,29.761719 177.134839,29.765625 C177.048902,29.765625 176.962965,29.769531 176.877027,29.769531 C176.865308,29.769531 176.541089,29.769531 176.322339,29.769531 C176.197339,29.769531 176.127027,29.769531 176.119215,29.769531 C171.783277,29.738281 168.291089,26.121094 168.291089,21.691406 C168.291089,17.1875 171.806715,13.550781 176.177808,13.550781 C176.306715,13.550781 176.435621,13.554688 176.564527,13.558594 C178.087965,13.636719 179.494215,14.15625 180.662183,15.007812 C180.666089,15.011719 180.669996,15.015625 180.673902,15.015625 C180.740308,15.0625 180.802808,15.113281 180.865308,15.160156 C180.896558,15.1875 180.931715,15.214844 180.966871,15.242188 C180.998121,15.265625 181.029371,15.292969 181.060621,15.316406 C182.705152,16.6875 183.814527,18.746094 183.998121,21.128906 L183.998121,21.136719 Z M170.298902,20.269531 L181.966871,20.269531 C181.388746,17.457031 178.970777,15.421875 176.177808,15.421875 C173.334058,15.421875 170.935621,17.417969 170.298902,20.269531 Z"
          id="Combined-Shape2"
        ></path>
        <path
          d="M151.041089,13.824219 C151.185621,13.96875 151.283277,14.164062 151.306715,14.390625 C151.306715,14.421875 151.310621,14.453125 151.310621,14.484375 L151.310621,28.832031 C151.310621,29.34375 150.880933,29.769531 150.373121,29.769531 C149.865308,29.769531 149.439527,29.34375 149.439527,28.832031 L149.439527,26.925781 C149.084058,27.355469 148.693433,27.746094 148.267652,28.085938 C148.255933,28.097656 148.244215,28.105469 148.232496,28.117188 C148.193433,28.148438 148.150465,28.179688 148.111402,28.207031 C146.822339,29.199219 145.255933,29.769531 143.619215,29.769531 C140.982496,29.769531 138.662183,28.367188 137.279371,26.242188 C137.267652,26.226562 137.252027,26.207031 137.240308,26.191406 C137.201246,26.125 137.162183,26.058594 137.119215,25.988281 C137.091871,25.945312 137.068433,25.902344 137.041089,25.859375 C137.013746,25.816406 136.990308,25.769531 136.966871,25.722656 C136.927808,25.65625 136.888746,25.585938 136.853589,25.519531 C136.841871,25.496094 136.834058,25.472656 136.822339,25.449219 C136.310621,24.433594 135.994215,23.289062 135.939527,22.074219 C135.931715,21.9375 135.927808,21.800781 135.927808,21.660156 C135.927808,21.519531 135.931715,21.382812 135.939527,21.246094 C135.994215,20.03125 136.310621,18.886719 136.822339,17.867188 C136.834058,17.847656 136.841871,17.824219 136.853589,17.800781 C136.888746,17.734375 136.927808,17.664062 136.966871,17.597656 C136.990308,17.550781 137.013746,17.503906 137.041089,17.460938 C137.064527,17.417969 137.091871,17.375 137.119215,17.332031 C137.158277,17.265625 137.201246,17.195312 137.240308,17.128906 C137.252027,17.113281 137.267652,17.09375 137.279371,17.078125 C138.662183,14.953125 140.982496,13.550781 143.619215,13.550781 C145.400465,13.550781 147.084058,14.203125 148.423902,15.339844 C148.791089,15.648438 149.130933,15.988281 149.439527,16.363281 L149.439527,14.484375 C149.439527,14.453125 149.439527,14.421875 149.443433,14.390625 C149.466871,14.164062 149.564527,13.96875 149.709058,13.824219 C149.709058,13.824219 149.709058,13.824219 149.709058,13.820312 C149.724683,13.804688 149.744215,13.792969 149.759839,13.777344 C149.763746,13.773438 149.771558,13.765625 149.775465,13.761719 C149.787183,13.75 149.802808,13.742188 149.814527,13.734375 C149.826246,13.726562 149.837965,13.714844 149.849683,13.707031 C149.857496,13.703125 149.865308,13.699219 149.873121,13.691406 C149.892652,13.683594 149.908277,13.671875 149.927808,13.660156 C149.931715,13.660156 149.935621,13.65625 149.939527,13.65625 C149.962965,13.644531 149.986402,13.632812 150.009839,13.621094 C150.009839,13.621094 150.009839,13.621094 150.013746,13.621094 C150.068433,13.597656 150.127027,13.582031 150.185621,13.570312 C150.189527,13.570312 150.197339,13.566406 150.201246,13.566406 C150.224683,13.5625 150.252027,13.558594 150.279371,13.554688 C150.310621,13.554688 150.341871,13.550781 150.373121,13.550781 C150.408277,13.550781 150.439527,13.554688 150.470777,13.554688 C150.498121,13.558594 150.521558,13.5625 150.548902,13.566406 C150.552808,13.566406 150.556715,13.570312 150.564527,13.570312 C150.623121,13.582031 150.681715,13.597656 150.736402,13.621094 C150.736402,13.621094 150.740308,13.621094 150.740308,13.621094 C150.763746,13.632812 150.787183,13.644531 150.806715,13.65625 C150.814527,13.65625 150.818433,13.660156 150.822339,13.660156 C150.837965,13.671875 150.857496,13.683594 150.873121,13.691406 C150.880933,13.699219 150.892652,13.703125 150.900465,13.707031 C150.912183,13.714844 150.923902,13.726562 150.935621,13.734375 C150.947339,13.742188 150.959058,13.75 150.970777,13.761719 C150.978589,13.765625 150.982496,13.773438 150.990308,13.777344 C151.005933,13.792969 151.025465,13.804688 151.037183,13.820312 C151.041089,13.824219 151.041089,13.824219 151.041089,13.824219 Z M143.619215,27.898438 C146.826246,27.898438 149.439527,25.101562 149.439527,21.660156 C149.439527,18.203125 146.826246,15.390625 143.619215,15.390625 C140.435621,15.390625 137.798902,18.199219 137.798902,21.660156 C137.798902,21.769531 137.802808,21.875 137.806715,21.980469 C137.806715,22.027344 137.814527,22.070312 137.814527,22.113281 C137.818433,22.175781 137.822339,22.238281 137.830152,22.296875 C137.834058,22.347656 137.841871,22.394531 137.845777,22.441406 C137.853589,22.496094 137.857496,22.554688 137.865308,22.609375 C137.873121,22.652344 137.880933,22.691406 137.884839,22.730469 C137.896558,22.792969 137.904371,22.855469 137.916089,22.917969 C137.923902,22.949219 137.931715,22.976562 137.935621,23.003906 C137.951246,23.078125 137.966871,23.148438 137.982496,23.222656 C137.986402,23.238281 137.990308,23.253906 137.998121,23.269531 C138.662183,25.941406 140.943433,27.898438 143.619215,27.898438 Z"
          id="Combined-Shape3"
        ></path>
        <path
          d="M127.560621,6.785156 L127.306715,6.785156 C127.275465,6.785156 127.240308,6.785156 127.209058,6.789062 C127.173902,6.785156 127.142652,6.785156 127.107496,6.785156 C127.017652,6.785156 126.927808,6.785156 126.837965,6.789062 C126.822339,6.789062 126.802808,6.792969 126.787183,6.792969 C126.716871,6.792969 126.646558,6.796875 126.576246,6.804688 C126.564527,6.804688 126.548902,6.804688 126.537183,6.804688 C126.462965,6.8125 126.392652,6.816406 126.322339,6.824219 C126.314527,6.828125 126.306715,6.828125 126.298902,6.828125 C126.220777,6.839844 126.146558,6.847656 126.076246,6.859375 C126.072339,6.859375 126.068433,6.859375 126.068433,6.859375 C125.595777,6.933594 125.169996,7.066406 124.791089,7.253906 C124.791089,7.257812 124.787183,7.257812 124.783277,7.257812 C124.728589,7.289062 124.669996,7.320312 124.615308,7.351562 C124.603589,7.355469 124.595777,7.363281 124.584058,7.371094 C124.537183,7.398438 124.490308,7.425781 124.443433,7.457031 C124.423902,7.46875 124.408277,7.484375 124.392652,7.496094 C124.353589,7.519531 124.318433,7.546875 124.279371,7.574219 C124.252027,7.597656 124.224683,7.621094 124.197339,7.640625 C124.173902,7.660156 124.150465,7.679688 124.127027,7.699219 C124.084058,7.738281 124.044996,7.773438 124.005933,7.8125 C123.998121,7.820312 123.990308,7.828125 123.982496,7.835938 C123.935621,7.886719 123.888746,7.933594 123.841871,7.984375 C123.834058,7.996094 123.826246,8.007812 123.818433,8.015625 C123.779371,8.058594 123.740308,8.101562 123.705152,8.144531 C123.693433,8.164062 123.677808,8.183594 123.666089,8.203125 C123.634839,8.242188 123.607496,8.277344 123.580152,8.316406 C123.572339,8.332031 123.564527,8.34375 123.552808,8.355469 C123.521558,8.402344 123.490308,8.449219 123.462965,8.496094 C123.459058,8.503906 123.455152,8.507812 123.451246,8.515625 C123.197339,8.933594 123.017652,9.425781 122.904371,10.019531 C122.904371,10.027344 122.904371,10.039062 122.900465,10.046875 C122.884839,10.121094 122.873121,10.199219 122.861402,10.277344 C122.857496,10.300781 122.853589,10.324219 122.853589,10.347656 C122.841871,10.414062 122.834058,10.480469 122.826246,10.550781 C122.822339,10.589844 122.818433,10.628906 122.814527,10.671875 C122.806715,10.726562 122.798902,10.777344 122.794996,10.835938 C122.791089,10.894531 122.787183,10.953125 122.783277,11.015625 C122.779371,11.054688 122.779371,11.09375 122.775465,11.136719 C122.771558,11.21875 122.767652,11.304688 122.763746,11.390625 C122.763746,11.414062 122.759839,11.429688 122.759839,11.449219 C122.755933,11.558594 122.755933,11.671875 122.755933,11.78125 L122.755933,13.324219 L120.810621,13.324219 C120.689527,13.320312 120.568433,13.34375 120.459058,13.382812 C120.107496,13.511719 119.857496,13.84375 119.857496,14.230469 C119.857496,14.59375 120.037183,14.902344 120.318433,15.082031 C120.459058,15.171875 120.623121,15.226562 120.802808,15.234375 L120.810621,15.234375 C120.810621,15.234375 120.810621,15.238281 120.810621,15.238281 L122.755933,15.238281 L122.755933,28.863281 C122.752027,28.882812 122.755933,28.898438 122.755933,28.917969 C122.755933,28.929688 122.755933,28.941406 122.755933,28.953125 C122.767652,29.171875 122.857496,29.371094 123.002027,29.523438 L123.005933,29.527344 C123.025465,29.546875 123.048902,29.566406 123.068433,29.585938 C123.072339,29.589844 123.076246,29.589844 123.080152,29.59375 C123.095777,29.609375 123.115308,29.621094 123.130933,29.632812 C123.138746,29.640625 123.150465,29.648438 123.158277,29.652344 C123.166089,29.660156 123.173902,29.664062 123.185621,29.667969 C123.337965,29.765625 123.517652,29.820312 123.709058,29.820312 C123.740308,29.820312 123.771558,29.816406 123.798902,29.8125 C123.982496,29.796875 124.150465,29.71875 124.287183,29.605469 C124.287183,29.605469 124.291089,29.601562 124.291089,29.601562 C124.310621,29.585938 124.326246,29.570312 124.341871,29.550781 C124.345777,29.546875 124.353589,29.542969 124.357496,29.539062 C124.373121,29.523438 124.384839,29.507812 124.396558,29.496094 C124.544996,29.316406 124.627027,29.09375 124.615308,28.863281 L124.615308,15.238281 L126.709058,15.238281 C126.709058,15.238281 126.709058,15.234375 126.709058,15.234375 L126.716871,15.234375 C127.271558,15.207031 127.677808,14.773438 127.662183,14.234375 C127.662183,14.230469 127.662183,14.230469 127.662183,14.226562 C127.666089,14.207031 127.662183,14.1875 127.662183,14.167969 C127.662183,14.160156 127.662183,14.152344 127.662183,14.148438 C127.646558,13.941406 127.556715,13.753906 127.416089,13.609375 C127.416089,13.609375 127.416089,13.609375 127.416089,13.605469 C127.412183,13.605469 127.412183,13.605469 127.412183,13.605469 C127.392652,13.585938 127.377027,13.570312 127.357496,13.554688 C127.349683,13.546875 127.341871,13.542969 127.337965,13.535156 C127.322339,13.523438 127.310621,13.515625 127.294996,13.503906 C127.283277,13.496094 127.267652,13.484375 127.255933,13.476562 C127.248121,13.472656 127.236402,13.464844 127.228589,13.460938 C127.209058,13.449219 127.189527,13.4375 127.169996,13.429688 C127.166089,13.425781 127.158277,13.421875 127.154371,13.421875 C127.130933,13.410156 127.107496,13.398438 127.084058,13.390625 C127.080152,13.386719 127.076246,13.386719 127.068433,13.382812 C127.044996,13.375 127.021558,13.367188 126.998121,13.359375 C126.990308,13.359375 126.982496,13.355469 126.974683,13.355469 C126.951246,13.351562 126.931715,13.34375 126.908277,13.339844 C126.896558,13.339844 126.884839,13.339844 126.873121,13.335938 C126.857496,13.332031 126.837965,13.332031 126.818433,13.328125 C126.802808,13.328125 126.787183,13.328125 126.775465,13.328125 C126.763746,13.328125 126.752027,13.324219 126.740308,13.324219 C126.728589,13.324219 126.712965,13.324219 126.709058,13.324219 L124.615308,13.324219 L124.615308,11.785156 C124.615308,11.773438 124.615308,11.761719 124.615308,11.753906 C124.619215,11.675781 124.619215,11.597656 124.623121,11.523438 C124.623121,11.503906 124.623121,11.480469 124.627027,11.460938 C124.627027,11.394531 124.630933,11.328125 124.634839,11.265625 C124.634839,11.253906 124.638746,11.238281 124.638746,11.226562 C124.642652,11.152344 124.650465,11.078125 124.658277,11.007812 C124.732496,10.246094 124.896558,9.765625 125.068433,9.472656 C125.072339,9.464844 125.072339,9.460938 125.076246,9.453125 C125.087965,9.433594 125.103589,9.414062 125.115308,9.394531 C125.123121,9.378906 125.134839,9.363281 125.146558,9.347656 C125.150465,9.339844 125.158277,9.324219 125.166089,9.316406 C125.185621,9.289062 125.205152,9.265625 125.228589,9.242188 C125.474683,8.964844 125.857496,8.796875 126.412183,8.730469 C126.419996,8.730469 126.423902,8.726562 126.435621,8.726562 C126.466871,8.722656 126.502027,8.71875 126.533277,8.71875 C126.548902,8.714844 126.568433,8.714844 126.584058,8.710938 C126.615308,8.710938 126.642652,8.707031 126.673902,8.707031 C126.697339,8.707031 126.716871,8.703125 126.744215,8.703125 C126.771558,8.699219 126.798902,8.699219 126.826246,8.699219 C126.853589,8.699219 126.880933,8.695312 126.908277,8.695312 C126.935621,8.695312 126.962965,8.695312 126.990308,8.695312 C127.029371,8.695312 127.068433,8.695312 127.107496,8.695312 L127.111402,8.695312 C127.142652,8.695312 127.169996,8.691406 127.201246,8.6875 C127.236402,8.691406 127.271558,8.695312 127.306715,8.695312 L127.560621,8.695312 C128.084058,8.695312 128.513746,8.265625 128.513746,7.738281 C128.513746,7.210938 128.084058,6.785156 127.560621,6.785156"
          id="Path7"
        ></path>
        <path
          d="M132.599683,6.8125 C132.599683,6.8125 132.595777,6.808594 132.591871,6.808594 C132.572339,6.800781 132.556715,6.792969 132.533277,6.789062 C132.525465,6.785156 132.513746,6.78125 132.502027,6.777344 C132.486402,6.773438 132.470777,6.769531 132.455152,6.765625 C132.439527,6.761719 132.423902,6.753906 132.412183,6.753906 C132.392652,6.75 132.377027,6.746094 132.357496,6.746094 C132.341871,6.742188 132.330152,6.742188 132.314527,6.738281 C132.283277,6.734375 132.248121,6.734375 132.216871,6.734375 C131.709058,6.734375 131.279371,7.160156 131.279371,7.667969 L131.279371,28.832031 C131.279371,29.34375 131.709058,29.769531 132.216871,29.769531 C132.248121,29.769531 132.283277,29.769531 132.314527,29.765625 C132.318433,29.765625 132.326246,29.761719 132.330152,29.761719 C132.357496,29.757812 132.384839,29.753906 132.412183,29.75 C132.416089,29.75 132.423902,29.746094 132.431715,29.746094 C132.455152,29.738281 132.478589,29.734375 132.502027,29.726562 C132.505933,29.726562 132.509839,29.726562 132.513746,29.722656 C132.873121,29.609375 133.138746,29.304688 133.177808,28.929688 C133.181715,28.898438 133.185621,28.867188 133.185621,28.832031 L133.185621,7.667969 C133.185621,7.636719 133.181715,7.605469 133.177808,7.574219 C133.142652,7.230469 132.916089,6.945312 132.599683,6.8125"
          id="Path8"
        ></path>
        <path
          d="M60.8770275,24.789062 C60.8692155,24.734375 60.8692155,24.683594 60.8614025,24.632812 C60.8574965,24.59375 60.8535895,24.558594 60.8496835,24.523438 C60.8418715,24.480469 60.8379655,24.441406 60.8301525,24.398438 C60.8223395,24.359375 60.8145275,24.320312 60.8067155,24.277344 C60.8028085,24.246094 60.7949965,24.210938 60.7871835,24.179688 C60.7754655,24.132812 60.7676525,24.089844 60.7559335,24.042969 C60.7481215,24.019531 60.7403085,23.992188 60.7324965,23.96875 C60.7207775,23.917969 60.7051525,23.871094 60.6856215,23.824219 C60.6817155,23.804688 60.6739025,23.785156 60.6699965,23.769531 C60.6504655,23.714844 60.6309335,23.664062 60.6074965,23.609375 C60.6035895,23.601562 60.5996835,23.589844 60.5957775,23.578125 C60.5684335,23.523438 60.5449965,23.464844 60.5176525,23.410156 C60.5137465,23.40625 60.5137465,23.402344 60.5098395,23.398438 C60.2871835,22.949219 59.9707775,22.574219 59.5840585,22.257812 C59.5840585,22.253906 59.5840585,22.253906 59.5801525,22.253906 C59.5254655,22.210938 59.4707775,22.164062 59.4121835,22.121094 C59.4121835,22.121094 59.4082775,22.117188 59.4043715,22.113281 C59.4004655,22.113281 59.3965585,22.109375 59.3926525,22.105469 C59.3574965,22.082031 59.3223395,22.054688 59.2910895,22.03125 C58.8106215,21.691406 58.2793715,21.421875 57.5059335,21.125 C57.4942155,21.121094 57.4824965,21.117188 57.4707775,21.113281 C57.4590585,21.105469 57.4434335,21.101562 57.4317155,21.09375 C56.9942155,20.929688 56.5410895,20.773438 56.0762465,20.621094 C56.0762465,20.621094 56.0762465,20.621094 56.0723395,20.621094 C56.0723395,20.621094 56.0684335,20.621094 56.0684335,20.617188 C56.0606215,20.617188 56.0528085,20.613281 56.0410895,20.609375 C55.9981215,20.59375 55.9512465,20.578125 55.8887465,20.558594 C55.8574965,20.550781 55.8340585,20.542969 55.8106215,20.535156 C55.6543715,20.480469 55.4942155,20.429688 55.3340585,20.375 C55.2207775,20.335938 55.0996835,20.296875 54.9551525,20.25 C54.9160895,20.238281 54.8223395,20.207031 54.7442155,20.183594 C54.7403085,20.183594 54.7403085,20.179688 54.7364025,20.179688 C54.6895275,20.164062 54.6426525,20.148438 54.5918715,20.132812 C54.2012465,20.007812 53.8809335,19.898438 53.6074965,19.796875 C53.1621835,19.632812 52.7559335,19.457031 52.4239025,19.246094 C52.4160895,19.242188 52.4082775,19.238281 52.4043715,19.234375 C51.9512465,18.945312 51.6387465,18.589844 51.5645275,18.125 C51.5645275,18.125 51.5606215,18.121094 51.5606215,18.121094 C51.5567155,18.089844 51.5528085,18.054688 51.5528085,18.023438 C51.5489025,18.015625 51.5489025,18.011719 51.5489025,18.007812 C51.5449965,17.96875 51.5449965,17.933594 51.5449965,17.894531 C51.5449965,17.839844 51.5489025,17.785156 51.5528085,17.734375 C51.5528085,17.71875 51.5528085,17.707031 51.5567155,17.695312 C51.5606215,17.652344 51.5645275,17.613281 51.5684335,17.574219 C51.5723395,17.5625 51.5723395,17.550781 51.5762465,17.539062 C51.5840585,17.496094 51.5918715,17.457031 51.5996835,17.414062 C51.6035895,17.410156 51.6035895,17.402344 51.6074965,17.394531 C51.6192155,17.347656 51.6309335,17.304688 51.6465585,17.261719 C51.6465585,17.257812 51.6465585,17.257812 51.6465585,17.257812 C51.8496835,16.652344 52.3301525,16.203125 52.8965585,15.886719 C52.9356215,15.867188 52.9746835,15.847656 53.0098395,15.828125 C53.0489025,15.808594 53.0840585,15.789062 53.1192155,15.773438 C53.1778085,15.746094 53.2364025,15.71875 53.2949965,15.695312 C53.3301525,15.679688 53.3614025,15.664062 53.3965585,15.652344 C53.4590585,15.628906 53.5215585,15.605469 53.5840585,15.582031 C53.6153085,15.570312 53.6504655,15.558594 53.6856215,15.546875 C53.7481215,15.527344 53.8067155,15.507812 53.8692155,15.492188 C53.9082775,15.480469 53.9434335,15.46875 53.9824965,15.460938 C54.0410895,15.445312 54.0996835,15.433594 54.1543715,15.417969 C54.1934335,15.410156 54.2324965,15.402344 54.2715585,15.394531 C54.3340585,15.382812 54.3926525,15.371094 54.4473395,15.363281 C54.4824965,15.359375 54.5137465,15.355469 54.5489025,15.347656 C54.6153085,15.339844 54.6856215,15.332031 54.7559335,15.328125 C54.7715585,15.324219 54.7871835,15.324219 54.8067155,15.320312 C54.8926525,15.316406 54.9785895,15.3125 55.0606215,15.3125 C55.1582775,15.3125 55.2559335,15.316406 55.3496835,15.320312 C55.3653085,15.320312 55.3809335,15.320312 55.3926525,15.320312 C56.0840585,15.363281 56.6426525,15.53125 57.1035895,15.753906 C57.1387465,15.769531 57.1739025,15.789062 57.2090585,15.804688 C57.2285895,15.816406 57.2481215,15.828125 57.2676525,15.835938 C57.3106215,15.859375 57.3535895,15.882812 57.4004655,15.910156 C57.4082775,15.914062 57.4160895,15.917969 57.4239025,15.921875 C57.4707775,15.949219 57.5176525,15.980469 57.5645275,16.007812 C57.5684335,16.011719 57.5723395,16.011719 57.5723395,16.011719 C57.6231215,16.042969 57.6739025,16.078125 57.7246835,16.109375 C57.7246835,16.113281 57.7285895,16.113281 57.7285895,16.117188 C57.7793715,16.148438 57.8262465,16.179688 57.8731215,16.214844 C57.8926525,16.230469 57.9082775,16.242188 57.9278085,16.253906 C58.0371835,16.335938 58.2090585,16.46875 58.3653085,16.597656 C58.3848395,16.609375 58.4004655,16.621094 58.4121835,16.632812 C58.5293715,16.730469 58.6387465,16.816406 58.7442155,16.894531 C58.7637465,16.910156 58.7793715,16.921875 58.7910895,16.929688 C58.7949965,16.933594 58.7989025,16.9375 58.8028085,16.9375 C58.8145275,16.945312 58.8262465,16.953125 58.8379655,16.960938 C58.8653085,16.980469 58.8965585,17 58.9239025,17.019531 C58.9356215,17.027344 58.9473395,17.03125 58.9590585,17.039062 C58.9864025,17.054688 59.0137465,17.070312 59.0410895,17.085938 C59.0528085,17.089844 59.0606215,17.09375 59.0723395,17.097656 C59.1035895,17.113281 59.1309335,17.125 59.1621835,17.136719 C59.1699965,17.140625 59.1739025,17.140625 59.1817155,17.144531 C59.2168715,17.15625 59.2520275,17.167969 59.2871835,17.171875 C59.2871835,17.171875 59.2871835,17.171875 59.2910895,17.175781 C59.3692155,17.1875 59.4434335,17.191406 59.5215585,17.171875 C59.5293715,17.171875 59.5371835,17.167969 59.5449965,17.167969 C59.5645275,17.164062 59.5879655,17.15625 59.6074965,17.152344 C59.6153085,17.148438 59.6192155,17.144531 59.6270275,17.140625 C59.6348395,17.140625 59.6426525,17.136719 59.6504655,17.132812 C59.6817155,17.117188 59.7129655,17.101562 59.7442155,17.082031 C59.7520275,17.082031 59.7559335,17.078125 59.7598395,17.074219 C59.7949965,17.050781 59.8262465,17.027344 59.8574965,17 C59.8614025,16.996094 59.8614025,16.996094 59.8614025,16.996094 C59.8887465,16.972656 59.9121835,16.945312 59.9356215,16.917969 C59.9512465,16.898438 59.9668715,16.875 59.9785895,16.851562 C59.9824965,16.847656 59.9864025,16.84375 59.9864025,16.839844 C60.1504655,16.566406 60.0567155,16.207031 59.7676525,15.816406 C59.7637465,15.808594 59.7598395,15.800781 59.7520275,15.792969 C59.7403085,15.777344 59.7324965,15.765625 59.7207775,15.75 C59.0567155,14.890625 57.5449965,13.949219 56.1426525,13.648438 C56.1348395,13.648438 56.1270275,13.648438 56.1192155,13.644531 C56.0606215,13.632812 55.9981215,13.621094 55.9395275,13.609375 C55.9239025,13.609375 55.9043715,13.605469 55.8887465,13.601562 C55.8379655,13.59375 55.7871835,13.585938 55.7364025,13.582031 C55.7168715,13.578125 55.6973395,13.574219 55.6778085,13.574219 C55.6309335,13.570312 55.5801525,13.566406 55.5332775,13.5625 C55.5137465,13.558594 55.4942155,13.558594 55.4785895,13.554688 C55.4121835,13.554688 55.3496835,13.550781 55.2871835,13.550781 C55.1856215,13.550781 55.0840585,13.550781 54.9864025,13.554688 C54.9317155,13.554688 54.8770275,13.558594 54.8184335,13.5625 C54.7793715,13.566406 54.7324965,13.566406 54.6934335,13.566406 C54.6153085,13.574219 54.5410895,13.578125 54.4668715,13.585938 C54.4473395,13.585938 54.4239025,13.585938 54.4043715,13.589844 C54.3184335,13.597656 54.2324965,13.605469 54.1504655,13.617188 C54.1387465,13.617188 54.1309335,13.617188 54.1231215,13.617188 C54.0332775,13.628906 53.9473395,13.640625 53.8614025,13.65625 C53.8574965,13.65625 53.8496835,13.65625 53.8457775,13.65625 C53.7598395,13.667969 53.6739025,13.683594 53.5918715,13.699219 C53.5879655,13.699219 53.5840585,13.703125 53.5762465,13.703125 C53.4004655,13.734375 53.2285895,13.773438 53.0645275,13.816406 C53.0606215,13.816406 53.0606215,13.820312 53.0606215,13.820312 C52.9785895,13.839844 52.8965585,13.863281 52.8145275,13.886719 C52.7364025,13.910156 52.6621835,13.9375 52.5918715,13.960938 C52.5840585,13.960938 52.5801525,13.964844 52.5723395,13.964844 C52.5020275,13.992188 52.4317155,14.015625 52.3614025,14.042969 C52.3535895,14.046875 52.3457775,14.050781 52.3418715,14.050781 C52.2715585,14.078125 52.2090585,14.105469 52.1426525,14.136719 C52.1348395,14.140625 52.1231215,14.140625 52.1153085,14.148438 C52.0567155,14.171875 51.9942155,14.203125 51.9395275,14.230469 C51.9239025,14.238281 51.9121835,14.242188 51.9004655,14.25 C51.8418715,14.277344 51.7871835,14.304688 51.7324965,14.335938 C51.7168715,14.34375 51.7051525,14.351562 51.6895275,14.359375 C51.6387465,14.386719 51.5879655,14.417969 51.5371835,14.449219 C51.5215585,14.457031 51.5059335,14.464844 51.4903085,14.476562 C51.4239025,14.515625 51.3614025,14.558594 51.2989025,14.597656 C51.2246835,14.652344 51.1504655,14.703125 51.0840585,14.757812 C51.0762465,14.757812 51.0723395,14.761719 51.0723395,14.765625 C50.7403085,15.011719 50.4551525,15.273438 50.2207775,15.578125 C50.2129655,15.589844 50.2012465,15.601562 50.1934335,15.613281 C50.1660895,15.65625 50.1348395,15.695312 50.1074965,15.734375 C50.0879655,15.765625 50.0684335,15.796875 50.0489025,15.828125 C50.0332775,15.851562 50.0176525,15.875 50.0059335,15.898438 C49.9746835,15.949219 49.9473395,16 49.9199965,16.054688 C49.9160895,16.0625 49.9121835,16.066406 49.9082775,16.074219 C49.6973395,16.492188 49.5762465,16.972656 49.5293715,17.554688 C49.5293715,17.5625 49.5293715,17.570312 49.5254655,17.578125 C49.5215585,17.679688 49.5137465,17.78125 49.5098395,17.890625 C49.5098395,17.972656 49.5098395,18.054688 49.5137465,18.136719 C49.5137465,18.148438 49.5137465,18.160156 49.5137465,18.171875 C49.5567155,19.289062 50.0645275,20.128906 50.9824965,20.78125 C50.9903085,20.785156 50.9981215,20.792969 51.0059335,20.796875 C51.0449965,20.824219 51.0840585,20.851562 51.1231215,20.878906 C51.1504655,20.898438 51.1817155,20.914062 51.2090585,20.933594 C51.2168715,20.941406 51.2285895,20.945312 51.2364025,20.949219 C52.1426525,21.523438 53.2520275,21.851562 54.1778085,22.113281 C54.6309335,22.246094 55.0371835,22.359375 55.1582775,22.394531 C55.1856215,22.402344 55.2129655,22.410156 55.2364025,22.421875 C55.7910895,22.605469 56.2168715,22.753906 56.5684335,22.894531 C56.5957775,22.902344 56.6192155,22.914062 56.6465585,22.921875 C56.6543715,22.925781 56.6660895,22.929688 56.6778085,22.9375 C56.8770275,23.019531 57.0723395,23.105469 57.2598395,23.199219 C57.4160895,23.277344 57.5606215,23.359375 57.7051525,23.445312 C58.0762465,23.675781 58.3614025,23.925781 58.5528085,24.199219 C58.5606215,24.207031 58.5645275,24.214844 58.5684335,24.222656 C58.5879655,24.246094 58.6035895,24.269531 58.6153085,24.296875 C58.6270275,24.3125 58.6348395,24.324219 58.6426525,24.339844 C58.6543715,24.359375 58.6660895,24.378906 58.6739025,24.398438 C58.6856215,24.417969 58.6934335,24.441406 58.7051525,24.460938 C58.7129655,24.476562 58.7207775,24.492188 58.7285895,24.507812 C58.7364025,24.53125 58.7481215,24.554688 58.7559335,24.582031 C58.7598395,24.59375 58.7676525,24.609375 58.7715585,24.625 C58.7793715,24.652344 58.7871835,24.679688 58.7949965,24.707031 C58.7989025,24.71875 58.8028085,24.730469 58.8067155,24.746094 C58.8145275,24.773438 58.8223395,24.804688 58.8262465,24.832031 C58.8301525,24.84375 58.8340585,24.859375 58.8340585,24.871094 C58.8379655,24.902344 58.8418715,24.933594 58.8457775,24.964844 C58.8496835,24.976562 58.8496835,24.988281 58.8496835,25 C58.8535895,25.046875 58.8574965,25.089844 58.8574965,25.136719 C58.8574965,25.207031 58.8535895,25.273438 58.8496835,25.339844 C58.8496835,25.359375 58.8457775,25.378906 58.8457775,25.398438 C58.8418715,25.449219 58.8340585,25.5 58.8223395,25.550781 C58.8223395,25.566406 58.8184335,25.582031 58.8145275,25.597656 C58.7910895,25.734375 58.7520275,25.863281 58.7012465,25.992188 C58.6973395,25.996094 58.6973395,26 58.6973395,26.003906 C58.6699965,26.0625 58.6426525,26.125 58.6114025,26.179688 C58.6074965,26.1875 58.6074965,26.191406 58.6035895,26.195312 C58.5371835,26.320312 58.4590585,26.441406 58.3614025,26.554688 C58.3145275,26.613281 58.2637465,26.667969 58.2129655,26.722656 C58.2090585,26.722656 58.2090585,26.722656 58.2090585,26.726562 C58.1035895,26.832031 57.9864025,26.929688 57.8653085,27.019531 C57.8614025,27.023438 57.8574965,27.023438 57.8574965,27.027344 C57.7989025,27.066406 57.7403085,27.109375 57.6817155,27.144531 C57.6739025,27.152344 57.6660895,27.15625 57.6582775,27.160156 C57.5567155,27.222656 57.4473395,27.285156 57.3379655,27.339844 C57.2989025,27.359375 57.2598395,27.378906 57.2168715,27.398438 C57.1739025,27.417969 57.1270275,27.441406 57.0801525,27.460938 C57.0410895,27.476562 57.0059335,27.492188 56.9668715,27.507812 C56.8614025,27.546875 56.7598395,27.585938 56.6543715,27.621094 C56.6387465,27.625 56.6231215,27.628906 56.6074965,27.636719 C56.5449965,27.65625 56.4824965,27.671875 56.4199965,27.691406 C56.4043715,27.695312 56.3848395,27.703125 56.3692155,27.707031 C56.1621835,27.761719 55.9590585,27.804688 55.7676525,27.835938 C55.7637465,27.835938 55.7598395,27.835938 55.7559335,27.835938 C55.6582775,27.851562 55.5645275,27.863281 55.4746835,27.875 C55.4395275,27.878906 55.4082775,27.882812 55.3731215,27.882812 C55.3418715,27.886719 55.3106215,27.886719 55.2754655,27.890625 C55.2012465,27.894531 55.1231215,27.898438 55.0528085,27.898438 C54.9082775,27.898438 54.7676525,27.894531 54.6309335,27.886719 C54.5762465,27.886719 54.5215585,27.882812 54.4668715,27.878906 C54.3926525,27.871094 54.3145275,27.867188 54.2442155,27.859375 C54.1778085,27.855469 54.1074965,27.847656 54.0449965,27.839844 C53.9864025,27.832031 53.9317155,27.824219 53.8770275,27.816406 C53.7559335,27.796875 53.6426525,27.78125 53.5293715,27.757812 C53.4785895,27.746094 53.4239025,27.738281 53.3731215,27.726562 C53.3145275,27.710938 53.2559335,27.699219 53.1973395,27.683594 C53.1309335,27.667969 53.0684335,27.652344 53.0059335,27.632812 C52.9629655,27.621094 52.9160895,27.609375 52.8770275,27.597656 C52.7715585,27.566406 52.6660895,27.53125 52.5645275,27.492188 C52.5410895,27.484375 52.5176525,27.476562 52.4942155,27.46875 C52.2676525,27.382812 52.0449965,27.289062 51.8262465,27.179688 C51.8184335,27.175781 51.8067155,27.167969 51.7949965,27.164062 C51.6543715,27.09375 51.4160895,26.960938 51.1895275,26.832031 C51.1699965,26.820312 51.1465585,26.808594 51.1270275,26.796875 C50.9668715,26.703125 50.8301525,26.625 50.7012465,26.5625 C50.6895275,26.554688 50.6817155,26.550781 50.6739025,26.546875 C50.6660895,26.542969 50.6582775,26.539062 50.6543715,26.539062 C50.6192155,26.523438 50.5918715,26.507812 50.5606215,26.496094 C50.5489025,26.492188 50.5410895,26.488281 50.5332775,26.484375 C50.4512465,26.453125 50.3770275,26.429688 50.3028085,26.421875 C50.2793715,26.417969 50.2559335,26.417969 50.2324965,26.417969 C50.2246835,26.414062 50.2168715,26.414062 50.2090585,26.414062 C50.0606215,26.414062 49.9317155,26.464844 49.8106215,26.578125 C49.7832775,26.601562 49.7598395,26.625 49.7364025,26.652344 C49.7324965,26.660156 49.7246835,26.667969 49.7168715,26.675781 C49.7012465,26.695312 49.6895275,26.710938 49.6778085,26.726562 C49.6699965,26.738281 49.6621835,26.75 49.6582775,26.757812 C49.6465585,26.773438 49.6348395,26.789062 49.6270275,26.804688 C49.6192155,26.816406 49.6153085,26.828125 49.6114025,26.839844 C49.6035895,26.855469 49.5957775,26.871094 49.5879655,26.886719 C49.5840585,26.898438 49.5801525,26.90625 49.5762465,26.917969 C49.5684335,26.9375 49.5645275,26.953125 49.5606215,26.96875 C49.5567155,26.980469 49.5528085,26.988281 49.5528085,27 C49.5489025,27.019531 49.5449965,27.039062 49.5410895,27.058594 C49.5410895,27.066406 49.5371835,27.074219 49.5371835,27.082031 C49.5332775,27.109375 49.5332775,27.132812 49.5332775,27.15625 C49.5332775,27.160156 49.5332775,27.164062 49.5332775,27.167969 C49.5332775,27.199219 49.5371835,27.226562 49.5449965,27.257812 C49.5449965,27.261719 49.5449965,27.269531 49.5449965,27.273438 C49.5528085,27.296875 49.5567155,27.324219 49.5645275,27.347656 C49.5684335,27.359375 49.5723395,27.371094 49.5762465,27.382812 C49.5840585,27.402344 49.5879655,27.425781 49.5996835,27.445312 C49.6035895,27.457031 49.6074965,27.464844 49.6114025,27.472656 C49.6621835,27.589844 49.7442155,27.710938 49.8496835,27.828125 C49.9629655,27.953125 50.1074965,28.078125 50.2754655,28.207031 C50.2793715,28.207031 50.2793715,28.207031 50.2793715,28.210938 C50.3262465,28.242188 50.3731215,28.277344 50.4239025,28.3125 C50.4356215,28.320312 50.4434335,28.328125 50.4551525,28.332031 C50.5918715,28.425781 50.7364025,28.515625 50.9004655,28.609375 C50.9395275,28.632812 50.9785895,28.65625 51.0176525,28.675781 C51.0567155,28.699219 51.0957775,28.71875 51.1348395,28.738281 C51.1817155,28.765625 51.2364025,28.792969 51.2871835,28.820312 C51.3223395,28.835938 51.3535895,28.855469 51.3887465,28.871094 C51.4668715,28.910156 51.5489025,28.949219 51.6309335,28.988281 C51.6426525,28.996094 51.6504655,29 51.6621835,29.003906 C51.7520275,29.046875 51.8418715,29.085938 51.9317155,29.121094 C51.9707775,29.136719 52.0059335,29.152344 52.0449965,29.167969 C52.0528085,29.171875 52.0606215,29.175781 52.0684335,29.175781 C52.9043715,29.503906 53.9356215,29.722656 54.8457775,29.761719 C54.9121835,29.765625 54.9824965,29.769531 55.0489025,29.769531 L55.0528085,29.769531 C55.0840585,29.769531 55.1114025,29.769531 55.1426525,29.765625 C55.2129655,29.765625 55.2832775,29.765625 55.3535895,29.765625 C55.3614025,29.765625 55.3692155,29.765625 55.3770275,29.761719 C56.8574965,29.714844 58.0723395,29.332031 59.1074965,28.574219 C59.1074965,28.570312 59.1074965,28.570312 59.1074965,28.570312 C60.2559335,27.703125 60.8887465,26.480469 60.8887465,25.132812 C60.8887465,25.046875 60.8848395,24.960938 60.8809335,24.878906 C60.8809335,24.847656 60.8770275,24.816406 60.8770275,24.789062"
          id="Path9"
        ></path>
        <path
          d="M70.4278085,13.582031 C70.4239025,13.582031 70.4199965,13.582031 70.4160895,13.582031 C68.5957775,13.582031 66.8770275,14.324219 65.6348395,15.636719 L65.6348395,14.519531 C65.6348395,14.003906 65.2364025,13.582031 64.7324965,13.582031 C64.6973395,13.582031 64.6660895,13.585938 64.6348395,13.585938 C64.4121835,13.609375 64.2168715,13.707031 64.0723395,13.851562 C64.0684335,13.851562 64.0684335,13.851562 64.0645275,13.855469 C64.0528085,13.871094 64.0371835,13.886719 64.0254655,13.902344 C64.0176525,13.90625 64.0098395,13.914062 64.0059335,13.921875 C63.9942155,13.933594 63.9864025,13.945312 63.9785895,13.957031 C63.9707775,13.96875 63.9629655,13.980469 63.9512465,13.992188 C63.9473395,14 63.9434335,14.007812 63.9395275,14.015625 C63.9278085,14.035156 63.9160895,14.054688 63.9043715,14.070312 C63.9043715,14.074219 63.9043715,14.078125 63.9004655,14.082031 C63.8887465,14.105469 63.8770275,14.128906 63.8653085,14.152344 C63.8457775,14.210938 63.8262465,14.269531 63.8145275,14.328125 C63.8145275,14.332031 63.8145275,14.335938 63.8106215,14.335938 C63.8067155,14.367188 63.8028085,14.394531 63.7989025,14.421875 C63.7989025,14.453125 63.7949965,14.484375 63.7949965,14.519531 L63.7949965,29.027344 L63.7832775,29.089844 L63.8301525,29.128906 C63.8301525,29.148438 63.8340585,29.175781 63.8457775,29.203125 C63.8457775,29.207031 63.8496835,29.214844 63.8496835,29.21875 C63.8574965,29.238281 63.8692155,29.261719 63.8887465,29.28125 C64.0098395,29.511719 64.2324965,29.6875 64.4942155,29.765625 L64.5137465,29.769531 L64.7324965,29.769531 C64.7676525,29.769531 64.8028085,29.769531 64.8379655,29.765625 C64.8614025,29.761719 64.8848395,29.753906 64.9082775,29.75 C64.9199965,29.75 64.9278085,29.75 64.9395275,29.746094 C64.9707775,29.738281 65.0020275,29.730469 65.0332775,29.71875 C65.0332775,29.71875 65.0332775,29.71875 65.0371835,29.71875 C65.2012465,29.660156 65.3418715,29.558594 65.4356215,29.421875 C65.4395275,29.417969 65.4434335,29.414062 65.4473395,29.410156 C65.5098395,29.34375 65.5449965,29.273438 65.5801525,29.175781 C65.5840585,29.164062 65.5879655,29.15625 65.5879655,29.148438 C65.5918715,29.144531 65.5918715,29.144531 65.5918715,29.140625 C65.6074965,29.09375 65.6192155,29.046875 65.6309335,29 L65.6348395,28.984375 L65.6348395,20.203125 C65.6973395,17.585938 67.8379655,15.457031 70.4082775,15.453125 C70.4121835,15.453125 70.4121835,15.453125 70.4160895,15.453125 C73.0332775,15.453125 75.1621835,17.582031 75.1621835,20.199219 L75.1621835,28.832031 C75.1621835,28.867188 75.1660895,28.898438 75.1699965,28.929688 C75.1895275,29.15625 75.2871835,29.351562 75.4317155,29.496094 C75.4317155,29.496094 75.4356215,29.496094 75.4356215,29.5 C75.4512465,29.515625 75.4668715,29.527344 75.4824965,29.542969 C75.4903085,29.550781 75.4942155,29.554688 75.5020275,29.558594 C75.5137465,29.570312 75.5254655,29.578125 75.5371835,29.585938 C75.5489025,29.597656 75.5606215,29.605469 75.5723395,29.613281 C75.5840585,29.617188 75.5918715,29.621094 75.5996835,29.628906 C75.6153085,29.640625 75.6348395,29.648438 75.6504655,29.660156 C75.6543715,29.660156 75.6582775,29.664062 75.6660895,29.664062 C75.6856215,29.675781 75.7090585,29.6875 75.7324965,29.699219 C75.7324965,29.699219 75.7364025,29.699219 75.7364025,29.699219 C75.7910895,29.722656 75.8496835,29.738281 75.9082775,29.75 C75.9160895,29.75 75.9199965,29.753906 75.9239025,29.753906 C75.9512465,29.757812 75.9746835,29.761719 76.0020275,29.765625 C76.0332775,29.769531 76.0645275,29.769531 76.0996835,29.769531 C76.1309335,29.769531 76.1621835,29.769531 76.1934335,29.765625 C76.2207775,29.761719 76.2481215,29.757812 76.2715585,29.753906 C76.2754655,29.753906 76.2832775,29.75 76.2871835,29.75 C76.3496835,29.738281 76.4043715,29.722656 76.4629655,29.699219 C76.4864025,29.6875 76.5098395,29.675781 76.5332775,29.664062 C76.5371835,29.664062 76.5410895,29.660156 76.5449965,29.660156 C76.5645275,29.648438 76.5801525,29.640625 76.5996835,29.628906 C76.6074965,29.621094 76.6153085,29.617188 76.6231215,29.613281 C76.6348395,29.605469 76.6465585,29.597656 76.6582775,29.585938 C76.6699965,29.578125 76.6856215,29.570312 76.6973395,29.558594 C76.7012465,29.554688 76.7090585,29.550781 76.7129655,29.542969 C76.7285895,29.527344 76.7481215,29.515625 76.7637465,29.5 C76.7637465,29.496094 76.7637465,29.496094 76.7637465,29.496094 C76.9121835,29.351562 77.0098395,29.15625 77.0293715,28.929688 C77.0332775,28.898438 77.0332775,28.867188 77.0332775,28.832031 L77.0332775,20.199219 C77.0332775,16.554688 74.0723395,13.589844 70.4278085,13.582031"
          id="Path10"
        ></path>
        <path
          d="M87.2793715,13.550781 C91.5215585,13.550781 94.9707775,17.1875 94.9707775,21.660156 C94.9707775,26.132812 91.5215585,29.769531 87.2793715,29.769531 C87.1465585,29.769531 87.0176525,29.765625 86.8887465,29.757812 C86.8692155,29.757812 86.8535895,29.757812 86.8340585,29.753906 C86.7207775,29.75 86.6074965,29.738281 86.4981215,29.726562 C86.4942155,29.726562 86.4903085,29.726562 86.4864025,29.726562 C84.8106215,29.542969 83.2442155,28.777344 81.9981215,27.523438 C81.9473395,27.472656 81.8926525,27.421875 81.8457775,27.367188 C81.8418715,27.367188 81.8418715,27.363281 81.8379655,27.363281 C81.8106215,27.335938 81.7871835,27.304688 81.7598395,27.273438 C81.7012465,27.210938 81.6426525,27.144531 81.5840585,27.078125 C81.5371835,27.027344 81.4942155,26.96875 81.4473395,26.914062 C81.4160895,26.871094 81.3809335,26.828125 81.3457775,26.785156 C81.2754655,26.699219 81.2090585,26.609375 81.1465585,26.519531 C81.1387465,26.507812 81.1309335,26.496094 81.1231215,26.484375 C80.3614025,25.417969 79.8653085,24.1875 79.6778085,22.882812 C79.6582775,22.761719 79.6465585,22.640625 79.6348395,22.519531 C79.6309335,22.507812 79.6309335,22.492188 79.6270275,22.476562 C79.6153085,22.363281 79.6074965,22.253906 79.6035895,22.140625 C79.5996835,22.117188 79.5996835,22.09375 79.5996835,22.066406 C79.5918715,21.933594 79.5879655,21.796875 79.5879655,21.660156 C79.5879655,21.523438 79.5918715,21.386719 79.5996835,21.253906 C79.5996835,21.226562 79.5996835,21.203125 79.6035895,21.179688 C79.6074965,21.066406 79.6153085,20.953125 79.6270275,20.84375 C79.6309335,20.828125 79.6309335,20.8125 79.6348395,20.800781 C79.6465585,20.679688 79.6582775,20.558594 79.6778085,20.4375 C79.8653085,19.132812 80.3614025,17.902344 81.1231215,16.835938 C81.1270275,16.824219 81.1348395,16.8125 81.1426525,16.804688 C81.2090585,16.710938 81.2754655,16.621094 81.3457775,16.53125 C81.3770275,16.492188 81.4121835,16.453125 81.4434335,16.410156 C81.4903085,16.351562 81.5371835,16.296875 81.5840585,16.238281 C81.6387465,16.175781 81.6934335,16.117188 81.7520275,16.054688 C81.7793715,16.023438 81.8106215,15.988281 81.8379655,15.957031 C81.8418715,15.957031 81.8418715,15.953125 81.8457775,15.953125 C81.8887465,15.902344 81.9395275,15.855469 81.9864025,15.808594 C83.2324965,14.550781 84.8028085,13.777344 86.4864025,13.59375 C86.4903085,13.59375 86.4942155,13.59375 86.4981215,13.59375 C86.6074965,13.582031 86.7207775,13.574219 86.8340585,13.566406 C86.8535895,13.566406 86.8692155,13.5625 86.8887465,13.5625 C87.0176525,13.554688 87.1465585,13.550781 87.2793715,13.550781 Z M93.0684335,21.023438 C93.0684335,21.019531 93.0684335,21.019531 93.0684335,21.015625 C92.9317155,19.609375 92.3535895,18.339844 91.4903085,17.359375 C91.4512465,17.316406 91.4160895,17.273438 91.3770275,17.230469 C91.3535895,17.207031 91.3301525,17.183594 91.3067155,17.160156 C91.2598395,17.113281 91.2168715,17.066406 91.1699965,17.019531 C91.1270275,16.976562 91.0801525,16.9375 91.0371835,16.898438 C91.0098395,16.875 90.9864025,16.847656 90.9590585,16.824219 C90.8887465,16.761719 90.8184335,16.703125 90.7481215,16.644531 C90.7481215,16.644531 90.7442155,16.644531 90.7442155,16.640625 C89.9278085,15.980469 88.9473395,15.546875 87.8926525,15.425781 C87.8809335,15.425781 87.8731215,15.421875 87.8653085,15.421875 C87.7832775,15.410156 87.7051525,15.40625 87.6231215,15.402344 C87.6035895,15.398438 87.5879655,15.398438 87.5723395,15.398438 C87.4746835,15.390625 87.3770275,15.390625 87.2793715,15.390625 C87.1817155,15.390625 87.0840585,15.390625 86.9864025,15.398438 C86.9707775,15.398438 86.9551525,15.398438 86.9356215,15.402344 C86.8535895,15.40625 86.7754655,15.410156 86.6934335,15.421875 C86.6856215,15.421875 86.6778085,15.425781 86.6660895,15.425781 C85.6114025,15.546875 84.6309335,15.980469 83.8145275,16.640625 C83.8145275,16.644531 83.8106215,16.644531 83.8106215,16.644531 C83.7403085,16.703125 83.6699965,16.761719 83.5996835,16.824219 C83.5723395,16.847656 83.5489025,16.871094 83.5215585,16.894531 C83.4785895,16.9375 83.4317155,16.976562 83.3887465,17.019531 C83.3457775,17.0625 83.3028085,17.109375 83.2559335,17.15625 C83.2324965,17.179688 83.2090585,17.203125 83.1817155,17.230469 C83.1465585,17.269531 83.1114025,17.3125 83.0723395,17.355469 C82.2090585,18.335938 81.6270275,19.609375 81.4903085,21.015625 C81.4903085,21.019531 81.4903085,21.019531 81.4903085,21.023438 C81.4824965,21.113281 81.4746835,21.203125 81.4707775,21.296875 C81.4707775,21.3125 81.4668715,21.328125 81.4668715,21.34375 C81.4629655,21.449219 81.4590585,21.554688 81.4590585,21.660156 C81.4590585,25.09375 84.0996835,27.898438 87.2793715,27.898438 C90.4590585,27.898438 93.0996835,25.09375 93.0996835,21.660156 C93.0996835,21.554688 93.0957775,21.449219 93.0918715,21.34375 C93.0918715,21.328125 93.0879655,21.3125 93.0879655,21.296875 C93.0840585,21.203125 93.0762465,21.113281 93.0684335,21.023438 Z"
          id="Combined-Shape4"
        ></path>
        <path
          d="M117.576246,13.953125 C117.568433,13.945312 117.564527,13.9375 117.556715,13.929688 C117.462965,13.8125 117.337965,13.71875 117.197339,13.660156 C117.197339,13.660156 117.197339,13.660156 117.193433,13.660156 C117.177808,13.648438 117.158277,13.644531 117.142652,13.636719 C117.134839,13.636719 117.127027,13.632812 117.115308,13.628906 C116.990308,13.585938 116.853589,13.578125 116.720777,13.597656 C116.720777,13.597656 116.716871,13.597656 116.716871,13.597656 C116.447339,13.640625 116.189527,13.804688 116.044996,14.046875 C116.044996,14.046875 116.044996,14.046875 116.041089,14.046875 C116.021558,14.085938 115.998121,14.125 115.982496,14.164062 L115.978589,14.167969 C115.978589,14.167969 115.978589,14.171875 115.978589,14.171875 L111.502027,26.425781 L107.986402,18.058594 C107.951246,17.980469 107.904371,17.910156 107.849683,17.84375 C107.658277,17.621094 107.365308,17.480469 107.064527,17.480469 C107.017652,17.480469 106.974683,17.480469 106.927808,17.492188 C106.923902,17.492188 106.919996,17.492188 106.912183,17.492188 C106.599683,17.546875 106.306715,17.765625 106.173902,18.058594 C106.173902,18.0625 106.173902,18.0625 106.173902,18.0625 L102.658277,26.429688 L100.955152,21.800781 L98.1504655,14.171875 C98.1348395,14.128906 98.1192155,14.09375 98.0996835,14.054688 C98.0957775,14.050781 98.0957775,14.050781 98.0918715,14.046875 C98.0059335,13.886719 97.8692155,13.761719 97.7051525,13.683594 C97.7051525,13.683594 97.7012465,13.683594 97.7012465,13.679688 C97.6192155,13.644531 97.5332775,13.617188 97.4434335,13.601562 C97.4356215,13.601562 97.4317155,13.601562 97.4239025,13.597656 C97.3809335,13.59375 97.3340585,13.589844 97.2910895,13.589844 C97.2910895,13.589844 97.2871835,13.589844 97.2871835,13.589844 C97.2754655,13.589844 97.2676525,13.589844 97.2598395,13.589844 C97.2403085,13.589844 97.2207775,13.589844 97.2012465,13.59375 C97.1895275,13.59375 97.1739025,13.597656 97.1621835,13.597656 C97.1426525,13.601562 97.1270275,13.601562 97.1114025,13.605469 C97.0996835,13.609375 97.0879655,13.609375 97.0762465,13.613281 C97.0567155,13.617188 97.0371835,13.621094 97.0176525,13.628906 C97.0098395,13.632812 97.0020275,13.632812 96.9942155,13.636719 C96.9746835,13.644531 96.9551525,13.648438 96.9356215,13.660156 C96.9356215,13.660156 96.9356215,13.660156 96.9317155,13.660156 C96.7715585,13.730469 96.6426525,13.851562 96.5489025,13.992188 C96.5449965,14 96.5410895,14.003906 96.5371835,14.011719 C96.5332775,14.019531 96.5293715,14.027344 96.5254655,14.035156 C96.4551525,14.152344 96.4121835,14.289062 96.3965585,14.425781 C96.3809335,14.570312 96.4004655,14.722656 96.4590585,14.863281 L99.7051525,23.585938 L101.787183,29.179688 C101.787183,29.179688 101.787183,29.179688 101.787183,29.183594 C101.873121,29.394531 101.998121,29.539062 102.169996,29.617188 C102.173902,29.621094 102.181715,29.625 102.185621,29.628906 C102.189527,29.632812 102.193433,29.636719 102.201246,29.640625 C102.201246,29.644531 102.205152,29.644531 102.209058,29.648438 C102.216871,29.652344 102.220777,29.65625 102.228589,29.664062 C102.232496,29.664062 102.232496,29.664062 102.236402,29.664062 C102.267652,29.683594 102.306715,29.699219 102.357496,29.703125 C102.361402,29.703125 102.365308,29.707031 102.369215,29.707031 C102.384839,29.710938 102.400465,29.71875 102.416089,29.722656 C102.423902,29.722656 102.431715,29.726562 102.439527,29.726562 C102.537183,29.757812 102.599683,29.769531 102.677808,29.769531 C102.720777,29.769531 102.759839,29.765625 102.802808,29.757812 C102.834058,29.753906 102.869215,29.746094 102.900465,29.734375 C102.908277,29.730469 102.916089,29.730469 102.923902,29.726562 C102.955152,29.71875 102.986402,29.707031 103.017652,29.691406 C103.029371,29.6875 103.041089,29.683594 103.052808,29.675781 C103.072339,29.664062 103.095777,29.652344 103.119215,29.640625 C103.134839,29.628906 103.154371,29.617188 103.173902,29.605469 C103.185621,29.597656 103.197339,29.585938 103.209058,29.578125 C103.236402,29.558594 103.259839,29.539062 103.287183,29.515625 C103.291089,29.511719 103.294996,29.507812 103.298902,29.5 C103.326246,29.472656 103.353589,29.445312 103.380933,29.414062 C103.380933,29.410156 103.384839,29.40625 103.388746,29.402344 C103.412183,29.371094 103.435621,29.335938 103.455152,29.300781 C103.474683,29.261719 103.494215,29.21875 103.509839,29.175781 L103.513746,29.164062 L103.525465,29.148438 L103.537183,29.121094 L107.064527,20.699219 L110.623121,29.152344 C110.650465,29.238281 110.693433,29.316406 110.752027,29.390625 C110.759839,29.402344 110.767652,29.410156 110.775465,29.421875 C110.794996,29.445312 110.814527,29.46875 110.837965,29.492188 C110.849683,29.5 110.861402,29.511719 110.873121,29.519531 C110.892652,29.539062 110.916089,29.558594 110.939527,29.578125 C110.951246,29.585938 110.959058,29.59375 110.970777,29.597656 C110.998121,29.617188 111.025465,29.636719 111.052808,29.652344 C111.060621,29.65625 111.068433,29.660156 111.076246,29.664062 C111.107496,29.679688 111.134839,29.695312 111.169996,29.707031 C111.177808,29.710938 111.185621,29.714844 111.197339,29.714844 C111.224683,29.726562 111.252027,29.738281 111.283277,29.746094 C111.322339,29.753906 111.361402,29.761719 111.396558,29.769531 L111.513746,29.769531 C111.560621,29.769531 111.603589,29.765625 111.646558,29.757812 C111.658277,29.757812 111.666089,29.757812 111.677808,29.753906 C111.716871,29.746094 111.752027,29.738281 111.787183,29.726562 C111.798902,29.722656 111.806715,29.71875 111.814527,29.714844 C111.853589,29.703125 111.892652,29.683594 111.927808,29.664062 C111.931715,29.664062 111.935621,29.660156 111.939527,29.660156 C111.982496,29.632812 112.025465,29.605469 112.060621,29.578125 C112.216871,29.460938 112.330152,29.308594 112.408277,29.121094 L112.408277,29.117188 L114.607496,23.195312 L117.701246,14.863281 C117.822339,14.570312 117.775465,14.25 117.607496,14 C117.599683,13.984375 117.587965,13.96875 117.576246,13.953125"
          id="Path11"
        ></path>
        <path
          d="M167.252027,14.214844 C167.252027,14.199219 167.248121,14.179688 167.244215,14.164062 C167.244215,14.152344 167.240308,14.140625 167.236402,14.128906 C167.232496,14.109375 167.228589,14.089844 167.224683,14.074219 C167.220777,14.0625 167.216871,14.050781 167.212965,14.042969 C167.209058,14.019531 167.201246,14 167.189527,13.980469 C167.189527,13.972656 167.185621,13.96875 167.181715,13.960938 C167.169996,13.933594 167.158277,13.910156 167.142652,13.886719 C167.142652,13.882812 167.142652,13.882812 167.142652,13.882812 C167.095777,13.800781 167.037183,13.730469 166.970777,13.667969 C166.966871,13.664062 166.966871,13.664062 166.966871,13.664062 C166.962965,13.660156 166.962965,13.660156 166.962965,13.660156 C166.630933,13.328125 166.162183,13.285156 165.794996,13.542969 C165.783277,13.550781 165.775465,13.558594 165.763746,13.5625 C165.748121,13.574219 165.732496,13.585938 165.716871,13.597656 C165.693433,13.621094 165.669996,13.640625 165.646558,13.664062 C165.646558,13.664062 165.642652,13.664062 165.642652,13.667969 L156.490308,22.589844 L156.490308,7.667969 C156.490308,7.636719 156.490308,7.605469 156.486402,7.574219 C156.451246,7.230469 156.220777,6.945312 155.908277,6.8125 C155.904371,6.8125 155.904371,6.808594 155.900465,6.808594 C155.880933,6.800781 155.861402,6.792969 155.841871,6.789062 C155.834058,6.785156 155.822339,6.78125 155.810621,6.777344 C155.794996,6.773438 155.779371,6.769531 155.759839,6.765625 C155.748121,6.761719 155.732496,6.757812 155.716871,6.753906 C155.701246,6.75 155.681715,6.746094 155.666089,6.746094 C155.650465,6.742188 155.638746,6.742188 155.623121,6.738281 C155.587965,6.734375 155.556715,6.734375 155.525465,6.734375 C155.013746,6.734375 154.587965,7.160156 154.587965,7.667969 L154.587965,28.832031 C154.587965,29.34375 155.013746,29.769531 155.525465,29.769531 C155.556715,29.769531 155.591871,29.769531 155.623121,29.765625 C155.627027,29.765625 155.630933,29.761719 155.638746,29.761719 C155.666089,29.757812 155.693433,29.757812 155.716871,29.75 C155.724683,29.75 155.732496,29.746094 155.740308,29.746094 C155.763746,29.738281 155.787183,29.734375 155.810621,29.726562 C155.814527,29.726562 155.818433,29.722656 155.822339,29.722656 C156.181715,29.609375 156.447339,29.300781 156.486402,28.929688 C156.490308,28.898438 156.490308,28.867188 156.490308,28.832031 L156.490308,25.261719 L159.572339,22.183594 L165.560621,29.410156 C165.599683,29.472656 165.642652,29.527344 165.697339,29.570312 C165.709058,29.582031 165.716871,29.589844 165.728589,29.597656 C165.744215,29.609375 165.759839,29.621094 165.775465,29.628906 C165.794996,29.644531 165.814527,29.652344 165.834058,29.664062 C165.841871,29.667969 165.853589,29.675781 165.861402,29.679688 C165.888746,29.691406 165.912183,29.699219 165.939527,29.710938 C165.947339,29.714844 165.955152,29.714844 165.959058,29.71875 C165.990308,29.726562 166.017652,29.734375 166.048902,29.742188 C166.052808,29.742188 166.060621,29.746094 166.068433,29.746094 C166.099683,29.753906 166.127027,29.757812 166.162183,29.761719 C166.169996,29.761719 166.177808,29.761719 166.185621,29.765625 C166.224683,29.765625 166.263746,29.769531 166.306715,29.769531 C166.369215,29.769531 166.427808,29.765625 166.482496,29.757812 C166.486402,29.757812 166.486402,29.757812 166.486402,29.757812 C166.595777,29.742188 166.697339,29.707031 166.791089,29.660156 C166.794996,29.660156 166.794996,29.65625 166.794996,29.65625 C166.837965,29.632812 166.880933,29.605469 166.923902,29.574219 L166.935621,29.5625 C167.291089,29.207031 167.345777,28.722656 167.087965,28.320312 C167.064527,28.285156 167.041089,28.25 167.013746,28.214844 L160.931715,20.828125 L166.970777,14.992188 C167.130933,14.828125 167.228589,14.628906 167.252027,14.414062 C167.252027,14.410156 167.252027,14.40625 167.255933,14.402344 C167.255933,14.382812 167.255933,14.359375 167.255933,14.339844 C167.255933,14.328125 167.259839,14.316406 167.259839,14.308594 C167.259839,14.300781 167.259839,14.296875 167.259839,14.292969 C167.259839,14.277344 167.255933,14.265625 167.255933,14.25 C167.255933,14.238281 167.252027,14.226562 167.252027,14.214844"
          id="Path12"
        ></path>
      </g>
    </g>
  </svg>

  <!-- AWS -->
  <svg
    v-else-if="isSame('AWS')"
    height="1465"
    viewBox="-.1 1.1 304.9 179.8"
    width="2500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
      fill="#252f3e"
    />
    <g clip-rule="evenodd" fill="#f90" fill-rule="evenodd">
      <path
        d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"
      />
      <path
        d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"
      />
    </g>
  </svg>

  <!-- Dagster -->
  <svg
    v-else-if="isSame('Dagster')"
    width="170"
    height="36"
    viewBox="0 0 170 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M61.7624 0.55542H64.939V28.969H61.7624V26.4629H61.6828C60.4908 28.0129 58.5843 29.5231 55.3253 29.5231C50.2392 29.5231 46.186 25.5096 46.186 18.8339C46.186 12.1581 50.2392 8.14469 55.3253 8.14469C58.5843 8.14469 60.4908 9.57531 61.6828 11.3242H61.7624V0.55542ZM61.7624 18.8339C61.7624 14.0661 59.4182 10.9264 55.6435 10.9264C51.471 10.9264 49.3641 14.8602 49.3641 18.8339C49.3641 22.8075 51.471 26.7414 55.6435 26.7414C59.4182 26.7414 61.7624 23.6017 61.7624 18.8339Z"
      fill="#163B36"
    />
    <path
      d="M76.8032 10.9265C72.9489 10.9265 71.676 12.0389 71.4785 14.9797H68.299C68.4979 11.0856 70.9216 8.14478 76.8032 8.14478C80.6575 8.14478 84.114 9.65495 84.114 14.5378V24.3931C84.114 25.9828 84.3982 26.8565 86.4184 26.6179V28.8441C85.8213 29.0651 85.1882 29.1726 84.5516 29.1609C82.6436 29.1609 81.4914 28.6452 80.936 26.419H80.8507C79.5792 28.3269 77.3147 29.5189 73.9775 29.5189C69.8845 29.5189 67.3003 27.1748 67.3003 23.7566C67.3003 19.1479 70.717 17.956 75.9664 16.9629C79.3846 16.3265 80.9388 15.8889 80.9388 13.863C80.936 12.2775 80.0608 10.9265 76.8032 10.9265ZM80.936 21.1383V17.7613C80.3393 18.3566 78.3915 18.9135 76.2477 19.3511C72.3124 20.185 70.4798 21.1781 70.4798 23.6018C70.4798 25.5907 71.6717 26.7415 74.2957 26.7415C78.0747 26.7415 80.936 25.0324 80.936 21.1383Z"
      fill="#163B36"
    />
    <path
      d="M102.445 8.70168H105.624V27.8539C105.624 33.2524 102.208 36 96.6442 36C91.0808 36 87.782 33.0592 87.4652 29.607H90.6532C91.051 31.6726 92.7202 33.2226 96.495 33.2226C100.27 33.2226 102.455 31.5931 102.455 27.824V24.7554H102.375C101.183 26.5028 99.2767 27.9334 95.9381 27.9334C90.9316 27.9334 86.8784 24.7156 86.8784 18.0398C86.8784 11.364 90.9316 8.14478 95.9381 8.14478C99.2767 8.14478 101.183 9.65496 102.375 11.2049H102.455L102.445 8.70168ZM102.445 18.0398C102.445 13.2706 100.101 10.9265 96.3259 10.9265C92.1534 10.9265 90.048 14.0662 90.048 18.0398C90.048 22.0134 92.1534 25.1517 96.3259 25.1517C100.106 25.1517 102.445 22.8076 102.445 18.0398Z"
      fill="#163B36"
    />
    <path
      d="M125.16 23.4043C125.16 27.0981 121.783 29.5232 117.173 29.5232C110.975 29.5232 108.113 26.5823 107.915 22.2123H111.094C111.292 24.4769 112.089 26.7415 117.173 26.7415C120.63 26.7415 121.981 24.9528 121.981 23.6018C121.981 20.6624 119.318 20.5033 116.419 19.7872C113.319 19.0329 108.709 18.6748 108.709 13.907C108.709 10.7276 111.53 8.14478 116.299 8.14478C121.346 8.14478 124.048 11.006 124.365 14.5023H121.187C120.868 12.9538 120.114 10.9265 116.299 10.9265C113.438 10.9265 111.895 12.0786 111.895 13.6684C111.895 16.0523 114.637 16.2512 117.459 16.9274C121.067 17.8011 125.16 18.3964 125.16 23.4043Z"
      fill="#163B36"
    />
    <path
      d="M135.905 11.4834H131.927V23.6814C131.927 25.9871 133.205 26.3807 135.905 26.186V28.9691C135.121 29.1332 134.322 29.2132 133.521 29.2078C130.821 29.2078 128.751 28.1352 128.751 24.0024V11.4863H125.768V8.70174H128.751V1.94641H131.931V8.70174H135.909L135.905 11.4834Z"
      fill="#163B36"
    />
    <path
      d="M152.8 22.728H155.979C154.945 26.5028 152.045 29.5232 146.999 29.5232C140.839 29.5232 137.104 25.1915 137.104 18.834C137.104 12.0786 140.919 8.14478 146.84 8.14478C153.197 8.14478 156.297 12.4764 156.297 19.6679H140.283C140.283 23.3247 142.468 26.7415 146.88 26.7415C150.933 26.7415 152.442 24.1189 152.8 22.728ZM140.283 16.8933H153.118C153.118 13.6343 150.654 10.9265 146.84 10.9265C143.025 10.9265 140.283 13.6258 140.283 16.8933Z"
      fill="#163B36"
    />
    <path
      d="M169.409 8.26419V11.4437H169.329C164.925 10.7333 161.859 13.8276 161.859 18.1592V28.9692H158.68V8.70175H161.859V12.7152H161.939C163.011 10.0528 164.638 8.14485 167.542 8.14485C168.166 8.13835 168.79 8.17823 169.409 8.26419Z"
      fill="#163B36"
    />
    <path
      d="M11.9886 34.541C11.9892 34.7421 12.0312 34.941 12.1121 35.1251C12.1929 35.3093 12.3109 35.4748 12.4585 35.6113C12.6062 35.7478 12.7804 35.8524 12.9703 35.9185C13.1601 35.9847 13.3616 36.011 13.5621 35.9957C21.1824 35.4502 28.3796 30.0573 30.6774 21.6341C30.7981 21.1496 31.1616 20.9067 31.6459 20.9067C31.8941 20.9167 32.1284 21.0242 32.298 21.2058C32.4676 21.3874 32.5588 21.6286 32.5519 21.877C32.5519 23.7552 30.1377 28.6636 26.6854 31.5121C26.5094 31.6601 26.3692 31.846 26.275 32.0558C26.1808 32.2656 26.1352 32.494 26.1415 32.7239C26.145 32.9109 26.1854 33.0953 26.2603 33.2666C26.3351 33.4379 26.4431 33.5927 26.5779 33.7222C26.7128 33.8517 26.8718 33.9532 27.046 34.0211C27.2202 34.089 27.406 34.1217 27.5929 34.1176C27.8953 34.1176 28.3796 33.9358 28.9846 33.3902C31.3988 31.2081 36 25.0878 36 18.3609C36 8.4985 28.3753 0 17.7344 0C8.23948 0 0.0141602 7.75691 0.0141602 16.7257C0.0141602 22.6641 4.73179 27.1478 10.9604 27.1478C15.7391 27.1478 20.1543 23.7552 21.3642 19.0882C21.4849 18.6038 21.8471 18.3609 22.3313 18.3609C22.5797 18.3709 22.8141 18.4783 22.984 18.6598C23.1538 18.8414 23.2453 19.0826 23.2388 19.3312C23.2388 21.4522 19.2468 28.8497 11.1422 28.8497C9.20658 28.8497 6.78812 28.3042 5.09392 27.3339C4.86712 27.2239 4.62007 27.162 4.36824 27.152C4.17542 27.1446 3.98315 27.1772 3.80352 27.2477C3.62389 27.3182 3.4608 27.4252 3.32448 27.5618C3.18817 27.6985 3.08158 27.8618 3.01144 28.0417C2.94129 28.2215 2.9091 28.4139 2.91688 28.6068C2.92471 28.8539 2.99547 29.0949 3.12247 29.3069C3.24946 29.519 3.42848 29.6951 3.64256 29.8186C5.88067 31.0972 8.54197 31.7579 11.2629 31.7579C18.0369 31.7579 24.2059 27.152 26.0208 20.3654C26.1415 19.881 26.505 19.638 26.9879 19.638C27.2363 19.648 27.4707 19.7554 27.6405 19.937C27.8104 20.1186 27.9019 20.3598 27.8953 20.6084C27.8953 23.3957 22.9363 32.3645 13.3803 33.0919C13.0106 33.1193 12.664 33.2824 12.4072 33.5499C12.1503 33.8173 12.0012 34.1703 11.9886 34.541Z"
      fill="#4F43DD"
    />
    <path
      d="M21.4581 11.3328C22.7624 11.323 24.0427 11.6836 25.1504 12.3727C25.2623 11.7598 25.3241 11.1388 25.335 10.5159C25.335 7.639 23.1423 5.06189 20.4725 5.06189C18.3963 5.06189 17.0983 6.78233 17.0983 8.90767C17.0884 10.0558 17.4917 11.1692 18.2344 12.0445C19.2407 11.5645 20.3433 11.3211 21.4581 11.3328Z"
      fill="white"
    />
    <path
      d="M27.7139 21.7549C28.0845 20.4877 28.2478 19.6083 28.2478 19.0371C28.2365 18.7905 28.1308 18.5577 27.9527 18.3868C27.7745 18.216 27.5375 18.1202 27.2907 18.1194C27.0607 18.1237 26.8389 18.2047 26.6603 18.3496C26.4817 18.4946 26.3567 18.695 26.3051 18.9192C26.2043 19.3355 25.9884 20.4635 25.7754 21.1795C25.8634 20.9115 25.9439 20.6392 26.0168 20.3626C26.1375 19.8768 26.5011 19.6352 26.9839 19.6352C27.2322 19.6449 27.4666 19.752 27.6365 19.9333C27.8063 20.1147 27.8979 20.3557 27.8914 20.6042C27.88 20.9947 27.8174 21.3821 27.7053 21.7563L27.7139 21.7549Z"
      fill="#352D8E"
    />
    <path
      d="M32.8546 20.4308C32.8429 20.1845 32.7374 19.9521 32.5596 19.7814C32.3818 19.6106 32.1453 19.5146 31.8988 19.5131C31.6692 19.5177 31.4476 19.5988 31.2693 19.7437C31.091 19.8886 30.9662 20.089 30.9147 20.3129C30.8124 20.7391 30.5923 21.8842 30.3765 22.5988H30.3864C30.4915 22.2805 30.5895 21.9581 30.6704 21.6299C30.7911 21.144 31.1547 20.9025 31.639 20.9025C31.8871 20.9121 32.1214 21.0193 32.291 21.2007C32.4606 21.3821 32.5519 21.6231 32.545 21.8714C32.5381 22.173 32.4966 22.4728 32.4214 22.765C32.7225 21.708 32.8546 20.9437 32.8546 20.4308Z"
      fill="#352D8E"
    />
    <path
      d="M21.4578 11.3328C22.106 11.3315 22.7514 11.418 23.3764 11.5899C23.7046 11.1423 23.8685 10.5952 23.8407 10.0408C23.813 9.48641 23.5951 8.9585 23.2239 8.54593C22.8527 8.13335 22.3507 7.86131 21.8025 7.77557C21.2542 7.68983 20.6932 7.79563 20.2138 8.07517L21.2079 9.7118L19.3461 8.90627C19.0939 9.31335 18.9675 9.78585 18.9827 10.2645C18.9978 10.7432 19.1539 11.2067 19.4313 11.597C20.092 11.4189 20.7736 11.33 21.4578 11.3328Z"
      fill="#163B36"
    />
    <path
      d="M7.11494 21.8657C7.89925 21.8657 8.53506 21.2296 8.53506 20.445C8.53506 19.6604 7.89925 19.0243 7.11494 19.0243C6.33063 19.0243 5.69482 19.6604 5.69482 20.445C5.69482 21.2296 6.33063 21.8657 7.11494 21.8657Z"
      fill="#352D8E"
    />
    <path
      d="M7.11494 16.1829C7.89925 16.1829 8.53506 15.5469 8.53506 14.7622C8.53506 13.9776 7.89925 13.3416 7.11494 13.3416C6.33063 13.3416 5.69482 13.9776 5.69482 14.7622C5.69482 15.5469 6.33063 16.1829 7.11494 16.1829Z"
      fill="#352D8E"
    />
    <path
      d="M4.27461 19.0243C5.05892 19.0243 5.69473 18.3883 5.69473 17.6037C5.69473 16.819 5.05892 16.183 4.27461 16.183C3.4903 16.183 2.85449 16.819 2.85449 17.6037C2.85449 18.3883 3.4903 19.0243 4.27461 19.0243Z"
      fill="#352D8E"
    />
    <path
      d="M10.6651 27.1449H10.9491C15.7278 27.1449 20.143 23.7524 21.3529 19.0854C21.4736 18.601 21.8357 18.358 22.32 18.358C22.5684 18.368 22.8028 18.4754 22.9726 18.657C23.1425 18.8386 23.234 19.0798 23.2275 19.3284C23.2058 19.8243 23.0937 20.312 22.8966 20.7675C22.9308 20.7146 22.9608 20.659 22.986 20.6013C23.3454 19.7797 23.531 18.8926 23.5314 17.9958C23.5314 16.6021 22.5628 15.6929 21.1725 15.6929C18.7484 15.6929 18.2627 17.8097 17.2402 20.0728C16.1794 22.4226 14.231 24.9642 9.3174 24.9642C4.21207 24.9642 -1.03384 21.3884 0.245682 14.1173C0.261303 14.0264 0.274083 13.9454 0.284024 13.8701C0.0965386 14.8095 0.00141057 15.7649 0 16.7228C0.0142012 22.576 4.58556 27.0086 10.6651 27.1449Z"
      fill="#352D8E"
    />
  </svg>

  <!-- DBT -->
  <svg
    v-else-if="isSame('DBT')"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9 9.376a8.149 8.149 0 0 0-3.042-3.12l1.771.838a10.287 10.287 0 0 1 3.74 3l3.234-5.929a2.855 2.855 0 0 0-.061-2.96 2.726 2.726 0 0 0-3.567-.872L14.1 3.543a4.361 4.361 0 0 1-4.176 0L4.177.408a2.854 2.854 0 0 0-2.96.063 2.726 2.726 0 0 0-.872 3.566L3.55 9.91a4.361 4.361 0 0 1 0 4.177L.423 19.83a2.86 2.86 0 0 0 .085 2.997 2.726 2.726 0 0 0 3.545.839l6.058-3.305a10.288 10.288 0 0 1-3.005-3.746l-.838-1.77a8.148 8.148 0 0 0 3.12 3.042l10.584 5.779a2.726 2.726 0 0 0 3.543-.837 2.87 2.87 0 0 0 .08-3.001L17.9 9.376zm3.38-7.735a1.09 1.09 0 1 1 0 2.181 1.09 1.09 0 0 1 0-2.18zM2.744 3.822a1.09 1.09 0 1 1 0-2.18 1.09 1.09 0 0 1 0 2.18zm0 18.536a1.09 1.09 0 1 1 0-2.18 1.09 1.09 0 0 1 0 2.18zM13.103 10.91a2.174 2.174 0 0 0-2.18 2.168 2.174 2.174 0 0 0 .704 1.61 2.72 2.72 0 1 1 .758-5.386 2.72 2.72 0 0 1 2.314 2.314 2.162 2.162 0 0 0-1.596-.706zm8.177 11.45a1.09 1.09 0 1 1 0-2.182 1.09 1.09 0 0 1 0 2.181z"
    />
  </svg>

  <!-- Databriks -->
  <svg
    v-else-if="isSame('Databriks')"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
    enable-background="new 0 0 640 96"
    xml:space="preserve"
    sodipodi:docname="databricks-icon.svg"
    width="64"
    height="64"
    inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
  >
    <metadata id="metadata45">
      <rdf:RDF
        ><cc:Work rdf:about=""
          ><dc:format>image/svg+xml</dc:format
          ><dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work
      ></rdf:RDF>
    </metadata>
    <defs id="defs43" />
    <sodipodi:namedview
      pagecolor="#ffffff"
      bordercolor="#666666"
      borderopacity="1"
      objecttolerance="10"
      gridtolerance="10"
      guidetolerance="10"
      inkscape:pageopacity="0"
      inkscape:pageshadow="2"
      inkscape:window-width="1920"
      inkscape:window-height="1001"
      id="namedview41"
      showgrid="false"
      inkscape:zoom="2.996365"
      inkscape:cx="53.009829"
      inkscape:cy="48"
      inkscape:window-x="-9"
      inkscape:window-y="-9"
      inkscape:window-maximized="1"
      inkscape:current-layer="Layer_1"
    />

    <g
      id="g50"
      transform="matrix(0.75294118,0,0,0.75294118,1.0541175,18.823529)"
    >
      <path
        style="fill: #db1905"
        inkscape:connector-curvature="0"
        id="path2"
        d="M 0,24.8 V 38.5 L 41.1,60 82.2,38.5 v -13.7 0 L 67.7,17.4 82.2,9.8 v -13.6 0 0 -0.1 L 82.1,-3.8 41.1,-25 0.1,-3.9 H 0 V 9.8 L 14.5,17.4 0,24.8"
      />
      <polygon
        transform="translate(0,-36)"
        style="fill: #ff5224"
        id="polygon4"
        points="0,60.8 41.1,82.3 82.2,60.8 67.7,53.4 41.1,67.3 14.5,53.4 "
      />
      <polygon
        transform="translate(0,-36)"
        style="fill: #ff5224"
        id="polygon6"
        points="82.2,32.2 41.1,53.7 0,32.2 41.1,11 "
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    brand: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    /**
     * Checks if passed value matches with the prop value.
     * @prop {string} value
     * @returns {boolean}
     */
    isSame(value: string): boolean {
      return this.brand?.toLowerCase() === value?.toLowerCase()
    },
  },
})
</script>
