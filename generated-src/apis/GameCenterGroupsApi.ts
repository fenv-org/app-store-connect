// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterAchievementsResponse } from '../models/GameCenterAchievementsResponse.ts';
import { GameCenterDetailsResponse } from '../models/GameCenterDetailsResponse.ts';
import { GameCenterGroupCreateRequest } from '../models/GameCenterGroupCreateRequest.ts';
import { GameCenterGroupGameCenterAchievementsLinkagesRequest } from '../models/GameCenterGroupGameCenterAchievementsLinkagesRequest.ts';
import { GameCenterGroupGameCenterAchievementsLinkagesResponse } from '../models/GameCenterGroupGameCenterAchievementsLinkagesResponse.ts';
import { GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest } from '../models/GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest.ts';
import { GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse } from '../models/GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse.ts';
import { GameCenterGroupGameCenterLeaderboardsLinkagesRequest } from '../models/GameCenterGroupGameCenterLeaderboardsLinkagesRequest.ts';
import { GameCenterGroupGameCenterLeaderboardsLinkagesResponse } from '../models/GameCenterGroupGameCenterLeaderboardsLinkagesResponse.ts';
import { GameCenterGroupResponse } from '../models/GameCenterGroupResponse.ts';
import { GameCenterGroupUpdateRequest } from '../models/GameCenterGroupUpdateRequest.ts';
import { GameCenterGroupsResponse } from '../models/GameCenterGroupsResponse.ts';
import { GameCenterLeaderboardSetsResponse } from '../models/GameCenterLeaderboardSetsResponse.ts';
import { GameCenterLeaderboardsResponse } from '../models/GameCenterLeaderboardsResponse.ts';

/**
 * no description
 */
export class GameCenterGroupsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param gameCenterGroupCreateRequest GameCenterGroup representation
     */
    public async gameCenterGroupsCreateInstance(gameCenterGroupCreateRequest: GameCenterGroupCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameCenterGroupCreateRequest' is not null or undefined
        if (gameCenterGroupCreateRequest === null || gameCenterGroupCreateRequest === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsCreateInstance", "gameCenterGroupCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterGroups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gameCenterGroupCreateRequest, "GameCenterGroupCreateRequest", ""),
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
    public async gameCenterGroupsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}'
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
     * @param filterArchived filter by attribute \&#39;archived\&#39;
     * @param filterReferenceName filter by attribute \&#39;referenceName\&#39;
     * @param filterId filter by id(s)
     * @param fieldsGameCenterAchievementReleases the fields to include for returned resources of type gameCenterAchievementReleases
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterAchievementLocalizations the fields to include for returned resources of type gameCenterAchievementLocalizations
     * @param fieldsGameCenterAchievements the fields to include for returned resources of type gameCenterAchievements
     * @param limit maximum resources per page
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param limitReleases maximum number of related releases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterGroupsGameCenterAchievementsGetToManyRelated(id: string, filterArchived?: Array<string>, filterReferenceName?: Array<string>, filterId?: Array<string>, fieldsGameCenterAchievementReleases?: Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterAchievementLocalizations?: Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, limit?: number, limitLocalizations?: number, limitReleases?: number, include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterAchievementsGetToManyRelated", "id");
        }














        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/gameCenterAchievements'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterArchived !== undefined) {
            requestContext.setQueryParam("filter[archived]", ObjectSerializer.serialize(filterArchived, "Array<string>", ""));
        }

        // Query Params
        if (filterReferenceName !== undefined) {
            requestContext.setQueryParam("filter[referenceName]", ObjectSerializer.serialize(filterReferenceName, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

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
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * @param limit maximum resources per page
     */
    public async gameCenterGroupsGameCenterAchievementsGetToManyRelationship(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterAchievementsGetToManyRelationship", "id");
        }



        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/relationships/gameCenterAchievements'
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
     * @param gameCenterGroupGameCenterAchievementsLinkagesRequest List of related linkages
     */
    public async gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship(id: string, gameCenterGroupGameCenterAchievementsLinkagesRequest: GameCenterGroupGameCenterAchievementsLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship", "id");
        }


        // verify required parameter 'gameCenterGroupGameCenterAchievementsLinkagesRequest' is not null or undefined
        if (gameCenterGroupGameCenterAchievementsLinkagesRequest === null || gameCenterGroupGameCenterAchievementsLinkagesRequest === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship", "gameCenterGroupGameCenterAchievementsLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/relationships/gameCenterAchievements'
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
            ObjectSerializer.serialize(gameCenterGroupGameCenterAchievementsLinkagesRequest, "GameCenterGroupGameCenterAchievementsLinkagesRequest", ""),
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
     * @param filterGameCenterAppVersionsEnabled filter by attribute \&#39;gameCenterAppVersions.enabled\&#39;
     * @param fieldsGameCenterAchievementReleases the fields to include for returned resources of type gameCenterAchievementReleases
     * @param fieldsGameCenterLeaderboardSetReleases the fields to include for returned resources of type gameCenterLeaderboardSetReleases
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param fieldsGameCenterAppVersions the fields to include for returned resources of type gameCenterAppVersions
     * @param fieldsGameCenterAchievements the fields to include for returned resources of type gameCenterAchievements
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsGameCenterLeaderboardReleases the fields to include for returned resources of type gameCenterLeaderboardReleases
     * @param limit maximum resources per page
     * @param limitGameCenterAppVersions maximum number of related gameCenterAppVersions returned (when they are included)
     * @param limitGameCenterLeaderboards maximum number of related gameCenterLeaderboards returned (when they are included)
     * @param limitGameCenterLeaderboardSets maximum number of related gameCenterLeaderboardSets returned (when they are included)
     * @param limitGameCenterAchievements maximum number of related gameCenterAchievements returned (when they are included)
     * @param limitAchievementReleases maximum number of related achievementReleases returned (when they are included)
     * @param limitLeaderboardReleases maximum number of related leaderboardReleases returned (when they are included)
     * @param limitLeaderboardSetReleases maximum number of related leaderboardSetReleases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterGroupsGameCenterDetailsGetToManyRelated(id: string, filterGameCenterAppVersionsEnabled?: Array<string>, fieldsGameCenterAchievementReleases?: Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'>, fieldsGameCenterLeaderboardSetReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, fieldsGameCenterAppVersions?: Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsGameCenterLeaderboardReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'>, limit?: number, limitGameCenterAppVersions?: number, limitGameCenterLeaderboards?: number, limitGameCenterLeaderboardSets?: number, limitGameCenterAchievements?: number, limitAchievementReleases?: number, limitLeaderboardReleases?: number, limitLeaderboardSetReleases?: number, include?: Array<'achievementReleases' | 'app' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterDetailsGetToManyRelated", "id");
        }






















        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/gameCenterDetails'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGameCenterAppVersionsEnabled !== undefined) {
            requestContext.setQueryParam("filter[gameCenterAppVersions.enabled]", ObjectSerializer.serialize(filterGameCenterAppVersionsEnabled, "Array<string>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievementReleases !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievementReleases]", ObjectSerializer.serialize(fieldsGameCenterAchievementReleases, "Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'>", ""));
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
        if (fieldsGameCenterAppVersions !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAppVersions]", ObjectSerializer.serialize(fieldsGameCenterAppVersions, "Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'>", ""));
        }

        // Query Params
        if (fieldsGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievements]", ObjectSerializer.serialize(fieldsGameCenterAchievements, "Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardReleases !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardReleases]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardReleases, "Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitGameCenterAppVersions !== undefined) {
            requestContext.setQueryParam("limit[gameCenterAppVersions]", ObjectSerializer.serialize(limitGameCenterAppVersions, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboards]", ObjectSerializer.serialize(limitGameCenterLeaderboards, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboardSets]", ObjectSerializer.serialize(limitGameCenterLeaderboardSets, "number", ""));
        }

        // Query Params
        if (limitGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("limit[gameCenterAchievements]", ObjectSerializer.serialize(limitGameCenterAchievements, "number", ""));
        }

        // Query Params
        if (limitAchievementReleases !== undefined) {
            requestContext.setQueryParam("limit[achievementReleases]", ObjectSerializer.serialize(limitAchievementReleases, "number", ""));
        }

        // Query Params
        if (limitLeaderboardReleases !== undefined) {
            requestContext.setQueryParam("limit[leaderboardReleases]", ObjectSerializer.serialize(limitLeaderboardReleases, "number", ""));
        }

        // Query Params
        if (limitLeaderboardSetReleases !== undefined) {
            requestContext.setQueryParam("limit[leaderboardSetReleases]", ObjectSerializer.serialize(limitLeaderboardSetReleases, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'achievementReleases' | 'app' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>", ""));
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
     * @param filterReferenceName filter by attribute \&#39;referenceName\&#39;
     * @param filterId filter by id(s)
     * @param fieldsGameCenterLeaderboardSetLocalizations the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
     * @param fieldsGameCenterLeaderboardSetReleases the fields to include for returned resources of type gameCenterLeaderboardSetReleases
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param limit maximum resources per page
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param limitGameCenterLeaderboards maximum number of related gameCenterLeaderboards returned (when they are included)
     * @param limitReleases maximum number of related releases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated(id: string, filterReferenceName?: Array<string>, filterId?: Array<string>, fieldsGameCenterLeaderboardSetLocalizations?: Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'>, fieldsGameCenterLeaderboardSetReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, limit?: number, limitLocalizations?: number, limitGameCenterLeaderboards?: number, limitReleases?: number, include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'releases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated", "id");
        }















        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/gameCenterLeaderboardSets'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterReferenceName !== undefined) {
            requestContext.setQueryParam("filter[referenceName]", ObjectSerializer.serialize(filterReferenceName, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

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
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * @param id the id of the requested resource
     * @param limit maximum resources per page
     */
    public async gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship", "id");
        }



        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets'
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
     * @param gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest List of related linkages
     */
    public async gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship(id: string, gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest: GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship", "id");
        }


        // verify required parameter 'gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest' is not null or undefined
        if (gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest === null || gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship", "gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets'
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
            ObjectSerializer.serialize(gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest, "GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest", ""),
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
     * @param filterArchived filter by attribute \&#39;archived\&#39;
     * @param filterReferenceName filter by attribute \&#39;referenceName\&#39;
     * @param filterId filter by id(s)
     * @param fieldsGameCenterLeaderboardLocalizations the fields to include for returned resources of type gameCenterLeaderboardLocalizations
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param fieldsGameCenterLeaderboardReleases the fields to include for returned resources of type gameCenterLeaderboardReleases
     * @param limit maximum resources per page
     * @param limitGameCenterLeaderboardSets maximum number of related gameCenterLeaderboardSets returned (when they are included)
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param limitReleases maximum number of related releases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async gameCenterGroupsGameCenterLeaderboardsGetToManyRelated(id: string, filterArchived?: Array<string>, filterReferenceName?: Array<string>, filterId?: Array<string>, fieldsGameCenterLeaderboardLocalizations?: Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, fieldsGameCenterLeaderboardReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'>, limit?: number, limitGameCenterLeaderboardSets?: number, limitLocalizations?: number, limitReleases?: number, include?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'releases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardsGetToManyRelated", "id");
        }
















        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/gameCenterLeaderboards'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterArchived !== undefined) {
            requestContext.setQueryParam("filter[archived]", ObjectSerializer.serialize(filterArchived, "Array<string>", ""));
        }

        // Query Params
        if (filterReferenceName !== undefined) {
            requestContext.setQueryParam("filter[referenceName]", ObjectSerializer.serialize(filterReferenceName, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

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
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * @param limit maximum resources per page
     */
    public async gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship", "id");
        }



        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboards'
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
     * @param gameCenterGroupGameCenterLeaderboardsLinkagesRequest List of related linkages
     */
    public async gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship(id: string, gameCenterGroupGameCenterLeaderboardsLinkagesRequest: GameCenterGroupGameCenterLeaderboardsLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship", "id");
        }


        // verify required parameter 'gameCenterGroupGameCenterLeaderboardsLinkagesRequest' is not null or undefined
        if (gameCenterGroupGameCenterLeaderboardsLinkagesRequest === null || gameCenterGroupGameCenterLeaderboardsLinkagesRequest === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship", "gameCenterGroupGameCenterLeaderboardsLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboards'
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
            ObjectSerializer.serialize(gameCenterGroupGameCenterLeaderboardsLinkagesRequest, "GameCenterGroupGameCenterLeaderboardsLinkagesRequest", ""),
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
     * @param filterGameCenterDetails filter by id(s) of related \&#39;gameCenterDetails\&#39;
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param fieldsGameCenterAchievements the fields to include for returned resources of type gameCenterAchievements
     * @param limitGameCenterAchievements maximum number of related gameCenterAchievements returned (when they are included)
     * @param limitGameCenterDetails maximum number of related gameCenterDetails returned (when they are included)
     * @param limitGameCenterLeaderboardSets maximum number of related gameCenterLeaderboardSets returned (when they are included)
     * @param limitGameCenterLeaderboards maximum number of related gameCenterLeaderboards returned (when they are included)
     */
    public async gameCenterGroupsGetCollection(filterGameCenterDetails?: Array<string>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, limit?: number, include?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, limitGameCenterAchievements?: number, limitGameCenterDetails?: number, limitGameCenterLeaderboardSets?: number, limitGameCenterLeaderboards?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/v1/gameCenterGroups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGameCenterDetails !== undefined) {
            requestContext.setQueryParam("filter[gameCenterDetails]", ObjectSerializer.serialize(filterGameCenterDetails, "Array<string>", ""));
        }

        // Query Params
        if (fieldsGameCenterGroups !== undefined) {
            requestContext.setQueryParam("fields[gameCenterGroups]", ObjectSerializer.serialize(fieldsGameCenterGroups, "Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSets]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSets, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>", ""));
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
        if (fieldsGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievements]", ObjectSerializer.serialize(fieldsGameCenterAchievements, "Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (limitGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("limit[gameCenterAchievements]", ObjectSerializer.serialize(limitGameCenterAchievements, "number", ""));
        }

        // Query Params
        if (limitGameCenterDetails !== undefined) {
            requestContext.setQueryParam("limit[gameCenterDetails]", ObjectSerializer.serialize(limitGameCenterDetails, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboardSets]", ObjectSerializer.serialize(limitGameCenterLeaderboardSets, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboards]", ObjectSerializer.serialize(limitGameCenterLeaderboards, "number", ""));
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
     * @param fieldsGameCenterGroups the fields to include for returned resources of type gameCenterGroups
     * @param include comma-separated list of relationships to include
     * @param fieldsGameCenterLeaderboardSets the fields to include for returned resources of type gameCenterLeaderboardSets
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsGameCenterLeaderboards the fields to include for returned resources of type gameCenterLeaderboards
     * @param fieldsGameCenterAchievements the fields to include for returned resources of type gameCenterAchievements
     * @param limitGameCenterAchievements maximum number of related gameCenterAchievements returned (when they are included)
     * @param limitGameCenterDetails maximum number of related gameCenterDetails returned (when they are included)
     * @param limitGameCenterLeaderboardSets maximum number of related gameCenterLeaderboardSets returned (when they are included)
     * @param limitGameCenterLeaderboards maximum number of related gameCenterLeaderboards returned (when they are included)
     */
    public async gameCenterGroupsGetInstance(id: string, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, include?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, limitGameCenterAchievements?: number, limitGameCenterDetails?: number, limitGameCenterLeaderboardSets?: number, limitGameCenterLeaderboards?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsGetInstance", "id");
        }












        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsGameCenterGroups !== undefined) {
            requestContext.setQueryParam("fields[gameCenterGroups]", ObjectSerializer.serialize(fieldsGameCenterGroups, "Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'>", ""));
        }

        // Query Params
        if (fieldsGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("fields[gameCenterLeaderboardSets]", ObjectSerializer.serialize(fieldsGameCenterLeaderboardSets, "Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>", ""));
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
        if (fieldsGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("fields[gameCenterAchievements]", ObjectSerializer.serialize(fieldsGameCenterAchievements, "Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>", ""));
        }

        // Query Params
        if (limitGameCenterAchievements !== undefined) {
            requestContext.setQueryParam("limit[gameCenterAchievements]", ObjectSerializer.serialize(limitGameCenterAchievements, "number", ""));
        }

        // Query Params
        if (limitGameCenterDetails !== undefined) {
            requestContext.setQueryParam("limit[gameCenterDetails]", ObjectSerializer.serialize(limitGameCenterDetails, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboardSets !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboardSets]", ObjectSerializer.serialize(limitGameCenterLeaderboardSets, "number", ""));
        }

        // Query Params
        if (limitGameCenterLeaderboards !== undefined) {
            requestContext.setQueryParam("limit[gameCenterLeaderboards]", ObjectSerializer.serialize(limitGameCenterLeaderboards, "number", ""));
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
     * @param gameCenterGroupUpdateRequest GameCenterGroup representation
     */
    public async gameCenterGroupsUpdateInstance(id: string, gameCenterGroupUpdateRequest: GameCenterGroupUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsUpdateInstance", "id");
        }


        // verify required parameter 'gameCenterGroupUpdateRequest' is not null or undefined
        if (gameCenterGroupUpdateRequest === null || gameCenterGroupUpdateRequest === undefined) {
            throw new RequiredError("GameCenterGroupsApi", "gameCenterGroupsUpdateInstance", "gameCenterGroupUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/gameCenterGroups/{id}'
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
            ObjectSerializer.serialize(gameCenterGroupUpdateRequest, "GameCenterGroupUpdateRequest", ""),
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

export class GameCenterGroupsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupResponse >> {
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
            const body: GameCenterGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupResponse", ""
            ) as GameCenterGroupResponse;
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
            const body: GameCenterGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupResponse", ""
            ) as GameCenterGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterAchievementsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterAchievementsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterAchievementsResponse >> {
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
            const body: GameCenterAchievementsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementsResponse", ""
            ) as GameCenterAchievementsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterAchievementsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterAchievementsResponse", ""
            ) as GameCenterAchievementsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterAchievementsGetToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterAchievementsGetToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupGameCenterAchievementsLinkagesResponse >> {
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
            const body: GameCenterGroupGameCenterAchievementsLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupGameCenterAchievementsLinkagesResponse", ""
            ) as GameCenterGroupGameCenterAchievementsLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterGroupGameCenterAchievementsLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupGameCenterAchievementsLinkagesResponse", ""
            ) as GameCenterGroupGameCenterAchievementsLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterAchievementsReplaceToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterDetailsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterDetailsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterDetailsResponse >> {
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
            const body: GameCenterDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterDetailsResponse", ""
            ) as GameCenterDetailsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterDetailsResponse", ""
            ) as GameCenterDetailsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardSetsResponse >> {
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
            const body: GameCenterLeaderboardSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetsResponse", ""
            ) as GameCenterLeaderboardSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterLeaderboardSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardSetsResponse", ""
            ) as GameCenterLeaderboardSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse >> {
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
            const body: GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse", ""
            ) as GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse", ""
            ) as GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterLeaderboardsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterLeaderboardsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterLeaderboardsResponse >> {
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
            const body: GameCenterLeaderboardsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardsResponse", ""
            ) as GameCenterLeaderboardsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterLeaderboardsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterLeaderboardsResponse", ""
            ) as GameCenterLeaderboardsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterLeaderboardsGetToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupGameCenterLeaderboardsLinkagesResponse >> {
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
            const body: GameCenterGroupGameCenterLeaderboardsLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupGameCenterLeaderboardsLinkagesResponse", ""
            ) as GameCenterGroupGameCenterLeaderboardsLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterGroupGameCenterLeaderboardsLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupGameCenterLeaderboardsLinkagesResponse", ""
            ) as GameCenterGroupGameCenterLeaderboardsLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
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
     * @params response Response returned by the server for a request to gameCenterGroupsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupsResponse >> {
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
            const body: GameCenterGroupsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupsResponse", ""
            ) as GameCenterGroupsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterGroupsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupsResponse", ""
            ) as GameCenterGroupsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupResponse >> {
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
            const body: GameCenterGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupResponse", ""
            ) as GameCenterGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupResponse", ""
            ) as GameCenterGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gameCenterGroupsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gameCenterGroupsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterGroupResponse >> {
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
            const body: GameCenterGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupResponse", ""
            ) as GameCenterGroupResponse;
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
            const body: GameCenterGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterGroupResponse", ""
            ) as GameCenterGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
