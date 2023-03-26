---
title: Docker Network
sidebar_position: 10
description: Docker Network
Date: 2023/03/26
---

:::info 作者資料
[原始 MD by 佑民](https://hackmd.io/@ji03mmy18/r1tQWCXx2#/)
:::


### 容器網路怎麼搞



*YoMin Su*

---

## 基礎環節

----

### 怎麼會有這個主題？

----

當今天在使用 Docker 運行你的系統時，我們通常都是透過 docker-compose 這個工具，協助我們自動建立容器間的網路，僅將需要對外的 Port 開出，但我們卻沒有想過其運作的細節，因此今天才會出現這個主題。

----

### 這個可以應用在哪裡？

----

若你對於容器之間的網路有特殊的要求，或是想要將不需要在同一個網路的幾個微服務，透過同一個 Compose 檔案一起管理時，網路就是相當重要的工具，能讓你達成這個目標。

----

### 有需要另外安裝什麼嗎？

----

今天討論的內容，都將基於在 Linux 系統下執行的 Docker Engine，所以當安裝好 Docker 後，就應該是開箱即用的，不需要另外在安裝其他工具。

----

### 我系統上的網路跟想像的不太一樣

----

剛剛也有提到，會是以 Linux 系統作為底層的網路介紹，因此，若是 Windows/macOS 這兩者的話，則無法保證實作細節與 Linux 完全相同

---

## 網路驅動
#### Network drivers

----

首先要來看看 Docker 官方提供了哪些使用網路的方式，在官方文件的說明中，目前 Engine 提供了6種不同的網路驅動，可以配合自身的需求去應用，讓我們一一說明！

----

### 1. bridge (橋接模式)



這個是最普遍的模式，也是系統在安裝好時，就會預先設定好並能馬上使用的一種模式，其工作概念是，在系統中新增一個網橋(docker0)，並在啟動容器後，將指定要Mapping到外部的Port，Binding在這個介面上，透過這個方式，就能讓你從系統訪問到你的容器啦～

----

### 2. host (主機模式)



這種模式可以理解為，直接把容器的應用程式實際掛在主機(Host)上運行，若容器中需要使用 80 Port，那在將此容器運作起來時，就會直接佔用主機上的 80 Port，省去了Mapping的部分，對於網路效能來說會更好。

----

### 3. overlay (覆蓋模式)



這種模式的應用主要是當有多台主機(Host)，其各自都有安裝 Docker，且希望底下的容器可以跨主機通訊時，就會使用到這種模式。通常會跟 Docker Swarm 一起出現。

----

### 4|5. IPvlan, MACvlan



這兩者都是虛擬介面的應用，IPvlan是共用同一組MAC位置，有多個IP，而MACvlan則是虛擬出多組MAC位置，這與應用時的需要有比較直接的關係，若希望容器取得從分享器分配的IP時，也會採用這種模式，但不是今天的主要目標。

----

### 6. none



什麼都沒有，對，什麼預設都沒有，通常這種類型是用來搭配自定義的網路服務，因此提供了這種選項，不過，此選項與 Docker Swarm 衝突，若想同時使用，需要另外處理。

----

### 補充資料

> - [Docker: Networking Overview](https://docs.docker.com/network/)
> - [iT邦幫忙： Docker 30天](https://ithelp.ithome.com.tw/articles/10193291)
> - [Docker 容器網路](https://ithelp.ithome.com.tw/articles/10207883)

---

## Bridge Networks
#### 橋接網路

----

### 分成兩種



| 預設網橋 |  自定義網橋  |
|:--------:|:------------:|
| Default  | User-defined |

----

### 先看看預設網橋



> - ip addr
> - docker network ls

----

![](https://i.imgur.com/8Nq0gij.png)

----

![](https://i.imgur.com/ry0IdoP.png)

----

### 說說預設的特點

----

1. 不需另外設定，開箱即用
2. 透過『docker run』執行的容器預設的網路

----

### 來看看自定義網橋

----

![](https://i.imgur.com/9WBDDVm.png)

----

![](https://i.imgur.com/x4V2FO9.png)

----

### 自定義的好處？

----

1. 自定義網橋提供容器間自動DNS解析
2. 提供更好的隔離性
3. 可以在容器運行時動態的加入或離開網路
4. 每個自定義網橋的設定都相互不影響

----

### 怎麼管理自定義網橋？

----

```bash showLineNumbers
# 列出目前網路
docker network ls

# 新增網路
docker network create <name>

# 刪除現有網路
docker network rm <name>
```

----

### 該怎麼把容器加入進去？

----

```bash showLineNumbers
# 建立容器並加入網路
docker run --name my-nginx --network my-net --publish 8080:80 nginx

# 從現有網橋拔除
docker network disconnect my-net my-nginx

# 加入到另外一個網橋
docker network connect none my-nginx
```

----

### 有沒有更簡單的方法？

----

有，使用 docker-compose，這會直接建立一個以資料夾為名稱的網路，簡單省事。

---

## Host Networking
#### 主機網路

----

### 最最最單純的那種



直接把容器需要的『連接埠』綁定到Host上

----

### 好處 or 優點？

1. 不透過內部網路進行轉換，消耗資源少
2. 直接綁定Host端的連接埠，不用另外設定映射
3. 少了轉換的消耗，網路效能更好

----

### 壞處 or 缺點？

1. 容器需要的Port不能被佔用
    (因為無法透過映射修改)
2. 開出去的容器允許所有來源
    (Listen的IP Source為0.0.0.0)

----

### 如何知道容器需要哪些『埠』？



在不做任何預設定的情況下先執行一次

----

![](https://i.imgur.com/WJjncHQ.png)

---

## Overlay Networking
#### 覆蓋網路

----

### Docker Swarm

類似 Kubernetes 的服務，方便建立幾台主機的叢集，一起管理

> 1. [Networking with overlay networks
](https://docs.docker.com/network/network-tutorial-overlay/)
> 2. [使用 Docker Swarm 管理多台 Server 的服務](https://dotblogs.com.tw/fire/2023/01/15/171645)

----

### Live Demo 時間

1. 來實際建立一個跨主機的 Overlay Network
2. 並在兩台主機上分別加入一個容器，測試兩容器是否可以互相Ping到對方。

---

## Bridge with Docker-Compose
#### Compose 來了！

----

### 如何在Compose中建立Bridge？

----

```yaml showLineNumbers
networks:
  net1:
    driver: bridge
  net2:
    driver: host
```

> docker-compose.yml

----

### 如何將容器指定到網路？

----

```yaml showLineNumbers
services:
  app1:
    image: aaa
    networks:
      - net1
  app2:
    image: bbb
    networks:
      - net2
```

----

### 來看看實際的效果

----

### 範例的Compose

```yaml showLineNumbers
version: "3"

services:
  host1:
    image: alpine
    command: tail -F anything
    networks:
      - cluster1
  host2:
    image: alpine
    command: tail -F anything
    networks:
      - cluster2
  host3:
    image: alpine
    command: tail -F anything
    networks:
      - cluster1
  host4:
    image: alpine
    command: tail -F anything
    networks:
      - cluster2

networks:
  cluster1:
    driver: bridge
  cluster2:
    driver: bridge
```

----

### 補充資料

> [Networking in Compose](https://docs.docker.com/compose/networking/)