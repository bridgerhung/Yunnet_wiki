---
title: Async + Ajax
sidebar_position: 9
description: Async + Ajax
Date: 2023/03/12
---

:::info 作者資料
[原始 MD by 珉萁](https://hackmd.io/@minouo/HyntdUX5t#/)
:::


# Async && Ajax
*Min*

---

## 同步與非同步

----

先來介紹一下這個
* setTimeout 

----

### setTimeout
setTimeout() 的作用 是在延遲了某段時間 (單位為毫秒) 之後，才去執行「一次」指定的程式碼
```javascript=
let timeoutID = setTimeout(function[, delay]);
```

可以試試看
```javascript=
let timeoutID = setTimeout(() => {
  console.log("Hello!"); //過了1秒才會執行
}, 1000);
```

----

### 試試看會發生什麼事
```javascript=
setTimeout(function(){console.log("0sec")}, 0);
console.log("Hi");
```

----

Javascript 是一種「單執行緒」的語言，如果安排了很多事情要給他做，他就會讓這些事情去排隊，再一件一件做。這就是所謂的同步，一次只做一件事情。
非同步的概念則是剛好相反，同時可以做很多件事情，不需要等到前一件事情做完才做下一件事情。

----

![](https://i.imgur.com/Gyvm8MF.png)

----

* setTimeout、ajax 是非同步的指令
* console.log、while、for是同步的指令

---

## Event loop
![](https://i.imgur.com/HSVtWac.png)

----

![](https://i.imgur.com/pOjNh4G.gif)

---

### callback function
其實就是一般的函式，差異只在 Callback function 是在指定時機才觸發的 function，目的是使開發者能準確掌握非同步的先後順序
```javascript=
// 像這邊ㄉ就是
setTimeout(function(){console.log("1sec")}, 1000);
```

----

也因為有些東西要等到callback呼叫完才能用，如果又要在callback裡使用callback的話，就很容易變成callback hell
![](https://i.imgur.com/HepreMM.png)

---

## Promise出現啦
用來改善 JavaScript 非同步的語法結構。
Promise 有三種狀態：pending, resolved, rejected。
new Promise 內的函式會立即被執行，當 resolve 得到內容後，才會執行 .then。

----


```javascript=
/**
 * Promise 基本使用
 * 在 new Promise 內的函式會被馬上執行，
 * 當 resolve 得到內容後，才會執行 .then。
 **/

const myPromise = function () {
  return new Promise((resolve, reject) => {
    console.log("In new Promise, start callback"); // 立即執行
    setTimeout(() => {
      let response = 10;
      console.log("I'll show delay 1 seconds");
      resolve(response);
    }, 1000);
  });
};

myPromise()
  .then((value) => {
    // 在 myPromise 被 resolve 時執行
    console.log("The answer is " + value);
  })
  .catch((error) => {
    // 在 myPromise 被 reject 時執行
    console.log("error", error);
  });
```

----

那callback hell會怎麼解決呢
```javascript=
const myPromise = function (response) {
  return new Promise((resolve, reject) => {
    console.log("In new Promise, start callback"); // 立即執行
    setTimeout(() => {
      console.log("I'll show delay 1 seconds");
      // 偶數就resolve、基數就reject
      if (response % 2 === 0) resolve(response); 
      else reject(response);
    }, 1000);
  });
};

myPromise(10)
  .then((value) => {
    console.log("偶數1 " + value);
    return myPromise(14)
  })
  .then(value => {
    console.log("偶數2 " + value);
    return myPromise(11)
  })
  .catch((error) => {
    console.log("基數 ", error);
  });

```

----

但這樣用起來還是有點麻煩
怎麼辦ㄋ

---

## Async && Await

是一個簡化Promise操作的語法糖

----

### async

用法是加在function前面，整個function的回傳會變成Promise
```javascript
async function a() {
  ...
}
```

----

### await

會把最後一個then回傳的值抓出來，但只能在async function裡使用;遇到reject會丟出error，因此有時候要用try catch包起來
```javascript
(async function () {
  const value1 = await myPromise(10)
  const value2 = await myPromise(10).then(() => {
    return 11;
  });
  console.log("value1 :" + value1); // 10
  console.log("value2 :" + value2); // 11
})();
```

---

## Ajax
非同步請求

----

在現在前後端分離的架構下，前端的資料通常都得透過ajax在運行中向後端取得，也就是俗稱的"call API"

----

在Vue中我們常用的非同步請求是axios
幫我把這份專案clone下來
[範例](https://github.com/kukina622/simple-vue-ajax.git)

----

記得clone完要載依賴ㄛ
```bash
npm i
```
載完就可以npm run dev跑起來了

----

### axios

基本用法如下，axios.(http method)就好，呼叫後會回傳一個Promise物件
```javascript
axios.get(url)
axios.post(url,data)
axios.patch(url,data)
axios.delete(url)
```
這是我們今天的範例API
https://dummyjson.com/products

----

從Promise接出來的值大概長這樣
```
{
    status:<http status code>,
    data: <http response>,
    ...
}
```

----

Promise的寫法
![](https://i.imgur.com/Yg4MRV6.png)

async await的寫法
![](https://i.imgur.com/vsrYlgI.png)

---

如果想自己試試看的，可以寫看看這份練習，雖然是Vue2
[天氣查詢](https://github.com/kukina622/weather.git)

答案在finish分支，git checkout finish就看的到ㄌ

----

## 結束ㄌ
