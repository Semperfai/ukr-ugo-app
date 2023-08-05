<template>
  <div id="AutoCompleteInput" class="flex items-center">
    <input
      :id="theId"
      @click="emit('is-active', true)"
      v-model="inputComputed"
      class="text-md bg-gray-100 appearance-none rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-200"
      type="text"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <WindowCloseIcon fillColor="#2e2e2d" @click="$emit('clearInput')" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import WindowCloseIcon from "vue-material-design-icons/WindowClose.vue";
import { Props } from "@/components/AutoCompleteInput/types";
const emit = defineEmits<{
  (e: "is-active", val: boolean): void;
  (e: "clearInput"): void;
  (e: "update:input", val: string | null): void;
}>();

const props = defineProps<Props>();

const { theId, input, placeholder } = toRefs(props);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>

<style scoped></style>
