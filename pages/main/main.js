Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    num:5,
    msg: '尊敬的用户你好，我是你爹',
    dizhi: '获取位置',
    iconSize: [20],
    iconColor: [
      'red', 'yellow'
    ],
    iconType: [
      'success_no_circle'
    ]
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  dian: function () {
  console.log('ss')
  },
  addnum:function(){
    this.setData({
      count:this.data.count+1
    })
  },
  delnum:function(){
  
    this.setData({
      count:this.data.count-1
    })
  }
 


})