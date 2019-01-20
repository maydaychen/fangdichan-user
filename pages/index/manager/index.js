// pages/index/manager/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide: true,
    list:[1,2],
    navigation: '',
    rsbFilterList: [
      '买卖经纪人',
      '租赁经纪人'
    ],
    sortFilterList: [
      '不限',
      '租赁成交量从高到低',
      '买卖成交量从高到低'
    ]
  },

  show (e) {
    this.setData({
      navigation: e.currentTarget.dataset.pagename
    })
  },

  selectedArea (e) {
    this.setData({
      navigation: ''
    })
  },

  selected (e) {
    this.setData({
      navigation: ''
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