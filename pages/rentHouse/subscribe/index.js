// pages/rentHouse/subscribe/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step: 2,
    houseId: '',
    name: '',
    phone: '',
    remark: '',
    showDateModal: false
  },

  validate () {
    console.log('this.data.name')
    console.log(this.data.name)
    if (!this.data.name) {
      wx.showToast({
        title: '请填写称呼',
        icon: 'none'
      })
      return false
    }

    if (!this.data.phone) {
      wx.showToast({
        title: '请填写手机号',
        icon: 'none'
      })
      return false
    }
 
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.data.phone))) {
      wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none'
      })
      return false
    }
  },

  showDateModal () {
    this.setData({
      showDateModal: true
    })
  },

  hideDateModal () {
    this.setData({
      showDateModal: false
    })
  },

  selectDate (e) {
    console.log(e.detail)
  },

  sumbit () {
    if(!this.validate()) {
      return
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