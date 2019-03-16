// /pages/search/index.js
var app = getApp();
let util = app.requirejs();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '',
    type: "",
    hide: true,
    search_list:[],
    houseList: []
  },

  change: function (e) {
    let that = this
    if (e.detail.value && e.detail.cursor) {
      this.searchHouse(e.detail.value)
    }

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

  searchHouse (searchKey) {
    let that = this
    util.request({
      url: '/villages/queryName',
      data: {
        name: searchKey,
        openId: app.globalData.openInfo.openid,
        type: this.data.type
      },
      success(res) {
        that.setData({
          houseList: res.data
        })
      }
    })
  },

  cancel: function () {
    this.setData({
      searchKey: "",
      hide: true
    })
  },

  clickHistorySearchItem (e) {
    this.setData({
      searchKey: e.currentTarget.dataset.value
    })
    this.searchHouse(e.currentTarget.dataset.value)
  },

  selectHouseItem (e) {
    // navigate to house list page to search
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    prevPage.data.searchKey = e.currentTarget.dataset.value
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    var title = ""
    let type = ""
    switch (options.id) {
      case "1":
        title = "二手房搜索"
        searchType = "handhousings"
        break;
      case "2":
        title = "新房搜索"
        break;
      case "3":
        title = "租房搜索"
        type = "renting"
        break;
    }
    wx.setNavigationBarTitle({
      title: title,
    })
    this.setData({
      type: type
    })

    // get search history list
    util.request({
      url: '/Minshe/historyList',
      data: {
        openId: app.globalData.openInfo.openid,
        type: type
      },
      success(res) {
        that.setData({
          search_list: res.data
        })
      },
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