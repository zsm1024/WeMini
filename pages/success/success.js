//index.js
//获取应用实例
import {
  $wuxCountDown
} from '../../dist/index'
const app = getApp()

Page({
  data: {
    current: 4,
  },
  nexthref() {
    wx.navigateTo({
      //url: '../autograph/autograph',
      url: '../viewState/viewState'
    })
  }
})