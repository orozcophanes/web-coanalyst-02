<template>
  <div class="footer-container">
    <div class="made-in">Made in Mexico City. 2024.</div>
    <div class="social-links">
      <a href="https://www.lesswrong.com" class="link">LessWrong</a> |
      <a href="https://twitter.com" class="link">Twitter</a> |
      <a href="https://instagram.com" class="link">Instagram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: auto; /* Adjust height to auto for better flexibility */
  display: flex;
  flex-direction: row; /* Default direction */
  justify-content: space-between;
  align-items: center;
  padding: 2em 4em; /* Adjust padding as needed */
  box-sizing: border-box;
  flex-wrap: wrap; /* Allow items to wrap in smaller screens */
}

.social-links {
  display: flex;
  gap: 10px; /* Adjust gap as needed */
  flex-wrap: wrap; /* Allow links to wrap */
}

.link {
  text-decoration: none;
  color: inherit; /* Removes the default hyperlink color */
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column; /* Stack elements vertically on small screens */
    padding: 2em; /* Adjust padding for smaller screens */
  }
  .made-in, .social-links {
    text-align: center; /* Center content for a cleaner look */
    width: 100%; /* Use full width */
  }
  .social-links {
    margin-top: 1em; /* Add some space between the text and the links */
  }
}
</style>
