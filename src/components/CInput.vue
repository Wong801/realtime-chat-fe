<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "string",
  },
  placeholder: {
    type: String,
    default: "type something...",
  },
});

const emit = defineEmits(["update:modelValue"]);

const changeValue = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<template>
  <input
    class="bg-gray-bg border border-gray-border p-4 rounded-lg focus:outline-black"
    :type="type"
    :value="modelValue"
    @input="changeValue"
    :placeholder="placeholder"
  />
</template>

<style></style>
