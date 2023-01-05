# Environment Install

---

### 由於未來社課教學會使用到Linux環境
### 所以我們今天先來安裝~

----

### 安裝的幾個選擇(推薦排序由上到下)
1. WSL (version 1 or 2)
2. Virtual Machine (VM, 虛擬機)
3. Wubi (將Ubuntu以VHD格式裝成雙系統)
4. 直接安裝 (雙系統或覆蓋安裝)

---

### WSL?
Windows Subsystem for Linux
(Linux的Windows子系統)

----

|功能 | WSL 1 | WSL 2 |
|---|---|---|
|Windows 和 Linux 之間的整合         |✅|✅|
|快速開機時間                        |✅|✅|
|相較于傳統虛擬機器，小型資源頁尾列印     |✅|✅|
|以最新版的 VMware 和 VirtualBox 執行 |✅|✅|

----

|功能 | WSL 1 | WSL 2 |
|---|---|---|
|受控 VM                            |❌|✅|
|完整的 Linux 核心                   |❌|✅|
|完整的系統呼叫相容性                  |❌|✅|
|OS 檔案系統之間的效能                |✅|❌|

----

簡單來說WSL 2的功能更完全
但需要開啟Hyper-V
(一般手機模擬器會無法使用)

----

### 安裝WSL
##### 啟用WSL功能
powershell 以管理員身分輸入這串
```cmd=
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

----

### WSL 2?
啟動Hyper-V
```cmd=
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
~

[點我安裝核心更新](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

~

設置WSL 2為默認版本
```css
wsl --set-default-version 2
```

----

輸入wsl -l查看目前安裝的WSL版本 這邊可以看到我是Ubuntu

輸入指令將當前存在電腦裡的WSL轉換成WSL2
```css
wsl --set-version Ubuntu 2
```

----

### 打開MS Store
![](https://i.imgur.com/YmCiJuK.png)

----

### Step 1 Windows Terminal
![](https://i.imgur.com/9AtgjsS.png)

----

### Step 2 Ubuntu dritribute
![](https://i.imgur.com/u0EikDC.png)

----

### step 3 下載VSCODE
[VSCODE 連結](https://code.visualstudio.com/)
![](https://i.imgur.com/OFTOpcL.png)

----

**VSCODE 延伸模組(搭配WSL)**
![](https://i.imgur.com/RFb6Yq2.png)

---

### VM?
虛擬機。
完全隔離環境✅
但效能相比WSL會較低

----

### 安裝VM
~~這邊不教~~

---

### Wubi?
(Windows-based Ubuntu Installer)
等同於獨立系統
完整硬體效能✅
但同時只能開一個系統

----

### 安裝Wubi
將ISO與exe放同一目錄
![](https://i.imgur.com/K0mYmys.png)

----

輸入使用者名稱與密碼
![](https://i.imgur.com/bpNPZS7.png)

----

選擇Linux容量並安裝
![](https://i.imgur.com/yOyWbLL.png)
Enjoy!

---

# END


