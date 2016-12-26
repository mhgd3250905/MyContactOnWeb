/**
 * Created by admin on 2016/12/26.
 */

$(document).ready(function () {
    //先准备通讯录具体资料
    // inserTable();

    //初始化UI
    initUI();

    //设置文本框触发事件：1 change 2 keydown事件
    var input=$("#keyTest");
    input.on('input',function () {
        //文字改变之后我们就要对其进行检索
        var inputText=input.val();
        //第一步判断文字规格
        var datas=getData();

        $("tbody tr")[0].style.display="none";
        $("tbody tr")[1].style.display="none";

        for(var i=0;i<datas.length;i++){
            if(datas[i].search(inputText)!=-1){
                $("tbody tr")[i].style.display="inline";
            }
        }

    })

})

//这里设置UI
function initUI() {
    var trs=$("tbody tr");
    for(var i=0;i<trs.length;i++){
        if(i%2==0){
            trs[i].style.backgroundColor="#EEEEEE"
        }
    }
}

//判断是否是数字
function isNum(s) {
    if(s!=null&&s!=""){
        return !isNaN(s);
    }
    return false
}


//获取目前已经有的所有数据
//获取到表格中指定的td内容
function getData() {
    var pys=[];
    $("tbody tr").each(function () {
        pys.push($(this).children().eq(6).text())
    });
    return pys;
}

//预先插入一些需要的数据
function inserTable() {
    var tbody=$("tbody")[0];
    for(var i=0;i<20;i++){
        var tr=document.createElement("tr");
        for(var j=0;j<7;j++){
            var td=document.createElement("td");
            td.innerHTML="i是： "+i+"  j是：  "+j;
            tr.append(td)
        }
        tbody.append(tr)
    }
}