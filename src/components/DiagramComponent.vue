<template>
    <div class="diagram-space">
        <!-- Div 1 -->
        <div class="round-div"><div class="number">1</div></div>
        
        <!-- Div 2 -->
        <div class="text-div" :style="{ opacity: textOpacity }">
            <!-- Bind the current text to the span -->
            <span v-html="texts[currentTextIndex]"></span>
        </div>
        
        <!-- Div 3 -->
        <div class="round-div"><div class="number">2</div></div>
        
        <!-- Div 4 -->
        <div class="svg-div"><img :src="diagramSvg" alt="Diagram" class="diagram-svg"/></div>
        
        <!-- Div 5 -->
        <div class="round-div"><div class="number">3</div></div>
        
        <!-- Div 6 -->
        <div class="text-div-system">
            <span>Listo! Aquí tienes:</span>
            <div class="results-div">
                <div class="single-result-div">Fuentes</div>
                <div class="single-result-div">Notas</div>
                <div class="single-result-div">Visualizaciones</div>          
            </div>
        </div>
    </div>
</template>

<script>
// Import the SVG file here
import diagramSvg from '../assets/Diagram.svg';

export default {
    name: 'DiagramComponent',
    data() {
        return {
            diagramSvg: diagramSvg,
            textOpacity: 0,
            currentTextIndex: 0, 
            texts: [
                "Cotejar las declaraciones del testigo en una audiencia frente a su testimonio inicial ante la fiscalia en este video",
                "Encuentra los argumentos del perito y determina si tienen sustento y enunciar contradicciones en este expediente",
                "Analizar la depreciación de activos fijos del mes de abril con la de mayo en este Excel y redactar una proyección para octubre del año entrante.",
                "Busca los plazos de prescripción en ley y las fechas citadas por la autoridad fiscal para determinar la prescripción de créditos fiscales."
            ],
        }
    },
    mounted() {
        // Start the text animation when the component is mounted
        this.startTextAnimation();
    },
    methods: {
        changeText() {
        // First, make the text invisible
        this.textOpacity = 0;

        // Wait for the fade-out transition, then change the text and fade it back in
        setTimeout(() => {
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            this.textOpacity = 1; // Fade the text back in
        }, 1000); // This timeout should match your CSS transition time
        },
        startTextAnimation() {
            // Start the animation with the text visible
            setTimeout(() => this.textOpacity = 1, 10);

            // Change text every 3 seconds + transition time to ensure the fade-out effect completes
            setInterval(this.changeText, 5500); // Adjust time as needed
        }
    }
}
</script>


<style scoped>
.diagram-space {
    display: flex;
    flex-direction: column; /* Change the direction to vertical */
    justify-content: center; /* This will center the items vertically */
    align-items: center; /* This will center the items horizontally */
    background-color: #000;
    width: 100%;
    text-align: center;
}

.round-div {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}

.number {
    font-size: 1em;
    color: #000;
}

.text-div {
    width: 100%;
    padding: 20px;
    color: #C6C6C6;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    transition: opacity 1s ease-in-out;
    font-style: italic;
}

.text-div,
.text-div-system { 
    padding: 17px;
}

.results-div {
    display: flex; /* This makes it a flex container */
    flex-direction: row; /* This is the default behavior, ensures children are in a row */
    justify-content: center; /* Center the items horizontally if you want */
    padding-top: 1em;
}

.single-result-div {
    border: 1px solid #fff;
    padding: 5px; /* Add some space inside each div */
    margin: 0 5px; /* Optional: adds space between each result div */
    /* width: auto; This is default behavior, but you might want to specify a minimum width */
    min-width: 20px; /* Example minimum width */
    text-align: center; /* Ensure the content of each div is centered */
    border-radius: 6px;
    padding: .5em;
    font-family: 'IBM Plex Mono', monospace;
    font-size: .8em;
}

.svg-div {
    display: flex;
    justify-content: center;
    align-items: center;
    shape-rendering: crispEdges;
}

.diagram-svg {
    height: 12em;
    width: auto;
}

@media (max-width: 768px) {
    .diagram-svg {
        height: 7em;
    }
}
</style>

