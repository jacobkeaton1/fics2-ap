<template>
  <div id="app">
    <div class="grid-container">
        <section class="header">
            <Header />
        </section>
        <section class="content">
            <Sidenav width="200" />
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
import Header from './components/Header.vue'
import Sidenav from './components/Sidenav.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        Content,
        Header,
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
        grid-template-rows: 50px 1fr 25px;
        height: 100%;
    }

    .content {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: auto 1fr;
    }

</style>
