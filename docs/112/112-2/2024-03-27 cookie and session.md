---
title: Cookie and Session
sidebar_position: 3
description: Cookie and Session
tags: [偉宏]
---
:::info 作者
[原始 MD by 偉宏](https://hackmd.io/@6q2l_vZASKCQfeM57q0NuA/r1GSoDlJA#/)
:::


# 餅乾開會！

---

幹訓時有說到，網址會送到DNS轉成IP連過去
所以透過網址，我們已經定位到伺服器了

---

只是這個伺服器可能不只提供網頁服務，還有可能有檔案管理、遊戲運算 8啦888…

而且對伺服器而言，一個伺服器也不可能只連一台用戶端

---

## L4--TCP/UDP：找到應用程式！

---

TCP的好處：
* Connection-Oriented(連結導向)

* Reliable(可靠性)

* Flow Control(流量控制)

UDP的好處：

* 快

---

在網址後面會出現的，冒號後的這串數字

![port_num](https://hackmd.io/_uploads/BkbCfVZ1C.png)

就是埠(ㄅㄨˋ)口號碼(port number)
對於我們用戶端而言，用來確認伺服器的「服務項目」
對伺服器而言，則可以用來確定「應用程式」！

---

* 0～1024 :讓各種協定使用的保留號
* 1025～49151 :可以到IANA（網際網路號碼分配局）註冊
* 49152～65535:是動態分配用的保留號
---
TCP與UDP都有使用埠號、格式/範圍也相同，且同樣由IANA管理
口語上默認講到「埠號」都是先想到tcp埠

---

在傳訊息之前能夠以號碼分辨不同的程式了！
UDP所需要的資訊也大概如此

但如果咱得保證訊息的順序也正確呢…？

---

## 會議(session)

---

建立連線！
TCP--三次握手(3-way handshake)

![image alt](https://upload.wikimedia.org/wikipedia/commons/3/3f/Connection_TCP.png)

---

在連線建立後，各種APP就可以透過session ID確定是哪個程式在何時傳了什麼~

---

斷開連結！
TCP--四次分手(4-way handshake)

![image alt](https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/TCP_CLOSE.svg/1280px-TCP_CLOSE.svg.png)

---

## L7--簡單帶到：關於http

---

至此，我們有一個穩定的連線可以傳「訊息」了
而L7的內容也很直接，就是規定這「訊息」要是什麼格式？

---

而大家都知道http是連接網頁用的
它就是規定了各種的文件tag，最終被包裝成我們熟知的HTML等格式和語言~

---

在連線的部分，L4的TCP/UDP給的port number保留了讓不同應用使用的號碼
而http的預設埠號是:80

---

但基於安全考慮，網頁伺服器通常會用埠口轉發(port forwarding)等等方式，叫伺服器不要直接收:80的資料，而是把連線轉到其他的埠口，再由該埠口傳送資料

---

找得到主機了、找得到程式了、有文件規則了…至此，網路協定5層連線建立完成！

---

## 你是誰--電腦與使用者！

---

現在人手已經不只一個網路設備，一台電腦也甚至可能不只一個使用者會用

在確定連線之上，我們還得處理各個使用者的「個人化」

---

但http是無狀態(stateless)的協定，對任何時候傳送的訊息都一視同仁

所以即使你要的是同一個網站上的不同頁面，在網路上的兩次請求完全是可以分開看待的

---

## 餅乾!

---

![u_want_cookie?](https://cdn.discordapp.com/attachments/772071895738613771/1222479959352807454/20240327_170025.jpg?ex=66165e2e&is=6603e92e&hm=0f5b5f502e518fb3b74a63ac8ad2a2e20b326f9700a00b95deb459f13ae9f693&)

![le_cookie](https://hackmd.io/_uploads/H10-bubyC.png)

---

cookie就是一串文字，可以紀錄你目前建立的session ID、瀏覽記錄、點擊連結…（不及備載）
各種“專屬於你的動作”的資訊，都在cookie裡面！

---

在連到伺服器時，把cookie一起丟出去，這樣伺服器就知道你的設定了

但cookie是不加密直接儲存在瀏覽器裡面的，因此能拒絕盡量拒絕…

---

電腦如何拿到餅乾？

![image alt](https://i.imgur.com/SYZmAbQ.png)

---

# fin.

![fin.](https://hackmd.io/_uploads/Bymyf_W1A.png)


