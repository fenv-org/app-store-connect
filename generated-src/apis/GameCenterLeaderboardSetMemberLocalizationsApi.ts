// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterLeaderboardResponse } from '../models/GameCenterLeaderboardResponse.ts';
import { GameCenterLeaderboardSetMemberLocalizationCreateRequest } from '../models/GameCenterLeaderboardSetMemberLocalizationCreateRequest.ts';
import { GameCenterLeaderboardSetMemberLocalizationResponse } from '../models/GameCenterLeaderboardSetMemberLocalizationResponse.ts';
import { GameCenterLeaderboardSetMemberLocalizationUpdateRequest } from '../models/GameCenterLeaderboardSetMemberLocalizationUpdateRequest.ts';
import { GameCenterLeaderboardSetMemberLocalizationsResponse } from '../models/GameCenterLeaderboardSetMemberLocalizationsResponse.ts';
import { GameCenterLeaderboardSetResponse } from '../models/GameCenterLeaderboardSetResponse.ts';

/**
 * no description
 */
export class GameCenterLeaderboardSetMemberLocalizationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param gameCenterLeaderboardSetMemberLocalizationCreateRequest GameCenterLeaderboardSetMemberLocalization representation
     */
    public async gameCenterLeaderboardSetMemberLocalizationsCreateInstance(gameCenterLeaderboardSetMemberLocalizationCreateRequest: GameCenterLeaderboardSetMemberLocalizationCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameCenterLeaderboardSetMemberLocalizationCreateRequest' is not null or undefined
        if (gameCenterLeaderboardSetMemberLocalizationCreateRequest === null || gameCenterLeaderboardSetMemberLocalizationCreateRequest === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsCreateInstance", "gameCenterLeaderboardSetMemberLocalizationCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterLeaderboardSetMemberLocalizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gameCenterLeaderboardSetMemberLocalizationCreateRequest, "GameCenterLeaderboardSetMemberLocalizationCreateRequest", ""),
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
    public async gameCenterLeaderboardSetMemberLocalizationsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterLeaderboardSetMemberLocalizations/{id}'
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
     * @param fieldsGameCenterLeaderboardLocalizations the fields to include for returned resources of type gameCenterLeaderboardLocalizations
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param fieldsGameCenterLeaderboardReleases the fields to include for returned resources of type gameCenterLeaderboardReleases
     * @param limitGameCenterLeaderboardSets maximum number of related gameCenterLeaderboardSets returned (when they are included)
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param limitReleases maximum number of related releases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated(id: string, fieldsGameCenterLeaderboardLocalizations?: Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, fieldsGameCenterLeaderboardReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'>, limitGameCenterLeaderboardSets?: number, limitLocalizations?: number, limitReleases?: number, include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'releases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated", "id");
        }












        // Path Params
        const localVarPath = '/v1/gameCenterLeaderboardSetMemberLocalizations/{id}/gameCenterLeaderboard'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterLeaderboardLocalizations !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardLocalizations]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardLocalizations, "Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSets]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSets, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>", ""));
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
        if (fieldsGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboards]", ObjectSerializer.serialize(fieldsGameCenterLeaderboards, "Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardReleases !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardReleases]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardReleases, "Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'>", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboardSets]", ObjectSerializer.serialize(limitGameCenterLeaderboardSets, "number", ""));
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
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'releases'>", ""));
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
     * @param fieldsGameCenterLeaderboardSetLocalizations the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
     * @param fieldsGameCenterLeaderboardSetReleases the fields to include for returned resources of type gameCenterLeaderboardSetReleases
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param limitGameCenterLeaderboards maximum number of related gameCenterLeaderboards returned (when they are included)
     * @param limitReleases maximum number of related releases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated(id: string, fieldsGameCenterLeaderboardSetLocalizations?: Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'>, fieldsGameCenterLeaderboardSetReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, limitLocalizations?: number, limitGameCenterLeaderboards?: number, limitReleases?: number, include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'releases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated", "id");
        }












        // Path Params
        const localVarPath = '/v1/gameCenterLeaderboardSetMemberLocalizations/{id}/gameCenterLeaderboardSet'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterLeaderboardSetLocalizations !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSetLocalizations]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSetLocalizations, "Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSetReleases !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSetReleases]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSetReleases, "Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSets]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSets, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>", ""));
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
        if (fieldsGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboards]", ObjectSerializer.serialize(fieldsGameCenterLeaderboards, "Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (limitLocalizations !== undefined) {
            requestContext.setQueryParam("limit[localizations]", ObjectSerializer.serialize(limitLocalizations, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboards]", ObjectSerializer.serialize(limitGameCenterLeaderboards, "number", ""));
        }

        // Query Params
        if (limitReleases !== undefined) {
            requestContext.setQueryParam("limit[releases]", ObjectSerializer.serialize(limitReleases, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'releases'>", ""));
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
     * @param filterGameCenterLeaderboard filter by id(s) of related \&#39;gameCenterLeaderboard\&#39;
     * @param filterGameCenterLeaderboardSet filter by id(s) of related \&#39;gameCenterLeaderboardSet\&#39;
     * @param fieldsGameCenterLeaderboardSetMemberLocalizations the fields to include for returned resources of type gameCenterLeaderboardSetMemberLocalizations
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     */
    public async gameCenterLeaderboardSetMemberLocalizationsGetCollection(filterGameCenterLeaderboard: Array<string>, filterGameCenterLeaderboardSet: Array<string>, fieldsGameCenterLeaderboardSetMemberLocalizations?: Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardSet' | 'locale' | 'name'>, limit?: number, include?: Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardSet'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterGameCenterLeaderboard' is not null or undefined
        if (filterGameCenterLeaderboard === null || filterGameCenterLeaderboard === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsGetCollection", "filterGameCenterLeaderboard");
        }


        // verify required parameter 'filterGameCenterLeaderboardSet' is not null or undefined
        if (filterGameCenterLeaderboardSet === null || filterGameCenterLeaderboardSet === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsGetCollection", "filterGameCenterLeaderboardSet");
        }







        // Path Params
        const localVarPath = '/v1/gameCenterLeaderboardSetMemberLocalizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGameCenterLeaderboard !== undefined) {
            requestContext.setQueryParam("filter[gameCenterLeaderboard]", ObjectSerializer.serialize(filterGameCenterLeaderboard, "Array<string>", ""));
        }

        // Query Params
        if (filterGameCenterLeaderboardSet !== undefined) {
            requestContext.setQueryParam("filter[gameCenterLeaderboardSet]", ObjectSerializer.serialize(filterGameCenterLeaderboardSet, "Array<string>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSetMemberLocalizations !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSetMemberLocalizations]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSetMemberLocalizations, "Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardSet' | 'locale' | 'name'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardSet'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSets]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSets, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboards]", ObjectSerializer.serialize(fieldsGameCenterLeaderboards, "Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>", ""));
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
     * @param gameCenterLeaderboardSetMemberLocalizationUpdateRequest GameCenterLeaderboardSetMemberLocalization representation
     */
    public async gameCenterLeaderboardSetMemberLocalizationsUpdateInstance(id: string, gameCenterLeaderboardSetMemberLocalizationUpdateRequest: GameCenterLeaderboardSetMemberLocalizationUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsUpdateInstance", "id");
        }


        // verify required parameter 'gameCenterLeaderboardSetMemberLocalizationUpdateRequest' is not null or undefined
        if (gameCenterLeaderboardSetMemberLocalizationUpdateRequest === null || gameCenterLeaderboardSetMemberLocalizationUpdateRequest === undefined) {
            throw new RequiredError("GameCenterLeaderboardSetMemberLocalizationsApi", "gameCenterLeaderboardSetMemberLocalizationsUpdateInstance", "gameCenterLeaderboardSetMemberLocalizationUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterLeaderboardSetMemberLocalizations/{id}'
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
            ObjectSerializer.serialize(gameCenterLeaderboardSetMemberLocalizationUpdateRequest, "GameCenterLeaderboardSetMemberLocalizationUpdateRequest", ""),
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

export class GameCenterLeaderboardSetMemberLocalizationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterLeaderboardSetMemberLocalizationsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterLeaderboardSetMemberLocalizationsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardSetMemberLocalizationResponse >> {
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
            const body: GameCenterLeaderboardSetMemberLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetMemberLocalizationResponse", ""
            ) as GameCenterLeaderboardSetMemberLocalizationResponse;
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
            const body: GameCenterLeaderboardSetMemberLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetMemberLocalizationResponse", ""
            ) as GameCenterLeaderboardSetMemberLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterLeaderboardSetMemberLocalizationsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterLeaderboardSetMemberLocalizationsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardResponse >> {
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
            const body: GameCenterLeaderboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardResponse", ""
            ) as GameCenterLeaderboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterLeaderboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardResponse", ""
            ) as GameCenterLeaderboardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardSetResponse >> {
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
            const body: GameCenterLeaderboardSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetResponse", ""
            ) as GameCenterLeaderboardSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterLeaderboardSetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetResponse", ""
            ) as GameCenterLeaderboardSetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterLeaderboardSetMemberLocalizationsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterLeaderboardSetMemberLocalizationsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardSetMemberLocalizationsResponse >> {
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
            const body: GameCenterLeaderboardSetMemberLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetMemberLocalizationsResponse", ""
            ) as GameCenterLeaderboardSetMemberLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterLeaderboardSetMemberLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetMemberLocalizationsResponse", ""
            ) as GameCenterLeaderboardSetMemberLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterLeaderboardSetMemberLocalizationsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterLeaderboardSetMemberLocalizationsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardSetMemberLocalizationResponse >> {
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
            const body: GameCenterLeaderboardSetMemberLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetMemberLocalizationResponse", ""
            ) as GameCenterLeaderboardSetMemberLocalizationResponse;
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
            const body: GameCenterLeaderboardSetMemberLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetMemberLocalizationResponse", ""
            ) as GameCenterLeaderboardSetMemberLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
