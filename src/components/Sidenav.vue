<template>
  <div class="sidenav open" :style="style" @click="toggleSidenav">
      <div class="contents" :if="open">
          <h1>Home</h1>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            required: true,
        },
        menuItems: {
            type: Array,
            required: true,
        }
    },
    data () {
        return {
            open: true,
        }
    },
    methods: {
        toggleSidenav() {
            if (this.open) {
                document.querySelector(".sidenav").classList.remove('open');
            } else {
                document.querySelector(".sidenav").classList.add('open');
            }
            this.open = !this.open
        }
    },
    computed: {
        style() {
            return {
                width: this.width + "px",
            }
        }
    }
}
</script>

<style>
    .sidenav {
        display: grid;
        grid-gap: 10px;
        grid-template-rows: repeat(auto-fit, minmax(25px, 1fr));
        background: var(--black);
        box-shadow: 1px 0 2px 1px #00000032;
        align-items: start;
        justify-items: center;
        transform: translateX(-85%);
        transition: 0.2s;
        color: white;
    }

    .sidenav.open {
        transform: translateX(0);
    }

</style>
