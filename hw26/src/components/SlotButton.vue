<script setup>
const props = defineProps(['text']);

</script>

<template>
    <button>
        <slot>{{ props.text }}</slot>
    </button>
</template>

<style scoped>
  button {
    border-radius: 12px;
    padding: 8px 14px;
    margin: 0 12px;
    background-color: rgb(0, 0, 0);
    font-size: 16px;
    color: white;
    border-color: black;
  }
</style>