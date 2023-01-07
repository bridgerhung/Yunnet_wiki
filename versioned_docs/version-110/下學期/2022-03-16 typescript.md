# typescript
###### tags: `教學`

----

## javascript VS typescript

- ### 靜態強型別
- ### javascript的超集
- ### 對於物件導向的支援更好
- ### 語法較為統一
- ### 減少debug所花費的時間
- ### 聰明的錯誤提示

---

## tsconifg

```bash=
yarn init -y
yarn add -D typescript
tsc init     // yarn run tsc init
```

----

你或許會需要這個酷東西
```bash=
yarn add -D ts-node
```

---

# type

----

## primitives type

- string 
- number
- boolean
- undefined
- null
- symbol
- void

----

```typescript=
let num1 = 1;
let num2:number;
num2 = 1;
```

----

## object type

- Array \<T\>
- JSON
- class instance
- tuple
- map
- enum

----

```typescript=
let arr1:Array<number> = [1,2,3]
let arr2:number[] = [1,2,3]

let obj={
    attr1:123,
    attr2:'str'
}

let tuple :[number,string,obj]

let map = new Map([
    ["key1",1],
    ["key2",2]
]);

enum msg{
    susseces,
    error
}
```

----

## 特殊型別

- any
- nerver
- unknow

----

```typescript=
let shit:any = 'str';
let obj:number;
obj = shit;
console.log(obj);
```

----

![](https://i.imgur.com/KmR2pQS.png)

----

## 複合型別

- |
- &

---

## ?!

----

![](https://i.imgur.com/fcuP2Ks.png)

----

## const vs readonly



|          | const                   | readonly     |
| -------- | ----------------------- | ------------ |
| 目的     | 避免重新賦值            | 避免重新賦值 |
| 檢查時間 | run-time & compile-time | compile-time |
| 目標     | variable                | property     |



---

## narrowing & type guard

----

- typeof
- instanceof
- in
- is
- ...


