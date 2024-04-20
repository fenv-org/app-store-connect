# .AppScreenshotSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appScreenshotSetsAppScreenshotsGetToManyRelated**](AppScreenshotSetsApi.md#appScreenshotSetsAppScreenshotsGetToManyRelated) | **GET** /v1/appScreenshotSets/{id}/appScreenshots | 
[**appScreenshotSetsAppScreenshotsGetToManyRelationship**](AppScreenshotSetsApi.md#appScreenshotSetsAppScreenshotsGetToManyRelationship) | **GET** /v1/appScreenshotSets/{id}/relationships/appScreenshots | 
[**appScreenshotSetsAppScreenshotsReplaceToManyRelationship**](AppScreenshotSetsApi.md#appScreenshotSetsAppScreenshotsReplaceToManyRelationship) | **PATCH** /v1/appScreenshotSets/{id}/relationships/appScreenshots | 
[**appScreenshotSetsCreateInstance**](AppScreenshotSetsApi.md#appScreenshotSetsCreateInstance) | **POST** /v1/appScreenshotSets | 
[**appScreenshotSetsDeleteInstance**](AppScreenshotSetsApi.md#appScreenshotSetsDeleteInstance) | **DELETE** /v1/appScreenshotSets/{id} | 
[**appScreenshotSetsGetInstance**](AppScreenshotSetsApi.md#appScreenshotSetsGetInstance) | **GET** /v1/appScreenshotSets/{id} | 


# **appScreenshotSetsAppScreenshotsGetToManyRelated**
> AppScreenshotsResponse appScreenshotSetsAppScreenshotsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotSetsApi(configuration);

let body:.AppScreenshotSetsApiAppScreenshotSetsAppScreenshotsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'> | the fields to include for returned resources of type appScreenshotSets (optional)
  fieldsAppScreenshotSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appScreenshots (optional)
  fieldsAppScreenshots: [
    "appScreenshotSet",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appScreenshotSet'> | comma-separated list of relationships to include (optional)
  include: [
    "appScreenshotSet",
  ],
};

apiInstance.appScreenshotSetsAppScreenshotsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **fieldsAppScreenshots** | **Array<&#39;appScreenshotSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appScreenshots | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appScreenshotSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppScreenshotsResponse**

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
**200** | List of AppScreenshots |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appScreenshotSetsAppScreenshotsGetToManyRelationship**
> AppScreenshotSetAppScreenshotsLinkagesResponse appScreenshotSetsAppScreenshotsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotSetsApi(configuration);

let body:.AppScreenshotSetsApiAppScreenshotSetsAppScreenshotsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.appScreenshotSetsAppScreenshotsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AppScreenshotSetAppScreenshotsLinkagesResponse**

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
**200** | List of related linkages |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appScreenshotSetsAppScreenshotsReplaceToManyRelationship**
> void appScreenshotSetsAppScreenshotsReplaceToManyRelationship(appScreenshotSetAppScreenshotsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotSetsApi(configuration);

let body:.AppScreenshotSetsApiAppScreenshotSetsAppScreenshotsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppScreenshotSetAppScreenshotsLinkagesRequest | List of related linkages
  appScreenshotSetAppScreenshotsLinkagesRequest: {
    data: [
      {
        type: "appScreenshots",
        id: "id_example",
      },
    ],
  },
};

apiInstance.appScreenshotSetsAppScreenshotsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appScreenshotSetAppScreenshotsLinkagesRequest** | **AppScreenshotSetAppScreenshotsLinkagesRequest**| List of related linkages |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appScreenshotSetsCreateInstance**
> AppScreenshotSetResponse appScreenshotSetsCreateInstance(appScreenshotSetCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotSetsApi(configuration);

let body:.AppScreenshotSetsApiAppScreenshotSetsCreateInstanceRequest = {
  // AppScreenshotSetCreateRequest | AppScreenshotSet representation
  appScreenshotSetCreateRequest: {
    data: {
      type: "appScreenshotSets",
      attributes: {
        screenshotDisplayType: "APP_IPHONE_67",
      },
      relationships: {
        appStoreVersionLocalization: {
          data: {
            type: "appStoreVersionLocalizations",
            id: "id_example",
          },
        },
        appCustomProductPageLocalization: {
          data: {
            type: "appCustomProductPageLocalizations",
            id: "id_example",
          },
        },
        appStoreVersionExperimentTreatmentLocalization: {
          data: {
            type: "appStoreVersionExperimentTreatmentLocalizations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appScreenshotSetsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appScreenshotSetCreateRequest** | **AppScreenshotSetCreateRequest**| AppScreenshotSet representation |


### Return type

**AppScreenshotSetResponse**

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
**201** | Single AppScreenshotSet |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appScreenshotSetsDeleteInstance**
> void appScreenshotSetsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotSetsApi(configuration);

let body:.AppScreenshotSetsApiAppScreenshotSetsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appScreenshotSetsDeleteInstance(body).then((data:any) => {
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

# **appScreenshotSetsGetInstance**
> AppScreenshotSetResponse appScreenshotSetsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotSetsApi(configuration);

let body:.AppScreenshotSetsApiAppScreenshotSetsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'> | the fields to include for returned resources of type appScreenshotSets (optional)
  fieldsAppScreenshotSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appScreenshots (optional)
  fieldsAppScreenshots: [
    "appScreenshotSet",
  ],
  // number | maximum number of related appScreenshots returned (when they are included) (optional)
  limitAppScreenshots: 1,
};

apiInstance.appScreenshotSetsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppScreenshots** | **Array<&#39;appScreenshotSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appScreenshots | (optional) defaults to undefined
 **limitAppScreenshots** | [**number**] | maximum number of related appScreenshots returned (when they are included) | (optional) defaults to undefined


### Return type

**AppScreenshotSetResponse**

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
**200** | Single AppScreenshotSet |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


