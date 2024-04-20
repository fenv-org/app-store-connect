# .RoutingAppCoveragesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routingAppCoveragesCreateInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesCreateInstance) | **POST** /v1/routingAppCoverages | 
[**routingAppCoveragesDeleteInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesDeleteInstance) | **DELETE** /v1/routingAppCoverages/{id} | 
[**routingAppCoveragesGetInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesGetInstance) | **GET** /v1/routingAppCoverages/{id} | 
[**routingAppCoveragesUpdateInstance**](RoutingAppCoveragesApi.md#routingAppCoveragesUpdateInstance) | **PATCH** /v1/routingAppCoverages/{id} | 


# **routingAppCoveragesCreateInstance**
> RoutingAppCoverageResponse routingAppCoveragesCreateInstance(routingAppCoverageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoutingAppCoveragesApi(configuration);

let body:.RoutingAppCoveragesApiRoutingAppCoveragesCreateInstanceRequest = {
  // RoutingAppCoverageCreateRequest | RoutingAppCoverage representation
  routingAppCoverageCreateRequest: {
    data: {
      type: "routingAppCoverages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        appStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.routingAppCoveragesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routingAppCoverageCreateRequest** | **RoutingAppCoverageCreateRequest**| RoutingAppCoverage representation |


### Return type

**RoutingAppCoverageResponse**

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
**201** | Single RoutingAppCoverage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **routingAppCoveragesDeleteInstance**
> void routingAppCoveragesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoutingAppCoveragesApi(configuration);

let body:.RoutingAppCoveragesApiRoutingAppCoveragesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.routingAppCoveragesDeleteInstance(body).then((data:any) => {
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

# **routingAppCoveragesGetInstance**
> RoutingAppCoverageResponse routingAppCoveragesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoutingAppCoveragesApi(configuration);

let body:.RoutingAppCoveragesApiRoutingAppCoveragesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type routingAppCoverages (optional)
  fieldsRoutingAppCoverages: [
    "appStoreVersion",
  ],
  // Array<'appStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersion",
  ],
};

apiInstance.routingAppCoveragesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsRoutingAppCoverages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type routingAppCoverages | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**RoutingAppCoverageResponse**

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
**200** | Single RoutingAppCoverage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **routingAppCoveragesUpdateInstance**
> RoutingAppCoverageResponse routingAppCoveragesUpdateInstance(routingAppCoverageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoutingAppCoveragesApi(configuration);

let body:.RoutingAppCoveragesApiRoutingAppCoveragesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // RoutingAppCoverageUpdateRequest | RoutingAppCoverage representation
  routingAppCoverageUpdateRequest: {
    data: {
      type: "routingAppCoverages",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.routingAppCoveragesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routingAppCoverageUpdateRequest** | **RoutingAppCoverageUpdateRequest**| RoutingAppCoverage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**RoutingAppCoverageResponse**

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
**404** | Not found error |  -  |
**200** | Single RoutingAppCoverage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


