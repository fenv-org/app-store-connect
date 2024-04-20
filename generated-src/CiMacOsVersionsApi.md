# .CiMacOsVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciMacOsVersionsGetCollection**](CiMacOsVersionsApi.md#ciMacOsVersionsGetCollection) | **GET** /v1/ciMacOsVersions | 
[**ciMacOsVersionsGetInstance**](CiMacOsVersionsApi.md#ciMacOsVersionsGetInstance) | **GET** /v1/ciMacOsVersions/{id} | 
[**ciMacOsVersionsXcodeVersionsGetToManyRelated**](CiMacOsVersionsApi.md#ciMacOsVersionsXcodeVersionsGetToManyRelated) | **GET** /v1/ciMacOsVersions/{id}/xcodeVersions | 


# **ciMacOsVersionsGetCollection**
> CiMacOsVersionsResponse ciMacOsVersionsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiMacOsVersionsApi(configuration);

let body:.CiMacOsVersionsApiCiMacOsVersionsGetCollectionRequest = {
  // Array<'name' | 'version' | 'xcodeVersions'> | the fields to include for returned resources of type ciMacOsVersions (optional)
  fieldsCiMacOsVersions: [
    "name",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'xcodeVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "xcodeVersions",
  ],
  // Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'> | the fields to include for returned resources of type ciXcodeVersions (optional)
  fieldsCiXcodeVersions: [
    "macOsVersions",
  ],
  // number | maximum number of related xcodeVersions returned (when they are included) (optional)
  limitXcodeVersions: 1,
};

apiInstance.ciMacOsVersionsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsCiMacOsVersions** | **Array<&#39;name&#39; &#124; &#39;version&#39; &#124; &#39;xcodeVersions&#39;>** | the fields to include for returned resources of type ciMacOsVersions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;xcodeVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiXcodeVersions** | **Array<&#39;macOsVersions&#39; &#124; &#39;name&#39; &#124; &#39;testDestinations&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type ciXcodeVersions | (optional) defaults to undefined
 **limitXcodeVersions** | [**number**] | maximum number of related xcodeVersions returned (when they are included) | (optional) defaults to undefined


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
**200** | List of CiMacOsVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciMacOsVersionsGetInstance**
> CiMacOsVersionResponse ciMacOsVersionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiMacOsVersionsApi(configuration);

let body:.CiMacOsVersionsApiCiMacOsVersionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'name' | 'version' | 'xcodeVersions'> | the fields to include for returned resources of type ciMacOsVersions (optional)
  fieldsCiMacOsVersions: [
    "name",
  ],
  // Array<'xcodeVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "xcodeVersions",
  ],
  // Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'> | the fields to include for returned resources of type ciXcodeVersions (optional)
  fieldsCiXcodeVersions: [
    "macOsVersions",
  ],
  // number | maximum number of related xcodeVersions returned (when they are included) (optional)
  limitXcodeVersions: 1,
};

apiInstance.ciMacOsVersionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiMacOsVersions** | **Array<&#39;name&#39; &#124; &#39;version&#39; &#124; &#39;xcodeVersions&#39;>** | the fields to include for returned resources of type ciMacOsVersions | (optional) defaults to undefined
 **include** | **Array<&#39;xcodeVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiXcodeVersions** | **Array<&#39;macOsVersions&#39; &#124; &#39;name&#39; &#124; &#39;testDestinations&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type ciXcodeVersions | (optional) defaults to undefined
 **limitXcodeVersions** | [**number**] | maximum number of related xcodeVersions returned (when they are included) | (optional) defaults to undefined


### Return type

**CiMacOsVersionResponse**

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
**200** | Single CiMacOsVersion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciMacOsVersionsXcodeVersionsGetToManyRelated**
> CiXcodeVersionsResponse ciMacOsVersionsXcodeVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiMacOsVersionsApi(configuration);

let body:.CiMacOsVersionsApiCiMacOsVersionsXcodeVersionsGetToManyRelatedRequest = {
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
  // number | maximum number of related macOsVersions returned (when they are included) (optional)
  limitMacOsVersions: 1,
  // Array<'macOsVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "macOsVersions",
  ],
};

apiInstance.ciMacOsVersionsXcodeVersionsGetToManyRelated(body).then((data:any) => {
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
 **limitMacOsVersions** | [**number**] | maximum number of related macOsVersions returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;macOsVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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
**404** | Not found error |  -  |
**200** | List of CiXcodeVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


