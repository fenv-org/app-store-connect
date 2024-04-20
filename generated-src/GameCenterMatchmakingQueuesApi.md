# .GameCenterMatchmakingQueuesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingQueuesCreateInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesCreateInstance) | **POST** /v1/gameCenterMatchmakingQueues | 
[**gameCenterMatchmakingQueuesDeleteInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingQueues/{id} | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests | 
[**gameCenterMatchmakingQueuesGetCollection**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesGetCollection) | **GET** /v1/gameCenterMatchmakingQueues | 
[**gameCenterMatchmakingQueuesGetInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesGetInstance) | **GET** /v1/gameCenterMatchmakingQueues/{id} | 
[**gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingRequests | 
[**gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions | 
[**gameCenterMatchmakingQueuesUpdateInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingQueues/{id} | 


# **gameCenterMatchmakingQueuesCreateInstance**
> GameCenterMatchmakingQueueResponse gameCenterMatchmakingQueuesCreateInstance(gameCenterMatchmakingQueueCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesCreateInstanceRequest = {
  // GameCenterMatchmakingQueueCreateRequest | GameCenterMatchmakingQueue representation
  gameCenterMatchmakingQueueCreateRequest: {
    data: {
      type: "gameCenterMatchmakingQueues",
      attributes: {
        referenceName: "referenceName_example",
        classicMatchmakingBundleIds: [
          "classicMatchmakingBundleIds_example",
        ],
      },
      relationships: {
        ruleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
        experimentRuleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterMatchmakingQueuesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingQueueCreateRequest** | **GameCenterMatchmakingQueueCreateRequest**| GameCenterMatchmakingQueue representation |


### Return type

**GameCenterMatchmakingQueueResponse**

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
**201** | Single GameCenterMatchmakingQueue |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingQueuesDeleteInstance**
> void gameCenterMatchmakingQueuesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterMatchmakingQueuesDeleteInstance(body).then((data:any) => {
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

# **gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics**
> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'averageNumberOfRequests' | '-averageNumberOfRequests' | 'count' | '-count' | 'p50NumberOfRequests' | '-p50NumberOfRequests' | 'p95NumberOfRequests' | '-p95NumberOfRequests'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageNumberOfRequests",
  ],
};

apiInstance.gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **sort** | **Array<&#39;averageNumberOfRequests&#39; &#124; &#39;-averageNumberOfRequests&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50NumberOfRequests&#39; &#124; &#39;-p50NumberOfRequests&#39; &#124; &#39;p95NumberOfRequests&#39; &#124; &#39;-p95NumberOfRequests&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueueSizesV1MetricResponse**

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

# **gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics**
> GameCenterMatchmakingQueueRequestsV1MetricResponse gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'gameCenterDetail' | 'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "gameCenterDetail",
  ],
  // 'MATCHED' | 'CANCELED' | 'EXPIRED' | filter by \'result\' attribute dimension (optional)
  filterResult: "MATCHED",
  // string | filter by \'gameCenterDetail\' relationship dimension (optional)
  filterGameCenterDetail: "filter[gameCenterDetail]_example",
  // Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageSecondsInQueue",
  ],
};

apiInstance.gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**&#39;MATCHED&#39; | &#39;CANCELED&#39; | &#39;EXPIRED&#39;**]**Array<&#39;MATCHED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;EXPIRED&#39;>** | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **filterGameCenterDetail** | [**string**] | filter by \&#39;gameCenterDetail\&#39; relationship dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageSecondsInQueue&#39; &#124; &#39;-averageSecondsInQueue&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50SecondsInQueue&#39; &#124; &#39;-p50SecondsInQueue&#39; &#124; &#39;p95SecondsInQueue&#39; &#124; &#39;-p95SecondsInQueue&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueueRequestsV1MetricResponse**

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

# **gameCenterMatchmakingQueuesGetCollection**
> GameCenterMatchmakingQueuesResponse gameCenterMatchmakingQueuesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesGetCollectionRequest = {
  // Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingQueues (optional)
  fieldsGameCenterMatchmakingQueues: [
    "classicMatchmakingBundleIds",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'experimentRuleSet' | 'ruleSet'> | comma-separated list of relationships to include (optional)
  include: [
    "experimentRuleSet",
  ],
};

apiInstance.gameCenterMatchmakingQueuesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsGameCenterMatchmakingQueues** | **Array<&#39;classicMatchmakingBundleIds&#39; &#124; &#39;experimentRuleSet&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingQueues | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;experimentRuleSet&#39; &#124; &#39;ruleSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueuesResponse**

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
**200** | List of GameCenterMatchmakingQueues |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingQueuesGetInstance**
> GameCenterMatchmakingQueueResponse gameCenterMatchmakingQueuesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingQueues (optional)
  fieldsGameCenterMatchmakingQueues: [
    "classicMatchmakingBundleIds",
  ],
  // Array<'experimentRuleSet' | 'ruleSet'> | comma-separated list of relationships to include (optional)
  include: [
    "experimentRuleSet",
  ],
};

apiInstance.gameCenterMatchmakingQueuesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterMatchmakingQueues** | **Array<&#39;classicMatchmakingBundleIds&#39; &#124; &#39;experimentRuleSet&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingQueues | (optional) defaults to undefined
 **include** | **Array<&#39;experimentRuleSet&#39; &#124; &#39;ruleSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueueResponse**

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
**200** | Single GameCenterMatchmakingQueue |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics**
> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'averageNumberOfRequests' | '-averageNumberOfRequests' | 'count' | '-count' | 'p50NumberOfRequests' | '-p50NumberOfRequests' | 'p95NumberOfRequests' | '-p95NumberOfRequests'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageNumberOfRequests",
  ],
};

apiInstance.gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **sort** | **Array<&#39;averageNumberOfRequests&#39; &#124; &#39;-averageNumberOfRequests&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50NumberOfRequests&#39; &#124; &#39;-p50NumberOfRequests&#39; &#124; &#39;p95NumberOfRequests&#39; &#124; &#39;-p95NumberOfRequests&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueueSizesV1MetricResponse**

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

# **gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics**
> GameCenterMatchmakingQueueRequestsV1MetricResponse gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'gameCenterDetail' | 'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "gameCenterDetail",
  ],
  // 'MATCHED' | 'CANCELED' | 'EXPIRED' | filter by \'result\' attribute dimension (optional)
  filterResult: "MATCHED",
  // string | filter by \'gameCenterDetail\' relationship dimension (optional)
  filterGameCenterDetail: "filter[gameCenterDetail]_example",
  // Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageSecondsInQueue",
  ],
};

apiInstance.gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**&#39;MATCHED&#39; | &#39;CANCELED&#39; | &#39;EXPIRED&#39;**]**Array<&#39;MATCHED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;EXPIRED&#39;>** | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **filterGameCenterDetail** | [**string**] | filter by \&#39;gameCenterDetail\&#39; relationship dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageSecondsInQueue&#39; &#124; &#39;-averageSecondsInQueue&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50SecondsInQueue&#39; &#124; &#39;-p50SecondsInQueue&#39; &#124; &#39;p95SecondsInQueue&#39; &#124; &#39;-p95SecondsInQueue&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueueRequestsV1MetricResponse**

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

# **gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics**
> GameCenterMatchmakingSessionsV1MetricResponse gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'averagePlayerCount' | '-averagePlayerCount' | 'count' | '-count' | 'p50PlayerCount' | '-p50PlayerCount' | 'p95PlayerCount' | '-p95PlayerCount'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averagePlayerCount",
  ],
};

apiInstance.gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **sort** | **Array<&#39;averagePlayerCount&#39; &#124; &#39;-averagePlayerCount&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50PlayerCount&#39; &#124; &#39;-p50PlayerCount&#39; &#124; &#39;p95PlayerCount&#39; &#124; &#39;-p95PlayerCount&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingSessionsV1MetricResponse**

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

# **gameCenterMatchmakingQueuesUpdateInstance**
> GameCenterMatchmakingQueueResponse gameCenterMatchmakingQueuesUpdateInstance(gameCenterMatchmakingQueueUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingQueuesApi(configuration);

let body:.GameCenterMatchmakingQueuesApiGameCenterMatchmakingQueuesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterMatchmakingQueueUpdateRequest | GameCenterMatchmakingQueue representation
  gameCenterMatchmakingQueueUpdateRequest: {
    data: {
      type: "gameCenterMatchmakingQueues",
      id: "id_example",
      attributes: {
        classicMatchmakingBundleIds: [
          "classicMatchmakingBundleIds_example",
        ],
      },
      relationships: {
        ruleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
        experimentRuleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterMatchmakingQueuesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingQueueUpdateRequest** | **GameCenterMatchmakingQueueUpdateRequest**| GameCenterMatchmakingQueue representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterMatchmakingQueueResponse**

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
**200** | Single GameCenterMatchmakingQueue |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


