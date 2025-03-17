<template>
  <div class="flex">
    <div class="logo">
      <div class="logo-text color-white">
        Naive UI Admin
      </div>
    </div>
    <LoginBanner class="w-550" />
    <div class="relative min-h-screen w-full flex items-center justify-center">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer absolute bottom-0">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginBanner from './components/banner.vue';
import Footer from './components/footer.vue';
import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
.banner {
  background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
}

.content {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    font-size: 20px;
  }
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
