// components/house-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    type: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: [1,2]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sure () {
      this.triggerEvent('selected', '', {})
    }
  }
})