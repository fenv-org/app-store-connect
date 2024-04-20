# .SubscriptionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionsAppStoreReviewScreenshotGetToOneRelated**](SubscriptionsApi.md#subscriptionsAppStoreReviewScreenshotGetToOneRelated) | **GET** /v1/subscriptions/{id}/appStoreReviewScreenshot | 
[**subscriptionsCreateInstance**](SubscriptionsApi.md#subscriptionsCreateInstance) | **POST** /v1/subscriptions | 
[**subscriptionsDeleteInstance**](SubscriptionsApi.md#subscriptionsDeleteInstance) | **DELETE** /v1/subscriptions/{id} | 
[**subscriptionsGetInstance**](SubscriptionsApi.md#subscriptionsGetInstance) | **GET** /v1/subscriptions/{id} | 
[**subscriptionsIntroductoryOffersDeleteToManyRelationship**](SubscriptionsApi.md#subscriptionsIntroductoryOffersDeleteToManyRelationship) | **DELETE** /v1/subscriptions/{id}/relationships/introductoryOffers | 
[**subscriptionsIntroductoryOffersGetToManyRelated**](SubscriptionsApi.md#subscriptionsIntroductoryOffersGetToManyRelated) | **GET** /v1/subscriptions/{id}/introductoryOffers | 
[**subscriptionsIntroductoryOffersGetToManyRelationship**](SubscriptionsApi.md#subscriptionsIntroductoryOffersGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/introductoryOffers | 
[**subscriptionsOfferCodesGetToManyRelated**](SubscriptionsApi.md#subscriptionsOfferCodesGetToManyRelated) | **GET** /v1/subscriptions/{id}/offerCodes | 
[**subscriptionsPricePointsGetToManyRelated**](SubscriptionsApi.md#subscriptionsPricePointsGetToManyRelated) | **GET** /v1/subscriptions/{id}/pricePoints | 
[**subscriptionsPricesDeleteToManyRelationship**](SubscriptionsApi.md#subscriptionsPricesDeleteToManyRelationship) | **DELETE** /v1/subscriptions/{id}/relationships/prices | 
[**subscriptionsPricesGetToManyRelated**](SubscriptionsApi.md#subscriptionsPricesGetToManyRelated) | **GET** /v1/subscriptions/{id}/prices | 
[**subscriptionsPricesGetToManyRelationship**](SubscriptionsApi.md#subscriptionsPricesGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/prices | 
[**subscriptionsPromotedPurchaseGetToOneRelated**](SubscriptionsApi.md#subscriptionsPromotedPurchaseGetToOneRelated) | **GET** /v1/subscriptions/{id}/promotedPurchase | 
[**subscriptionsPromotionalOffersGetToManyRelated**](SubscriptionsApi.md#subscriptionsPromotionalOffersGetToManyRelated) | **GET** /v1/subscriptions/{id}/promotionalOffers | 
[**subscriptionsSubscriptionAvailabilityGetToOneRelated**](SubscriptionsApi.md#subscriptionsSubscriptionAvailabilityGetToOneRelated) | **GET** /v1/subscriptions/{id}/subscriptionAvailability | 
[**subscriptionsSubscriptionLocalizationsGetToManyRelated**](SubscriptionsApi.md#subscriptionsSubscriptionLocalizationsGetToManyRelated) | **GET** /v1/subscriptions/{id}/subscriptionLocalizations | 
[**subscriptionsUpdateInstance**](SubscriptionsApi.md#subscriptionsUpdateInstance) | **PATCH** /v1/subscriptions/{id} | 


# **subscriptionsAppStoreReviewScreenshotGetToOneRelated**
> SubscriptionAppStoreReviewScreenshotResponse subscriptionsAppStoreReviewScreenshotGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsAppStoreReviewScreenshotGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots (optional)
  fieldsSubscriptionAppStoreReviewScreenshots: [
    "assetDeliveryState",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "subscription",
  ],
};

apiInstance.subscriptionsAppStoreReviewScreenshotGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;subscription&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **include** | **Array<&#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionAppStoreReviewScreenshotResponse**

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
**200** | Single SubscriptionAppStoreReviewScreenshot |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsCreateInstance**
> SubscriptionResponse subscriptionsCreateInstance(subscriptionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsCreateInstanceRequest = {
  // SubscriptionCreateRequest | Subscription representation
  subscriptionCreateRequest: {
    data: {
      type: "subscriptions",
      attributes: {
        name: "name_example",
        productId: "productId_example",
        familySharable: true,
        subscriptionPeriod: "ONE_WEEK",
        reviewNote: "reviewNote_example",
        groupLevel: 1,
      },
      relationships: {
        group: {
          data: {
            type: "subscriptionGroups",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.subscriptionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionCreateRequest** | **SubscriptionCreateRequest**| Subscription representation |


### Return type

**SubscriptionResponse**

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
**201** | Single Subscription |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsDeleteInstance**
> void subscriptionsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionsDeleteInstance(body).then((data:any) => {
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

# **subscriptionsGetInstance**
> SubscriptionResponse subscriptionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'appStoreReviewScreenshot' | 'group' | 'introductoryOffers' | 'offerCodes' | 'prices' | 'promotedPurchase' | 'promotionalOffers' | 'subscriptionAvailability' | 'subscriptionLocalizations'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewScreenshot",
  ],
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
  ],
  // Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'> | the fields to include for returned resources of type subscriptionPricePoints (optional)
  fieldsSubscriptionPricePoints: [
    "customerPrice",
  ],
  // Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'> | the fields to include for returned resources of type subscriptionPromotionalOffers (optional)
  fieldsSubscriptionPromotionalOffers: [
    "duration",
  ],
  // Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'> | the fields to include for returned resources of type subscriptionOfferCodes (optional)
  fieldsSubscriptionOfferCodes: [
    "active",
  ],
  // Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots (optional)
  fieldsSubscriptionAppStoreReviewScreenshots: [
    "assetDeliveryState",
  ],
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'> | the fields to include for returned resources of type subscriptionAvailabilities (optional)
  fieldsSubscriptionAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionPrices (optional)
  fieldsSubscriptionPrices: [
    "preserveCurrentPrice",
  ],
  // Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionIntroductoryOffers (optional)
  fieldsSubscriptionIntroductoryOffers: [
    "duration",
  ],
  // Array<'description' | 'locale' | 'name' | 'state' | 'subscription'> | the fields to include for returned resources of type subscriptionLocalizations (optional)
  fieldsSubscriptionLocalizations: [
    "description",
  ],
  // number | maximum number of related introductoryOffers returned (when they are included) (optional)
  limitIntroductoryOffers: 1,
  // number | maximum number of related offerCodes returned (when they are included) (optional)
  limitOfferCodes: 1,
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
  // number | maximum number of related promotionalOffers returned (when they are included) (optional)
  limitPromotionalOffers: 1,
  // number | maximum number of related subscriptionLocalizations returned (when they are included) (optional)
  limitSubscriptionLocalizations: 1,
};

apiInstance.subscriptionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;group&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;offerCodes&#39; &#124; &#39;prices&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **fieldsSubscriptionPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;proceedsYear2&#39; &#124; &#39;subscription&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPricePoints | (optional) defaults to undefined
 **fieldsSubscriptionPromotionalOffers** | **Array<&#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerCode&#39; &#124; &#39;offerMode&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOffers | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodes** | **Array<&#39;active&#39; &#124; &#39;customCodes&#39; &#124; &#39;customerEligibilities&#39; &#124; &#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerEligibility&#39; &#124; &#39;offerMode&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39; &#124; &#39;totalNumberOfCodes&#39;>** | the fields to include for returned resources of type subscriptionOfferCodes | (optional) defaults to undefined
 **fieldsSubscriptionAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;subscription&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | (optional) defaults to undefined
 **fieldsSubscriptionAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionAvailabilities | (optional) defaults to undefined
 **fieldsSubscriptionPrices** | **Array<&#39;preserveCurrentPrice&#39; &#124; &#39;preserved&#39; &#124; &#39;startDate&#39; &#124; &#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPrices | (optional) defaults to undefined
 **fieldsSubscriptionIntroductoryOffers** | **Array<&#39;duration&#39; &#124; &#39;endDate&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerMode&#39; &#124; &#39;startDate&#39; &#124; &#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionIntroductoryOffers | (optional) defaults to undefined
 **fieldsSubscriptionLocalizations** | **Array<&#39;description&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionLocalizations | (optional) defaults to undefined
 **limitIntroductoryOffers** | [**number**] | maximum number of related introductoryOffers returned (when they are included) | (optional) defaults to undefined
 **limitOfferCodes** | [**number**] | maximum number of related offerCodes returned (when they are included) | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined
 **limitPromotionalOffers** | [**number**] | maximum number of related promotionalOffers returned (when they are included) | (optional) defaults to undefined
 **limitSubscriptionLocalizations** | [**number**] | maximum number of related subscriptionLocalizations returned (when they are included) | (optional) defaults to undefined


### Return type

**SubscriptionResponse**

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
**200** | Single Subscription |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsIntroductoryOffersDeleteToManyRelationship**
> void subscriptionsIntroductoryOffersDeleteToManyRelationship(subscriptionIntroductoryOffersLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsIntroductoryOffersDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionIntroductoryOffersLinkagesRequest | List of related linkages
  subscriptionIntroductoryOffersLinkagesRequest: {
    data: [
      {
        type: "subscriptionIntroductoryOffers",
        id: "id_example",
      },
    ],
  },
};

apiInstance.subscriptionsIntroductoryOffersDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionIntroductoryOffersLinkagesRequest** | **SubscriptionIntroductoryOffersLinkagesRequest**| List of related linkages |
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

# **subscriptionsIntroductoryOffersGetToManyRelated**
> SubscriptionIntroductoryOffersResponse subscriptionsIntroductoryOffersGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsIntroductoryOffersGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'> | the fields to include for returned resources of type subscriptionPricePoints (optional)
  fieldsSubscriptionPricePoints: [
    "customerPrice",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionIntroductoryOffers (optional)
  fieldsSubscriptionIntroductoryOffers: [
    "duration",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'subscription' | 'subscriptionPricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "subscription",
  ],
};

apiInstance.subscriptionsIntroductoryOffersGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsSubscriptionPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;proceedsYear2&#39; &#124; &#39;subscription&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPricePoints | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsSubscriptionIntroductoryOffers** | **Array<&#39;duration&#39; &#124; &#39;endDate&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerMode&#39; &#124; &#39;startDate&#39; &#124; &#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionIntroductoryOffers | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionIntroductoryOffersResponse**

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
**200** | List of SubscriptionIntroductoryOffers |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsIntroductoryOffersGetToManyRelationship**
> SubscriptionIntroductoryOffersLinkagesResponse subscriptionsIntroductoryOffersGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsIntroductoryOffersGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.subscriptionsIntroductoryOffersGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**SubscriptionIntroductoryOffersLinkagesResponse**

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

# **subscriptionsOfferCodesGetToManyRelated**
> SubscriptionOfferCodesResponse subscriptionsOfferCodesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsOfferCodesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by territory (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'> | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes (optional)
  fieldsSubscriptionOfferCodeCustomCodes: [
    "active",
  ],
  // Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'> | the fields to include for returned resources of type subscriptionOfferCodes (optional)
  fieldsSubscriptionOfferCodes: [
    "active",
  ],
  // Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'> | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes (optional)
  fieldsSubscriptionOfferCodeOneTimeUseCodes: [
    "active",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionOfferCodePrices (optional)
  fieldsSubscriptionOfferCodePrices: [
    "subscriptionPricePoint",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related oneTimeUseCodes returned (when they are included) (optional)
  limitOneTimeUseCodes: 1,
  // number | maximum number of related customCodes returned (when they are included) (optional)
  limitCustomCodes: 1,
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
  // Array<'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "customCodes",
  ],
};

apiInstance.subscriptionsOfferCodesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by territory | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodeCustomCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;customCode&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodes** | **Array<&#39;active&#39; &#124; &#39;customCodes&#39; &#124; &#39;customerEligibilities&#39; &#124; &#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerEligibility&#39; &#124; &#39;offerMode&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39; &#124; &#39;totalNumberOfCodes&#39;>** | the fields to include for returned resources of type subscriptionOfferCodes | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39; &#124; &#39;values&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodePrices** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionOfferCodePrices | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitOneTimeUseCodes** | [**number**] | maximum number of related oneTimeUseCodes returned (when they are included) | (optional) defaults to undefined
 **limitCustomCodes** | [**number**] | maximum number of related customCodes returned (when they are included) | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;customCodes&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodesResponse**

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
**200** | List of SubscriptionOfferCodes |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsPricePointsGetToManyRelated**
> SubscriptionPricePointsResponse subscriptionsPricePointsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsPricePointsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'> | the fields to include for returned resources of type subscriptionPricePoints (optional)
  fieldsSubscriptionPricePoints: [
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

apiInstance.subscriptionsPricePointsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsSubscriptionPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;proceedsYear2&#39; &#124; &#39;subscription&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPricePoints | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionPricePointsResponse**

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
**200** | List of SubscriptionPricePoints |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsPricesDeleteToManyRelationship**
> void subscriptionsPricesDeleteToManyRelationship(subscriptionPricesLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsPricesDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionPricesLinkagesRequest | List of related linkages
  subscriptionPricesLinkagesRequest: {
    data: [
      {
        type: "subscriptionPrices",
        id: "id_example",
      },
    ],
  },
};

apiInstance.subscriptionsPricesDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPricesLinkagesRequest** | **SubscriptionPricesLinkagesRequest**| List of related linkages |
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

# **subscriptionsPricesGetToManyRelated**
> SubscriptionPricesResponse subscriptionsPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsPricesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'subscriptionPricePoint\' (optional)
  filterSubscriptionPricePoint: [
    "filter[subscriptionPricePoint]_example",
  ],
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'> | the fields to include for returned resources of type subscriptionPricePoints (optional)
  fieldsSubscriptionPricePoints: [
    "customerPrice",
  ],
  // Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionPrices (optional)
  fieldsSubscriptionPrices: [
    "preserveCurrentPrice",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'subscriptionPricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "subscriptionPricePoint",
  ],
};

apiInstance.subscriptionsPricesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterSubscriptionPricePoint** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;subscriptionPricePoint\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsSubscriptionPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;proceedsYear2&#39; &#124; &#39;subscription&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPricePoints | (optional) defaults to undefined
 **fieldsSubscriptionPrices** | **Array<&#39;preserveCurrentPrice&#39; &#124; &#39;preserved&#39; &#124; &#39;startDate&#39; &#124; &#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPrices | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionPricesResponse**

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
**200** | List of SubscriptionPrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsPricesGetToManyRelationship**
> SubscriptionPricesLinkagesResponse subscriptionsPricesGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsPricesGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.subscriptionsPricesGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**SubscriptionPricesLinkagesResponse**

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

# **subscriptionsPromotedPurchaseGetToOneRelated**
> PromotedPurchaseResponse subscriptionsPromotedPurchaseGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsPromotedPurchaseGetToOneRelatedRequest = {
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

apiInstance.subscriptionsPromotedPurchaseGetToOneRelated(body).then((data:any) => {
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

# **subscriptionsPromotionalOffersGetToManyRelated**
> SubscriptionPromotionalOffersResponse subscriptionsPromotionalOffersGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsPromotionalOffersGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by territory (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'> | the fields to include for returned resources of type subscriptionPromotionalOffers (optional)
  fieldsSubscriptionPromotionalOffers: [
    "duration",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionPromotionalOfferPrices (optional)
  fieldsSubscriptionPromotionalOfferPrices: [
    "subscriptionPricePoint",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
  // Array<'prices' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "prices",
  ],
};

apiInstance.subscriptionsPromotionalOffersGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by territory | (optional) defaults to undefined
 **fieldsSubscriptionPromotionalOffers** | **Array<&#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerCode&#39; &#124; &#39;offerMode&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOffers | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsSubscriptionPromotionalOfferPrices** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOfferPrices | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;prices&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionPromotionalOffersResponse**

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
**200** | List of SubscriptionPromotionalOffers |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsSubscriptionAvailabilityGetToOneRelated**
> SubscriptionAvailabilityResponse subscriptionsSubscriptionAvailabilityGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsSubscriptionAvailabilityGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'> | the fields to include for returned resources of type subscriptionAvailabilities (optional)
  fieldsSubscriptionAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related availableTerritories returned (when they are included) (optional)
  limitAvailableTerritories: 1,
  // Array<'availableTerritories' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "availableTerritories",
  ],
};

apiInstance.subscriptionsSubscriptionAvailabilityGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionAvailabilities | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAvailableTerritories** | [**number**] | maximum number of related availableTerritories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;availableTerritories&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionAvailabilityResponse**

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
**200** | Single SubscriptionAvailability |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsSubscriptionLocalizationsGetToManyRelated**
> SubscriptionLocalizationsResponse subscriptionsSubscriptionLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsSubscriptionLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'description' | 'locale' | 'name' | 'state' | 'subscription'> | the fields to include for returned resources of type subscriptionLocalizations (optional)
  fieldsSubscriptionLocalizations: [
    "description",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "subscription",
  ],
};

apiInstance.subscriptionsSubscriptionLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsSubscriptionLocalizations** | **Array<&#39;description&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionLocalizationsResponse**

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
**200** | List of SubscriptionLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionsUpdateInstance**
> SubscriptionResponse subscriptionsUpdateInstance(subscriptionUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionsApi(configuration);

let body:.SubscriptionsApiSubscriptionsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionUpdateRequest | Subscription representation
  subscriptionUpdateRequest: {
    data: {
      type: "subscriptions",
      id: "id_example",
      attributes: {
        name: "name_example",
        familySharable: true,
        subscriptionPeriod: "ONE_WEEK",
        reviewNote: "reviewNote_example",
        groupLevel: 1,
      },
      relationships: {
        introductoryOffers: {
          data: [
            {
              type: "subscriptionIntroductoryOffers",
              id: "id_example",
            },
          ],
        },
        promotionalOffers: {
          data: [
            {
              type: "subscriptionPromotionalOffers",
              id: "id_example",
            },
          ],
        },
        prices: {
          data: [
            {
              type: "subscriptionPrices",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      null,
    ],
  },
};

apiInstance.subscriptionsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionUpdateRequest** | **SubscriptionUpdateRequest**| Subscription representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionResponse**

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
**200** | Single Subscription |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


