// pages/twohand/index.js
// pages/house/twohand/index.js
var app = getApp();
let util = app.requirejs();
Page({

  /**
   * 页面的初始数据
   */
  // 1二手房 2新房 3租房
  data: {
    type: 0,
    navigation: '',
    list: [1],
    hide: true,
    pageName: ''
  },
  show: function (e) {
    this.setData({
      navigation: e.currentTarget.dataset.pagename,
      pageName: e.currentTarget.dataset.pagename
    })
  },

  selectedArea (e){
    this.setData({
      pageName: '',
      navigation: ''
    })
  },

  sure: function (e) {
    this.setData({
      pageName: '',
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
  goto: function () { //add
    if (this.data.type == 1) {
      wx.navigateTo({
        url: '/pages/twohand/detail/index',
      })
    }
    if (this.data.type == 2) {
      wx.navigateTo({
        url: '/pages/newHouse/detail/index',
      })
    }
    if (this.data.type == 3) {
      wx.navigateTo({
        url: '/pages/rentHouse/detail/index',
      })
    }
  },
  detail: function (e) { //详情
    if (this.data.type == 1) {
      wx.navigateTo({
        url: '/pages/twohand/detail/index',
      })
    }
    if (this.data.type == 2) {
      wx.navigateTo({
        url: '/pages/newHouse/detail/index',
      })
    }
    if (this.data.type == 3) {
      wx.navigateTo({
        url: '/pages/rentHouse/detail/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.id
    })
    if (options.id == 2) {
      wx.setNavigationBarTitle({
        title: '全部楼盘',
      })

    } else {

    }

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

})