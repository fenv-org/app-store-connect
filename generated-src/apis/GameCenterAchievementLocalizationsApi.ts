// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterAchievementImageResponse } from '../models/GameCenterAchievementImageResponse.ts';
import { GameCenterAchievementLocalizationCreateRequest } from '../models/GameCenterAchievementLocalizationCreateRequest.ts';
import { GameCenterAchievementLocalizationResponse } from '../models/GameCenterAchievementLocalizationResponse.ts';
import { GameCenterAchievementLocalizationUpdateRequest } from '../models/GameCenterAchievementLocalizationUpdateRequest.ts';
import { GameCenterAchievementResponse } from '../models/GameCenterAchievementResponse.ts';

/**
 * no description
 */
export class GameCenterAchievementLocalizationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param gameCenterAchievementLocalizationCreateRequest GameCenterAchievementLocalization representation
     */
    public async gameCenterAchievementLocalizationsCreateInstance(gameCenterAchievementLocalizationCreateRequest: GameCenterAchievementLocalizationCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameCenterAchievementLocalizationCreateRequest' is not null or undefined
        if (gameCenterAchievementLocalizationCreateRequest === null || gameCenterAchievementLocalizationCreateRequest === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsCreateInstance", "gameCenterAchievementLocalizationCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterAchievementLocalizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gameCenterAchievementLocalizationCreateRequest, "GameCenterAchievementLocalizationCreateRequest", ""),
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
    public async gameCenterAchievementLocalizationsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterAchievementLocalizations/{id}'
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
     * @param fieldsGameCenterAchievementReleases the fields to include for returned resources of type gameCenterAchievementReleases
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterAchievementLocalizations the fields to include for returned resources of type gameCenterAchievementLocalizations
     * @param fieldsGameCenterAchievements the fields to include for returned resources of type gameCenterAchievements
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param limitReleases maximum number of related releases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated(id: string, fieldsGameCenterAchievementReleases?: Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterAchievementLocalizations?: Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, limitLocalizations?: number, limitReleases?: number, include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievement'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterAchievementReleases !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementReleases]", ObjectSerializer.serialize(fieldsGameCenterAchievementReleases, "Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'>", ""));
        }

        // Query Params
        if (fieldsGameCenterGroups !== undefined) {
            requestContext.setQueryParam("fields[gameCenterGroups]", ObjectSerializer.serialize(fieldsGameCenterGroups, "Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>", ""));
        }

        // Query Params
        if (fieldsGameCenterDetails !== undefined) {
            requestContext.setQueryParam("fields[gameCenterDetails]", ObjectSerializer.serialize(fieldsGameCenterDetails, "Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievementLocalizations !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementLocalizations]", ObjectSerializer.serialize(fieldsGameCenterAchievementLocalizations, "Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievements]", ObjectSerializer.serialize(fieldsGameCenterAchievements, "Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (limitLocalizations !== undefined) {
            requestContext.setQueryParam("limit[localizations]", ObjectSerializer.serialize(limitLocalizations, "number", ""));
        }

        // Query Params
        if (limitReleases !== undefined) {
            requestContext.setQueryParam("limit[releases]", ObjectSerializer.serialize(limitReleases, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases'>", ""));
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
     * @param fieldsGameCenterAchievementImages the fields to include for returned resources of type gameCenterAchievementImages
     * @param fieldsGameCenterAchievementLocalizations the fields to include for returned resources of type gameCenterAchievementLocalizations
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated(id: string, fieldsGameCenterAchievementImages?: Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'>, fieldsGameCenterAchievementLocalizations?: Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>, include?: Array<'gameCenterAchievementLocalization'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievementImage'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterAchievementImages !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementImages]", ObjectSerializer.serialize(fieldsGameCenterAchievementImages, "Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievementLocalizations !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementLocalizations]", ObjectSerializer.serialize(fieldsGameCenterAchievementLocalizations, "Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterAchievementLocalization'>", ""));
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
     * @param fieldsGameCenterAchievementLocalizations the fields to include for returned resources of type gameCenterAchievementLocalizations
     * @param include comma-separated list of relationships to include
     * @param fieldsGameCenterAchievementImages the fields to include for returned resources of type gameCenterAchievementImages
     * @param fieldsGameCenterAchievements the fields to include for returned resources of type gameCenterAchievements
     */
    public async gameCenterAchievementLocalizationsGetInstance(id: string, fieldsGameCenterAchievementLocalizations?: Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>, include?: Array<'gameCenterAchievement' | 'gameCenterAchievementImage'>, fieldsGameCenterAchievementImages?: Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsGetInstance", "id");
        }






        // Path Params
        const localVarPath = '/v1/gameCenterAchievementLocalizations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterAchievementLocalizations !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementLocalizations]", ObjectSerializer.serialize(fieldsGameCenterAchievementLocalizations, "Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterAchievement' | 'gameCenterAchievementImage'>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievementImages !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementImages]", ObjectSerializer.serialize(fieldsGameCenterAchievementImages, "Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievements]", ObjectSerializer.serialize(fieldsGameCenterAchievements, "Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>", ""));
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
     * @param gameCenterAchievementLocalizationUpdateRequest GameCenterAchievementLocalization representation
     */
    public async gameCenterAchievementLocalizationsUpdateInstance(id: string, gameCenterAchievementLocalizationUpdateRequest: GameCenterAchievementLocalizationUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsUpdateInstance", "id");
        }


        // verify required parameter 'gameCenterAchievementLocalizationUpdateRequest' is not null or undefined
        if (gameCenterAchievementLocalizationUpdateRequest === null || gameCenterAchievementLocalizationUpdateRequest === undefined) {
            throw new RequiredError("GameCenterAchievementLocalizationsApi", "gameCenterAchievementLocalizationsUpdateInstance", "gameCenterAchievementLocalizationUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterAchievementLocalizations/{id}'
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
            ObjectSerializer.serialize(gameCenterAchievementLocalizationUpdateRequest, "GameCenterAchievementLocalizationUpdateRequest", ""),
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

export class GameCenterAchievementLocalizationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterAchievementLocalizationsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterAchievementLocalizationsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterAchievementLocalizationResponse >> {
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
            const body: GameCenterAchievementLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementLocalizationResponse", ""
            ) as GameCenterAchievementLocalizationResponse;
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
            const body: GameCenterAchievementLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementLocalizationResponse", ""
            ) as GameCenterAchievementLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterAchievementLocalizationsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterAchievementLocalizationsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterAchievementResponse >> {
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
            const body: GameCenterAchievementResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementResponse", ""
            ) as GameCenterAchievementResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterAchievementResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementResponse", ""
            ) as GameCenterAchievementResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterAchievementImageResponse >> {
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
            const body: GameCenterAchievementImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementImageResponse", ""
            ) as GameCenterAchievementImageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterAchievementImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementImageResponse", ""
            ) as GameCenterAchievementImageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterAchievementLocalizationsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterAchievementLocalizationsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterAchievementLocalizationResponse >> {
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
            const body: GameCenterAchievementLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementLocalizationResponse", ""
            ) as GameCenterAchievementLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterAchievementLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementLocalizationResponse", ""
            ) as GameCenterAchievementLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterAchievementLocalizationsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterAchievementLocalizationsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterAchievementLocalizationResponse >> {
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
            const body: GameCenterAchievementLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementLocalizationResponse", ""
            ) as GameCenterAchievementLocalizationResponse;
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
            const body: GameCenterAchievementLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementLocalizationResponse", ""
            ) as GameCenterAchievementLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
