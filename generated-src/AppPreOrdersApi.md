# .AppPreOrdersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPreOrdersCreateInstance**](AppPreOrdersApi.md#appPreOrdersCreateInstance) | **POST** /v1/appPreOrders | 
[**appPreOrdersDeleteInstance**](AppPreOrdersApi.md#appPreOrdersDeleteInstance) | **DELETE** /v1/appPreOrders/{id} | 
[**appPreOrdersGetInstance**](AppPreOrdersApi.md#appPreOrdersGetInstance) | **GET** /v1/appPreOrders/{id} | 
[**appPreOrdersUpdateInstance**](AppPreOrdersApi.md#appPreOrdersUpdateInstance) | **PATCH** /v1/appPreOrders/{id} | 


# **appPreOrdersCreateInstance**
> AppPreOrderResponse appPreOrdersCreateInstance(appPreOrderCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreOrdersApi(configuration);

let body:.AppPreOrdersApiAppPreOrdersCreateInstanceRequest = {
  // AppPreOrderCreateRequest | AppPreOrder representation
  appPreOrderCreateRequest: {
    data: {
      type: "appPreOrders",
      attributes: {
        appReleaseDate: new Date('1970-01-01').toISOString().split('T')[0];,
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

apiInstance.appPreOrdersCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPreOrderCreateRequest** | **AppPreOrderCreateRequest**| AppPreOrder representation |


### Return type

**AppPreOrderResponse**

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
**201** | Single AppPreOrder |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPreOrdersDeleteInstance**
> void appPreOrdersDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreOrdersApi(configuration);

let body:.AppPreOrdersApiAppPreOrdersDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appPreOrdersDeleteInstance(body).then((data:any) => {
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

# **appPreOrdersGetInstance**
> AppPreOrderResponse appPreOrdersGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreOrdersApi(configuration);

let body:.AppPreOrdersApiAppPreOrdersGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'> | the fields to include for returned resources of type appPreOrders (optional)
  fieldsAppPreOrders: [
    "app",
  ],
  // Array<'app'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.appPreOrdersGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPreOrders** | **Array<&#39;app&#39; &#124; &#39;appReleaseDate&#39; &#124; &#39;preOrderAvailableDate&#39;>** | the fields to include for returned resources of type appPreOrders | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPreOrderResponse**

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
**200** | Single AppPreOrder |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPreOrdersUpdateInstance**
> AppPreOrderResponse appPreOrdersUpdateInstance(appPreOrderUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreOrdersApi(configuration);

let body:.AppPreOrdersApiAppPreOrdersUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppPreOrderUpdateRequest | AppPreOrder representation
  appPreOrderUpdateRequest: {
    data: {
      type: "appPreOrders",
      id: "id_example",
      attributes: {
        appReleaseDate: new Date('1970-01-01').toISOString().split('T')[0];,
      },
    },
  },
};

apiInstance.appPreOrdersUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPreOrderUpdateRequest** | **AppPreOrderUpdateRequest**| AppPreOrder representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppPreOrderResponse**

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
**200** | Single AppPreOrder |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


