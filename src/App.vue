<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;1,300&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&display=swap">
    <HeaderComponent />
    <ContentComponent />
    <ModalComponent />
    <OutputExplain />
    <InterfaceShow />
    <MoreFeatures />
    <AboutNContact />
    <OurFooter />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import ContentComponent from './components/OtherComponent.vue';
import ModalComponent from './components/ModalComponent.vue';
import OutputExplain from './components/OutputExplain.vue';
import MoreFeatures from './components/MoreFeatures.vue';
import AboutNContact from './components/AboutNContact.vue';
import OurFooter from './components/OurFooter.vue';
import InterfaceShow from './components/InterfaceShow.vue';
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto; /* Prevents scrolling outside the app container */
  background-color: #000;
  color: #c6c6c6;
  font-family: 'IBM Plex Sans', Arial, sans-serif;
}
#app {
  height: 100%;
}


@media (max-width: 767px) {
  .html, body {
    overflow: auto;
  }
}
</style>