(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chart"],{"026e":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-pie-chart"}),t._v(" schart图表\n            ")])],1)],1),s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"schart-box"},[s("div",{staticClass:"schart-box"},[s("div",{staticClass:"content-title"},[t._v("饼状图")]),s("schart",{staticClass:"schart",attrs:{canvasId:"pie",options:t.options3}})],1),s("div",{staticClass:"schart-box"},[s("div",{staticClass:"content-title"},[t._v("饼状图")]),s("schart",{staticClass:"schart",attrs:{canvasId:"pie2",options:t.options4}})],1),s("div",{staticClass:"content-title"},[t._v("柱状图")]),s("schart",{staticClass:"schart",attrs:{canvasId:"bar",options:t.options1}})],1),s("div",{staticClass:"schart-box"},[s("div",{staticClass:"content-title"},[t._v("折线图")]),s("schart",{staticClass:"schart",attrs:{canvasId:"line",options:t.options2}})],1)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"plugins-tips"},[t._v("\n            vue-schart：vue.js封装sChart.js的图表组件。\n            访问地址：\n            "),s("a",{attrs:{href:"https://github.com/lin-xin/vue-schart",target:"_blank"}},[t._v("vue-schart")])])}],n=(s("6d57"),s("a311")),l=s("425e"),o={name:"basecharts",components:{Schart:n["a"]},data:function(){return{options1:{type:"bar",title:{text:"最近一周各品类销售图"},bgColor:"#fbfbfb",labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",fillColor:"rgba(241, 49, 74, 0.5)",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},bgColor:"#fbfbfb",labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[114,138,200,235,190]}]},options3:{type:"pie",title:{text:"各省份患病人数统计图"},legend:{position:"left"},bgColor:"#fbfbfb",labels:["T恤","牛仔裤","连衣裙","毛衣","七分裤","短裙","羽绒服"],datasets:[{data:[334,278,190,235,260,200,141]}]},options4:{type:"pie",title:{text:"各省份患病人数统计图"},legend:{position:"left"},bgColor:"#fbfbfb",labels:["vue","react","angular"],datasets:[{data:[500,500,500]}]}}},created:function(){var t=this;l["a"].fetchGet("/api").then((function(a){var s={labels:[],data:[]},e={labels:[],data:[]};console.log(a),a.provinceInfo.forEach((function(t){s.labels.push(t.provinceShortName),s.data.push(parseInt(t.confirmedCount)),t.cities.forEach((function(t){e.labels.push(t.cityName),e.data.push(parseInt(t.confirmedCount))}))})),t.options3.labels=s.labels,t.options3.datasets[0].data=s.data,t.options4.labels=e.labels,t.options4.datasets[0].data=e.data})).catch((function(t){console.log(t)}))}},c=o,r=(s("b520"),s("5511")),b=Object(r["a"])(c,e,i,!1,null,"48484a3e",null);a["default"]=b.exports},7468:function(t,a,s){},b520:function(t,a,s){"use strict";var e=s("7468"),i=s.n(e);i.a}}]);