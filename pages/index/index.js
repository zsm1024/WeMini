//index.js
//获取应用实例
import { $wuxCalendar } from '../../dist/index'
const app = getApp()

Page({
  data: {
    current: 0,
    fileList: [],
    borsdatime: '',
    validitytime:'',
    avatar:'../../images/idImg.png',
    name:''
  },  
  changeAvatar: function (e) {
    var _this = this
    wx.chooseImage({
      count: 1,// 默认9
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //这里是上传操作
        app.showLoading('上传中...',1)
        setTimeout(function(){
          app.showLoading('上传中...',0)
        },2000)
        wx.uploadFile({
          url:'http://10.50.128.168:8080/gwm-web-wechat/uploadRepaymentCredence', //里面填写你的上传图片服务器API接口的路径 
          filePath: tempFilePaths[0],//要上传文件资源的路径 String类型 
          name: 'avatar',//按个人情况修改，文件对应的 key,开发者在服务器端通过这个 key 可以获取到文件二进制内容，(后台接口规定的关于图片的请求参数)
          header: {
            "Content-Type": "multipart/form-data"//记得设置
          },
          formData: {
            //和服务器约定的token, 一般也可以放在header中
            'session_token': '245212123'
          },
          success: function (res) {
            //当调用uploadFile成功之后，再次调用后台修改的操作，这样才真正做了修改头像
            if (res.statusCode = 200) {
              var data = res.data
              var statusCode = res.statusCode
              console.log("返回值1" + data);
               console.log("返回值2" + statusCode)
              //这里调用后台的修改操作， tempFilePaths[0],是上面uploadFile上传成功，然后赋值到修改这里。
              /*wx.request({
                url: getApp().globalData.clientUrl + '/update?avatar=' + tempFilePaths[0], //真正修改操作,填写你们修改的API
                header: {
                  'content-type': 'application/json',
                },
                method: 'POST',
                success: function (res) {
                  if (res.data.code == 200) {
                    wx.showToast({
                      title: '修改成功',
                      icon: 'success',
                      duration: 2500
                    })

                    //wx.uploadFile自已有一个this，我们刚才上面定义的var _this = this 把this带进来
                    _this.setData({
                      "user.avatar": tempFilePaths[0]
                    });
                  }
                },
              })*/
            }
          }
        })
      }
    })
  },
  openCalendar(e) {
    const name = e.currentTarget.dataset.name
    var _this = this
    if (name == 'borsdatime') {
      var conten = _this.data.borsdatime
    }else{
      var conten = _this.data.validitytime
    }
    $wuxCalendar().open({
      value:conten,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        if (name == 'borsdatime'){
          _this.setData({
            borsdatime: displayValues.join(""),
          })
        }else{
          _this.setData({
            validitytime: displayValues.join(""),
          })
        }       
        console.log(this.data.borsdatime)
        console.log(this.data.validitytime)
      },
    })
  },
  nexthref(){
    wx.navigateTo({
      url: '../agreement/agreement?json='+'1',
      //url:'../verificationCode/verificationCode'
    })
  }
})
