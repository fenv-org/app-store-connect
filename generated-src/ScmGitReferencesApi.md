# .ScmGitReferencesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmGitReferencesGetInstance**](ScmGitReferencesApi.md#scmGitReferencesGetInstance) | **GET** /v1/scmGitReferences/{id} | 


# **scmGitReferencesGetInstance**
> ScmGitReferenceResponse scmGitReferencesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmGitReferencesApi(configuration);

let body:.ScmGitReferencesApiScmGitReferencesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'repository'> | comma-separated list of relationships to include (optional)
  include: [
    "repository",
  ],
};

apiInstance.scmGitReferencesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **include** | **Array<&#39;repository&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmGitReferenceResponse**

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
**200** | Single ScmGitReference |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


