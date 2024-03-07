<template>
  <div class="container" id="OutputExplain">
    <div class="card">
      <span>Archivos Soportados</span>
      <div>
            <p class="text-card">Texto: PDF, WORD.</p>
            <p class="text-card">Audio y Video: MP4, MP3.</p>
            <span class="text-card">Tabular: XLS, XML, CSV.</span>
      </div>
    </div>
    <div class="card">
      <span>Fuentes</span>
      <div><a class="text-card">Completado el análisis, se proporciona las fuentes más relevantes a la consulta realizada.</a></div>
    </div>
    <div class="card">
      <span>Notas</span>
      <div><a class="text-card">Obtendrás notas sobre todas las fuentes relevantes y una sintésis de esas notas.</a></div>
    </div>
    <div class="card">
      <span>Visualizaciones</span>
      <div><a class="text-card">Las fuentes relevantes en tus archivos pueden ser clasificadas y medidas, para generar visualizaciones de esos datos.</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutputExplain',
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 1em 4em;
  gap: 1em;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 9em;
  box-sizing: border-box; /* Ensures padding is included in the total width and height */
  width: calc(25% - 1em); /* Adjusts width taking gap into account */
  border-radius: .7em;
}
.text-card {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 200;
  font-size: 0.9em;
}

.card p {
  margin: 0;
}

.card span, .card a {
  margin-bottom: 0.5em;
}

@media (max-width: 768px) { /* For mid-sized screens */
  .card {
    width: calc(50% - 1em); /* Two cards per row */
  }
  .container {
  margin: 1em 1.5em;
}
}

@media (max-width: 480px) { /* For mobile screens */
  .card {
    width: calc(100% - 1em); /* One card per row */
  }
}
</style>
