# .MarketplaceWebhooksApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceWebhooksCreateInstance**](MarketplaceWebhooksApi.md#marketplaceWebhooksCreateInstance) | **POST** /v1/marketplaceWebhooks | 
[**marketplaceWebhooksDeleteInstance**](MarketplaceWebhooksApi.md#marketplaceWebhooksDeleteInstance) | **DELETE** /v1/marketplaceWebhooks/{id} | 
[**marketplaceWebhooksGetCollection**](MarketplaceWebhooksApi.md#marketplaceWebhooksGetCollection) | **GET** /v1/marketplaceWebhooks | 
[**marketplaceWebhooksUpdateInstance**](MarketplaceWebhooksApi.md#marketplaceWebhooksUpdateInstance) | **PATCH** /v1/marketplaceWebhooks/{id} | 


# **marketplaceWebhooksCreateInstance**
> MarketplaceWebhookResponse marketplaceWebhooksCreateInstance(marketplaceWebhookCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceWebhooksApi(configuration);

let body:.MarketplaceWebhooksApiMarketplaceWebhooksCreateInstanceRequest = {
  // MarketplaceWebhookCreateRequest | MarketplaceWebhook representation
  marketplaceWebhookCreateRequest: {
    data: {
      type: "marketplaceWebhooks",
      attributes: {
        endpointUrl: "endpointUrl_example",
        secret: "secret_example",
      },
    },
  },
};

apiInstance.marketplaceWebhooksCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceWebhookCreateRequest** | **MarketplaceWebhookCreateRequest**| MarketplaceWebhook representation |


### Return type

**MarketplaceWebhookResponse**

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
**201** | Single MarketplaceWebhook |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **marketplaceWebhooksDeleteInstance**
> void marketplaceWebhooksDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceWebhooksApi(configuration);

let body:.MarketplaceWebhooksApiMarketplaceWebhooksDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.marketplaceWebhooksDeleteInstance(body).then((data:any) => {
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

# **marketplaceWebhooksGetCollection**
> MarketplaceWebhooksResponse marketplaceWebhooksGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceWebhooksApi(configuration);

let body:.MarketplaceWebhooksApiMarketplaceWebhooksGetCollectionRequest = {
  // Array<'endpointUrl' | 'secret'> | the fields to include for returned resources of type marketplaceWebhooks (optional)
  fieldsMarketplaceWebhooks: [
    "endpointUrl",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.marketplaceWebhooksGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsMarketplaceWebhooks** | **Array<&#39;endpointUrl&#39; &#124; &#39;secret&#39;>** | the fields to include for returned resources of type marketplaceWebhooks | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**MarketplaceWebhooksResponse**

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
**200** | List of MarketplaceWebhooks |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **marketplaceWebhooksUpdateInstance**
> MarketplaceWebhookResponse marketplaceWebhooksUpdateInstance(marketplaceWebhookUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceWebhooksApi(configuration);

let body:.MarketplaceWebhooksApiMarketplaceWebhooksUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // MarketplaceWebhookUpdateRequest | MarketplaceWebhook representation
  marketplaceWebhookUpdateRequest: {
    data: {
      type: "marketplaceWebhooks",
      id: "id_example",
      attributes: {
        endpointUrl: "endpointUrl_example",
        secret: "secret_example",
      },
    },
  },
};

apiInstance.marketplaceWebhooksUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceWebhookUpdateRequest** | **MarketplaceWebhookUpdateRequest**| MarketplaceWebhook representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**MarketplaceWebhookResponse**

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
**200** | Single MarketplaceWebhook |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


