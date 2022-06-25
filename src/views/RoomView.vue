<script setup>
import { nextTick, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { socket } from "../plugins/socket";
import CTitle from "../components/CTitle.vue";
import CBubble from "../components/CBubble.vue";

const router = useRouter();
const route = useRoute();
const messageContainer = ref(null);

const messages = reactive([]);
const userMessage = ref("");

const exit = () => {
  socket.disconnect();
  router.push("/");
};

socket.on("notification", (msg) => {
  messages.push(msg);
});

socket.on("message", (msg) => {
  messages.push(msg);
});

const sendMessage = (msg) => {
  if (msg) {
    socket.emit("sendMessage", msg);
    userMessage.value = "";
  }
};

watch(
  () => messages.length,
  () => {
    const el = messageContainer.value;
    if (el) {
      nextTick(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }
);
</script>

<template>
  <main
    class="h-screen max-h-screen flex flex-col justify-between gap-y-3 py-[3.75rem]"
  >
    <div class="flex justify-between items-center w-full bg-white px-4 z-10">
      <button @click="exit" class="text-green-primary font-medium">Exit</button>
      <c-title>{{ route.params.id }}</c-title>
      <button class="text-green-primary invisible">Exit</button>
    </div>
    <div
      ref="messageContainer"
      class="flex flex-col gap-y-4 h-full overflow-y-scroll px-4 w-full"
    >
      <div
        v-show="messages.length"
        v-for="(message, index) in messages"
        :key="index"
      >
        <div v-if="message.type === 'message'">
          <div v-if="message.id !== socket.id" class="flex flex-col">
            <h4 class="text-sm">{{ message.user }}</h4>
            <c-bubble :from-other="true">
              <p class="text-sm">{{ message.text }}</p>
            </c-bubble>
          </div>
          <div v-else class="flex justify-end">
            <c-bubble :from-other="false">
              <p class="text-sm">{{ message.text }}</p>
            </c-bubble>
          </div>
        </div>
        <div v-else>
          <p class="text-center text-xs text-gray-400">
            {{ message.description }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex bg-gray-bg border border-gray-border rounded-full p-2 mx-4"
    >
      <input
        @keydown.enter="sendMessage(userMessage)"
        type="text"
        v-model="userMessage"
        class="w-full bg-gray-bg px-2 focus:outline-none"
        placeholder="Message here..."
      />
      <button
        @click="sendMessage(userMessage)"
        class="bg-green-primary rounded-full text-white w-9 h-8"
      >
        &uarr;
      </button>
    </div>
  </main>
</template>

<style></style>
