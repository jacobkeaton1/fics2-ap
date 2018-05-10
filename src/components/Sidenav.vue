<template>
  <div class="sidenav" :style="style">
    <div class="sidenav__item" v-for="item in menuItems" :key="item.text">
      <router-link :to="item.to">
        <icon :name="item.icon" :label="item.text" scale="2"></icon>
        <br>
        {{item.text}}
      </router-link>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
    props: {
        menuItems: {
            type: Array,
            required: true,
        }
    },
    components: {
      Icon
    },
    computed: {
        style() {
            return {
                width: this.width + "px",
            }
        }
    },
}
</script>

<style>
    .sidenav {
        display: grid;
        grid-gap: 10px;
        grid-template-rows: repeat(autofill, minmax(100px, 1fr));
        background: var(--primary);
        box-shadow: 1px 0 2px 1px #00000032;
        color: white;
        width: var(--sidenavWidth);
        text-align: center;
        text-transform: lowercase;
        font-weight: 100;
    }

    .sidenav a {
        text-decoration: none;
        color: var(--white);
    }

    .sidenav__item {
      display:grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
      width: 100%;
      height: 100%;
      padding-top: 5px;
      border-bottom: 1px solid #FFFFFF32;
    }
</style>
