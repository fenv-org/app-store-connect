# .AlternativeDistributionKeysApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionKeysCreateInstance**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysCreateInstance) | **POST** /v1/alternativeDistributionKeys | 
[**alternativeDistributionKeysDeleteInstance**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysDeleteInstance) | **DELETE** /v1/alternativeDistributionKeys/{id} | 
[**alternativeDistributionKeysGetInstance**](AlternativeDistributionKeysApi.md#alternativeDistributionKeysGetInstance) | **GET** /v1/alternativeDistributionKeys/{id} | 


# **alternativeDistributionKeysCreateInstance**
> AlternativeDistributionKeyResponse alternativeDistributionKeysCreateInstance(alternativeDistributionKeyCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionKeysApi(configuration);

let body:.AlternativeDistributionKeysApiAlternativeDistributionKeysCreateInstanceRequest = {
  // AlternativeDistributionKeyCreateRequest | AlternativeDistributionKey representation
  alternativeDistributionKeyCreateRequest: {
    data: {
      type: "alternativeDistributionKeys",
      attributes: {
        publicKey: "publicKey_example",
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

apiInstance.alternativeDistributionKeysCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alternativeDistributionKeyCreateRequest** | **AlternativeDistributionKeyCreateRequest**| AlternativeDistributionKey representation |


### Return type

**AlternativeDistributionKeyResponse**

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
**201** | Single AlternativeDistributionKey |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionKeysDeleteInstance**
> void alternativeDistributionKeysDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionKeysApi(configuration);

let body:.AlternativeDistributionKeysApiAlternativeDistributionKeysDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.alternativeDistributionKeysDeleteInstance(body).then((data:any) => {
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

# **alternativeDistributionKeysGetInstance**
> AlternativeDistributionKeyResponse alternativeDistributionKeysGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionKeysApi(configuration);

let body:.AlternativeDistributionKeysApiAlternativeDistributionKeysGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'publicKey'> | the fields to include for returned resources of type alternativeDistributionKeys (optional)
  fieldsAlternativeDistributionKeys: [
    "app",
  ],
};

apiInstance.alternativeDistributionKeysGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionKeys** | **Array<&#39;app&#39; &#124; &#39;publicKey&#39;>** | the fields to include for returned resources of type alternativeDistributionKeys | (optional) defaults to undefined


### Return type

**AlternativeDistributionKeyResponse**

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
**200** | Single AlternativeDistributionKey |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


