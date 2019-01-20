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
    pageName: '',
    priceFilterList: [
      '不限',
      '50万以下',
      '50-80万',
      '80-100万',
      '100-120万',
      '120-150万'
    ],
    featureList: [
      '满两年',
      '近地铁',
      '新上',
      '有车位',
      '满五年',
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
      '150-200',
      '200-300',
      '300以上'
    ],
    floorType: [
      '6层以下',
      '6-12层',
      '12-20层',
      '20层以上'
    ],
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

  selectedPrice (e){
    this.setData({
      pageName: '',
      navigation: ''
    })
  },

  moreConditionSelected (e){
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