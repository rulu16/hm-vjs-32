<script setup>
import ButtonComponent from "@/components/Button.vue";
import MenuComponent from "@/components/Menu.vue";
</script>

<template>
    <header class="header">
      <div class="logo">LOGO</div>
        <MenuComponent></MenuComponent>
        <ButtonComponent text="Log In"></ButtonComponent>
        <ButtonComponent text="Sign up"></ButtonComponent>
    </header>
  </template>
  

  <style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #e8fff5;
    padding: 10px;
    text-align: center;
    gap: 48px ;
    color: black;
  }


  </style>  
