<template>
  <n-card class="w-full shadow-lg" hoverable>
    <div class="text-center font-size-24 font-500 line-height-32">
      Naive UI Admin
    </div>
    <div class="m-t-24 w-320">
      <n-form ref="formRef" :model="formData" :rules="rules">
        <n-form-item label="用户名" path="username">
          <n-input v-model:value="formData.username" placeholder="请输入用户名">
            <template #prefix>
              <n-icon><MaterialSymbolsLightPerson /></n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input
            v-model:value="formData.password"
            type="password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <n-icon><SolarLockLinear /></n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-button
          type="primary"
          block
          :loading="loading"
          @click="handleSubmit"
        >
          登录
        </n-button>
      </n-form>
    </div>
  </n-card>
</template>

<script setup>
import { useMessage } from 'naive-ui';
import { useRouter } from 'vue-router';
import MaterialSymbolsLightPerson from '~icons/material-symbols-light/person';
import SolarLockLinear from '~icons/solar/lock-linear';

const message = useMessage();
const formRef = ref(null);
const loading = ref(false);
const formData = ref({
  username: '',
  password: '',
});
const router = useRouter();

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
};

function handleSubmit() {
  formRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true;
      // 模拟登录请求
      setTimeout(() => {
        loading.value = false;
        message.success('登录成功');
        router.push({ name: 'Workplace' });
      }, 2000);
    }
    else {
      message.error('请填写完整信息');
    }
  });
}
</script>
