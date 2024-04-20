# .CiIssuesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciIssuesGetInstance**](CiIssuesApi.md#ciIssuesGetInstance) | **GET** /v1/ciIssues/{id} | 


# **ciIssuesGetInstance**
> CiIssueResponse ciIssuesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiIssuesApi(configuration);

let body:.CiIssuesApiCiIssuesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'category' | 'fileSource' | 'issueType' | 'message'> | the fields to include for returned resources of type ciIssues (optional)
  fieldsCiIssues: [
    "category",
  ],
};

apiInstance.ciIssuesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiIssues** | **Array<&#39;category&#39; &#124; &#39;fileSource&#39; &#124; &#39;issueType&#39; &#124; &#39;message&#39;>** | the fields to include for returned resources of type ciIssues | (optional) defaults to undefined


### Return type

**CiIssueResponse**

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
**200** | Single CiIssue |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


