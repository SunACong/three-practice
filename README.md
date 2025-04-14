<div align="center">
  <br />
    <a href="https://youtu.be/kt0FrkQgw8w" target="_blank">
      <img src="https://github.com/user-attachments/assets/2afc2dc3-f840-4d98-9378-f34acd7df173" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A 3D Dev Portfolio</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!!
    </div>
</div>

## 📋 目录
- [简介](#-简介)
- [技术栈](#-技术栈)
- [功能](#-功能)
- [快速开始](#-快速开始)
- [代码片段](#-代码片段)
- [链接](#-链接)
- [资源](#-资源)
- [更多](#-更多)

## 📝 简介

感谢 Adrian 的教程，这个代码库是对 YouTube 视频教程《使用 React.js 和 Three.js 构建并部署一个超棒的 3D 作品集》的回顾。我希望整理这个项目并打造一个博客教程系列。如果你喜欢这个项目请帮我点个⭐吧！！！

## 🛠️ 技术栈

### 🔷 前端框架
- **React 19** 
- **Vite** 

### 🌟 3D渲染
- **Three.js** - 用于创建3D图形的JavaScript库
- **React Three Fiber** - React的Three.js渲染器
- **React Three Drei** - React Three Fiber的辅助组件集合

### 🎨 样式与动画
- **Tailwind CSS**
- **GSAP**

### 🧰 其他工具
- **Maath**
- **leva**

## ✅ 功能

- **🔮 3D交互场景** - 包含多个可交互的3D模型和场景
- **📱 响应式设计** - 完美适配各种设备尺寸
- **🎯 现代UI/UX** - 流畅的用户界面和交互体验
- **🖼️ 作品集展示** - 展示项目和工作经验
- **📬 联系表单** - 便于访问者联系

## 🚀 快速开始

克隆项目并安装依赖：

```bash
# 克隆仓库
git clone <repository-url>
cd three-practice

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 💻 代码片段

<details>
<summary><code>tailwind.config.js</code></summary>

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
```

</details>


## 🔗 链接

- [🌐 演示网站](#) - 查看项目的在线演示
- [📂 GitHub仓库](#) - 项目源代码

## 📚 资源

- [📖 Three.js文档](https://threejs.org/docs/)
- [📖 React Three Fiber文档](https://docs.pmnd.rs/react-three-fiber/)
- [📖 Tailwind CSS文档](https://tailwindcss.com/docs/)

## 🔍 更多

如果你喜欢这个项目，请给它一个⭐！

如有任何问题或建议，欢迎提交issue或联系我。

---

© 2023 Three.js Portfolio. 保留所有权利。

