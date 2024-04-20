# .SubscriptionPromotionalOffersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPromotionalOffersCreateInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersCreateInstance) | **POST** /v1/subscriptionPromotionalOffers | 
[**subscriptionPromotionalOffersDeleteInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersDeleteInstance) | **DELETE** /v1/subscriptionPromotionalOffers/{id} | 
[**subscriptionPromotionalOffersGetInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersGetInstance) | **GET** /v1/subscriptionPromotionalOffers/{id} | 
[**subscriptionPromotionalOffersPricesGetToManyRelated**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersPricesGetToManyRelated) | **GET** /v1/subscriptionPromotionalOffers/{id}/prices | 
[**subscriptionPromotionalOffersUpdateInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersUpdateInstance) | **PATCH** /v1/subscriptionPromotionalOffers/{id} | 


# **subscriptionPromotionalOffersCreateInstance**
> SubscriptionPromotionalOfferResponse subscriptionPromotionalOffersCreateInstance(subscriptionPromotionalOfferCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPromotionalOffersApi(configuration);

let body:.SubscriptionPromotionalOffersApiSubscriptionPromotionalOffersCreateInstanceRequest = {
  // SubscriptionPromotionalOfferCreateRequest | SubscriptionPromotionalOffer representation
  subscriptionPromotionalOfferCreateRequest: {
    data: {
      type: "subscriptionPromotionalOffers",
      attributes: {
        name: "name_example",
        offerCode: "offerCode_example",
        duration: "ONE_DAY",
        offerMode: "PAY_AS_YOU_GO",
        numberOfPeriods: 1,
      },
      relationships: {
        subscription: {
          data: {
            type: "subscriptions",
            id: "id_example",
          },
        },
        prices: {
          data: [
            {
              type: "subscriptionPromotionalOfferPrices",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "subscriptionPromotionalOfferPrices",
        id: "id_example",
        relationships: {
          territory: {
            data: {
              type: "territories",
              id: "id_example",
            },
          },
          subscriptionPricePoint: {
            data: {
              type: "subscriptionPricePoints",
              id: "id_example",
            },
          },
        },
      },
    ],
  },
};

apiInstance.subscriptionPromotionalOffersCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPromotionalOfferCreateRequest** | **SubscriptionPromotionalOfferCreateRequest**| SubscriptionPromotionalOffer representation |


### Return type

**SubscriptionPromotionalOfferResponse**

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
**201** | Single SubscriptionPromotionalOffer |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionPromotionalOffersDeleteInstance**
> void subscriptionPromotionalOffersDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPromotionalOffersApi(configuration);

let body:.SubscriptionPromotionalOffersApiSubscriptionPromotionalOffersDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionPromotionalOffersDeleteInstance(body).then((data:any) => {
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

# **subscriptionPromotionalOffersGetInstance**
> SubscriptionPromotionalOfferResponse subscriptionPromotionalOffersGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPromotionalOffersApi(configuration);

let body:.SubscriptionPromotionalOffersApiSubscriptionPromotionalOffersGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'> | the fields to include for returned resources of type subscriptionPromotionalOffers (optional)
  fieldsSubscriptionPromotionalOffers: [
    "duration",
  ],
  // Array<'prices' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "prices",
  ],
  // Array<'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionPromotionalOfferPrices (optional)
  fieldsSubscriptionPromotionalOfferPrices: [
    "subscriptionPricePoint",
  ],
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
};

apiInstance.subscriptionPromotionalOffersGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionPromotionalOffers** | **Array<&#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerCode&#39; &#124; &#39;offerMode&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOffers | (optional) defaults to undefined
 **include** | **Array<&#39;prices&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsSubscriptionPromotionalOfferPrices** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOfferPrices | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined


### Return type

**SubscriptionPromotionalOfferResponse**

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
**200** | Single SubscriptionPromotionalOffer |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionPromotionalOffersPricesGetToManyRelated**
> SubscriptionPromotionalOfferPricesResponse subscriptionPromotionalOffersPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPromotionalOffersApi(configuration);

let body:.SubscriptionPromotionalOffersApiSubscriptionPromotionalOffersPricesGetToManyRelatedRequest = {
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
  // Array<'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionPromotionalOfferPrices (optional)
  fieldsSubscriptionPromotionalOfferPrices: [
    "subscriptionPricePoint",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'subscriptionPricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "subscriptionPricePoint",
  ],
};

apiInstance.subscriptionPromotionalOffersPricesGetToManyRelated(body).then((data:any) => {
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
 **fieldsSubscriptionPromotionalOfferPrices** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPromotionalOfferPrices | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionPromotionalOfferPricesResponse**

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
**200** | List of SubscriptionPromotionalOfferPrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionPromotionalOffersUpdateInstance**
> SubscriptionPromotionalOfferResponse subscriptionPromotionalOffersUpdateInstance(subscriptionPromotionalOfferUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPromotionalOffersApi(configuration);

let body:.SubscriptionPromotionalOffersApiSubscriptionPromotionalOffersUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionPromotionalOfferUpdateRequest | SubscriptionPromotionalOffer representation
  subscriptionPromotionalOfferUpdateRequest: {
    data: {
      type: "subscriptionPromotionalOffers",
      id: "id_example",
      relationships: {
        prices: {
          data: [
            {
              type: "subscriptionPromotionalOfferPrices",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "subscriptionPromotionalOfferPrices",
        id: "id_example",
        relationships: {
          territory: {
            data: {
              type: "territories",
              id: "id_example",
            },
          },
          subscriptionPricePoint: {
            data: {
              type: "subscriptionPricePoints",
              id: "id_example",
            },
          },
        },
      },
    ],
  },
};

apiInstance.subscriptionPromotionalOffersUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPromotionalOfferUpdateRequest** | **SubscriptionPromotionalOfferUpdateRequest**| SubscriptionPromotionalOffer representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionPromotionalOfferResponse**

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
**200** | Single SubscriptionPromotionalOffer |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


