# .EndUserLicenseAgreementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endUserLicenseAgreementsCreateInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsCreateInstance) | **POST** /v1/endUserLicenseAgreements | 
[**endUserLicenseAgreementsDeleteInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsDeleteInstance) | **DELETE** /v1/endUserLicenseAgreements/{id} | 
[**endUserLicenseAgreementsGetInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsGetInstance) | **GET** /v1/endUserLicenseAgreements/{id} | 
[**endUserLicenseAgreementsTerritoriesGetToManyRelated**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsTerritoriesGetToManyRelated) | **GET** /v1/endUserLicenseAgreements/{id}/territories | 
[**endUserLicenseAgreementsUpdateInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsUpdateInstance) | **PATCH** /v1/endUserLicenseAgreements/{id} | 


# **endUserLicenseAgreementsCreateInstance**
> EndUserLicenseAgreementResponse endUserLicenseAgreementsCreateInstance(endUserLicenseAgreementCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndUserLicenseAgreementsApi(configuration);

let body:.EndUserLicenseAgreementsApiEndUserLicenseAgreementsCreateInstanceRequest = {
  // EndUserLicenseAgreementCreateRequest | EndUserLicenseAgreement representation
  endUserLicenseAgreementCreateRequest: {
    data: {
      type: "endUserLicenseAgreements",
      attributes: {
        agreementText: "agreementText_example",
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
        territories: {
          data: [
            {
              type: "territories",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.endUserLicenseAgreementsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endUserLicenseAgreementCreateRequest** | **EndUserLicenseAgreementCreateRequest**| EndUserLicenseAgreement representation |


### Return type

**EndUserLicenseAgreementResponse**

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
**201** | Single EndUserLicenseAgreement |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endUserLicenseAgreementsDeleteInstance**
> void endUserLicenseAgreementsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndUserLicenseAgreementsApi(configuration);

let body:.EndUserLicenseAgreementsApiEndUserLicenseAgreementsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.endUserLicenseAgreementsDeleteInstance(body).then((data:any) => {
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

# **endUserLicenseAgreementsGetInstance**
> EndUserLicenseAgreementResponse endUserLicenseAgreementsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndUserLicenseAgreementsApi(configuration);

let body:.EndUserLicenseAgreementsApiEndUserLicenseAgreementsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'agreementText' | 'app' | 'territories'> | the fields to include for returned resources of type endUserLicenseAgreements (optional)
  fieldsEndUserLicenseAgreements: [
    "agreementText",
  ],
  // Array<'app' | 'territories'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related territories returned (when they are included) (optional)
  limitTerritories: 1,
};

apiInstance.endUserLicenseAgreementsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsEndUserLicenseAgreements** | **Array<&#39;agreementText&#39; &#124; &#39;app&#39; &#124; &#39;territories&#39;>** | the fields to include for returned resources of type endUserLicenseAgreements | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;territories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitTerritories** | [**number**] | maximum number of related territories returned (when they are included) | (optional) defaults to undefined


### Return type

**EndUserLicenseAgreementResponse**

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
**200** | Single EndUserLicenseAgreement |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endUserLicenseAgreementsTerritoriesGetToManyRelated**
> TerritoriesWithoutIncludesResponse endUserLicenseAgreementsTerritoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndUserLicenseAgreementsApi(configuration);

let body:.EndUserLicenseAgreementsApiEndUserLicenseAgreementsTerritoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.endUserLicenseAgreementsTerritoriesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**TerritoriesWithoutIncludesResponse**

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
**200** | List of Territories with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endUserLicenseAgreementsUpdateInstance**
> EndUserLicenseAgreementResponse endUserLicenseAgreementsUpdateInstance(endUserLicenseAgreementUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndUserLicenseAgreementsApi(configuration);

let body:.EndUserLicenseAgreementsApiEndUserLicenseAgreementsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // EndUserLicenseAgreementUpdateRequest | EndUserLicenseAgreement representation
  endUserLicenseAgreementUpdateRequest: {
    data: {
      type: "endUserLicenseAgreements",
      id: "id_example",
      attributes: {
        agreementText: "agreementText_example",
      },
      relationships: {
        territories: {
          data: [
            {
              type: "territories",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.endUserLicenseAgreementsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endUserLicenseAgreementUpdateRequest** | **EndUserLicenseAgreementUpdateRequest**| EndUserLicenseAgreement representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**EndUserLicenseAgreementResponse**

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
**200** | Single EndUserLicenseAgreement |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


