<template>
    <div class="header">
        <div class="brand">
            <router-link :to="'/'">FICS v2.0</router-link>
        </div>
        <div class="links"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .header {
        display: grid;
        grid-template-columns: 200px repeat(auto-fit, minmax(50px, 1fr));
        align-items: center;
        justify-items: center;
        background: var(--primary);
    }    

    a {
        text-decoration: none;
        color: var(--white);
        font-weight: 600;
    }

    .brand {
        text-decoration: none;
    }
</style>
