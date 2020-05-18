Page({
  data: {
    num: 0,
    student: [{
      "name": 12
    }, {
      "name": 21
    }]
  },
  up() {
    this.setData({
      num:this.data.num+1
    });
  }
})