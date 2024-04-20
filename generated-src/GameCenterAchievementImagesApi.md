# .GameCenterAchievementImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementImagesCreateInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesCreateInstance) | **POST** /v1/gameCenterAchievementImages | 
[**gameCenterAchievementImagesDeleteInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesDeleteInstance) | **DELETE** /v1/gameCenterAchievementImages/{id} | 
[**gameCenterAchievementImagesGetInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesGetInstance) | **GET** /v1/gameCenterAchievementImages/{id} | 
[**gameCenterAchievementImagesUpdateInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesUpdateInstance) | **PATCH** /v1/gameCenterAchievementImages/{id} | 


# **gameCenterAchievementImagesCreateInstance**
> GameCenterAchievementImageResponse gameCenterAchievementImagesCreateInstance(gameCenterAchievementImageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementImagesApi(configuration);

let body:.GameCenterAchievementImagesApiGameCenterAchievementImagesCreateInstanceRequest = {
  // GameCenterAchievementImageCreateRequest | GameCenterAchievementImage representation
  gameCenterAchievementImageCreateRequest: {
    data: {
      type: "gameCenterAchievementImages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        gameCenterAchievementLocalization: {
          data: {
            type: "gameCenterAchievementLocalizations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterAchievementImagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementImageCreateRequest** | **GameCenterAchievementImageCreateRequest**| GameCenterAchievementImage representation |


### Return type

**GameCenterAchievementImageResponse**

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
**201** | Single GameCenterAchievementImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementImagesDeleteInstance**
> void gameCenterAchievementImagesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementImagesApi(configuration);

let body:.GameCenterAchievementImagesApiGameCenterAchievementImagesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterAchievementImagesDeleteInstance(body).then((data:any) => {
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

# **gameCenterAchievementImagesGetInstance**
> GameCenterAchievementImageResponse gameCenterAchievementImagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementImagesApi(configuration);

let body:.GameCenterAchievementImagesApiGameCenterAchievementImagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterAchievementImages (optional)
  fieldsGameCenterAchievementImages: [
    "assetDeliveryState",
  ],
  // Array<'gameCenterAchievementLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievementLocalization",
  ],
};

apiInstance.gameCenterAchievementImagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievementImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterAchievementLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterAchievementImages | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievementLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementImageResponse**

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
**200** | Single GameCenterAchievementImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementImagesUpdateInstance**
> GameCenterAchievementImageResponse gameCenterAchievementImagesUpdateInstance(gameCenterAchievementImageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementImagesApi(configuration);

let body:.GameCenterAchievementImagesApiGameCenterAchievementImagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAchievementImageUpdateRequest | GameCenterAchievementImage representation
  gameCenterAchievementImageUpdateRequest: {
    data: {
      type: "gameCenterAchievementImages",
      id: "id_example",
      attributes: {
        uploaded: true,
      },
    },
  },
};

apiInstance.gameCenterAchievementImagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementImageUpdateRequest** | **GameCenterAchievementImageUpdateRequest**| GameCenterAchievementImage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterAchievementImageResponse**

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
**200** | Single GameCenterAchievementImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


