# .CiWorkflowsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciWorkflowsBuildRunsGetToManyRelated**](CiWorkflowsApi.md#ciWorkflowsBuildRunsGetToManyRelated) | **GET** /v1/ciWorkflows/{id}/buildRuns | 
[**ciWorkflowsCreateInstance**](CiWorkflowsApi.md#ciWorkflowsCreateInstance) | **POST** /v1/ciWorkflows | 
[**ciWorkflowsDeleteInstance**](CiWorkflowsApi.md#ciWorkflowsDeleteInstance) | **DELETE** /v1/ciWorkflows/{id} | 
[**ciWorkflowsGetInstance**](CiWorkflowsApi.md#ciWorkflowsGetInstance) | **GET** /v1/ciWorkflows/{id} | 
[**ciWorkflowsRepositoryGetToOneRelated**](CiWorkflowsApi.md#ciWorkflowsRepositoryGetToOneRelated) | **GET** /v1/ciWorkflows/{id}/repository | 
[**ciWorkflowsUpdateInstance**](CiWorkflowsApi.md#ciWorkflowsUpdateInstance) | **PATCH** /v1/ciWorkflows/{id} | 


# **ciWorkflowsBuildRunsGetToManyRelated**
> CiBuildRunsResponse ciWorkflowsBuildRunsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiWorkflowsApi(configuration);

let body:.CiWorkflowsApiCiWorkflowsBuildRunsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'builds\' (optional)
  filterBuilds: [
    "filter[builds]_example",
  ],
  // Array<'number' | '-number'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "number",
  ],
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
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
  // Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'> | comma-separated list of relationships to include (optional)
  include: [
    "builds",
  ],
};

apiInstance.ciWorkflowsBuildRunsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterBuilds** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;builds\&#39; | (optional) defaults to undefined
 **sort** | **Array<&#39;number&#39; &#124; &#39;-number&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;builds&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;workflow&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CiBuildRunsResponse**

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
**200** | List of CiBuildRuns |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciWorkflowsCreateInstance**
> CiWorkflowResponse ciWorkflowsCreateInstance(ciWorkflowCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiWorkflowsApi(configuration);

let body:.CiWorkflowsApiCiWorkflowsCreateInstanceRequest = {
  // CiWorkflowCreateRequest | CiWorkflow representation
  ciWorkflowCreateRequest: {
    data: {
      type: "ciWorkflows",
      attributes: {
        name: "name_example",
        description: "description_example",
        branchStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          filesAndFoldersRule: {
            mode: "START_IF_ANY_FILE_MATCHES",
            matchers: [
              {
                directory: "directory_example",
                fileExtension: "fileExtension_example",
                fileName: "fileName_example",
              },
            ],
          },
          autoCancel: true,
        },
        tagStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          filesAndFoldersRule: {
            mode: "START_IF_ANY_FILE_MATCHES",
            matchers: [
              {
                directory: "directory_example",
                fileExtension: "fileExtension_example",
                fileName: "fileName_example",
              },
            ],
          },
          autoCancel: true,
        },
        pullRequestStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          destination: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          filesAndFoldersRule: {
            mode: "START_IF_ANY_FILE_MATCHES",
            matchers: [
              {
                directory: "directory_example",
                fileExtension: "fileExtension_example",
                fileName: "fileName_example",
              },
            ],
          },
          autoCancel: true,
        },
        scheduledStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          schedule: {
            frequency: "WEEKLY",
            days: [
              "SUNDAY",
            ],
            hour: 1,
            minute: 1,
            timezone: "timezone_example",
          },
        },
        manualBranchStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
        },
        manualTagStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
        },
        manualPullRequestStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          destination: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
        },
        actions: [
          {
            name: "name_example",
            actionType: "BUILD",
            destination: "ANY_IOS_DEVICE",
            buildDistributionAudience: "INTERNAL_ONLY",
            testConfiguration: {
              kind: "USE_SCHEME_SETTINGS",
              testPlanName: "testPlanName_example",
              testDestinations: [
                {
                  deviceTypeName: "deviceTypeName_example",
                  deviceTypeIdentifier: "deviceTypeIdentifier_example",
                  runtimeName: "runtimeName_example",
                  runtimeIdentifier: "runtimeIdentifier_example",
                  kind: "SIMULATOR",
                },
              ],
            },
            scheme: "scheme_example",
            platform: "MACOS",
            isRequiredToPass: true,
          },
        ],
        isEnabled: true,
        isLockedForEditing: true,
        clean: true,
        containerFilePath: "containerFilePath_example",
      },
      relationships: {
        product: {
          data: {
            type: "ciProducts",
            id: "id_example",
          },
        },
        repository: {
          data: {
            type: "scmRepositories",
            id: "id_example",
          },
        },
        xcodeVersion: {
          data: {
            type: "ciXcodeVersions",
            id: "id_example",
          },
        },
        macOsVersion: {
          data: {
            type: "ciMacOsVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.ciWorkflowsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ciWorkflowCreateRequest** | **CiWorkflowCreateRequest**| CiWorkflow representation |


### Return type

**CiWorkflowResponse**

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
**201** | Single CiWorkflow |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciWorkflowsDeleteInstance**
> void ciWorkflowsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiWorkflowsApi(configuration);

let body:.CiWorkflowsApiCiWorkflowsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.ciWorkflowsDeleteInstance(body).then((data:any) => {
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

# **ciWorkflowsGetInstance**
> CiWorkflowResponse ciWorkflowsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiWorkflowsApi(configuration);

let body:.CiWorkflowsApiCiWorkflowsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'> | the fields to include for returned resources of type ciWorkflows (optional)
  fieldsCiWorkflows: [
    "actions",
  ],
  // Array<'macOsVersion' | 'product' | 'repository' | 'xcodeVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "macOsVersion",
  ],
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
};

apiInstance.ciWorkflowsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **include** | **Array<&#39;macOsVersion&#39; &#124; &#39;product&#39; &#124; &#39;repository&#39; &#124; &#39;xcodeVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined


### Return type

**CiWorkflowResponse**

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
**200** | Single CiWorkflow |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciWorkflowsRepositoryGetToOneRelated**
> ScmRepositoryResponse ciWorkflowsRepositoryGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiWorkflowsApi(configuration);

let body:.CiWorkflowsApiCiWorkflowsRepositoryGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
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
  // Array<'defaultBranch' | 'scmProvider'> | comma-separated list of relationships to include (optional)
  include: [
    "defaultBranch",
  ],
};

apiInstance.ciWorkflowsRepositoryGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmProviders** | **Array<&#39;repositories&#39; &#124; &#39;scmProviderType&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type scmProviders | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **include** | **Array<&#39;defaultBranch&#39; &#124; &#39;scmProvider&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **ciWorkflowsUpdateInstance**
> CiWorkflowResponse ciWorkflowsUpdateInstance(ciWorkflowUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiWorkflowsApi(configuration);

let body:.CiWorkflowsApiCiWorkflowsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // CiWorkflowUpdateRequest | CiWorkflow representation
  ciWorkflowUpdateRequest: {
    data: {
      type: "ciWorkflows",
      id: "id_example",
      attributes: {
        name: "name_example",
        description: "description_example",
        branchStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          filesAndFoldersRule: {
            mode: "START_IF_ANY_FILE_MATCHES",
            matchers: [
              {
                directory: "directory_example",
                fileExtension: "fileExtension_example",
                fileName: "fileName_example",
              },
            ],
          },
          autoCancel: true,
        },
        tagStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          filesAndFoldersRule: {
            mode: "START_IF_ANY_FILE_MATCHES",
            matchers: [
              {
                directory: "directory_example",
                fileExtension: "fileExtension_example",
                fileName: "fileName_example",
              },
            ],
          },
          autoCancel: true,
        },
        pullRequestStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          destination: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          filesAndFoldersRule: {
            mode: "START_IF_ANY_FILE_MATCHES",
            matchers: [
              {
                directory: "directory_example",
                fileExtension: "fileExtension_example",
                fileName: "fileName_example",
              },
            ],
          },
          autoCancel: true,
        },
        scheduledStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          schedule: {
            frequency: "WEEKLY",
            days: [
              "SUNDAY",
            ],
            hour: 1,
            minute: 1,
            timezone: "timezone_example",
          },
        },
        manualBranchStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
        },
        manualTagStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
        },
        manualPullRequestStartCondition: {
          source: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
          destination: {
            isAllMatch: true,
            patterns: [
              {
                pattern: "pattern_example",
                isPrefix: true,
              },
            ],
          },
        },
        actions: [
          {
            name: "name_example",
            actionType: "BUILD",
            destination: "ANY_IOS_DEVICE",
            buildDistributionAudience: "INTERNAL_ONLY",
            testConfiguration: {
              kind: "USE_SCHEME_SETTINGS",
              testPlanName: "testPlanName_example",
              testDestinations: [
                {
                  deviceTypeName: "deviceTypeName_example",
                  deviceTypeIdentifier: "deviceTypeIdentifier_example",
                  runtimeName: "runtimeName_example",
                  runtimeIdentifier: "runtimeIdentifier_example",
                  kind: "SIMULATOR",
                },
              ],
            },
            scheme: "scheme_example",
            platform: "MACOS",
            isRequiredToPass: true,
          },
        ],
        isEnabled: true,
        isLockedForEditing: true,
        clean: true,
        containerFilePath: "containerFilePath_example",
      },
      relationships: {
        xcodeVersion: {
          data: {
            type: "ciXcodeVersions",
            id: "id_example",
          },
        },
        macOsVersion: {
          data: {
            type: "ciMacOsVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.ciWorkflowsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ciWorkflowUpdateRequest** | **CiWorkflowUpdateRequest**| CiWorkflow representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**CiWorkflowResponse**

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
**200** | Single CiWorkflow |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


