<div align="center">
  <br />
    <a href="https://youtu.be/kt0FrkQgw8w" target="_blank">
      <img src="https://github.com/user-attachments/assets/2afc2dc3-f840-4d98-9378-f34acd7df173" alt="Project Banner">
    </a>
  <br />

  <h3 align="center">3D 开发者主页</h3>

   <div align="center">
      本仓库的教程来自 <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. 订阅JM频道，带你走进JS大师的世界!!
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

## 🚀 快速开始

确定你的电脑安装下面这些环境：
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

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

<details>
<summary><code>index.css</code></summary>

```css
@import url('https://fonts.cdnfonts.com/css/general-sans');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  scroll-behavior: smooth;
}

body {
  background: #010103;
  font-family: 'General Sans', sans-serif;
}

@layer utilities {
  .c-space {
    @apply sm:px-10 px-5;
  }

  .head-text {
    @apply sm:text-4xl text-3xl font-semibold text-gray_gradient;
  }

  .nav-ul {
    @apply flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20;
  }

  .nav-li {
    @apply text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5;
  }

  .nav-li_a {
    @apply text-lg md:text-base hover:text-white transition-colors;
  }

  .nav-sidebar {
    @apply absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block;
  }

  .text-gray_gradient {
    @apply bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent;
  }

  /* button component */
  .btn {
    @apply flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300  transition-all active:scale-95 text-white mx-auto;
  }

  .btn-ping {
    @apply animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75;
  }

  .btn-ping_dot {
    @apply relative inline-flex rounded-full h-3 w-3 bg-green-500;
  }

  /* hero section */
  .hero_tag {
    @apply text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal;
  }

  /* about section */
  .grid-container {
    @apply w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5;
  }

  .grid-headtext {
    @apply text-xl font-semibold mb-2 text-white font-generalsans;
  }

  .grid-subtext {
    @apply text-[#afb0b6] text-base font-generalsans;
  }

  .copy-container {
    @apply cursor-pointer flex justify-center items-center gap-2;
  }

  /* projects section  */
  .arrow-btn {
    @apply w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient;
  }

  .tech-logo {
    @apply w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center;
  }

  /* clients section */
  .client-container {
    @apply grid md:grid-cols-2 grid-cols-1 gap-5 mt-12;
  }

  .client-review {
    @apply rounded-lg md:p-10 p-5 col-span-1 bg-black-300 bg-opacity-50;
  }

  .client-content {
    @apply flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7;
  }

  /*  work experience section */
  .work-container {
    @apply grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12;
  }

  .work-canvas {
    @apply col-span-1 rounded-lg bg-black-200 border border-black-300;
  }

  .work-content {
    @apply col-span-2 rounded-lg bg-black-200 border border-black-300;
  }

  .work-content_container {
    @apply grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5;
  }

  .work-content_logo {
    @apply rounded-3xl w-16 h-16 p-2 bg-black-600;
  }

  .work-content_bar {
    @apply flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden;
  }

  /* contact section */
  .contact-container {
    @apply max-w-xl relative z-10 sm:px-10 px-5 mt-12;
  }

  .field-label {
    @apply text-lg text-white-600;
  }

  .field-input {
    @apply w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;
  }

  .field-btn {
    @apply bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3;
  }

  .field-btn_arrow {
    @apply w-2.5 h-2.5 object-contain invert brightness-0;
  }

  /*  footer */
  .social-icon {
    @apply w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200;
  }
}

.waving-hand {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

.arrow-gradient {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 10%,
    rgba(255, 255, 255, 0.000025) 50%,
    rgba(255, 255, 255, 0.000025) 50%,
    rgba(255, 255, 255, 0.025) 100%
  );
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(14deg);
  }
  30% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(14deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  60% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```js
export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Podcastr - AI Podcast Platform',
      desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'LiveDoc - Real-Time Google Docs Clone',
      desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
      subdesc:
        'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'CarePulse - Health Management System',
      desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
      subdesc:
        'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Horizon - Online Banking Platform',
      desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
      subdesc:
        'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
      href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Imaginify - AI Photo Manipulation App',
      desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
      subdesc:
        'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
      href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'clapping',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'victory',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
```

</details>

<details>
<summary><code>地球地图纹理</code></summary>

```bash
globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
```

</details>

## 🔗 链接

- [🌐 演示网站](https://three-profile-one.vercel.app/) - 查看项目的在线演示
- [📂 GitHub仓库](https://github.com/SunACong/three-practice.git) - 项目源代码
- [📃 CSDN专栏](https://blog.csdn.net/qq_44808710/category_12918965.html) - 博客地址

## 📚 资源

- [📖 Three.js文档](https://threejs.org/docs/)
- [📖 React Three Fiber文档](https://docs.pmnd.rs/react-three-fiber/)
- [📖 Tailwind CSS文档](https://tailwindcss.com/docs/)

## 🔍 更多

如果你喜欢这个项目，请给它一个⭐！

如有任何问题或建议，欢迎提交issue或联系我。
