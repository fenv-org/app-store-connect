# .AppStoreVersionExperimentTreatmentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated) | **GET** /v1/appStoreVersionExperimentTreatments/{id}/appStoreVersionExperimentTreatmentLocalizations | 
[**appStoreVersionExperimentTreatmentsCreateInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsCreateInstance) | **POST** /v1/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentTreatmentsDeleteInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsDeleteInstance) | **DELETE** /v1/appStoreVersionExperimentTreatments/{id} | 
[**appStoreVersionExperimentTreatmentsGetInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsGetInstance) | **GET** /v1/appStoreVersionExperimentTreatments/{id} | 
[**appStoreVersionExperimentTreatmentsUpdateInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsUpdateInstance) | **PATCH** /v1/appStoreVersionExperimentTreatments/{id} | 


# **appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated**
> AppStoreVersionExperimentTreatmentLocalizationsResponse appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentsApiAppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'locale\' (optional)
  filterLocale: [
    "filter[locale]_example",
  ],
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'> | the fields to include for returned resources of type appScreenshotSets (optional)
  fieldsAppScreenshotSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'> | the fields to include for returned resources of type appPreviewSets (optional)
  fieldsAppPreviewSets: [
    "appCustomProductPageLocalization",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appScreenshotSets returned (when they are included) (optional)
  limitAppScreenshotSets: 1,
  // number | maximum number of related appPreviewSets returned (when they are included) (optional)
  limitAppPreviewSets: 1,
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment'> | comma-separated list of relationships to include (optional)
  include: [
    "appPreviewSets",
  ],
};

apiInstance.appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLocale** | **Array&lt;string&gt;** | filter by attribute \&#39;locale\&#39; | (optional) defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppScreenshotSets** | [**number**] | maximum number of related appScreenshotSets returned (when they are included) | (optional) defaults to undefined
 **limitAppPreviewSets** | [**number**] | maximum number of related appPreviewSets returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentTreatmentLocalizationsResponse**

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
**200** | List of AppStoreVersionExperimentTreatmentLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentTreatmentsCreateInstance**
> AppStoreVersionExperimentTreatmentResponse appStoreVersionExperimentTreatmentsCreateInstance(appStoreVersionExperimentTreatmentCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentsApiAppStoreVersionExperimentTreatmentsCreateInstanceRequest = {
  // AppStoreVersionExperimentTreatmentCreateRequest | AppStoreVersionExperimentTreatment representation
  appStoreVersionExperimentTreatmentCreateRequest: {
    data: {
      type: "appStoreVersionExperimentTreatments",
      attributes: {
        name: "name_example",
        appIconName: "appIconName_example",
      },
      relationships: {
        appStoreVersionExperiment: {
          data: {
            type: "appStoreVersionExperiments",
            id: "id_example",
          },
        },
        appStoreVersionExperimentV2: {
          data: {
            type: "appStoreVersionExperiments",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreVersionExperimentTreatmentsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentTreatmentCreateRequest** | **AppStoreVersionExperimentTreatmentCreateRequest**| AppStoreVersionExperimentTreatment representation |


### Return type

**AppStoreVersionExperimentTreatmentResponse**

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
**201** | Single AppStoreVersionExperimentTreatment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentTreatmentsDeleteInstance**
> void appStoreVersionExperimentTreatmentsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentsApiAppStoreVersionExperimentTreatmentsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionExperimentTreatmentsDeleteInstance(body).then((data:any) => {
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

# **appStoreVersionExperimentTreatmentsGetInstance**
> AppStoreVersionExperimentTreatmentResponse appStoreVersionExperimentTreatmentsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentsApiAppStoreVersionExperimentTreatmentsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // Array<'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersionExperiment",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatmentLocalizations: 1,
};

apiInstance.appStoreVersionExperimentTreatmentsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatmentLocalizations** | [**number**] | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentTreatmentResponse**

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
**200** | Single AppStoreVersionExperimentTreatment |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentTreatmentsUpdateInstance**
> AppStoreVersionExperimentTreatmentResponse appStoreVersionExperimentTreatmentsUpdateInstance(appStoreVersionExperimentTreatmentUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentsApiAppStoreVersionExperimentTreatmentsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionExperimentTreatmentUpdateRequest | AppStoreVersionExperimentTreatment representation
  appStoreVersionExperimentTreatmentUpdateRequest: {
    data: {
      type: "appStoreVersionExperimentTreatments",
      id: "id_example",
      attributes: {
        name: "name_example",
        appIconName: "appIconName_example",
      },
    },
  },
};

apiInstance.appStoreVersionExperimentTreatmentsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentTreatmentUpdateRequest** | **AppStoreVersionExperimentTreatmentUpdateRequest**| AppStoreVersionExperimentTreatment representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionExperimentTreatmentResponse**

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
**200** | Single AppStoreVersionExperimentTreatment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


