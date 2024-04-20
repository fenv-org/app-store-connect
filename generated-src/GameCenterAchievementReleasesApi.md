# .GameCenterAchievementReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementReleasesCreateInstance**](GameCenterAchievementReleasesApi.md#gameCenterAchievementReleasesCreateInstance) | **POST** /v1/gameCenterAchievementReleases | 
[**gameCenterAchievementReleasesDeleteInstance**](GameCenterAchievementReleasesApi.md#gameCenterAchievementReleasesDeleteInstance) | **DELETE** /v1/gameCenterAchievementReleases/{id} | 
[**gameCenterAchievementReleasesGetInstance**](GameCenterAchievementReleasesApi.md#gameCenterAchievementReleasesGetInstance) | **GET** /v1/gameCenterAchievementReleases/{id} | 


# **gameCenterAchievementReleasesCreateInstance**
> GameCenterAchievementReleaseResponse gameCenterAchievementReleasesCreateInstance(gameCenterAchievementReleaseCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementReleasesApi(configuration);

let body:.GameCenterAchievementReleasesApiGameCenterAchievementReleasesCreateInstanceRequest = {
  // GameCenterAchievementReleaseCreateRequest | GameCenterAchievementRelease representation
  gameCenterAchievementReleaseCreateRequest: {
    data: {
      type: "gameCenterAchievementReleases",
      relationships: {
        gameCenterDetail: {
          data: {
            type: "gameCenterDetails",
            id: "id_example",
          },
        },
        gameCenterAchievement: {
          data: {
            type: "gameCenterAchievements",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterAchievementReleasesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementReleaseCreateRequest** | **GameCenterAchievementReleaseCreateRequest**| GameCenterAchievementRelease representation |


### Return type

**GameCenterAchievementReleaseResponse**

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
**201** | Single GameCenterAchievementRelease |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementReleasesDeleteInstance**
> void gameCenterAchievementReleasesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementReleasesApi(configuration);

let body:.GameCenterAchievementReleasesApiGameCenterAchievementReleasesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterAchievementReleasesDeleteInstance(body).then((data:any) => {
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

# **gameCenterAchievementReleasesGetInstance**
> GameCenterAchievementReleaseResponse gameCenterAchievementReleasesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementReleasesApi(configuration);

let body:.GameCenterAchievementReleasesApiGameCenterAchievementReleasesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'> | the fields to include for returned resources of type gameCenterAchievementReleases (optional)
  fieldsGameCenterAchievementReleases: [
    "gameCenterAchievement",
  ],
  // Array<'gameCenterAchievement' | 'gameCenterDetail'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievement",
  ],
};

apiInstance.gameCenterAchievementReleasesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementReleaseResponse**

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
**200** | Single GameCenterAchievementRelease |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


