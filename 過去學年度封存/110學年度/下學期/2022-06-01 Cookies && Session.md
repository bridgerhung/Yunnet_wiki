---
displayed_sidebar: older
title: Cookies/Session
sidebar_position: 11
description: Cookies/Session
---

:::info
[原始 MD by 珉萁](https://hackmd.io/@minouo/SyzYvBZ_q#/)
:::

# Cookies && Session
*Min*

---

## 先來聊聊HTTP吧

----

http本身是個無狀態(Stateless)的協議，可以在Client與Server兩端進行溝通，但是無法紀錄網路上的行為。
一般而言，今天如果要登入一個網站，每次訪問該網站時，就需要將登入帳密再輸入一次，使用起來會非常不便。

----

Cookie和Session因此誕生，解決無紀錄狀態的問題。

---

## Cookie

----

是一段由Server送給使用者瀏覽器的一小塊~~餅乾~~資料。

----

### cookie的格式 key:value

![](https://i.imgur.com/QEYEXYB.png)
先建立一個key->test value->123的cookie

----

![](https://i.imgur.com/abconv4.png)
可以在F12 -> Application -> Cookies裡看到目前的Cookies

----

特性
* 特定網域：只針對原本的 網域(domain) 起作用。舉例: 在 \*.myExample.com 存入的 cookie，不會出現在 *.not-myExample.com
* 有生命期限: 到了所設定的生命期限之後會失效。

---

## Session

----

Session 負責紀錄在 server端上的使用者訊息，存下所需的用戶資料，接著產生一組對應的ID，存入 cookie 後傳回用戶端。

----

在server端設定session
![](https://i.imgur.com/0oEu16v.png)
client端會得到 session ID
![](https://i.imgur.com/nUIOc2W.png)

----

server端就能透過session ID取得user的值了
![](https://i.imgur.com/733zZO6.png)

![](https://i.imgur.com/QlkfmxX.png)

---

## 這樣講感覺有點枯燥

----

## 我們來實戰看看吧

還記得之前綱庭教過的爬蟲嗎 [連結](https://hackmd.io/@fan9704/rJzCRdMnt#/6/2)

----

安裝一下pipenv跟Requests吧
```bash=
pip3 install pipenv #安裝pipenv
mkdir crawler_test #建立專案資料夾
cd crawler_test
pipenv shell #pipenv初始化專案資料夾
pipenv install requests
pipenv install bs4
```

---

## 來做一個雲科單一爬蟲吧

----

先試試直接拜訪首頁的話
會發生什麼事
![](https://i.imgur.com/qP7UpL3.png)

----


### 接著點開F12 -> network來看看他是怎麼登入的

----

似乎是對這個網頁post一筆資料過去
![](https://i.imgur.com/wILKe2Y.png)

----

接著點進payload來看究竟送了什麼
![](https://i.imgur.com/NUHGjLz.png)

----

__RequestVerificationToken ???

----

```python=
loginURL = "https://webapp.yuntech.edu.tw/YuntechSSO/Account/Login"
r = requests.get(loginURL)
tokenDOM = BeautifulSoup(r.text, "html.parser").select_one("input[name='__RequestVerificationToken']")
print(tokenDOM["value"])
```

----

把剛剛__RequestVerificationToken帶進去
```python=
payload = {
  "__RequestVerificationToken": tokenDOM["value"],
  "pRememberMe": False,
  "RedirectTo": "",
  "redirectUrl": "",
  "pLoginName": "B10900000",
  "pLoginPassword": "p@ssW05d"
}
loginRes = requests.post(loginURL, data=payload)
print(loginRes.text)
```
就可以登入了
嗎?

---

## 好像還是不行，那我們到底還缺了什麼呢

----

## 沒錯 cookie
由於__RequestVerificationToken是跟cookie綁在一起的

----

要登入時也要把一開始的cookie帶進去
```python=
loginRes = requests.post(loginURL, data=payload, cookies=r.cookies)
```

----

完整程式碼
```python
import requests
from bs4 import BeautifulSoup


def main():
  loginURL = "https://webapp.yuntech.edu.tw/YuntechSSO/Account/Login"

  r = requests.get(loginURL)
  tokenDOM = BeautifulSoup(
      r.text,
      "html.parser").select_one("input[name='__RequestVerificationToken']")

  payload = {
      "__RequestVerificationToken": tokenDOM["value"],
      "pRememberMe": False,
      "RedirectTo": "",
      "redirectUrl": "",
      "pLoginName": "B10900000",
      "pLoginPassword": "p@ssW05d"
  }
  loginRes = requests.post(loginURL, data=payload, cookies=r.cookies)
  print(loginRes.text)


if "__main__" == __name__:
  main()
```


----

不想一直把cookie帶著怎麼辦
或許可以試試看session
```python
import requests
from bs4 import BeautifulSoup


def main():
  loginURL = "https://webapp.yuntech.edu.tw/YuntechSSO/Account/Login"
  session = requests.session()
  r = session.get(loginURL)
  tokenDOM = BeautifulSoup(
      r.text,
      "html.parser").select_one("input[name='__RequestVerificationToken']")

  payload = {
      "__RequestVerificationToken": tokenDOM["value"],
      "pRememberMe": False,
      "RedirectTo": "",
      "redirectUrl": "",
      "pLoginName": "B10900000",
      "pLoginPassword": "p@ssW05d"
  }
  loginRes = session.post(loginURL, data=payload)
  print(loginRes.text)


if "__main__" == __name__:
  main()
```

---

## 延伸閱讀

[一個搶課機器人](https://github.com/kukina622/yuntech-course-crawler)

[一些安全問題](https://devco.re/blog/2014/06/11/setcookie-httponly-security-issues-of-http-headers-3/)

----

## 接著明年就換你們教課了
## 加油哦 d(`･∀･)b
