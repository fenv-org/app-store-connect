# .SubscriptionLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionLocalizationsCreateInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsCreateInstance) | **POST** /v1/subscriptionLocalizations | 
[**subscriptionLocalizationsDeleteInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsDeleteInstance) | **DELETE** /v1/subscriptionLocalizations/{id} | 
[**subscriptionLocalizationsGetInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsGetInstance) | **GET** /v1/subscriptionLocalizations/{id} | 
[**subscriptionLocalizationsUpdateInstance**](SubscriptionLocalizationsApi.md#subscriptionLocalizationsUpdateInstance) | **PATCH** /v1/subscriptionLocalizations/{id} | 


# **subscriptionLocalizationsCreateInstance**
> SubscriptionLocalizationResponse subscriptionLocalizationsCreateInstance(subscriptionLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionLocalizationsApi(configuration);

let body:.SubscriptionLocalizationsApiSubscriptionLocalizationsCreateInstanceRequest = {
  // SubscriptionLocalizationCreateRequest | SubscriptionLocalization representation
  subscriptionLocalizationCreateRequest: {
    data: {
      type: "subscriptionLocalizations",
      attributes: {
        name: "name_example",
        locale: "locale_example",
        description: "description_example",
      },
      relationships: {
        subscription: {
          data: {
            type: "subscriptions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.subscriptionLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionLocalizationCreateRequest** | **SubscriptionLocalizationCreateRequest**| SubscriptionLocalization representation |


### Return type

**SubscriptionLocalizationResponse**

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
**201** | Single SubscriptionLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionLocalizationsDeleteInstance**
> void subscriptionLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionLocalizationsApi(configuration);

let body:.SubscriptionLocalizationsApiSubscriptionLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionLocalizationsDeleteInstance(body).then((data:any) => {
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

# **subscriptionLocalizationsGetInstance**
> SubscriptionLocalizationResponse subscriptionLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionLocalizationsApi(configuration);

let body:.SubscriptionLocalizationsApiSubscriptionLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'description' | 'locale' | 'name' | 'state' | 'subscription'> | the fields to include for returned resources of type subscriptionLocalizations (optional)
  fieldsSubscriptionLocalizations: [
    "description",
  ],
  // Array<'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "subscription",
  ],
};

apiInstance.subscriptionLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionLocalizations** | **Array<&#39;description&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionLocalizationResponse**

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
**200** | Single SubscriptionLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionLocalizationsUpdateInstance**
> SubscriptionLocalizationResponse subscriptionLocalizationsUpdateInstance(subscriptionLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionLocalizationsApi(configuration);

let body:.SubscriptionLocalizationsApiSubscriptionLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionLocalizationUpdateRequest | SubscriptionLocalization representation
  subscriptionLocalizationUpdateRequest: {
    data: {
      type: "subscriptionLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        description: "description_example",
      },
    },
  },
};

apiInstance.subscriptionLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionLocalizationUpdateRequest** | **SubscriptionLocalizationUpdateRequest**| SubscriptionLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionLocalizationResponse**

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
**200** | Single SubscriptionLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


