# .GameCenterMatchmakingRulesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingRulesCreateInstance**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesCreateInstance) | **POST** /v1/gameCenterMatchmakingRules | 
[**gameCenterMatchmakingRulesDeleteInstance**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingRules/{id} | 
[**gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingRuleErrors | 
[**gameCenterMatchmakingRulesUpdateInstance**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingRules/{id} | 


# **gameCenterMatchmakingRulesCreateInstance**
> GameCenterMatchmakingRuleResponse gameCenterMatchmakingRulesCreateInstance(gameCenterMatchmakingRuleCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRulesApi(configuration);

let body:.GameCenterMatchmakingRulesApiGameCenterMatchmakingRulesCreateInstanceRequest = {
  // GameCenterMatchmakingRuleCreateRequest | GameCenterMatchmakingRule representation
  gameCenterMatchmakingRuleCreateRequest: {
    data: {
      type: "gameCenterMatchmakingRules",
      attributes: {
        referenceName: "referenceName_example",
        description: "description_example",
        type: "COMPATIBLE",
        expression: "expression_example",
        weight: 3.14,
      },
      relationships: {
        ruleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterMatchmakingRulesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingRuleCreateRequest** | **GameCenterMatchmakingRuleCreateRequest**| GameCenterMatchmakingRule representation |


### Return type

**GameCenterMatchmakingRuleResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**201** | Single GameCenterMatchmakingRule |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRulesDeleteInstance**
> void gameCenterMatchmakingRulesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRulesApi(configuration);

let body:.GameCenterMatchmakingRulesApiGameCenterMatchmakingRulesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterMatchmakingRulesDeleteInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics**
> GameCenterMatchmakingBooleanRuleResultsV1MetricResponse gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRulesApi(configuration);

let body:.GameCenterMatchmakingRulesApiGameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'gameCenterMatchmakingQueue' | 'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "gameCenterMatchmakingQueue",
  ],
  // string | filter by \'result\' attribute dimension (optional)
  filterResult: "filter[result]_example",
  // string | filter by \'gameCenterMatchmakingQueue\' relationship dimension (optional)
  filterGameCenterMatchmakingQueue: "filter[gameCenterMatchmakingQueue]_example",
  // Array<'count' | '-count'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "count",
  ],
};

apiInstance.gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;gameCenterMatchmakingQueue&#39; &#124; &#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**string**] | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **filterGameCenterMatchmakingQueue** | [**string**] | filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;count&#39; &#124; &#39;-count&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingBooleanRuleResultsV1MetricResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Metrics data response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics**
> GameCenterMatchmakingNumberRuleResultsV1MetricResponse gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRulesApi(configuration);

let body:.GameCenterMatchmakingRulesApiGameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'gameCenterMatchmakingQueue'> | the dimension by which to group the results (optional)
  groupBy: [
    "gameCenterMatchmakingQueue",
  ],
  // string | filter by \'gameCenterMatchmakingQueue\' relationship dimension (optional)
  filterGameCenterMatchmakingQueue: "filter[gameCenterMatchmakingQueue]_example",
  // Array<'averageResult' | '-averageResult' | 'count' | '-count' | 'p50Result' | '-p50Result' | 'p95Result' | '-p95Result'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageResult",
  ],
};

apiInstance.gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;gameCenterMatchmakingQueue&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterGameCenterMatchmakingQueue** | [**string**] | filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageResult&#39; &#124; &#39;-averageResult&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50Result&#39; &#124; &#39;-p50Result&#39; &#124; &#39;p95Result&#39; &#124; &#39;-p95Result&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingNumberRuleResultsV1MetricResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Metrics data response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics**
> GameCenterMatchmakingRuleErrorsV1MetricResponse gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRulesApi(configuration);

let body:.GameCenterMatchmakingRulesApiGameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'gameCenterMatchmakingQueue'> | the dimension by which to group the results (optional)
  groupBy: [
    "gameCenterMatchmakingQueue",
  ],
  // string | filter by \'gameCenterMatchmakingQueue\' relationship dimension (optional)
  filterGameCenterMatchmakingQueue: "filter[gameCenterMatchmakingQueue]_example",
  // Array<'count' | '-count'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "count",
  ],
};

apiInstance.gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;gameCenterMatchmakingQueue&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterGameCenterMatchmakingQueue** | [**string**] | filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;count&#39; &#124; &#39;-count&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingRuleErrorsV1MetricResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Metrics data response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRulesUpdateInstance**
> GameCenterMatchmakingRuleResponse gameCenterMatchmakingRulesUpdateInstance(gameCenterMatchmakingRuleUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRulesApi(configuration);

let body:.GameCenterMatchmakingRulesApiGameCenterMatchmakingRulesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterMatchmakingRuleUpdateRequest | GameCenterMatchmakingRule representation
  gameCenterMatchmakingRuleUpdateRequest: {
    data: {
      type: "gameCenterMatchmakingRules",
      id: "id_example",
      attributes: {
        description: "description_example",
        expression: "expression_example",
        weight: 3.14,
      },
    },
  },
};

apiInstance.gameCenterMatchmakingRulesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingRuleUpdateRequest** | **GameCenterMatchmakingRuleUpdateRequest**| GameCenterMatchmakingRule representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterMatchmakingRuleResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Single GameCenterMatchmakingRule |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


