//index.js
//获取应用实例
var app = getApp();
let util = app.requirejs();
Page({
  data: {
    banner: [],
    list: [],
    city: '无锡',
    type: 3
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
          list: res.data
        })
      }
    })

  },
  changeType: function (e) {
    this.setData({
      type: e.currentTarget.id
    })
  },
  detail: function (e) { //详情
    console.log(e)
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
        url: '/pages/rentHouse/detail/index?detail=' + JSON.stringify(this.data.list[e.detail.id]),
      })
    }
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