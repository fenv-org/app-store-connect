# .TerritoriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**territoriesGetCollection**](TerritoriesApi.md#territoriesGetCollection) | **GET** /v1/territories | 


# **territoriesGetCollection**
> TerritoriesResponse territoriesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TerritoriesApi(configuration);

let body:.TerritoriesApiTerritoriesGetCollectionRequest = {
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.territoriesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**TerritoriesResponse**

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
**200** | List of Territories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

