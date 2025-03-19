<template>
  <div class="login_bg relative min-h-screen w-full flex items-center justify-center">
    <div class="content-inner">
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
.login_bg {
  background: url('@/assets/images/login-bg.webp') no-repeat center / cover;
}
</style>

<style lang="less" scoped>
  // responsive
@media (max-width: 1200px) {
  .container {
    .banner {
      width: 25%;
    }
  }
}
</style>
