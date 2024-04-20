# .AnalyticsReportRequestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportRequestsCreateInstance**](AnalyticsReportRequestsApi.md#analyticsReportRequestsCreateInstance) | **POST** /v1/analyticsReportRequests | 
[**analyticsReportRequestsDeleteInstance**](AnalyticsReportRequestsApi.md#analyticsReportRequestsDeleteInstance) | **DELETE** /v1/analyticsReportRequests/{id} | 
[**analyticsReportRequestsGetInstance**](AnalyticsReportRequestsApi.md#analyticsReportRequestsGetInstance) | **GET** /v1/analyticsReportRequests/{id} | 
[**analyticsReportRequestsReportsGetToManyRelated**](AnalyticsReportRequestsApi.md#analyticsReportRequestsReportsGetToManyRelated) | **GET** /v1/analyticsReportRequests/{id}/reports | 


# **analyticsReportRequestsCreateInstance**
> AnalyticsReportRequestResponse analyticsReportRequestsCreateInstance(analyticsReportRequestCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportRequestsApi(configuration);

let body:.AnalyticsReportRequestsApiAnalyticsReportRequestsCreateInstanceRequest = {
  // AnalyticsReportRequestCreateRequest | AnalyticsReportRequest representation
  analyticsReportRequestCreateRequest: {
    data: {
      type: "analyticsReportRequests",
      attributes: {
        accessType: "ONE_TIME_SNAPSHOT",
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.analyticsReportRequestsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyticsReportRequestCreateRequest** | **AnalyticsReportRequestCreateRequest**| AnalyticsReportRequest representation |


### Return type

**AnalyticsReportRequestResponse**

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
**201** | Single AnalyticsReportRequest |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyticsReportRequestsDeleteInstance**
> void analyticsReportRequestsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportRequestsApi(configuration);

let body:.AnalyticsReportRequestsApiAnalyticsReportRequestsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.analyticsReportRequestsDeleteInstance(body).then((data:any) => {
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

# **analyticsReportRequestsGetInstance**
> AnalyticsReportRequestResponse analyticsReportRequestsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportRequestsApi(configuration);

let body:.AnalyticsReportRequestsApiAnalyticsReportRequestsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'> | the fields to include for returned resources of type analyticsReportRequests (optional)
  fieldsAnalyticsReportRequests: [
    "accessType",
  ],
  // Array<'reports'> | comma-separated list of relationships to include (optional)
  include: [
    "reports",
  ],
  // Array<'category' | 'instances' | 'name'> | the fields to include for returned resources of type analyticsReports (optional)
  fieldsAnalyticsReports: [
    "category",
  ],
  // number | maximum number of related reports returned (when they are included) (optional)
  limitReports: 1,
};

apiInstance.analyticsReportRequestsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAnalyticsReportRequests** | **Array<&#39;accessType&#39; &#124; &#39;app&#39; &#124; &#39;reports&#39; &#124; &#39;stoppedDueToInactivity&#39;>** | the fields to include for returned resources of type analyticsReportRequests | (optional) defaults to undefined
 **include** | **Array<&#39;reports&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAnalyticsReports** | **Array<&#39;category&#39; &#124; &#39;instances&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type analyticsReports | (optional) defaults to undefined
 **limitReports** | [**number**] | maximum number of related reports returned (when they are included) | (optional) defaults to undefined


### Return type

**AnalyticsReportRequestResponse**

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
**200** | Single AnalyticsReportRequest |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyticsReportRequestsReportsGetToManyRelated**
> AnalyticsReportsResponse analyticsReportRequestsReportsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportRequestsApi(configuration);

let body:.AnalyticsReportRequestsApiAnalyticsReportRequestsReportsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'APP_USAGE' | 'APP_STORE_ENGAGEMENT' | 'COMMERCE' | 'FRAMEWORK_USAGE' | 'PERFORMANCE'> | filter by attribute \'category\' (optional)
  filterCategory: [
    "APP_USAGE",
  ],
  // Array<string> | filter by attribute \'name\' (optional)
  filterName: [
    "filter[name]_example",
  ],
  // Array<'category' | 'instances' | 'name'> | the fields to include for returned resources of type analyticsReports (optional)
  fieldsAnalyticsReports: [
    "category",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.analyticsReportRequestsReportsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterCategory** | **Array<&#39;APP_USAGE&#39; &#124; &#39;APP_STORE_ENGAGEMENT&#39; &#124; &#39;COMMERCE&#39; &#124; &#39;FRAMEWORK_USAGE&#39; &#124; &#39;PERFORMANCE&#39;>** | filter by attribute \&#39;category\&#39; | (optional) defaults to undefined
 **filterName** | **Array&lt;string&gt;** | filter by attribute \&#39;name\&#39; | (optional) defaults to undefined
 **fieldsAnalyticsReports** | **Array<&#39;category&#39; &#124; &#39;instances&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type analyticsReports | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AnalyticsReportsResponse**

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
**200** | List of AnalyticsReports |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


