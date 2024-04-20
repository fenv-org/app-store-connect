# .CiBuildActionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciBuildActionsArtifactsGetToManyRelated**](CiBuildActionsApi.md#ciBuildActionsArtifactsGetToManyRelated) | **GET** /v1/ciBuildActions/{id}/artifacts | 
[**ciBuildActionsBuildRunGetToOneRelated**](CiBuildActionsApi.md#ciBuildActionsBuildRunGetToOneRelated) | **GET** /v1/ciBuildActions/{id}/buildRun | 
[**ciBuildActionsGetInstance**](CiBuildActionsApi.md#ciBuildActionsGetInstance) | **GET** /v1/ciBuildActions/{id} | 
[**ciBuildActionsIssuesGetToManyRelated**](CiBuildActionsApi.md#ciBuildActionsIssuesGetToManyRelated) | **GET** /v1/ciBuildActions/{id}/issues | 
[**ciBuildActionsTestResultsGetToManyRelated**](CiBuildActionsApi.md#ciBuildActionsTestResultsGetToManyRelated) | **GET** /v1/ciBuildActions/{id}/testResults | 


# **ciBuildActionsArtifactsGetToManyRelated**
> CiArtifactsResponse ciBuildActionsArtifactsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildActionsApi(configuration);

let body:.CiBuildActionsApiCiBuildActionsArtifactsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'downloadUrl' | 'fileName' | 'fileSize' | 'fileType'> | the fields to include for returned resources of type ciArtifacts (optional)
  fieldsCiArtifacts: [
    "downloadUrl",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.ciBuildActionsArtifactsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiArtifacts** | **Array<&#39;downloadUrl&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;fileType&#39;>** | the fields to include for returned resources of type ciArtifacts | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**CiArtifactsResponse**

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
**200** | List of CiArtifacts |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildActionsBuildRunGetToOneRelated**
> CiBuildRunResponse ciBuildActionsBuildRunGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildActionsApi(configuration);

let body:.CiBuildActionsApiCiBuildActionsBuildRunGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'> | the fields to include for returned resources of type ciWorkflows (optional)
  fieldsCiWorkflows: [
    "actions",
  ],
  // Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'> | the fields to include for returned resources of type scmPullRequests (optional)
  fieldsScmPullRequests: [
    "destinationBranchName",
  ],
  // Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'> | the fields to include for returned resources of type ciProducts (optional)
  fieldsCiProducts: [
    "additionalRepositories",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
  // Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'> | comma-separated list of relationships to include (optional)
  include: [
    "builds",
  ],
};

apiInstance.ciBuildActionsBuildRunGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;builds&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;workflow&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CiBuildRunResponse**

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
**200** | Single CiBuildRun |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildActionsGetInstance**
> CiBuildActionResponse ciBuildActionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildActionsApi(configuration);

let body:.CiBuildActionsApiCiBuildActionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'> | the fields to include for returned resources of type ciBuildActions (optional)
  fieldsCiBuildActions: [
    "actionType",
  ],
  // Array<'buildRun'> | comma-separated list of relationships to include (optional)
  include: [
    "buildRun",
  ],
  // Array<'category' | 'fileSource' | 'issueType' | 'message'> | the fields to include for returned resources of type ciIssues (optional)
  fieldsCiIssues: [
    "category",
  ],
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status'> | the fields to include for returned resources of type ciTestResults (optional)
  fieldsCiTestResults: [
    "className",
  ],
  // Array<'downloadUrl' | 'fileName' | 'fileSize' | 'fileType'> | the fields to include for returned resources of type ciArtifacts (optional)
  fieldsCiArtifacts: [
    "downloadUrl",
  ],
};

apiInstance.ciBuildActionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiBuildActions** | **Array<&#39;actionType&#39; &#124; &#39;artifacts&#39; &#124; &#39;buildRun&#39; &#124; &#39;completionStatus&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isRequiredToPass&#39; &#124; &#39;issueCounts&#39; &#124; &#39;issues&#39; &#124; &#39;name&#39; &#124; &#39;startedDate&#39; &#124; &#39;testResults&#39;>** | the fields to include for returned resources of type ciBuildActions | (optional) defaults to undefined
 **include** | **Array<&#39;buildRun&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiIssues** | **Array<&#39;category&#39; &#124; &#39;fileSource&#39; &#124; &#39;issueType&#39; &#124; &#39;message&#39;>** | the fields to include for returned resources of type ciIssues | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiTestResults** | **Array<&#39;className&#39; &#124; &#39;destinationTestResults&#39; &#124; &#39;fileSource&#39; &#124; &#39;message&#39; &#124; &#39;name&#39; &#124; &#39;status&#39;>** | the fields to include for returned resources of type ciTestResults | (optional) defaults to undefined
 **fieldsCiArtifacts** | **Array<&#39;downloadUrl&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;fileType&#39;>** | the fields to include for returned resources of type ciArtifacts | (optional) defaults to undefined


### Return type

**CiBuildActionResponse**

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
**200** | Single CiBuildAction |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildActionsIssuesGetToManyRelated**
> CiIssuesResponse ciBuildActionsIssuesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildActionsApi(configuration);

let body:.CiBuildActionsApiCiBuildActionsIssuesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'category' | 'fileSource' | 'issueType' | 'message'> | the fields to include for returned resources of type ciIssues (optional)
  fieldsCiIssues: [
    "category",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.ciBuildActionsIssuesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiIssues** | **Array<&#39;category&#39; &#124; &#39;fileSource&#39; &#124; &#39;issueType&#39; &#124; &#39;message&#39;>** | the fields to include for returned resources of type ciIssues | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**CiIssuesResponse**

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
**200** | List of CiIssues |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildActionsTestResultsGetToManyRelated**
> CiTestResultsResponse ciBuildActionsTestResultsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildActionsApi(configuration);

let body:.CiBuildActionsApiCiBuildActionsTestResultsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status'> | the fields to include for returned resources of type ciTestResults (optional)
  fieldsCiTestResults: [
    "className",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.ciBuildActionsTestResultsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiTestResults** | **Array<&#39;className&#39; &#124; &#39;destinationTestResults&#39; &#124; &#39;fileSource&#39; &#124; &#39;message&#39; &#124; &#39;name&#39; &#124; &#39;status&#39;>** | the fields to include for returned resources of type ciTestResults | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**CiTestResultsResponse**

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
**200** | List of CiTestResults |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


