# .ScmProvidersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmProvidersGetCollection**](ScmProvidersApi.md#scmProvidersGetCollection) | **GET** /v1/scmProviders | 
[**scmProvidersGetInstance**](ScmProvidersApi.md#scmProvidersGetInstance) | **GET** /v1/scmProviders/{id} | 
[**scmProvidersRepositoriesGetToManyRelated**](ScmProvidersApi.md#scmProvidersRepositoriesGetToManyRelated) | **GET** /v1/scmProviders/{id}/repositories | 


# **scmProvidersGetCollection**
> ScmProvidersResponse scmProvidersGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmProvidersApi(configuration);

let body:.ScmProvidersApiScmProvidersGetCollectionRequest = {
  // Array<'repositories' | 'scmProviderType' | 'url'> | the fields to include for returned resources of type scmProviders (optional)
  fieldsScmProviders: [
    "repositories",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
};

apiInstance.scmProvidersGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsScmProviders** | **Array<&#39;repositories&#39; &#124; &#39;scmProviderType&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type scmProviders | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined


### Return type

**ScmProvidersResponse**

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
**200** | List of ScmProviders |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **scmProvidersGetInstance**
> ScmProviderResponse scmProvidersGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmProvidersApi(configuration);

let body:.ScmProvidersApiScmProvidersGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'repositories' | 'scmProviderType' | 'url'> | the fields to include for returned resources of type scmProviders (optional)
  fieldsScmProviders: [
    "repositories",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
};

apiInstance.scmProvidersGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmProviders** | **Array<&#39;repositories&#39; &#124; &#39;scmProviderType&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type scmProviders | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined


### Return type

**ScmProviderResponse**

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
**200** | Single ScmProvider |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **scmProvidersRepositoriesGetToManyRelated**
> ScmRepositoriesResponse scmProvidersRepositoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmProvidersApi(configuration);

let body:.ScmProvidersApiScmProvidersRepositoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'repositories' | 'scmProviderType' | 'url'> | the fields to include for returned resources of type scmProviders (optional)
  fieldsScmProviders: [
    "repositories",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'defaultBranch' | 'scmProvider'> | comma-separated list of relationships to include (optional)
  include: [
    "defaultBranch",
  ],
};

apiInstance.scmProvidersRepositoriesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmProviders** | **Array<&#39;repositories&#39; &#124; &#39;scmProviderType&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type scmProviders | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;defaultBranch&#39; &#124; &#39;scmProvider&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmRepositoriesResponse**

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
**200** | List of ScmRepositories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


