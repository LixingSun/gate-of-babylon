---
id: typescript
title: TypeScript
---

# TypeScript

简单来说TypeScript就是添加了“类型”的JavaScript。TS已经逐渐演变成了目前前端开发的必修课。个人觉得这得益于其两大好处:
- **类型限制** - 虽然这是一个比较有争议的话题，毕竟和JavaScript所设计的动态类型相违背，但通过在项目中的实践，TS在大部分时候通过类型功能所带来的好处是很显著的，例如对对象的接口定义、对函数传参的声明等。
- **提示报错** - 在基础类型和更高级的像interface、type的类型定义之下，对属性、方法提示能让开发效率大大提升，同时也使得在运行前就能提早发现无论是typo或者无效调用这样的错误。这些是即使通过IDE配置也不一定能覆盖完全的功能。

## 类型

### 基本
```ts
// 明确的赋值可以省略": string"这类的声明交由ts判断
let name = "Tony";  // string
let age = 27;       // number
let isMale = true;  // boolean

```

### 进阶
```ts title=数组
let books: string[];
// 明确的成员类型同样可以省略声明
let animals = ['cat', 'dog'];
```

```ts title=函数
// 明确的返回值类型同样可以省略
function isMyName (name: string) {
   return name === 'My Name';
}

// 匿名函数同样可以根据语境省略入参的类型
const animals = animals = ['cat', 'dog'];
animals.forEach((animal) => {
    // 根据animals的类型，animal此时已经被识别为string类型
    console.log(animal.toUpperCase());
})
```

### 特殊
```ts 
// 特殊
let something: any;

```
