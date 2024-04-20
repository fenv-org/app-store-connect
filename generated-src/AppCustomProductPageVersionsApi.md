# .AppCustomProductPageVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated) | **GET** /v1/appCustomProductPageVersions/{id}/appCustomProductPageLocalizations | 
[**appCustomProductPageVersionsCreateInstance**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsCreateInstance) | **POST** /v1/appCustomProductPageVersions | 
[**appCustomProductPageVersionsGetInstance**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsGetInstance) | **GET** /v1/appCustomProductPageVersions/{id} | 


# **appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated**
> AppCustomProductPageLocalizationsResponse appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPageVersionsApi(configuration);

let body:.AppCustomProductPageVersionsApiAppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest = {
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
  // Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'> | the fields to include for returned resources of type appCustomProductPageLocalizations (optional)
  fieldsAppCustomProductPageLocalizations: [
    "appCustomProductPageVersion",
  ],
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'> | the fields to include for returned resources of type appCustomProductPageVersions (optional)
  fieldsAppCustomProductPageVersions: [
    "appCustomProductPage",
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
  // Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPageVersion",
  ],
};

apiInstance.appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLocale** | **Array&lt;string&gt;** | filter by attribute \&#39;locale\&#39; | (optional) defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **fieldsAppCustomProductPageLocalizations** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;locale&#39; &#124; &#39;promotionalText&#39;>** | the fields to include for returned resources of type appCustomProductPageLocalizations | (optional) defaults to undefined
 **fieldsAppCustomProductPageVersions** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39; &#124; &#39;state&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appCustomProductPageVersions | (optional) defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppScreenshotSets** | [**number**] | maximum number of related appScreenshotSets returned (when they are included) | (optional) defaults to undefined
 **limitAppPreviewSets** | [**number**] | maximum number of related appPreviewSets returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppCustomProductPageLocalizationsResponse**

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
**200** | List of AppCustomProductPageLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCustomProductPageVersionsCreateInstance**
> AppCustomProductPageVersionResponse appCustomProductPageVersionsCreateInstance(appCustomProductPageVersionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPageVersionsApi(configuration);

let body:.AppCustomProductPageVersionsApiAppCustomProductPageVersionsCreateInstanceRequest = {
  // AppCustomProductPageVersionCreateRequest | AppCustomProductPageVersion representation
  appCustomProductPageVersionCreateRequest: {
    data: {
      type: "appCustomProductPageVersions",
      relationships: {
        appCustomProductPage: {
          data: {
            type: "appCustomProductPages",
            id: "id_example",
          },
        },
        appCustomProductPageLocalizations: {
          data: [
            {
              type: "appCustomProductPageLocalizations",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.appCustomProductPageVersionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appCustomProductPageVersionCreateRequest** | **AppCustomProductPageVersionCreateRequest**| AppCustomProductPageVersion representation |


### Return type

**AppCustomProductPageVersionResponse**

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
**201** | Single AppCustomProductPageVersion |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCustomProductPageVersionsGetInstance**
> AppCustomProductPageVersionResponse appCustomProductPageVersionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPageVersionsApi(configuration);

let body:.AppCustomProductPageVersionsApiAppCustomProductPageVersionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'> | the fields to include for returned resources of type appCustomProductPageVersions (optional)
  fieldsAppCustomProductPageVersions: [
    "appCustomProductPage",
  ],
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPage",
  ],
  // Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'> | the fields to include for returned resources of type appCustomProductPageLocalizations (optional)
  fieldsAppCustomProductPageLocalizations: [
    "appCustomProductPageVersion",
  ],
  // number | maximum number of related appCustomProductPageLocalizations returned (when they are included) (optional)
  limitAppCustomProductPageLocalizations: 1,
};

apiInstance.appCustomProductPageVersionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCustomProductPageVersions** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39; &#124; &#39;state&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appCustomProductPageVersions | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppCustomProductPageLocalizations** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;locale&#39; &#124; &#39;promotionalText&#39;>** | the fields to include for returned resources of type appCustomProductPageLocalizations | (optional) defaults to undefined
 **limitAppCustomProductPageLocalizations** | [**number**] | maximum number of related appCustomProductPageLocalizations returned (when they are included) | (optional) defaults to undefined


### Return type

**AppCustomProductPageVersionResponse**

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
**200** | Single AppCustomProductPageVersion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


