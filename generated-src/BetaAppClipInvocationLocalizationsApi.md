# .BetaAppClipInvocationLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppClipInvocationLocalizationsCreateInstance**](BetaAppClipInvocationLocalizationsApi.md#betaAppClipInvocationLocalizationsCreateInstance) | **POST** /v1/betaAppClipInvocationLocalizations | 
[**betaAppClipInvocationLocalizationsDeleteInstance**](BetaAppClipInvocationLocalizationsApi.md#betaAppClipInvocationLocalizationsDeleteInstance) | **DELETE** /v1/betaAppClipInvocationLocalizations/{id} | 
[**betaAppClipInvocationLocalizationsUpdateInstance**](BetaAppClipInvocationLocalizationsApi.md#betaAppClipInvocationLocalizationsUpdateInstance) | **PATCH** /v1/betaAppClipInvocationLocalizations/{id} | 


# **betaAppClipInvocationLocalizationsCreateInstance**
> BetaAppClipInvocationLocalizationResponse betaAppClipInvocationLocalizationsCreateInstance(betaAppClipInvocationLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationLocalizationsApi(configuration);

let body:.BetaAppClipInvocationLocalizationsApiBetaAppClipInvocationLocalizationsCreateInstanceRequest = {
  // BetaAppClipInvocationLocalizationCreateRequest | BetaAppClipInvocationLocalization representation
  betaAppClipInvocationLocalizationCreateRequest: {
    data: {
      type: "betaAppClipInvocationLocalizations",
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
  },
};

apiInstance.betaAppClipInvocationLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaAppClipInvocationLocalizationCreateRequest** | **BetaAppClipInvocationLocalizationCreateRequest**| BetaAppClipInvocationLocalization representation |


### Return type

**BetaAppClipInvocationLocalizationResponse**

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
**201** | Single BetaAppClipInvocationLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaAppClipInvocationLocalizationsDeleteInstance**
> void betaAppClipInvocationLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationLocalizationsApi(configuration);

let body:.BetaAppClipInvocationLocalizationsApiBetaAppClipInvocationLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.betaAppClipInvocationLocalizationsDeleteInstance(body).then((data:any) => {
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

# **betaAppClipInvocationLocalizationsUpdateInstance**
> BetaAppClipInvocationLocalizationResponse betaAppClipInvocationLocalizationsUpdateInstance(betaAppClipInvocationLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaAppClipInvocationLocalizationsApi(configuration);

let body:.BetaAppClipInvocationLocalizationsApiBetaAppClipInvocationLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaAppClipInvocationLocalizationUpdateRequest | BetaAppClipInvocationLocalization representation
  betaAppClipInvocationLocalizationUpdateRequest: {
    data: {
      type: "betaAppClipInvocationLocalizations",
      id: "id_example",
      attributes: {
        title: "title_example",
      },
    },
  },
};

apiInstance.betaAppClipInvocationLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaAppClipInvocationLocalizationUpdateRequest** | **BetaAppClipInvocationLocalizationUpdateRequest**| BetaAppClipInvocationLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BetaAppClipInvocationLocalizationResponse**

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
**200** | Single BetaAppClipInvocationLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


