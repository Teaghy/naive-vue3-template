<h1 align="center">naive-vue3-template</h1>
<div align="center">
基于 Vue3、Vite6、Naive UI、Javascript 的中后台前端开发基础模板
</div>

## 简介

naive-vue3-template 是一个现代化的中后台前端开发模板(javascript)，采用业界最新的前端技术栈，提供开箱即用的开发体验。项目集成了丰富的功能组件和开发工具，可用于快速构建企业级中后台应用。

## ✨ 特性

- 🎯 **最新技术栈**：使用 Vue3/Vite6/Pinia 等前沿技术开发
- 💪 **原生JavaScript**：采用JavaScript开发，无需TypeScript配置，开箱即用，加快开发效率
- 🎨 **Naive UI**：集成优雅美观的 Naive UI 组件库
- 🔥 **UnoCSS**：原子化 CSS 引擎，高性能且灵活的即时原子化 CSS 引擎
- 📦 **组件自动导入**：基于 unplugin-auto-import/unplugin-vue-components 实现组件自动导入
- 🔍 **ESLint**：集成 @antfu/eslint-config，提供严格的代码规范
- 🛠️ **开发工具**：集成 Vite DevTools，提供强大的开发调试能力
- 🚀 **Git Hooks**：使用 simple-git-hooks 规范代码提交

## 🚀 快速开始

### 脚手架创建

使用 @teaghy/tea-cli 脚手架快速创建项目：

```bash
npx @teaghy/tea-cli create <project-name>
```

在选项中选择此模板即可完成项目创建。

### 克隆源码

你也可以直接克隆源码到本地：

```bash
git clone <repository-url>
cd <project-name>
```

## 🛠️ 技术栈

- **开发语言**：JavaScript（原生开发，无TypeScript）
- **核心框架**：Vue 3
- **构建工具**：Vite 6
- **UI 框架**：Naive UI
- **状态管理**：Pinia
- **CSS 引擎**：UnoCSS
- **工具库**：@vueuse/core、axios、date-fns
- **代码规范**：ESLint + @antfu/eslint-config
- **开发工具**：Vite DevTools
- **Git Hook**：simple-git-hooks + commitlint

## 📦 环境准备

- **Node.js**: >= 18.18.0
- **包管理器**: pnpm 9.1.1+

## 🚀 开始使用

### 安装依赖

```bash
pnpm install
```

### 开发环境

```bash
pnpm run dev
```

### 生产构建

```bash
pnpm run build
```

### 代码检查

```bash
pnpm run lint
```

## 📁 目录结构

```
├── src/
│   ├── assets/        # 静态资源
│   ├── components/    # 公共组件
│   ├── hooks/         # 组合式函数
│   ├── layout/        # 布局组件
│   ├── router/        # 路由配置
│   ├── store/         # 状态管理
│   ├── styles/        # 全局样式
│   ├── utils/         # 工具函数
│   ├── views/         # 页面组件
│   ├── App.vue        # 根组件
│   └── main.js        # 入口文件
├── public/            # 公共资源
└── package.json       # 项目配置
```

## 🤝 贡献指南

欢迎提交问题和改进建议。在提交 Pull Request 之前，请确保遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支：`git checkout -b feature/your-feature`
3. 提交您的修改：`git commit -m 'feat: add some feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 📄 开源协议

[MIT License](LICENSE)
