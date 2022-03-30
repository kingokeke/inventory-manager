<script setup lang="ts">
  import { ref } from "vue";
  import SidebarLink from "@/components/SidebarLink.vue";
  import navLinks from "@/data/navLinks";
  import router from "@/router";

  const currentRoute = ref(router.currentRoute.value.path);
  const setCurrentRoute = (route: string) => (currentRoute.value = route);
</script>

<template>
  <div class="col-md-4 col-xl-3 col-xxl-2 border-end border-dark g-0 bg-gray">
    <div class="border-bottom border-dark">
      <router-link
        to="/dashboard"
        class="nav-link py-4"
        @click="setCurrentRoute('/dashboard')"
      >
        <span class="site-header">Inventory Manager</span>
      </router-link>
    </div>
    <div class="nav nav-pills flex-column mb-auto">
      <SidebarLink
        v-for="link in navLinks"
        :title="link.title"
        :url="link.url"
        :class="{ active: link.url === currentRoute }"
        @click="setCurrentRoute(link.url)"
      />
    </div>
  </div>
  <div class="col-md-8 col-xl-9 col-xxl-10 p-5">
    <div class="m-5 p-5">
      <router-view />
    </div>
  </div>
</template>
