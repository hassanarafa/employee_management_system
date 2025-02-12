<template>
  <div class="login-container">
    <!-- Left Section: Logo & Branding -->
    <div class="left-section">
      <LogoSection/>
    </div>

    <!-- Right Section: Login Form -->
    <div class="right-section">
      <div class="form-wrapper">
        <LoginForm/>
      </div>
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
/* Base Styling */
.login-container {
  display: flex;
  height: 100vh;
  flex-direction: row;
}

/* Left Section - Decreased Width */
.left-section {
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f26822;
  backdrop-filter: blur(10px);
  min-width: 200px;
}

/* Right Section - Increased Width */
.right-section {
  flex: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-width: 300px;
  background: rgba(227, 162, 133, 0.18);
}

/* Form Wrapper - Increased Size */
.form-wrapper {
  width: 100%;
  max-width: 500px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
  min-height: 400px;
}

.form-wrapper:hover {
  transform: scale(1.02);
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
    width: 100%;
    padding: 2rem;
  }

  .form-wrapper {
    max-width: 500px;
  }
}

</style>
