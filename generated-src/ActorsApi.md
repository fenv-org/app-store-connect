# .ActorsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actorsGetCollection**](ActorsApi.md#actorsGetCollection) | **GET** /v1/actors | 
[**actorsGetInstance**](ActorsApi.md#actorsGetInstance) | **GET** /v1/actors/{id} | 


# **actorsGetCollection**
> ActorsResponse actorsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActorsApi(configuration);

let body:.ActorsApiActorsGetCollectionRequest = {
  // Array<string> | filter by id(s)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'actorType' | 'apiKeyId' | 'userEmail' | 'userFirstName' | 'userLastName'> | the fields to include for returned resources of type actors (optional)
  fieldsActors: [
    "actorType",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.actorsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | defaults to undefined
 **fieldsActors** | **Array<&#39;actorType&#39; &#124; &#39;apiKeyId&#39; &#124; &#39;userEmail&#39; &#124; &#39;userFirstName&#39; &#124; &#39;userLastName&#39;>** | the fields to include for returned resources of type actors | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**ActorsResponse**

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
**200** | List of Actors |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actorsGetInstance**
> ActorResponse actorsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActorsApi(configuration);

let body:.ActorsApiActorsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'actorType' | 'apiKeyId' | 'userEmail' | 'userFirstName' | 'userLastName'> | the fields to include for returned resources of type actors (optional)
  fieldsActors: [
    "actorType",
  ],
};

apiInstance.actorsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsActors** | **Array<&#39;actorType&#39; &#124; &#39;apiKeyId&#39; &#124; &#39;userEmail&#39; &#124; &#39;userFirstName&#39; &#124; &#39;userLastName&#39;>** | the fields to include for returned resources of type actors | (optional) defaults to undefined


### Return type

**ActorResponse**

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
**200** | Single Actor |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


