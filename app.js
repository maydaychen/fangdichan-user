//app.js
let util = require(`./utils/util.js`)
App({
  onLaunch: function () {
    util.getInfo({
      success: res => {
        this.getUser();
      }
    })
  },
  getUser() {
    let that = this
    util.request({
      url: '/user/checkOpenid',
      data: {
        openId: this.globalData.openInfo.openid
      },
      success(res) {
        if (res.data.isNum < 1) {
          wx.redirectTo({
            url: '/pages/login/welcome/index',
          })
        }
      },
      fail(res) {
        wx.redirectTo({
          url: '/pages/login/welcome/index',
        })
      }
    })
  },
 
  requirejs: function (e) {
    return require("utils/util.js")
  },
  globalData: {
    userInfo: null,
    baseUrl: "https://apis.vitlf.com",
    openInfo: {
      openid: '',
      session_key: ''
    }
  }
})