// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterMatchmakingBooleanRuleResultsV1MetricResponse } from '../models/GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.ts';
import { GameCenterMatchmakingNumberRuleResultsV1MetricResponse } from '../models/GameCenterMatchmakingNumberRuleResultsV1MetricResponse.ts';
import { GameCenterMatchmakingRuleCreateRequest } from '../models/GameCenterMatchmakingRuleCreateRequest.ts';
import { GameCenterMatchmakingRuleErrorsV1MetricResponse } from '../models/GameCenterMatchmakingRuleErrorsV1MetricResponse.ts';
import { GameCenterMatchmakingRuleResponse } from '../models/GameCenterMatchmakingRuleResponse.ts';
import { GameCenterMatchmakingRuleUpdateRequest } from '../models/GameCenterMatchmakingRuleUpdateRequest.ts';

/**
 * no description
 */
export class GameCenterMatchmakingRulesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param gameCenterMatchmakingRuleCreateRequest GameCenterMatchmakingRule representation
     */
    public async gameCenterMatchmakingRulesCreateInstance(gameCenterMatchmakingRuleCreateRequest: GameCenterMatchmakingRuleCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameCenterMatchmakingRuleCreateRequest' is not null or undefined
        if (gameCenterMatchmakingRuleCreateRequest === null || gameCenterMatchmakingRuleCreateRequest === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesCreateInstance", "gameCenterMatchmakingRuleCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRules';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gameCenterMatchmakingRuleCreateRequest, "GameCenterMatchmakingRuleCreateRequest", ""),
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
    public async gameCenterMatchmakingRulesDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRules/{id}'
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
     * @param id the id of the requested resource
     * @param granularity the granularity of the per-group dataset
     * @param limit maximum number of groups to return per page
     * @param groupBy the dimension by which to group the results
     * @param filterResult filter by \&#39;result\&#39; attribute dimension
     * @param filterGameCenterMatchmakingQueue filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'gameCenterMatchmakingQueue' | 'result'>, filterResult?: string, filterGameCenterMatchmakingQueue?: string, sort?: Array<'count' | '-count'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics", "granularity");
        }







        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (granularity !== undefined) {
            requestContext.setQueryParam("granularity", ObjectSerializer.serialize(granularity, "'P1D' | 'PT1H' | 'PT15M'", ""));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'gameCenterMatchmakingQueue' | 'result'>", ""));
        }

        // Query Params
        if (filterResult !== undefined) {
            requestContext.setQueryParam("filter[result]", ObjectSerializer.serialize(filterResult, "string", ""));
        }

        // Query Params
        if (filterGameCenterMatchmakingQueue !== undefined) {
            requestContext.setQueryParam("filter[gameCenterMatchmakingQueue]", ObjectSerializer.serialize(filterGameCenterMatchmakingQueue, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'count' | '-count'>", ""));
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
     * @param granularity the granularity of the per-group dataset
     * @param limit maximum number of groups to return per page
     * @param groupBy the dimension by which to group the results
     * @param filterGameCenterMatchmakingQueue filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'gameCenterMatchmakingQueue'>, filterGameCenterMatchmakingQueue?: string, sort?: Array<'averageResult' | '-averageResult' | 'count' | '-count' | 'p50Result' | '-p50Result' | 'p95Result' | '-p95Result'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics", "granularity");
        }






        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (granularity !== undefined) {
            requestContext.setQueryParam("granularity", ObjectSerializer.serialize(granularity, "'P1D' | 'PT1H' | 'PT15M'", ""));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'gameCenterMatchmakingQueue'>", ""));
        }

        // Query Params
        if (filterGameCenterMatchmakingQueue !== undefined) {
            requestContext.setQueryParam("filter[gameCenterMatchmakingQueue]", ObjectSerializer.serialize(filterGameCenterMatchmakingQueue, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageResult' | '-averageResult' | 'count' | '-count' | 'p50Result' | '-p50Result' | 'p95Result' | '-p95Result'>", ""));
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
     * @param granularity the granularity of the per-group dataset
     * @param limit maximum number of groups to return per page
     * @param groupBy the dimension by which to group the results
     * @param filterGameCenterMatchmakingQueue filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'gameCenterMatchmakingQueue'>, filterGameCenterMatchmakingQueue?: string, sort?: Array<'count' | '-count'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics", "granularity");
        }






        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingRuleErrors'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (granularity !== undefined) {
            requestContext.setQueryParam("granularity", ObjectSerializer.serialize(granularity, "'P1D' | 'PT1H' | 'PT15M'", ""));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'gameCenterMatchmakingQueue'>", ""));
        }

        // Query Params
        if (filterGameCenterMatchmakingQueue !== undefined) {
            requestContext.setQueryParam("filter[gameCenterMatchmakingQueue]", ObjectSerializer.serialize(filterGameCenterMatchmakingQueue, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'count' | '-count'>", ""));
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
     * @param gameCenterMatchmakingRuleUpdateRequest GameCenterMatchmakingRule representation
     */
    public async gameCenterMatchmakingRulesUpdateInstance(id: string, gameCenterMatchmakingRuleUpdateRequest: GameCenterMatchmakingRuleUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesUpdateInstance", "id");
        }


        // verify required parameter 'gameCenterMatchmakingRuleUpdateRequest' is not null or undefined
        if (gameCenterMatchmakingRuleUpdateRequest === null || gameCenterMatchmakingRuleUpdateRequest === undefined) {
            throw new RequiredError("GameCenterMatchmakingRulesApi", "gameCenterMatchmakingRulesUpdateInstance", "gameCenterMatchmakingRuleUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingRules/{id}'
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
            ObjectSerializer.serialize(gameCenterMatchmakingRuleUpdateRequest, "GameCenterMatchmakingRuleUpdateRequest", ""),
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

export class GameCenterMatchmakingRulesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRulesCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRulesCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleResponse >> {
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
            const body: GameCenterMatchmakingRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleResponse", ""
            ) as GameCenterMatchmakingRuleResponse;
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
            const body: GameCenterMatchmakingRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleResponse", ""
            ) as GameCenterMatchmakingRuleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRulesDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRulesDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingBooleanRuleResultsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingBooleanRuleResultsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingBooleanRuleResultsV1MetricResponse", ""
            ) as GameCenterMatchmakingBooleanRuleResultsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingBooleanRuleResultsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingBooleanRuleResultsV1MetricResponse", ""
            ) as GameCenterMatchmakingBooleanRuleResultsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingNumberRuleResultsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingNumberRuleResultsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingNumberRuleResultsV1MetricResponse", ""
            ) as GameCenterMatchmakingNumberRuleResultsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingNumberRuleResultsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingNumberRuleResultsV1MetricResponse", ""
            ) as GameCenterMatchmakingNumberRuleResultsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleErrorsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingRuleErrorsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleErrorsV1MetricResponse", ""
            ) as GameCenterMatchmakingRuleErrorsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingRuleErrorsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleErrorsV1MetricResponse", ""
            ) as GameCenterMatchmakingRuleErrorsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingRulesUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingRulesUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingRuleResponse >> {
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
            const body: GameCenterMatchmakingRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleResponse", ""
            ) as GameCenterMatchmakingRuleResponse;
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
            const body: GameCenterMatchmakingRuleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingRuleResponse", ""
            ) as GameCenterMatchmakingRuleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
