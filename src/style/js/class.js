window.onload = function() {
    //获取选项卡列表
    let item = document.querySelectorAll(".item");
    //获取选项卡右边内容块
    let shopList = document.querySelectorAll(".content-item");
    //获取数量加按钮
    let jian = document.querySelectorAll(".jian");
    //获取数量减按钮
    let jia = document.querySelectorAll(".jia");
    //获取数量的数字
    let span = document.querySelectorAll(".count");
    //获取右边列表标题栏
    let titleSpan = document.querySelectorAll(".title-span")
        //获取分类点击后的盒子
    let block = document.querySelector(".title-fenlei");
    //获取分类点击按钮分类
    let tttt = document.querySelector(".fenleibian");
    //获取点击综合按钮的盒子
    let zonghe = document.querySelector(".zonghe");
    //获取移动小横杠的盒子
    let itemtext1 = this.document.querySelector(".item-text1");
    //获取价格的盒子
    let jiage = this.document.querySelector(".jiage");
    //i标签
    let i1 = this.document.querySelector(".iconzhcc_xiangshangjiantou");
    //i标签
    let i2 = this.document.querySelector(".iconxiangxia2");



    //选项卡点击
    for (let i = 0; i < item.length; i++) {
        item[i].index = i
        item[i].onclick = function() {
            for (let j = 0; j < item.length; j++) {
                shopList[j].style.display = "none";

            }
            shopList[i].style.display = "block";
            itemtext1.style.top = i * 0.82 + 0.1 + "rem";
        }
    }


    //点击分类出现的页面
    var bianse = 0;
    tttt.onclick = function() {
        if (bianse == 0) {
            block.style.display = "block";
            titleSpan[2].classList.add("bian");
            titleSpan[0].classList.remove("bian1");
            titleSpan[1].classList.remove("bian1");
            bianse = 1;
        } else {
            block.style.display = "none"
            titleSpan[2].classList.remove("bian");
            bianse = 0;
        }

    }

    //点击综合排序变色
    var bianse1 = 0;
    zonghe.onclick = function() {
        if (bianse1 == 0) {
            titleSpan[0].classList.add("bian1");
            titleSpan[1].classList.remove("bian1");
            titleSpan[2].classList.remove("bian");
            bianse1 = 1;
        } else {
            // titleSpan[0].classList.remove("bian1");
            bianse1 = 0;
        }
    }

    //点击价格
    var bianse2 = 0;
    jiage.onclick = function() {
        if (bianse2 == 0) {
            titleSpan[1].classList.add("bian1");
            titleSpan[0].classList.remove("bian1");
            titleSpan[2].classList.remove("bian");
            i1.style.color = "slategray"
            i2.style.color = "#FF9201"
            bianse2 = 1;
        } else {
            // titleSpan[1].classList.remove("bian1");
            i1.style.color = "#FF9201"
            i2.style.color = "slategray"
            bianse2 = 0;
        }
    }



    //物品加减
    let index = [];
    for (let i = 0; i < jia.length; i++) {
        index[i] = 0;
    }
    for (let i = 0; i < jia.length; i++) {
        jia[i].onclick = function() {
            index[i]++;
            span[i].innerHTML = index[i];
        }
    }
    for (let i = 0; i < jia.length; i++) {
        jian[i].onclick = function() {
            if (index[i] > 0) {
                index[i]--;
                span[i].innerHTML = index[i];
            } else {
                index[i] = 0;
            }
        }
    }






    //页面加载刷新

    //实例化myScroll
    let myScroll = new IScroll("#right", {
        probeType: 2,
    })
    console.log(myScroll)
        // console.log(myScroll)
        //给myScroll监听滚动事件，来确定当前滚动了多少距离，判断能否进行页面的刷新
        /*
        1.根据myScroll的myScroll事件能够获取到页面滚动过得距离
        2.获取到这些距离以后通过运算得出结论，判断能否进行页面的加载
        3.如果最大距离与滚动过得距离想剪为负数，说明可以进行上拉加载
        4.需要设置开关，党可以进行加载的时候flag为真，否则为false
        5.在滚动结束以后，判断flag的真假，决定能否进行页面的加载
        6.在页面加载完成以后需要刷新myScroll，否则无法确定能够滚动的页面部分，会导致新增的元素无法显示出来
         */

    //声明flag变量，定义开关
    let flag = false;
    myScroll.on("scroll", function() {
            //在myScroll对象当中有属性maxmyScrollY保存的是页面最大的滚动距离，属性y保存的是页面在y轴的已经滚动获得距离
            //根据这两个值得大小可以判断是否需要进行页面的刷新或加载

            //保存页面能够滚动的最大距离
            let maxScrollY = myScroll.maxScrollY;
            //保存页面在y轴方向滚动过得距离
            let scrollLength = myScroll.y;
            //将两个值进行计算
            let res = maxScrollY - scrollLength;
            console.log(res)
            if (res > 0) {
                flag = true;
                let a = document.querySelector(".mask")
                $(".mask").css("display", "block")
                console.log(a)
            }
            //当差值在20到100之间时，提示用户释放加载
            if (res < 100 && res > 30) {
                $(".mask").html("释放加载")
            }
            // 下拉刷新
            if (res < maxScrollY) {
                flag = true;
                $(".mask1").css("display", "block");
            }
            if (res < maxScrollY - 50 && res > maxScrollY + 100) {
                $(".mask1").html("释放刷新")
            }

        })
        //当滚动结束以后可以进行数据的加载（没有接口，使用插入html元素模拟新的数据）
    myScroll.on("scrollEnd", function() {
            //需要判断flag，
            if (flag) {
                flag = false;
                $(".mask").css("display", "none");
                $(".mask1").css("display", "none");
                // 当滚动结束以后可以进行数据的加载（没有接口，插入html元素模拟新的数据）
                render();
            }
            //在页面加载完成以后需要刷新myScroll
            myScroll.refresh();
        })
        //定义render 函数，进行页面的渲染
    function render() {
        //声明str
        let str = `<div class="shop-box1">
    <div class="shop-box-img">
        <img src="img/class/shop2.png" alt="">
    </div>
    <div class="shop-box-font">
        <a href="#">新鲜青柠500g/盒新鲜特价新鲜特价新鲜特价</a>
        <span>￥10.8</span>
        <div class="shop-cart">
            <div class="jian">
                <img src="img/class/jian.png" alt="">
            </div>
            <span class="count">0</span>
            <div class="jia">
                <img src="img/class/jia.png" alt="">
            </div>
        </div>
    </div>
</div> 
    `
        $(".right-list").append(str)
    }

}