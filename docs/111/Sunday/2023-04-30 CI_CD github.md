---
title: CI/CD 初體驗
sidebar_position: 13
description: CI/CD 初體驗
Date: 2023/04/30
tags: [祐民]
---
:::info 作者資料
[原始 MD by 祐民](https://hackmd.io/@ji03mmy18/rknWELoXh#/)
:::


GitHub Actions
### CI/CD 初體驗



---

## 基本說明

----

### 為什麼有這個主題？

----

因為GitHub Actions作為自動化工具，可以在專案更新(Push/Merge)時，自動觸發工具運作，去執行專案中定義好的項目，今天要提到的CI/CD就是依據這樣的效果去達成的！

----

### 什麼是CI/CD？

----

- CI: Continuous Integration
- CD: Continuous Deployment

CI在解決的問題是，多人開發的狀況下，程式碼若無法定期且正確的整合到主線(Mainline)上的話，會發生所謂的整合地獄(Integration Hell)，而CD則是讓程式碼可以自動且有效率的部署到生產環境(Production)，加速軟體開發的週期。

----

### Actions可以怎麼協助自動化？

----

在設計Actions使用的設定檔時，就像我們平時在本地(Local)進行測試一樣，會需要指定的系統環境或預先設定環境變數等等，這些在Actions上都有提供相應的解決辦法，除此之外，一個Actions中，也不限制僅能執行一個工作(Job)，可以是多個不同個工作同時執行，讓腳本可以更快得到預期的結果。

---

## 實戰環節

----

接著要實際來寫一份可以工作的Actions，由於細項比較多，因此以現成的專案進行說明！

> 專案連結：[GitHub](https://github.com/ji03mmy18/cicd-website)

----

等等我們會將流程拆分成兩部分分別進行，第一部分是CI，這個環節中主要會讓Actions幫我們建立Docker Image，並推送到GitHub提供的Image Registry，第二部分是CD，這部分將會把剛剛推送的Image拖回到生產環境的主機，並更新現有機器！

---

## CI

----

### 首先先看一看範例的前端網頁

----

長這個樣子：
![](https://i.imgur.com/6QPvdFs.png)

----

該範例是引用自Vite自動建立的Vue範本，各位也可以自己建立一個！

接著，我們來看Dockerfile中存放著什麼

----

```dockerfile showLineNumbers
# Build Stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN apk add make g++ \
    && yarn install \
    && yarn run build

# Production Stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

----

如果我們打算在本機建立映像的話：

```bash showLineNumbers
docker build . -t vue-test
```

----

實際跑起來看看：

```bash showLineNumbers
docker run --name vue-web -p 6080:80 -d vue-test
```

----

![](https://i.imgur.com/vLeXKqw.png)

----

### 來看看該怎麼寫Actions中的yml設定檔

----

```yaml showLineNumbers
name: Deploy Website

on:
  push:
    branches:
      - main

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Login to Container registry
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Docker Buildx
        uses: docker/setup-buildx-action@v2
      
      - name: Build and Push image
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: ghcr.io/ji03mmy18/cicd-website:latest
```

----

### 快速說明

- name: 這個actions的名稱
- on: 當什麼狀況下執行
- jobs: 要做什麼事情

----

### 實際推送到GitHub後呢？

----

### Actions執行結果
![](https://i.imgur.com/a7Ijb9d.png)

----

### 你推上去的映像
![](https://i.imgur.com/aP5NYfo.png)

---

## CD

----

剛剛已經完成了CI的環節，準備好了部署使用的Image，接下來就是實際部署到設備上的環節了，一起往下看！

----

### 準備部署機器

----

這裡選用的是GCP的Compute Engine，是1小時前建立好的喔:P
請確定安裝好了Docker與Webhook兩個工具，安裝過程不再贅述

----

### 看看Hook怎麼寫

----

```json showLineNumbers
[
  {
    "id": "cicd-deploy",
    "execute-command": "/home/aaaa1234567891016/update.sh",
    "command-working-directory": "/home/aaaa1234567891016",
    "response-message": "OK!"
  }
]
```

----

### 看看Actions怎模寫

----

```yaml showLineNumbers
cd:
  runs-on: ubuntu-latest
  needs: ci
  steps:
    - name: Webhook Trigger
      uses: distributhor/workflow-webhook@v3
      env:
        webhook_url: 'http://35.196.177.195:9000/hooks/cicd-deploy'
        response-body: 'OK!'
```

### 實際來作動一次！

----

![](https://i.imgur.com/akLfu37.png)

---

# Thanks!