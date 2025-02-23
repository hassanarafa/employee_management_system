<template>
  <div class="login-container">
    <!-- Left Section: Logo & Branding -->
    <div class="left-section">
      <LogoSection/>
    </div>

    <!-- Right Section: Login Form -->
    <div class="right-section">
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LogoSection from "@/components/LogoSection.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LogoSection,
    LoginForm,
  },
};
</script>

<style scoped>
/* Full-screen container */
.login-container {
  display: flex;
  height: 98vh;
  flex-direction: row;
}

/* Left Section */
.left-section {
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f26822;
  backdrop-filter: blur(10px);
  min-width: 200px;
  height: 100vh;
}

/* Right Section */
.right-section {
  flex: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  background: rgba(227, 162, 133, 0.18);
  height: 100vh;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .login-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left-section {
    display: none;
  }

  .right-section {
    background: #ffff;
    width: 100%;
  }
}
</style>
