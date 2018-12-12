// pages/entrust/house-property.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedHouse: '广安 康馨家园',
    bannerUrls: [
      '/image/banner.png', 
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545145425&di=8eb6f68925e1d89fef8fc3da756d0115&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F587987cd448b4.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545145567&di=31527d58174552cea27beed01afd3178&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zx123.cn%2FResources%2Fzx123cn%2Fuploadfile%2F2017%2F0309%2F5b8e146c875fda206e36762dca137874.jpg'
    ],
    currentType: ''
  },

  changeType (type) {
    console.log('type')
    console.log(type)
    this.setData({
      currentType: type
    })
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