<template>
  <div id="app">
    <div class="grid-container">
        <div class="header">
            <div class="header__brand">FICS 2.0</div>
            <div class="header__menu"></div>
        </div>
        <section class="content">
            <Sidenav :menu-items="MenuItems" />
            <Content />
        </section>
        <section class="footer">
            <Footer />
        </section>
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import Sidenav from './components/Sidenav.vue'
import MenuItems from './menu-items'

export default {
    data () {
        return {
            MenuItems,
        }
    },
    components: {
        Content,
        Sidenav,
        Footer
    }
}
</script>

<style>
    html, body {
        height: 100%;
        margin: 0;
    }
    #app {
        height: 100%;
        font-family: 'Open Sans', sans-serif;
        color: var(--black);
    }

    .grid-container {
        display: grid;
        grid-template-rows: auto 1fr 25px;
        height: 100%;
    }

    .content {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: auto 1fr;
    }

    .header {
        display: grid;
        grid-template-columns: var(--sidenavWidth) 1fr;
        grid-template-rows: 75px;
    }

    .header__brand {
        display: grid;
        grid-template-columns: 1fr;
        background: var(--secondary);
        color: var(--white);
        font-weight: 400;
        box-shadow: 1px 0 1px 1px #00000032;
        z-index: 2;
        align-items: center;
        justify-items: center;
    }

    .header__menu {
        background: var(--white);
        color: var(--black);
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

</style>
