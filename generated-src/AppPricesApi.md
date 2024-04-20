# .AppPricesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPricesGetInstance**](AppPricesApi.md#appPricesGetInstance) | **GET** /v1/appPrices/{id} | 


# **appPricesGetInstance**
> AppPriceResponse appPricesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPricesApi(configuration);

let body:.AppPricesApiAppPricesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'priceTier'> | the fields to include for returned resources of type appPrices (optional)
  fieldsAppPrices: [
    "app",
  ],
  // Array<'app' | 'priceTier'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.appPricesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPrices** | **Array<&#39;app&#39; &#124; &#39;priceTier&#39;>** | the fields to include for returned resources of type appPrices | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;priceTier&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPriceResponse**

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
**200** | Single AppPrice |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


