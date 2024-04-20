# .SubscriptionIntroductoryOffersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionIntroductoryOffersCreateInstance**](SubscriptionIntroductoryOffersApi.md#subscriptionIntroductoryOffersCreateInstance) | **POST** /v1/subscriptionIntroductoryOffers | 
[**subscriptionIntroductoryOffersDeleteInstance**](SubscriptionIntroductoryOffersApi.md#subscriptionIntroductoryOffersDeleteInstance) | **DELETE** /v1/subscriptionIntroductoryOffers/{id} | 
[**subscriptionIntroductoryOffersUpdateInstance**](SubscriptionIntroductoryOffersApi.md#subscriptionIntroductoryOffersUpdateInstance) | **PATCH** /v1/subscriptionIntroductoryOffers/{id} | 


# **subscriptionIntroductoryOffersCreateInstance**
> SubscriptionIntroductoryOfferResponse subscriptionIntroductoryOffersCreateInstance(subscriptionIntroductoryOfferCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionIntroductoryOffersApi(configuration);

let body:.SubscriptionIntroductoryOffersApiSubscriptionIntroductoryOffersCreateInstanceRequest = {
  // SubscriptionIntroductoryOfferCreateRequest | SubscriptionIntroductoryOffer representation
  subscriptionIntroductoryOfferCreateRequest: {
    data: {
      type: "subscriptionIntroductoryOffers",
      attributes: {
        startDate: new Date('1970-01-01').toISOString().split('T')[0];,
        endDate: new Date('1970-01-01').toISOString().split('T')[0];,
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
    included: [
      {
        type: "subscriptionPricePoints",
        id: "id_example",
      },
    ],
  },
};

apiInstance.subscriptionIntroductoryOffersCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionIntroductoryOfferCreateRequest** | **SubscriptionIntroductoryOfferCreateRequest**| SubscriptionIntroductoryOffer representation |


### Return type

**SubscriptionIntroductoryOfferResponse**

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
**201** | Single SubscriptionIntroductoryOffer |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionIntroductoryOffersDeleteInstance**
> void subscriptionIntroductoryOffersDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionIntroductoryOffersApi(configuration);

let body:.SubscriptionIntroductoryOffersApiSubscriptionIntroductoryOffersDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionIntroductoryOffersDeleteInstance(body).then((data:any) => {
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

# **subscriptionIntroductoryOffersUpdateInstance**
> SubscriptionIntroductoryOfferResponse subscriptionIntroductoryOffersUpdateInstance(subscriptionIntroductoryOfferUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionIntroductoryOffersApi(configuration);

let body:.SubscriptionIntroductoryOffersApiSubscriptionIntroductoryOffersUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionIntroductoryOfferUpdateRequest | SubscriptionIntroductoryOffer representation
  subscriptionIntroductoryOfferUpdateRequest: {
    data: {
      type: "subscriptionIntroductoryOffers",
      id: "id_example",
      attributes: {
        endDate: new Date('1970-01-01').toISOString().split('T')[0];,
      },
    },
  },
};

apiInstance.subscriptionIntroductoryOffersUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionIntroductoryOfferUpdateRequest** | **SubscriptionIntroductoryOfferUpdateRequest**| SubscriptionIntroductoryOffer representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionIntroductoryOfferResponse**

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
**200** | Single SubscriptionIntroductoryOffer |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


