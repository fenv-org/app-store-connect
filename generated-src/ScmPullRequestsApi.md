# .ScmPullRequestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scmPullRequestsGetInstance**](ScmPullRequestsApi.md#scmPullRequestsGetInstance) | **GET** /v1/scmPullRequests/{id} | 


# **scmPullRequestsGetInstance**
> ScmPullRequestResponse scmPullRequestsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScmPullRequestsApi(configuration);

let body:.ScmPullRequestsApiScmPullRequestsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'> | the fields to include for returned resources of type scmPullRequests (optional)
  fieldsScmPullRequests: [
    "destinationBranchName",
  ],
  // Array<'repository'> | comma-separated list of relationships to include (optional)
  include: [
    "repository",
  ],
};

apiInstance.scmPullRequestsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined
 **include** | **Array<&#39;repository&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmPullRequestResponse**

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
**200** | Single ScmPullRequest |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


