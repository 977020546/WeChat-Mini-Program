// pages/search/search.js
/*
1.输入框绑定 值改变事件 input事件
    1.获取到输入框的值
    2.合法值判断
    3.检验通过 把输入框的值 发送到后台
    4.返回的数据打印到页面上
2.防抖 （防止抖动） 定时器  节流
    0.防抖 一般 输入框中 防止重复输入 重复发送请求
    1.节流 一般是用在页面下拉和上拉
    2.定义全局的定时器id
*/ 
import {request} from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[],
        // 取消 按钮 是否提示
        isFoucs:false,
        // 输入框的值
        inpValue:''
    },
    TimeId:-1,
    onShow(){

    },
    // 输入框的值改变 就会触发的事件
   handleInput(e){
        // 1.获取输入框的值
        const {value}=e.detail;
        // 2.检查合法性
        if (!value.trim()) {
            this.setData({
                goods:[],
                isFoucs:false
            })
            // 值不合法
            return;
        }
        // 3.准备发送请求获取数据
        this.setData({
            isFoucs:true
        })
        clearTimeout(this.TimeId);
        this.TimeId=setTimeout(()=>{
            this.qsearch(value);
        },1000);
        
    },
    async qsearch(query){
        const res=await request({url:'/goods/qsearch',data:{query}});
        this.setData({
            goods:res
        })
    },
    //点击 取消按钮
    handleCancel(){
        this.setData({
            goods:[],
            isFoucs:false,
            inpValue:''
        })
    }
})