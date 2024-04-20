# .ScmRepositoriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmRepositoriesGetCollection**](ScmRepositoriesApi.md#scmRepositoriesGetCollection) | **GET** /v1/scmRepositories | 
[**scmRepositoriesGetInstance**](ScmRepositoriesApi.md#scmRepositoriesGetInstance) | **GET** /v1/scmRepositories/{id} | 
[**scmRepositoriesGitReferencesGetToManyRelated**](ScmRepositoriesApi.md#scmRepositoriesGitReferencesGetToManyRelated) | **GET** /v1/scmRepositories/{id}/gitReferences | 
[**scmRepositoriesPullRequestsGetToManyRelated**](ScmRepositoriesApi.md#scmRepositoriesPullRequestsGetToManyRelated) | **GET** /v1/scmRepositories/{id}/pullRequests | 


# **scmRepositoriesGetCollection**
> ScmRepositoriesResponse scmRepositoriesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmRepositoriesApi(configuration);

let body:.ScmRepositoriesApiScmRepositoriesGetCollectionRequest = {
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
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
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'> | the fields to include for returned resources of type scmPullRequests (optional)
  fieldsScmPullRequests: [
    "destinationBranchName",
  ],
};

apiInstance.scmRepositoriesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;defaultBranch&#39; &#124; &#39;scmProvider&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined


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
**200** | List of ScmRepositories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **scmRepositoriesGetInstance**
> ScmRepositoryResponse scmRepositoriesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmRepositoriesApi(configuration);

let body:.ScmRepositoriesApiScmRepositoriesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // Array<'defaultBranch' | 'scmProvider'> | comma-separated list of relationships to include (optional)
  include: [
    "defaultBranch",
  ],
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'> | the fields to include for returned resources of type scmPullRequests (optional)
  fieldsScmPullRequests: [
    "destinationBranchName",
  ],
};

apiInstance.scmRepositoriesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **include** | **Array<&#39;defaultBranch&#39; &#124; &#39;scmProvider&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined


### Return type

**ScmRepositoryResponse**

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
**200** | Single ScmRepository |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **scmRepositoriesGitReferencesGetToManyRelated**
> ScmGitReferencesResponse scmRepositoriesGitReferencesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmRepositoriesApi(configuration);

let body:.ScmRepositoriesApiScmRepositoriesGitReferencesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'repository'> | comma-separated list of relationships to include (optional)
  include: [
    "repository",
  ],
};

apiInstance.scmRepositoriesGitReferencesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;repository&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmGitReferencesResponse**

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
**200** | List of ScmGitReferences |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **scmRepositoriesPullRequestsGetToManyRelated**
> ScmPullRequestsResponse scmRepositoriesPullRequestsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmRepositoriesApi(configuration);

let body:.ScmRepositoriesApiScmRepositoriesPullRequestsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'> | the fields to include for returned resources of type scmPullRequests (optional)
  fieldsScmPullRequests: [
    "destinationBranchName",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'repository'> | comma-separated list of relationships to include (optional)
  include: [
    "repository",
  ],
};

apiInstance.scmRepositoriesPullRequestsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;repository&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmPullRequestsResponse**

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
**200** | List of ScmPullRequests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


