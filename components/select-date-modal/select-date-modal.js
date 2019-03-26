const date = new Date()
const years = []
const months = []
const days = []
const bigMonth = [1, 3, 5, 7, 8, 10, 12]

for (let i = 2000; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: date.getMonth() + 1,
    days: days,
    day: date.getDate(),
    value: [date.getFullYear(), date.getMonth(), date.getDate() - 1],
    times: ["00:00", "00:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    time: '00:00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //判断元素是否在一个数组
    contains (arr, obj) {
      let i = arr.length;
      while (i--) {
        if (arr[i] === obj) {
          return true;
        }
      }
      return false;
    },

    setDays: function (day) {
      const temp = [];
      for (let i = 1; i <= day; i++) {
        temp.push(i)
      }
      this.setData({
        days: temp,
      })
    },

    //选择滚动器改变触发事件
    bindChange (e) {
      const val = e.detail.value;
      //判断月的天数
      const setYear =
        this.data.years[val[0]];
      const setMonth =
        this.data.months[val[1]];
      const setDay =
        this.data.days[val[2]]

      if (setMonth === 2) {
        // 闰年
        if ((setYear % 4 === 0 && setYear % 100 !== 0) || setYear % 400 === 0) {
          this.setDays(29);
        } else {
          this.setDays(28);
        }
      } else {
        //大月
        if (this.contains(bigMonth, setMonth)) {
          this.setDays(31)
        } else {
          this.setDays(30)
        }
      }

      this.setData({
        year: setYear,
        month: setMonth,
        day: setDay,
        time: this.data.times[val[3]]
      })
    },

    sure () {
      let data = {'year': this.data.year, 'month': this.data.month, 'day': this.data.day, 'time': this.data.time};
      this.triggerEvent('selectedDate', data)
    },

    cancel () {
      this.triggerEvent('cancel', '')
    }
  }
})