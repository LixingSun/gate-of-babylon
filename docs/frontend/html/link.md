---
id: link
title: 链接标签
sidebar_position: 2
---

# 链接标签

并不是只有常用的`<a>`代表着链接，还有常在`<head>`部分出现的`<link>`和不常见的`<area>`。

## [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

作为最常用的标签之一，`a`标签的用法多种多样，既有常用内外跳转，也有像触发电话邮件这样的功能。

```HTML
<a href="https://lixingsun.github.io/gate-of-babylon/" target="_blank">外部链接</a>

<a href="#link">页面内部跳转</a>

<a href="tel:+491570156">电话</a>
<a href="mailto:+491570156">邮件</a>
```

:::tip 响应特定协议
可以通过注册`Navigator.registerProtocolHandler()`来处理特定的协议，可以是`tel:`和`mailto:`也可以是其他自定义的。
:::

## [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

与前面显式出现在页面上的`a`相比，`link`最大的区别在于它是不显示内容的元数据标签。结合`rel`属性，`link`有非常多不同的作用。

## [area](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)

可以当作区域型`a`标签。只能和`<map>`、`<img>`一起使用，以达到在图片上选择特定区域创造链接的作用。

```HTML
<img src="logo.png" usemap="#shape">
<map name="shape">
    <area shape="circle" href="#home" target="_self" />
</map>
```

:::tip 唯一支持非矩形热区的标签
通过指定`shape`属性来选择矩形`rect`、圆形`circle`或多边形`poly`
:::

## rel属性
链接类型的标签，都有一个通用的`rel`属性，表示与目标之前的关系。详细列表可参考[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)