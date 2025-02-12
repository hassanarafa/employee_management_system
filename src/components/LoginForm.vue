<template>
  <form class="login-form">
    <h2>تسجيل الدخول</h2>

    <input class="input-field" placeholder="اسم المستخدم" type="text"/>
    <input class="input-field" placeholder="كلمة المرور" type="password"/>

    <button type="submit">دخول</button>
  </form>
</template>

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
    padding: 2.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .input-field {
    font-size: 1.1rem;
  }

  button {
    font-size: 1.2rem;
  }
}
</style>

<script lang="ts" setup>
</script>