<script setup>
import MenuItemComponent from "@/components/MenuItem.vue";
</script>

<template>
    <nav>
        <MenuItemComponent></MenuItemComponent>
        <MenuItemComponent></MenuItemComponent>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 24px ;
        font-size: 16px;
        color: black;
    }

</style>