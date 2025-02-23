<template>
  <div class="logo-section">
    <img alt="Project Logo" class="logo" src="@/assets/golden-logo-template-free-png.webp"/>
    <h1 class="project-name">مرحبا</h1>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.logo-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Responsive Logo */
.logo {
  width: 250px;
  height: auto;
  max-width: 100%;
}

/* Responsive Project Name */
.project-name {
  color: white;
  font-size: 3rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
}

/* Tablet Adjustments */
@media (max-width: 1024px) {
  .logo {
    width: 200px;
  }

  .project-name {
    font-size: 2.5rem;
  }
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .logo {
    width: 150px;
  }

  .project-name {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 120px;
  }

  .project-name {
    font-size: 1.8rem;
  }
}
</style>
