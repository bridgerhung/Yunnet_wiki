---
title: linux-intro
sidebar_position: 5
description: linux-intro
tags: [偉宏]
---
:::info 作者
[原始 MD by 偉宏](https://hackmd.io/@6q2l_vZASKCQfeM57q0NuA/ryEiMQSM6#/)  
:::

## linux指令與應用

---

## 新增資料夾：mkdir

```
指令格式：
mkdir (包含新資料夾名稱的完整路徑)
```

---

## 新增檔案：touch
```
指令格式：
touch (包含新檔案名稱的完整路徑)
```

---

## 列出資料夾內容：ls
```
指令格式：
ls [-a顯示隱藏檔案 / l列出檔案詳細資訊 / h切換檔案大小顯示格式] (資料夾路徑）
```

---

## 下載/移除套件：apt
```
指令格式：

apt update //“更新”目前有的“清單”

apt install (要安裝的套件名稱)

apt remove (要移除的套件名稱)

apt upgrade (要更新的套件名稱）
```

---

## 以管理員身分執行：sudo
```
指令格式：
sudo (指令）
```

---

## 移除檔案：rm
```
指令格式：
rm [-r移除整個資料夾 / f強制進行移除] (路徑）
```
![rm_rf_meme](https://img-blog.csdnimg.cn/img_convert/a4271477c97e77bbfa84cd317ff1c87f.png?x-oss-process=image/resize,m_fixed,h_150)  

###### (圖片來源：img-blog.csdnimg.cn)

---

## 改變目前的“所在地”：cd
```
指令格式：
cd (路徑）
```

----

## 系統資料夾？

如同 windows 中在C槽底下會有「文件」、「音樂」、「使用者」等不同預設資料夾
linux在根目錄下也會有各種資料夾

----

* var：網路相關，log也會放在這邊
* etc：相當於linux中的System32

----

* home：家，就是所謂的“預設位置”
* usr：「使用者」資料夾
* tmp：暫存檔！
* opt：一些輔助用的次要程式會被放在這邊
* bin：放執行檔的地方，類似windows的ProgramFile

---

## 輸出文字：echo
```
指令格式：
echo "(內容)"
```

---

## 爬文貓貓：cat/tac
```
指令格式：
cat (檔案路徑)
```

---

## 搜尋關鍵字在哪句/哪行：grep
```
指令格式：
grep [-i不管大小寫 / R搜尋整個資料夾 / c計算搜尋結果的數量] (關鍵字) (檔案路徑)
```

---

## 移動/改名（？）檔案：mv
```
指令格式：
mv (原檔案“完整路徑”) (新檔案“完整路徑”)
```


## 複製檔案：cp
```
指令格式：
cp (原檔案完整路徑) (新檔案完整路徑)
```

---

## 內建記事本：nano
「用 記事本 開啟檔案…」
```
指令格式：
nano (檔案路徑)
```

---

## 更改檔案權限：chmod
```
指令格式：
chmod [-R] (神奇數字或參數) (檔案路徑）
```
![rwx-explanation](https://www.runoob.com/wp-content/uploads/2014/08/file-permissions-rwx.jpg)
##### (圖片來源：www.runoob.com)

(-R是用在要一次改掉一個資料夾下的所有檔案權限時)

----

Ex：目標權限--檔案所有者可讀寫，同群組可讀可執行，其他人唯讀

=> U G O 的rwx權限分別是 110 101 100
```
U  G  O
rwxrwxrwx
110101100 //1：允許/0：不允許
```
二進位轉十進位：
110 => 6, 101 => 5, 100 => 4

得出權限代碼為654

----

~~或通常懶得算這麼多的話，755叫暢行無阻:3~~(×

---

## 指令說明：man
```
指令格式：
man (指令)
```

---

# 更多套件介紹&應用
*來架個網站！*

---

## 網頁架設：[nginx](https://nginx.org/en/docs/)

----

### 1.安裝nginx：
```
apt install nginx
```

----

### 2.~~完成:D~~
```
http://(自己的IP位址):8080
```

----

### 開關網站：
```
nginx -s reload

nginx -s quit
```

----

### 想更改網頁內容？
```
/var/www/html/ngimx.html
```

----

### 想用[https](https://nginx.org/en/docs/http/configuring_https_servers.html)？不想打IP想有網址？

##### ……呃好吧這都得花錢買(⁠･⁠∀⁠･⁠;⁠)

----

### 將網站上/下架
目前沒啟用的站台設定檔會在這：
```
/etc/nginx/sites-avalible
```
目前正在跑的則在這：
```
/etc/nginx/sites-enabled
```
###### ⭒
直接挪完設定檔後reload（見16.4）即可見效

----

### 站台總設定檔（各網站的“預設值”）
##### 在改重要文件前備份是個好習慣(⁠｡⁠･⁠ω⁠･⁠｡⁠)⁠ﾉ
```
/etc/nginx/conf.d/default.conf
```

測試設定檔格式有沒有出問題：
```
nginx -t
```

---

# 其他東西
*開機動畫（？）等更多功能*

---

## 開機排程檔：crontab
```
位置：
/etc/crontab
```

---

## linux內建程式語言：bash
讓你可以自動執行指令的酷東西~

----

在檔案內，第一行是這串的話
```
#!/bin/bash
```
linux就會知道這檔案是個shell script，並且要用/bin/bash這個shell來編譯執行

----

### 程式語言1--變數
可以“隨著程式進行改變儲存值”的值
其作用如同一個箱子，可將一些文數字暫存在內
shell script的變數可以用等號（=）指定數值、並用用錢字號（$）提取數值
用法如下：
```
#！/bin/bash
a=123 #注意：等號旁不能有空格
b=456
echo $a #123
echo $a+$b #123+456
echo $((a+b)) #579
```

----
### 程式語言2--判斷
根據數值的變化判斷下一步該怎麼做，流程圖的分支
由於bash語法比較與眾不同，這邊直接上範例：
```
#!/bin/bash
a=1 #不能有空格
echo $a
if (($a > 10 )) #小括號重複兩次
then
  echo "a is greater than 10!"
elif (($a > 0 ))
then
  echo "I'm positive that a is positive"
else
  echo "a is negative... or not even a number"
fi
```

----

### 程式語言3--迴圈
重複重複重複再重複……
for迴圈格式大致都是這樣：
for（初始值；執行條件；步進指令）
```
#!/bin/bash
for ((i=0;i<10;i++))
do
  echo $i #0 1 2... 9
done
```

----

## 挑戰題：試著撰寫一個檔案greet，執行時會交錯輸出hello跟hi
交錯程式碼參考：
```
if (($n%2 == 1))
  then
    #n為奇數時...
  else
    #n為偶數時...
  fi
```
進階：讓程式能接受一個參數（用 $1 取用），指定要輸出幾次

---

## 字元運算子： > >> |

\>：覆寫檔案內容

\>\>：新增內容在檔案結尾

|：輸入給指令

---

## 特殊檔案：null/zero/random

這三個檔案都在/dev底下，分別是：



/dev/null--常態性的空檔案，等同於垃圾桶

/dev/zero--滿滿的空字元(0x0)，與null相反的檔案

/dev/random--每次打開都會是不同的隨機值

---

## 可裝可不裝的神奇妙妙工具：sl/cowsay

cowsay用法與echo相同
sl的話……~~某天自然會跑出來:D~~

---

## 延伸閱讀：
* linux傳奇大佬--[鳥哥](https://linux.vbird.org/)
* [ubuntu官網](https://wiki.ubuntu.com/WSL)