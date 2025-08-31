<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'custom-btn',
}
</script>

<style>
.btn {
  align-self: flex-end;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;

  cursor: pointer;
  transition: all ease-in-out 0.3s;
}

.btn:hover {
  transition: all ease-in-out 0.3s;
}
</style>