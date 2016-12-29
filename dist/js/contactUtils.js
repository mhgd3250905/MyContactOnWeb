
/**
 * Created by admin on 2016/12/26.
 */

$(document).ready(function () {
    //先准备通讯录具体资料
    // inserTable();

    //初始化UI
    initUI();
    showImage()


})

/*
* 在鼠标移动到工号的时候自动弹出一个图像
* */
function showImage() {
    //获取到内容栏目的行
    var mTbody=document.getElementsByTagName("tbody")[0];
    var mTrs=mTbody.getElementsByTagName("tr");

    //遍历所有行
    for(var i=0;i<mTrs.length;i++){
        //获取第一个表格中第一个单元格
        var firstTd=mTrs[i].getElementsByTagName("td")[0];

        //获取单元格中的文本
        var firstP=mTrs[i].getElementsByTagName("td")[0].getElementsByTagName("p")[0];
        var emplid=firstP.innerHTML;
        //在单元格中添加一个div其中包含着对应各自工号的img图片
        var mDiv=document.createElement("div");
        mDiv.setAttribute("class","photoHide");
        var mImg=document.createElement("img");
        mImg.setAttribute("src",emplid+".jpg");
        mDiv.appendChild(mImg);
        firstTd.appendChild(mDiv);

        //对单元格中的文本设置鼠标移入移除class修改
        firstP.onmouseover=function () {
            //鼠标移入的时候div设置class为photoShow，图片显示
            var parentTr=this.parentNode;
            var initDiv=this.parentNode.getElementsByTagName("div")[0];
            initDiv.setAttribute("class","photoShow");
        }
        firstP.onmouseout=function () {
            //鼠标移出的时候div设置class为photoHide，图片隐藏
            var parentTr=this.parentNode;
            var initDiv=this.parentNode.getElementsByTagName("div")[0];
            initDiv.setAttribute("class","photoHide");
        }
    }
}

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