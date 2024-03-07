<template>
    <div class="container">
        <div class="card north-card">
        <span class="title-card">Interfaz Sencilla</span>
        <div>
            <span class="text-card">Todas las capacidades en la menor cantidad de pasos.</span>
        </div>
        </div>
        <div class="card card-south">
            <div class="svg-div"><img :src="InterfaceSvg" alt="Interface" class="interface-svg"/></div>
        </div>
    </div>
</template>

<script>
import InterfaceSvg from '../assets/Interface.svg';

export default {
  name: 'InterfaceShow',
  data() {
    return {
      InterfaceSvg // This makes diagramSvg available in the template
    }
  },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    margin: 1em 4em;
    gap: 1em;
    justify-content: center;
    background-color: #000;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 1em;
    height: 20em;
    box-sizing: border-box; /* Ensures padding is included in the total width and height */
    width: calc(50% - 1em); /* Adjusts width taking gap into account */
    border-radius: .7em;
    overflow: hidden;
    box-sizing: border-box;
    max-height: 20em;
    justify-content: center;
    align-items: center;
}

.text-card {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 200;
    font-size: 1.3em;
}

.title-card {
    font-size: 2em;
}

.card span, .card a {
    margin-bottom: 0.5em;
}

.interface-svg {
    height: 18em;
    width: auto;
    object-fit: contain;
    border-radius: .5em;
}

@media (max-width: 768px) { /* For mid-sized screens */
.card {
    width: calc(100% - 1em); /* Two cards per row */
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0em;
    overflow: none;
    height: auto;
}

.north-card {
    height: 10em;
}

.container {
    margin: 1em 0em;
}

.interface-svg {
    height: 12em;
}


}

</style>
  