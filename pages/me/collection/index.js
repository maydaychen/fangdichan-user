// pages/me/collection/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    list: [],
    hide: true,
  },
  show: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      type: id
    })
  },
  change: function (e) {
    if (e.detail.value) {
      this.setData({
        hide: false
      })
    } else {
      this.setData({
        hide: true
      })
    }
    this.setData({
      key: e.detail.value
    })
  },
  cancel: function () {
    this.setData({
      key: "",
      hide: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.id
    })
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