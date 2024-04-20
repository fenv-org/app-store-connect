# .MarketplaceDomainsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceDomainsCreateInstance**](MarketplaceDomainsApi.md#marketplaceDomainsCreateInstance) | **POST** /v1/marketplaceDomains | 
[**marketplaceDomainsDeleteInstance**](MarketplaceDomainsApi.md#marketplaceDomainsDeleteInstance) | **DELETE** /v1/marketplaceDomains/{id} | 
[**marketplaceDomainsGetCollection**](MarketplaceDomainsApi.md#marketplaceDomainsGetCollection) | **GET** /v1/marketplaceDomains | 
[**marketplaceDomainsGetInstance**](MarketplaceDomainsApi.md#marketplaceDomainsGetInstance) | **GET** /v1/marketplaceDomains/{id} | 


# **marketplaceDomainsCreateInstance**
> MarketplaceDomainResponse marketplaceDomainsCreateInstance(marketplaceDomainCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceDomainsApi(configuration);

let body:.MarketplaceDomainsApiMarketplaceDomainsCreateInstanceRequest = {
  // MarketplaceDomainCreateRequest | MarketplaceDomain representation
  marketplaceDomainCreateRequest: {
    data: {
      type: "marketplaceDomains",
      attributes: {
        domain: "domain_example",
        referenceName: "referenceName_example",
      },
    },
  },
};

apiInstance.marketplaceDomainsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceDomainCreateRequest** | **MarketplaceDomainCreateRequest**| MarketplaceDomain representation |


### Return type

**MarketplaceDomainResponse**

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
**201** | Single MarketplaceDomain |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **marketplaceDomainsDeleteInstance**
> void marketplaceDomainsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceDomainsApi(configuration);

let body:.MarketplaceDomainsApiMarketplaceDomainsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.marketplaceDomainsDeleteInstance(body).then((data:any) => {
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

# **marketplaceDomainsGetCollection**
> MarketplaceDomainsResponse marketplaceDomainsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceDomainsApi(configuration);

let body:.MarketplaceDomainsApiMarketplaceDomainsGetCollectionRequest = {
  // Array<'createdDate' | 'domain' | 'referenceName'> | the fields to include for returned resources of type marketplaceDomains (optional)
  fieldsMarketplaceDomains: [
    "createdDate",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.marketplaceDomainsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsMarketplaceDomains** | **Array<&#39;createdDate&#39; &#124; &#39;domain&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type marketplaceDomains | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**MarketplaceDomainsResponse**

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
**200** | List of MarketplaceDomains |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **marketplaceDomainsGetInstance**
> MarketplaceDomainResponse marketplaceDomainsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceDomainsApi(configuration);

let body:.MarketplaceDomainsApiMarketplaceDomainsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'createdDate' | 'domain' | 'referenceName'> | the fields to include for returned resources of type marketplaceDomains (optional)
  fieldsMarketplaceDomains: [
    "createdDate",
  ],
};

apiInstance.marketplaceDomainsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsMarketplaceDomains** | **Array<&#39;createdDate&#39; &#124; &#39;domain&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type marketplaceDomains | (optional) defaults to undefined


### Return type

**MarketplaceDomainResponse**

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
**200** | Single MarketplaceDomain |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


