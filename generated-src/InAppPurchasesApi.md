# .InAppPurchasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchasesGetInstance**](InAppPurchasesApi.md#inAppPurchasesGetInstance) | **GET** /v1/inAppPurchases/{id} | 
[**inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/appStoreReviewScreenshot | 
[**inAppPurchasesV2ContentGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2ContentGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/content | 
[**inAppPurchasesV2CreateInstance**](InAppPurchasesApi.md#inAppPurchasesV2CreateInstance) | **POST** /v2/inAppPurchases | 
[**inAppPurchasesV2DeleteInstance**](InAppPurchasesApi.md#inAppPurchasesV2DeleteInstance) | **DELETE** /v2/inAppPurchases/{id} | 
[**inAppPurchasesV2GetInstance**](InAppPurchasesApi.md#inAppPurchasesV2GetInstance) | **GET** /v2/inAppPurchases/{id} | 
[**inAppPurchasesV2IapPriceScheduleGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2IapPriceScheduleGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/iapPriceSchedule | 
[**inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/inAppPurchaseAvailability | 
[**inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated**](InAppPurchasesApi.md#inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated) | **GET** /v2/inAppPurchases/{id}/inAppPurchaseLocalizations | 
[**inAppPurchasesV2PricePointsGetToManyRelated**](InAppPurchasesApi.md#inAppPurchasesV2PricePointsGetToManyRelated) | **GET** /v2/inAppPurchases/{id}/pricePoints | 
[**inAppPurchasesV2PromotedPurchaseGetToOneRelated**](InAppPurchasesApi.md#inAppPurchasesV2PromotedPurchaseGetToOneRelated) | **GET** /v2/inAppPurchases/{id}/promotedPurchase | 
[**inAppPurchasesV2UpdateInstance**](InAppPurchasesApi.md#inAppPurchasesV2UpdateInstance) | **PATCH** /v2/inAppPurchases/{id} | 


# **inAppPurchasesGetInstance**
> InAppPurchaseResponse inAppPurchasesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "apps",
  ],
  // Array<'apps'> | comma-separated list of relationships to include (optional)
  include: [
    "apps",
  ],
  // number | maximum number of related apps returned (when they are included) (optional)
  limitApps: 1,
};

apiInstance.inAppPurchasesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;apps&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;productId&#39; &#124; &#39;referenceName&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **include** | **Array<&#39;apps&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **limitApps** | [**number**] | maximum number of related apps returned (when they are included) | (optional) defaults to undefined


### Return type

**InAppPurchaseResponse**

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
**200** | Single InAppPurchase |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated**
> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2AppStoreReviewScreenshotGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'inAppPurchaseV2' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots (optional)
  fieldsInAppPurchaseAppStoreReviewScreenshots: [
    "assetDeliveryState",
  ],
  // Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // Array<'inAppPurchaseV2'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots | (optional) defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseAppStoreReviewScreenshotResponse**

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
**200** | Single InAppPurchaseAppStoreReviewScreenshot |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2ContentGetToOneRelated**
> InAppPurchaseContentResponse inAppPurchasesV2ContentGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2ContentGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // Array<'fileName' | 'fileSize' | 'inAppPurchaseV2' | 'lastModifiedDate' | 'url'> | the fields to include for returned resources of type inAppPurchaseContents (optional)
  fieldsInAppPurchaseContents: [
    "fileName",
  ],
  // Array<'inAppPurchaseV2'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchasesV2ContentGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **fieldsInAppPurchaseContents** | **Array<&#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type inAppPurchaseContents | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseContentResponse**

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
**200** | Single InAppPurchaseContent |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2CreateInstance**
> InAppPurchaseV2Response inAppPurchasesV2CreateInstance(inAppPurchaseV2CreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2CreateInstanceRequest = {
  // InAppPurchaseV2CreateRequest | InAppPurchase representation
  inAppPurchaseV2CreateRequest: {
    data: {
      type: "inAppPurchases",
      attributes: {
        name: "name_example",
        productId: "productId_example",
        inAppPurchaseType: "CONSUMABLE",
        reviewNote: "reviewNote_example",
        familySharable: true,
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.inAppPurchasesV2CreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseV2CreateRequest** | **InAppPurchaseV2CreateRequest**| InAppPurchase representation |


### Return type

**InAppPurchaseV2Response**

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
**201** | Single InAppPurchase |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2DeleteInstance**
> void inAppPurchasesV2DeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2DeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.inAppPurchasesV2DeleteInstance(body).then((data:any) => {
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

# **inAppPurchasesV2GetInstance**
> InAppPurchaseV2Response inAppPurchasesV2GetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2GetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // Array<'appStoreReviewScreenshot' | 'content' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'pricePoints' | 'promotedPurchase'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewScreenshot",
  ],
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'inAppPurchase'> | the fields to include for returned resources of type inAppPurchaseAvailabilities (optional)
  fieldsInAppPurchaseAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'inAppPurchaseV2' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots (optional)
  fieldsInAppPurchaseAppStoreReviewScreenshots: [
    "assetDeliveryState",
  ],
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
  ],
  // Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type inAppPurchasePricePoints (optional)
  fieldsInAppPurchasePricePoints: [
    "customerPrice",
  ],
  // Array<'description' | 'inAppPurchaseV2' | 'locale' | 'name' | 'state'> | the fields to include for returned resources of type inAppPurchaseLocalizations (optional)
  fieldsInAppPurchaseLocalizations: [
    "description",
  ],
  // Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'> | the fields to include for returned resources of type inAppPurchasePriceSchedules (optional)
  fieldsInAppPurchasePriceSchedules: [
    "automaticPrices",
  ],
  // Array<'fileName' | 'fileSize' | 'inAppPurchaseV2' | 'lastModifiedDate' | 'url'> | the fields to include for returned resources of type inAppPurchaseContents (optional)
  fieldsInAppPurchaseContents: [
    "fileName",
  ],
  // number | maximum number of related inAppPurchaseLocalizations returned (when they are included) (optional)
  limitInAppPurchaseLocalizations: 1,
  // number | maximum number of related pricePoints returned (when they are included) (optional)
  limitPricePoints: 1,
};

apiInstance.inAppPurchasesV2GetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;pricePoints&#39; &#124; &#39;promotedPurchase&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsInAppPurchaseAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;inAppPurchase&#39;>** | the fields to include for returned resources of type inAppPurchaseAvailabilities | (optional) defaults to undefined
 **fieldsInAppPurchaseAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots | (optional) defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **fieldsInAppPurchasePricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePricePoints | (optional) defaults to undefined
 **fieldsInAppPurchaseLocalizations** | **Array<&#39;description&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchaseLocalizations | (optional) defaults to undefined
 **fieldsInAppPurchasePriceSchedules** | **Array<&#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;inAppPurchase&#39; &#124; &#39;manualPrices&#39;>** | the fields to include for returned resources of type inAppPurchasePriceSchedules | (optional) defaults to undefined
 **fieldsInAppPurchaseContents** | **Array<&#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type inAppPurchaseContents | (optional) defaults to undefined
 **limitInAppPurchaseLocalizations** | [**number**] | maximum number of related inAppPurchaseLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitPricePoints** | [**number**] | maximum number of related pricePoints returned (when they are included) | (optional) defaults to undefined


### Return type

**InAppPurchaseV2Response**

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
**200** | Single InAppPurchase |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2IapPriceScheduleGetToOneRelated**
> InAppPurchasePriceScheduleResponse inAppPurchasesV2IapPriceScheduleGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2IapPriceScheduleGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type inAppPurchasePrices (optional)
  fieldsInAppPurchasePrices: [
    "endDate",
  ],
  // Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'> | the fields to include for returned resources of type inAppPurchasePriceSchedules (optional)
  fieldsInAppPurchasePriceSchedules: [
    "automaticPrices",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related manualPrices returned (when they are included) (optional)
  limitManualPrices: 1,
  // number | maximum number of related automaticPrices returned (when they are included) (optional)
  limitAutomaticPrices: 1,
  // Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'> | comma-separated list of relationships to include (optional)
  include: [
    "automaticPrices",
  ],
};

apiInstance.inAppPurchasesV2IapPriceScheduleGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchasePrices** | **Array<&#39;endDate&#39; &#124; &#39;inAppPurchasePricePoint&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePrices | (optional) defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **fieldsInAppPurchasePriceSchedules** | **Array<&#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;inAppPurchase&#39; &#124; &#39;manualPrices&#39;>** | the fields to include for returned resources of type inAppPurchasePriceSchedules | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitManualPrices** | [**number**] | maximum number of related manualPrices returned (when they are included) | (optional) defaults to undefined
 **limitAutomaticPrices** | [**number**] | maximum number of related automaticPrices returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;inAppPurchase&#39; &#124; &#39;manualPrices&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchasePriceScheduleResponse**

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
**200** | Single InAppPurchasePriceSchedule |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated**
> InAppPurchaseAvailabilityResponse inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'inAppPurchase'> | the fields to include for returned resources of type inAppPurchaseAvailabilities (optional)
  fieldsInAppPurchaseAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related availableTerritories returned (when they are included) (optional)
  limitAvailableTerritories: 1,
  // Array<'availableTerritories'> | comma-separated list of relationships to include (optional)
  include: [
    "availableTerritories",
  ],
};

apiInstance.inAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;inAppPurchase&#39;>** | the fields to include for returned resources of type inAppPurchaseAvailabilities | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAvailableTerritories** | [**number**] | maximum number of related availableTerritories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;availableTerritories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseAvailabilityResponse**

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
**200** | Single InAppPurchaseAvailability |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated**
> InAppPurchaseLocalizationsResponse inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'description' | 'inAppPurchaseV2' | 'locale' | 'name' | 'state'> | the fields to include for returned resources of type inAppPurchaseLocalizations (optional)
  fieldsInAppPurchaseLocalizations: [
    "description",
  ],
  // Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'inAppPurchaseV2'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseLocalizations** | **Array<&#39;description&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchaseLocalizations | (optional) defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseLocalizationsResponse**

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
**200** | List of InAppPurchaseLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2PricePointsGetToManyRelated**
> InAppPurchasePricePointsResponse inAppPurchasesV2PricePointsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2PricePointsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'priceTier\' (optional)
  filterPriceTier: [
    "filter[priceTier]_example",
  ],
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type inAppPurchasePricePoints (optional)
  fieldsInAppPurchasePricePoints: [
    "customerPrice",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "territory",
  ],
};

apiInstance.inAppPurchasesV2PricePointsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterPriceTier** | **Array&lt;string&gt;** | filter by attribute \&#39;priceTier\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsInAppPurchasePricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePricePoints | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchasePricePointsResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | List of InAppPurchasePricePoints |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2PromotedPurchaseGetToOneRelated**
> PromotedPurchaseResponse inAppPurchasesV2PromotedPurchaseGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2PromotedPurchaseGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type promotedPurchaseImages (optional)
  fieldsPromotedPurchaseImages: [
    "assetToken",
  ],
  // number | maximum number of related promotionImages returned (when they are included) (optional)
  limitPromotionImages: 1,
  // Array<'inAppPurchaseV2' | 'promotionImages' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchasesV2PromotedPurchaseGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **fieldsPromotedPurchaseImages** | **Array<&#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type promotedPurchaseImages | (optional) defaults to undefined
 **limitPromotionImages** | [**number**] | maximum number of related promotionImages returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**PromotedPurchaseResponse**

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
**200** | Single PromotedPurchase |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasesV2UpdateInstance**
> InAppPurchaseV2Response inAppPurchasesV2UpdateInstance(inAppPurchaseV2UpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasesApi(configuration);

let body:.InAppPurchasesApiInAppPurchasesV2UpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // InAppPurchaseV2UpdateRequest | InAppPurchase representation
  inAppPurchaseV2UpdateRequest: {
    data: {
      type: "inAppPurchases",
      id: "id_example",
      attributes: {
        name: "name_example",
        reviewNote: "reviewNote_example",
        familySharable: true,
      },
    },
  },
};

apiInstance.inAppPurchasesV2UpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseV2UpdateRequest** | **InAppPurchaseV2UpdateRequest**| InAppPurchase representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**InAppPurchaseV2Response**

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
**200** | Single InAppPurchase |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


