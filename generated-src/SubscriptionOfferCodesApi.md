# .SubscriptionOfferCodesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionOfferCodesCreateInstance**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesCreateInstance) | **POST** /v1/subscriptionOfferCodes | 
[**subscriptionOfferCodesCustomCodesGetToManyRelated**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesCustomCodesGetToManyRelated) | **GET** /v1/subscriptionOfferCodes/{id}/customCodes | 
[**subscriptionOfferCodesGetInstance**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesGetInstance) | **GET** /v1/subscriptionOfferCodes/{id} | 
[**subscriptionOfferCodesOneTimeUseCodesGetToManyRelated**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesOneTimeUseCodesGetToManyRelated) | **GET** /v1/subscriptionOfferCodes/{id}/oneTimeUseCodes | 
[**subscriptionOfferCodesPricesGetToManyRelated**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesPricesGetToManyRelated) | **GET** /v1/subscriptionOfferCodes/{id}/prices | 
[**subscriptionOfferCodesUpdateInstance**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesUpdateInstance) | **PATCH** /v1/subscriptionOfferCodes/{id} | 


# **subscriptionOfferCodesCreateInstance**
> SubscriptionOfferCodeResponse subscriptionOfferCodesCreateInstance(subscriptionOfferCodeCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodesApi(configuration);

let body:.SubscriptionOfferCodesApiSubscriptionOfferCodesCreateInstanceRequest = {
  // SubscriptionOfferCodeCreateRequest | SubscriptionOfferCode representation
  subscriptionOfferCodeCreateRequest: {
    data: {
      type: "subscriptionOfferCodes",
      attributes: {
        name: "name_example",
        customerEligibilities: [
          "NEW",
        ],
        offerEligibility: "STACK_WITH_INTRO_OFFERS",
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
              type: "subscriptionOfferCodePrices",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "subscriptionOfferCodePrices",
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

apiInstance.subscriptionOfferCodesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionOfferCodeCreateRequest** | **SubscriptionOfferCodeCreateRequest**| SubscriptionOfferCode representation |


### Return type

**SubscriptionOfferCodeResponse**

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
**201** | Single SubscriptionOfferCode |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodesCustomCodesGetToManyRelated**
> SubscriptionOfferCodeCustomCodesResponse subscriptionOfferCodesCustomCodesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodesApi(configuration);

let body:.SubscriptionOfferCodesApiSubscriptionOfferCodesCustomCodesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'> | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes (optional)
  fieldsSubscriptionOfferCodeCustomCodes: [
    "active",
  ],
  // Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'> | the fields to include for returned resources of type subscriptionOfferCodes (optional)
  fieldsSubscriptionOfferCodes: [
    "active",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'offerCode'> | comma-separated list of relationships to include (optional)
  include: [
    "offerCode",
  ],
};

apiInstance.subscriptionOfferCodesCustomCodesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionOfferCodeCustomCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;customCode&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodes** | **Array<&#39;active&#39; &#124; &#39;customCodes&#39; &#124; &#39;customerEligibilities&#39; &#124; &#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerEligibility&#39; &#124; &#39;offerMode&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39; &#124; &#39;totalNumberOfCodes&#39;>** | the fields to include for returned resources of type subscriptionOfferCodes | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;offerCode&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodeCustomCodesResponse**

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
**200** | List of SubscriptionOfferCodeCustomCodes |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodesGetInstance**
> SubscriptionOfferCodeResponse subscriptionOfferCodesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodesApi(configuration);

let body:.SubscriptionOfferCodesApiSubscriptionOfferCodesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'> | the fields to include for returned resources of type subscriptionOfferCodes (optional)
  fieldsSubscriptionOfferCodes: [
    "active",
  ],
  // Array<'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "customCodes",
  ],
  // Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'> | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes (optional)
  fieldsSubscriptionOfferCodeCustomCodes: [
    "active",
  ],
  // Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'> | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes (optional)
  fieldsSubscriptionOfferCodeOneTimeUseCodes: [
    "active",
  ],
  // Array<'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionOfferCodePrices (optional)
  fieldsSubscriptionOfferCodePrices: [
    "subscriptionPricePoint",
  ],
  // number | maximum number of related customCodes returned (when they are included) (optional)
  limitCustomCodes: 1,
  // number | maximum number of related oneTimeUseCodes returned (when they are included) (optional)
  limitOneTimeUseCodes: 1,
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
};

apiInstance.subscriptionOfferCodesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionOfferCodes** | **Array<&#39;active&#39; &#124; &#39;customCodes&#39; &#124; &#39;customerEligibilities&#39; &#124; &#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerEligibility&#39; &#124; &#39;offerMode&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39; &#124; &#39;totalNumberOfCodes&#39;>** | the fields to include for returned resources of type subscriptionOfferCodes | (optional) defaults to undefined
 **include** | **Array<&#39;customCodes&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodeCustomCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;customCode&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39; &#124; &#39;values&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodePrices** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionOfferCodePrices | (optional) defaults to undefined
 **limitCustomCodes** | [**number**] | maximum number of related customCodes returned (when they are included) | (optional) defaults to undefined
 **limitOneTimeUseCodes** | [**number**] | maximum number of related oneTimeUseCodes returned (when they are included) | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodeResponse**

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
**200** | Single SubscriptionOfferCode |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodesOneTimeUseCodesGetToManyRelated**
> SubscriptionOfferCodeOneTimeUseCodesResponse subscriptionOfferCodesOneTimeUseCodesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodesApi(configuration);

let body:.SubscriptionOfferCodesApiSubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'> | the fields to include for returned resources of type subscriptionOfferCodes (optional)
  fieldsSubscriptionOfferCodes: [
    "active",
  ],
  // Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'> | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes (optional)
  fieldsSubscriptionOfferCodeOneTimeUseCodes: [
    "active",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'offerCode'> | comma-separated list of relationships to include (optional)
  include: [
    "offerCode",
  ],
};

apiInstance.subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionOfferCodes** | **Array<&#39;active&#39; &#124; &#39;customCodes&#39; &#124; &#39;customerEligibilities&#39; &#124; &#39;duration&#39; &#124; &#39;name&#39; &#124; &#39;numberOfPeriods&#39; &#124; &#39;offerEligibility&#39; &#124; &#39;offerMode&#39; &#124; &#39;oneTimeUseCodes&#39; &#124; &#39;prices&#39; &#124; &#39;subscription&#39; &#124; &#39;totalNumberOfCodes&#39;>** | the fields to include for returned resources of type subscriptionOfferCodes | (optional) defaults to undefined
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39; &#124; &#39;values&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;offerCode&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodeOneTimeUseCodesResponse**

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
**200** | List of SubscriptionOfferCodeOneTimeUseCodes |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodesPricesGetToManyRelated**
> SubscriptionOfferCodePricesResponse subscriptionOfferCodesPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodesApi(configuration);

let body:.SubscriptionOfferCodesApiSubscriptionOfferCodesPricesGetToManyRelatedRequest = {
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
  // Array<'subscriptionPricePoint' | 'territory'> | the fields to include for returned resources of type subscriptionOfferCodePrices (optional)
  fieldsSubscriptionOfferCodePrices: [
    "subscriptionPricePoint",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'subscriptionPricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "subscriptionPricePoint",
  ],
};

apiInstance.subscriptionOfferCodesPricesGetToManyRelated(body).then((data:any) => {
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
 **fieldsSubscriptionOfferCodePrices** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionOfferCodePrices | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;subscriptionPricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodePricesResponse**

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
**200** | List of SubscriptionOfferCodePrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodesUpdateInstance**
> SubscriptionOfferCodeResponse subscriptionOfferCodesUpdateInstance(subscriptionOfferCodeUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodesApi(configuration);

let body:.SubscriptionOfferCodesApiSubscriptionOfferCodesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionOfferCodeUpdateRequest | SubscriptionOfferCode representation
  subscriptionOfferCodeUpdateRequest: {
    data: {
      type: "subscriptionOfferCodes",
      id: "id_example",
      attributes: {
        active: true,
      },
    },
  },
};

apiInstance.subscriptionOfferCodesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionOfferCodeUpdateRequest** | **SubscriptionOfferCodeUpdateRequest**| SubscriptionOfferCode representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionOfferCodeResponse**

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
**200** | Single SubscriptionOfferCode |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


