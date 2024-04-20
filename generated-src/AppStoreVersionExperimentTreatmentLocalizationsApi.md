# .AppStoreVersionExperimentTreatmentLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appPreviewSets | 
[**appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appScreenshotSets | 
[**appStoreVersionExperimentTreatmentLocalizationsCreateInstance**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsCreateInstance) | **POST** /v1/appStoreVersionExperimentTreatmentLocalizations | 
[**appStoreVersionExperimentTreatmentLocalizationsDeleteInstance**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsDeleteInstance) | **DELETE** /v1/appStoreVersionExperimentTreatmentLocalizations/{id} | 
[**appStoreVersionExperimentTreatmentLocalizationsGetInstance**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsGetInstance) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id} | 


# **appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated**
> AppPreviewSetsResponse appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentLocalizationsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentLocalizationsApiAppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'IPHONE_67' | 'IPHONE_61' | 'IPHONE_65' | 'IPHONE_58' | 'IPHONE_55' | 'IPHONE_47' | 'IPHONE_40' | 'IPHONE_35' | 'IPAD_PRO_3GEN_129' | 'IPAD_PRO_3GEN_11' | 'IPAD_PRO_129' | 'IPAD_105' | 'IPAD_97' | 'DESKTOP' | 'APPLE_TV' | 'APPLE_VISION_PRO'> | filter by attribute \'previewType\' (optional)
  filterPreviewType: [
    "IPHONE_67",
  ],
  // Array<string> | filter by id(s) of related \'appCustomProductPageLocalization\' (optional)
  filterAppCustomProductPageLocalization: [
    "filter[appCustomProductPageLocalization]_example",
  ],
  // Array<string> | filter by id(s) of related \'appStoreVersionLocalization\' (optional)
  filterAppStoreVersionLocalization: [
    "filter[appStoreVersionLocalization]_example",
  ],
  // Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'> | the fields to include for returned resources of type appCustomProductPageLocalizations (optional)
  fieldsAppCustomProductPageLocalizations: [
    "appCustomProductPageVersion",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // Array<'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appPreviews (optional)
  fieldsAppPreviews: [
    "appPreviewSet",
  ],
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'> | the fields to include for returned resources of type appPreviewSets (optional)
  fieldsAppPreviewSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'> | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
  fieldsAppStoreVersionLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appPreviews returned (when they are included) (optional)
  limitAppPreviews: 1,
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPageLocalization",
  ],
};

apiInstance.appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterPreviewType** | **Array<&#39;IPHONE_67&#39; &#124; &#39;IPHONE_61&#39; &#124; &#39;IPHONE_65&#39; &#124; &#39;IPHONE_58&#39; &#124; &#39;IPHONE_55&#39; &#124; &#39;IPHONE_47&#39; &#124; &#39;IPHONE_40&#39; &#124; &#39;IPHONE_35&#39; &#124; &#39;IPAD_PRO_3GEN_129&#39; &#124; &#39;IPAD_PRO_3GEN_11&#39; &#124; &#39;IPAD_PRO_129&#39; &#124; &#39;IPAD_105&#39; &#124; &#39;IPAD_97&#39; &#124; &#39;DESKTOP&#39; &#124; &#39;APPLE_TV&#39; &#124; &#39;APPLE_VISION_PRO&#39;>** | filter by attribute \&#39;previewType\&#39; | (optional) defaults to undefined
 **filterAppCustomProductPageLocalization** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;appCustomProductPageLocalization\&#39; | (optional) defaults to undefined
 **filterAppStoreVersionLocalization** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;appStoreVersionLocalization\&#39; | (optional) defaults to undefined
 **fieldsAppCustomProductPageLocalizations** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;locale&#39; &#124; &#39;promotionalText&#39;>** | the fields to include for returned resources of type appCustomProductPageLocalizations | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **fieldsAppPreviews** | **Array<&#39;appPreviewSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;mimeType&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appPreviews | (optional) defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **fieldsAppStoreVersionLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;description&#39; &#124; &#39;keywords&#39; &#124; &#39;locale&#39; &#124; &#39;marketingUrl&#39; &#124; &#39;promotionalText&#39; &#124; &#39;supportUrl&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type appStoreVersionLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppPreviews** | [**number**] | maximum number of related appPreviews returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPreviewSetsResponse**

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
**200** | List of AppPreviewSets |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated**
> AppScreenshotSetsResponse appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentLocalizationsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentLocalizationsApiAppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'APP_IPHONE_67' | 'APP_IPHONE_61' | 'APP_IPHONE_65' | 'APP_IPHONE_58' | 'APP_IPHONE_55' | 'APP_IPHONE_47' | 'APP_IPHONE_40' | 'APP_IPHONE_35' | 'APP_IPAD_PRO_3GEN_129' | 'APP_IPAD_PRO_3GEN_11' | 'APP_IPAD_PRO_129' | 'APP_IPAD_105' | 'APP_IPAD_97' | 'APP_DESKTOP' | 'APP_WATCH_ULTRA' | 'APP_WATCH_SERIES_7' | 'APP_WATCH_SERIES_4' | 'APP_WATCH_SERIES_3' | 'APP_APPLE_TV' | 'APP_APPLE_VISION_PRO' | 'IMESSAGE_APP_IPHONE_67' | 'IMESSAGE_APP_IPHONE_61' | 'IMESSAGE_APP_IPHONE_65' | 'IMESSAGE_APP_IPHONE_58' | 'IMESSAGE_APP_IPHONE_55' | 'IMESSAGE_APP_IPHONE_47' | 'IMESSAGE_APP_IPHONE_40' | 'IMESSAGE_APP_IPAD_PRO_3GEN_129' | 'IMESSAGE_APP_IPAD_PRO_3GEN_11' | 'IMESSAGE_APP_IPAD_PRO_129' | 'IMESSAGE_APP_IPAD_105' | 'IMESSAGE_APP_IPAD_97'> | filter by attribute \'screenshotDisplayType\' (optional)
  filterScreenshotDisplayType: [
    "APP_IPHONE_67",
  ],
  // Array<string> | filter by id(s) of related \'appCustomProductPageLocalization\' (optional)
  filterAppCustomProductPageLocalization: [
    "filter[appCustomProductPageLocalization]_example",
  ],
  // Array<string> | filter by id(s) of related \'appStoreVersionLocalization\' (optional)
  filterAppStoreVersionLocalization: [
    "filter[appStoreVersionLocalization]_example",
  ],
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'> | the fields to include for returned resources of type appScreenshotSets (optional)
  fieldsAppScreenshotSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'> | the fields to include for returned resources of type appCustomProductPageLocalizations (optional)
  fieldsAppCustomProductPageLocalizations: [
    "appCustomProductPageVersion",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // Array<'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appScreenshots (optional)
  fieldsAppScreenshots: [
    "appScreenshotSet",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'> | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
  fieldsAppStoreVersionLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appScreenshots returned (when they are included) (optional)
  limitAppScreenshots: 1,
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPageLocalization",
  ],
};

apiInstance.appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterScreenshotDisplayType** | **Array<&#39;APP_IPHONE_67&#39; &#124; &#39;APP_IPHONE_61&#39; &#124; &#39;APP_IPHONE_65&#39; &#124; &#39;APP_IPHONE_58&#39; &#124; &#39;APP_IPHONE_55&#39; &#124; &#39;APP_IPHONE_47&#39; &#124; &#39;APP_IPHONE_40&#39; &#124; &#39;APP_IPHONE_35&#39; &#124; &#39;APP_IPAD_PRO_3GEN_129&#39; &#124; &#39;APP_IPAD_PRO_3GEN_11&#39; &#124; &#39;APP_IPAD_PRO_129&#39; &#124; &#39;APP_IPAD_105&#39; &#124; &#39;APP_IPAD_97&#39; &#124; &#39;APP_DESKTOP&#39; &#124; &#39;APP_WATCH_ULTRA&#39; &#124; &#39;APP_WATCH_SERIES_7&#39; &#124; &#39;APP_WATCH_SERIES_4&#39; &#124; &#39;APP_WATCH_SERIES_3&#39; &#124; &#39;APP_APPLE_TV&#39; &#124; &#39;APP_APPLE_VISION_PRO&#39; &#124; &#39;IMESSAGE_APP_IPHONE_67&#39; &#124; &#39;IMESSAGE_APP_IPHONE_61&#39; &#124; &#39;IMESSAGE_APP_IPHONE_65&#39; &#124; &#39;IMESSAGE_APP_IPHONE_58&#39; &#124; &#39;IMESSAGE_APP_IPHONE_55&#39; &#124; &#39;IMESSAGE_APP_IPHONE_47&#39; &#124; &#39;IMESSAGE_APP_IPHONE_40&#39; &#124; &#39;IMESSAGE_APP_IPAD_PRO_3GEN_129&#39; &#124; &#39;IMESSAGE_APP_IPAD_PRO_3GEN_11&#39; &#124; &#39;IMESSAGE_APP_IPAD_PRO_129&#39; &#124; &#39;IMESSAGE_APP_IPAD_105&#39; &#124; &#39;IMESSAGE_APP_IPAD_97&#39;>** | filter by attribute \&#39;screenshotDisplayType\&#39; | (optional) defaults to undefined
 **filterAppCustomProductPageLocalization** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;appCustomProductPageLocalization\&#39; | (optional) defaults to undefined
 **filterAppStoreVersionLocalization** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;appStoreVersionLocalization\&#39; | (optional) defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **fieldsAppCustomProductPageLocalizations** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;locale&#39; &#124; &#39;promotionalText&#39;>** | the fields to include for returned resources of type appCustomProductPageLocalizations | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **fieldsAppScreenshots** | **Array<&#39;appScreenshotSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appScreenshots | (optional) defaults to undefined
 **fieldsAppStoreVersionLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;description&#39; &#124; &#39;keywords&#39; &#124; &#39;locale&#39; &#124; &#39;marketingUrl&#39; &#124; &#39;promotionalText&#39; &#124; &#39;supportUrl&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type appStoreVersionLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppScreenshots** | [**number**] | maximum number of related appScreenshots returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppScreenshotSetsResponse**

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
**200** | List of AppScreenshotSets |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentTreatmentLocalizationsCreateInstance**
> AppStoreVersionExperimentTreatmentLocalizationResponse appStoreVersionExperimentTreatmentLocalizationsCreateInstance(appStoreVersionExperimentTreatmentLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentLocalizationsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentLocalizationsApiAppStoreVersionExperimentTreatmentLocalizationsCreateInstanceRequest = {
  // AppStoreVersionExperimentTreatmentLocalizationCreateRequest | AppStoreVersionExperimentTreatmentLocalization representation
  appStoreVersionExperimentTreatmentLocalizationCreateRequest: {
    data: {
      type: "appStoreVersionExperimentTreatmentLocalizations",
      attributes: {
        locale: "locale_example",
      },
      relationships: {
        appStoreVersionExperimentTreatment: {
          data: {
            type: "appStoreVersionExperimentTreatments",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreVersionExperimentTreatmentLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentTreatmentLocalizationCreateRequest** | **AppStoreVersionExperimentTreatmentLocalizationCreateRequest**| AppStoreVersionExperimentTreatmentLocalization representation |


### Return type

**AppStoreVersionExperimentTreatmentLocalizationResponse**

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
**201** | Single AppStoreVersionExperimentTreatmentLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentTreatmentLocalizationsDeleteInstance**
> void appStoreVersionExperimentTreatmentLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentLocalizationsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentLocalizationsApiAppStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionExperimentTreatmentLocalizationsDeleteInstance(body).then((data:any) => {
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

# **appStoreVersionExperimentTreatmentLocalizationsGetInstance**
> AppStoreVersionExperimentTreatmentLocalizationResponse appStoreVersionExperimentTreatmentLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentTreatmentLocalizationsApi(configuration);

let body:.AppStoreVersionExperimentTreatmentLocalizationsApiAppStoreVersionExperimentTreatmentLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment'> | comma-separated list of relationships to include (optional)
  include: [
    "appPreviewSets",
  ],
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'> | the fields to include for returned resources of type appScreenshotSets (optional)
  fieldsAppScreenshotSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'> | the fields to include for returned resources of type appPreviewSets (optional)
  fieldsAppPreviewSets: [
    "appCustomProductPageLocalization",
  ],
  // number | maximum number of related appPreviewSets returned (when they are included) (optional)
  limitAppPreviewSets: 1,
  // number | maximum number of related appScreenshotSets returned (when they are included) (optional)
  limitAppScreenshotSets: 1,
};

apiInstance.appStoreVersionExperimentTreatmentLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **limitAppPreviewSets** | [**number**] | maximum number of related appPreviewSets returned (when they are included) | (optional) defaults to undefined
 **limitAppScreenshotSets** | [**number**] | maximum number of related appScreenshotSets returned (when they are included) | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentTreatmentLocalizationResponse**

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
**200** | Single AppStoreVersionExperimentTreatmentLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


