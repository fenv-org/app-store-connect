# .CiArtifactsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciArtifactsGetInstance**](CiArtifactsApi.md#ciArtifactsGetInstance) | **GET** /v1/ciArtifacts/{id} | 


# **ciArtifactsGetInstance**
> CiArtifactResponse ciArtifactsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiArtifactsApi(configuration);

let body:.CiArtifactsApiCiArtifactsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'downloadUrl' | 'fileName' | 'fileSize' | 'fileType'> | the fields to include for returned resources of type ciArtifacts (optional)
  fieldsCiArtifacts: [
    "downloadUrl",
  ],
};

apiInstance.ciArtifactsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiArtifacts** | **Array<&#39;downloadUrl&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;fileType&#39;>** | the fields to include for returned resources of type ciArtifacts | (optional) defaults to undefined


### Return type

**CiArtifactResponse**

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
**200** | Single CiArtifact |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


