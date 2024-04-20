# .GameCenterLeaderboardSetReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetReleasesCreateInstance**](GameCenterLeaderboardSetReleasesApi.md#gameCenterLeaderboardSetReleasesCreateInstance) | **POST** /v1/gameCenterLeaderboardSetReleases | 
[**gameCenterLeaderboardSetReleasesDeleteInstance**](GameCenterLeaderboardSetReleasesApi.md#gameCenterLeaderboardSetReleasesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetReleases/{id} | 
[**gameCenterLeaderboardSetReleasesGetInstance**](GameCenterLeaderboardSetReleasesApi.md#gameCenterLeaderboardSetReleasesGetInstance) | **GET** /v1/gameCenterLeaderboardSetReleases/{id} | 


# **gameCenterLeaderboardSetReleasesCreateInstance**
> GameCenterLeaderboardSetReleaseResponse gameCenterLeaderboardSetReleasesCreateInstance(gameCenterLeaderboardSetReleaseCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetReleasesApi(configuration);

let body:.GameCenterLeaderboardSetReleasesApiGameCenterLeaderboardSetReleasesCreateInstanceRequest = {
  // GameCenterLeaderboardSetReleaseCreateRequest | GameCenterLeaderboardSetRelease representation
  gameCenterLeaderboardSetReleaseCreateRequest: {
    data: {
      type: "gameCenterLeaderboardSetReleases",
      relationships: {
        gameCenterDetail: {
          data: {
            type: "gameCenterDetails",
            id: "id_example",
          },
        },
        gameCenterLeaderboardSet: {
          data: {
            type: "gameCenterLeaderboardSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterLeaderboardSetReleasesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetReleaseCreateRequest** | **GameCenterLeaderboardSetReleaseCreateRequest**| GameCenterLeaderboardSetRelease representation |


### Return type

**GameCenterLeaderboardSetReleaseResponse**

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
**201** | Single GameCenterLeaderboardSetRelease |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetReleasesDeleteInstance**
> void gameCenterLeaderboardSetReleasesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetReleasesApi(configuration);

let body:.GameCenterLeaderboardSetReleasesApiGameCenterLeaderboardSetReleasesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardSetReleasesDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardSetReleasesGetInstance**
> GameCenterLeaderboardSetReleaseResponse gameCenterLeaderboardSetReleasesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetReleasesApi(configuration);

let body:.GameCenterLeaderboardSetReleasesApiGameCenterLeaderboardSetReleasesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardSetReleases (optional)
  fieldsGameCenterLeaderboardSetReleases: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterLeaderboardSetReleasesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetReleaseResponse**

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
**200** | Single GameCenterLeaderboardSetRelease |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


