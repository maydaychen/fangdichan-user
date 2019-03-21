// components/house-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    featureList: Array,
    areaSize: Array,
    floorType: Array,
    isRent: Boolean,
    rentTimeType: Array,
    direction: Array,
    levator: Array
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
    sure () {
      let selectedFeatures = []
      let selectedAreaSize = ''
      let selectedFloor = ''
      let selectedRentType = ''
      let selectedLevator = ''
      let selectedDirection = ''

      let features = this.properties.featureList.filter(item => item.checked === true)
      for (let i in features) {
        selectedFeatures.push(features[i].value)
      }

      let areaSize = this.properties.areaSize.find(item => item.checked == true)
      if (areaSize) {
        selectedAreaSize = areaSize.value
      }

      let floor = this.properties.floorType.find(item => item.checked == true)
      if (floor) {
        selectedFloor = floor.value
      }

      let rentType = this.properties.rentTimeType.find(item => item.checked == true)
      if (rentType) {
        selectedRentType = rentType.value
      }

      let levator = this.properties.levator.find(item => item.checked == true)
      if (levator) {
        selectedLevator = levator.value
      }

      let direction = this.properties.direction.find(item => item.checked == true)
      if (direction) {
        selectedDirection = direction.value
      }

      let selectedData = {
        features: selectedFeatures,
        areaSize: selectedAreaSize,
        floor: selectedFloor,
        rentType: selectedRentType,
        levator: selectedLevator,
        direction: selectedDirection
      }

      this.triggerEvent('selected', selectedData)
    },

    selected (e) {
      let type = e.target.dataset.type
      let value = e.target.dataset.value

      switch (type) {
        case 'feature':
          let featureListWrapper = this.properties.featureList
          let index = featureListWrapper.findIndex(item => item.value === value)
          if (index >= 0) {
            featureListWrapper[index].checked = !featureListWrapper[index].checked
          }
    
          this.setData({
            featureList: featureListWrapper
          })
          break
        case 'area':
          let areaSizeWrapper = this.properties.areaSize
          for (let i in areaSizeWrapper) {
            if (areaSizeWrapper[i].value === value) {
              areaSizeWrapper[i].checked = !areaSizeWrapper[i].checked
            } else {
              areaSizeWrapper[i].checked = false
            }
          }

          this.setData({
            areaSize: areaSizeWrapper
          })
          break
        case 'floor':
          let floorWrapper = this.properties.floorType
          for (let i in floorWrapper) {
            if (floorWrapper[i].value === value) {
              floorWrapper[i].checked = !floorWrapper[i].checked
            } else {
              floorWrapper[i].checked = false
            }
          }

          this.setData({
            floorType: floorWrapper
          })
          break
        case 'rentType':
          let rentTypeWrapper = this.properties.rentTimeType

          for (let i in rentTypeWrapper) {
            if (rentTypeWrapper[i].value === value) {
              rentTypeWrapper[i].checked = !rentTypeWrapper[i].checked
            } else {
              rentTypeWrapper[i].checked = false
            }
          }

          this.setData({
            rentTimeType: rentTypeWrapper
          })
          break
        case 'direction':
          let directionWrapper = this.data.direction

          for (let i in directionWrapper) {
            if (directionWrapper[i].value === value) {
              directionWrapper[i].checked = !directionWrapper[i].checked
            } else {
              directionWrapper[i].checked = false
            }
          }

          this.setData({
            direction: directionWrapper
          })
          break
        case 'levator':
          let levatorWrapper = this.data.levator

          for (let i in levatorWrapper) {
            if (levatorWrapper[i].value === value) {
              levatorWrapper[i].checked = !levatorWrapper[i].checked
            } else {
              levatorWrapper[i].checked = false
            }
          }

          this.setData({
            levator: levatorWrapper
          })
          break
        default:
          return
      }
    }
  }
})