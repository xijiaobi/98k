Page({
  data: {
    popelelist: []
  },
  onLoad: function (options) {
    var then = this;
    wx.setNavigationBarTitle({
      title: '猫眼电影'
    }),
      wx.request({
        url: 'http://127.0.0.1:8088/movie/find',
        data: {},
        method: 'POST',
        success: function (res) {
          console.log(res.data)
         
          // res.data.film_covers[0].film_covers = res.data.film_covers[0].film_covers.replace(/\\/, '/')
          for(let i=0;i<res.data.length;i++){
            res.data[i].film_covers[0].film_covers = res.data[i].film_covers[0].film_covers.replace(/\\/g,'/')
          }
          then.setData({
            popelelist: res.data
          })
        }
      })
  },

})