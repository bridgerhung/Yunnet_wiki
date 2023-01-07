---
title:  Python Virtual Environment
sidebar_position: 1
description: Python Virtual Environment
---

:::info
[原始 MD by 羅宏](https://hackmd.io/@YunNet21st/BygTHZrTS#/)
:::

# Python Virtual Environment

---

# pip
## Python package manager

---

# 怎麼用

---

下一堂教 Sanic
當然是先從安裝 Sanic 開始
![](https://i.imgur.com/8bCn3qI.png =150%x)

---

顯示目前安裝的包裝

```shell
pip freeze
```
![](https://i.imgur.com/0UsFP38.png)


---

# Python Virtual Environment

---

# 為什麼我們需要虛擬環境
Q. 如果你 Library 裝太多會怎樣

---

# 看了就知道
亂死了
![](https://i.imgur.com/bm5eLgJ.png)

---

![](https://i.imgur.com/bm5eLgJ.png =15%x)

---

# Virtual Environment Tools

- venv (virtualenv)
- conda
- **pipenv**

本次課程將以 pipenv 做教學

---

# 安裝

```bash=
pip3 install pipenv
```

---

# 建立 Pipfile

建立一個專案目錄
並建立 Pipfile 檔案
Linux:
```shell
touch Pipfile
```
Windows:
```shell
echo. > Pipfile
```

---

# 建立虛擬環境

```shell
pipenv --three
```
或
```shell
pipenv install sanic
```
直接建立虛擬環境並安裝包裝


---

![](https://i.imgur.com/MZgRXqy.png)

---

# 再安裝一次 Sanic
```shell
pipenv install sanic
```
![](https://i.imgur.com/5KEgUS7.png)

---

# 進入虛擬環境
```shell
pipenv shell
```
![](https://i.imgur.com/9cwXOgE.png)

---

# 檢查目前安裝的包裝
```shell
pipenv lock -r
或
pip freeze
```
![](https://i.imgur.com/4aguwFz.png)

---

