<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { socket } from "../plugins/socket";
import CTitle from "../components/CTitle.vue";
import CInput from "../components/CInput.vue";
import CButton from "../components/CButton.vue";

const router = useRouter();

const form = reactive({
  username: "",
  roomId: "",
});

const enterRoom = (name, room) => {
  socket.connect();
  if (!name || !room) {
    alert("Please fill all field");
  } else {
    socket.emit("login", { name, room }, (err) => {
      if (err) {
        alert(err);
      } else {
        router.push({ name: "room", params: { id: room, user: name } });
      }
    });
  }
};
</script>

<template>
  <main class="px-4 h-screen flex flex-col justify-between">
    <section class="pt-[3.75rem]">
      <c-title>Join Chatroom</c-title>
      <div class="flex flex-col gap-y-4 py-8">
        <c-input placeholder="Username" v-model="form.username" />
        <c-input placeholder="RoomID" v-model="form.roomId" />
      </div>
    </section>
    <c-button
      @click="enterRoom(form.username, form.roomId)"
      class="mb-[3.75rem]"
      >JOIN</c-button
    >
  </main>
</template>
