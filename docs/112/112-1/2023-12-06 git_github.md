---
title: git and github
sidebar_position: 9
description: git and github
tags: [宥丞]
---
:::info 作者
[原始 MD by 宥丞](https://hackmd.io/@LITahXXDTSiyHt_z-k_U1A/SyiBpUiHa?both)  
:::



#### 2023/12/06 (Wed) 19:00 - 21:00
#### 講師：李宥丞 Leo

---

### Git 是啥？為什麼要用它？

----

想想看，這個畫面是否曾經似成相似
![](https://drive.google.com/uc?id=147ZKpBpTlToCdGgpi4SpXNORq3xWZS3R&amp;export)

在跟組員一起做專案時，要把別人寫好的 code 拿到自己的檔案中

----

或是這個
![](https://drive.google.com/uc?id=147zpXQyHkl-g9_hHFq6IP9Nsgnyzo6DI&amp;export)
每做一個新的功能，就要新增不同版本的檔案

----

### 什麼是 Git 


- 版本管理工具
- 分支管理
- 協作和合併

---

### 來實際使用吧~

----

### 安裝 Git

----

Ubuntu 安裝方式

```bash=
sudo apt update #更新系統
sudo apt install git
```


測試看看有沒有成功裝上
```bash=
git --version
```
![](https://drive.google.com/uc?id=148oUFNxkGmgjGpSb2u_zs8KK1WdO9oCh&amp;export)

----

### 安裝 VSCode Extension

----

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
![](https://hackmd.io/_uploads/Syu2pBmMp.png)


- [git-commit-plugin](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)
![](https://hackmd.io/_uploads/rkOkRrmza.png)

---

### Git 概念

----

![](https://drive.google.com/uc?id=14CoA6HGwGft-wu4x9pAjaIE54krv9Yio&amp;export)

----

### Master &Branch

----

Master(主分支)，為開發時的主要線路
Branch(分支)，在某些情況下使用
![](https://drive.google.com/uc?id=14J548vaciDoBxYUPm-NcLnN7tH4YDM_d&amp;export)

---

### 建立本地數據庫 (Local Repository)

----

```bash=
cd 資料夾名稱; # 到想要執行的資料夾內
code .          # 開啟 VScode
 crtl + ` ;    # 在 VScode開啟終端機
git init        # 初始化 git
```

----

### 設定 config 內容

```bash=
git config --global user.name 名字;
git config --global user.email Email;
```

----

### 檔案追蹤與提交版本

----

### 查看當前工作目錄狀態
```git=
git status
```


![](https://drive.google.com/uc?id=14MefbqUM73Y8sZj5WocW8r7ddPCG31Ve&amp;export)
以下範例是尚未追蹤到的檔案 (index.html)

----

### 追蹤檔案
`git add 檔案名稱;`
```git=
git add index.html
```

```git=
git add .  #追蹤所有檔案
git add -A #追蹤所有檔案
```


![](https://drive.google.com/uc?id=14OfbMW8Dm-XO_ekj_JYRnE-ByyZkBN-y&amp;export)
已追蹤但尚未提交版本 (index.html)

----

### 取消追蹤


如果想要取消追蹤
可以利用 `git restore 檔案名稱;`
```git=
git restore index.html
```

----

### 提交版本
`git commit -m "<版本說明>";`
```git=
git commit -m "新增標題"
```

----

### 修改最新的版本內容
利用 `git commit --amend -m` 
修改 commit 訊息
```git=
git commit --amend -m  "修改標題"
```


若已經 commit 完但想要再新增檔案到同個版本
```git=
git add .
git commit --amend
```

```git=
git commit --amend --no-edit  #不修改訊息直接新增檔案
```

----

### 撤銷 commit 


可以利用 `git reset` 取消修改
```git=
git reset HEAD^ #取消最後一個commit並移到HEAD的前一個commit
git reset --hard HEAD^ #跟上述差在--hard會直接刪除本地的修改
```

---

### HEAD 指標

----

HEAD 實際上就是一個指針，指向當前的節點
可以當作是現在位置的意思
![](https://drive.google.com/uc?id=14OjDstmf43-R0qEcDFy0iI1pXCbJfEqD&amp;export)

----

### 查看版本紀錄
利用 `git log` 可以查看歷史版本紀錄，內容包括


*commit ID(hash)
*提交作者
*提交日期
*提交訊息
![](https://drive.google.com/uc?id=14UCS0ve6yO96XHcHa33p00Mcj_lK-yGT&amp;export)


[更多 git log 用法](https://chat.openai.com/share/1b4bc600-7bf7-4002-95c6-8abbad24827b)

----

### 查看引用紀錄
利用 `git reflog` 可以查看 HEAD 的移動紀錄
以及分支的操作紀錄
![](https://drive.google.com/uc?id=159GrzCdE2qPXP5eBtHavNoB2DbsZTJYe)

[log 與 reflog 的差別](https://chat.openai.com/share/ccc7bcc7-759c-4586-88e3-bdaeb8d00f0b)

----

### 移動 HEAD
利用 `git switch 分支名稱;` 
可以切換 HEAD 到不同的分支

```git=
git switch dev     #移到到分支 dev 上
```
![](https://drive.google.com/uc?id=14osxa-Bkd0FRZKf2O5IRZ8Rz-lGFvLlj)

```git=
git switch master  #移到到主線上
```
![](https://drive.google.com/uc?id=14tUERB10juSs139Ovti8J2mCprcZggvx)

----

也可以利用 `git switch -d commit ID;` 
將 HEAD 移到指定的版本上
```git=
git log --oneline
git switch -d 6180933
git log --oneline
```
![](https://drive.google.com/uc?id=14_XJl7cJM_3QV0DIDcfwGXdKLuxDYOQ9)
![](https://drive.google.com/uc?id=14e6dbudCfcsupWU_nsV87Em7bvtMVO1E)
`git log` 只能看比 HEAD 更早的紀錄

---

### 分支管理

----

在開發過程中，當我們想要
- 開發新功能
- 修改 Bug
- 測試新想法
- 多人協作
...

就會使用分支功能

----

### 新增分支
利用 `git branch 分支名稱;` 創建一個分支
並利用 `git switch 分支名稱;` 指向新分支
```git=
git branch dev
git switch dev  #將 HEAD 移到分支上
```


也可以直接利用 `git switch -c 分支名稱;` 
新增分支並將 HEAD 指向新分支
```git=
git switch -c dev  #新增分支並移到分支上
```

----

### 修改分支名稱
```git=
git branch -m 舊名稱; 新名稱;
```

----

### 刪除分支


較安全的刪除
```git=
git branch -d 分支名稱;
```


強制刪除
```git=
git branch -D 分支名稱;
```

[-d 與 -D 的差別](https://chat.openai.com/share/024c1d91-7918-4ec8-bb1f-60ea5cc92494)

----

### 撤銷刪除分支
可以利用 `git reflog` 
查看被刪除前的 commit hash
再利用 `git branch 分支名稱; hash值;` 還原
```bash=
git reflog
git branch dev 88961cc
```

----

### 合併分支

如果想要讓 master 繼續為主線
則需要先 switch 到 master 上
再利用 `git merge 分支名稱;` 合併

----

```git=
git switch master
git merge dev
```

![](https://drive.google.com/uc?id=1JOJes1DjIlKn9hqzPhdyO4zcAc07kF9G&amp;export)
合併前

![](https://drive.google.com/uc?id=13gXIAP6MgRWa0qUi4JjHfgwC5FSmn9L1&amp;export)
合併後

----

如果想要保留支線的合併紀錄
則可以利用 `git merge 分支名稱; --no-ff`

```git=
git merge dev --no-ff
```
![](https://drive.google.com/uc?id=13tkQP1mwcMza9alJxpoKcz7WeSDgo9Pp&amp;export)


----

並不是每一次的合併都能那麼順利
如果有兩個分支都更改了同一個檔案的同一個內容
在合併時就會出現合併衝突，則需要手動修改

```bash=
git add .
git merge --continue #繼續合併
git merge --abort #取消合併
```

[合併衝突例子](https://chat.openai.com/share/9c6b7c0d-20d4-40e4-9aa7-383624f2a7a5)

----

### 另一種合併方式
當我們想要

- 將多個 commit 濃縮成一個
- 將目前分支移到其他分支上

就可以利用 `git rebase` 指令實現

----

### 濃縮多個 commit

可以利用 `git rebase -i HEAD~數字;` 
將指定數量的 commit 濃縮在一起

```git=
git rebase -i HEAD~3 #將HEAD的前3個commit合併在一起
```
![](https://drive.google.com/uc?id=14vI4Xr7OUy1iBmfyzP-8u_vWns8y2gsm)

----

若要把 HEAD~3 &HEAD~2 合併到 HEAD~1
需要把 2、3 的 pick 改成 squash

- pick: 保留
- squash: 合併

![](https://drive.google.com/uc?id=14vx6SePdtbnRy-lhMiMET4nVrZoibm3l)
![](https://drive.google.com/uc?id=14wyjR5afqBD49uBfPPDmJ_OPi0zJr1bH)
`ctrl+S  ctrl+X` 保存並退出

----

接著只要將舊的 commit 訊息註解
並在最開頭加上新的 commit 訊息
![](https://drive.google.com/uc?id=15-kjn6Exc5sVCxroH-Igwm9vW6rTl7ai)
![](https://drive.google.com/uc?id=152P5TNsKI-jRJt-yaqfvKWXOwte9_Pei)
`ctrl+S  ctrl+X` 保存並退出

----

順利的話就會完成合併
![](https://drive.google.com/uc?id=1538NGtrJpeDUSilGxZq0kW52R_1yd7LW)


如果有衝突的話就解決
並加上 `git add .` 與 `git rebase --continue`


----

### 將分支移到別的分支上

假設目前有 dog 和 cat 兩個基底為 master 的分支
![](https://drive.google.com/uc?id=156hUwml-ooDu8jkcekCOI9dj_y6_Le6o)

----

想要將 cat 分支移到 dog 分支上
需要先將 HEAD 移到 cat 上再合併

```git=
git switch cat 
git rebase dog
```

![](https://drive.google.com/uc?id=158r9kCvydkvntVFoXakJ6yZPc-3UtU9r)

----
|![](https://drive.google.com/uc?id=156hUwml-ooDu8jkcekCOI9dj_y6_Le6o)|![](https://drive.google.com/uc?id=158r9kCvydkvntVFoXakJ6yZPc-3UtU9r)| 

----

觀察 cat 分支前後合併的 hash 
發現 rebase 並不是直接移植分支
而是複製一個分支到 dog 分支上

---

### GitHub

----

目前都只是在本地端做版本管理
可以試著將專案推上雲端
來達成更多功能

----

### [註冊](https://github.com/)

![](https://imgur.com/BDoQJxx.png)

按下右上角的『Sign up』

----

### 填寫個人資料

![](https://imgur.com/JtHYytv.png)

請輸入要使用的信箱、密碼、使用者名稱

要記得到信箱收啟用信喔！

----

### 登入GitHub

![](https://imgur.com/EIUiTOY.png)

回到首頁後，點選『Sign in』按鈕

輸入剛剛註冊的帳號或密碼

----

### Dashboard

![](https://imgur.com/Mh8Uhax.png)

登入後，這裡就是你的儀表板(主頁)

接下來，要進行SSH的金鑰交換

----

### 進入設定區域

|                  Step 1                  |                  Step 2                  |                  Step 3                  |
|:----------------------------------------:|:----------------------------------------:|:----------------------------------------:|
| ![](https://imgur.com/wMUPLOH.png) | ![](https://imgur.com/vTKIEsT.png) | ![](https://imgur.com/HUCMaeL.png) |
|             點選右上角的人頭             |         在選單中點選『Settings』         |   在左側列表中選擇『SSH and GPG keys』   |

----

### 新增SSH金鑰

![](https://imgur.com/bbZ5Ki7.png)

剛剛註冊的使用者，這個列表會是空的

請按下右上角的『New SSH key』

----

### 填入必要的資訊

![](https://hackmd.io/_uploads/r1Kfh0XMp.png)

接下來要在電腦端生成非對稱加密的公鑰/私鑰對
並將生成的公鑰填入到畫面上的『Key區塊』中

----

### 生成所需要的鑰匙對
```bash=
sudo apt install ssh #下載ssh
ssh-keygen
```

工具會詢問儲存位置與密碼短語，按下Enter可跳過

![](https://imgur.com/msYyaJZ.png)

----

### 印出自己的公鑰資訊

br/;

```bash=
more ~/.ssh/id_rsa.pub
```


![](https://imgur.com/bn61zgQ.png)

----

### 複製並貼入到網頁中

![](https://imgur.com/ITzYjuD.png)

按下『Add SSH key』後，新增就完成了

; 若使用者名稱是中文，請幫紀錄加上英文的Title，避免新增失敗！

----

### 確認鑰匙在列表上

![](https://hackmd.io/_uploads/H1dAY0VfT.png)

當鑰匙建立後，會在標題列顯示對應的電腦名稱，如果有手動設定標題，會顯示自己填寫的內容，若沒有，請回頭看一下自己複製的內容的最後一段

----

### 建立一個儲存庫
首頁右上角頭像 -; repository -; New
![](https://drive.google.com/uc?id=15Fs7AQbVtuWXa9Hfkyy37pMtLs5CZ9fp)

----

### 從本地端設定Remote並推送

----

### 設定遠端位置

![](https://imgur.com/uHd9W9U.png)

```shell=
git remote add origin repo url;
```

----

### 推送本地端內容到GitHub

![](https://imgur.com/JXwdWGa.png)

```shell=
git push origin main
```

----

### 回到 GitHub 上確認內容

![](https://drive.google.com/uc?id=15LdFB_-qDSkotMkNU5OvawiJitXUw4YU)

----

### 從 GitHub 上[下載](https://github.com/LeoLee-0531/Yunnet_demo)內容到本地端

![](https://drive.google.com/uc?id=1-9FnLyTGm99rb_an2lFbQHjQsTrky-3n)
```bash=
git clone 儲存庫位置;
```
![](https://drive.google.com/uc?id=1-B3YuuX6-A-ZacP3ZbFLI98enVivLww6)

----

### 更新內容

當遠端資料有新的內容，可以將它拉到本地端中

```bash=
git pull
```

---

### 結尾

----

今天聽了那麼多內容腦袋是不是快爆了呢 ^^
老實說 Git 能玩的東西非常多，今天一定講不完

學習最快的方法就是直接練習
在寫程式作業或是開發時
都可以用用看 Git &GitHub
是真的好用 👍

----

Bye~
![](https://drive.google.com/uc?id=1-FpDA2-uiIVN3q90A_--dTCK1dbiPVvM)