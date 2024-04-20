# .SubscriptionGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupsCreateInstance**](SubscriptionGroupsApi.md#subscriptionGroupsCreateInstance) | **POST** /v1/subscriptionGroups | 
[**subscriptionGroupsDeleteInstance**](SubscriptionGroupsApi.md#subscriptionGroupsDeleteInstance) | **DELETE** /v1/subscriptionGroups/{id} | 
[**subscriptionGroupsGetInstance**](SubscriptionGroupsApi.md#subscriptionGroupsGetInstance) | **GET** /v1/subscriptionGroups/{id} | 
[**subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated**](SubscriptionGroupsApi.md#subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated) | **GET** /v1/subscriptionGroups/{id}/subscriptionGroupLocalizations | 
[**subscriptionGroupsSubscriptionsGetToManyRelated**](SubscriptionGroupsApi.md#subscriptionGroupsSubscriptionsGetToManyRelated) | **GET** /v1/subscriptionGroups/{id}/subscriptions | 
[**subscriptionGroupsUpdateInstance**](SubscriptionGroupsApi.md#subscriptionGroupsUpdateInstance) | **PATCH** /v1/subscriptionGroups/{id} | 


# **subscriptionGroupsCreateInstance**
> SubscriptionGroupResponse subscriptionGroupsCreateInstance(subscriptionGroupCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupsApi(configuration);

let body:.SubscriptionGroupsApiSubscriptionGroupsCreateInstanceRequest = {
  // SubscriptionGroupCreateRequest | SubscriptionGroup representation
  subscriptionGroupCreateRequest: {
    data: {
      type: "subscriptionGroups",
      attributes: {
        referenceName: "referenceName_example",
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

apiInstance.subscriptionGroupsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionGroupCreateRequest** | **SubscriptionGroupCreateRequest**| SubscriptionGroup representation |


### Return type

**SubscriptionGroupResponse**

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
**201** | Single SubscriptionGroup |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGroupsDeleteInstance**
> void subscriptionGroupsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupsApi(configuration);

let body:.SubscriptionGroupsApiSubscriptionGroupsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionGroupsDeleteInstance(body).then((data:any) => {
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

# **subscriptionGroupsGetInstance**
> SubscriptionGroupResponse subscriptionGroupsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupsApi(configuration);

let body:.SubscriptionGroupsApiSubscriptionGroupsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'> | the fields to include for returned resources of type subscriptionGroups (optional)
  fieldsSubscriptionGroups: [
    "app",
  ],
  // Array<'subscriptionGroupLocalizations' | 'subscriptions'> | comma-separated list of relationships to include (optional)
  include: [
    "subscriptionGroupLocalizations",
  ],
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'> | the fields to include for returned resources of type subscriptionGroupLocalizations (optional)
  fieldsSubscriptionGroupLocalizations: [
    "customAppName",
  ],
  // number | maximum number of related subscriptionGroupLocalizations returned (when they are included) (optional)
  limitSubscriptionGroupLocalizations: 1,
  // number | maximum number of related subscriptions returned (when they are included) (optional)
  limitSubscriptions: 1,
};

apiInstance.subscriptionGroupsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionGroups** | **Array<&#39;app&#39; &#124; &#39;referenceName&#39; &#124; &#39;subscriptionGroupLocalizations&#39; &#124; &#39;subscriptions&#39;>** | the fields to include for returned resources of type subscriptionGroups | (optional) defaults to undefined
 **include** | **Array<&#39;subscriptionGroupLocalizations&#39; &#124; &#39;subscriptions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsSubscriptionGroupLocalizations** | **Array<&#39;customAppName&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionGroup&#39;>** | the fields to include for returned resources of type subscriptionGroupLocalizations | (optional) defaults to undefined
 **limitSubscriptionGroupLocalizations** | [**number**] | maximum number of related subscriptionGroupLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitSubscriptions** | [**number**] | maximum number of related subscriptions returned (when they are included) | (optional) defaults to undefined


### Return type

**SubscriptionGroupResponse**

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
**200** | Single SubscriptionGroup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated**
> SubscriptionGroupLocalizationsResponse subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupsApi(configuration);

let body:.SubscriptionGroupsApiSubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'> | the fields to include for returned resources of type subscriptionGroups (optional)
  fieldsSubscriptionGroups: [
    "app",
  ],
  // Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'> | the fields to include for returned resources of type subscriptionGroupLocalizations (optional)
  fieldsSubscriptionGroupLocalizations: [
    "customAppName",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'subscriptionGroup'> | comma-separated list of relationships to include (optional)
  include: [
    "subscriptionGroup",
  ],
};

apiInstance.subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionGroups** | **Array<&#39;app&#39; &#124; &#39;referenceName&#39; &#124; &#39;subscriptionGroupLocalizations&#39; &#124; &#39;subscriptions&#39;>** | the fields to include for returned resources of type subscriptionGroups | (optional) defaults to undefined
 **fieldsSubscriptionGroupLocalizations** | **Array<&#39;customAppName&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionGroup&#39;>** | the fields to include for returned resources of type subscriptionGroupLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;subscriptionGroup&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionGroupLocalizationsResponse**

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
**200** | List of SubscriptionGroupLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGroupsSubscriptionsGetToManyRelated**
> SubscriptionsResponse subscriptionGroupsSubscriptionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupsApi(configuration);

let body:.SubscriptionGroupsApiSubscriptionGroupsSubscriptionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'name\' (optional)
  filterName: [
    "filter[name]_example",
  ],
  // Array<string> | filter by attribute \'productId\' (optional)
  filterProductId: [
    "filter[productId]_example",
  ],
  // Array<'MISSING_METADATA' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'> | filter by attribute \'state\' (optional)
  filterState: [
    "MISSING_METADATA",
  ],
  // Array<'name' | '-name'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "name",
  ],
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
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
  // Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'> | the fields to include for returned resources of type subscriptions (optional)
  fieldsSubscriptions: [
    "appStoreReviewScreenshot",
  ],
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'> | the fields to include for returned resources of type subscriptionAvailabilities (optional)
  fieldsSubscriptionAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'> | the fields to include for returned resources of type subscriptionGroups (optional)
  fieldsSubscriptionGroups: [
    "app",
  ],
  // Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionIntroductoryOffers (optional)
  fieldsSubscriptionIntroductoryOffers: [
    "duration",
  ],
  // Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionPrices (optional)
  fieldsSubscriptionPrices: [
    "preserveCurrentPrice",
  ],
  // Array<'description' | 'locale' | 'name' | 'state' | 'subscription'> | the fields to include for returned resources of type subscriptionLocalizations (optional)
  fieldsSubscriptionLocalizations: [
    "description",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related subscriptionLocalizations returned (when they are included) (optional)
  limitSubscriptionLocalizations: 1,
  // number | maximum number of related introductoryOffers returned (when they are included) (optional)
  limitIntroductoryOffers: 1,
  // number | maximum number of related promotionalOffers returned (when they are included) (optional)
  limitPromotionalOffers: 1,
  // number | maximum number of related offerCodes returned (when they are included) (optional)
  limitOfferCodes: 1,
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
  // Array<'appStoreReviewScreenshot' | 'group' | 'introductoryOffers' | 'offerCodes' | 'prices' | 'promotedPurchase' | 'promotionalOffers' | 'subscriptionAvailability' | 'subscriptionLocalizations'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewScreenshot",
  ],
};

apiInstance.subscriptionGroupsSubscriptionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterName** | **Array&lt;string&gt;** | filter by attribute \&#39;name\&#39; | (optional) defaults to undefined
 **filterProductId** | **Array&lt;string&gt;** | filter by attribute \&#39;productId\&#39; | (optional) defaults to undefined
 **filterState** | **Array<&#39;MISSING_METADATA&#39; &#124; &#39;READY_TO_SUBMIT&#39; &#124; &#39;WAITING_FOR_REVIEW&#39; &#124; &#39;IN_REVIEW&#39; &#124; &#39;DEVELOPER_ACTION_NEEDED&#39; &#124; &#39;PENDING_BINARY_APPROVAL&#39; &#124; &#39;APPROVED&#39; &#124; &#39;DEVELOPER_REMOVED_FROM_SALE&#39; &#124; &#39;REMOVED_FROM_SALE&#39; &#124; &#39;REJECTED&#39;>** | filter by attribute \&#39;state\&#39; | (optional) defaults to undefined
 **sort** | **Array<&#39;name&#39; &#124; &#39;-name&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **fieldsSubscriptionPromotionalOffers** | **Array<&#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerCode&#39; &#124; &#39;offerMode&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOffers | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodes** | **Array<&#39;active&#39; &#124; &#39;customCodes&#39; &#124; &#39;customerEligibilities&#39; &#124; &#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerEligibility&#39; &#124; &#39;offerMode&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39; &#124; &#39;totalNumberOfCodes&#39;>** | the fields to include for returned resources of type subscriptionOfferCodes | (optional) defaults to undefined
 **fieldsSubscriptionAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;subscription&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | (optional) defaults to undefined
 **fieldsSubscriptions** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;familySharable&#39; &#124; &#39;group&#39; &#124; &#39;groupLevel&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;name&#39; &#124; &#39;offerCodes&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39; &#124; &#39;subscriptionPeriod&#39;>** | the fields to include for returned resources of type subscriptions | (optional) defaults to undefined
 **fieldsSubscriptionAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionAvailabilities | (optional) defaults to undefined
 **fieldsSubscriptionGroups** | **Array<&#39;app&#39; &#124; &#39;referenceName&#39; &#124; &#39;subscriptionGroupLocalizations&#39; &#124; &#39;subscriptions&#39;>** | the fields to include for returned resources of type subscriptionGroups | (optional) defaults to undefined
 **fieldsSubscriptionIntroductoryOffers** | **Array<&#39;duration&#39; &#124; &#39;endDate&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerMode&#39; &#124; &#39;startDate&#39; &#124; &#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionIntroductoryOffers | (optional) defaults to undefined
 **fieldsSubscriptionPrices** | **Array<&#39;preserveCurrentPrice&#39; &#124; &#39;preserved&#39; &#124; &#39;startDate&#39; &#124; &#39;subscription&#39; &#124; &#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPrices | (optional) defaults to undefined
 **fieldsSubscriptionLocalizations** | **Array<&#39;description&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitSubscriptionLocalizations** | [**number**] | maximum number of related subscriptionLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitIntroductoryOffers** | [**number**] | maximum number of related introductoryOffers returned (when they are included) | (optional) defaults to undefined
 **limitPromotionalOffers** | [**number**] | maximum number of related promotionalOffers returned (when they are included) | (optional) defaults to undefined
 **limitOfferCodes** | [**number**] | maximum number of related offerCodes returned (when they are included) | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewScreenshot&#39; &#124; &#39;group&#39; &#124; &#39;introductoryOffers&#39; &#124; &#39;offerCodes&#39; &#124; &#39;prices&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;promotionalOffers&#39; &#124; &#39;subscriptionAvailability&#39; &#124; &#39;subscriptionLocalizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionsResponse**

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
**200** | List of Subscriptions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGroupsUpdateInstance**
> SubscriptionGroupResponse subscriptionGroupsUpdateInstance(subscriptionGroupUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupsApi(configuration);

let body:.SubscriptionGroupsApiSubscriptionGroupsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionGroupUpdateRequest | SubscriptionGroup representation
  subscriptionGroupUpdateRequest: {
    data: {
      type: "subscriptionGroups",
      id: "id_example",
      attributes: {
        referenceName: "referenceName_example",
      },
    },
  },
};

apiInstance.subscriptionGroupsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionGroupUpdateRequest** | **SubscriptionGroupUpdateRequest**| SubscriptionGroup representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionGroupResponse**

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
**200** | Single SubscriptionGroup |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


