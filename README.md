# Vue 3 + Typescript + Vite2 + Pinia2

## 规范

### Git 提交规范

使用 angular 提交规范：

https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits

feat 与 fix 提交将被用于生成 changelog

- feat：新功能
- fix：修补 bug
- docs：文档类变动
- style：样式
- refactor：重构
- test：增加测试
- chore：构建过程或辅助工具的变动

### TS 规范

- 组件库构建包导出变量使用大驼峰命名规则
- 遵循选型中 eslint 配置，使用 Airbnb 规范
- 代码注释规范，采用 jsdoc: https://jsdoc.app/

### 样式规范

- 类名使用 BEM 命名规则 [css-naming](https://github.com/Tencent/tdesign-common/blob/develop/css-naming.md)

## 技术选型

| 类目         | 方案                                  | 参考链接                                      |
| :----------- | :------------------------------------ | :-------------------------------------------- |
| 开发语言     | ts                                    | http://www.typescriptlang.org/                |
| 样式语言     | less                                  | http://lesscss.org/                           |
| 构建工具     | vite 组件库本地开发 rollup 组件库打包 | https://vitejs.dev/ https://www.rollupjs.com/ |
| 测试工具     | jest cypress e2e 测试                 | https://jestjs.io/ https://www.cypress.io/    |
| web-vue      | vue@2.x                               | https://github.com/vuejs/vue                  |
| web-vue-next | vue@3.x                               | https://github.com/vuejs/vue-next             |
| mobile-vue   | vue@3.x                               | https://github.com/vuejs/vue-next             |

## Depends

- [Vue 3.x](https://github.com/vuejs/vue-next)
- [Vue-Router 4.x](https://github.com/vuejs/vue-router-next)
- [Pinia2](https://github.com/posva/pinia/) - manage state instead of vuex
- [~~Ant Design Vue 2.x~~](https://github.com/vueComponent/ant-design-vue)
- [~~Element-Plus~~](https://github.com/element-plus/element-plus)
- [Naive UI](https://github.com/TuSimple/naive-ui)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - a vite plugin can auto import ui library on demand
- TypeScript, of course

## Installation

1. Clone repository `git clone https://github.com/nabaonan/todos-action.git `
2. `cd vue-vite-ts-setup`
3. `yarn` or `npm i`

## Usage

1. Run `yarn`
2. `yarn dev`

## Build

Run `yarn build`
