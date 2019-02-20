// pages/index/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: []
  },
  message: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  send: function () {
    if (this.data.inputValue) {
      wx.sendSocketMessage({
        data: this.data.inputValue,
      })
      let message = new Object();
      let list = this.data.messageList;
      message.type = "1";
      message.detail = this.data.inputValue;
      list.push(message);
      this.setData({
        messageList: list,
        inputValue: ""
      })
    } else {
      wx.showToast({
        title: '请填写内容',
        icon: 'none'
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //建立连接
    wx.connectSocket({
      url: "wss://chat.vitlf.com:4001",
      success() {
        console.log("成功")
      },
      fail() {
        console.log("失败")
      },
      complete() {
        console.log("完成");
      }
    })
    wx.onSocketOpen(function () {
      console.log("连接成功");
    })
    wx.onSocketMessage(function (data) {
      let message = new Object();
      let list = that.data.messageList;
      message.type = "0";
      message.detail = data;
      list.push(message);
      that.setData({
        messageList: list
      })
      console.log(that.data.messageList);
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