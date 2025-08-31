<template>
    <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
      required
    >
</template>

<script>
    export default {
        name: 'custom-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.input {
  width: 100%;
  margin: 5px;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
}
</style>