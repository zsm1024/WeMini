//logs.js
var app = getApp();  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    content:'',
    webUrl: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var webUrl = 'http://wechatuat.gwmfc.com/gwm-web-wechat/promiseBlookes.html?openid='+'asdfads222221'
    this.setData({
      webUrl: webUrl 
    })
  },
  //渲染数据
  /*loadData: function () {
    var that = this
    wx.request({
      url: "http://10.50.128.168:8080/gwm-web-wechat/queryElectronicTagHtml",
      data: {
        id: '00001NE7Z0LIE000AA01',
        openid: 'oImjOwMUG-_rE7GyIgUMR-SaQ3xk',
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' //默认值
      },
      success: function (data) {
        console.log(data)
        if (data.data.errcode == '0') {
          var contentHtml = JSON.parse(data.data.data).mainHtml
          that.setData({
            content: unescape(contentHtml)
          })
          WxParse.wxParse('content', 'html', that.data.content, that, 5);
        } else {
          var cont = data.data.errmsg
          app.alert(cont)
        }

      }
    })
  },*/
  
})
