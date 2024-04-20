# .GameCenterMatchmakingRuleSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingRuleSetsCreateInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsCreateInstance) | **POST** /v1/gameCenterMatchmakingRuleSets | 
[**gameCenterMatchmakingRuleSetsDeleteInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingRuleSets/{id} | 
[**gameCenterMatchmakingRuleSetsGetCollection**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsGetCollection) | **GET** /v1/gameCenterMatchmakingRuleSets | 
[**gameCenterMatchmakingRuleSetsGetInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsGetInstance) | **GET** /v1/gameCenterMatchmakingRuleSets/{id} | 
[**gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/matchmakingQueues | 
[**gameCenterMatchmakingRuleSetsRulesGetToManyRelated**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsRulesGetToManyRelated) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/rules | 
[**gameCenterMatchmakingRuleSetsTeamsGetToManyRelated**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsTeamsGetToManyRelated) | **GET** /v1/gameCenterMatchmakingRuleSets/{id}/teams | 
[**gameCenterMatchmakingRuleSetsUpdateInstance**](GameCenterMatchmakingRuleSetsApi.md#gameCenterMatchmakingRuleSetsUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingRuleSets/{id} | 


# **gameCenterMatchmakingRuleSetsCreateInstance**
> GameCenterMatchmakingRuleSetResponse gameCenterMatchmakingRuleSetsCreateInstance(gameCenterMatchmakingRuleSetCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsCreateInstanceRequest = {
  // GameCenterMatchmakingRuleSetCreateRequest | GameCenterMatchmakingRuleSet representation
  gameCenterMatchmakingRuleSetCreateRequest: {
    data: {
      type: "gameCenterMatchmakingRuleSets",
      attributes: {
        referenceName: "referenceName_example",
        ruleLanguageVersion: 1,
        minPlayers: 1,
        maxPlayers: 1,
      },
    },
  },
};

apiInstance.gameCenterMatchmakingRuleSetsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingRuleSetCreateRequest** | **GameCenterMatchmakingRuleSetCreateRequest**| GameCenterMatchmakingRuleSet representation |


### Return type

**GameCenterMatchmakingRuleSetResponse**

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
**201** | Single GameCenterMatchmakingRuleSet |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRuleSetsDeleteInstance**
> void gameCenterMatchmakingRuleSetsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterMatchmakingRuleSetsDeleteInstance(body).then((data:any) => {
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

# **gameCenterMatchmakingRuleSetsGetCollection**
> GameCenterMatchmakingRuleSetsResponse gameCenterMatchmakingRuleSetsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsGetCollectionRequest = {
  // Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'> | the fields to include for returned resources of type gameCenterMatchmakingRuleSets (optional)
  fieldsGameCenterMatchmakingRuleSets: [
    "matchmakingQueues",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'matchmakingQueues' | 'rules' | 'teams'> | comma-separated list of relationships to include (optional)
  include: [
    "matchmakingQueues",
  ],
  // Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingQueues (optional)
  fieldsGameCenterMatchmakingQueues: [
    "classicMatchmakingBundleIds",
  ],
  // Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingTeams (optional)
  fieldsGameCenterMatchmakingTeams: [
    "maxPlayers",
  ],
  // Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'> | the fields to include for returned resources of type gameCenterMatchmakingRules (optional)
  fieldsGameCenterMatchmakingRules: [
    "description",
  ],
  // number | maximum number of related matchmakingQueues returned (when they are included) (optional)
  limitMatchmakingQueues: 1,
  // number | maximum number of related rules returned (when they are included) (optional)
  limitRules: 1,
  // number | maximum number of related teams returned (when they are included) (optional)
  limitTeams: 1,
};

apiInstance.gameCenterMatchmakingRuleSetsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsGameCenterMatchmakingRuleSets** | **Array<&#39;matchmakingQueues&#39; &#124; &#39;maxPlayers&#39; &#124; &#39;minPlayers&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleLanguageVersion&#39; &#124; &#39;rules&#39; &#124; &#39;teams&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingRuleSets | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;matchmakingQueues&#39; &#124; &#39;rules&#39; &#124; &#39;teams&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingQueues** | **Array<&#39;classicMatchmakingBundleIds&#39; &#124; &#39;experimentRuleSet&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingQueues | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingTeams** | **Array<&#39;maxPlayers&#39; &#124; &#39;minPlayers&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingTeams | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingRules** | **Array<&#39;description&#39; &#124; &#39;expression&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39; &#124; &#39;type&#39; &#124; &#39;weight&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingRules | (optional) defaults to undefined
 **limitMatchmakingQueues** | [**number**] | maximum number of related matchmakingQueues returned (when they are included) | (optional) defaults to undefined
 **limitRules** | [**number**] | maximum number of related rules returned (when they are included) | (optional) defaults to undefined
 **limitTeams** | [**number**] | maximum number of related teams returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingRuleSetsResponse**

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
**200** | List of GameCenterMatchmakingRuleSets |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRuleSetsGetInstance**
> GameCenterMatchmakingRuleSetResponse gameCenterMatchmakingRuleSetsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'> | the fields to include for returned resources of type gameCenterMatchmakingRuleSets (optional)
  fieldsGameCenterMatchmakingRuleSets: [
    "matchmakingQueues",
  ],
  // Array<'matchmakingQueues' | 'rules' | 'teams'> | comma-separated list of relationships to include (optional)
  include: [
    "matchmakingQueues",
  ],
  // Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingQueues (optional)
  fieldsGameCenterMatchmakingQueues: [
    "classicMatchmakingBundleIds",
  ],
  // Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingTeams (optional)
  fieldsGameCenterMatchmakingTeams: [
    "maxPlayers",
  ],
  // Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'> | the fields to include for returned resources of type gameCenterMatchmakingRules (optional)
  fieldsGameCenterMatchmakingRules: [
    "description",
  ],
  // number | maximum number of related matchmakingQueues returned (when they are included) (optional)
  limitMatchmakingQueues: 1,
  // number | maximum number of related rules returned (when they are included) (optional)
  limitRules: 1,
  // number | maximum number of related teams returned (when they are included) (optional)
  limitTeams: 1,
};

apiInstance.gameCenterMatchmakingRuleSetsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterMatchmakingRuleSets** | **Array<&#39;matchmakingQueues&#39; &#124; &#39;maxPlayers&#39; &#124; &#39;minPlayers&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleLanguageVersion&#39; &#124; &#39;rules&#39; &#124; &#39;teams&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingRuleSets | (optional) defaults to undefined
 **include** | **Array<&#39;matchmakingQueues&#39; &#124; &#39;rules&#39; &#124; &#39;teams&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingQueues** | **Array<&#39;classicMatchmakingBundleIds&#39; &#124; &#39;experimentRuleSet&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingQueues | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingTeams** | **Array<&#39;maxPlayers&#39; &#124; &#39;minPlayers&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingTeams | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingRules** | **Array<&#39;description&#39; &#124; &#39;expression&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39; &#124; &#39;type&#39; &#124; &#39;weight&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingRules | (optional) defaults to undefined
 **limitMatchmakingQueues** | [**number**] | maximum number of related matchmakingQueues returned (when they are included) | (optional) defaults to undefined
 **limitRules** | [**number**] | maximum number of related rules returned (when they are included) | (optional) defaults to undefined
 **limitTeams** | [**number**] | maximum number of related teams returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingRuleSetResponse**

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
**200** | Single GameCenterMatchmakingRuleSet |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated**
> GameCenterMatchmakingQueuesResponse gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingQueues (optional)
  fieldsGameCenterMatchmakingQueues: [
    "classicMatchmakingBundleIds",
  ],
  // Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'> | the fields to include for returned resources of type gameCenterMatchmakingRuleSets (optional)
  fieldsGameCenterMatchmakingRuleSets: [
    "matchmakingQueues",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'experimentRuleSet' | 'ruleSet'> | comma-separated list of relationships to include (optional)
  include: [
    "experimentRuleSet",
  ],
};

apiInstance.gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterMatchmakingQueues** | **Array<&#39;classicMatchmakingBundleIds&#39; &#124; &#39;experimentRuleSet&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingQueues | (optional) defaults to undefined
 **fieldsGameCenterMatchmakingRuleSets** | **Array<&#39;matchmakingQueues&#39; &#124; &#39;maxPlayers&#39; &#124; &#39;minPlayers&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleLanguageVersion&#39; &#124; &#39;rules&#39; &#124; &#39;teams&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingRuleSets | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;experimentRuleSet&#39; &#124; &#39;ruleSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingQueuesResponse**

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
**200** | List of GameCenterMatchmakingQueues |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRuleSetsRulesGetToManyRelated**
> GameCenterMatchmakingRulesResponse gameCenterMatchmakingRuleSetsRulesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsRulesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'> | the fields to include for returned resources of type gameCenterMatchmakingRules (optional)
  fieldsGameCenterMatchmakingRules: [
    "description",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterMatchmakingRuleSetsRulesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterMatchmakingRules** | **Array<&#39;description&#39; &#124; &#39;expression&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39; &#124; &#39;type&#39; &#124; &#39;weight&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingRules | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingRulesResponse**

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
**200** | List of GameCenterMatchmakingRules |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRuleSetsTeamsGetToManyRelated**
> GameCenterMatchmakingTeamsResponse gameCenterMatchmakingRuleSetsTeamsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsTeamsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'> | the fields to include for returned resources of type gameCenterMatchmakingTeams (optional)
  fieldsGameCenterMatchmakingTeams: [
    "maxPlayers",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterMatchmakingRuleSetsTeamsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterMatchmakingTeams** | **Array<&#39;maxPlayers&#39; &#124; &#39;minPlayers&#39; &#124; &#39;referenceName&#39; &#124; &#39;ruleSet&#39;>** | the fields to include for returned resources of type gameCenterMatchmakingTeams | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingTeamsResponse**

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
**200** | List of GameCenterMatchmakingTeams |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingRuleSetsUpdateInstance**
> GameCenterMatchmakingRuleSetResponse gameCenterMatchmakingRuleSetsUpdateInstance(gameCenterMatchmakingRuleSetUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetsApi(configuration);

let body:.GameCenterMatchmakingRuleSetsApiGameCenterMatchmakingRuleSetsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterMatchmakingRuleSetUpdateRequest | GameCenterMatchmakingRuleSet representation
  gameCenterMatchmakingRuleSetUpdateRequest: {
    data: {
      type: "gameCenterMatchmakingRuleSets",
      id: "id_example",
      attributes: {
        minPlayers: 1,
        maxPlayers: 1,
      },
    },
  },
};

apiInstance.gameCenterMatchmakingRuleSetsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingRuleSetUpdateRequest** | **GameCenterMatchmakingRuleSetUpdateRequest**| GameCenterMatchmakingRuleSet representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterMatchmakingRuleSetResponse**

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
**200** | Single GameCenterMatchmakingRuleSet |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


