# .InAppPurchaseLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseLocalizationsCreateInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsCreateInstance) | **POST** /v1/inAppPurchaseLocalizations | 
[**inAppPurchaseLocalizationsDeleteInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsDeleteInstance) | **DELETE** /v1/inAppPurchaseLocalizations/{id} | 
[**inAppPurchaseLocalizationsGetInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsGetInstance) | **GET** /v1/inAppPurchaseLocalizations/{id} | 
[**inAppPurchaseLocalizationsUpdateInstance**](InAppPurchaseLocalizationsApi.md#inAppPurchaseLocalizationsUpdateInstance) | **PATCH** /v1/inAppPurchaseLocalizations/{id} | 


# **inAppPurchaseLocalizationsCreateInstance**
> InAppPurchaseLocalizationResponse inAppPurchaseLocalizationsCreateInstance(inAppPurchaseLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseLocalizationsApi(configuration);

let body:.InAppPurchaseLocalizationsApiInAppPurchaseLocalizationsCreateInstanceRequest = {
  // InAppPurchaseLocalizationCreateRequest | InAppPurchaseLocalization representation
  inAppPurchaseLocalizationCreateRequest: {
    data: {
      type: "inAppPurchaseLocalizations",
      attributes: {
        name: "name_example",
        locale: "locale_example",
        description: "description_example",
      },
      relationships: {
        inAppPurchaseV2: {
          data: {
            type: "inAppPurchases",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.inAppPurchaseLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseLocalizationCreateRequest** | **InAppPurchaseLocalizationCreateRequest**| InAppPurchaseLocalization representation |


### Return type

**InAppPurchaseLocalizationResponse**

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
**201** | Single InAppPurchaseLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchaseLocalizationsDeleteInstance**
> void inAppPurchaseLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseLocalizationsApi(configuration);

let body:.InAppPurchaseLocalizationsApiInAppPurchaseLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.inAppPurchaseLocalizationsDeleteInstance(body).then((data:any) => {
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

# **inAppPurchaseLocalizationsGetInstance**
> InAppPurchaseLocalizationResponse inAppPurchaseLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseLocalizationsApi(configuration);

let body:.InAppPurchaseLocalizationsApiInAppPurchaseLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'description' | 'inAppPurchaseV2' | 'locale' | 'name' | 'state'> | the fields to include for returned resources of type inAppPurchaseLocalizations (optional)
  fieldsInAppPurchaseLocalizations: [
    "description",
  ],
  // Array<'inAppPurchaseV2'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchaseLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseLocalizations** | **Array<&#39;description&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchaseLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseLocalizationResponse**

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
**200** | Single InAppPurchaseLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchaseLocalizationsUpdateInstance**
> InAppPurchaseLocalizationResponse inAppPurchaseLocalizationsUpdateInstance(inAppPurchaseLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseLocalizationsApi(configuration);

let body:.InAppPurchaseLocalizationsApiInAppPurchaseLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // InAppPurchaseLocalizationUpdateRequest | InAppPurchaseLocalization representation
  inAppPurchaseLocalizationUpdateRequest: {
    data: {
      type: "inAppPurchaseLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        description: "description_example",
      },
    },
  },
};

apiInstance.inAppPurchaseLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseLocalizationUpdateRequest** | **InAppPurchaseLocalizationUpdateRequest**| InAppPurchaseLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**InAppPurchaseLocalizationResponse**

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
**200** | Single InAppPurchaseLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


