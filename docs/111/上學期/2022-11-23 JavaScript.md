---
title:  JavaScript
sidebar_position: 6
description: JavaScript
tags: [琦龍]
---

:::info
[原始 MD by 琦龍](https://hackmd.io/@Anong0u0/B1O4KoXIi#/)
:::

---

由於各位或多或少都已經會程式基礎了
~~上次 C#很慘~~
所以我們今天著重在 JS 的特殊用法~

---

## 在這堂課你會了解到...

- JS Declaration
- Ternary Operator
- Template Strings
- For Iteration
- ... (rest & spread)
  ​ ​ ​ ​ ​ ​ ​ ​ ↓

---

- Object
- Prototype
- Arrow Function & this
- String & Array Prototype
- ~~Timing Function~~
- ~~Promise & async~~
- ~~JS Fuck~~

---

### 練習環境

[瀏覽器](about:blank) (F12 dev tool)  
NodeJS
[Online Compiler](https://codepen.io/) (不推薦)

---

## JS Declaration(JS 宣告)

還記得上禮拜 C#講的嗎?
由於 JS 是動態語言，
宣告被簡化成以下三個:

- var
- let
- const

---

### var(全域變數)

存活於 function 內，
可重複宣告，宣告前存取為 undefined
宣告會自動提升(hoisting)到 function 開頭

```javascript=
...1
var test = "Hi";
...2
var test = "<3";
```

```javascript=
var test;
...1
test = "Hi";
...2
test = "<3";
```

以上兩個相等

---

### let(區域變數)

存活於 block 內
**不可**重複宣告，宣告前存取 Error

```javascript=
console.log(test1);
let test1 = "❓";
// Uncaught ReferenceError: Cannot access 'test1' before initialization

{
    let test2 = "😵";
}
console.log(test2);
// Uncaught ReferenceError: test2 is not defined
```

---

### const(區域常數)

等同於 let，但**不可再次賦值**

```javascript=
const test3 = "😡";
test3 = "😰";
// Uncaught TypeError: Assignment to constant variable.
```

---

## Operator(運算子)

還記得上次 C#的內容嗎?
![](https://i.imgur.com/K54m3cw.jpg)
補充 JS 有\*\*(次方運算)

---

### 「===」

由於 JS 是弱型別語言，
所以我們需要一個比較運算子判斷型態相同

```javascript=
1=="1"  // true
1==="1" // false
```

---

### Ternary Operator(三元運算子)

記得 if 語法嗎?
可以縮寫喔

```javascript=
let a = 1;
if(a==="1")
    console.log("是1")
else
    console.log("不是1")
```

```javascript=
let a = 1;
console.log((a==="1") ? "是1":"不是1")
```

---

## Template Strings(樣板字串)

你是否有遇過以下狀況?

```javascript=
let year=2222,
    month=2,
    day=22,
    hour=2,
    minute=22,
    second=22;
console.log("現在時間是: "+year+"/"+month+"/"+day+
            " "+hour+":"+minute+":"+second);
// 現在時間是: 2222/2/22 2:22:22
```

想把變數跟字串一起輸出，但一堆+很難看?

---

```javascript=
console.log(`現在時間是: ${year}/${month}/${day} ${hour}:${minute}:${second}`);
```

這樣是不是好看了一點?
並且樣板字串可以跨行

```javascript=
console.log(`1
2
3`);
/*1
2
3*/
```

---

## For Iteration(for 迭代)

是否曾經寫過類似的程式?

```javascript=
const data = [18,84,45,36,70,28,61,87];
let count = 0;
for (let i=0; i<data.length; i++)
{
    if(data[i]<60) count++;
}
console.log(`有${count}個人不及格😰`);
// 有4個人不及格😰
```

只是想跑一遍 data 這個 Array，
但要寫一大串很麻煩?

---

### 隆重介紹 in、of、forEach！

```javascript=
const data = [18,84,45,36,70,28,61,87];

for (let i in data)
{
    console.log(i) // 以index迭代
}

for (let v of data)
{
    console.log(v) // 以value迭代
}

data.forEach(console.log); // value, index, array
```

大家試試看吧~

---

## ... (Spread)

我想搜尋陣列裡的最小值該怎麼辦?

```javascript=
const data = [18,84,45,36,70,28,61,87];
console.log(Math.min(...data));
// 18
```

```javascript=
console.log(["開頭", ...data, "結尾"]);
// ['開頭', 18, 84, 45, 36, 70, 28, 61, 87, '結尾']
```

使用...可以將 Array 內的 value 展開

---

### ... (Rest)

不確定 function 會輸入幾個參數怎麼辦?

```javascript=
function test1(a, ...input)
{
    console.log(a, input);
}
test1(null, true, "ABC"); // null [ true, 'ABC' ]
test1(); // undefined []
test1(1,2,3,4,5,6,7,8,9); // 1 [2, 3, 4, 5, 6, 7, 8, 9]
```

可以將最後一個參數定為 Array
要注意的是只能放最後一位

---

## Object

什麼是 Object?
在 JS 裡是字典(dictionary)
{ key1: value1, key2: value2, ... }

```javascript=
const obj = {};
obj["hi"] = true;
obj.hello = "😋";
console.log(obj);
console.log(obj["hello"]);
console.log(obj.hi);

const newObj = {"我是":"新的", ...obj};
console.log(newObj);
```

---

### Prototype(原型)?

簡單來說就是各個 Object 的共通屬性(通常是 function)

```javascript=
console.log(String.prototype == "".__proto__)
// true

console.log("貓該怎麼叫?".meow());
// Uncaught TypeError: "貓該怎麼叫?".meow is not a function
String.prototype.meow = function()
{
    return "喵".repeat(this.length);
}
console.log("貓該怎麼叫?".meow());
// 喵喵喵喵喵喵

console.log((123).zero); // undefined
Number.prototype.zero = 0;
console.log((123).zero); // 0
```

---

## what is this?

有注意到上一頁的 meow 內部有用到 this 嗎?
那麼什麼是 this 呢?
簡單來說，this 會根據場景回傳當前的 Object

```javascript=
console.log(this);
String.prototype.showSelf = function()
{
    console.log(this);
}
"你好".showSelf();
```

- 延伸閱讀: [之前學長做的 this 教學](https://hackmd.io/@happy123/JSthis#/)

---

### Arrow Function

又稱箭頭函式、~~lambda~~

```javascript=
() => {} // 標準格式，return需額外寫
e => {} // 只有一個參數可省略()
(a,b) => a+b // 只有一行可省略{}，並return

String.prototype.arrowFunc = ()=>{console.log(this)}
"ABC".arrowFunc();
// 試試看什麼效果?
```

---

## String Prototype

[**Mozilla Wiki**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- at
- indexOf / lastIndexOf
  - includes
- padStart / padEnd
- repeat
- replace / replaceAll

---

- split
- substring
  - slice
- toLowerCase / toUpperCase
- trim
  - trimStart
  - trimEnd

---

### at

類似於[]，但可使用負數

```javascript=
const s = "ABCDEFG";
console.log(s[1]); // B
console.log(s.at(-6)) // B
```

---

### indexOf

從 string/end 搜尋指定 String**位置**，找不到回傳-1
`lastIndexOf` 從 end
`includes` 是否包含指定 String

```javascript=
const s1 = "ABCDCBA";
console.log(s1.indexOf("B")); // 1
console.log(s1.lastIndexOf("B")); // 5
console.log(s1.includes("CDC")); // true

(s1.indexOf("ABC") != -1)
(s1.includes("ABC"))
// 以上兩行結果相等
```

---

### pad

從 start/end 填補 String 直到指定長度

```javascript=
const s2 = "ABC";
console.log(s2.padStart(7, "123"));
// 1231ABC
console.log(s2.padEnd(7, "123"));
// ABC1231
```

---

### repeat

重複 String 指定次數

```javascript=
console.log("123 ".repeat(5));
// 123 123 123 123 123
```

---

### replace

取代 String 一次/所有

```javascript=
const s3 = "😠😠😠😠";
console.log(s3.replace("😠", "😡"));
// 😡😠😠😠
console.log(s3.replaceAll("😠", "😡"));
// 😡😡😡😡
```

---

### split

透過指定 String 分割整個 String 為 Array

```javascript=
const s4 = "123/456/789";
console.log(s4.split("/"));
// ['123', '456', '789']
```

---

### substring

透過索引(index)提取 String
`slice` 可為負數

```javascript=
const s5 = "How are you?";
console.log(s5.substring(4, 10));
console.log(s5.slice(-8, -2));
// are yo
```

---

### to...Case

英文轉 大/小 寫

```javascript=
console.log("A".toLowerCase()); // a
console.log("a".toUpperCase()); // A
```

---

### trim

移除頭尾空格、換行字符
可單獨移除 start/end

```javascript=
const s6 = "\nABC123 ";
console.log(s6.trim());
console.log(s6.trimStart());
console.log(s6.trimEnd());
```

---

## Array Prototype

[**Mozilla Wiki**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

- at
- indexOf / lastIndexOf
  - includes
- pop / push
- shift / unshift
- join
- reverse

---

- forEach
- filter
- map
- every / some
- slice

---

### join

將 Array 元素透過 String 組合起來

```javascript=
const a1 = [123, 456, 789];
console.log(a1.join("-"));
// 123-456-789
```

---

### reverse

將 Array 顛倒過來

```javascript=
const a2 = [123, 456, 789];
console.log(a2.reverse());
// [789, 456, 123]
```

---

### forEach

輸入一個 function，對每個值做一次

```javascript=
const data = [18,84,45,36,70,28,61,87];
let count = 0;
data.forEach((score) =>
{
    if (score<60) count++;
});
console.log(`有${count}個人不及格😰`);
```

---

### filter

輸入一個 function，過濾掉 false 的值

```javascript=
const data = [18,84,45,36,70,28,61,87];
let count = data.filter((score) => score<60).length;
console.log(`有${count}個人不及格😰`);
```

---

### map

輸入一個 function，對每個值做一次，
並將 return 組成一個新 Array

```javascript=
const data = [18,84,45,36,70,28,61,87];
let newData = data.map((score) => (score**0.5)*10);
console.log(newData);
```

---

### every / some

輸入一個 function，
檢測 Array 內是否 全部/至少一個 達成條件

```javascript=
const data = [18,84,45,36,70,28,61,87];
console.log("所有人高於10分?",
data.every((score)=>score>10));
console.log("至少一人高於90分?",
data.some((score)=>score>90));
```

---

### slice

擷取 Array，可輸入負數

```javascript=
const data = [18,84,45,36,70,28,61,87];
console.log(data.slice(-5, -1));
console.log(data.slice(3, 7));
// [36, 70, 28, 61]
```

---

## Timing Function

```javascript=
setTimeout(fn, ms);
setInterval(fn, ms);
```

---

## Promise & async

```javascript=
const delay = (ms=0) => {return new Promise((rs)=>{setTimeout(rs,ms)})}
(async ()=>
{
    let count = 0;
    while(true)
    {
        await delay(1000);
        console.log(`Hi, ${++count}`);
    }
})()
```

---

## JS Fuck

[fuck](http://www.jsfuck.com/)

```javascript=
(!![]+[])+(![]+[])
// 執行看看?
```

---

# End
