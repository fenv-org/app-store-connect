# .CiXcodeVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciXcodeVersionsGetCollection**](CiXcodeVersionsApi.md#ciXcodeVersionsGetCollection) | **GET** /v1/ciXcodeVersions | 
[**ciXcodeVersionsGetInstance**](CiXcodeVersionsApi.md#ciXcodeVersionsGetInstance) | **GET** /v1/ciXcodeVersions/{id} | 
[**ciXcodeVersionsMacOsVersionsGetToManyRelated**](CiXcodeVersionsApi.md#ciXcodeVersionsMacOsVersionsGetToManyRelated) | **GET** /v1/ciXcodeVersions/{id}/macOsVersions | 


# **ciXcodeVersionsGetCollection**
> CiXcodeVersionsResponse ciXcodeVersionsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiXcodeVersionsApi(configuration);

let body:.CiXcodeVersionsApiCiXcodeVersionsGetCollectionRequest = {
  // Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'> | the fields to include for returned resources of type ciXcodeVersions (optional)
  fieldsCiXcodeVersions: [
    "macOsVersions",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'macOsVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "macOsVersions",
  ],
  // Array<'name' | 'version' | 'xcodeVersions'> | the fields to include for returned resources of type ciMacOsVersions (optional)
  fieldsCiMacOsVersions: [
    "name",
  ],
  // number | maximum number of related macOsVersions returned (when they are included) (optional)
  limitMacOsVersions: 1,
};

apiInstance.ciXcodeVersionsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsCiXcodeVersions** | **Array<&#39;macOsVersions&#39; &#124; &#39;name&#39; &#124; &#39;testDestinations&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type ciXcodeVersions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;macOsVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiMacOsVersions** | **Array<&#39;name&#39; &#124; &#39;version&#39; &#124; &#39;xcodeVersions&#39;>** | the fields to include for returned resources of type ciMacOsVersions | (optional) defaults to undefined
 **limitMacOsVersions** | [**number**] | maximum number of related macOsVersions returned (when they are included) | (optional) defaults to undefined


### Return type

**CiXcodeVersionsResponse**

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
**200** | List of CiXcodeVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciXcodeVersionsGetInstance**
> CiXcodeVersionResponse ciXcodeVersionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiXcodeVersionsApi(configuration);

let body:.CiXcodeVersionsApiCiXcodeVersionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'> | the fields to include for returned resources of type ciXcodeVersions (optional)
  fieldsCiXcodeVersions: [
    "macOsVersions",
  ],
  // Array<'macOsVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "macOsVersions",
  ],
  // Array<'name' | 'version' | 'xcodeVersions'> | the fields to include for returned resources of type ciMacOsVersions (optional)
  fieldsCiMacOsVersions: [
    "name",
  ],
  // number | maximum number of related macOsVersions returned (when they are included) (optional)
  limitMacOsVersions: 1,
};

apiInstance.ciXcodeVersionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiXcodeVersions** | **Array<&#39;macOsVersions&#39; &#124; &#39;name&#39; &#124; &#39;testDestinations&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type ciXcodeVersions | (optional) defaults to undefined
 **include** | **Array<&#39;macOsVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiMacOsVersions** | **Array<&#39;name&#39; &#124; &#39;version&#39; &#124; &#39;xcodeVersions&#39;>** | the fields to include for returned resources of type ciMacOsVersions | (optional) defaults to undefined
 **limitMacOsVersions** | [**number**] | maximum number of related macOsVersions returned (when they are included) | (optional) defaults to undefined


### Return type

**CiXcodeVersionResponse**

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
**200** | Single CiXcodeVersion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciXcodeVersionsMacOsVersionsGetToManyRelated**
> CiMacOsVersionsResponse ciXcodeVersionsMacOsVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiXcodeVersionsApi(configuration);

let body:.CiXcodeVersionsApiCiXcodeVersionsMacOsVersionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'> | the fields to include for returned resources of type ciXcodeVersions (optional)
  fieldsCiXcodeVersions: [
    "macOsVersions",
  ],
  // Array<'name' | 'version' | 'xcodeVersions'> | the fields to include for returned resources of type ciMacOsVersions (optional)
  fieldsCiMacOsVersions: [
    "name",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related xcodeVersions returned (when they are included) (optional)
  limitXcodeVersions: 1,
  // Array<'xcodeVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "xcodeVersions",
  ],
};

apiInstance.ciXcodeVersionsMacOsVersionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiXcodeVersions** | **Array<&#39;macOsVersions&#39; &#124; &#39;name&#39; &#124; &#39;testDestinations&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type ciXcodeVersions | (optional) defaults to undefined
 **fieldsCiMacOsVersions** | **Array<&#39;name&#39; &#124; &#39;version&#39; &#124; &#39;xcodeVersions&#39;>** | the fields to include for returned resources of type ciMacOsVersions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitXcodeVersions** | [**number**] | maximum number of related xcodeVersions returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;xcodeVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CiMacOsVersionsResponse**

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
**200** | List of CiMacOsVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


