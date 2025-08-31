<template>
    <div class="popup__overlay" v-if="isVisible" @click="hidePopup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
      name: 'popup-form',
      props: {
        isVisible: {
            type: Boolean,
            default: false
        }
      },
      methods: {
        hidePopup() {
            this.$emit('update:isVisible', false);
        }
      }
    }
</script>

<style scoped>
.popup__overlay {
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;

    background-color: rgba(0, 0, 0, 0.5);
}
</style>