module.exports = Behavior({
  behaviors: [],
  properties: {
    loadSize: {
      type: Number,
      value: 20
    },
    dataArr: Array
  },

  data: {
    allArr: [],
    isFirst: true,
    hasMore: true
  },

  method: {
    hasMore() {
      let dataLen = this.properties.dataArr.length
      if (dataLen == this.properties.loadSize) {
        this.data.hasMore = true
      } else {
        this.data.hasMore = this.data.isFirst && dataLen ? true : false
      }
    }
  },

  addData() {
    if (this.data.hasMore) {
      this.setData({
        allArr: this.data.allArr.concat(this.properties.dataArr),
        loading: false
      })
    }
  }
});