---
title:  CSS selector + User Script
sidebar_position: 6
description: CSS selector + User Script
Date: 2023/04/27
tags: [琦龍]
---
:::info 作者資料
[原始 MD by 琦龍](https://hackmd.io/@Anong0u0/Skv8oqrXh#/)
:::

---

測試環境
F12 Dev Tool

查詢CSS是否可用
[Can I Use](https://caniuse.com/)

---

## 基礎選擇器
[\*all](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)
[element](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)
[.class](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)
[#id](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)
[[attr]](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors) `([]、^、$、*)`
[`A, B`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)

----

## 組合選擇
[A B](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator)
[A > B](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator)
[A ~ B](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator)
[A + B](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)

----

## 偽類
[:hover](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover)
[:first-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)
[:last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child)
[:nth-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)
[:nth-last-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child)
[:is()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is)
[:not()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
[:has()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:has)

----

## 偽元素
[::after(:after)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)
[::before(:before)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)
[::selection](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection)

---

## User Script
User Script = HTML + CSS + JS

腳本管理器
Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)、[Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)、[Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/))
腳本分享網站
[GreasyFork](https://www.greasyfork.org)

[Tampermonkey Documentation](https://www.tampermonkey.net/documentation.php?locale=zh)
```js showLineNumbers
// @grant
// @require
```

----

## querySelector
```js showLineNumbers
document.querySelectorAll("selector") // NodeList
document.querySelector("selector") // Node
// querySelector = querySelectorAll[0]
```

----

```js showLineNumbers
window.location
document.createElement()
Node.append()
Node.addEventListener("event", callback)
Node.onevent = callback
MutationObserver
```

---

# End