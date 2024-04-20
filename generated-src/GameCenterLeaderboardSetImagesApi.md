# .GameCenterLeaderboardSetImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetImagesCreateInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesCreateInstance) | **POST** /v1/gameCenterLeaderboardSetImages | 
[**gameCenterLeaderboardSetImagesDeleteInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetImages/{id} | 
[**gameCenterLeaderboardSetImagesGetInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesGetInstance) | **GET** /v1/gameCenterLeaderboardSetImages/{id} | 
[**gameCenterLeaderboardSetImagesUpdateInstance**](GameCenterLeaderboardSetImagesApi.md#gameCenterLeaderboardSetImagesUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSetImages/{id} | 


# **gameCenterLeaderboardSetImagesCreateInstance**
> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetImagesCreateInstance(gameCenterLeaderboardSetImageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetImagesApi(configuration);

let body:.GameCenterLeaderboardSetImagesApiGameCenterLeaderboardSetImagesCreateInstanceRequest = {
  // GameCenterLeaderboardSetImageCreateRequest | GameCenterLeaderboardSetImage representation
  gameCenterLeaderboardSetImageCreateRequest: {
    data: {
      type: "gameCenterLeaderboardSetImages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        gameCenterLeaderboardSetLocalization: {
          data: {
            type: "gameCenterLeaderboardSetLocalizations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterLeaderboardSetImagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetImageCreateRequest** | **GameCenterLeaderboardSetImageCreateRequest**| GameCenterLeaderboardSetImage representation |


### Return type

**GameCenterLeaderboardSetImageResponse**

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
**201** | Single GameCenterLeaderboardSetImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetImagesDeleteInstance**
> void gameCenterLeaderboardSetImagesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetImagesApi(configuration);

let body:.GameCenterLeaderboardSetImagesApiGameCenterLeaderboardSetImagesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardSetImagesDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardSetImagesGetInstance**
> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetImagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetImagesApi(configuration);

let body:.GameCenterLeaderboardSetImagesApiGameCenterLeaderboardSetImagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardSetLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardSetImages (optional)
  fieldsGameCenterLeaderboardSetImages: [
    "assetDeliveryState",
  ],
  // Array<'gameCenterLeaderboardSetLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboardSetLocalization",
  ],
};

apiInstance.gameCenterLeaderboardSetImagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSetImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardSetLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetImages | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterLeaderboardSetLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetImageResponse**

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
**200** | Single GameCenterLeaderboardSetImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetImagesUpdateInstance**
> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetImagesUpdateInstance(gameCenterLeaderboardSetImageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetImagesApi(configuration);

let body:.GameCenterLeaderboardSetImagesApiGameCenterLeaderboardSetImagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetImageUpdateRequest | GameCenterLeaderboardSetImage representation
  gameCenterLeaderboardSetImageUpdateRequest: {
    data: {
      type: "gameCenterLeaderboardSetImages",
      id: "id_example",
      attributes: {
        uploaded: true,
      },
    },
  },
};

apiInstance.gameCenterLeaderboardSetImagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetImageUpdateRequest** | **GameCenterLeaderboardSetImageUpdateRequest**| GameCenterLeaderboardSetImage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardSetImageResponse**

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
**200** | Single GameCenterLeaderboardSetImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


