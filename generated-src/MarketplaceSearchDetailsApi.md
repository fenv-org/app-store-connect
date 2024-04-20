# .MarketplaceSearchDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceSearchDetailsCreateInstance**](MarketplaceSearchDetailsApi.md#marketplaceSearchDetailsCreateInstance) | **POST** /v1/marketplaceSearchDetails | 
[**marketplaceSearchDetailsDeleteInstance**](MarketplaceSearchDetailsApi.md#marketplaceSearchDetailsDeleteInstance) | **DELETE** /v1/marketplaceSearchDetails/{id} | 
[**marketplaceSearchDetailsUpdateInstance**](MarketplaceSearchDetailsApi.md#marketplaceSearchDetailsUpdateInstance) | **PATCH** /v1/marketplaceSearchDetails/{id} | 


# **marketplaceSearchDetailsCreateInstance**
> MarketplaceSearchDetailResponse marketplaceSearchDetailsCreateInstance(marketplaceSearchDetailCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceSearchDetailsApi(configuration);

let body:.MarketplaceSearchDetailsApiMarketplaceSearchDetailsCreateInstanceRequest = {
  // MarketplaceSearchDetailCreateRequest | MarketplaceSearchDetail representation
  marketplaceSearchDetailCreateRequest: {
    data: {
      type: "marketplaceSearchDetails",
      attributes: {
        catalogUrl: "catalogUrl_example",
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

apiInstance.marketplaceSearchDetailsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceSearchDetailCreateRequest** | **MarketplaceSearchDetailCreateRequest**| MarketplaceSearchDetail representation |


### Return type

**MarketplaceSearchDetailResponse**

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
**201** | Single MarketplaceSearchDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **marketplaceSearchDetailsDeleteInstance**
> void marketplaceSearchDetailsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceSearchDetailsApi(configuration);

let body:.MarketplaceSearchDetailsApiMarketplaceSearchDetailsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.marketplaceSearchDetailsDeleteInstance(body).then((data:any) => {
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

# **marketplaceSearchDetailsUpdateInstance**
> MarketplaceSearchDetailResponse marketplaceSearchDetailsUpdateInstance(marketplaceSearchDetailUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MarketplaceSearchDetailsApi(configuration);

let body:.MarketplaceSearchDetailsApiMarketplaceSearchDetailsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // MarketplaceSearchDetailUpdateRequest | MarketplaceSearchDetail representation
  marketplaceSearchDetailUpdateRequest: {
    data: {
      type: "marketplaceSearchDetails",
      id: "id_example",
      attributes: {
        catalogUrl: "catalogUrl_example",
      },
    },
  },
};

apiInstance.marketplaceSearchDetailsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceSearchDetailUpdateRequest** | **MarketplaceSearchDetailUpdateRequest**| MarketplaceSearchDetail representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**MarketplaceSearchDetailResponse**

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
**200** | Single MarketplaceSearchDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


