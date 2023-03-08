---
title: Python資料科學 
sidebar_position: 2
description: Python資料科學 
Date: 2023/03/08
---

:::info 作者資料
[原始 MD by 琦龍](https://hackmd.io/KpHJCaCBQgiQEHGYEVpOjw?view)
:::


---

## 資料科學(Data Science)!
*聽起來好像很厲害?*  

----

其實...並沒有  
![](https://i.imgur.com/iXu2VGd.jpeg)  
![](https://i.imgur.com/rUEJYdS.jpeg)  
![](https://i.imgur.com/Jdruvbw.jpeg)  

----

學這個能做什麼?
透過程式處理、過濾與分析資料
- 大數據
- AI training

---

(Tool)
Python 3.x
VScode
Jupyter(ipynb)

(Module)
Pandas
Numpy
Matplotlib

(Search)
Google、stackoverflow
ChatGPT、Bing AI

---

## Python
dictionary(dict)
set

[dtype(data type)](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.dtype.html)
[shape](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html)

---

## DataFrame

[column](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.columns.html)、[index(row)](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.index.html)、[series(list)](https://pandas.pydata.org/docs/reference/series.html)
[filter[]](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.filter.html)
[at](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.at.html)、[loc](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html)
[duplicated](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html)
[sort](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html)
max, min, mean, median, sum, std
[groupby](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html)、[apply](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html)、[agg](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.agg.html)
[isna(isNaN)](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isna.html)
[replace](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.replace.html)
[drop](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html)
tolist、to_numpy

---

## Numpy
[ndarray](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html)

[empty](https://numpy.org/doc/stable/reference/generated/numpy.empty.html)、[zeros](https://numpy.org/doc/stable/reference/generated/numpy.zeros.html)、[ones](https://numpy.org/doc/stable/reference/generated/numpy.ones.html)、[full](https://numpy.org/doc/stable/reference/generated/numpy.full.html)
[arange](https://numpy.org/doc/stable/reference/generated/numpy.arange.html)、[linespace](https://numpy.org/doc/stable/reference/generated/numpy.linspace.html)...
array calc
[where](https://numpy.org/doc/stable/reference/generated/numpy.where.html)、[argmax](https://numpy.org/doc/stable/reference/generated/numpy.argmax.html)、[argmin](https://numpy.org/doc/stable/reference/generated/numpy.argmin.html)...
np.sin、log、exp、dot...


---

## Matplotlib
[figure](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.figure.html)
[axe(subplot in figure)](https://matplotlib.org/stable/api/axes_api.html)
[chart types](https://matplotlib.org/stable/plot_types/index.html)


---

### [練習用資料](https://cdn.discordapp.com/attachments/990104346970705961/1082977680674267267/data.7z)

實戰
1. [列出資料04重複的學生(同一人出現兩次以上)](https://i.imgur.com/9DhpJHy.png)
2. [透過資料03製作成績分佈圖](https://i.imgur.com/mmieEiO.jpg)
3. [列出資料01各區報考人數(資料表:1-3切割)](https://i.imgur.com/dfs2zuI.jpg)

### 解答
:::info 點我下載
[下載](./static/code.ipynb)
:::
---

# End