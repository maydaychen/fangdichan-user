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
    minValue: '',
    maxValue: '',
    selectedData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select (e) {
      let that = this
      let listWrapper = that.properties.list
      let selectedData = {}
      for (let i in listWrapper) {
        if (i == e.target.dataset.index) {
          listWrapper[i].checked = !listWrapper[i].checked
          selectedData = listWrapper[i]
        } else {
          listWrapper[i].checked = false
        }
      }
      this.setData({
        list: listWrapper,
        selectedData: selectedData
      })
    },

    sure () {
      let selectedData = {
        selectedItem: this.data.selectedData,
        minInput: this.data.minValue,
        maxInput: this.data.maxValue
      }
      this.triggerEvent('selected', selectedData)
    }
  }
})