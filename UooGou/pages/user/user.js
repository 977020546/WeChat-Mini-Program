// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{},
        // 被收藏的商品的数量
        collectNums:[],
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        const userInfo=wx.getStorageSync('userInfo');
        const collect=wx.getStorageSync('collect')
        this.setData({
            userInfo,
            collectNums:collect.length,
        });
    },
    handleCollect(e){
        // console.log(e);
        const index=e.currentTarget.dataset.collectnum;
        wx.setStorageSync('collectNum', index)
    }
})