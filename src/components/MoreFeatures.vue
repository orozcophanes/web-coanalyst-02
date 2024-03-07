<template>
  <div class="container">
    <div class="card">
      <span>Aplicación de Escritorio</span>
      <div>
        <span class="text-card">Es prioridad que el usuario pueda incorporar estas herramientas de manera segura, razón por la cual hemos construido una version de escritorio que te permita almacenar tus datos de forma local.</span>
      </div>
    </div>
    <div class="card">
      <span>Análisis Legal</span>
      <div><a class="text-card">Hemos estado desarrollando un sistema que expande las capacidades de los sistemas cognitivos para entender la ley Méxicana. Puedes plantearle problemas complejos y te responderá de manera comprehensiva.</a></div>
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
  background-color: #0E1113;
  padding: 1em;
  height: 9em;
  box-sizing: border-box; /* Ensures padding is included in the total width and height */
  width: calc(50% - 1em); /* Adjusts width taking gap into account */
  border-radius: .7em;
}
.text-card {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 200;
  font-size: 0.8em;
}

.card span, .card a {
  margin-bottom: 0.5em;
}

@media (max-width: 768px) { /* For mid-sized screens */
  .card {
    width: calc(100% - 1em); /* Two cards per row */
    height: 13em;
  }
  .container {
  margin: 1em 1.5em;
}
}

</style>
