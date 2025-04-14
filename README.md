# three-profile

感谢 Adrian 的教程，这个代码库是对 YouTube 视频教程《使用 React.js 和 Three.js 构建并部署一个超棒的 3D 作品集》的回顾。我希望整理这个项目并打造一个博客教程系列。如果你喜欢这个项目请帮我点个⭐吧！！！

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
这是一个使用Three.js和React打造的3D作品集网站，展示了现代Web开发与3D技术的结合。项目融合了沉浸式3D体验与响应式设计，为访问者提供独特的交互式浏览体验。

感谢Adrian的教程，这个代码库是对YouTube视频教程《使用React.js和Three.js构建并部署一个超棒的3D作品集》的实践。

## 🛠️ 技术栈

### 🔷 前端框架
- **React 19** - 用于构建用户界面的JavaScript库
- **Vite** - 现代前端构建工具，提供极速的开发体验

### 🌟 3D渲染
- **Three.js** - 用于创建3D图形的JavaScript库
- **React Three Fiber** - React的Three.js渲染器
- **React Three Drei** - React Three Fiber的辅助组件集合

### 🎨 样式与动画
- **Tailwind CSS** - 实用优先的CSS框架
- **GSAP** - 专业级JavaScript动画库

### 🧰 其他工具
- **React Responsive** - 用于响应式设计的React钩子
- **Maath** - 数学辅助库

## ✅ 功能

- **🔮 3D交互场景** - 包含多个可交互的3D模型和场景
- **📱 响应式设计** - 完美适配各种设备尺寸
- **🎯 现代UI/UX** - 流畅的用户界面和交互体验
- **🖼️ 作品集展示** - 展示项目和工作经验
- **💬 客户评价** - 展示客户反馈和评价
- **📬 联系表单** - 便于访问者联系

## 🚀 快速开始

克隆项目并安装依赖：

```bash
# 克隆仓库
git clone <repository-url>
cd threejs-portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 💻 代码片段

### 3D场景设置

```jsx
// Hero.jsx中的3D场景设置
<Canvas className="w-full h-screen">
  <Suspense fallback={<CanvasLoader />}>
    <HeroCamera />
    <ambientLight intensity={0.5} />
    <HackerRoom position={[0, 0, 0]} scale={1} />
    <Target position={[0, 0, 0]} />
    <ReactLogo position={[0, 0, 0]} />
    <Cube position={[0, 0, 0]} />
    <Rings position={[0, 0, 0]} />
  </Suspense>
</Canvas>
```

### 响应式设计

```jsx
// 使用Tailwind CSS的响应式类
<div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
  {/* 内容 */}
</div>
```

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

