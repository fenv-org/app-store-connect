# .AppStoreVersionPhasedReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionPhasedReleasesCreateInstance**](AppStoreVersionPhasedReleasesApi.md#appStoreVersionPhasedReleasesCreateInstance) | **POST** /v1/appStoreVersionPhasedReleases | 
[**appStoreVersionPhasedReleasesDeleteInstance**](AppStoreVersionPhasedReleasesApi.md#appStoreVersionPhasedReleasesDeleteInstance) | **DELETE** /v1/appStoreVersionPhasedReleases/{id} | 
[**appStoreVersionPhasedReleasesUpdateInstance**](AppStoreVersionPhasedReleasesApi.md#appStoreVersionPhasedReleasesUpdateInstance) | **PATCH** /v1/appStoreVersionPhasedReleases/{id} | 


# **appStoreVersionPhasedReleasesCreateInstance**
> AppStoreVersionPhasedReleaseResponse appStoreVersionPhasedReleasesCreateInstance(appStoreVersionPhasedReleaseCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionPhasedReleasesApi(configuration);

let body:.AppStoreVersionPhasedReleasesApiAppStoreVersionPhasedReleasesCreateInstanceRequest = {
  // AppStoreVersionPhasedReleaseCreateRequest | AppStoreVersionPhasedRelease representation
  appStoreVersionPhasedReleaseCreateRequest: {
    data: {
      type: "appStoreVersionPhasedReleases",
      attributes: {
        phasedReleaseState: "INACTIVE",
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

apiInstance.appStoreVersionPhasedReleasesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionPhasedReleaseCreateRequest** | **AppStoreVersionPhasedReleaseCreateRequest**| AppStoreVersionPhasedRelease representation |


### Return type

**AppStoreVersionPhasedReleaseResponse**

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
**201** | Single AppStoreVersionPhasedRelease |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionPhasedReleasesDeleteInstance**
> void appStoreVersionPhasedReleasesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionPhasedReleasesApi(configuration);

let body:.AppStoreVersionPhasedReleasesApiAppStoreVersionPhasedReleasesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionPhasedReleasesDeleteInstance(body).then((data:any) => {
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

# **appStoreVersionPhasedReleasesUpdateInstance**
> AppStoreVersionPhasedReleaseResponse appStoreVersionPhasedReleasesUpdateInstance(appStoreVersionPhasedReleaseUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionPhasedReleasesApi(configuration);

let body:.AppStoreVersionPhasedReleasesApiAppStoreVersionPhasedReleasesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionPhasedReleaseUpdateRequest | AppStoreVersionPhasedRelease representation
  appStoreVersionPhasedReleaseUpdateRequest: {
    data: {
      type: "appStoreVersionPhasedReleases",
      id: "id_example",
      attributes: {
        phasedReleaseState: "INACTIVE",
      },
    },
  },
};

apiInstance.appStoreVersionPhasedReleasesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionPhasedReleaseUpdateRequest** | **AppStoreVersionPhasedReleaseUpdateRequest**| AppStoreVersionPhasedRelease representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionPhasedReleaseResponse**

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
**200** | Single AppStoreVersionPhasedRelease |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


