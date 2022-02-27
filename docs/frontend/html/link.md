---
id: link
title: 链接标签
sidebar_position: 2
---

# 链接标签

并不是只有常用的`<a>`代表着链接，还有常在`<head>`部分出现的`<link>`和不常见的`<area>`。

## [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

作为最常用的标签之一，`a`标签的用法多种多样，既有常用内外跳转，也有像触发电话邮件这样的功能。

```HTML title=示例
<a href="https://lixingsun.github.io/gate-of-babylon/" target="_blank">外部链接</a>

<a href="#link">页面内部跳转</a>

<a href="tel:+491570156">电话</a>
<a href="mailto:+491570156">邮件</a>
```

:::tip 响应特定协议
可以通过注册`Navigator.registerProtocolHandler()`来处理特定的协议，可以是`tel:`和`mailto:`也可以是其他自定义的。
:::

## [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

与前面显式出现在页面上的`a`相比，`link`最大的区别在于它是不显示内容的元数据标签。结合后面罗列的`rel`属性，`link`可以达到很丰富的作用。

## [area](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)

可以当作区域型`a`标签。只能和`<map>`、`<img>`一起使用，以达到在图片上选择特定区域创造链接的作用。

```HTML title=示例
<img src="logo.png" usemap="#shape">
<map name="shape">
    <area shape="circle" href="#home" target="_self" />
</map>
```

:::tip 唯一支持非矩形热区的标签
通过指定`shape`属性来选择矩形`rect`、圆形`circle`或多边形`poly`
:::

## [rel属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)
链接类型的标签，都有一个通用的`rel`属性，表示与目标之前的关系。

### 用于搜素引擎/浏览器 ###

**`a`、`link`、`area`**
- `alternate`: 表明可替代的样式表或RSS等。
- `prev/next"`: 用于搜索引擎，表明目标为序列中的前/后一页。
- `author`: 表明目标为作者，比如内容放为邮件
- `help`: 表明目标为帮助页面
- `license`: 表明目标为版权页面
- `search`: 表明目标为搜索页面

**仅`a`和`area`**
- `bookmark`: 表明当前页面所属的最近上级`article`或`section`祖先标签
- `tag`: 网页所属标签的文档链接。
- `external`: 强调为外部链接。
- `noofollow/noopener/nooreferrer/opener`: 对浏览器或引擎指定该链接的处理行为。

**仅`link`**
- `canoonical`: 指定在重复URL指向同一页面时应保留哪个URL。
- `shortlink`: 当前页面的短链接，主要用于即使消息分享链接时。

### 外部资源 ###

**仅`link`**
- `icon`: 页面图标。结合`media`、`type`、`sizes`属性可以使浏览器从多个图标中根据情况选择最合适的。
- `dns-prefetch/preconnect/prefetch/preload/prerender/modulepreload`: 一系列预处理，让浏览器不按照默认流程，而是提前对指定资源进行操作。**在优化性能时常常用到。**
- `stylesheet`: 引入样式表。也可以结合`rel="alternate"`和定制`title`属性添加可选样式表，以达到多种样式表供选用。
- `pingback`: 适用于在Pingback协议环境下，当本网页被引用或评论时，所以调用的外外部pingback地址。

:::tip 配置完整的图标体系
一般完善的网站图标设置，会准备一系列的不同大小的图标甚至格式，结合对应的元信息标签，来达到不同设备环境上的最优图标显示。

可以考虑使用网上类似[favicon generator](https://www.favicon-generator.org/)这样的免费网站来生成一套对应的图标及如下代码

```HTML
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
```
:::
 
