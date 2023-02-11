---
title:  Let's expriment HTTP!
sidebar_position: 3
description: Let's expriment HTTP!
---

:::info
[原始 MD by 羅宏](https://hackmd.io/@YunNet21st/ryWyb_RBU#/)
:::


---

# HTTP methods
- **GET**
- **POST**
- PUT
- DELETE
- ..etc

---

# Get Insomnia

## https://insomnia.rest/download/

---

# Create a new request
with Insomnia

----

![](https://i.imgur.com/yhkRCez.png)

----

![](https://i.imgur.com/0k3D8WI.png)

----

![](https://i.imgur.com/fvCgRFQ.png)

----

![](https://i.imgur.com/xNys2FG.png)

---

# 登入 YunNET
with Insomnia
`https://yunnet.zeinok.eu.org`

----

![](https://i.imgur.com/3NsrxOT.png)

----

![](https://i.imgur.com/zq0RpsF.png)

----

![](https://i.imgur.com/w5iMDlJ.png)

----

## 取得個人資料
![](https://i.imgur.com/oLMDU1p.png)

---

# Let's try
## Realworld API
`https://conduit.productionready.io/api/`

----

## 註冊

`POST https://conduit.productionready.io/api/users`

```jsonld=
{
  "user": {
    "username": "hugo",
    "email": "hugohugo@gmail.com",
    "password": "hugohugo"
  }
}
```

----

![](https://i.imgur.com/C5fLFlG.png)

----

## 登入
`POST https://conduit.productionready.io/api/users/login`

![](https://i.imgur.com/z9G06c6.png)

----

## 取得個人資料
請先複製 token
![](https://i.imgur.com/jo9DWhG.png)

----

## 設定 HTTP 要求方法及不傳送 Body


![](https://i.imgur.com/sQ10Uns.png) ![](https://i.imgur.com/04anEhr.png)

----

![](https://i.imgur.com/Kbemlpg.png)

----

成功
![](https://i.imgur.com/xn5a92z.png)

---

# Import Pre-defined RealWorld API data

![](https://i.imgur.com/jfnmsSl.png)

----

![](https://i.imgur.com/N7lL6GW.png)

----

![](https://i.imgur.com/pn4YI44.png)

`https://raw.githubusercontent.com/gothinkster/realworld/master/api/Conduit.postman_collection.json`

----

![](https://i.imgur.com/P7NWiYq.png)

----

![](https://i.imgur.com/NoiFB6z.png)

----

## 編輯變數
![](https://i.imgur.com/CtJYlg4.png)

----

```json
{
  "APIURL": "https://conduit.productionready.io/api",
  "USERNAME": "hugohugo",
  "EMAIL": "hugohugo@gmail.com",
  "PASSWORD": "hugohugo",
  "token": "登入後在此放入token"
}
```
![](https://i.imgur.com/PQ3iGqZ.png)

----

Before
![](https://i.imgur.com/mrapOnt.png)

----

After
![](https://i.imgur.com/d7raZlK.png)

----

接下來你自己試
:)

---

# 挑戰
透過 Insomnia 更改 trainee 底下 IP 的 MAC
