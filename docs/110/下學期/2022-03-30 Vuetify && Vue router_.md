---
title: Vuetify II
sidebar_position: 5
description: Vuetify II
tags: [孟憲]
---

:::info
[原始 MD by 孟憲](https://hackmd.io/@JimmyHsieh-0129/rJ1Wk_gQ5#/)
:::

# Vuetify && Vue router?
By Jimmy
111/03/30

---

## 快速複習
上禮拜太多人沒有來...所以打算快速重講一次(X

---

## Vue Review --

### Folder Structure

----

![](https://i.imgur.com/ZBVIeWQ.png)

----

#### node_modules
存放經npm/yarn安裝後的套件

#### public
公共檔案目錄（不經壓縮處理）

----

#### src
開發目錄上層
* assets 主要為靜態資源--css.image.icon.font...
* **components 頁面元件存放路徑(bar...)**
* **router 路由定義**
* **views 路由元件(login/register...)**
* **app.vue 專案主元件，在此進行路由切換**
* main.js 初始化vue元件並load需要的plugins

----

#### babel.config.js
babel規則配置檔
#### package.json
project的元件包
#### yarn.lock
統一鎖定所有套件的版本號，避免不可預測的bug出現

---

## Vuetify 基本介紹

----

### Website = Html + Css + JavaScript

----

## Just HTML

![](https://i.imgur.com/ckXbMRU.png)

----

## 透過CSS來美化網頁

----

### Vuetify：建立在Vue.js之上的一種Material Design框架
### 美化介面的一種工具

---

## Vuetify基礎教學

----

## [v-app](https://vuetifyjs.com/zh-Hans/components/application/)
#### 幫助user在跨瀏覽器時，自動變更成適合那個瀏覽器的重要組件，缺乏他的話可能會造成你在跨瀏覽器時出現問題，而且還找不到原因！
#### （EX: Firefox執行正常，但Chrome可能直接壞掉）

----

## [v-main](https://vuetifyjs.com/zh-Hans/components/application/)

#### 讓網頁內所有的組件在畫面縮小或放大時，能夠自己適應畫面的大小，而不會直接壞掉。

----

## [v-container](https://vuetifyjs.com/en/api/v-container/#links)
#### 幫組件跟組件之間抓出恰當的距離，才不會讓組件擠成一坨。
### 基本上組件都是放在v-container裡面

----

## [v-col & v-row](https://vuetifyjs.com/zh-Hans/components/grids/)
#### 只能row裡面放col, 不能col裡面放row！！
![](https://i.imgur.com/iQ7pBpW.png =500x)

----

### v-col??
由於vuetify本身的cols，屬性是以手機為標準，並把螢幕切成12等分，所以可以想像一下card可以放多少cols在裡面。

Q:如何把手機跟電腦螢幕大小做區隔？
A:直接加屬性在col上面就行了，至於斷點的部分在說明文件上都有詳細描述。

----

## [v-card](https://vuetifyjs.com/zh-Hans/components/cards/)
#### 簡單來說就是一般的卡片（ex賀禮卡），有一定的格式跟規範，如果不想follow格式的話，也可以用"v-sheet"。

---

### 以上ㄉ內容是我上禮拜講的大致內容，讓我們繼續～～

----

## [v-app-bar](https://vuetifyjs.com/en/components/app-bars/)
### 顧名思義就是網頁上面那條bar(YunNET)
![](https://i.imgur.com/AdpkPnt.png)

----

* v-app-bar
bar最基本的語法（color.size...)
* v-app-bar-nav-icon (三橫線、抽屜) ![](https://i.imgur.com/2AmsiW1.png)

* v-app-bar-title(v-toolbar-title)
* *collapse-on-scroll*

----

## [v-app-btn](https://vuetifyjs.com/en/components/buttons/#usage)

---

## 我們來review一下vue基本語法
## 
## 先來建立vue projectㄅ

----

```shell=
vue create xx
```
### **xx為你要打的project name**

----

### 再來選“Manually select features”
![](https://i.imgur.com/usy96yy.png)
#### 按照圖片選（也就是再多選Router）就行

### 後面ㄉvue version請選2.0!

----

### formatter我自己一般選“EsLint+Prettier”
![](https://i.imgur.com/Bf52nUW.png)

----

```shell=
cd xx (xx為你打的project name)
```
### 加入vuetify套件進來
```shell=
vue add vuetify
```
![](https://i.imgur.com/BXKa4Np.png)
如果遇到這個問題，打yes就好

----

#### 選recommended~
![](https://i.imgur.com/97lb6T7.png)

#### 等他跑完...
```shell=
code .
```
### 打開VSCode

----

![](https://i.imgur.com/dApSg1Z.png)
如果跑出這ㄍ
**沒關係，就一樣打開vscode**

----

### 先進入homeview.vue
![](https://i.imgur.com/zyKg1XH.png)
把Home改成一個複合單字（Ex:HomeApple）
##### 註：後面在views建立檔案的時候，裡面的name記得一樣要用複合單字！

----

可以另外開一個terminal，然後進到project的資料夾
```shell=
yarn serve
```

----

## 先看components跟views
### components:
* Helloworld.vue 
### views:
* HomeView.vue
* Homeabout.vue

----

## 再來我們來看app.vue

----

## 最後的最後，我們來看router裡面的index.js
![](https://i.imgur.com/IhlM2MG.png)
hash vs history

----

![](https://i.imgur.com/lBactgM.png)

---

## 今天的目標：
### 試著刻出一個版，如圖：![](https://i.imgur.com/6qiakJZ.png)

----

* #### 包含app-bar, button(components.views).cards(24個)
* #### bar跟cards以components方式引入至index畫面
* #### 以router達成 點擊button時可跳轉到另一畫面（ex: helloworld）

----

#### cards的[參考資料](https://vuetifyjs.com/zh-Hans/examples/wireframes/extended-toolbar/)
#### vue router的[history mode](https://medium.com/%E6%8B%89%E6%8B%89%E7%9A%84%E7%A8%8B%E5%BC%8F%E7%AD%86%E8%A8%98/vue-router-hash-history-mode-d02175eb0d7c)