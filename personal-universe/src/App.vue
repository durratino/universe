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
  <header class="header">
    <nav>
      <RouterLink to="/" @click="reloadPage">Тест</RouterLink>
      <a href="https://t.me/+mq4_MMqTmuBhODIy" target="_blank">Творческая лаборатория</a>

      <RouterLink to="/course">КУРС</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
.header {
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

.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(var(--base-padding) / 2);

  @media (min-width: 64rem) {
    flex-direction: row;
    font-size: .85em;
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
    background: rgba(var(--color-accent-rgb), .1);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  &--cta {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-text);

    &:hover {
      color: var(--color-text);
      background: var(--color-contrast);
      border-color: var(--color-contrast);
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 3em 0 .5em;

  &:where(:first-child) {
    margin-block-start: 0;
  }

  &:where(:last-child) {
    margin-block-end: 0;
  }
}

p,
ul,
ol,
label,
figure {
  margin: 1em 0 0;

  &:where(first-child) {
    margin-top: 0;
  }
}

h1,
h2,
h3 {
  font-family: 'El Messiri', serif;
  line-height: 1;
}

h1 {
  line-height: 1;
  font-size: 2.5rem;

  @media (min-width: 48rem) {
    // 768px
    font-size: 3rem;
  }

  @media (min-width: 80rem) {
    // 768px
    font-size: 4.0rem;
  }
}

h2 {
  font-size: 2rem;

  @media (min-width: 48rem) {
    // 768px
    font-size: 2.7rem;
  }

  @media (min-width: 80rem) {
    // 768px
    font-size: 3.0rem;
  }
}

h3 {
  font-size: 1.21rem;
  line-height: 1.1;
  font-weight: normal;
}

h4,
h5,
h6 {
  font-size: 1em;
  line-height: 1.12;
}

h5,
h6 {
  font-weight: 300;
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  padding-left: calc(var(--base-padding) / 2);
  list-style-type: "✩";

  @media (min-width: 64rem) {
    padding-left: var(--base-padding);
  }
}

li {
  padding-left: 10px;
  color: var(--color-powder-blue);

  &:where(:not(:first-child)) {
    margin-top: .5em;
  }

  &.highlight {
    color: var(--color-text);
  }
}

dialog {
  --color-background: var(--color-platinum-grey);
  --color-text: var(--color-charcoal-grey);

  box-sizing: border-box;
  border: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  padding: var(--base-padding) Max(calc((100vw - 600px) / 2), 10vw);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: var(--color-background);
  border-radius: 4px;

  &[open] {
    display: flex;
  }

  .buttons {
    margin-top: 2em;
  }

  button {
    background: transparent;
    border-color: currentColor;
  }

  .button {
    color: var(--color-platinum-grey);

    &:hover {
      color: var(--color-platinum-grey);
    }
  }
}

::backdrop {
  background-image: linear-gradient(45deg,
      var(--color-accent),
      rgba(2, 0, 36, 1));
  opacity: 0.75;
}
</style>
