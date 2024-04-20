# .AlternativeDistributionDomainsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionDomainsCreateInstance**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsCreateInstance) | **POST** /v1/alternativeDistributionDomains | 
[**alternativeDistributionDomainsDeleteInstance**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsDeleteInstance) | **DELETE** /v1/alternativeDistributionDomains/{id} | 
[**alternativeDistributionDomainsGetCollection**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsGetCollection) | **GET** /v1/alternativeDistributionDomains | 
[**alternativeDistributionDomainsGetInstance**](AlternativeDistributionDomainsApi.md#alternativeDistributionDomainsGetInstance) | **GET** /v1/alternativeDistributionDomains/{id} | 


# **alternativeDistributionDomainsCreateInstance**
> AlternativeDistributionDomainResponse alternativeDistributionDomainsCreateInstance(alternativeDistributionDomainCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionDomainsApi(configuration);

let body:.AlternativeDistributionDomainsApiAlternativeDistributionDomainsCreateInstanceRequest = {
  // AlternativeDistributionDomainCreateRequest | AlternativeDistributionDomain representation
  alternativeDistributionDomainCreateRequest: {
    data: {
      type: "alternativeDistributionDomains",
      attributes: {
        domain: "domain_example",
        referenceName: "referenceName_example",
      },
    },
  },
};

apiInstance.alternativeDistributionDomainsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alternativeDistributionDomainCreateRequest** | **AlternativeDistributionDomainCreateRequest**| AlternativeDistributionDomain representation |


### Return type

**AlternativeDistributionDomainResponse**

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
**201** | Single AlternativeDistributionDomain |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionDomainsDeleteInstance**
> void alternativeDistributionDomainsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionDomainsApi(configuration);

let body:.AlternativeDistributionDomainsApiAlternativeDistributionDomainsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.alternativeDistributionDomainsDeleteInstance(body).then((data:any) => {
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

# **alternativeDistributionDomainsGetCollection**
> AlternativeDistributionDomainsResponse alternativeDistributionDomainsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionDomainsApi(configuration);

let body:.AlternativeDistributionDomainsApiAlternativeDistributionDomainsGetCollectionRequest = {
  // Array<'createdDate' | 'domain' | 'referenceName'> | the fields to include for returned resources of type alternativeDistributionDomains (optional)
  fieldsAlternativeDistributionDomains: [
    "createdDate",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.alternativeDistributionDomainsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsAlternativeDistributionDomains** | **Array<&#39;createdDate&#39; &#124; &#39;domain&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type alternativeDistributionDomains | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AlternativeDistributionDomainsResponse**

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
**200** | List of AlternativeDistributionDomains |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionDomainsGetInstance**
> AlternativeDistributionDomainResponse alternativeDistributionDomainsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionDomainsApi(configuration);

let body:.AlternativeDistributionDomainsApiAlternativeDistributionDomainsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'createdDate' | 'domain' | 'referenceName'> | the fields to include for returned resources of type alternativeDistributionDomains (optional)
  fieldsAlternativeDistributionDomains: [
    "createdDate",
  ],
};

apiInstance.alternativeDistributionDomainsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionDomains** | **Array<&#39;createdDate&#39; &#124; &#39;domain&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type alternativeDistributionDomains | (optional) defaults to undefined


### Return type

**AlternativeDistributionDomainResponse**

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
**200** | Single AlternativeDistributionDomain |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


