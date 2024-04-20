# .AnalyticsReportSegmentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsReportSegmentsGetInstance**](AnalyticsReportSegmentsApi.md#analyticsReportSegmentsGetInstance) | **GET** /v1/analyticsReportSegments/{id} | 


# **analyticsReportSegmentsGetInstance**
> AnalyticsReportSegmentResponse analyticsReportSegmentsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsReportSegmentsApi(configuration);

let body:.AnalyticsReportSegmentsApiAnalyticsReportSegmentsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'checksum' | 'sizeInBytes' | 'url'> | the fields to include for returned resources of type analyticsReportSegments (optional)
  fieldsAnalyticsReportSegments: [
    "checksum",
  ],
};

apiInstance.analyticsReportSegmentsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAnalyticsReportSegments** | **Array<&#39;checksum&#39; &#124; &#39;sizeInBytes&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type analyticsReportSegments | (optional) defaults to undefined


### Return type

**AnalyticsReportSegmentResponse**

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
**200** | Single AnalyticsReportSegment |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


