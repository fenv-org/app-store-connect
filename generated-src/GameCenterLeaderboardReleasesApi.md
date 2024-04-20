# .GameCenterLeaderboardReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardReleasesCreateInstance**](GameCenterLeaderboardReleasesApi.md#gameCenterLeaderboardReleasesCreateInstance) | **POST** /v1/gameCenterLeaderboardReleases | 
[**gameCenterLeaderboardReleasesDeleteInstance**](GameCenterLeaderboardReleasesApi.md#gameCenterLeaderboardReleasesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardReleases/{id} | 
[**gameCenterLeaderboardReleasesGetInstance**](GameCenterLeaderboardReleasesApi.md#gameCenterLeaderboardReleasesGetInstance) | **GET** /v1/gameCenterLeaderboardReleases/{id} | 


# **gameCenterLeaderboardReleasesCreateInstance**
> GameCenterLeaderboardReleaseResponse gameCenterLeaderboardReleasesCreateInstance(gameCenterLeaderboardReleaseCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardReleasesApi(configuration);

let body:.GameCenterLeaderboardReleasesApiGameCenterLeaderboardReleasesCreateInstanceRequest = {
  // GameCenterLeaderboardReleaseCreateRequest | GameCenterLeaderboardRelease representation
  gameCenterLeaderboardReleaseCreateRequest: {
    data: {
      type: "gameCenterLeaderboardReleases",
      relationships: {
        gameCenterDetail: {
          data: {
            type: "gameCenterDetails",
            id: "id_example",
          },
        },
        gameCenterLeaderboard: {
          data: {
            type: "gameCenterLeaderboards",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterLeaderboardReleasesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardReleaseCreateRequest** | **GameCenterLeaderboardReleaseCreateRequest**| GameCenterLeaderboardRelease representation |


### Return type

**GameCenterLeaderboardReleaseResponse**

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
**201** | Single GameCenterLeaderboardRelease |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardReleasesDeleteInstance**
> void gameCenterLeaderboardReleasesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardReleasesApi(configuration);

let body:.GameCenterLeaderboardReleasesApiGameCenterLeaderboardReleasesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardReleasesDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardReleasesGetInstance**
> GameCenterLeaderboardReleaseResponse gameCenterLeaderboardReleasesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardReleasesApi(configuration);

let body:.GameCenterLeaderboardReleasesApiGameCenterLeaderboardReleasesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardReleases (optional)
  fieldsGameCenterLeaderboardReleases: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterLeaderboardReleasesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardReleaseResponse**

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
**200** | Single GameCenterLeaderboardRelease |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


