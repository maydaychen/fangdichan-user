// pages/rentHouse/index.js
var app = getApp();
let util = app.requirejs();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    rentTypeFilterList: [
      '不限',
      '整租',
      '合租'
    ],
    priceFilterList: [
      '不限',
      '500-1000',
      '1000-1500',
      '1500-2000',
      '2000-2500',
      '5000以上'
    ],
    featureList: [
      '精装修',
      '近地铁',
      '双卫',
      '有车位',
      '押一付一',
      '随时看',
      '近公园',
      '环境好'
    ],
    areaSize: [
      '50以下',
      '50-70',
      '70-90',
      '90-120',
      '120-150',
      '150以上'
    ],
    floorType: [
      '6层以下',
      '6-12层',
      '12-20层',
      '20层以上'
    ],
    rentTimeType: [
      '月租',
      '年租'
    ],
    pageName: '',
    currentPage: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
  },

  loadData () {
    let that = this
    util.request({
      url: '/House/getUserRentingList',
      data: {
        villagename: '',
        type: '整租',
        page: this.data.currentPage
      },
      success(res) {
        if (res.data.data.length === 0) {
          return
        }
        let list = res.data.data
        for (let item of list) {
          item.smallimages = item.smallimages.split(',')[0]
        }
        that.setData({
          list: res.data.data
        })
      },
    })
  },

  show (e) {
    this.setData({
      pageName: e.currentTarget.dataset.pagename
    })
  },

  selectedArea (e){
    this.setData({
      pageName: ''
    })
  },

  selectedPrice (e){
    this.setData({
      pageName: ''
    })
  },

  selected (e){
    this.setData({
      pageName: ''
    })
  },

  moreConditionSelected (e){
    this.setData({
      pageName: ''
    })
  },

  location () {
    wx.navigateTo({
      url: '/pages/index/locate'
    })
  },

  detail () {
    wx.navigateTo({
      url: '/pages/rentHouse/detail/index'
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