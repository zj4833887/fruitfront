/*获取图片的集合*/
window.onload = function() {
    //将 所有的图片提取出来
    var imgList = document.querySelectorAll(".tupian");
    // 将所有的轮播点提取出来
    var topList = document.querySelectorAll(".top");
    //获取大盒子，用于清除
    var btnR = document.querySelector(".banner");
    //将第一张图片显示(opacity=1:图片展现；opacity=0:图片隐藏；)
    imgList[0].style.opacity = 1;
    //声明index变量
    var index = 0;
    //声明time变量
    var time = null;
    //通过setInterval控制index的变化
    var time = setInterval(function() {
            for (i = 0; i < 5; i++) {
                imgList[i].style.opacity = 0;
                imgList[i].zIndex = 1;
                topList[i].classList.remove("rover");
            }
            //将下标index进行自增
            index++
            //判断index的值
            if (index > 4) {
                index = 0;
            }
            imgList[index].style.opacity = 1;
            imgList[index].style.zIndex = 1;
            topList[index].classList.add("rover");
        }, 3000)
        //鼠标点击悬停效果(鼠标移入)
    btnR.onmouseover = function() {
            clearInterval(time);
        }
        //鼠标移出
    btnR.onmouseout = function() {
            time = setInterval(function() {
                for (i = 0; i < 5; i++) {
                    imgList[i].style.opacity = 0;
                    imgList[i].zIndex = 1;
                    topList[i].classList.remove("rover");
                }
                //将下标index进行自增
                index++
                //判断index的值
                if (index > 4) {
                    index = 0;
                }
                imgList[index].style.opacity = 1;
                imgList[index].style.zIndex = 1;
                topList[index].classList.add("rover");
            }, 4000)
        }
        //轮播点的点击事件
    for (let i = 0; i < 5; i++) {
        topList[i].onclick = function() {
            for (var j = 0; j < 5; j++) {
                imgList[j].style.opacity = 0;
                imgList[j].zIndex = 1;
                topList[j].classList.remove("rover");
            }
            imgList[i].style.opacity = 1;
            imgList[i].style.zIndex = 5;
            topList[i].classList.add("rover");
        }
    }
}





//添加onload事件

var lh = document.querySelector(".touburight");
var rh = document.querySelector(".fenxiang");
var sh = document.querySelector(".huise");


//添加鼠标移入事件，因为每一个li都需要有移入事件，所以需要for循环把他都遍历出来

let qwe = function() {
    lh.onclick = function() {
        rh.style.display = "block";
    }
    sh.onclick = function() {
            rh.style.display = "none";
        }
        // rh.onclick = function() {
        //     sh.sytle.display = "block";
        // }

}
qwe();