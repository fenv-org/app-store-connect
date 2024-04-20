# .AppEventLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventLocalizationsAppEventScreenshotsGetToManyRelated**](AppEventLocalizationsApi.md#appEventLocalizationsAppEventScreenshotsGetToManyRelated) | **GET** /v1/appEventLocalizations/{id}/appEventScreenshots | 
[**appEventLocalizationsAppEventVideoClipsGetToManyRelated**](AppEventLocalizationsApi.md#appEventLocalizationsAppEventVideoClipsGetToManyRelated) | **GET** /v1/appEventLocalizations/{id}/appEventVideoClips | 
[**appEventLocalizationsCreateInstance**](AppEventLocalizationsApi.md#appEventLocalizationsCreateInstance) | **POST** /v1/appEventLocalizations | 
[**appEventLocalizationsDeleteInstance**](AppEventLocalizationsApi.md#appEventLocalizationsDeleteInstance) | **DELETE** /v1/appEventLocalizations/{id} | 
[**appEventLocalizationsGetInstance**](AppEventLocalizationsApi.md#appEventLocalizationsGetInstance) | **GET** /v1/appEventLocalizations/{id} | 
[**appEventLocalizationsUpdateInstance**](AppEventLocalizationsApi.md#appEventLocalizationsUpdateInstance) | **PATCH** /v1/appEventLocalizations/{id} | 


# **appEventLocalizationsAppEventScreenshotsGetToManyRelated**
> AppEventScreenshotsResponse appEventLocalizationsAppEventScreenshotsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventLocalizationsApi(configuration);

let body:.AppEventLocalizationsApiAppEventLocalizationsAppEventScreenshotsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appEventScreenshots (optional)
  fieldsAppEventScreenshots: [
    "appEventAssetType",
  ],
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'> | the fields to include for returned resources of type appEventLocalizations (optional)
  fieldsAppEventLocalizations: [
    "appEvent",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appEventLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appEventLocalization",
  ],
};

apiInstance.appEventLocalizationsAppEventScreenshotsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEventScreenshots** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appEventScreenshots | (optional) defaults to undefined
 **fieldsAppEventLocalizations** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39; &#124; &#39;locale&#39; &#124; &#39;longDescription&#39; &#124; &#39;name&#39; &#124; &#39;shortDescription&#39;>** | the fields to include for returned resources of type appEventLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appEventLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppEventScreenshotsResponse**

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
**200** | List of AppEventScreenshots |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventLocalizationsAppEventVideoClipsGetToManyRelated**
> AppEventVideoClipsResponse appEventLocalizationsAppEventVideoClipsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventLocalizationsApi(configuration);

let body:.AppEventLocalizationsApiAppEventLocalizationsAppEventVideoClipsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appEventVideoClips (optional)
  fieldsAppEventVideoClips: [
    "appEventAssetType",
  ],
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'> | the fields to include for returned resources of type appEventLocalizations (optional)
  fieldsAppEventLocalizations: [
    "appEvent",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appEventLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appEventLocalization",
  ],
};

apiInstance.appEventLocalizationsAppEventVideoClipsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEventVideoClips** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appEventVideoClips | (optional) defaults to undefined
 **fieldsAppEventLocalizations** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39; &#124; &#39;locale&#39; &#124; &#39;longDescription&#39; &#124; &#39;name&#39; &#124; &#39;shortDescription&#39;>** | the fields to include for returned resources of type appEventLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appEventLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppEventVideoClipsResponse**

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
**200** | List of AppEventVideoClips |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventLocalizationsCreateInstance**
> AppEventLocalizationResponse appEventLocalizationsCreateInstance(appEventLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventLocalizationsApi(configuration);

let body:.AppEventLocalizationsApiAppEventLocalizationsCreateInstanceRequest = {
  // AppEventLocalizationCreateRequest | AppEventLocalization representation
  appEventLocalizationCreateRequest: {
    data: {
      type: "appEventLocalizations",
      attributes: {
        locale: "locale_example",
        name: "name_example",
        shortDescription: "shortDescription_example",
        longDescription: "longDescription_example",
      },
      relationships: {
        appEvent: {
          data: {
            type: "appEvents",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appEventLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventLocalizationCreateRequest** | **AppEventLocalizationCreateRequest**| AppEventLocalization representation |


### Return type

**AppEventLocalizationResponse**

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
**201** | Single AppEventLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventLocalizationsDeleteInstance**
> void appEventLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventLocalizationsApi(configuration);

let body:.AppEventLocalizationsApiAppEventLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appEventLocalizationsDeleteInstance(body).then((data:any) => {
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

# **appEventLocalizationsGetInstance**
> AppEventLocalizationResponse appEventLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventLocalizationsApi(configuration);

let body:.AppEventLocalizationsApiAppEventLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'> | the fields to include for returned resources of type appEventLocalizations (optional)
  fieldsAppEventLocalizations: [
    "appEvent",
  ],
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'> | comma-separated list of relationships to include (optional)
  include: [
    "appEvent",
  ],
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appEventScreenshots (optional)
  fieldsAppEventScreenshots: [
    "appEventAssetType",
  ],
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appEventVideoClips (optional)
  fieldsAppEventVideoClips: [
    "appEventAssetType",
  ],
  // number | maximum number of related appEventScreenshots returned (when they are included) (optional)
  limitAppEventScreenshots: 1,
  // number | maximum number of related appEventVideoClips returned (when they are included) (optional)
  limitAppEventVideoClips: 1,
};

apiInstance.appEventLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEventLocalizations** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39; &#124; &#39;locale&#39; &#124; &#39;longDescription&#39; &#124; &#39;name&#39; &#124; &#39;shortDescription&#39;>** | the fields to include for returned resources of type appEventLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppEventScreenshots** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appEventScreenshots | (optional) defaults to undefined
 **fieldsAppEventVideoClips** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appEventVideoClips | (optional) defaults to undefined
 **limitAppEventScreenshots** | [**number**] | maximum number of related appEventScreenshots returned (when they are included) | (optional) defaults to undefined
 **limitAppEventVideoClips** | [**number**] | maximum number of related appEventVideoClips returned (when they are included) | (optional) defaults to undefined


### Return type

**AppEventLocalizationResponse**

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
**200** | Single AppEventLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventLocalizationsUpdateInstance**
> AppEventLocalizationResponse appEventLocalizationsUpdateInstance(appEventLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventLocalizationsApi(configuration);

let body:.AppEventLocalizationsApiAppEventLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppEventLocalizationUpdateRequest | AppEventLocalization representation
  appEventLocalizationUpdateRequest: {
    data: {
      type: "appEventLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        shortDescription: "shortDescription_example",
        longDescription: "longDescription_example",
      },
    },
  },
};

apiInstance.appEventLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventLocalizationUpdateRequest** | **AppEventLocalizationUpdateRequest**| AppEventLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppEventLocalizationResponse**

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
**200** | Single AppEventLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


