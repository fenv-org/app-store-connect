# .BetaAppClipInvocationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppClipInvocationsCreateInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsCreateInstance) | **POST** /v1/betaAppClipInvocations | 
[**betaAppClipInvocationsDeleteInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsDeleteInstance) | **DELETE** /v1/betaAppClipInvocations/{id} | 
[**betaAppClipInvocationsGetInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsGetInstance) | **GET** /v1/betaAppClipInvocations/{id} | 
[**betaAppClipInvocationsUpdateInstance**](BetaAppClipInvocationsApi.md#betaAppClipInvocationsUpdateInstance) | **PATCH** /v1/betaAppClipInvocations/{id} | 


# **betaAppClipInvocationsCreateInstance**
> BetaAppClipInvocationResponse betaAppClipInvocationsCreateInstance(betaAppClipInvocationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationsApi(configuration);

let body:.BetaAppClipInvocationsApiBetaAppClipInvocationsCreateInstanceRequest = {
  // BetaAppClipInvocationCreateRequest | BetaAppClipInvocation representation
  betaAppClipInvocationCreateRequest: {
    data: {
      type: "betaAppClipInvocations",
      attributes: {
        url: "url_example",
      },
      relationships: {
        buildBundle: {
          data: {
            type: "buildBundles",
            id: "id_example",
          },
        },
        betaAppClipInvocationLocalizations: {
          data: [
            {
              type: "betaAppClipInvocationLocalizations",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "betaAppClipInvocationLocalizations",
        id: "id_example",
        attributes: {
          title: "title_example",
          locale: "locale_example",
        },
        relationships: {
          betaAppClipInvocation: {
            data: {
              type: "betaAppClipInvocations",
              id: "id_example",
            },
          },
        },
      },
    ],
  },
};

apiInstance.betaAppClipInvocationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaAppClipInvocationCreateRequest** | **BetaAppClipInvocationCreateRequest**| BetaAppClipInvocation representation |


### Return type

**BetaAppClipInvocationResponse**

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
**201** | Single BetaAppClipInvocation |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaAppClipInvocationsDeleteInstance**
> void betaAppClipInvocationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationsApi(configuration);

let body:.BetaAppClipInvocationsApiBetaAppClipInvocationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.betaAppClipInvocationsDeleteInstance(body).then((data:any) => {
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

# **betaAppClipInvocationsGetInstance**
> BetaAppClipInvocationResponse betaAppClipInvocationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationsApi(configuration);

let body:.BetaAppClipInvocationsApiBetaAppClipInvocationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'betaAppClipInvocationLocalizations' | 'buildBundle' | 'url'> | the fields to include for returned resources of type betaAppClipInvocations (optional)
  fieldsBetaAppClipInvocations: [
    "betaAppClipInvocationLocalizations",
  ],
  // Array<'betaAppClipInvocationLocalizations'> | comma-separated list of relationships to include (optional)
  include: [
    "betaAppClipInvocationLocalizations",
  ],
  // number | maximum number of related betaAppClipInvocationLocalizations returned (when they are included) (optional)
  limitBetaAppClipInvocationLocalizations: 1,
};

apiInstance.betaAppClipInvocationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaAppClipInvocations** | **Array<&#39;betaAppClipInvocationLocalizations&#39; &#124; &#39;buildBundle&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type betaAppClipInvocations | (optional) defaults to undefined
 **include** | **Array<&#39;betaAppClipInvocationLocalizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **limitBetaAppClipInvocationLocalizations** | [**number**] | maximum number of related betaAppClipInvocationLocalizations returned (when they are included) | (optional) defaults to undefined


### Return type

**BetaAppClipInvocationResponse**

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
**200** | Single BetaAppClipInvocation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaAppClipInvocationsUpdateInstance**
> BetaAppClipInvocationResponse betaAppClipInvocationsUpdateInstance(betaAppClipInvocationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationsApi(configuration);

let body:.BetaAppClipInvocationsApiBetaAppClipInvocationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaAppClipInvocationUpdateRequest | BetaAppClipInvocation representation
  betaAppClipInvocationUpdateRequest: {
    data: {
      type: "betaAppClipInvocations",
      id: "id_example",
      attributes: {
        url: "url_example",
      },
    },
  },
};

apiInstance.betaAppClipInvocationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaAppClipInvocationUpdateRequest** | **BetaAppClipInvocationUpdateRequest**| BetaAppClipInvocation representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BetaAppClipInvocationResponse**

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
**200** | Single BetaAppClipInvocation |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


