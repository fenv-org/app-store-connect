# .GameCenterLeaderboardSetLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetLocalizationsCreateInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsCreateInstance) | **POST** /v1/gameCenterLeaderboardSetLocalizations | 
[**gameCenterLeaderboardSetLocalizationsDeleteInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetLocalizations/{id} | 
[**gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated) | **GET** /v1/gameCenterLeaderboardSetLocalizations/{id}/gameCenterLeaderboardSetImage | 
[**gameCenterLeaderboardSetLocalizationsGetInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsGetInstance) | **GET** /v1/gameCenterLeaderboardSetLocalizations/{id} | 
[**gameCenterLeaderboardSetLocalizationsUpdateInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSetLocalizations/{id} | 


# **gameCenterLeaderboardSetLocalizationsCreateInstance**
> GameCenterLeaderboardSetLocalizationResponse gameCenterLeaderboardSetLocalizationsCreateInstance(gameCenterLeaderboardSetLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetLocalizationsApi(configuration);

let body:.GameCenterLeaderboardSetLocalizationsApiGameCenterLeaderboardSetLocalizationsCreateInstanceRequest = {
  // GameCenterLeaderboardSetLocalizationCreateRequest | GameCenterLeaderboardSetLocalization representation
  gameCenterLeaderboardSetLocalizationCreateRequest: {
    data: {
      type: "gameCenterLeaderboardSetLocalizations",
      attributes: {
        locale: "locale_example",
        name: "name_example",
      },
      relationships: {
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

apiInstance.gameCenterLeaderboardSetLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetLocalizationCreateRequest** | **GameCenterLeaderboardSetLocalizationCreateRequest**| GameCenterLeaderboardSetLocalization representation |


### Return type

**GameCenterLeaderboardSetLocalizationResponse**

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
**201** | Single GameCenterLeaderboardSetLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetLocalizationsDeleteInstance**
> void gameCenterLeaderboardSetLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetLocalizationsApi(configuration);

let body:.GameCenterLeaderboardSetLocalizationsApiGameCenterLeaderboardSetLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardSetLocalizationsDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated**
> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetLocalizationsApi(configuration);

let body:.GameCenterLeaderboardSetLocalizationsApiGameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations (optional)
  fieldsGameCenterLeaderboardSetLocalizations: [
    "gameCenterLeaderboardSet",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardSetLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardSetImages (optional)
  fieldsGameCenterLeaderboardSetImages: [
    "assetDeliveryState",
  ],
  // Array<'gameCenterLeaderboardSetLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboardSetLocalization",
  ],
};

apiInstance.gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSetLocalizations** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | (optional) defaults to undefined
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

# **gameCenterLeaderboardSetLocalizationsGetInstance**
> GameCenterLeaderboardSetLocalizationResponse gameCenterLeaderboardSetLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetLocalizationsApi(configuration);

let body:.GameCenterLeaderboardSetLocalizationsApiGameCenterLeaderboardSetLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations (optional)
  fieldsGameCenterLeaderboardSetLocalizations: [
    "gameCenterLeaderboardSet",
  ],
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboardSet",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardSetLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardSetImages (optional)
  fieldsGameCenterLeaderboardSetImages: [
    "assetDeliveryState",
  ],
};

apiInstance.gameCenterLeaderboardSetLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSetLocalizations** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardSetLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetImages | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetLocalizationResponse**

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
**200** | Single GameCenterLeaderboardSetLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetLocalizationsUpdateInstance**
> GameCenterLeaderboardSetLocalizationResponse gameCenterLeaderboardSetLocalizationsUpdateInstance(gameCenterLeaderboardSetLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetLocalizationsApi(configuration);

let body:.GameCenterLeaderboardSetLocalizationsApiGameCenterLeaderboardSetLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetLocalizationUpdateRequest | GameCenterLeaderboardSetLocalization representation
  gameCenterLeaderboardSetLocalizationUpdateRequest: {
    data: {
      type: "gameCenterLeaderboardSetLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
      },
    },
  },
};

apiInstance.gameCenterLeaderboardSetLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetLocalizationUpdateRequest** | **GameCenterLeaderboardSetLocalizationUpdateRequest**| GameCenterLeaderboardSetLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardSetLocalizationResponse**

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
**200** | Single GameCenterLeaderboardSetLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


