//index.js
//获取应用实例
import {
  $wuxCountDown
} from '../../dist/index'
const app = getApp()

Page({
  data: {
    current: 1,
    phone: '',
    code: '',
    adopt: true,
    codenum: '',
    codemsgtogle:true,
    topnum:'100%'
  },
  onChangeinput(e) {
    console.log('onChange', e)
    this.setData({
      value: e.detail.value,
    })
    if (this.data.value != '' && this.data.codenum != '') {
      this.setData({
        adopt: false
      })
    } else {
      this.setData({
        adopt: true
      })
    }
  },
  onChangecode(e) {
    console.log('onChange', e)
    this.setData({
      codenum: e.detail.value,
    })
    if (this.data.value != '' && this.data.codenum != '') {
      this.setData({
        adopt: false
      })
    } else {
      this.setData({
        adopt: true
      })
    }
  },
  vcode() {
    if (this.code && this.code.interval) return !1
    this.code = new $wuxCountDown({
      date: +(new Date) + 60000,
      onEnd() {
        this.setData({
          code: '重新获取验证码',
        })
      },
      render(date) {
        const sec = this.leadingZeros(date.sec, 2) + ' 秒 '
        date.sec !== 0 && this.setData({
          code: sec,
        })
      },
    })
  },
  codemsg:function(e){
    console.log(e)
    if (e.currentTarget.dataset.type=='1'){
      this.setData({
        codemsgtogle: false
      })
    }else{
      this.setData({
        codemsgtogle: true
      })
    }
    
  },
  nexthref() {
    var that = this
    if (!this.data.adopt) {
      /*wx.request({
            url: "http://10.50.128.168:8080/face/getBizTokenForcard",
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
          }) */



      wx.navigateTo({
        url: '../autograph/autograph',
        //url: '../success/success'
      })
    }

  }
})