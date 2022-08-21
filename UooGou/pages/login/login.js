// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    handleGetUserInfo(e){
        // console.log(e);
        const {userInfo}=e.detail;
        wx.setStorageSync('userInfo', userInfo);
        wx.navigateBack({
            delta:1
        });
    }
})