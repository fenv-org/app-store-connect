# .MetricsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsBetaTesterUsagesGetMetrics**](MetricsApi.md#appsBetaTesterUsagesGetMetrics) | **GET** /v1/apps/{id}/metrics/betaTesterUsages | 
[**betaGroupsBetaTesterUsagesGetMetrics**](MetricsApi.md#betaGroupsBetaTesterUsagesGetMetrics) | **GET** /v1/betaGroups/{id}/metrics/betaTesterUsages | 
[**betaTestersBetaTesterUsagesGetMetrics**](MetricsApi.md#betaTestersBetaTesterUsagesGetMetrics) | **GET** /v1/betaTesters/{id}/metrics/betaTesterUsages | 
[**buildsBetaBuildUsagesGetMetrics**](MetricsApi.md#buildsBetaBuildUsagesGetMetrics) | **GET** /v1/builds/{id}/metrics/betaBuildUsages | 
[**gameCenterDetailsClassicMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterDetailsClassicMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterDetails/{id}/metrics/classicMatchmakingRequests | 
[**gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterDetails/{id}/metrics/ruleBasedMatchmakingRequests | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests | 
[**gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingRequests | 
[**gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions | 
[**gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics**](MetricsApi.md#gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics**](MetricsApi.md#gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics**](MetricsApi.md#gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingRuleErrors | 


# **appsBetaTesterUsagesGetMetrics**
> AppsBetaTesterUsagesV1MetricResponse appsBetaTesterUsagesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiAppsBetaTesterUsagesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'betaTesters'> | the dimension by which to group the results (optional)
  groupBy: [
    "betaTesters",
  ],
  // string | filter by \'betaTesters\' relationship dimension (optional)
  filterBetaTesters: "filter[betaTesters]_example",
  // 'P7D' | 'P30D' | 'P90D' | 'P365D' | the duration of the reporting period (optional)
  period: "P7D",
};

apiInstance.appsBetaTesterUsagesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;betaTesters&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterBetaTesters** | [**string**] | filter by \&#39;betaTesters\&#39; relationship dimension | (optional) defaults to undefined
 **period** | [**&#39;P7D&#39; | &#39;P30D&#39; | &#39;P90D&#39; | &#39;P365D&#39;**]**Array<&#39;P7D&#39; &#124; &#39;P30D&#39; &#124; &#39;P90D&#39; &#124; &#39;P365D&#39;>** | the duration of the reporting period | (optional) defaults to undefined


### Return type

**AppsBetaTesterUsagesV1MetricResponse**

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

# **betaGroupsBetaTesterUsagesGetMetrics**
> AppsBetaTesterUsagesV1MetricResponse betaGroupsBetaTesterUsagesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiBetaGroupsBetaTesterUsagesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'betaTesters'> | the dimension by which to group the results (optional)
  groupBy: [
    "betaTesters",
  ],
  // string | filter by \'betaTesters\' relationship dimension (optional)
  filterBetaTesters: "filter[betaTesters]_example",
  // 'P7D' | 'P30D' | 'P90D' | 'P365D' | the duration of the reporting period (optional)
  period: "P7D",
};

apiInstance.betaGroupsBetaTesterUsagesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;betaTesters&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterBetaTesters** | [**string**] | filter by \&#39;betaTesters\&#39; relationship dimension | (optional) defaults to undefined
 **period** | [**&#39;P7D&#39; | &#39;P30D&#39; | &#39;P90D&#39; | &#39;P365D&#39;**]**Array<&#39;P7D&#39; &#124; &#39;P30D&#39; &#124; &#39;P90D&#39; &#124; &#39;P365D&#39;>** | the duration of the reporting period | (optional) defaults to undefined


### Return type

**AppsBetaTesterUsagesV1MetricResponse**

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

# **betaTestersBetaTesterUsagesGetMetrics**
> BetaTesterUsagesV1MetricResponse betaTestersBetaTesterUsagesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiBetaTestersBetaTesterUsagesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // string | filter by \'apps\' relationship dimension
  filterApps: "filter[apps]_example",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // 'P7D' | 'P30D' | 'P90D' | 'P365D' | the duration of the reporting period (optional)
  period: "P7D",
};

apiInstance.betaTestersBetaTesterUsagesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterApps** | [**string**] | filter by \&#39;apps\&#39; relationship dimension | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **period** | [**&#39;P7D&#39; | &#39;P30D&#39; | &#39;P90D&#39; | &#39;P365D&#39;**]**Array<&#39;P7D&#39; &#124; &#39;P30D&#39; &#124; &#39;P90D&#39; &#124; &#39;P365D&#39;>** | the duration of the reporting period | (optional) defaults to undefined


### Return type

**BetaTesterUsagesV1MetricResponse**

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

# **buildsBetaBuildUsagesGetMetrics**
> BetaBuildUsagesV1MetricResponse buildsBetaBuildUsagesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiBuildsBetaBuildUsagesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
};

apiInstance.buildsBetaBuildUsagesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined


### Return type

**BetaBuildUsagesV1MetricResponse**

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

# **gameCenterDetailsClassicMatchmakingRequestsGetMetrics**
> GameCenterMatchmakingAppRequestsV1MetricResponse gameCenterDetailsClassicMatchmakingRequestsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterDetailsClassicMatchmakingRequestsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "result",
  ],
  // 'MATCHED' | 'CANCELED' | 'EXPIRED' | filter by \'result\' attribute dimension (optional)
  filterResult: "MATCHED",
  // Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageSecondsInQueue",
  ],
};

apiInstance.gameCenterDetailsClassicMatchmakingRequestsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**&#39;MATCHED&#39; | &#39;CANCELED&#39; | &#39;EXPIRED&#39;**]**Array<&#39;MATCHED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;EXPIRED&#39;>** | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageSecondsInQueue&#39; &#124; &#39;-averageSecondsInQueue&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50SecondsInQueue&#39; &#124; &#39;-p50SecondsInQueue&#39; &#124; &#39;p95SecondsInQueue&#39; &#124; &#39;-p95SecondsInQueue&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingAppRequestsV1MetricResponse**

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

# **gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics**
> GameCenterMatchmakingAppRequestsV1MetricResponse gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterDetailsRuleBasedMatchmakingRequestsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "result",
  ],
  // 'MATCHED' | 'CANCELED' | 'EXPIRED' | filter by \'result\' attribute dimension (optional)
  filterResult: "MATCHED",
  // Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageSecondsInQueue",
  ],
};

apiInstance.gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**&#39;MATCHED&#39; | &#39;CANCELED&#39; | &#39;EXPIRED&#39;**]**Array<&#39;MATCHED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;EXPIRED&#39;>** | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageSecondsInQueue&#39; &#124; &#39;-averageSecondsInQueue&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50SecondsInQueue&#39; &#124; &#39;-p50SecondsInQueue&#39; &#124; &#39;p95SecondsInQueue&#39; &#124; &#39;-p95SecondsInQueue&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingAppRequestsV1MetricResponse**

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

# **gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics**
> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest = {
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
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest = {
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

# **gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics**
> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest = {
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
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest = {
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
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest = {
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

# **gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics**
> GameCenterMatchmakingBooleanRuleResultsV1MetricResponse gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRequest = {
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
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRequest = {
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
const apiInstance = new .MetricsApi(configuration);

let body:.MetricsApiGameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRequest = {
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


