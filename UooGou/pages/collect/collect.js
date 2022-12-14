// pages/collect/collect.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        collect:[],
        tabs:[
            {
                id:0,
                value:'店铺收藏',
                isActive:false
            },
            {
                id:1,
                value:'商品收藏',
                isActive:false
            },
            {
                id:2,
                value:'品牌收藏',
                isActive:false
            },
            {
                id:3,
                value:'浏览足迹',
                isActive:false
            },
        ],
        index:[]
    },
    onShow(){
        const collectNum=Number(wx.getStorageSync('collectNum')||[]);
        this.setData({
            index:collectNum
        })
        // console.log(this.data.index);
        const index = this.data.index;
        // 2. 修改原数组
        let {tabs}=this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        const collect=wx.getStorageSync('collect')||[];
        // 3. 赋值到data中
        this.setData({
            tabs,
            collect
        })
    },
    // 标题点击事件 从子组件传递过来
    handleTabsItemChange(e){
        // 1. 获取被点击的标题索引
        const {index} = e.detail;
        // console.log(index);
        // 2. 修改原数组
        let {tabs}=this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        // 3. 赋值到data中
        this.setData({
            tabs
        })
    },
})