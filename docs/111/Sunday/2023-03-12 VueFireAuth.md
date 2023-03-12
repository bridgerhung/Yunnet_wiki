---
title: Vue OAuth with Firebase
sidebar_position: 7
description: HTML & CSS
Date: 2023/03/12
---

:::info 作者資料
[原始 MD by 綱庭](https://hackmd.io/@fan9704/BJlYLpG13#/)
:::

:::tip 原始碼
[github 原碼](https://github.com/fan9704/VueFireAuth)
:::

:::warning 依賴套件
firebase node.js github帳號 
:::

# Let's ~~Implement~~ Vue OAuth

---

## 回顧上篇 後端 Authentication 你還記得多少

[OAuth 2.0延伸閱讀](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E8%AA%8D%E8%AD%98-oauth-2-0-%E4%B8%80%E6%AC%A1%E4%BA%86%E8%A7%A3%E5%90%84%E8%A7%92%E8%89%B2-%E5%90%84%E9%A1%9E%E5%9E%8B%E6%B5%81%E7%A8%8B%E7%9A%84%E5%B7%AE%E7%95%B0-c42da83a6015)

----

### 簡單來說OAuth解決了這個問題(減少你的帳號數)

![](https://i.imgur.com/iaCfBh8.png)

----

### 那前端OAuth可以怎麼實作?

1. 到你想要使用OAuth的服務去看它們相關的API
2. 使用整合型OAuth(今天的方案)

---

## 認識它嗎?

![](https://i.imgur.com/oEGZMZr.png)

----

### Firebase Introduction

一個整合型服務，通常用在前端與手機應用程式

支援的SDK有
1. IOS
2. Android
3. Flutter
4. C++
5. Unity

----

### Firebase Features

事實上Firebase提供的服務非常的多這裡舉部分服務為例子

1. Realtime Base/Firestore 及時資料庫
2. Cloud Storage 雲端檔案儲存
3. Machine Learning 機器學習
4. Google Analytic 行動裝置分析
5. Cloud Message 雲端通知服務
6. Firebase Authentication OAuth整合服務

---

## Implement Part(Vue)

----

### Setup your Vue Application

```bash=
yarn create vite
```

----

### Member to select Vue

![](https://i.imgur.com/I0PVSWT.png)

----

### Enter Project

```bash showLineNumbers
cd VueFireAuth
code . #開啟VSCODE
yarn install #安裝套件
```

這樣基本專案就完成了


---

## Implement Part Firebase 

[Firebase Console](https://console.firebase.google.com/u/0/)

----

### Create a Firebase Project

![](https://i.imgur.com/nxeeL3w.png)

----

![](https://i.imgur.com/cAjItNL.png)
剩下就繼續下一步就OK了

----

### Firebase Auth Setup

![](https://i.imgur.com/kn7aV6F.png)

----

#### Select OAuth Provider

Let's Select GitHub
![](https://i.imgur.com/2G6DDCn.png)

----

#### Enable GitHub Login

![](https://i.imgur.com/145H266.png)

哪裡可以取得Client Id,Client Secret?

----

### Start GitHub Application

[GitHub Setting](https://github.com/settings/profile)  
找到他 Developer Settings  
![](https://i.imgur.com/x3ZAZQS.png)  

----

#### Create New App

[點這裡也可以直接進去](https://github.com/settings/apps/new)

填入Application名稱

----


##### Homepage URL/Webhook URL/Callback URL

在這裡啦

![](https://i.imgur.com/okgS6UP.png)

----

##### 生成完成App就可以獲得ID,Secret

一開始不會生成Secret請點選generate secret

填入FireAuth並儲存

![](https://i.imgur.com/1rdB4EB.png)

---

## Implement Part Vue X Firebase

[Fire Auth Offcial Doc](https://firebase.google.com/docs/auth)
[Complete GitHub Project](https://github.com/fan9704/VueFireAuth)

----

### Join Web App in Firebase

![](https://i.imgur.com/veafr4p.png)

給個App Name

----

### Save Your JS Config
![](https://i.imgur.com/BnluW2q.png)

----

### Firebase Core Setup in Vue

```bash=
yarn add firebase
```
建立資料夾utils且在裡面放firebaseCore.js且貼上前面的JS config
![](https://i.imgur.com/xPZqXCl.png)

----

### Add Fire Auth firebaseCore.js

```javascript showLineNumbers
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
export { auth, githubProvider }
```

---

## Complete

![](https://i.imgur.com/fs2KWKE.png)



