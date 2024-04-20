# .CertificatesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificatesCreateInstance**](CertificatesApi.md#certificatesCreateInstance) | **POST** /v1/certificates | 
[**certificatesDeleteInstance**](CertificatesApi.md#certificatesDeleteInstance) | **DELETE** /v1/certificates/{id} | 
[**certificatesGetCollection**](CertificatesApi.md#certificatesGetCollection) | **GET** /v1/certificates | 
[**certificatesGetInstance**](CertificatesApi.md#certificatesGetInstance) | **GET** /v1/certificates/{id} | 


# **certificatesCreateInstance**
> CertificateResponse certificatesCreateInstance(certificateCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CertificatesApi(configuration);

let body:.CertificatesApiCertificatesCreateInstanceRequest = {
  // CertificateCreateRequest | Certificate representation
  certificateCreateRequest: {
    data: {
      type: "certificates",
      attributes: {
        csrContent: "csrContent_example",
        certificateType: "IOS_DEVELOPMENT",
      },
    },
  },
};

apiInstance.certificatesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateCreateRequest** | **CertificateCreateRequest**| Certificate representation |


### Return type

**CertificateResponse**

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
**201** | Single Certificate |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **certificatesDeleteInstance**
> void certificatesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CertificatesApi(configuration);

let body:.CertificatesApiCertificatesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.certificatesDeleteInstance(body).then((data:any) => {
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

# **certificatesGetCollection**
> CertificatesResponse certificatesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CertificatesApi(configuration);

let body:.CertificatesApiCertificatesGetCollectionRequest = {
  // Array<'IOS_DEVELOPMENT' | 'IOS_DISTRIBUTION' | 'MAC_APP_DISTRIBUTION' | 'MAC_INSTALLER_DISTRIBUTION' | 'MAC_APP_DEVELOPMENT' | 'DEVELOPER_ID_KEXT' | 'DEVELOPER_ID_APPLICATION' | 'DEVELOPMENT' | 'DISTRIBUTION' | 'PASS_TYPE_ID' | 'PASS_TYPE_ID_WITH_NFC'> | filter by attribute \'certificateType\' (optional)
  filterCertificateType: [
    "IOS_DEVELOPMENT",
  ],
  // Array<string> | filter by attribute \'displayName\' (optional)
  filterDisplayName: [
    "filter[displayName]_example",
  ],
  // Array<string> | filter by attribute \'serialNumber\' (optional)
  filterSerialNumber: [
    "filter[serialNumber]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'certificateType' | '-certificateType' | 'displayName' | '-displayName' | 'id' | '-id' | 'serialNumber' | '-serialNumber'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "certificateType",
  ],
  // Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'> | the fields to include for returned resources of type certificates (optional)
  fieldsCertificates: [
    "certificateContent",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.certificatesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCertificateType** | **Array<&#39;IOS_DEVELOPMENT&#39; &#124; &#39;IOS_DISTRIBUTION&#39; &#124; &#39;MAC_APP_DISTRIBUTION&#39; &#124; &#39;MAC_INSTALLER_DISTRIBUTION&#39; &#124; &#39;MAC_APP_DEVELOPMENT&#39; &#124; &#39;DEVELOPER_ID_KEXT&#39; &#124; &#39;DEVELOPER_ID_APPLICATION&#39; &#124; &#39;DEVELOPMENT&#39; &#124; &#39;DISTRIBUTION&#39; &#124; &#39;PASS_TYPE_ID&#39; &#124; &#39;PASS_TYPE_ID_WITH_NFC&#39;>** | filter by attribute \&#39;certificateType\&#39; | (optional) defaults to undefined
 **filterDisplayName** | **Array&lt;string&gt;** | filter by attribute \&#39;displayName\&#39; | (optional) defaults to undefined
 **filterSerialNumber** | **Array&lt;string&gt;** | filter by attribute \&#39;serialNumber\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;certificateType&#39; &#124; &#39;-certificateType&#39; &#124; &#39;displayName&#39; &#124; &#39;-displayName&#39; &#124; &#39;id&#39; &#124; &#39;-id&#39; &#124; &#39;serialNumber&#39; &#124; &#39;-serialNumber&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsCertificates** | **Array<&#39;certificateContent&#39; &#124; &#39;certificateType&#39; &#124; &#39;csrContent&#39; &#124; &#39;displayName&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;serialNumber&#39;>** | the fields to include for returned resources of type certificates | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**CertificatesResponse**

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
**200** | List of Certificates |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **certificatesGetInstance**
> CertificateResponse certificatesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CertificatesApi(configuration);

let body:.CertificatesApiCertificatesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'> | the fields to include for returned resources of type certificates (optional)
  fieldsCertificates: [
    "certificateContent",
  ],
};

apiInstance.certificatesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCertificates** | **Array<&#39;certificateContent&#39; &#124; &#39;certificateType&#39; &#124; &#39;csrContent&#39; &#124; &#39;displayName&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;serialNumber&#39;>** | the fields to include for returned resources of type certificates | (optional) defaults to undefined


### Return type

**CertificateResponse**

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
**200** | Single Certificate |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


