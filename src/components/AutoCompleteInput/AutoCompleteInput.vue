<template>
  <div id="AutoCompleteInput" class="flex items-center gap-2">
    <input
      :id="theId"
      :value="inputComputed"
      :placeholder="placeholder"
      autocomplete="off"
      @click="emit('isActive', true)"
      type="text"
      class="text-md bg-gray-100 appearance-none w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-200"
    />
    <WindowCloseIcon fillColor="#2e2e2d" @click="emit('clearInput')" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import WindowCloseIcon from "vue-material-design-icons/WindowClose.vue";
import { Props } from "@/components/AutoCompleteInput/types";
const emit = defineEmits<{
  (e: "isActive", val: boolean): void;
  (e: "clearInput"): void;
  (e: "update:input", val: string): void;
}>();

const props = defineProps<Props>();

const { theId, input, placeholder } = toRefs(props);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>

<style scoped></style>
