---
title: Cisco 交換器
sidebar_position: 14
description: Cisco 交換器
Date: 2023/05/28
---

:::info 作者資料
[原始 MD by 祐民](https://hackmd.io/@ji03mmy18/Hye5d9JUn)
:::

---

## 在開始之前

----

### 為什麼說這個？

----

因為我們是『網路管理小組』，除了例行的業務之外，處理骨幹網路設備也是我們需要面對的問題，在這幾年間，核心設備都沒有出現什麼問題，因此我們面對的大多都是戶上的設備維修，但相關知識仍是我們必須學會的內容！

----

### 這次會提到什麼？

----

- Cisco 交換器基本操作
- 看資訊(show [run, vlan, arp])
- VLAN

----

### 你認為交換器可以做什麼？

---

## 交換器系統
### Cisco IOS

----

### 連接的方法？

----

- Console
- Telnet
- SSH

----

### 登入後呢？

----

### 操作模式

|                 Mode | Photo                                               |
| --------------------:| --------------------------------------------------- |
|       User EXEC Mode | ![](https://hackmd.io/_uploads/HJ9fHh18n.png =400x) |
| Privileged EXEC Mode | ![](https://hackmd.io/_uploads/S1GESnJIn.png =400x) |

----

### 如何切換

| Command | Photo                                               |
| -------:| --------------------------------------------------- |
|  enable | ![](https://hackmd.io/_uploads/ryVLv3yL2.png =400x) |
|    exit | ![](https://hackmd.io/_uploads/SJuKP3y8n.png =400x) |
|         |                                                     |

----

### 有什麼指令能用？

![](https://hackmd.io/_uploads/ryQy_hkLn.png)

---

## VLAN
### 子網黑白切

----

### 先來看一段影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/UKMqLrvY6eg?start=74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

----

### 怎麼在IOS中查看VLAN?

```
=> 特權模式
S1# show vlan

=> 設定模式
S1(config)# do show vlan
```

----

### 圖片中有哪些資訊

![](https://hackmd.io/_uploads/rkWtt_eI3.png)

----

### 如何設定VLAN?

> [[筆記]Cisco基本指令-VLAN](https://david50.pixnet.net/blog/post/45244986-%5B%E7%AD%86%E8%A8%98%5Dcisco%E5%9F%BA%E6%9C%AC%E6%8C%87%E4%BB%A4-vlan)

----

### 額外補充

> [Tagged, Untagged, and Native VLANs](https://networkdirection.net/articles/network-theory/taggeduntaggedandnativevlans/)

---

## 檢視交換器資訊
### 東看看，西看看

----

### 第一看：運行資訊

```
=> 特權模式
Switch# show run

=> 設定模式
Switch(config)# do show run
```

----

### 第二看：硬體介面

```
=> 特權模式
Switch# show interface status

=> 設定模式
Switch(config)# do show interface status
```

----

### 第三看：VLAN

```
=> 特權模式
Switch# show vlan

=> 設定模式
Switch(config)# do show vlan
```
