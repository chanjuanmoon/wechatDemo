// miniprogram/pages/test/test.js

Component({
  properties:{

  },
  /**
   * 页面的初始数据
   */
  data:{
    sum:null,
    inputValue:''
  },
  methods:{
    add(){
      wx.cloud.callFunction({
        name:'add',
        data:{
          a:1,
          b:2
        },
        success:res=>{
          this.setData({
            sum:res.result.sum
          })
        },
        fail:console.error
      })
    },
    sumbitFunc:function(e){
      console.log(this.data.inputValue);
    },
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.add();
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
})
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     sum:null,
//     text:''
//   },

//   sumbitFunc:function(e){
//     console.log(this);
//     console.log(this.text);
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
    
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })