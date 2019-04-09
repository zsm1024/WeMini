Page({
  data: {},
  start:function(){
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
  } 
})