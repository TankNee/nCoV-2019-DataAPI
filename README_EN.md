# nCov-DataCollect

> # A very unfortunate news, my server is unavailable for well-known reasons, so this project was forced to be suspended, and my database was not backed up, so I am going to archive this project. The source code of the project can be used for reference.

[![API Usage](https://img.shields.io/badge/dynamic/json?color=orange&label=API%20Usage&query=%24.usage&url=http%3A%2F%2Fncov.tanknee.cn%2Fapi%2Fusage)](https://tanknee.cn/2020/01/29/ncov)

English README

> Data from [丁香园](http://t.cn/A6vBv3yL)

> This project is based on the nodejs-express framework, using regular expressions to crawl the page information
>
> The data is updated every twenty minutes. Statistics are started at 10 o'clock in the morning on January 29th. Some data were not counted in the previous few days. I will find somewhere else in the later period to add to the database!

## Data visualization view address

[Management background] (http://ncov.tanknee.cn/admin)

> Login username: `demo`
>
> Login password: `demo`
>
> Template source: [lin-xin] (https://github.com/lin-xin/vue-manage-system)

<img src = "https://img.tanknee.cn/blogpicbed/2020/01/20200129bfa81ed0c5c5c.png" />

<img src = "https://img.tanknee.cn/blogpicbed/2020/02/20200202473de5951df0f.png" />

<img src = "https://img.tanknee.cn/blogpicbed/2020/02/20200202e1a9ffd4b217b.png" />

## provides some simple chart statistics

> Click on the second item in the left sidebar

<img src = "https://img.tanknee.cn/blogpicbed/2020/02/20200202ce28af5f63103.png" />

<img src = "https://img.tanknee.cn/blogpicbed/2020/02/20200202c10d18c928b33.png" />

## api interface address

#### Base URL:

> http://ncov.tanknee.cn/api/

### Get the latest data in the background database:

> http://ncov.tanknee.cn/api/

#### Request method:

 `GET`

#### Returns the instance:

> Intercepted only part of the data

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



#### Returns instance parameters:

| Parameter name    | Parameter type | Remarks  |
| ----------------- | -------------- | -------- |
| provinceName      | String         | 省份全名 |
| provinceShortName | String         | 省份短名 |
| cityName          | String         | 城市名称 |
| confirmedCount    | number         | 确诊人数 |
| suspectedCount    | number         | 疑似人数 |
| curedCount        | number         | 治愈人数 |
| deadCount         | number         | 死亡人数 |
| addtime           | number         | 爬取时间 |

### Get real-time data:

> http://ncov.tanknee.cn/api/realtime

#### Request method:

 `GET`

### Get all historical data of the total epidemic data:

> http://ncov.tanknee.cn/api/sum

#### Request method:

`GET`

### Get the latest data for a single province:

> http://ncov.tanknee.cn/api/province

#### Request parameters:

| Parameter name | Parameter type | Remarks                           |
| -------------- | -------------- | --------------------------------- |
| province       | String         | 省份名称                          |
| all            | String         | 是否获取全部历史消息，默认为false |

#### Request method:

 `POST`

#### Returns the instance:

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

#### Return parameters:

| Parameter name    | Parameter type | Remarks  |
| ----------------- | -------------- | -------- |
| provinceName      | String         | 省份全名 |
| provinceShortName | String         | 省份短名 |
| cityName          | String         | 城市名称 |
| confirmedCount    | number         | 确诊人数 |
| suspectedCount    | number         | 疑似人数 |
| curedCount        | number         | 治愈人数 |
| deadCount         | number         | 死亡人数 |
| addtime           | number         | 爬取时间 |

### Get all the information for a single city:

> http://ncov.tanknee.cn/api/city

#### Request parameters:

| Parameter name | Parameter type | Remarks                           |
| -------------- | -------------- | --------------------------------- |
| province       | String         | 省份名称                          |
| all            | String         | 是否获取全部历史消息，默认为false |

#### Request method:

 `POST`

#### Returns the instance:

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

#### Returns instance parameters:

| Parameter name    | Parameter type | Remarks  |
| ----------------- | -------------- | -------- |
| provinceShortName | String         | 省份短名 |
| cityName          | String         | 城市名称 |
| confirmedCount    | number         | 确诊人数 |
| suspectedCount    | number         | 疑似人数 |
| curedCount        | number         | 治愈人数 |
| deadCount         | number         | 死亡人数 |
| addtime           | number         | 爬取时间 |

## How to use 

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

