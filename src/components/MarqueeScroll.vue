<template>
  <div class="sheet">
    <div class="scroll__wrapper">
      <div class="scroll">
        <div class="scroll__inner" v-bind="$attrs">
          <ul>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
            <li>Logo</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
.sheet {
  @apply w-full relative overflow-hidden;
}
.scroll__wrapper {
  @apply relative overflow-hidden w-full;
}

.scroll {
  @apply flex items-center h-10 w-[100%] overflow-hidden relative mx-auto transform-gpu transition-all;
}

.scroll__inner {
  @apply w-[200%] h-full absolute;
}

ul {
  @apply flex gap-4 w-1/2 h-full float-left select-none;
}
li {
  @apply w-24 p-4 h-fit;
}

.scroll::before {
  content: "";
  @apply w-8 h-full absolute left-0 bg-gradient-to-r from-white to-white/50 z-10;
}
.scroll::after {
  content: "";
  @apply w-8 h-full absolute right-0 bg-gradient-to-l from-white to-white/50 z-10;
}
</style>
