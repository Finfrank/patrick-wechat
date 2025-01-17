const app = getApp()
const db = wx.cloud.database();
const config = require("../../config.js");
const _ = db.command;
Page({

      /**
       * 页面的初始数据
       */
      data: {
            count: 3,
            bgurl:[]
      },
      onLoad(){
            this.getimg();
            this.countDown();
      },
      go() {
            wx.switchTab({
                  url: '/pages/index/index',
            })
      },
      countDown: function() {
            let that = this;
             let total = 3;
            this.interval = setInterval(function() {
                  total > 0 && (total--, that.setData({
                        count: total
                  })), 0 === total && (that.setData({
                        count: total
                  }), wx.switchTab({
                        url: "/pages/index/index"
                  }), clearInterval(that.interval));
            }, 1e3);
      },
      //为了数据安全可靠，每次进入获取一次用户信息
      //获取背景图
      getimg() {
            let that = this;
            db.collection('start').where({}).get({
                  success: function (res) {
                        console.log(res)
                        that.setData({
                            bgurl: res.data[0].url
                        })
                  },
                  fail(){
                        that.setData({
                            bgurl: JSON.parse(config.data).bgurl,
                        })
                  }
            })
      },
})
