# .AppEncryptionDeclarationDocumentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEncryptionDeclarationDocumentsCreateInstance**](AppEncryptionDeclarationDocumentsApi.md#appEncryptionDeclarationDocumentsCreateInstance) | **POST** /v1/appEncryptionDeclarationDocuments | 
[**appEncryptionDeclarationDocumentsGetInstance**](AppEncryptionDeclarationDocumentsApi.md#appEncryptionDeclarationDocumentsGetInstance) | **GET** /v1/appEncryptionDeclarationDocuments/{id} | 
[**appEncryptionDeclarationDocumentsUpdateInstance**](AppEncryptionDeclarationDocumentsApi.md#appEncryptionDeclarationDocumentsUpdateInstance) | **PATCH** /v1/appEncryptionDeclarationDocuments/{id} | 


# **appEncryptionDeclarationDocumentsCreateInstance**
> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationDocumentsCreateInstance(appEncryptionDeclarationDocumentCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEncryptionDeclarationDocumentsApi(configuration);

let body:.AppEncryptionDeclarationDocumentsApiAppEncryptionDeclarationDocumentsCreateInstanceRequest = {
  // AppEncryptionDeclarationDocumentCreateRequest | AppEncryptionDeclarationDocument representation
  appEncryptionDeclarationDocumentCreateRequest: {
    data: {
      type: "appEncryptionDeclarationDocuments",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        appEncryptionDeclaration: {
          data: {
            type: "appEncryptionDeclarations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appEncryptionDeclarationDocumentsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEncryptionDeclarationDocumentCreateRequest** | **AppEncryptionDeclarationDocumentCreateRequest**| AppEncryptionDeclarationDocument representation |


### Return type

**AppEncryptionDeclarationDocumentResponse**

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
**201** | Single AppEncryptionDeclarationDocument |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEncryptionDeclarationDocumentsGetInstance**
> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationDocumentsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEncryptionDeclarationDocumentsApi(configuration);

let body:.AppEncryptionDeclarationDocumentsApiAppEncryptionDeclarationDocumentsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEncryptionDeclaration' | 'assetDeliveryState' | 'assetToken' | 'downloadUrl' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appEncryptionDeclarationDocuments (optional)
  fieldsAppEncryptionDeclarationDocuments: [
    "appEncryptionDeclaration",
  ],
};

apiInstance.appEncryptionDeclarationDocumentsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEncryptionDeclarationDocuments** | **Array<&#39;appEncryptionDeclaration&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;downloadUrl&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appEncryptionDeclarationDocuments | (optional) defaults to undefined


### Return type

**AppEncryptionDeclarationDocumentResponse**

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
**200** | Single AppEncryptionDeclarationDocument |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEncryptionDeclarationDocumentsUpdateInstance**
> AppEncryptionDeclarationDocumentResponse appEncryptionDeclarationDocumentsUpdateInstance(appEncryptionDeclarationDocumentUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEncryptionDeclarationDocumentsApi(configuration);

let body:.AppEncryptionDeclarationDocumentsApiAppEncryptionDeclarationDocumentsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppEncryptionDeclarationDocumentUpdateRequest | AppEncryptionDeclarationDocument representation
  appEncryptionDeclarationDocumentUpdateRequest: {
    data: {
      type: "appEncryptionDeclarationDocuments",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appEncryptionDeclarationDocumentsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEncryptionDeclarationDocumentUpdateRequest** | **AppEncryptionDeclarationDocumentUpdateRequest**| AppEncryptionDeclarationDocument representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppEncryptionDeclarationDocumentResponse**

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
**200** | Single AppEncryptionDeclarationDocument |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


