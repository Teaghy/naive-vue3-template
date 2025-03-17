<template>
  <div class="banner">
    <div class="banner-inner h-400 overflow-hidden">
      <n-carousel autoplay class="carousel" effect="fade">
        <div v-for="item in carouselItems" :key="item.slogan" class="carousel-item">
          <div class="carousel-title">
            {{ item.title }}
          </div>
          <div class="carousel-sub-title">
            {{ item.subTitle }}
          </div>
          <img class="carousel-image" :src="item.image">
        </div>
      </n-carousel>
    </div>
  </div>
</template>

<script setup>
import bannerImage from '@/assets/login-banner.png';

const carouselItems = computed(() => [
  {
    title: '这是一个大标题1',
    subTitle: '子标题1',
    image: bannerImage,
  },
  {
    title: '这是一个大标题2',
    subTitle: '子标题2',
    image: bannerImage,
  },
  {
    title: '这是一个大标题3',
    subTitle: '子标题3',
    image: bannerImage,
  },
]);
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    flex: 1;
    // height: 100%;
  }
}
.carousel {
  height: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &-title {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  &-sub-title {
    margin-top: 8px;
    color: gray;
    font-size: 14px;
    line-height: 22px;
  }

  &-image {
    width: 320px;
    margin-top: 30px;
  }
}
</style>
