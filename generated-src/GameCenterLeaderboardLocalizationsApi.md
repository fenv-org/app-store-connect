# .GameCenterLeaderboardLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardLocalizationsCreateInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsCreateInstance) | **POST** /v1/gameCenterLeaderboardLocalizations | 
[**gameCenterLeaderboardLocalizationsDeleteInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardLocalizations/{id} | 
[**gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated) | **GET** /v1/gameCenterLeaderboardLocalizations/{id}/gameCenterLeaderboardImage | 
[**gameCenterLeaderboardLocalizationsGetInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsGetInstance) | **GET** /v1/gameCenterLeaderboardLocalizations/{id} | 
[**gameCenterLeaderboardLocalizationsUpdateInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardLocalizations/{id} | 


# **gameCenterLeaderboardLocalizationsCreateInstance**
> GameCenterLeaderboardLocalizationResponse gameCenterLeaderboardLocalizationsCreateInstance(gameCenterLeaderboardLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardLocalizationsApi(configuration);

let body:.GameCenterLeaderboardLocalizationsApiGameCenterLeaderboardLocalizationsCreateInstanceRequest = {
  // GameCenterLeaderboardLocalizationCreateRequest | GameCenterLeaderboardLocalization representation
  gameCenterLeaderboardLocalizationCreateRequest: {
    data: {
      type: "gameCenterLeaderboardLocalizations",
      attributes: {
        locale: "locale_example",
        name: "name_example",
        formatterOverride: "INTEGER",
        formatterSuffix: "formatterSuffix_example",
        formatterSuffixSingular: "formatterSuffixSingular_example",
      },
      relationships: {
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

apiInstance.gameCenterLeaderboardLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardLocalizationCreateRequest** | **GameCenterLeaderboardLocalizationCreateRequest**| GameCenterLeaderboardLocalization representation |


### Return type

**GameCenterLeaderboardLocalizationResponse**

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
**201** | Single GameCenterLeaderboardLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardLocalizationsDeleteInstance**
> void gameCenterLeaderboardLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardLocalizationsApi(configuration);

let body:.GameCenterLeaderboardLocalizationsApiGameCenterLeaderboardLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardLocalizationsDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated**
> GameCenterLeaderboardImageResponse gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardLocalizationsApi(configuration);

let body:.GameCenterLeaderboardLocalizationsApiGameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardImages (optional)
  fieldsGameCenterLeaderboardImages: [
    "assetDeliveryState",
  ],
  // Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardLocalizations (optional)
  fieldsGameCenterLeaderboardLocalizations: [
    "formatterOverride",
  ],
  // Array<'gameCenterLeaderboardLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboardLocalization",
  ],
};

apiInstance.gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardImages | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardLocalizations** | **Array<&#39;formatterOverride&#39; &#124; &#39;formatterSuffix&#39; &#124; &#39;formatterSuffixSingular&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardLocalizations | (optional) defaults to undefined
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

# **gameCenterLeaderboardLocalizationsGetInstance**
> GameCenterLeaderboardLocalizationResponse gameCenterLeaderboardLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardLocalizationsApi(configuration);

let body:.GameCenterLeaderboardLocalizationsApiGameCenterLeaderboardLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardLocalizations (optional)
  fieldsGameCenterLeaderboardLocalizations: [
    "formatterOverride",
  ],
  // Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardImage'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboard",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardImages (optional)
  fieldsGameCenterLeaderboardImages: [
    "assetDeliveryState",
  ],
};

apiInstance.gameCenterLeaderboardLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardLocalizations** | **Array<&#39;formatterOverride&#39; &#124; &#39;formatterSuffix&#39; &#124; &#39;formatterSuffixSingular&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardImages | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardLocalizationResponse**

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
**200** | Single GameCenterLeaderboardLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardLocalizationsUpdateInstance**
> GameCenterLeaderboardLocalizationResponse gameCenterLeaderboardLocalizationsUpdateInstance(gameCenterLeaderboardLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardLocalizationsApi(configuration);

let body:.GameCenterLeaderboardLocalizationsApiGameCenterLeaderboardLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardLocalizationUpdateRequest | GameCenterLeaderboardLocalization representation
  gameCenterLeaderboardLocalizationUpdateRequest: {
    data: {
      type: "gameCenterLeaderboardLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        formatterOverride: "INTEGER",
        formatterSuffix: "formatterSuffix_example",
        formatterSuffixSingular: "formatterSuffixSingular_example",
      },
    },
  },
};

apiInstance.gameCenterLeaderboardLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardLocalizationUpdateRequest** | **GameCenterLeaderboardLocalizationUpdateRequest**| GameCenterLeaderboardLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardLocalizationResponse**

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
**200** | Single GameCenterLeaderboardLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


