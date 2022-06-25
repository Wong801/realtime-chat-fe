<script setup>
defineProps({
  fromOther: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="p-4 w-max max-w-[75%] relative inline-block"
    :class="
      fromOther
        ? 'bg-gray-bg custom-bubble__base--other custom-bubble__border--other'
        : 'bg-green-primary text-white custom-bubble__base--me'
    "
  >
    <slot />
  </div>
</template>

<style scoped>
.custom-bubble__base--other {
  border: 1px solid #e8e8e8;
  border-radius: 8px 8px 8px 0;
}
.custom-bubble__border--other:before {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: -1px;
  right: auto;
  top: auto;
  bottom: -14px;
  border: 7px solid;
  border-color: #e8e8e8 transparent transparent #e8e8e8;
}
.custom-bubble__base--other:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  right: auto;
  top: auto;
  bottom: -11px;
  border: 6px solid;
  border-color: #f6f6f6 transparent transparent #f6f6f6;
}

.custom-bubble__base--me {
  border-radius: 8px 8px 0 8px;
}
.custom-bubble__base--me:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  left: auto;
  right: 0;
  top: auto;
  bottom: -11px;
  border: 6px solid;
  border-color: #5db075 #5db075 transparent transparent;
}
</style>
