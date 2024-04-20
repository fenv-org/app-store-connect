# .AlternativeDistributionPackageVariantsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionPackageVariantsGetInstance**](AlternativeDistributionPackageVariantsApi.md#alternativeDistributionPackageVariantsGetInstance) | **GET** /v1/alternativeDistributionPackageVariants/{id} | 


# **alternativeDistributionPackageVariantsGetInstance**
> AlternativeDistributionPackageVariantResponse alternativeDistributionPackageVariantsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackageVariantsApi(configuration);

let body:.AlternativeDistributionPackageVariantsApiAlternativeDistributionPackageVariantsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageVariants (optional)
  fieldsAlternativeDistributionPackageVariants: [
    "alternativeDistributionKeyBlob",
  ],
};

apiInstance.alternativeDistributionPackageVariantsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionPackageVariants** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVariants | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageVariantResponse**

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
**200** | Single AlternativeDistributionPackageVariant |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


