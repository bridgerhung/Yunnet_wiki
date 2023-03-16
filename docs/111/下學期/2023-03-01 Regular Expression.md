---
title: 正規表達式
sidebar_position: 1
description: 正規表達式
Date: 2023/3/1
---

:::info 作者資料
[原始 MD by 琦龍](https://hackmd.io/@Anong0u0/ryuEFu-Fi#/)
:::

## 正規表達式
`Regular Expression`
從入門到入土

---

## 放在前面

Regex
- 適用於:
    所有需要字串**驗證、比對、搜尋、擷取**等場景
- 不適用於:
    長文匹配(效能問題)
    不支援環境

----

工具
- [本機JS調試(F12 Dev Tool)](about:blank)
- [線上測試Regex101](https://regex101.com/)
- [規則一覽Wiki](https://zh.wikipedia.org/zh-tw/正規表示式#PCRE表达式全集)

---

## 引入
各位是否遇過需要搜尋**特定字串**的情況?
假定要從Youtube網址中擷取出影片ID(v=xxxxxxxx)
在輸出`3HDP4xp8Oj4`的前提下，各位會如何做呢?
```=
https://www.youtube.com/watch?v=3HDP4xp8Oj4&feature=youtu.be
```

----

使用[String.split](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/split)?
使用[URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams)?

或者...
使用[正規表達式](https://google.com/search?q=regex)!?

----

[**測試網址**](https://jsbench.me/dxlegluvt7)
![](https://i.imgur.com/zrY4Tbg.png)

---

## 規則
- \
- ?、+、\*、{}
- ()、|
- []
- ^、$、\b
- (?=)
- flag

---

### 字元匹配
在Regex內的一般文字將直接配對
```javascript=
/abc/ // 匹配abc

"123abc456".match(/abc/)
// ['abc', index: 3, input: '123abc456', groups: undefined] 
```
**「.」** 可以匹配`\r\n`(換行字元)以外任何字元
```javascript=
/tr.../ // tr以及任意三個字元

"trick or treat".match(/tr.../g)
// ['trick', 'treat']
```

----

### 集合
`[]`中括號內的字元，
會以「或」的形式當成**一個普通字元**配對
```javascript=
/[早午晚]安/ // 早安 or 午安 or 晚安

"早安 午安 晚安 平安".match(/[早午晚]安/g)
// ['早安', '午安', '晚安']
```
`[]`內可以使用`「-」`表示連續的「或」
```javascript=
/[0-9A-Za-z]/ // 數字+英文字母大小寫

"59分 87分 8a分".match(/[6-9][0-9]分/g)
// ['87分']
```

----

#### 反集合
在`[]`的開頭加入跳脫字元`「^」`
代表**除了涵蓋內**的字元都可以配對
同樣可以使用`「-」`表示連續排除
```javascript=
/[^abc123ABC]/

// 排除小寫a-z與空格
"Apple book Cat Docker".match(/[^a-z ]../g)
// ['App', 'Cat', 'Doc']
```

---

### 量詞
`{}`量詞均**代表前面的表達式**重複次數
- `{x}` **剛好**出現x次
- `{x,}`**至少出現x次**，**至多無限**次
- `{x,y}`至少出現x次，且**至多只能**出現y次，
    同時x<=y (否則報錯)
- ⚠特別注意，`xy`只能是數字，
    並且`,`間不能有空格

想想看如果放入非數字，或者加空格會發生什麼?
[點我看答案](https://regex101.com/r/SWlI6H/1)

----

#### 量詞-縮寫
- `?`代表前面的表達式**可有可無** (0~1次) = `{0,1}`
- `+`代表前面的表達式**至少一次** (1~inf次) = `{1,}`
- `*`代表前面的表達式**隨意出現** (0~inf次) = `{0,}`
```javascript=
/https?:\/{2}example.com/ /*匹配example.com，且https或http皆可*/
/[0-9]+.[0-9]+/ /*匹配浮點數(有潛在問題)*/
/.*/ /*隨意匹配*/
```
想一下第二個範例的浮點數潛在什麼問題?
[點我看答案](https://regex101.com/r/EqiKZ1/1)


----

#### 非貪心量化
詳細介紹 [Regular expression: 貪婪、非貪婪](https://gist.github.com/yosiaken/dbe1e4f6a7f730ce5482981d9f251231)
簡單來講，在量詞後面加上`?`會盡可能減少配對
```javascript=
re  = /阿.+是蟑螂！*/
re2 = /阿.+?是蟑螂！*/
str = "阿啊啊啊是蟑螂啊啊啊幹幹幹幹幹幹是蟑螂！！！！ldsjghiwjp"
/* re  <------------------------------------>
   re2 <---------->
   貪婪與非貪婪的配對數量差距
*/
```
[貪婪效能測試](https://jsbench.me/mslelk3z68)

---

### 特殊字元「\」
反斜線`\`可以將字元轉譯，
包含轉譯成特殊字元(`bBdDfnrsStuvwWx`)，
以及轉譯回普通字元(`^$()*+?.[\{|`)

- `\f`匹配分頁符號(form-feed)
- `\n`匹配換行(line-feed)
- `\r`匹配回車(return)
- `\t`匹配製表符(horizontal tab)
- `\v`匹配垂直製表符(vertical tab)
- `\x--`以16進位的ASCII code匹配 (00~ff)
- `\u----`以10進位unicode匹配 (0000~9999)

----

#### 特殊字元-縮寫

| 符號   | 等效縮寫          | 匹配內容           |
| ----- | ---------------- | ----------------- |
| `\d`  | `[0-9]`          | 數字(*註1)         |
| `\D`  | `[^0-9]`         | 非數字             |
| `\s`  | `[\r\n\t\f\v ]`  | 空格、換行等(*註2)  |
| `\S`  | `[^\r\n\t\f\v ]` | 非空格、換行等      |
| `\w`  | `[A-Za-z0-9_]`   | 單字字元(*註3)     |
| `\W`  | `[^A-Za-z0-9_]`  | 非單字字元         |

----

以下狀況於Unicode的Regex出現
- 註1: `\d\D` 會符合/排除**全形**數字字元
- 註2: `\s\S` 會符合/排除**全形、特殊**空格
- 註3: `\w\W` 會符合/排除**各國文字**

---

### 群組
`()`小括號有三個功能
1. 提高匹配的優先順序
2. 把一段表達式包裹起來(通常用於量化)
3. 將括號內匹配到的擷取為群組輸出
```javascript=
"abc".match(/([a-z]+)/)[1] // abc
"abc".match(/[a-z]+/)[1] // undefined
```

----

#### 或
`|`將表達式分隔成左右兩段，以「或」的形式匹配
如果未放置在括號內，則作用在全域
```javascript=
"fool".match(/food|l/) // l
"fool".match(/foo(d|l)/) // fool
```

----

#### 命名/非捕捉 群組
`(?<name>)`在括號開頭加上`?<>`，
同時在`<>`內輸入文字即可為群組命名
`(?:)`如果不需要括號的捕捉功能，
可在括號開頭加上`?:`
```javascript=
"25歲".match(/(?<age>\d+)/).groups?.age // 25
"25歲".match(/(\d+)/).groups?.age // undefined

"abc".match(/([a-z]+)/)[1] // abc
"abc".match(/(?:[a-z]+)/)[1] // undefined
```

----

#### 向後參考
`()\num`當群組捕捉到文字時，
可在其後方使用向後參考匹配相同的文字
`\num`意思為第num個被捕捉到的文字
```javascript=
"一心一意".match(/(.).\1./) // 一心一意
"一石二鳥".match(/(.).\1./) // null
```

---

### 定位匹配
-  `^`匹配至**字串開頭**
-  `$`匹配至**字串結尾**
- `\b`匹配至**單字邊界**
- `\B`匹配**非單字邊界**
```javascript=
"123".match(/^\d+$/) // 123
"a123".match(/^\d+$/) // null

(/er\b/).test("never") // true
(/er\b/).test("version") // false
```

----

#### 向前/後看
「在一個字串中找出連續數字 6~8 個」
"12345 XD Hi12345678ab666666cd987654321"
只能輸出：12345678 和 666666
思考一下如何解決?
[點我看解答](https://regex101.com/r/55R5X8/1)

----

`X`與`Y`分別為一段表達式，
在`表達式X`的前/後加入`(?=)`或`(?!)`，
可以指定`表達式X`前/後方須出現的`表達式Y`。
※如果`Y`放在`X`前方，
則`?`的後方需要多一個小於(`<`)符號

----

ahead與behind可以合併使用，
且**不計入匹配範圍**
- look ahead
    - Positive： X(?=Y)
    - Negative： X(?!Y)
- look behind
    - Positive： (?<=Y)X
    - Negative： (?<!Y)X

[RegExp 應用： lookahead , lookbehind](http://darkk6.blogspot.com/2017/03/regexp-lookahead-lookbehind.html)

---

### 優先級

| 優先權 | 符號                        |
| ----- | -------------------------- |
| 最高   | `\`                        |
| 高     | `()`、`(?:)`、`(?=)`、`[]`  |
| 中     | 量詞 `*`、`+`、`?`、`{n}`   |
| 低     | `^`、`$`、中介字元           |
| 次低   | 相鄰字元                    |
| 最低   | `\|`                       |


---

### Flag

flag通常放置於雙斜線後方
```javascript=
/[\w\W]*/gmiu
```

| 符號   | 全稱        | 含義                 |
| ----- | ----------- | ------------------- |
| `g`   | Global      | 匹配所有可能          |
| `m`   | Multi line  | `^`、`$`可以匹配`\r\n`  |
| `i`   | Insensitive | 大小寫不敏感          |
| `u`   | Unicode     | 以unicode進行匹配     |

---

## 練習
[嘗試做做看IP驗證吧](https://regex101.com/r/jWbXsj/1)

---

## 結語
雖然Regex可以做的事很多，
但通常善用第三方lib會是更好的選擇。
例如時間驗證等等

----

## 參考
- [規則一覽Wiki](https://zh.wikipedia.org/zh-tw/正規表示式#PCRE表达式全集)
- [RegExp 應用： lookahead , lookbehind](http://darkk6.blogspot.com/2017/03/regexp-lookahead-lookbehind.html)
- [Regular expression: 貪婪、非貪婪](https://gist.github.com/yosiaken/dbe1e4f6a7f730ce5482981d9f251231)
- [淺談 regex 及其應用](https://marco79423.net/articles/淺談-regex-及其應用)
- [[JS] 正則表達式（Regular Expression, regex）](https://pjchender.dev/javascript/js-regex/)

---

# End