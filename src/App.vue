<template>
  <div class="app-container">
    <button class="lang-btn" @click="toggleLanguage">
      {{ $t('switch_lang') }}
    </button>
    <LoginView/>
  </div>
</template>

<script>
import LoginView from './views/LoginView.vue';
import {useI18n} from 'vue-i18n';

export default {
  name: 'App',
  components: {
    LoginView
  },
  setup() {
    const {locale} = useI18n();

    const toggleLanguage = () => {
      locale.value = locale.value === 'en' ? 'ar' : 'en';
    };

    return {toggleLanguage};
  }
};
</script>

<style>
/* Language Switch Button */
.lang-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  background: #f26822;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.lang-btn:hover {
  background: #e0571d;
}

</style>
