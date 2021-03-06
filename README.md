# nCov-DataCollect

>  感谢阿里云送了我半年的服务器，我也就把这个接口重新开起来了，域名已更换，暂时不开https。朋友们可以接着用了！

[![API Usage](https://img.shields.io/badge/dynamic/json?color=orange&label=API%20Usage&query=%24.usage&url=http%3A%2F%2Fncov.tanknee.cn%2Fapi%2Fusage)](https://tanknee.cn/2020/01/29/ncov)

[English README](./README_EN.md)


> 数据来自[丁香园](http://t.cn/A6vBv3yL)

>  本项目基于nodejs-express框架构建，使用正则表达式爬取页面信息
>
> 数据每二十分钟更新一次，从1月29号早上十点钟开始统计数据，前几日有部分数据没有统计到，后期有时间我会去别的地方找出来加入到数据库中的！

## 数据可视化查看地址

[管理后台](http://ncov.tanknee.cn/admin)

> 登录用户名 ： `demo`
>
> 登录密码：`demo`
>
> 模板来源：[lin-xin](https://github.com/lin-xin/vue-manage-system)

<img src="https://img.tanknee.cn/blogpicbed/2020/01/20200129bfa81ed0c5c5c.png"/>

<img src="https://img.tanknee.cn/blogpicbed/2020/02/20200202473de5951df0f.png"/>

<img src="https://img.tanknee.cn/blogpicbed/2020/02/20200202e1a9ffd4b217b.png"/>

## 提供了一些简单的图表统计

> 点击左侧边栏的第二项即可

<img src="https://img.tanknee.cn/blogpicbed/2020/02/20200202ce28af5f63103.png"/>

<img src="https://img.tanknee.cn/blogpicbed/2020/02/20200202c10d18c928b33.png"/>

## api接口地址

#### 基础URL：

> http://ncov.tanknee.cn/api/

### 获取后台数据库中的最新数据：

> http://ncov.tanknee.cn/api/

#### 请求方法：

 `GET`

#### 返回实例:

> 只截取了部分数据

```json
"sumInfo": {
        "id": 1559,
        "confirmedCount": 7830,
        "curedCount": 135,
        "deadCount": 170,
        "suspectedCount": 12139,
        "addtime": 1580387755098
    },
    "provinceInfo": [
        {
            "id": 19270,
            "provinceName": "湖北省",
            "provinceShortName": "湖北",
            "confirmedCount": 4586,
            "suspectedCount": 0,
            "curedCount": 90,
            "deadCount": 162,
            "addtime": 1580387755098,
            "cities": [
                {
                    "id": 176949,
                    "cityName": "武汉",
                    "provinceShortName": "湖北",
                    "confirmedCount": 2261,
                    "suspectedCount": 0,
                    "curedCount": 54,
                    "deadCount": 129,
                    "addtime": 1580387755098
                },....
```

#### 返回实例参数：

| 参数名称          | 参数类型 | 备注     |
| ----------------- | -------- | -------- |
| provinceName      | String   | 省份全名 |
| provinceShortName | String   | 省份短名 |
| cityName          | String   | 城市名称 |
| confirmedCount    | number   | 确诊人数 |
| suspectedCount    | number   | 疑似人数 |
| curedCount        | number   | 治愈人数 |
| deadCount         | number   | 死亡人数 |
| addtime           | number   | 爬取时间 |

### 获取实时数据：

> http://ncov.tanknee.cn/api/realtime

#### 请求方法：

 `GET`

### 获取疫情总和数据的全部历史数据：

> http://ncov.tanknee.cn/api/sum

#### 请求方法：

`GET`

### 获取单一省份的最新数据：

> http://ncov.tanknee.cn/api/province

#### 请求参数：

| 参数名称 | 参数类型 | 备注                              |
| -------- | -------- | --------------------------------- |
| province | String   | 省份名称                          |
| all      | String   | 是否获取全部历史消息，默认为false |

#### 请求方法：

 `POST`

#### 返回实例：

```json
{
    "provinceInfo": [
        {
            "id": 5944,
            "provinceName": "浙江省",
            "provinceShortName": "浙江",
            "confirmedCount": 173,
            "suspectedCount": 0,
            "curedCount": 3,
            "deadCount": 0,
            "addtime": 1580224800003
        }
    ],
    "citiesOfProvince": [
        {
            "id": 47028,
            "cityName": "温州",
            "provinceShortName": "浙江",
            "confirmedCount": 60,
            "suspectedCount": 0,
            "curedCount": 3,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47029,
            "cityName": "杭州",
            "provinceShortName": "浙江",
            "confirmedCount": 32,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47030,
            "cityName": "台州",
            "provinceShortName": "浙江",
            "confirmedCount": 22,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47031,
            "cityName": "宁波",
            "provinceShortName": "浙江",
            "confirmedCount": 17,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47032,
            "cityName": "嘉兴",
            "provinceShortName": "浙江",
            "confirmedCount": 11,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47033,
            "cityName": "绍兴",
            "provinceShortName": "浙江",
            "confirmedCount": 7,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47034,
            "cityName": "金华",
            "provinceShortName": "浙江",
            "confirmedCount": 7,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47035,
            "cityName": "衢州",
            "provinceShortName": "浙江",
            "confirmedCount": 5,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47036,
            "cityName": "丽水",
            "provinceShortName": "浙江",
            "confirmedCount": 5,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47037,
            "cityName": "舟山",
            "provinceShortName": "浙江",
            "confirmedCount": 4,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        },
        {
            "id": 47038,
            "cityName": "湖州",
            "provinceShortName": "浙江",
            "confirmedCount": 3,
            "suspectedCount": 0,
            "curedCount": 0,
            "deadCount": 0,
            "addtime": 1580224800003
        }
    ]
}
```

#### 返回实例参数：

| 参数名称          | 参数类型      | 备注     |
| ----------------- | ------------- | -------- |
| provinceName      | String        | 省份全名 |
| provinceShortName | String        | 省份短名 |
| cityName          | String        | 城市名称 |
| confirmedCount    | number        | 确诊人数 |
| suspectedCount    | number        | 疑似人数 |
| curedCount        | number        | 治愈人数 |
| deadCount         | number        | 死亡人数 |
| addtime           | number        | 爬取时间 |



### 获取单一城市的全部信息：

> http://ncov.tanknee.cn/api/city

#### 请求参数：

| 参数名称 | 参数类型 | 备注                              |
| -------- | -------- | --------------------------------- |
| cityname | String   | 城市名称                          |
| all      | String   | 是否获取全部历史消息，默认为false |

#### 请求方法：

 `POST`

#### 返回实例：

```json
[
    {
        "id": 46994,
        "cityName": "武汉",
        "provinceShortName": "湖北",
        "confirmedCount": 1590,
        "suspectedCount": 0,
        "curedCount": 47,
        "deadCount": 85,
        "addtime": 1580224800003
    }
]
```

#### 返回实例参数：

| 参数名称          | 参数类型      | 备注     |
| ----------------- | ------------- | -------- |
| provinceShortName | String        | 省份短名 |
| cityName          | String        | 城市名称 |
| confirmedCount    | number        | 确诊人数 |
| suspectedCount    | number        | 疑似人数 |
| curedCount        | number        | 治愈人数 |
| deadCount         | number        | 死亡人数 |
| addtime           | number        | 爬取时间 |

## 项目使用方法

```bash
## git clone from github
git clone git@github.com:TankNee/nCoV-2019-DataAPI.git

## cd file folder
cd nCoV-2019-DataAPI

## install dependencies
npm install 

## start the server 
npm run start

## open in browser
## open http://localhost:6879/ in browser
```

