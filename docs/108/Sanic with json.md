---
title:  Sanic with json
sidebar_position: 4
description: Sanic with json
tags: [羅宏]
---

:::info
[原始 MD by 羅宏](https://hackmd.io/@YunNet21st/SJmT6FdUL#/)
:::


# 



Note: 還記得 Sanic 嗎？
上次我們教 Sanic 只有教到 GET 怎麼用，這次來教 POST

---

```python=
from sanic import Sanic
from sanic.response import json

app = Sanic()

@app.route("/", methods=["GET", "POST"])
async def get(request):
    if request.method == "GET":
        return json({"message": "hello!"})
    elif request.method == "POST":
        _ = {
            "type": str(type(request.json)),
            "body": request.json
        }
        return json(_)

app.run(host="127.0.0.1", port=8000)
```

---

Insomnia 打開
首先測試 GET
回傳內容與程式碼相似
```py
return json({"message": "hello!"})
```
![](https://i.imgur.com/DPUy8Ms.png)

---

取得json特定的值

Note: request.json => dict

---

```python
    else if request.method == "POST":
        return json(request.json)
```
||
\\/
```python
    else if request.method == "POST":
        return json(request.json["text"])
```

---
結果

![](https://i.imgur.com/QxPErgT.png)

---

現在
使用其他HTTP方法嘗試
嘗試不存在的 API 路徑

Note: 是不是發現被擋住了
而且不是json
接下來我們來替換原本的錯誤訊息

---

Sanic 會丟的例外 (exception)

```=
NotFound
MethodNotSupported
ServerError
```

---

```python=
...之前的import
from traceback import format_exc
from sanic.log import logger
from sanic.exceptions import (
NotFound, 
MethodNotSupported, 
ServerError
)
...之前的app.route

@app.exception(NotFound)
async def on_404(request, ex):
    _ = {"message": "NOT_FOUND"}
    return json(_, status=404)
    
@app.exception(MethodNotSupported)
async def on_405(request, ex):
    _ = {"message": "METHOD_NOT_SUPPORTED"}
    return json(_, status=405)500
    
@app.exception(Exception)
async def on_500(request, ex):
    _ = {"message": "INTERNAL_SERVER_ERROR"}
    logger.error("Error occured in {}: {}".format(request.url, ex))
    logger.error(format_exc())
    return json(_, status=500)
```

---

![](https://i.imgur.com/0rWyGKv.png)
![](https://i.imgur.com/NvbkcuN.png)
![](https://i.imgur.com/LocTezb.png)


---

挑戰
做一個抽獎機
輸入格式為 json
```json=
["Isabelle", "Nook", "K.K. Slider", "Marbel"]
```

![](https://i.imgur.com/EcXBc8j.png)

---

