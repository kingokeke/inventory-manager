<template>
  <router-link :to="url" class="nav-link p-5 sidebar-link">{{
    title
  }}</router-link>
</template>

<script setup lang="ts">
  interface SidebarLinkProps {
    title: string;
    url: string;
  }
  defineProps<SidebarLinkProps>();
</script>

<style>
  .sidebar-link:hover {
    background-color: #ddd;
  }
</style>
