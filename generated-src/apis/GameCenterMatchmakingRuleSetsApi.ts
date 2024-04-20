// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterMatchmakingQueuesResponse } from '../models/GameCenterMatchmakingQueuesResponse.ts';
import { GameCenterMatchmakingRuleSetCreateRequest } from '../models/GameCenterMatchmakingRuleSetCreateRequest.ts';
import { GameCenterMatchmakingRuleSetResponse } from '../models/GameCenterMatchmakingRuleSetResponse.ts';
import { GameCenterMatchmakingRuleSetUpdateRequest } from '../models/GameCenterMatchmakingRuleSetUpdateRequest.ts';
import { GameCenterMatchmakingRuleSetsResponse } from '../models/GameCenterMatchmakingRuleSetsResponse.ts';
import { GameCenterMatchmakingRulesResponse } from '../models/GameCenterMatchmakingRulesResponse.ts';
import { GameCenterMatchmakingTeamsResponse } from '../models/GameCenterMatchmakingTeamsResponse.ts';

/**
 * no description
 */
export class GameCenterMatchmakingRuleSetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param gameCenterMatchmakingRuleSetCreateRequest GameCenterMatchmakingRuleSet representation
     */
    public async gameCenterMatchmakingRuleSetsCreateInstance(gameCenterMatchmakingRuleSetCreateRequest: GameCenterMatchmakingRuleSetCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameCenterMatchmakingRuleSetCreateRequest' is not null or undefined
        if (gameCenterMatchmakingRuleSetCreateRequest === null || gameCenterMatchmakingRuleSetCreateRequest === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsCreateInstance", "gameCenterMatchmakingRuleSetCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gameCenterMatchmakingRuleSetCreateRequest, "GameCenterMatchmakingRuleSetCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id the id of the requested resource
     */
    public async gameCenterMatchmakingRuleSetsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param fieldsGameCenterMatchmakingRuleSets the fields to include for returned resources of type gameCenterMatchmakingRuleSets
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsGameCenterMatchmakingQueues the fields to include for returned resources of type gameCenterMatchmakingQueues
     * @param fieldsGameCenterMatchmakingTeams the fields to include for returned resources of type gameCenterMatchmakingTeams
     * @param fieldsGameCenterMatchmakingRules the fields to include for returned resources of type gameCenterMatchmakingRules
     * @param limitMatchmakingQueues maximum number of related matchmakingQueues returned (when they are included)
     * @param limitRules maximum number of related rules returned (when they are included)
     * @param limitTeams maximum number of related teams returned (when they are included)
     */
    public async gameCenterMatchmakingRuleSetsGetCollection(fieldsGameCenterMatchmakingRuleSets?: Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'>, limit?: number, include?: Array<'matchmakingQueues' | 'rules' | 'teams'>, fieldsGameCenterMatchmakingQueues?: Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'>, fieldsGameCenterMatchmakingTeams?: Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'>, fieldsGameCenterMatchmakingRules?: Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'>, limitMatchmakingQueues?: number, limitRules?: number, limitTeams?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterMatchmakingRuleSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingRuleSets]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingRuleSets, "Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'matchmakingQueues' | 'rules' | 'teams'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingQueues !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingQueues]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingQueues, "Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingTeams !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingTeams]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingTeams, "Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingRules !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingRules]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingRules, "Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'>", ""));
        }

        // Query Params
        if (limitMatchmakingQueues !== undefined) {
            requestContext.setQueryParam("limit[matchmakingQueues]", ObjectSerializer.serialize(limitMatchmakingQueues, "number", ""));
        }

        // Query Params
        if (limitRules !== undefined) {
            requestContext.setQueryParam("limit[rules]", ObjectSerializer.serialize(limitRules, "number", ""));
        }

        // Query Params
        if (limitTeams !== undefined) {
            requestContext.setQueryParam("limit[teams]", ObjectSerializer.serialize(limitTeams, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id the id of the requested resource
     * @param fieldsGameCenterMatchmakingRuleSets the fields to include for returned resources of type gameCenterMatchmakingRuleSets
     * @param include comma-separated list of relationships to include
     * @param fieldsGameCenterMatchmakingQueues the fields to include for returned resources of type gameCenterMatchmakingQueues
     * @param fieldsGameCenterMatchmakingTeams the fields to include for returned resources of type gameCenterMatchmakingTeams
     * @param fieldsGameCenterMatchmakingRules the fields to include for returned resources of type gameCenterMatchmakingRules
     * @param limitMatchmakingQueues maximum number of related matchmakingQueues returned (when they are included)
     * @param limitRules maximum number of related rules returned (when they are included)
     * @param limitTeams maximum number of related teams returned (when they are included)
     */
    public async gameCenterMatchmakingRuleSetsGetInstance(id: string, fieldsGameCenterMatchmakingRuleSets?: Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'>, include?: Array<'matchmakingQueues' | 'rules' | 'teams'>, fieldsGameCenterMatchmakingQueues?: Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'>, fieldsGameCenterMatchmakingTeams?: Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'>, fieldsGameCenterMatchmakingRules?: Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'>, limitMatchmakingQueues?: number, limitRules?: number, limitTeams?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsGetInstance", "id");
        }










        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterMatchmakingRuleSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingRuleSets]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingRuleSets, "Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'matchmakingQueues' | 'rules' | 'teams'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingQueues !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingQueues]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingQueues, "Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingTeams !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingTeams]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingTeams, "Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingRules !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingRules]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingRules, "Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'>", ""));
        }

        // Query Params
        if (limitMatchmakingQueues !== undefined) {
            requestContext.setQueryParam("limit[matchmakingQueues]", ObjectSerializer.serialize(limitMatchmakingQueues, "number", ""));
        }

        // Query Params
        if (limitRules !== undefined) {
            requestContext.setQueryParam("limit[rules]", ObjectSerializer.serialize(limitRules, "number", ""));
        }

        // Query Params
        if (limitTeams !== undefined) {
            requestContext.setQueryParam("limit[teams]", ObjectSerializer.serialize(limitTeams, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id the id of the requested resource
     * @param fieldsGameCenterMatchmakingQueues the fields to include for returned resources of type gameCenterMatchmakingQueues
     * @param fieldsGameCenterMatchmakingRuleSets the fields to include for returned resources of type gameCenterMatchmakingRuleSets
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated(id: string, fieldsGameCenterMatchmakingQueues?: Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'>, fieldsGameCenterMatchmakingRuleSets?: Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'>, limit?: number, include?: Array<'experimentRuleSet' | 'ruleSet'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets/{id}/matchmakingQueues'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterMatchmakingQueues !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingQueues]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingQueues, "Array<'classicMatchmakingBundleIds' | 'experimentRuleSet' | 'referenceName' | 'ruleSet'>", ""));
        }

        // Query Params
        if (fieldsGameCenterMatchmakingRuleSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingRuleSets]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingRuleSets, "Array<'matchmakingQueues' | 'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleLanguageVersion' | 'rules' | 'teams'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'experimentRuleSet' | 'ruleSet'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id the id of the requested resource
     * @param fieldsGameCenterMatchmakingRules the fields to include for returned resources of type gameCenterMatchmakingRules
     * @param limit maximum resources per page
     */
    public async gameCenterMatchmakingRuleSetsRulesGetToManyRelated(id: string, fieldsGameCenterMatchmakingRules?: Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsRulesGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets/{id}/rules'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterMatchmakingRules !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingRules]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingRules, "Array<'description' | 'expression' | 'referenceName' | 'ruleSet' | 'type' | 'weight'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id the id of the requested resource
     * @param fieldsGameCenterMatchmakingTeams the fields to include for returned resources of type gameCenterMatchmakingTeams
     * @param limit maximum resources per page
     */
    public async gameCenterMatchmakingRuleSetsTeamsGetToManyRelated(id: string, fieldsGameCenterMatchmakingTeams?: Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsTeamsGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets/{id}/teams'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterMatchmakingTeams !== undefined) {
            requestContext.setQueryParam("fields[gameCenterMatchmakingTeams]", ObjectSerializer.serialize(fieldsGameCenterMatchmakingTeams, "Array<'maxPlayers' | 'minPlayers' | 'referenceName' | 'ruleSet'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param id the id of the requested resource
     * @param gameCenterMatchmakingRuleSetUpdateRequest GameCenterMatchmakingRuleSet representation
     */
    public async gameCenterMatchmakingRuleSetsUpdateInstance(id: string, gameCenterMatchmakingRuleSetUpdateRequest: GameCenterMatchmakingRuleSetUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsUpdateInstance", "id");
        }


        // verify required parameter 'gameCenterMatchmakingRuleSetUpdateRequest' is not null or undefined
        if (gameCenterMatchmakingRuleSetUpdateRequest === null || gameCenterMatchmakingRuleSetUpdateRequest === undefined) {
            throw new RequiredError("GameCenterMatchmakingRuleSetsApi", "gameCenterMatchmakingRuleSetsUpdateInstance", "gameCenterMatchmakingRuleSetUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRuleSets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gameCenterMatchmakingRuleSetUpdateRequest, "GameCenterMatchmakingRuleSetUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class GameCenterMatchmakingRuleSetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleSetResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: GameCenterMatchmakingRuleSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetResponse", ""
            ) as GameCenterMatchmakingRuleSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Request entity error(s)", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingRuleSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetResponse", ""
            ) as GameCenterMatchmakingRuleSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Request entity error(s)", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleSetsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GameCenterMatchmakingRuleSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetsResponse", ""
            ) as GameCenterMatchmakingRuleSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingRuleSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetsResponse", ""
            ) as GameCenterMatchmakingRuleSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleSetResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GameCenterMatchmakingRuleSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetResponse", ""
            ) as GameCenterMatchmakingRuleSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingRuleSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetResponse", ""
            ) as GameCenterMatchmakingRuleSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsMatchmakingQueuesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingQueuesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GameCenterMatchmakingQueuesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueuesResponse", ""
            ) as GameCenterMatchmakingQueuesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingQueuesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueuesResponse", ""
            ) as GameCenterMatchmakingQueuesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsRulesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsRulesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRulesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GameCenterMatchmakingRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRulesResponse", ""
            ) as GameCenterMatchmakingRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingRulesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRulesResponse", ""
            ) as GameCenterMatchmakingRulesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsTeamsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsTeamsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingTeamsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GameCenterMatchmakingTeamsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingTeamsResponse", ""
            ) as GameCenterMatchmakingTeamsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingTeamsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingTeamsResponse", ""
            ) as GameCenterMatchmakingTeamsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRuleSetsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRuleSetsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleSetResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GameCenterMatchmakingRuleSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetResponse", ""
            ) as GameCenterMatchmakingRuleSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Request entity error(s)", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingRuleSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleSetResponse", ""
            ) as GameCenterMatchmakingRuleSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
