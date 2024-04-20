// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppsBetaTesterUsagesV1MetricResponse } from '../models/AppsBetaTesterUsagesV1MetricResponse.ts';
import { BetaBuildUsagesV1MetricResponse } from '../models/BetaBuildUsagesV1MetricResponse.ts';
import { BetaTesterUsagesV1MetricResponse } from '../models/BetaTesterUsagesV1MetricResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterMatchmakingAppRequestsV1MetricResponse } from '../models/GameCenterMatchmakingAppRequestsV1MetricResponse.ts';
import { GameCenterMatchmakingBooleanRuleResultsV1MetricResponse } from '../models/GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.ts';
import { GameCenterMatchmakingNumberRuleResultsV1MetricResponse } from '../models/GameCenterMatchmakingNumberRuleResultsV1MetricResponse.ts';
import { GameCenterMatchmakingQueueRequestsV1MetricResponse } from '../models/GameCenterMatchmakingQueueRequestsV1MetricResponse.ts';
import { GameCenterMatchmakingQueueSizesV1MetricResponse } from '../models/GameCenterMatchmakingQueueSizesV1MetricResponse.ts';
import { GameCenterMatchmakingRuleErrorsV1MetricResponse } from '../models/GameCenterMatchmakingRuleErrorsV1MetricResponse.ts';
import { GameCenterMatchmakingSessionsV1MetricResponse } from '../models/GameCenterMatchmakingSessionsV1MetricResponse.ts';

/**
 * no description
 */
export class MetricsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param limit maximum number of groups to return per page
     * @param groupBy the dimension by which to group the results
     * @param filterBetaTesters filter by \&#39;betaTesters\&#39; relationship dimension
     * @param period the duration of the reporting period
     */
    public async appsBetaTesterUsagesGetMetrics(id: string, limit?: number, groupBy?: Array<'betaTesters'>, filterBetaTesters?: string, period?: 'P7D' | 'P30D' | 'P90D' | 'P365D', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "appsBetaTesterUsagesGetMetrics", "id");
        }






        // Path Params
        const localVarPath = '/v1/apps/{id}/metrics/betaTesterUsages'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'betaTesters'>", ""));
        }

        // Query Params
        if (filterBetaTesters !== undefined) {
            requestContext.setQueryParam("filter[betaTesters]", ObjectSerializer.serialize(filterBetaTesters, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "'P7D' | 'P30D' | 'P90D' | 'P365D'", ""));
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
     * @param limit maximum number of groups to return per page
     * @param groupBy the dimension by which to group the results
     * @param filterBetaTesters filter by \&#39;betaTesters\&#39; relationship dimension
     * @param period the duration of the reporting period
     */
    public async betaGroupsBetaTesterUsagesGetMetrics(id: string, limit?: number, groupBy?: Array<'betaTesters'>, filterBetaTesters?: string, period?: 'P7D' | 'P30D' | 'P90D' | 'P365D', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "betaGroupsBetaTesterUsagesGetMetrics", "id");
        }






        // Path Params
        const localVarPath = '/v1/betaGroups/{id}/metrics/betaTesterUsages'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (groupBy !== undefined) {
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'betaTesters'>", ""));
        }

        // Query Params
        if (filterBetaTesters !== undefined) {
            requestContext.setQueryParam("filter[betaTesters]", ObjectSerializer.serialize(filterBetaTesters, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "'P7D' | 'P30D' | 'P90D' | 'P365D'", ""));
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
     * @param filterApps filter by \&#39;apps\&#39; relationship dimension
     * @param limit maximum number of groups to return per page
     * @param period the duration of the reporting period
     */
    public async betaTestersBetaTesterUsagesGetMetrics(id: string, filterApps: string, limit?: number, period?: 'P7D' | 'P30D' | 'P90D' | 'P365D', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "betaTestersBetaTesterUsagesGetMetrics", "id");
        }


        // verify required parameter 'filterApps' is not null or undefined
        if (filterApps === null || filterApps === undefined) {
            throw new RequiredError("MetricsApi", "betaTestersBetaTesterUsagesGetMetrics", "filterApps");
        }




        // Path Params
        const localVarPath = '/v1/betaTesters/{id}/metrics/betaTesterUsages'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (filterApps !== undefined) {
            requestContext.setQueryParam("filter[apps]", ObjectSerializer.serialize(filterApps, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "'P7D' | 'P30D' | 'P90D' | 'P365D'", ""));
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
     * @param limit maximum number of groups to return per page
     */
    public async buildsBetaBuildUsagesGetMetrics(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "buildsBetaBuildUsagesGetMetrics", "id");
        }



        // Path Params
        const localVarPath = '/v1/builds/{id}/metrics/betaBuildUsages'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * @param granularity the granularity of the per-group dataset
     * @param limit maximum number of groups to return per page
     * @param groupBy the dimension by which to group the results
     * @param filterResult filter by \&#39;result\&#39; attribute dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterDetailsClassicMatchmakingRequestsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'result'>, filterResult?: 'MATCHED' | 'CANCELED' | 'EXPIRED', sort?: Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterDetailsClassicMatchmakingRequestsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterDetailsClassicMatchmakingRequestsGetMetrics", "granularity");
        }






        // Path Params
        const localVarPath = '/v1/gameCenterDetails/{id}/metrics/classicMatchmakingRequests'
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
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'result'>", ""));
        }

        // Query Params
        if (filterResult !== undefined) {
            requestContext.setQueryParam("filter[result]", ObjectSerializer.serialize(filterResult, "'MATCHED' | 'CANCELED' | 'EXPIRED'", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>", ""));
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
     * @param filterResult filter by \&#39;result\&#39; attribute dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'result'>, filterResult?: 'MATCHED' | 'CANCELED' | 'EXPIRED', sort?: Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics", "granularity");
        }






        // Path Params
        const localVarPath = '/v1/gameCenterDetails/{id}/metrics/ruleBasedMatchmakingRequests'
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
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'result'>", ""));
        }

        // Query Params
        if (filterResult !== undefined) {
            requestContext.setQueryParam("filter[result]", ObjectSerializer.serialize(filterResult, "'MATCHED' | 'CANCELED' | 'EXPIRED'", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>", ""));
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
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, sort?: Array<'averageNumberOfRequests' | '-averageNumberOfRequests' | 'count' | '-count' | 'p50NumberOfRequests' | '-p50NumberOfRequests' | 'p95NumberOfRequests' | '-p95NumberOfRequests'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics", "granularity");
        }




        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes'
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
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageNumberOfRequests' | '-averageNumberOfRequests' | 'count' | '-count' | 'p50NumberOfRequests' | '-p50NumberOfRequests' | 'p95NumberOfRequests' | '-p95NumberOfRequests'>", ""));
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
     * @param filterResult filter by \&#39;result\&#39; attribute dimension
     * @param filterGameCenterDetail filter by \&#39;gameCenterDetail\&#39; relationship dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'gameCenterDetail' | 'result'>, filterResult?: 'MATCHED' | 'CANCELED' | 'EXPIRED', filterGameCenterDetail?: string, sort?: Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics", "granularity");
        }







        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests'
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
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'gameCenterDetail' | 'result'>", ""));
        }

        // Query Params
        if (filterResult !== undefined) {
            requestContext.setQueryParam("filter[result]", ObjectSerializer.serialize(filterResult, "'MATCHED' | 'CANCELED' | 'EXPIRED'", ""));
        }

        // Query Params
        if (filterGameCenterDetail !== undefined) {
            requestContext.setQueryParam("filter[gameCenterDetail]", ObjectSerializer.serialize(filterGameCenterDetail, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>", ""));
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
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, sort?: Array<'averageNumberOfRequests' | '-averageNumberOfRequests' | 'count' | '-count' | 'p50NumberOfRequests' | '-p50NumberOfRequests' | 'p95NumberOfRequests' | '-p95NumberOfRequests'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics", "granularity");
        }




        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingQueueSizes'
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
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageNumberOfRequests' | '-averageNumberOfRequests' | 'count' | '-count' | 'p50NumberOfRequests' | '-p50NumberOfRequests' | 'p95NumberOfRequests' | '-p95NumberOfRequests'>", ""));
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
     * @param filterResult filter by \&#39;result\&#39; attribute dimension
     * @param filterGameCenterDetail filter by \&#39;gameCenterDetail\&#39; relationship dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'gameCenterDetail' | 'result'>, filterResult?: 'MATCHED' | 'CANCELED' | 'EXPIRED', filterGameCenterDetail?: string, sort?: Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics", "granularity");
        }







        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingRequests'
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
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "Array<'gameCenterDetail' | 'result'>", ""));
        }

        // Query Params
        if (filterResult !== undefined) {
            requestContext.setQueryParam("filter[result]", ObjectSerializer.serialize(filterResult, "'MATCHED' | 'CANCELED' | 'EXPIRED'", ""));
        }

        // Query Params
        if (filterGameCenterDetail !== undefined) {
            requestContext.setQueryParam("filter[gameCenterDetail]", ObjectSerializer.serialize(filterGameCenterDetail, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'>", ""));
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
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, sort?: Array<'averagePlayerCount' | '-averagePlayerCount' | 'count' | '-count' | 'p50PlayerCount' | '-p50PlayerCount' | 'p95PlayerCount' | '-p95PlayerCount'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics", "granularity");
        }




        // Path Params
        const localVarPath = '/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions'
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
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'averagePlayerCount' | '-averagePlayerCount' | 'count' | '-count' | 'p50PlayerCount' | '-p50PlayerCount' | 'p95PlayerCount' | '-p95PlayerCount'>", ""));
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
     * @param filterResult filter by \&#39;result\&#39; attribute dimension
     * @param filterGameCenterMatchmakingQueue filter by \&#39;gameCenterMatchmakingQueue\&#39; relationship dimension
     * @param sort comma-separated list of sort expressions; metrics will be sorted as specified
     */
    public async gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(id: string, granularity: 'P1D' | 'PT1H' | 'PT15M', limit?: number, groupBy?: Array<'gameCenterMatchmakingQueue' | 'result'>, filterResult?: string, filterGameCenterMatchmakingQueue?: string, sort?: Array<'count' | '-count'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics", "granularity");
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
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics", "granularity");
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
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics", "id");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MetricsApi", "gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics", "granularity");
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

}

export class MetricsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsBetaTesterUsagesGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBetaTesterUsagesGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppsBetaTesterUsagesV1MetricResponse >> {
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
            const body: AppsBetaTesterUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppsBetaTesterUsagesV1MetricResponse", ""
            ) as AppsBetaTesterUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppsBetaTesterUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppsBetaTesterUsagesV1MetricResponse", ""
            ) as AppsBetaTesterUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to betaGroupsBetaTesterUsagesGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async betaGroupsBetaTesterUsagesGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppsBetaTesterUsagesV1MetricResponse >> {
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
            const body: AppsBetaTesterUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppsBetaTesterUsagesV1MetricResponse", ""
            ) as AppsBetaTesterUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppsBetaTesterUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppsBetaTesterUsagesV1MetricResponse", ""
            ) as AppsBetaTesterUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to betaTestersBetaTesterUsagesGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async betaTestersBetaTesterUsagesGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BetaTesterUsagesV1MetricResponse >> {
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
            const body: BetaTesterUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaTesterUsagesV1MetricResponse", ""
            ) as BetaTesterUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BetaTesterUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaTesterUsagesV1MetricResponse", ""
            ) as BetaTesterUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to buildsBetaBuildUsagesGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async buildsBetaBuildUsagesGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BetaBuildUsagesV1MetricResponse >> {
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
            const body: BetaBuildUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaBuildUsagesV1MetricResponse", ""
            ) as BetaBuildUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BetaBuildUsagesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaBuildUsagesV1MetricResponse", ""
            ) as BetaBuildUsagesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterDetailsClassicMatchmakingRequestsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterDetailsClassicMatchmakingRequestsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingAppRequestsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingAppRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingAppRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingAppRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingAppRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingAppRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingAppRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterDetailsRuleBasedMatchmakingRequestsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingAppRequestsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingAppRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingAppRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingAppRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingAppRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingAppRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingAppRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingQueueSizesV1MetricResponse >> {
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
            const body: GameCenterMatchmakingQueueSizesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueSizesV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueSizesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingQueueSizesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueSizesV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueSizesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingQueueRequestsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingQueueRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingQueueRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingQueueSizesV1MetricResponse >> {
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
            const body: GameCenterMatchmakingQueueSizesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueSizesV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueSizesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingQueueSizesV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueSizesV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueSizesV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingQueueRequestsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingQueueRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingQueueRequestsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingQueueRequestsV1MetricResponse", ""
            ) as GameCenterMatchmakingQueueRequestsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterMatchmakingSessionsV1MetricResponse >> {
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
            const body: GameCenterMatchmakingSessionsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingSessionsV1MetricResponse", ""
            ) as GameCenterMatchmakingSessionsV1MetricResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterMatchmakingSessionsV1MetricResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterMatchmakingSessionsV1MetricResponse", ""
            ) as GameCenterMatchmakingSessionsV1MetricResponse;
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

}
