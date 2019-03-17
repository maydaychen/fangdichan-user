// pages/rentHouse/detail/index.js
var app = getApp();
let util = app.requirejs();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viliage_deal: [1, 2],
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

  toSubscribe() {
    wx.navigateTo({
      url: '../subscribe/index'
    })
  },
  collect: function () {
    util.request({
      url: '/House/collection',
      data: {
        houseid: this.data.id,
        openId: app.globalData.openInfo.openid,
        type: "renting",
      },
      success(res) {
        console.log(res.data)
        if(res.data.code==1){
          wx.showToast({
            title: '收藏成功',
            icon: 'none'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var info;
    var that = this;
    util.request({
      url: '/House/getUserRentingView',
      data: {
        id: options.id,
      },
      success(res) {
        info = res.data.data;
        var markers = new Array();
        var item = new Object;
        item.id = 1;
        item.latitude = parseFloat(info.villages.latitude);
        item.longitude = parseFloat(info.villages.longitude);
        item.name = info.villages.name;
        markers.push(item);
        var j = parseInt(info.floor);
        let type_floor = "";
        if (j < 6) {
          type_floor = "低楼层"
        } else if (6 <= j < 10) {
          type_floor = "中楼层"
        } else {
          type_floor = "高楼层"
        }

        that.setData({
          id: options.detail,
          type_floor: type_floor,
          info: info, //解析得到对象
          banner: info.smallimages.split(','),
          latitude: parseFloat(info.villages.latitude),
          longitude: parseFloat(info.villages.longitude),
          markers: markers
        })
      }
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