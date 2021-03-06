// pages/rentHouse/index.js
var app = getApp();
let util = app.requirejs();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    searchKey: '',
    rentTypeFilterList: [
      {
        id: 0,
        value: '不限',
        checked: false
      },
      {
        id: 1,
        value: '整租',
        checked: false
      },
      {
        id: 2,
        value: '合租',
        checked: false
      }
    ],
    rentTypeSelected: '整租',
    priceRange: '',
    featureList: [
      {
        value: '精装修',
        checked: false
      },
      {
        value: '近地铁',
        checked: false
      },
      {
        value: '双卫',
        checked: false
      },
      {
        value: '有车位',
        checked: false
      },
      {
        value: '押一付一',
        checked: false
      },
      {
        value: '随时看',
        checked: false
      },
      {
        value: '近公园',
        checked: false
      },
      {
        value: '环境好',
        checked: false
      }
    ],
    areaSize: [
      {
        value: '50以下',
        checked: false
      },
      {
        value: '50-70',
        checked: false
      },
      {
        value: '70-90',
        checked: false
      },
      {
        value: '90-120',
        checked: false
      },
      {
        value: '120-150',
        checked: false
      },
      {
        value: '150以上',
        checked: false
      }
    ],
    floorType: [
      {
        name: '6层以下',
        value: '6层以下',
        checked: false
      },
      {
        name: '6-12层',
        value: '6-12',
        checked: false
      },
      {
        name: '12-20层',
        value: '12-20',
        checked: false
      },
      {
        name: '20层以上',
        value: '20层以上',
        checked: false
      }
    ],
    rentTimeType: [
      {
        value: '月租',
        checked: false
      },
      {
        value: '年租',
        checked: false
      }
    ],
    direction: [
      {
        value: '东',
        checked: false
      },
      {
        value: '西',
        checked: false
      },
      {
        value: '南',
        checked: false
      },
      {
        value: '北',
        checked: false
      }
    ],
    levator: [
      {
        value: '有电梯',
        checked: false
      },
      {
        value: '无电梯',
        checked: false
      }
    ],
    pageName: '',
    currentPage: 0,
    filterRegion: '',
    filterMetro: '',
    filterLocation: '',
    filterArea: '',
    filterFloor: '',
    filterorientation: '',
    filterElevator: '',
    filterFeatures: '',
    filterNear: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
  },

  loadData () {
    let that = this
    let rentType = this.data.rentTypeSelected != '不限' ? this.data.rentTypeSelected : ''
    util.request({
      url: '/House/getUserRentingList',
      data: {
        villagename: this.data.searchKey,
        type: rentType,
        page: this.data.currentPage,
        region: this.data.filterRegion,
        metro: this.data.filterMetro,
        nearby: this.data.filterLocation,
        rent: this.data.priceRange,
        features: this.data.filterFeatures,
        area: this.data.filterArea,
        floor: this.data.filterFloor,
        orientation: this.data.filterorientation,
        elevator: this.data.filterElevator
      },
      success(res) {
        if (res.data.data.length === 0) {
          return
        }
        let list = res.data.data
        for (let item of list) {
          item.smallimages = item.smallimages.split(',')[0]
        }
        that.setData({
          list: res.data.data
        })
      },
    })
  },

  show (e) {
    if (this.data.pageName === e.currentTarget.dataset.pagename) {
      this.setData({
        pageName: ''
      })
    } else {
      this.setData({
        pageName: e.currentTarget.dataset.pagename
      })
    }
  },

  selectedArea (e){
    this.setData({
      pageName: '',
      currentPage: 0,
      filterMetro: e.detail.metro,
      filterRegion: e.detail.region,
      filterNear: e.detail.nearby,
      canScroll: true
    })
    if (e.detail.nearby) {
      wx.getLocation({
        type: 'wgs84',
        success: (res)=> {
          let location = res.longitude + ',' + res.latitude
          this.setData({
            filterLocation: location
          })
          this.loadData()
        }
      })
    } else {
      this.loadData()
    }
  },

  selectedPrice (e){
    let priceRange = ''
    if (e.detail.minValue && e.detail.maxValue) {
      priceRange = e.detail.minValue + ',' + e.detail.maxValue
    }
    this.setData({
      pageName: '',
      currentPage: 0,
      priceRange: priceRange
    })

    this.loadData()
  },

  selectedRentType (e){
    let rentTypeFilterWrapper = this.data.rentTypeFilterList
    for (let item of rentTypeFilterWrapper) {
      if (item.id === e.detail.id) {
        item.checked = true
      } else {
        item.checked = false
      }
    }

    this.setData({
      pageName: '',
      rentTypeSelected: e.detail.value,
      rentTypeFilterList: rentTypeFilterWrapper,
      currentPage: 0
    })

    this.loadData()
  },

  moreConditionSelected (e){
    this.setData({
      pageName: ''
    })

    let areaSizeWrapper = this.data.areaSize
    let areaSizeIndex= areaSizeWrapper.findIndex(item => item.value === e.detail.areaSize)
    if (areaSizeIndex) {
      areaSizeWrapper[areaSizeIndex].checked = true
    }

    let floorTypeWrapper = this.data.floorType
    let floorTypeIndex = floorTypeWrapper.findIndex(item => item.value === e.detail.floor)
    if (floorTypeIndex) {
      floorTypeWrapper[floorTypeIndex].checked = true
    }

    let featureListWrapper = this.data.featureList
    for (let i in e.detail.features) {
      let featureIndex = featureListWrapper.findIndex(item => item.value === e.detail.features[i])
      if (featureIndex) {
        featureListWrapper[featureIndex].checked = true
      }
    }

    let levatorWrapper = this.data.levator
    let levatorIndex = levatorWrapper.findIndex(item => item.value === e.detail.levator)
    if (levatorIndex) {
      levatorWrapper[levatorIndex].checked = true
    }

    let rentTypeWrapper = this.data.rentTimeType
    let rentTypeIndex = rentTypeWrapper.findIndex(item => item.value === e.detail.rentType)
    if (rentTypeIndex) {
      rentTypeWrapper[rentTypeIndex].checked = true
    }

    let directionWrapper = this.data.direction
    let directionIndex = directionWrapper.findIndex(item => item.value === e.detail.direction)
    if (directionIndex) {
      directionWrapper[directionIndex].checked = true
    }

    this.setData({
      currentPage: 0,
      areaSize: areaSizeWrapper,
      floorType: floorTypeWrapper,
      direction: directionWrapper,
      featureList: featureListWrapper,
      rentTimeType: rentTypeWrapper,
      levator: levatorWrapper,
      filterArea: e.detail.areaSize,
      filterFloor: e.detail.floor,
      filterorientation: e.detail.direction,
      filterElevator: e.detail.levator,
      filterFeatures: e.detail.features.join(',')
    })

    this.loadData()
  },

  location () {
    wx.navigateTo({
      url: '/pages/index/locate'
    })
  },

  detail (data) {
    if (data.detail.id) {
      wx.navigateTo({
        url: '/pages/rentHouse/detail/index?id=' + data.detail.id
      })
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
    this.loadData()
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