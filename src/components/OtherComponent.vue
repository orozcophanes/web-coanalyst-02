<template>
    <div class="content">
        <div class="left-container">
            <div class="phrase-container">
                <h1 style="color: #FFFFFF;">Herramientas de Análisis para las Necesidades de tu Organización</h1>
                <span class="subtitle">Examina y optimiza tu información con mayor rapidez y eficacia.</span>
            </div>
        </div>
        <div class="right-container">
            <DiagramComponent/>
        </div>
    </div>
</template>

<script>
import DiagramComponent from './DiagramComponent.vue'; // Adjust the path as necessary

export default {
    name: 'ContentComponent',
    components: {
        DiagramComponent // Registering the DiagramComponent
    },
}
</script>



<style scoped>
html, body {
    height: 100%; /* Ensure the full height is available */
    margin: 0; /* Remove default margin */
}
#app {
    height: 100%; /* This assumes your app is mounted in an element with id="app" */
    display: flex;
    flex-direction: column;
}
.content {
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping to ensure horizontal layout */
    width: 100%;
    flex: 1; /* Allows the .content to expand to fill available space */
    height: 34em;
}

.subtitle {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5em;
}


.left-container,
.right-container {
    display: flex;
    flex: 1; /* Take up equal space */
    padding: 2rem;
    padding-left: 4em;
    padding-right: 4em;
    height: 100vh; /* Take full available height */
    background-color: #000;
    color: #C6C6C6;
    font-family: 'IBM Plex Sans', sans-serif;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
}

.left-container {
    padding-top: 0em;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 8em;
    
}

.right-container {
    padding-top: 0em;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 3em;
}   


@media (max-width: 767px) {
.content {
    flex-direction: column; /* Stack children vertically */
    height: auto;
    overflow: auto;
}
.left-container,
.right-container {
    flex-basis: 100%; /* Each takes full width */
    padding: 1rem;
    padding-left: 1.5em;
    padding-right: 1.5em;
}
}
</style>
