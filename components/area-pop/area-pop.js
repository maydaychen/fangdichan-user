// components/house-list.js
var app = getApp();
let util = app.requirejs();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    areaMenu: 'area',
    areaKey: [],
    areaArray: [],
    areaTag: [],
    metroLine: [],
    near: [
      {
        value: '500米',
        checked: false
      },
      {
        value: '1000米',
        checked: false
      },
      {
        value: '1500米',
        checked: false
      }
    ]
  },

  lifetimes: {
    attached: function() {
      let that = this
      util.request({
        url: '/regions/getAll',
        success(res) {
          let areaArray = res.data
          let areaKeyWrapper = []
          for (let item of areaArray) {
            let areaKeyItem = {
              name: item.name,
              checked: false
            }
            areaKeyWrapper.push(areaKeyItem)
          }
          that.setData({
            areaArray: res.data,
            areaKey: areaKeyWrapper
          })
        }
      })

      util.request({
        url: '/metros/getAll',
        success(res) {
          let metroLineWrapper = []
          for (let item of res.data) {
            item.checked = false
            metroLineWrapper.push(item)
          }
          that.setData({
            metroLine: metroLineWrapper
          })
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectAreaKey (e) {
      let key = e.currentTarget.dataset.key
      let areaKeyWrapper = this.data.areaKey
      for (let item of areaKeyWrapper) {
        if (item.name === key) {
          item.checked = !item.checked
        } else {
          item.checked = false
        }
      }

      this.setData({
        areaKey: areaKeyWrapper
      })

      let areaItem = this.data.areaArray.find(item => item.name === key)
      if (areaItem) {
        let areaTagWrapper = []
        for (let tagItem of areaItem.tag) {
          let item = {
            value: tagItem,
            checked: false
          }
          areaTagWrapper.push(item)
        }
        this.setData({
          areaTag: areaTagWrapper
        })
      }
      
    },

    selectAreaTag (e) {
      let value = e.currentTarget.dataset.value
      let areaTagWrapper = this.data.areaTag
      for (let item of areaTagWrapper) {
        if (item.value === value) {
          item.checked = !item.checked
        } else {
          item.checked = false
        }
      }
      this.setData({
        areaTag: areaTagWrapper
      })
    },

    selectMetroLine (e) {
      let value = e.currentTarget.dataset.value
      let metroLineWrapper = this.data.metroLine
      for (let item of metroLineWrapper) {
        if (item.name === value) {
          item.checked = !item.checked
        } else {
          item.checked = false
        }
      }
      this.setData({
        metroLine: metroLineWrapper
      })
    },

    selectNear (e) {
      let value = e.currentTarget.dataset.value
      let nearWrapper = this.data.near
      for (let item of nearWrapper) {
        if (item.value === value) {
          item.checked = !item.checked
        } else {
          item.checked = false
        }
      }
      this.setData({
        near: nearWrapper
      })
    },

    selectArea: function (e) {
      this.setData({
        areaMenu: e.currentTarget.dataset.areamenu
      })
    },

    sure () {
      let selected = {
        nearby: {
          x: '',
          y: ''
        },
        region: '',
        metro: ''
      }
      let that = this
      let near = this.data.near.find(item => item.checked === true)
      if (near) {
        wx.getLocation({
          type: 'wgs84',
          success: (res)=> {
            selected.nearby.x = res.longitude //经度
            selected.nearby.y = res.latitude  //纬度
          }
        })
      }

      let area = this.data.areaTag.find(item => item.checked === true)
      if (area) {
        selected.region = area.value
      }

      let metro = this.data.metroLine.find(item => item.checked === true)
      if (metro) {
        selected.metro = metro.name
      }

      this.triggerEvent('selectedArea', selected)
    }
  }
})