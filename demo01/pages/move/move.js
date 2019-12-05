// pages/move/move.js
var appdata = getApp();
console.log("全局appdata=" + appdata.data.item);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    cached:""
  },

  domoveClick(e) {
    wx.showToast({
      title: 'qqq',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var cachedata = wx.getStorageSync("chedata");
    console.log("前="+cachedata);
    this.setData({
      items: appdata.data.items,
      cached: cachedata
    })
    console.log("cachedata=" + this.data.cached);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})