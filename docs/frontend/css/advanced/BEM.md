---
id: BEM
title: BEM
sidebar_position: 1
---

# BEM

[BEM](http://getbem.com/) 全称是 *Block Element Modifier*，是目前被广泛推荐采用的CSS命名规则。能促使组件样式代码被更加清晰有序地组织。

## 组成部分
### Block

> Standalone entity that is meaningful on its own.

规则下的最高层级，往往指一些独立的整体，例如容器、菜单。

### Element

> A part of a block that has no standalone meaning and is semantically tied to its block.
 
指 Block 的一部分，例如容器内的标题、列表项。

### Modifier

> A flag on a block or element. Use them to change appearance or behavior.

通过一个修饰来指定 Block 或 Element 的一种特定状态， 

## 命名规则

```css
    .block {
        /* properties */
    }

    .block__element {
        /* properties */
    }

    .block__element--modifer {
        /* properties */
    }
```