# .AnalyticsReportInstancesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportInstancesGetInstance**](AnalyticsReportInstancesApi.md#analyticsReportInstancesGetInstance) | **GET** /v1/analyticsReportInstances/{id} | 
[**analyticsReportInstancesSegmentsGetToManyRelated**](AnalyticsReportInstancesApi.md#analyticsReportInstancesSegmentsGetToManyRelated) | **GET** /v1/analyticsReportInstances/{id}/segments | 


# **analyticsReportInstancesGetInstance**
> AnalyticsReportInstanceResponse analyticsReportInstancesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportInstancesApi(configuration);

let body:.AnalyticsReportInstancesApiAnalyticsReportInstancesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'granularity' | 'processingDate' | 'segments'> | the fields to include for returned resources of type analyticsReportInstances (optional)
  fieldsAnalyticsReportInstances: [
    "granularity",
  ],
  // Array<'checksum' | 'sizeInBytes' | 'url'> | the fields to include for returned resources of type analyticsReportSegments (optional)
  fieldsAnalyticsReportSegments: [
    "checksum",
  ],
};

apiInstance.analyticsReportInstancesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAnalyticsReportInstances** | **Array<&#39;granularity&#39; &#124; &#39;processingDate&#39; &#124; &#39;segments&#39;>** | the fields to include for returned resources of type analyticsReportInstances | (optional) defaults to undefined
 **fieldsAnalyticsReportSegments** | **Array<&#39;checksum&#39; &#124; &#39;sizeInBytes&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type analyticsReportSegments | (optional) defaults to undefined


### Return type

**AnalyticsReportInstanceResponse**

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
**200** | Single AnalyticsReportInstance |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyticsReportInstancesSegmentsGetToManyRelated**
> AnalyticsReportSegmentsResponse analyticsReportInstancesSegmentsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportInstancesApi(configuration);

let body:.AnalyticsReportInstancesApiAnalyticsReportInstancesSegmentsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'checksum' | 'sizeInBytes' | 'url'> | the fields to include for returned resources of type analyticsReportSegments (optional)
  fieldsAnalyticsReportSegments: [
    "checksum",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.analyticsReportInstancesSegmentsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAnalyticsReportSegments** | **Array<&#39;checksum&#39; &#124; &#39;sizeInBytes&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type analyticsReportSegments | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AnalyticsReportSegmentsResponse**

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
**200** | List of AnalyticsReportSegments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


