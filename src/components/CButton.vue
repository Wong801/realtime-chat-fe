<script setup>
const emit = defineEmits(["click"]);

const onClick = (e) => {
  e.preventDefault();
  emit("click");
};
</script>

<template>
  <button
    class="bg-green-primary text-white w-full py-4 rounded-full"
    @click="onClick"
  >
    <slot>Click Me!</slot>
  </button>
</template>
