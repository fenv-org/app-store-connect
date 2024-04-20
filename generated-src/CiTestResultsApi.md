# .CiTestResultsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciTestResultsGetInstance**](CiTestResultsApi.md#ciTestResultsGetInstance) | **GET** /v1/ciTestResults/{id} | 


# **ciTestResultsGetInstance**
> CiTestResultResponse ciTestResultsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiTestResultsApi(configuration);

let body:.CiTestResultsApiCiTestResultsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status'> | the fields to include for returned resources of type ciTestResults (optional)
  fieldsCiTestResults: [
    "className",
  ],
};

apiInstance.ciTestResultsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiTestResults** | **Array<&#39;className&#39; &#124; &#39;destinationTestResults&#39; &#124; &#39;fileSource&#39; &#124; &#39;message&#39; &#124; &#39;name&#39; &#124; &#39;status&#39;>** | the fields to include for returned resources of type ciTestResults | (optional) defaults to undefined


### Return type

**CiTestResultResponse**

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
**200** | Single CiTestResult |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


