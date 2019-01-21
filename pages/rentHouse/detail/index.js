// pages/rentHouse/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viliage_deal: [1, 2],
    banner: ["/image/banner.png", "/image/banner.png", "/image/banner.png"],
  },
  sameTown: function () {
    wx.navigateTo({
      url: '../sameTown/index'
    })
  },
  share: function () {
    wx.showToast({
      title: 'test',
      icon: ''
    })
  },

  toSubscribe () {
    wx.navigateTo({
      url: '../subscribe/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})