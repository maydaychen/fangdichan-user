// components/house-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    priceRange: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    minPriceInput (e) {
      if (!e.detail.value) {
        return
      }
      let priceRangeWrapper = this.properties.priceRange
      priceRangeWrapper.minValue = e.detail.value

      this.setData({
        priceRange: priceRangeWrapper
      })
    },

    maxPriceInput (e) {
      if (!e.detail.value) {
        return
      }

      let priceRangeWrapper = this.properties.priceRange
      priceRangeWrapper.maxValue = e.detail.value

      this.setData({
        priceRange: priceRangeWrapper
      })
    },

    sure () {
      this.triggerEvent('selected', this.properties.priceRange)
    }
  }
})