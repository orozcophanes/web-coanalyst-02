<template>
  <div class="container">
    <div class="card">
      <span>Sobre Nosotros</span>
      <div>
        <span class="text-card" id="sobre">CoAnalyst es el primer producto lanzado por Iurexa.</span>
      </div>
    </div>
    <div class="card">
      <span>Contáctanos</span>
      <div><a class="text-card" id="contacto">Enviamos un correo a info@iurexa.com</a></div>
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
  }
  .container {
  margin: 1em 1.5em;
}
}

</style>
