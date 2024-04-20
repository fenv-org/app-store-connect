# .AppPreviewSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPreviewSetsAppPreviewsGetToManyRelated**](AppPreviewSetsApi.md#appPreviewSetsAppPreviewsGetToManyRelated) | **GET** /v1/appPreviewSets/{id}/appPreviews | 
[**appPreviewSetsAppPreviewsGetToManyRelationship**](AppPreviewSetsApi.md#appPreviewSetsAppPreviewsGetToManyRelationship) | **GET** /v1/appPreviewSets/{id}/relationships/appPreviews | 
[**appPreviewSetsAppPreviewsReplaceToManyRelationship**](AppPreviewSetsApi.md#appPreviewSetsAppPreviewsReplaceToManyRelationship) | **PATCH** /v1/appPreviewSets/{id}/relationships/appPreviews | 
[**appPreviewSetsCreateInstance**](AppPreviewSetsApi.md#appPreviewSetsCreateInstance) | **POST** /v1/appPreviewSets | 
[**appPreviewSetsDeleteInstance**](AppPreviewSetsApi.md#appPreviewSetsDeleteInstance) | **DELETE** /v1/appPreviewSets/{id} | 
[**appPreviewSetsGetInstance**](AppPreviewSetsApi.md#appPreviewSetsGetInstance) | **GET** /v1/appPreviewSets/{id} | 


# **appPreviewSetsAppPreviewsGetToManyRelated**
> AppPreviewsResponse appPreviewSetsAppPreviewsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewSetsApi(configuration);

let body:.AppPreviewSetsApiAppPreviewSetsAppPreviewsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appPreviews (optional)
  fieldsAppPreviews: [
    "appPreviewSet",
  ],
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'> | the fields to include for returned resources of type appPreviewSets (optional)
  fieldsAppPreviewSets: [
    "appCustomProductPageLocalization",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appPreviewSet'> | comma-separated list of relationships to include (optional)
  include: [
    "appPreviewSet",
  ],
};

apiInstance.appPreviewSetsAppPreviewsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPreviews** | **Array<&#39;appPreviewSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;mimeType&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appPreviews | (optional) defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appPreviewSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPreviewsResponse**

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
**200** | List of AppPreviews |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPreviewSetsAppPreviewsGetToManyRelationship**
> AppPreviewSetAppPreviewsLinkagesResponse appPreviewSetsAppPreviewsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewSetsApi(configuration);

let body:.AppPreviewSetsApiAppPreviewSetsAppPreviewsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.appPreviewSetsAppPreviewsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AppPreviewSetAppPreviewsLinkagesResponse**

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

# **appPreviewSetsAppPreviewsReplaceToManyRelationship**
> void appPreviewSetsAppPreviewsReplaceToManyRelationship(appPreviewSetAppPreviewsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewSetsApi(configuration);

let body:.AppPreviewSetsApiAppPreviewSetsAppPreviewsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppPreviewSetAppPreviewsLinkagesRequest | List of related linkages
  appPreviewSetAppPreviewsLinkagesRequest: {
    data: [
      {
        type: "appPreviews",
        id: "id_example",
      },
    ],
  },
};

apiInstance.appPreviewSetsAppPreviewsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPreviewSetAppPreviewsLinkagesRequest** | **AppPreviewSetAppPreviewsLinkagesRequest**| List of related linkages |
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

# **appPreviewSetsCreateInstance**
> AppPreviewSetResponse appPreviewSetsCreateInstance(appPreviewSetCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewSetsApi(configuration);

let body:.AppPreviewSetsApiAppPreviewSetsCreateInstanceRequest = {
  // AppPreviewSetCreateRequest | AppPreviewSet representation
  appPreviewSetCreateRequest: {
    data: {
      type: "appPreviewSets",
      attributes: {
        previewType: "IPHONE_67",
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

apiInstance.appPreviewSetsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPreviewSetCreateRequest** | **AppPreviewSetCreateRequest**| AppPreviewSet representation |


### Return type

**AppPreviewSetResponse**

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
**201** | Single AppPreviewSet |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPreviewSetsDeleteInstance**
> void appPreviewSetsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewSetsApi(configuration);

let body:.AppPreviewSetsApiAppPreviewSetsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appPreviewSetsDeleteInstance(body).then((data:any) => {
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

# **appPreviewSetsGetInstance**
> AppPreviewSetResponse appPreviewSetsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewSetsApi(configuration);

let body:.AppPreviewSetsApiAppPreviewSetsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'> | the fields to include for returned resources of type appPreviewSets (optional)
  fieldsAppPreviewSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appPreviews (optional)
  fieldsAppPreviews: [
    "appPreviewSet",
  ],
  // number | maximum number of related appPreviews returned (when they are included) (optional)
  limitAppPreviews: 1,
};

apiInstance.appPreviewSetsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppPreviews** | **Array<&#39;appPreviewSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;mimeType&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appPreviews | (optional) defaults to undefined
 **limitAppPreviews** | [**number**] | maximum number of related appPreviews returned (when they are included) | (optional) defaults to undefined


### Return type

**AppPreviewSetResponse**

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
**200** | Single AppPreviewSet |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


