<template>
  <form class="login-form" @submit.prevent="getLocation">
    <h2>تسجيل الدخول</h2>

    <input class="input-field" placeholder="اسم المستخدم" type="text" />
    <input class="input-field" placeholder="كلمة المرور" type="password" />

    <button type="submit">دخول</button>

    <!-- Display Location -->
    <p v-if="location">{{ location }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const location = ref(null);


const getLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        location.value = `الموقع الحالي: (${latitude}, ${longitude})`;
      },
      (error) => {
        location.value = "تعذر الحصول على الموقع";
        console.error("Error getting location:", error);
      }
    );
  } else {
    location.value = "الموقع غير مدعوم في هذا المتصفح";
  }
};
</script>


<style scoped>
/* Form Container */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
}

/* Heading */
h2 {
  font-size: 2rem;
  color: #f26822;
  margin-bottom: 1.5rem;
}

/* Input Fields */
.input-field {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
}

.input-field:focus {
  border-color: #f26822;
  box-shadow: 0 0 5px rgba(242, 104, 34, 0.3);
  outline: none;
}

/* Button */
button {
  width: 100%;
  padding: 1.2rem;
  background: #f26822;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

button:hover {
  background: #d9581c;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .login-form {
    max-width: 80%;
    padding: 1rem;
    /* Adjusted padding for better spacing */
    background: rgba(227, 162, 133, 0.18);
  }

  h2 {
    font-size: 1.8rem;
    margin: 5px;
  }

  .input-field {
    width: 85%;
    font-size: 1.1rem;
    padding: 0.8rem;
    /* Slightly reduced padding */
  }

  button {
    width: 90%;
    /* Reduce width */
    padding: 0.8rem;
    /* Reduce padding */
    font-size: 1rem;
    /* Decrease font size */
    height: 50px;
    /* Adjust button height */
    margin: 5px;
  }
}
</style>
