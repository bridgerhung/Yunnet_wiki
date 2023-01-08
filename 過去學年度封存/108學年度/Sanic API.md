---
displayed_sidebar: older
title:  Sanic API
sidebar_position: 2
description: Sanic API
---

:::info
[原始 MD by 羅宏](https://hackmd.io/@YunNet21st/r1LnLZSpS#/)
:::


---

前面的課程有教你建立虛擬環境及安裝 Sanic
那現在
就來寫後端吧 :D

---

# Sanic 基本介紹
Sanic 是一個非同步的網頁伺服器函式庫

---

建立 hello.py

```python=
from sanic import Sanic
from sanic.response import json

app = Sanic()

@app.route("/")
async def hello(request):
    return json({"message": "Hello!"})
```

---

執行 hello.py

```
python -m sanic hello.app
```
![](https://i.imgur.com/0R8dp9r.png)

---

![](https://i.imgur.com/N341IK5.png =200%x)

---

# HTTP GET Parameters

---

修改 hello.py json() 內的值
至 
```json
{"args": request.args}
```
```python=
from sanic import Sanic
from sanic.response import json

app = Sanic()

@app.route("/")
async def hello(request):
    return json({"args": request.args})
```
並存取以下網址
http://127.0.0.1:8000/?arg1=val1&arg2=val2

---

![](https://i.imgur.com/qrqlJoV.png =200%x)

---

