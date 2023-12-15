function check()
{
    let todo_list = document.getElementById("list");
    let num = document.getElementById("t").value;

    if(!isNaN(num)) num = Number(num);
    else return;

    if(todo_list.children[num+1].className == " ")
    {
        todo_list.children[num+1].className = "done"; //加上刪除線
    }
    else
    {
        todo_list.children[num+1].className = " "; //拿掉class = 拿掉刪除線
    }
}