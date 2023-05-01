---
title: GCP餐點-企業級巨量資料庫 BigQuery
sidebar_position: 12
description: GCP餐點-企業級巨量資料庫 BigQuery
Date: 2023/04/30
---
:::info 作者資料
[原始 MD by 綱庭](https://hackmd.io/@fan9704/SJABMvomn)
:::

:::note
補充資料  
[Terraform tf file快速建置雲端服務](https://hackmd.io/@fan9704/HybrlmZii#)
:::

---

## Big Query Intro

Serverless Dataware house
[Official Doc](https://cloud.google.com/bigquery?hl=zh-tw)
![](https://i.imgur.com/IlpNefo.png)



----

### Serverless?

> 是一種雲端運算架構，其主要的特點是不需要使用者管理伺服器

常見的說法 Faas (Function as a Service)

----

### Dataware house?

![](https://i.imgur.com/4AvYCuJ.png)

----

#### Why?

將來自不同資料來源的大量資料集中在一個地方的一種資料儲存解決方案，它是一個長期儲存的、相對穩定的資料存儲區域。

為了支持商業分析、報告和決策製定

至於怎麼將各分散的 Database 整合到 BigQuery 有很多種作法，通常是使用 GCP 平台的 Dataflow 進行 Data 處理

---

## [民間調查] 你聽過的雲端資料庫架設方法

1. 雲端開容器自架?
2. 雲端開VM自架?
3. 雲端資料庫服務?

----

### 通常來說企業會選擇 3 直接使用服務

不為甚麼就是最方便(還有效能拉，通常雲端平台會搭配其他的資源給你做使用

> 安全性的措施，操作介面或者是能夠搭載平台其他服務一起使用

---

## 使用 Big Query 常見四步驟

1. Data Ingestion 資料收集
2. Data Processing 資料處理
3. Machine Learning 機器學習或是業務處理
4. Insights/activation 啟用或視察

----

### 行銷方面


![](https://i.imgur.com/vgSdEav.png)



---

## Implementation Google Cloud Arcade 

由於 GCP 很貴又需要 Credit Card 我們不實際讓各位使用自己的錢包來體驗
因此準備了 Google Cloud Arcade

[Link Analyze BigQuery Data in Connected Sheets](https://go.qwiklabs.com/arcade) Level2
[BigQuery: Qwik Start - Console Quest](https://www.cloudskillsboost.google/games/3949)

---

## 最後!別跑乖乖聽好工商時間


[COSCUP 官網](https://coscup.org/2023/zh-TW/landing)
[給我起來投稿](https://blog.coscup.org/2023/04/coscup-2023-coscup-2023-call-for.html?_gl=1%2A1yk1k4c%2A_ga%2ANDY2NDY1NTI3LjE2NzcxNjQxNTk.%2A_ga_C9EMTMDSS1%2AMTY4MjgyODIxOS4zMC4xLjE2ODI4MjgyNDMuMC4wLjA.)
[學生社群大亂鬥官網](https://sitcon.org/2023)
[最後幫我分享他](https://www.instagram.com/p/CrStGx2LZBD/)
[還有分享他](https://www.facebook.com/SITCONtw/posts/pfbid0uSeK7tcJ3Bs9sHokqimVKxaZwe9YZ17JLLxmTiG56ioBnJK5REXYFjgDu233LvvCl)