# .AppClipDefaultExperienceLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated) | **GET** /v1/appClipDefaultExperienceLocalizations/{id}/appClipHeaderImage | 
[**appClipDefaultExperienceLocalizationsCreateInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsCreateInstance) | **POST** /v1/appClipDefaultExperienceLocalizations | 
[**appClipDefaultExperienceLocalizationsDeleteInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsDeleteInstance) | **DELETE** /v1/appClipDefaultExperienceLocalizations/{id} | 
[**appClipDefaultExperienceLocalizationsGetInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsGetInstance) | **GET** /v1/appClipDefaultExperienceLocalizations/{id} | 
[**appClipDefaultExperienceLocalizationsUpdateInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsUpdateInstance) | **PATCH** /v1/appClipDefaultExperienceLocalizations/{id} | 


# **appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated**
> AppClipHeaderImageResponse appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperienceLocalizationsApi(configuration);

let body:.AppClipDefaultExperienceLocalizationsApiAppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appClipDefaultExperienceLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appClipHeaderImages (optional)
  fieldsAppClipHeaderImages: [
    "appClipDefaultExperienceLocalization",
  ],
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'> | the fields to include for returned resources of type appClipDefaultExperienceLocalizations (optional)
  fieldsAppClipDefaultExperienceLocalizations: [
    "appClipDefaultExperience",
  ],
  // Array<'appClipDefaultExperienceLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appClipDefaultExperienceLocalization",
  ],
};

apiInstance.appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipHeaderImages** | **Array<&#39;appClipDefaultExperienceLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appClipHeaderImages | (optional) defaults to undefined
 **fieldsAppClipDefaultExperienceLocalizations** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39; &#124; &#39;locale&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appClipDefaultExperienceLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;appClipDefaultExperienceLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipHeaderImageResponse**

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
**200** | Single AppClipHeaderImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperienceLocalizationsCreateInstance**
> AppClipDefaultExperienceLocalizationResponse appClipDefaultExperienceLocalizationsCreateInstance(appClipDefaultExperienceLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperienceLocalizationsApi(configuration);

let body:.AppClipDefaultExperienceLocalizationsApiAppClipDefaultExperienceLocalizationsCreateInstanceRequest = {
  // AppClipDefaultExperienceLocalizationCreateRequest | AppClipDefaultExperienceLocalization representation
  appClipDefaultExperienceLocalizationCreateRequest: {
    data: {
      type: "appClipDefaultExperienceLocalizations",
      attributes: {
        locale: "locale_example",
        subtitle: "subtitle_example",
      },
      relationships: {
        appClipDefaultExperience: {
          data: {
            type: "appClipDefaultExperiences",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appClipDefaultExperienceLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipDefaultExperienceLocalizationCreateRequest** | **AppClipDefaultExperienceLocalizationCreateRequest**| AppClipDefaultExperienceLocalization representation |


### Return type

**AppClipDefaultExperienceLocalizationResponse**

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
**201** | Single AppClipDefaultExperienceLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperienceLocalizationsDeleteInstance**
> void appClipDefaultExperienceLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperienceLocalizationsApi(configuration);

let body:.AppClipDefaultExperienceLocalizationsApiAppClipDefaultExperienceLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appClipDefaultExperienceLocalizationsDeleteInstance(body).then((data:any) => {
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

# **appClipDefaultExperienceLocalizationsGetInstance**
> AppClipDefaultExperienceLocalizationResponse appClipDefaultExperienceLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperienceLocalizationsApi(configuration);

let body:.AppClipDefaultExperienceLocalizationsApiAppClipDefaultExperienceLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'> | the fields to include for returned resources of type appClipDefaultExperienceLocalizations (optional)
  fieldsAppClipDefaultExperienceLocalizations: [
    "appClipDefaultExperience",
  ],
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage'> | comma-separated list of relationships to include (optional)
  include: [
    "appClipDefaultExperience",
  ],
  // Array<'appClipDefaultExperienceLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appClipHeaderImages (optional)
  fieldsAppClipHeaderImages: [
    "appClipDefaultExperienceLocalization",
  ],
};

apiInstance.appClipDefaultExperienceLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipDefaultExperienceLocalizations** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39; &#124; &#39;locale&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appClipDefaultExperienceLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppClipHeaderImages** | **Array<&#39;appClipDefaultExperienceLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appClipHeaderImages | (optional) defaults to undefined


### Return type

**AppClipDefaultExperienceLocalizationResponse**

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
**200** | Single AppClipDefaultExperienceLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperienceLocalizationsUpdateInstance**
> AppClipDefaultExperienceLocalizationResponse appClipDefaultExperienceLocalizationsUpdateInstance(appClipDefaultExperienceLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperienceLocalizationsApi(configuration);

let body:.AppClipDefaultExperienceLocalizationsApiAppClipDefaultExperienceLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipDefaultExperienceLocalizationUpdateRequest | AppClipDefaultExperienceLocalization representation
  appClipDefaultExperienceLocalizationUpdateRequest: {
    data: {
      type: "appClipDefaultExperienceLocalizations",
      id: "id_example",
      attributes: {
        subtitle: "subtitle_example",
      },
    },
  },
};

apiInstance.appClipDefaultExperienceLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipDefaultExperienceLocalizationUpdateRequest** | **AppClipDefaultExperienceLocalizationUpdateRequest**| AppClipDefaultExperienceLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipDefaultExperienceLocalizationResponse**

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
**200** | Single AppClipDefaultExperienceLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


