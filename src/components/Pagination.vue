<script setup lang="ts">
  import { ref } from "vue";

  const selectedPage = ref<number>(1);
  const totalPages = ref<number>(10);
  const pages: string[] = ['first', 'prev', `${selectedPage.value}`, 'next', 'last'];

  const setSelectedPage = (val: string) => {
    switch (val.toLocaleLowerCase()) {
      case 'first':
        selectedPage.value = 1;
        break;
      case "prev":
        selectedPage.value = Math.max(1, selectedPage.value - 1);
        break;
      case "next":
        selectedPage.value = Math.min(selectedPage.value + 1, totalPages.value);
        break;
      case "last":
        selectedPage.value = totalPages.value;
        break;
      default:
        selectedPage.value = Number(val);
    }
  };
</script>

<template>
  <div class="pagination">
    <p v-for="page of pages" class="page-item page-link" @click="setSelectedPage(page)">{{page}}</p>
  </div>
</template>

<style>
  .page-link {
    cursor: pointer;
  }
</style>
