# .AnalyticsReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportsGetInstance**](AnalyticsReportsApi.md#analyticsReportsGetInstance) | **GET** /v1/analyticsReports/{id} | 
[**analyticsReportsInstancesGetToManyRelated**](AnalyticsReportsApi.md#analyticsReportsInstancesGetToManyRelated) | **GET** /v1/analyticsReports/{id}/instances | 


# **analyticsReportsGetInstance**
> AnalyticsReportResponse analyticsReportsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportsApi(configuration);

let body:.AnalyticsReportsApiAnalyticsReportsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'category' | 'instances' | 'name'> | the fields to include for returned resources of type analyticsReports (optional)
  fieldsAnalyticsReports: [
    "category",
  ],
  // Array<'granularity' | 'processingDate' | 'segments'> | the fields to include for returned resources of type analyticsReportInstances (optional)
  fieldsAnalyticsReportInstances: [
    "granularity",
  ],
};

apiInstance.analyticsReportsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAnalyticsReports** | **Array<&#39;category&#39; &#124; &#39;instances&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type analyticsReports | (optional) defaults to undefined
 **fieldsAnalyticsReportInstances** | **Array<&#39;granularity&#39; &#124; &#39;processingDate&#39; &#124; &#39;segments&#39;>** | the fields to include for returned resources of type analyticsReportInstances | (optional) defaults to undefined


### Return type

**AnalyticsReportResponse**

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
**200** | Single AnalyticsReport |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyticsReportsInstancesGetToManyRelated**
> AnalyticsReportInstancesResponse analyticsReportsInstancesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportsApi(configuration);

let body:.AnalyticsReportsApiAnalyticsReportsInstancesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'DAILY' | 'WEEKLY' | 'MONTHLY'> | filter by attribute \'granularity\' (optional)
  filterGranularity: [
    "DAILY",
  ],
  // Array<string> | filter by attribute \'processingDate\' (optional)
  filterProcessingDate: [
    "filter[processingDate]_example",
  ],
  // Array<'granularity' | 'processingDate' | 'segments'> | the fields to include for returned resources of type analyticsReportInstances (optional)
  fieldsAnalyticsReportInstances: [
    "granularity",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.analyticsReportsInstancesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterGranularity** | **Array<&#39;DAILY&#39; &#124; &#39;WEEKLY&#39; &#124; &#39;MONTHLY&#39;>** | filter by attribute \&#39;granularity\&#39; | (optional) defaults to undefined
 **filterProcessingDate** | **Array&lt;string&gt;** | filter by attribute \&#39;processingDate\&#39; | (optional) defaults to undefined
 **fieldsAnalyticsReportInstances** | **Array<&#39;granularity&#39; &#124; &#39;processingDate&#39; &#124; &#39;segments&#39;>** | the fields to include for returned resources of type analyticsReportInstances | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AnalyticsReportInstancesResponse**

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
**200** | List of AnalyticsReportInstances |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


