# .GameCenterLeaderboardImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardImagesCreateInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesCreateInstance) | **POST** /v1/gameCenterLeaderboardImages | 
[**gameCenterLeaderboardImagesDeleteInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardImages/{id} | 
[**gameCenterLeaderboardImagesGetInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesGetInstance) | **GET** /v1/gameCenterLeaderboardImages/{id} | 
[**gameCenterLeaderboardImagesUpdateInstance**](GameCenterLeaderboardImagesApi.md#gameCenterLeaderboardImagesUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardImages/{id} | 


# **gameCenterLeaderboardImagesCreateInstance**
> GameCenterLeaderboardImageResponse gameCenterLeaderboardImagesCreateInstance(gameCenterLeaderboardImageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardImagesApi(configuration);

let body:.GameCenterLeaderboardImagesApiGameCenterLeaderboardImagesCreateInstanceRequest = {
  // GameCenterLeaderboardImageCreateRequest | GameCenterLeaderboardImage representation
  gameCenterLeaderboardImageCreateRequest: {
    data: {
      type: "gameCenterLeaderboardImages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        gameCenterLeaderboardLocalization: {
          data: {
            type: "gameCenterLeaderboardLocalizations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterLeaderboardImagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardImageCreateRequest** | **GameCenterLeaderboardImageCreateRequest**| GameCenterLeaderboardImage representation |


### Return type

**GameCenterLeaderboardImageResponse**

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
**201** | Single GameCenterLeaderboardImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardImagesDeleteInstance**
> void gameCenterLeaderboardImagesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardImagesApi(configuration);

let body:.GameCenterLeaderboardImagesApiGameCenterLeaderboardImagesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardImagesDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardImagesGetInstance**
> GameCenterLeaderboardImageResponse gameCenterLeaderboardImagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardImagesApi(configuration);

let body:.GameCenterLeaderboardImagesApiGameCenterLeaderboardImagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardImages (optional)
  fieldsGameCenterLeaderboardImages: [
    "assetDeliveryState",
  ],
  // Array<'gameCenterLeaderboardLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboardLocalization",
  ],
};

apiInstance.gameCenterLeaderboardImagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardImages | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterLeaderboardLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardImageResponse**

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
**200** | Single GameCenterLeaderboardImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardImagesUpdateInstance**
> GameCenterLeaderboardImageResponse gameCenterLeaderboardImagesUpdateInstance(gameCenterLeaderboardImageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardImagesApi(configuration);

let body:.GameCenterLeaderboardImagesApiGameCenterLeaderboardImagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardImageUpdateRequest | GameCenterLeaderboardImage representation
  gameCenterLeaderboardImageUpdateRequest: {
    data: {
      type: "gameCenterLeaderboardImages",
      id: "id_example",
      attributes: {
        uploaded: true,
      },
    },
  },
};

apiInstance.gameCenterLeaderboardImagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardImageUpdateRequest** | **GameCenterLeaderboardImageUpdateRequest**| GameCenterLeaderboardImage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardImageResponse**

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
**200** | Single GameCenterLeaderboardImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


