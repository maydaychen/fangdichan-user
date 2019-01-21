// pages/house/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        name: '1',
        value: '语言辱骂，不文明用语'
      },
      {
        name: '2',
        value: '存在广告色情等违规行为',
        checked: 'true'
      },
      {
        name: '3',
        value: '语言辱骂，不文明用语'
      },
      {
        name: '4',
        value: '存在广告色情等违规行为'
      }
    ]
  },
  imgsOnChange(e) {
    console.log(e.detail)
    this.setData({
      company_img_list: e.detail
    })
  },
  add_pic: function (e) {
    var that = this;
    var dataset = e.target.dataset;
    var Index = dataset.index; //拿到是第几个数组
    console.log(that.data.imgs[Index]);
    const D = this.data
    util.upload({
      count: 1,
      success: res => {
        console.log(res);
        var images = that.data.imgs;
        images[Index] = app.globalData.baseUrl + res.url;
        that.setData({
          imgs: images
        })
      }
    })
  },
  _prevImg(e) {
    var that = this;
    const idx = e.currentTarget.dataset.index
    var list = new Array;
    var images = that.data.imgs;
    list.push(images[idx]);
    wx.previewImage({
      urls: list
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