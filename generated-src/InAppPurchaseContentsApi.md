# .InAppPurchaseContentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseContentsGetInstance**](InAppPurchaseContentsApi.md#inAppPurchaseContentsGetInstance) | **GET** /v1/inAppPurchaseContents/{id} | 


# **inAppPurchaseContentsGetInstance**
> InAppPurchaseContentResponse inAppPurchaseContentsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseContentsApi(configuration);

let body:.InAppPurchaseContentsApiInAppPurchaseContentsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'fileName' | 'fileSize' | 'inAppPurchaseV2' | 'lastModifiedDate' | 'url'> | the fields to include for returned resources of type inAppPurchaseContents (optional)
  fieldsInAppPurchaseContents: [
    "fileName",
  ],
  // Array<'inAppPurchaseV2'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchaseContentsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseContents** | **Array<&#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type inAppPurchaseContents | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseContentResponse**

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
**200** | Single InAppPurchaseContent |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


