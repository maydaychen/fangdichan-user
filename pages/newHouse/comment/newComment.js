// pages/newHouse/comment/newComment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_niming: false,
    value: 0,
    count: 5,
    color: '#c0c0c0',
    activeColor: '#ff5733'
  },
  niming: function () {
    this.setData({
      is_niming: !this.data.is_niming
    })
  },
  handlerRate(e) {
    const {
      readonly = false, score = 0
    } = e.target.dataset;
    if (readonly) {
      return;
    }
    if (score) {
      this.setData({
        value: score
      });
    }
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