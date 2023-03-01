---
title: cookie and session 
sidebar_position: 11
description: cookie and session 
---

:::info 
[原始 MD by 智遠](https://hackmd.io/@SSu0I1JSQLWpYhA1iVAKZg/B11RN7wui#/)
:::

---

![](https://i.imgur.com/SYZmAbQ.png)

---

## 觀察

進入開發者模式

![](https://i.imgur.com/zzgVdwM.png)

---

## Clone

```bash=
git clone https://github.com/lowql/simple-cookie-session.git
cd simple-cookie-session
```

---

## Run

```bash=
npm install
node login.js
```

###

http://127.0.0.1:8080

### in wsl

```
ip addr
```

![](https://i.imgur.com/RGmXGBK.png)

---

## Lab

---

### Lab1

---

在登錄頁面嘗試重整
![](https://i.imgur.com/yliOLm0.png)

---

### Lab2

---

#### 登錄 && 重整

```json=
Email: 'tony@stark.com'
password: '123'
```

---

Session ID 是不是都一樣了呢?

---

#### 觀察開發人員視窗

---

#### 嘗試刪除看看

![](https://i.imgur.com/eOOL82r.png)

---

是不是被登出了 =3=

---

## 認證流程

![](https://i.imgur.com/wUPbJfr.png)

---

這樣講感覺有點枯燥

---

我們來實作些有趣的東西

---

安裝一下 pipenv 跟 Requests

```bash=
pip3 install pipenv #安裝pipenv
mkdir crawler_test #建立專案資料夾
cd crawler_test
pipenv shell #pipenv初始化專案資料夾
pipenv install requests
pipenv install bs4
```

來做一個雲科單一爬蟲

---

但大多數好像只有聽過爬蟲，
沒有實際操作過，所以先來
演示一下今天的目標

---

用腳本模擬登陸

---

登陸失敗
![](https://i.imgur.com/lu1iCz8.png)

---

登陸成功
![](https://i.imgur.com/Yio3YXc.png)

---

來個最簡單請求

```python=
import requests
from bs4 import BeautifulSoup

loginURL = "https://webapp.yuntech.edu.tw/YuntechSSO/Account/Login"
r = requests.get(loginURL)
print(r.text)
```

---

運用看看剛剛學到的 POST 知識
![](https://i.imgur.com/fFCuY81.png)
![](https://i.imgur.com/HipFK12.png)

---

```python=
import requests
from bs4 import BeautifulSoup



loginURL = "https://webapp.yuntech.edu.tw/YuntechSSO/Account/Login"

r = requests.get(loginURL)
tokenDOM = BeautifulSoup(r.text,"html.parser").select_one("input[name='__RequestVerificationToken']")
print("tokenDOM :: ",tokenDOM)

payload = {
    "__RequestVerificationToken": tokenDOM["value"],
    "pRememberMe": False,
    "RedirectTo": "",
    "redirectUrl": "",
    "pLoginName": "B11017055",
    "pLoginPassword": "****<your passwd>*****"
}
loginRes = requests.post(loginURL, data=payload, cookies=r.cookies)

soup = BeautifulSoup(loginRes.text, 'html.parser')

# print(loginRes.text)
title = soup.find_all('h2')
for s in title:
  print(s)

```

---

有成功嗎?

---

好像漏了什麼重要的東西?

---

Cookie

---

將 Post request 加上 Cookie =^=

```python=
loginRes = requests.post(loginURL, data=payload, cookies=r.cookies)
```

---

是不是成功了呢?

---

也可以試看看使用 Session

```python=
import requests
from bs4 import BeautifulSoup


def main():
  loginURL = "https://webapp.yuntech.edu.tw/YuntechSSO/Account/Login"

  session = requests.session()
  r = session.get(loginURL)

  tokenDOM = BeautifulSoup(r.text,"html.parser").select_one("input[name='__RequestVerificationToken']")
  print("tokenDOM :: ",tokenDOM)

  payload = {
      "__RequestVerificationToken": tokenDOM["value"],
      "pRememberMe": False,
      "RedirectTo": "",
      "redirectUrl": "",
      "pLoginName": "B11017055",
      "pLoginPassword": "****<your passwd>****"
  }

  loginRes = session.post(loginURL, data=payload)

  soup = BeautifulSoup(loginRes.text, 'html.parser')
  title = soup.find_all('h2')
  for s in title:
    print(s)

if "__main__" == __name__:
  main()
```

---

都成功了嗎?

---

恭喜你的意外解鎖了一項資安成就 :laughing:

---

延伸閱讀  
[CSRF 簡單講解](https://medium.com/@Tommmmm/csrf-%E6%94%BB%E6%93%8A%E5%8E%9F%E7%90%86-d0f2a51810ca)  
[.Net 框架 實作](https://dotblogs.com.tw/SteveLiu/2019/06/12/172502)

---

過去學長的延伸閱讀  
[搶課機器人](https://github.com/kukina622/yuntech-course-crawler)  
[資安觀念](https://devco.re/blog/2014/06/11/setcookie-httponly-security-issues-of-http-headers-3/)
