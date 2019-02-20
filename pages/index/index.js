//index.js
//获取应用实例
var app = getApp();
let util = app.requirejs();
Page({
  data: {
    banner: [],
    list: [],
    city: '无锡'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    var that = this;
    util.request({
      url: '/ads/getAll',
      success(res) {
        var list = new Array();
        for (var i in res.data) {
          console.log(i);
          list.push("https://apis.vitlf.com" + res.data[i].smallimage)
        }
        that.setData({
          banner: list
        })
      }
    })
    util.request({
      url: '/quotation/info',
      success(res) {
        that.setData({
          price: res.data.price,
          mnt: res.data.mnt
        })
      }
    })
    util.request({
      url: '/House/userIndexData',
      success(res) {
        console.log(res)
        that.setData({
          list:res.data
        })
      }
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  newHouse() {
    wx.navigateTo({
      url: '/pages/index/add/index'
    })
  },
  location() {
    wx.navigateTo({
      url: '/pages/index/locate'
    })
  },

  changeCity(data) {
    this.setData({
      city: data.name
    })
  }
})