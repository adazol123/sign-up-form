<template>
  <text__field>
    <input id="__input" placeholder=" " v-bind="$attrs" />
    <div class="label__wrapper">
      <label for="__input">{{ props.label }}</label>
      <fieldset></fieldset>
    </div>
  </text__field>
</template>

<script setup>
let text__field = "text__field";
let props = defineProps({
  label: String,
});
</script>

<style scoped>
text__field {
  @apply relative py-8 flex;
}

.label__wrapper {
  @apply absolute inset-0;
}
label {
  @apply text-sm mx-3 my-1 text-neutral-200 transform-gpu transition-all duration-300;
}
input {
  @apply py-1 px-1 border-none outline-none rounded-sm;
  @apply absolute z-10 bottom-0 mt-6 h-fit mx-3;
}
input:not(:placeholder-shown) ~ div fieldset {
  @apply border border-black/50 absolute inset-0 z-[9];
}

input:not(:placeholder-shown) ~ div label {
  @apply text-[0.6em] translate-y-1;
}
input:valid ~ div label {
  @apply text-emerald-500;
}

input:valid ~ div fieldset {
  @apply border-emerald-500;
}

input:hover ~ div fieldset {
  @apply border-emerald-500;
}

input:invalid ~ div label {
  @apply text-rose-500;
}

input:invalid ~ div fieldset {
  @apply border-rose-500;
}

input:not(:hover) ~ div label {
  @apply text-neutral-300;
}
input:not(:hover) ~ div fieldset {
  @apply border-neutral-300;
}
fieldset {
  @apply h-full absolute inset-0 rounded;
}
legend {
  @apply text-[0.5em] h-0 overflow-hidden;
}
</style>
