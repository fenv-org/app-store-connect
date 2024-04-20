# .SubscriptionGroupLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupLocalizationsCreateInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsCreateInstance) | **POST** /v1/subscriptionGroupLocalizations | 
[**subscriptionGroupLocalizationsDeleteInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsDeleteInstance) | **DELETE** /v1/subscriptionGroupLocalizations/{id} | 
[**subscriptionGroupLocalizationsGetInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsGetInstance) | **GET** /v1/subscriptionGroupLocalizations/{id} | 
[**subscriptionGroupLocalizationsUpdateInstance**](SubscriptionGroupLocalizationsApi.md#subscriptionGroupLocalizationsUpdateInstance) | **PATCH** /v1/subscriptionGroupLocalizations/{id} | 


# **subscriptionGroupLocalizationsCreateInstance**
> SubscriptionGroupLocalizationResponse subscriptionGroupLocalizationsCreateInstance(subscriptionGroupLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupLocalizationsApi(configuration);

let body:.SubscriptionGroupLocalizationsApiSubscriptionGroupLocalizationsCreateInstanceRequest = {
  // SubscriptionGroupLocalizationCreateRequest | SubscriptionGroupLocalization representation
  subscriptionGroupLocalizationCreateRequest: {
    data: {
      type: "subscriptionGroupLocalizations",
      attributes: {
        name: "name_example",
        customAppName: "customAppName_example",
        locale: "locale_example",
      },
      relationships: {
        subscriptionGroup: {
          data: {
            type: "subscriptionGroups",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.subscriptionGroupLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionGroupLocalizationCreateRequest** | **SubscriptionGroupLocalizationCreateRequest**| SubscriptionGroupLocalization representation |


### Return type

**SubscriptionGroupLocalizationResponse**

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
**201** | Single SubscriptionGroupLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGroupLocalizationsDeleteInstance**
> void subscriptionGroupLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupLocalizationsApi(configuration);

let body:.SubscriptionGroupLocalizationsApiSubscriptionGroupLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionGroupLocalizationsDeleteInstance(body).then((data:any) => {
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

# **subscriptionGroupLocalizationsGetInstance**
> SubscriptionGroupLocalizationResponse subscriptionGroupLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupLocalizationsApi(configuration);

let body:.SubscriptionGroupLocalizationsApiSubscriptionGroupLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'> | the fields to include for returned resources of type subscriptionGroupLocalizations (optional)
  fieldsSubscriptionGroupLocalizations: [
    "customAppName",
  ],
  // Array<'subscriptionGroup'> | comma-separated list of relationships to include (optional)
  include: [
    "subscriptionGroup",
  ],
};

apiInstance.subscriptionGroupLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionGroupLocalizations** | **Array<&#39;customAppName&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39; &#124; &#39;subscriptionGroup&#39;>** | the fields to include for returned resources of type subscriptionGroupLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;subscriptionGroup&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionGroupLocalizationResponse**

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
**200** | Single SubscriptionGroupLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGroupLocalizationsUpdateInstance**
> SubscriptionGroupLocalizationResponse subscriptionGroupLocalizationsUpdateInstance(subscriptionGroupLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupLocalizationsApi(configuration);

let body:.SubscriptionGroupLocalizationsApiSubscriptionGroupLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionGroupLocalizationUpdateRequest | SubscriptionGroupLocalization representation
  subscriptionGroupLocalizationUpdateRequest: {
    data: {
      type: "subscriptionGroupLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        customAppName: "customAppName_example",
      },
    },
  },
};

apiInstance.subscriptionGroupLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionGroupLocalizationUpdateRequest** | **SubscriptionGroupLocalizationUpdateRequest**| SubscriptionGroupLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionGroupLocalizationResponse**

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
**200** | Single SubscriptionGroupLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


