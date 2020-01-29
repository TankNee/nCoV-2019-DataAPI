# nCov-DataCollect

> 数据来自[丁香园](http://t.cn/A6vBv3yL)

本项目基于nodejs-express框架构建，使用正则表达式爬取页面信息

## api接口地址

#### 基础URL：

> http://ncov.neeto.cn/api/

### 获取后台数据库中的最新数据：

> http://ncov.neeto.cn/api/

#### 请求方法：

 `POST`

### 获取实时数据：

> http://ncov.neeto.cn/api/realtime

#### 请求方法：

 `POST`

### 获取单一省份的最新数据：

> http://ncov.neeto.cn/api/province

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

> http://ncov.neeto.cn/api/city

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