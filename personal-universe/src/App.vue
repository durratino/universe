<script>
import { RouterLink, RouterView } from 'vue-router';
import { register } from 'swiper/element/bundle';

register();

export default {
  components: {

  },
  methods: {
    reloadPage(e) {
      if (location.href === e.target.href) location.reload();
    }
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" @click="reloadPage">Тест</RouterLink>
      <a href="https://t.me/apersonaluniverse" target="_blank">Канал Твоей вселенной</a>

      <RouterLink to="/course">КУРС</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
header {
  position: relative;
  z-index: 2;
  padding: calc(var(--base-padding) / 2) calc(var(--base-padding) / 2) (var(--base-padding));

  @media (min-width: 48rem) {
    padding-top: (var(--base-padding));
  }
}

nav {
  display: flex;
  justify-content: flex-end;
  gap: calc(var(--base-padding) / 2);

  @media (min-width: 48rem) {
    // 768px
    gap: var(--base-padding);
  }
}

main {
  width: 100%;
  max-width: 60rem;
  margin: auto;
  padding: calc(var(--base-padding) / 2);
  line-height: 1.32;

  @media (min-width: 48rem) {
    // 768px
    padding: var(--base-padding);
    font-size: 1.2rem;
    line-height: 1.42;
  }
}

a,
.link {
  color: var(--color-accent);
  cursor: pointer;
  transition: color .2s ease-in-out;

  &:hover {
    color: var(--color-accent-bright);
  }
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 3rem auto;
  gap: .7em;
  text-align: center;

  &-info {
    font-family: 'El Messiri', serif;
    font-size: .8em;
  }

  .button {
    margin-top: 2em;
  }
}

button,
.button {
  display: inline-flex;
  align-items: center;
  height: 3rem;
  padding: 1em;
  border: 1px solid var(--color-text);
  border-radius: .2rem;
  font: inherit;
  text-decoration: none;
  color: var(--color-text);
  background: transparent;
  cursor: pointer;
  transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: var(--color-text);
    background: var(--color-contrast);
    border-color: var(--color-contrast);
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
label,
figure {
  margin: 1em 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

h1,
h2,
h3 {
  font-family: 'El Messiri', serif;
}

h1 {
  line-height: 1;
  font-size: 2em;

  @media (min-width: 48rem) {
    // 768px
    font-size: 3rem;
  }
}

h3 {
  line-height: 1.1;
  font-weight: normal;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
