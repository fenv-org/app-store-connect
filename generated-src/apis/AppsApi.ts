// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AlternativeDistributionKeyResponse } from '../models/AlternativeDistributionKeyResponse.ts';
import { AnalyticsReportRequestsResponse } from '../models/AnalyticsReportRequestsResponse.ts';
import { AppAvailabilityResponse } from '../models/AppAvailabilityResponse.ts';
import { AppBetaTestersLinkagesRequest } from '../models/AppBetaTestersLinkagesRequest.ts';
import { AppClipsResponse } from '../models/AppClipsResponse.ts';
import { AppCustomProductPagesResponse } from '../models/AppCustomProductPagesResponse.ts';
import { AppEncryptionDeclarationsResponse } from '../models/AppEncryptionDeclarationsResponse.ts';
import { AppEventsResponse } from '../models/AppEventsResponse.ts';
import { AppInfosResponse } from '../models/AppInfosResponse.ts';
import { AppPreOrderWithoutIncludesResponse } from '../models/AppPreOrderWithoutIncludesResponse.ts';
import { AppPricePointsV2Response } from '../models/AppPricePointsV2Response.ts';
import { AppPricePointsV3Response } from '../models/AppPricePointsV3Response.ts';
import { AppPriceScheduleResponse } from '../models/AppPriceScheduleResponse.ts';
import { AppPricesResponse } from '../models/AppPricesResponse.ts';
import { AppPromotedPurchasesLinkagesRequest } from '../models/AppPromotedPurchasesLinkagesRequest.ts';
import { AppPromotedPurchasesLinkagesResponse } from '../models/AppPromotedPurchasesLinkagesResponse.ts';
import { AppResponse } from '../models/AppResponse.ts';
import { AppStoreVersionExperimentsV2Response } from '../models/AppStoreVersionExperimentsV2Response.ts';
import { AppStoreVersionsResponse } from '../models/AppStoreVersionsResponse.ts';
import { AppUpdateRequest } from '../models/AppUpdateRequest.ts';
import { AppsBetaTesterUsagesV1MetricResponse } from '../models/AppsBetaTesterUsagesV1MetricResponse.ts';
import { AppsResponse } from '../models/AppsResponse.ts';
import { BetaAppLocalizationsWithoutIncludesResponse } from '../models/BetaAppLocalizationsWithoutIncludesResponse.ts';
import { BetaAppReviewDetailWithoutIncludesResponse } from '../models/BetaAppReviewDetailWithoutIncludesResponse.ts';
import { BetaGroupsWithoutIncludesResponse } from '../models/BetaGroupsWithoutIncludesResponse.ts';
import { BetaLicenseAgreementWithoutIncludesResponse } from '../models/BetaLicenseAgreementWithoutIncludesResponse.ts';
import { BuildsWithoutIncludesResponse } from '../models/BuildsWithoutIncludesResponse.ts';
import { CiProductResponse } from '../models/CiProductResponse.ts';
import { CustomerReviewsResponse } from '../models/CustomerReviewsResponse.ts';
import { EndUserLicenseAgreementWithoutIncludesResponse } from '../models/EndUserLicenseAgreementWithoutIncludesResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';
import { GameCenterDetailResponse } from '../models/GameCenterDetailResponse.ts';
import { GameCenterEnabledVersionsResponse } from '../models/GameCenterEnabledVersionsResponse.ts';
import { InAppPurchasesResponse } from '../models/InAppPurchasesResponse.ts';
import { InAppPurchasesV2Response } from '../models/InAppPurchasesV2Response.ts';
import { MarketplaceSearchDetailResponse } from '../models/MarketplaceSearchDetailResponse.ts';
import { PreReleaseVersionsWithoutIncludesResponse } from '../models/PreReleaseVersionsWithoutIncludesResponse.ts';
import { PromotedPurchasesResponse } from '../models/PromotedPurchasesResponse.ts';
import { ReviewSubmissionsResponse } from '../models/ReviewSubmissionsResponse.ts';
import { SubscriptionGracePeriodResponse } from '../models/SubscriptionGracePeriodResponse.ts';
import { SubscriptionGroupsResponse } from '../models/SubscriptionGroupsResponse.ts';
import { TerritoriesResponse } from '../models/TerritoriesResponse.ts';
import { XcodeMetrics } from '../models/XcodeMetrics.ts';

/**
 * no description
 */
export class AppsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsAlternativeDistributionKeys the fields to include for returned resources of type alternativeDistributionKeys
     */
    public async appsAlternativeDistributionKeyGetToOneRelated(id: string, fieldsAlternativeDistributionKeys?: Array<'app' | 'publicKey'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAlternativeDistributionKeyGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/alternativeDistributionKey'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAlternativeDistributionKeys !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionKeys]", ObjectSerializer.serialize(fieldsAlternativeDistributionKeys, "Array<'app' | 'publicKey'>", ""));
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
     * @param filterAccessType filter by attribute \&#39;accessType\&#39;
     * @param fieldsAnalyticsReportRequests the fields to include for returned resources of type analyticsReportRequests
     * @param fieldsAnalyticsReports the fields to include for returned resources of type analyticsReports
     * @param limit maximum resources per page
     * @param limitReports maximum number of related reports returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAnalyticsReportRequestsGetToManyRelated(id: string, filterAccessType?: Array<'ONE_TIME_SNAPSHOT' | 'ONGOING'>, fieldsAnalyticsReportRequests?: Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'>, fieldsAnalyticsReports?: Array<'category' | 'instances' | 'name'>, limit?: number, limitReports?: number, include?: Array<'reports'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAnalyticsReportRequestsGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/apps/{id}/analyticsReportRequests'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterAccessType !== undefined) {
            requestContext.setQueryParam("filter[accessType]", ObjectSerializer.serialize(filterAccessType, "Array<'ONE_TIME_SNAPSHOT' | 'ONGOING'>", ""));
        }

        // Query Params
        if (fieldsAnalyticsReportRequests !== undefined) {
            requestContext.setQueryParam("fields[analyticsReportRequests]", ObjectSerializer.serialize(fieldsAnalyticsReportRequests, "Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'>", ""));
        }

        // Query Params
        if (fieldsAnalyticsReports !== undefined) {
            requestContext.setQueryParam("fields[analyticsReports]", ObjectSerializer.serialize(fieldsAnalyticsReports, "Array<'category' | 'instances' | 'name'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitReports !== undefined) {
            requestContext.setQueryParam("limit[reports]", ObjectSerializer.serialize(limitReports, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'reports'>", ""));
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
     * @param fieldsAppAvailabilities the fields to include for returned resources of type appAvailabilities
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limitAvailableTerritories maximum number of related availableTerritories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppAvailabilityGetToOneRelated(id: string, fieldsAppAvailabilities?: Array<'app' | 'availableInNewTerritories' | 'availableTerritories'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsTerritories?: Array<'currency'>, limitAvailableTerritories?: number, include?: Array<'app' | 'availableTerritories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppAvailabilityGetToOneRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/apps/{id}/appAvailability'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[appAvailabilities]", ObjectSerializer.serialize(fieldsAppAvailabilities, "Array<'app' | 'availableInNewTerritories' | 'availableTerritories'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limitAvailableTerritories !== undefined) {
            requestContext.setQueryParam("limit[availableTerritories]", ObjectSerializer.serialize(limitAvailableTerritories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'availableTerritories'>", ""));
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
     * @param filterBundleId filter by attribute \&#39;bundleId\&#39;
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
     * @param limit maximum resources per page
     * @param limitAppClipDefaultExperiences maximum number of related appClipDefaultExperiences returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppClipsGetToManyRelated(id: string, filterBundleId?: Array<string>, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsAppClipDefaultExperiences?: Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>, limit?: number, limitAppClipDefaultExperiences?: number, include?: Array<'app' | 'appClipDefaultExperiences'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppClipsGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/apps/{id}/appClips'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterBundleId !== undefined) {
            requestContext.setQueryParam("filter[bundleId]", ObjectSerializer.serialize(filterBundleId, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperiences]", ObjectSerializer.serialize(fieldsAppClipDefaultExperiences, "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("limit[appClipDefaultExperiences]", ObjectSerializer.serialize(limitAppClipDefaultExperiences, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appClipDefaultExperiences'>", ""));
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
     * @param filterVisible filter by attribute \&#39;visible\&#39;
     * @param fieldsAppCustomProductPages the fields to include for returned resources of type appCustomProductPages
     * @param fieldsAppCustomProductPageVersions the fields to include for returned resources of type appCustomProductPageVersions
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param limit maximum resources per page
     * @param limitAppCustomProductPageVersions maximum number of related appCustomProductPageVersions returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppCustomProductPagesGetToManyRelated(id: string, filterVisible?: Array<string>, fieldsAppCustomProductPages?: Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>, fieldsAppCustomProductPageVersions?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, limitAppCustomProductPageVersions?: number, include?: Array<'app' | 'appCustomProductPageVersions'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppCustomProductPagesGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/apps/{id}/appCustomProductPages'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterVisible !== undefined) {
            requestContext.setQueryParam("filter[visible]", ObjectSerializer.serialize(filterVisible, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPages]", ObjectSerializer.serialize(fieldsAppCustomProductPages, "Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPageVersions !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPageVersions]", ObjectSerializer.serialize(fieldsAppCustomProductPageVersions, "Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppCustomProductPageVersions !== undefined) {
            requestContext.setQueryParam("limit[appCustomProductPageVersions]", ObjectSerializer.serialize(limitAppCustomProductPageVersions, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appCustomProductPageVersions'>", ""));
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
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterBuilds filter by id(s) of related \&#39;builds\&#39;
     * @param fieldsAppEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsAppEncryptionDeclarationDocuments the fields to include for returned resources of type appEncryptionDeclarationDocuments
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param limit maximum resources per page
     * @param limitBuilds maximum number of related builds returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppEncryptionDeclarationsGetToManyRelated(id: string, filterPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterBuilds?: Array<string>, fieldsAppEncryptionDeclarations?: Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsAppEncryptionDeclarationDocuments?: Array<'appEncryptionDeclaration' | 'assetDeliveryState' | 'assetToken' | 'downloadUrl' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, limit?: number, limitBuilds?: number, include?: Array<'app' | 'appEncryptionDeclarationDocument' | 'builds'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppEncryptionDeclarationsGetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/apps/{id}/appEncryptionDeclarations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPlatform !== undefined) {
            requestContext.setQueryParam("filter[platform]", ObjectSerializer.serialize(filterPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>", ""));
        }

        // Query Params
        if (filterBuilds !== undefined) {
            requestContext.setQueryParam("filter[builds]", ObjectSerializer.serialize(filterBuilds, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("fields[appEncryptionDeclarations]", ObjectSerializer.serialize(fieldsAppEncryptionDeclarations, "Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsAppEncryptionDeclarationDocuments !== undefined) {
            requestContext.setQueryParam("fields[appEncryptionDeclarationDocuments]", ObjectSerializer.serialize(fieldsAppEncryptionDeclarationDocuments, "Array<'appEncryptionDeclaration' | 'assetDeliveryState' | 'assetToken' | 'downloadUrl' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitBuilds !== undefined) {
            requestContext.setQueryParam("limit[builds]", ObjectSerializer.serialize(limitBuilds, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appEncryptionDeclarationDocument' | 'builds'>", ""));
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
     * @param filterEventState filter by attribute \&#39;eventState\&#39;
     * @param filterId filter by id(s)
     * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param limit maximum resources per page
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppEventsGetToManyRelated(id: string, filterEventState?: Array<'DRAFT' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'ACCEPTED' | 'APPROVED' | 'PUBLISHED' | 'PAST' | 'ARCHIVED'>, filterId?: Array<string>, fieldsAppEventLocalizations?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, limit?: number, limitLocalizations?: number, include?: Array<'localizations'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppEventsGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/apps/{id}/appEvents'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterEventState !== undefined) {
            requestContext.setQueryParam("filter[eventState]", ObjectSerializer.serialize(filterEventState, "Array<'DRAFT' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'ACCEPTED' | 'APPROVED' | 'PUBLISHED' | 'PAST' | 'ARCHIVED'>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppEventLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appEventLocalizations]", ObjectSerializer.serialize(fieldsAppEventLocalizations, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>", ""));
        }

        // Query Params
        if (fieldsAppEvents !== undefined) {
            requestContext.setQueryParam("fields[appEvents]", ObjectSerializer.serialize(fieldsAppEvents, "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>", ""));
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
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'localizations'>", ""));
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
     * @param fieldsAgeRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
     * @param fieldsAppInfos the fields to include for returned resources of type appInfos
     * @param fieldsAppInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param limit maximum resources per page
     * @param limitAppInfoLocalizations maximum number of related appInfoLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppInfosGetToManyRelated(id: string, fieldsAgeRatingDeclarations?: Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>, fieldsAppInfos?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>, fieldsAppInfoLocalizations?: Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, limitAppInfoLocalizations?: number, include?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppInfosGetToManyRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/apps/{id}/appInfos'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAgeRatingDeclarations !== undefined) {
            requestContext.setQueryParam("fields[ageRatingDeclarations]", ObjectSerializer.serialize(fieldsAgeRatingDeclarations, "Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>", ""));
        }

        // Query Params
        if (fieldsAppInfos !== undefined) {
            requestContext.setQueryParam("fields[appInfos]", ObjectSerializer.serialize(fieldsAppInfos, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>", ""));
        }

        // Query Params
        if (fieldsAppInfoLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appInfoLocalizations]", ObjectSerializer.serialize(fieldsAppInfoLocalizations, "Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>", ""));
        }

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppInfoLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appInfoLocalizations]", ObjectSerializer.serialize(limitAppInfoLocalizations, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo'>", ""));
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
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsAppPricePoints the fields to include for returned resources of type appPricePoints
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appsAppPricePointsGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsAppPricePoints?: Array<'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'app' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppPricePointsGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/apps/{id}/appPricePoints'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppPricePoints !== undefined) {
            requestContext.setQueryParam("fields[appPricePoints]", ObjectSerializer.serialize(fieldsAppPricePoints, "Array<'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'territory'>", ""));
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
     * @param fieldsAppPrices the fields to include for returned resources of type appPrices
     * @param fieldsAppPriceSchedules the fields to include for returned resources of type appPriceSchedules
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limitManualPrices maximum number of related manualPrices returned (when they are included)
     * @param limitAutomaticPrices maximum number of related automaticPrices returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppPriceScheduleGetToOneRelated(id: string, fieldsAppPrices?: Array<'appPricePoint' | 'endDate' | 'manual' | 'startDate' | 'territory'>, fieldsAppPriceSchedules?: Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsTerritories?: Array<'currency'>, limitManualPrices?: number, limitAutomaticPrices?: number, include?: Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppPriceScheduleGetToOneRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/apps/{id}/appPriceSchedule'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppPrices !== undefined) {
            requestContext.setQueryParam("fields[appPrices]", ObjectSerializer.serialize(fieldsAppPrices, "Array<'appPricePoint' | 'endDate' | 'manual' | 'startDate' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsAppPriceSchedules !== undefined) {
            requestContext.setQueryParam("fields[appPriceSchedules]", ObjectSerializer.serialize(fieldsAppPriceSchedules, "Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limitManualPrices !== undefined) {
            requestContext.setQueryParam("limit[manualPrices]", ObjectSerializer.serialize(limitManualPrices, "number", ""));
        }

        // Query Params
        if (limitAutomaticPrices !== undefined) {
            requestContext.setQueryParam("limit[automaticPrices]", ObjectSerializer.serialize(limitAutomaticPrices, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>", ""));
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
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsAppStoreVersionExperimentTreatments the fields to include for returned resources of type appStoreVersionExperimentTreatments
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param limit maximum resources per page
     * @param limitControlVersions maximum number of related controlVersions returned (when they are included)
     * @param limitAppStoreVersionExperimentTreatments maximum number of related appStoreVersionExperimentTreatments returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppStoreVersionExperimentsV2GetToManyRelated(id: string, filterState?: Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'STOPPED'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsAppStoreVersionExperimentTreatments?: Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, limitControlVersions?: number, limitAppStoreVersionExperimentTreatments?: number, include?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'latestControlVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppStoreVersionExperimentsV2GetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/apps/{id}/appStoreVersionExperimentsV2'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterState !== undefined) {
            requestContext.setQueryParam("filter[state]", ObjectSerializer.serialize(filterState, "Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'STOPPED'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatments, "Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitControlVersions !== undefined) {
            requestContext.setQueryParam("limit[controlVersions]", ObjectSerializer.serialize(limitControlVersions, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentTreatments !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentTreatments]", ObjectSerializer.serialize(limitAppStoreVersionExperimentTreatments, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'latestControlVersion'>", ""));
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
     * @param filterAppStoreState filter by attribute \&#39;appStoreState\&#39;
     * @param filterAppVersionState filter by attribute \&#39;appVersionState\&#39;
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterVersionString filter by attribute \&#39;versionString\&#39;
     * @param filterId filter by id(s)
     * @param fieldsAgeRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
     * @param fieldsAppStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
     * @param fieldsAppStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsAppStoreVersionSubmissions the fields to include for returned resources of type appStoreVersionSubmissions
     * @param fieldsAlternativeDistributionPackages the fields to include for returned resources of type alternativeDistributionPackages
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsRoutingAppCoverages the fields to include for returned resources of type routingAppCoverages
     * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
     * @param fieldsAppStoreVersionPhasedReleases the fields to include for returned resources of type appStoreVersionPhasedReleases
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param limit maximum resources per page
     * @param limitAppStoreVersionLocalizations maximum number of related appStoreVersionLocalizations returned (when they are included)
     * @param limitAppStoreVersionExperiments maximum number of related appStoreVersionExperiments returned (when they are included)
     * @param limitAppStoreVersionExperimentsV2 maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsAppStoreVersionsGetToManyRelated(id: string, filterAppStoreState?: Array<'ACCEPTED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_CONTRACT' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PREORDER_READY_FOR_SALE' | 'PROCESSING_FOR_APP_STORE' | 'READY_FOR_REVIEW' | 'READY_FOR_SALE' | 'REJECTED' | 'REMOVED_FROM_SALE' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW' | 'REPLACED_WITH_NEW_VERSION' | 'NOT_APPLICABLE'>, filterAppVersionState?: Array<'ACCEPTED' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PROCESSING_FOR_DISTRIBUTION' | 'READY_FOR_DISTRIBUTION' | 'READY_FOR_REVIEW' | 'REJECTED' | 'REPLACED_WITH_NEW_VERSION' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW'>, filterPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterVersionString?: Array<string>, filterId?: Array<string>, fieldsAgeRatingDeclarations?: Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>, fieldsAppStoreReviewDetails?: Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsAppStoreVersionLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsAppStoreVersionSubmissions?: Array<'appStoreVersion'>, fieldsAlternativeDistributionPackages?: Array<'appStoreVersion' | 'versions'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsRoutingAppCoverages?: Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, fieldsAppClipDefaultExperiences?: Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>, fieldsAppStoreVersionPhasedReleases?: Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, limit?: number, limitAppStoreVersionLocalizations?: number, limitAppStoreVersionExperiments?: number, limitAppStoreVersionExperimentsV2?: number, include?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'routingAppCoverage'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAppStoreVersionsGetToManyRelated", "id");
        }
























        // Path Params
        const localVarPath = '/v1/apps/{id}/appStoreVersions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterAppStoreState !== undefined) {
            requestContext.setQueryParam("filter[appStoreState]", ObjectSerializer.serialize(filterAppStoreState, "Array<'ACCEPTED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_CONTRACT' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PREORDER_READY_FOR_SALE' | 'PROCESSING_FOR_APP_STORE' | 'READY_FOR_REVIEW' | 'READY_FOR_SALE' | 'REJECTED' | 'REMOVED_FROM_SALE' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW' | 'REPLACED_WITH_NEW_VERSION' | 'NOT_APPLICABLE'>", ""));
        }

        // Query Params
        if (filterAppVersionState !== undefined) {
            requestContext.setQueryParam("filter[appVersionState]", ObjectSerializer.serialize(filterAppVersionState, "Array<'ACCEPTED' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PROCESSING_FOR_DISTRIBUTION' | 'READY_FOR_DISTRIBUTION' | 'READY_FOR_REVIEW' | 'REJECTED' | 'REPLACED_WITH_NEW_VERSION' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW'>", ""));
        }

        // Query Params
        if (filterPlatform !== undefined) {
            requestContext.setQueryParam("filter[platform]", ObjectSerializer.serialize(filterPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>", ""));
        }

        // Query Params
        if (filterVersionString !== undefined) {
            requestContext.setQueryParam("filter[versionString]", ObjectSerializer.serialize(filterVersionString, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAgeRatingDeclarations !== undefined) {
            requestContext.setQueryParam("fields[ageRatingDeclarations]", ObjectSerializer.serialize(fieldsAgeRatingDeclarations, "Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>", ""));
        }

        // Query Params
        if (fieldsAppStoreReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[appStoreReviewDetails]", ObjectSerializer.serialize(fieldsAppStoreReviewDetails, "Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionSubmissions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionSubmissions]", ObjectSerializer.serialize(fieldsAppStoreVersionSubmissions, "Array<'appStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackages !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackages]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackages, "Array<'appStoreVersion' | 'versions'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsRoutingAppCoverages !== undefined) {
            requestContext.setQueryParam("fields[routingAppCoverages]", ObjectSerializer.serialize(fieldsRoutingAppCoverages, "Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperiences]", ObjectSerializer.serialize(fieldsAppClipDefaultExperiences, "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionPhasedReleases !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionPhasedReleases]", ObjectSerializer.serialize(fieldsAppStoreVersionPhasedReleases, "Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'>", ""));
        }

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionLocalizations]", ObjectSerializer.serialize(limitAppStoreVersionLocalizations, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperiments]", ObjectSerializer.serialize(limitAppStoreVersionExperiments, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentsV2 !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentsV2]", ObjectSerializer.serialize(limitAppStoreVersionExperimentsV2, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'routingAppCoverage'>", ""));
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
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     */
    public async appsAvailableTerritoriesGetToManyRelated(id: string, fieldsTerritories?: Array<'currency'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsAvailableTerritoriesGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/apps/{id}/availableTerritories'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
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
     * @param fieldsBetaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
     * @param limit maximum resources per page
     */
    public async appsBetaAppLocalizationsGetToManyRelated(id: string, fieldsBetaAppLocalizations?: Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBetaAppLocalizationsGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/apps/{id}/betaAppLocalizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("fields[betaAppLocalizations]", ObjectSerializer.serialize(fieldsBetaAppLocalizations, "Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>", ""));
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
     * @param fieldsBetaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
     */
    public async appsBetaAppReviewDetailGetToOneRelated(id: string, fieldsBetaAppReviewDetails?: Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBetaAppReviewDetailGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/betaAppReviewDetail'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBetaAppReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[betaAppReviewDetails]", ObjectSerializer.serialize(fieldsBetaAppReviewDetails, "Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
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
     * @param fieldsBetaGroups the fields to include for returned resources of type betaGroups
     * @param limit maximum resources per page
     */
    public async appsBetaGroupsGetToManyRelated(id: string, fieldsBetaGroups?: Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBetaGroupsGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/apps/{id}/betaGroups'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBetaGroups !== undefined) {
            requestContext.setQueryParam("fields[betaGroups]", ObjectSerializer.serialize(fieldsBetaGroups, "Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>", ""));
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
     * @param fieldsBetaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
     */
    public async appsBetaLicenseAgreementGetToOneRelated(id: string, fieldsBetaLicenseAgreements?: Array<'agreementText' | 'app'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBetaLicenseAgreementGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/betaLicenseAgreement'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBetaLicenseAgreements !== undefined) {
            requestContext.setQueryParam("fields[betaLicenseAgreements]", ObjectSerializer.serialize(fieldsBetaLicenseAgreements, "Array<'agreementText' | 'app'>", ""));
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
    public async appsBetaTesterUsagesGetMetrics(id: string, limit?: number, groupBy?: Array<'betaTesters'>, filterBetaTesters?: string, period?: 'P7D' | 'P30D' | 'P90D' | 'P365D', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBetaTesterUsagesGetMetrics", "id");
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
     * @param appBetaTestersLinkagesRequest List of related linkages
     */
    public async appsBetaTestersDeleteToManyRelationship(id: string, appBetaTestersLinkagesRequest: AppBetaTestersLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBetaTestersDeleteToManyRelationship", "id");
        }


        // verify required parameter 'appBetaTestersLinkagesRequest' is not null or undefined
        if (appBetaTestersLinkagesRequest === null || appBetaTestersLinkagesRequest === undefined) {
            throw new RequiredError("AppsApi", "appsBetaTestersDeleteToManyRelationship", "appBetaTestersLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{id}/relationships/betaTesters'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(appBetaTestersLinkagesRequest, "AppBetaTestersLinkagesRequest", ""),
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
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param limit maximum resources per page
     */
    public async appsBuildsGetToManyRelated(id: string, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsBuildsGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/apps/{id}/builds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
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
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     * @param limitPrimaryRepositories maximum number of related primaryRepositories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsCiProductGetToOneRelated(id: string, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, limitPrimaryRepositories?: number, include?: Array<'app' | 'bundleId' | 'primaryRepositories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsCiProductGetToOneRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/apps/{id}/ciProduct'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsScmRepositories !== undefined) {
            requestContext.setQueryParam("fields[scmRepositories]", ObjectSerializer.serialize(fieldsScmRepositories, "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>", ""));
        }

        // Query Params
        if (fieldsBundleIds !== undefined) {
            requestContext.setQueryParam("fields[bundleIds]", ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>", ""));
        }

        // Query Params
        if (limitPrimaryRepositories !== undefined) {
            requestContext.setQueryParam("limit[primaryRepositories]", ObjectSerializer.serialize(limitPrimaryRepositories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'bundleId' | 'primaryRepositories'>", ""));
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
     * @param filterRating filter by attribute \&#39;rating\&#39;
     * @param filterTerritory filter by attribute \&#39;territory\&#39;
     * @param existsPublishedResponse filter by publishedResponse
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsCustomerReviews the fields to include for returned resources of type customerReviews
     * @param fieldsCustomerReviewResponses the fields to include for returned resources of type customerReviewResponses
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appsCustomerReviewsGetToManyRelated(id: string, filterRating?: Array<string>, filterTerritory?: Array<'ABW' | 'AFG' | 'AGO' | 'AIA' | 'ALB' | 'AND' | 'ANT' | 'ARE' | 'ARG' | 'ARM' | 'ASM' | 'ATG' | 'AUS' | 'AUT' | 'AZE' | 'BDI' | 'BEL' | 'BEN' | 'BES' | 'BFA' | 'BGD' | 'BGR' | 'BHR' | 'BHS' | 'BIH' | 'BLR' | 'BLZ' | 'BMU' | 'BOL' | 'BRA' | 'BRB' | 'BRN' | 'BTN' | 'BWA' | 'CAF' | 'CAN' | 'CHE' | 'CHL' | 'CHN' | 'CIV' | 'CMR' | 'COD' | 'COG' | 'COK' | 'COL' | 'COM' | 'CPV' | 'CRI' | 'CUB' | 'CUW' | 'CXR' | 'CYM' | 'CYP' | 'CZE' | 'DEU' | 'DJI' | 'DMA' | 'DNK' | 'DOM' | 'DZA' | 'ECU' | 'EGY' | 'ERI' | 'ESP' | 'EST' | 'ETH' | 'FIN' | 'FJI' | 'FLK' | 'FRA' | 'FRO' | 'FSM' | 'GAB' | 'GBR' | 'GEO' | 'GGY' | 'GHA' | 'GIB' | 'GIN' | 'GLP' | 'GMB' | 'GNB' | 'GNQ' | 'GRC' | 'GRD' | 'GRL' | 'GTM' | 'GUF' | 'GUM' | 'GUY' | 'HKG' | 'HND' | 'HRV' | 'HTI' | 'HUN' | 'IDN' | 'IMN' | 'IND' | 'IRL' | 'IRQ' | 'ISL' | 'ISR' | 'ITA' | 'JAM' | 'JEY' | 'JOR' | 'JPN' | 'KAZ' | 'KEN' | 'KGZ' | 'KHM' | 'KIR' | 'KNA' | 'KOR' | 'KWT' | 'LAO' | 'LBN' | 'LBR' | 'LBY' | 'LCA' | 'LIE' | 'LKA' | 'LSO' | 'LTU' | 'LUX' | 'LVA' | 'MAC' | 'MAR' | 'MCO' | 'MDA' | 'MDG' | 'MDV' | 'MEX' | 'MHL' | 'MKD' | 'MLI' | 'MLT' | 'MMR' | 'MNE' | 'MNG' | 'MNP' | 'MOZ' | 'MRT' | 'MSR' | 'MTQ' | 'MUS' | 'MWI' | 'MYS' | 'MYT' | 'NAM' | 'NCL' | 'NER' | 'NFK' | 'NGA' | 'NIC' | 'NIU' | 'NLD' | 'NOR' | 'NPL' | 'NRU' | 'NZL' | 'OMN' | 'PAK' | 'PAN' | 'PER' | 'PHL' | 'PLW' | 'PNG' | 'POL' | 'PRI' | 'PRT' | 'PRY' | 'PSE' | 'PYF' | 'QAT' | 'REU' | 'ROU' | 'RUS' | 'RWA' | 'SAU' | 'SEN' | 'SGP' | 'SHN' | 'SLB' | 'SLE' | 'SLV' | 'SMR' | 'SOM' | 'SPM' | 'SRB' | 'SSD' | 'STP' | 'SUR' | 'SVK' | 'SVN' | 'SWE' | 'SWZ' | 'SXM' | 'SYC' | 'TCA' | 'TCD' | 'TGO' | 'THA' | 'TJK' | 'TKM' | 'TLS' | 'TON' | 'TTO' | 'TUN' | 'TUR' | 'TUV' | 'TWN' | 'TZA' | 'UGA' | 'UKR' | 'UMI' | 'URY' | 'USA' | 'UZB' | 'VAT' | 'VCT' | 'VEN' | 'VGB' | 'VIR' | 'VNM' | 'VUT' | 'WLF' | 'WSM' | 'YEM' | 'ZAF' | 'ZMB' | 'ZWE'>, existsPublishedResponse?: boolean, sort?: Array<'createdDate' | '-createdDate' | 'rating' | '-rating'>, fieldsCustomerReviews?: Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>, fieldsCustomerReviewResponses?: Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'>, limit?: number, include?: Array<'response'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsCustomerReviewsGetToManyRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/apps/{id}/customerReviews'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterRating !== undefined) {
            requestContext.setQueryParam("filter[rating]", ObjectSerializer.serialize(filterRating, "Array<string>", ""));
        }

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<'ABW' | 'AFG' | 'AGO' | 'AIA' | 'ALB' | 'AND' | 'ANT' | 'ARE' | 'ARG' | 'ARM' | 'ASM' | 'ATG' | 'AUS' | 'AUT' | 'AZE' | 'BDI' | 'BEL' | 'BEN' | 'BES' | 'BFA' | 'BGD' | 'BGR' | 'BHR' | 'BHS' | 'BIH' | 'BLR' | 'BLZ' | 'BMU' | 'BOL' | 'BRA' | 'BRB' | 'BRN' | 'BTN' | 'BWA' | 'CAF' | 'CAN' | 'CHE' | 'CHL' | 'CHN' | 'CIV' | 'CMR' | 'COD' | 'COG' | 'COK' | 'COL' | 'COM' | 'CPV' | 'CRI' | 'CUB' | 'CUW' | 'CXR' | 'CYM' | 'CYP' | 'CZE' | 'DEU' | 'DJI' | 'DMA' | 'DNK' | 'DOM' | 'DZA' | 'ECU' | 'EGY' | 'ERI' | 'ESP' | 'EST' | 'ETH' | 'FIN' | 'FJI' | 'FLK' | 'FRA' | 'FRO' | 'FSM' | 'GAB' | 'GBR' | 'GEO' | 'GGY' | 'GHA' | 'GIB' | 'GIN' | 'GLP' | 'GMB' | 'GNB' | 'GNQ' | 'GRC' | 'GRD' | 'GRL' | 'GTM' | 'GUF' | 'GUM' | 'GUY' | 'HKG' | 'HND' | 'HRV' | 'HTI' | 'HUN' | 'IDN' | 'IMN' | 'IND' | 'IRL' | 'IRQ' | 'ISL' | 'ISR' | 'ITA' | 'JAM' | 'JEY' | 'JOR' | 'JPN' | 'KAZ' | 'KEN' | 'KGZ' | 'KHM' | 'KIR' | 'KNA' | 'KOR' | 'KWT' | 'LAO' | 'LBN' | 'LBR' | 'LBY' | 'LCA' | 'LIE' | 'LKA' | 'LSO' | 'LTU' | 'LUX' | 'LVA' | 'MAC' | 'MAR' | 'MCO' | 'MDA' | 'MDG' | 'MDV' | 'MEX' | 'MHL' | 'MKD' | 'MLI' | 'MLT' | 'MMR' | 'MNE' | 'MNG' | 'MNP' | 'MOZ' | 'MRT' | 'MSR' | 'MTQ' | 'MUS' | 'MWI' | 'MYS' | 'MYT' | 'NAM' | 'NCL' | 'NER' | 'NFK' | 'NGA' | 'NIC' | 'NIU' | 'NLD' | 'NOR' | 'NPL' | 'NRU' | 'NZL' | 'OMN' | 'PAK' | 'PAN' | 'PER' | 'PHL' | 'PLW' | 'PNG' | 'POL' | 'PRI' | 'PRT' | 'PRY' | 'PSE' | 'PYF' | 'QAT' | 'REU' | 'ROU' | 'RUS' | 'RWA' | 'SAU' | 'SEN' | 'SGP' | 'SHN' | 'SLB' | 'SLE' | 'SLV' | 'SMR' | 'SOM' | 'SPM' | 'SRB' | 'SSD' | 'STP' | 'SUR' | 'SVK' | 'SVN' | 'SWE' | 'SWZ' | 'SXM' | 'SYC' | 'TCA' | 'TCD' | 'TGO' | 'THA' | 'TJK' | 'TKM' | 'TLS' | 'TON' | 'TTO' | 'TUN' | 'TUR' | 'TUV' | 'TWN' | 'TZA' | 'UGA' | 'UKR' | 'UMI' | 'URY' | 'USA' | 'UZB' | 'VAT' | 'VCT' | 'VEN' | 'VGB' | 'VIR' | 'VNM' | 'VUT' | 'WLF' | 'WSM' | 'YEM' | 'ZAF' | 'ZMB' | 'ZWE'>", ""));
        }

        // Query Params
        if (existsPublishedResponse !== undefined) {
            requestContext.setQueryParam("exists[publishedResponse]", ObjectSerializer.serialize(existsPublishedResponse, "boolean", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'createdDate' | '-createdDate' | 'rating' | '-rating'>", ""));
        }

        // Query Params
        if (fieldsCustomerReviews !== undefined) {
            requestContext.setQueryParam("fields[customerReviews]", ObjectSerializer.serialize(fieldsCustomerReviews, "Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>", ""));
        }

        // Query Params
        if (fieldsCustomerReviewResponses !== undefined) {
            requestContext.setQueryParam("fields[customerReviewResponses]", ObjectSerializer.serialize(fieldsCustomerReviewResponses, "Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'response'>", ""));
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
     * @param fieldsEndUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
     */
    public async appsEndUserLicenseAgreementGetToOneRelated(id: string, fieldsEndUserLicenseAgreements?: Array<'agreementText' | 'app' | 'territories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsEndUserLicenseAgreementGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/endUserLicenseAgreement'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsEndUserLicenseAgreements !== undefined) {
            requestContext.setQueryParam("fields[endUserLicenseAgreements]", ObjectSerializer.serialize(fieldsEndUserLicenseAgreements, "Array<'agreementText' | 'app' | 'territories'>", ""));
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
     * @param limitGameCenterAppVersions maximum number of related gameCenterAppVersions returned (when they are included)
     * @param limitGameCenterLeaderboards maximum number of related gameCenterLeaderboards returned (when they are included)
     * @param limitGameCenterLeaderboardSets maximum number of related gameCenterLeaderboardSets returned (when they are included)
     * @param limitGameCenterAchievements maximum number of related gameCenterAchievements returned (when they are included)
     * @param limitAchievementReleases maximum number of related achievementReleases returned (when they are included)
     * @param limitLeaderboardReleases maximum number of related leaderboardReleases returned (when they are included)
     * @param limitLeaderboardSetReleases maximum number of related leaderboardSetReleases returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsGameCenterDetailGetToOneRelated(id: string, fieldsGameCenterAchievementReleases?: Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'>, fieldsGameCenterLeaderboardSetReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'>, fieldsGameCenterLeaderboardSets?: Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'>, fieldsGameCenterGroups?: Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsGameCenterLeaderboards?: Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'>, fieldsGameCenterAppVersions?: Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'>, fieldsGameCenterAchievements?: Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsGameCenterLeaderboardReleases?: Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'>, limitGameCenterAppVersions?: number, limitGameCenterLeaderboards?: number, limitGameCenterLeaderboardSets?: number, limitGameCenterAchievements?: number, limitAchievementReleases?: number, limitLeaderboardReleases?: number, limitLeaderboardSetReleases?: number, include?: Array<'achievementReleases' | 'app' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsGameCenterDetailGetToOneRelated", "id");
        }




















        // Path Params
        const localVarPath = '/v1/apps/{id}/gameCenterDetail'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterVersionString filter by attribute \&#39;versionString\&#39;
     * @param filterId filter by id(s)
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsGameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param limit maximum resources per page
     * @param limitCompatibleVersions maximum number of related compatibleVersions returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsGameCenterEnabledVersionsGetToManyRelated(id: string, filterPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterVersionString?: Array<string>, filterId?: Array<string>, sort?: Array<'versionString' | '-versionString'>, fieldsGameCenterEnabledVersions?: Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, limitCompatibleVersions?: number, include?: Array<'app' | 'compatibleVersions'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsGameCenterEnabledVersionsGetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/apps/{id}/gameCenterEnabledVersions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPlatform !== undefined) {
            requestContext.setQueryParam("filter[platform]", ObjectSerializer.serialize(filterPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>", ""));
        }

        // Query Params
        if (filterVersionString !== undefined) {
            requestContext.setQueryParam("filter[versionString]", ObjectSerializer.serialize(filterVersionString, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'versionString' | '-versionString'>", ""));
        }

        // Query Params
        if (fieldsGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("fields[gameCenterEnabledVersions]", ObjectSerializer.serialize(fieldsGameCenterEnabledVersions, "Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitCompatibleVersions !== undefined) {
            requestContext.setQueryParam("limit[compatibleVersions]", ObjectSerializer.serialize(limitCompatibleVersions, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'compatibleVersions'>", ""));
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
     * @param filterAppStoreVersionsAppStoreState filter by attribute \&#39;appStoreVersions.appStoreState\&#39;
     * @param filterAppStoreVersionsAppVersionState filter by attribute \&#39;appStoreVersions.appVersionState\&#39;
     * @param filterAppStoreVersionsPlatform filter by attribute \&#39;appStoreVersions.platform\&#39;
     * @param filterBundleId filter by attribute \&#39;bundleId\&#39;
     * @param filterName filter by attribute \&#39;name\&#39;
     * @param filterSku filter by attribute \&#39;sku\&#39;
     * @param filterAppStoreVersions filter by id(s) of related \&#39;appStoreVersions\&#39;
     * @param filterId filter by id(s)
     * @param existsGameCenterEnabledVersions filter by existence or non-existence of related \&#39;gameCenterEnabledVersions\&#39;
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsBetaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsAppPriceSchedules the fields to include for returned resources of type appPriceSchedules
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsAlternativeDistributionKeys the fields to include for returned resources of type alternativeDistributionKeys
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param fieldsBetaGroups the fields to include for returned resources of type betaGroups
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsAppAvailabilities the fields to include for returned resources of type appAvailabilities
     * @param fieldsCustomerReviews the fields to include for returned resources of type customerReviews
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param fieldsBetaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
     * @param fieldsMarketplaceSearchDetails the fields to include for returned resources of type marketplaceSearchDetails
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsAppInfos the fields to include for returned resources of type appInfos
     * @param fieldsBetaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
     * @param fieldsAppPricePoints the fields to include for returned resources of type appPricePoints
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsPreReleaseVersions the fields to include for returned resources of type preReleaseVersions
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param fieldsAnalyticsReportRequests the fields to include for returned resources of type analyticsReportRequests
     * @param fieldsAppPrices the fields to include for returned resources of type appPrices
     * @param fieldsAppPreOrders the fields to include for returned resources of type appPreOrders
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsGameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
     * @param fieldsSubscriptionGracePeriods the fields to include for returned resources of type subscriptionGracePeriods
     * @param fieldsEndUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppCustomProductPages the fields to include for returned resources of type appCustomProductPages
     * @param fieldsAppEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param fieldsPerfPowerMetrics the fields to include for returned resources of type perfPowerMetrics
     * @param limitAppClips maximum number of related appClips returned (when they are included)
     * @param limitAppCustomProductPages maximum number of related appCustomProductPages returned (when they are included)
     * @param limitAppEncryptionDeclarations maximum number of related appEncryptionDeclarations returned (when they are included)
     * @param limitAppEvents maximum number of related appEvents returned (when they are included)
     * @param limitAppInfos maximum number of related appInfos returned (when they are included)
     * @param limitAppStoreVersionExperimentsV2 maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
     * @param limitAppStoreVersions maximum number of related appStoreVersions returned (when they are included)
     * @param limitAvailableTerritories maximum number of related availableTerritories returned (when they are included)
     * @param limitBetaAppLocalizations maximum number of related betaAppLocalizations returned (when they are included)
     * @param limitBetaGroups maximum number of related betaGroups returned (when they are included)
     * @param limitBuilds maximum number of related builds returned (when they are included)
     * @param limitGameCenterEnabledVersions maximum number of related gameCenterEnabledVersions returned (when they are included)
     * @param limitInAppPurchases maximum number of related inAppPurchases returned (when they are included)
     * @param limitInAppPurchasesV2 maximum number of related inAppPurchasesV2 returned (when they are included)
     * @param limitPreReleaseVersions maximum number of related preReleaseVersions returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param limitPromotedPurchases maximum number of related promotedPurchases returned (when they are included)
     * @param limitReviewSubmissions maximum number of related reviewSubmissions returned (when they are included)
     * @param limitSubscriptionGroups maximum number of related subscriptionGroups returned (when they are included)
     */
    public async appsGetCollection(filterAppStoreVersionsAppStoreState?: Array<'ACCEPTED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_CONTRACT' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PREORDER_READY_FOR_SALE' | 'PROCESSING_FOR_APP_STORE' | 'READY_FOR_REVIEW' | 'READY_FOR_SALE' | 'REJECTED' | 'REMOVED_FROM_SALE' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW' | 'REPLACED_WITH_NEW_VERSION' | 'NOT_APPLICABLE'>, filterAppStoreVersionsAppVersionState?: Array<'ACCEPTED' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PROCESSING_FOR_DISTRIBUTION' | 'READY_FOR_DISTRIBUTION' | 'READY_FOR_REVIEW' | 'REJECTED' | 'REPLACED_WITH_NEW_VERSION' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW'>, filterAppStoreVersionsPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterBundleId?: Array<string>, filterName?: Array<string>, filterSku?: Array<string>, filterAppStoreVersions?: Array<string>, filterId?: Array<string>, existsGameCenterEnabledVersions?: boolean, sort?: Array<'bundleId' | '-bundleId' | 'name' | '-name' | 'sku' | '-sku'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, include?: Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'>, fieldsBetaAppReviewDetails?: Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsAppPriceSchedules?: Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsAlternativeDistributionKeys?: Array<'app' | 'publicKey'>, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>, fieldsBetaGroups?: Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsAppAvailabilities?: Array<'app' | 'availableInNewTerritories' | 'availableTerritories'>, fieldsCustomerReviews?: Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, fieldsBetaLicenseAgreements?: Array<'agreementText' | 'app'>, fieldsMarketplaceSearchDetails?: Array<'app' | 'catalogUrl'>, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsAppInfos?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>, fieldsBetaAppLocalizations?: Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>, fieldsAppPricePoints?: Array<'app' | 'customerPrice' | 'equalizations' | 'priceTier' | 'proceeds' | 'territory'>, fieldsInAppPurchases?: Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'>, fieldsPreReleaseVersions?: Array<'app' | 'builds' | 'platform' | 'version'>, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsAnalyticsReportRequests?: Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'>, fieldsAppPrices?: Array<'app' | 'priceTier'>, fieldsAppPreOrders?: Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsGameCenterEnabledVersions?: Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>, fieldsSubscriptionGracePeriods?: Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>, fieldsEndUserLicenseAgreements?: Array<'agreementText' | 'app' | 'territories'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppCustomProductPages?: Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>, fieldsAppEncryptionDeclarations?: Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>, fieldsTerritories?: Array<'currency'>, fieldsPerfPowerMetrics?: Array<'deviceType' | 'metricType' | 'platform'>, limitAppClips?: number, limitAppCustomProductPages?: number, limitAppEncryptionDeclarations?: number, limitAppEvents?: number, limitAppInfos?: number, limitAppStoreVersionExperimentsV2?: number, limitAppStoreVersions?: number, limitAvailableTerritories?: number, limitBetaAppLocalizations?: number, limitBetaGroups?: number, limitBuilds?: number, limitGameCenterEnabledVersions?: number, limitInAppPurchases?: number, limitInAppPurchasesV2?: number, limitPreReleaseVersions?: number, limitPrices?: number, limitPromotedPurchases?: number, limitReviewSubmissions?: number, limitSubscriptionGroups?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


































































        // Path Params
        const localVarPath = '/v1/apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterAppStoreVersionsAppStoreState !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersions.appStoreState]", ObjectSerializer.serialize(filterAppStoreVersionsAppStoreState, "Array<'ACCEPTED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_CONTRACT' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PREORDER_READY_FOR_SALE' | 'PROCESSING_FOR_APP_STORE' | 'READY_FOR_REVIEW' | 'READY_FOR_SALE' | 'REJECTED' | 'REMOVED_FROM_SALE' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW' | 'REPLACED_WITH_NEW_VERSION' | 'NOT_APPLICABLE'>", ""));
        }

        // Query Params
        if (filterAppStoreVersionsAppVersionState !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersions.appVersionState]", ObjectSerializer.serialize(filterAppStoreVersionsAppVersionState, "Array<'ACCEPTED' | 'DEVELOPER_REJECTED' | 'IN_REVIEW' | 'INVALID_BINARY' | 'METADATA_REJECTED' | 'PENDING_APPLE_RELEASE' | 'PENDING_DEVELOPER_RELEASE' | 'PREPARE_FOR_SUBMISSION' | 'PROCESSING_FOR_DISTRIBUTION' | 'READY_FOR_DISTRIBUTION' | 'READY_FOR_REVIEW' | 'REJECTED' | 'REPLACED_WITH_NEW_VERSION' | 'WAITING_FOR_EXPORT_COMPLIANCE' | 'WAITING_FOR_REVIEW'>", ""));
        }

        // Query Params
        if (filterAppStoreVersionsPlatform !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersions.platform]", ObjectSerializer.serialize(filterAppStoreVersionsPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>", ""));
        }

        // Query Params
        if (filterBundleId !== undefined) {
            requestContext.setQueryParam("filter[bundleId]", ObjectSerializer.serialize(filterBundleId, "Array<string>", ""));
        }

        // Query Params
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "Array<string>", ""));
        }

        // Query Params
        if (filterSku !== undefined) {
            requestContext.setQueryParam("filter[sku]", ObjectSerializer.serialize(filterSku, "Array<string>", ""));
        }

        // Query Params
        if (filterAppStoreVersions !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersions]", ObjectSerializer.serialize(filterAppStoreVersions, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (existsGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("exists[gameCenterEnabledVersions]", ObjectSerializer.serialize(existsGameCenterEnabledVersions, "boolean", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'bundleId' | '-bundleId' | 'name' | '-name' | 'sku' | '-sku'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'>", ""));
        }

        // Query Params
        if (fieldsBetaAppReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[betaAppReviewDetails]", ObjectSerializer.serialize(fieldsBetaAppReviewDetails, "Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
        }

        // Query Params
        if (fieldsGameCenterDetails !== undefined) {
            requestContext.setQueryParam("fields[gameCenterDetails]", ObjectSerializer.serialize(fieldsGameCenterDetails, "Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>", ""));
        }

        // Query Params
        if (fieldsAppPriceSchedules !== undefined) {
            requestContext.setQueryParam("fields[appPriceSchedules]", ObjectSerializer.serialize(fieldsAppPriceSchedules, "Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>", ""));
        }

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionKeys !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionKeys]", ObjectSerializer.serialize(fieldsAlternativeDistributionKeys, "Array<'app' | 'publicKey'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissions !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissions]", ObjectSerializer.serialize(fieldsReviewSubmissions, "Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>", ""));
        }

        // Query Params
        if (fieldsBetaGroups !== undefined) {
            requestContext.setQueryParam("fields[betaGroups]", ObjectSerializer.serialize(fieldsBetaGroups, "Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>", ""));
        }

        // Query Params
        if (fieldsPromotedPurchases !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchases]", ObjectSerializer.serialize(fieldsPromotedPurchases, "Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>", ""));
        }

        // Query Params
        if (fieldsAppAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[appAvailabilities]", ObjectSerializer.serialize(fieldsAppAvailabilities, "Array<'app' | 'availableInNewTerritories' | 'availableTerritories'>", ""));
        }

        // Query Params
        if (fieldsCustomerReviews !== undefined) {
            requestContext.setQueryParam("fields[customerReviews]", ObjectSerializer.serialize(fieldsCustomerReviews, "Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>", ""));
        }

        // Query Params
        if (fieldsAppEvents !== undefined) {
            requestContext.setQueryParam("fields[appEvents]", ObjectSerializer.serialize(fieldsAppEvents, "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>", ""));
        }

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
        }

        // Query Params
        if (fieldsBetaLicenseAgreements !== undefined) {
            requestContext.setQueryParam("fields[betaLicenseAgreements]", ObjectSerializer.serialize(fieldsBetaLicenseAgreements, "Array<'agreementText' | 'app'>", ""));
        }

        // Query Params
        if (fieldsMarketplaceSearchDetails !== undefined) {
            requestContext.setQueryParam("fields[marketplaceSearchDetails]", ObjectSerializer.serialize(fieldsMarketplaceSearchDetails, "Array<'app' | 'catalogUrl'>", ""));
        }

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsAppInfos !== undefined) {
            requestContext.setQueryParam("fields[appInfos]", ObjectSerializer.serialize(fieldsAppInfos, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>", ""));
        }

        // Query Params
        if (fieldsBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("fields[betaAppLocalizations]", ObjectSerializer.serialize(fieldsBetaAppLocalizations, "Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>", ""));
        }

        // Query Params
        if (fieldsAppPricePoints !== undefined) {
            requestContext.setQueryParam("fields[appPricePoints]", ObjectSerializer.serialize(fieldsAppPricePoints, "Array<'app' | 'customerPrice' | 'equalizations' | 'priceTier' | 'proceeds' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchases !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchases]", ObjectSerializer.serialize(fieldsInAppPurchases, "Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'>", ""));
        }

        // Query Params
        if (fieldsPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("fields[preReleaseVersions]", ObjectSerializer.serialize(fieldsPreReleaseVersions, "Array<'app' | 'builds' | 'platform' | 'version'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroups]", ObjectSerializer.serialize(fieldsSubscriptionGroups, "Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (fieldsAnalyticsReportRequests !== undefined) {
            requestContext.setQueryParam("fields[analyticsReportRequests]", ObjectSerializer.serialize(fieldsAnalyticsReportRequests, "Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'>", ""));
        }

        // Query Params
        if (fieldsAppPrices !== undefined) {
            requestContext.setQueryParam("fields[appPrices]", ObjectSerializer.serialize(fieldsAppPrices, "Array<'app' | 'priceTier'>", ""));
        }

        // Query Params
        if (fieldsAppPreOrders !== undefined) {
            requestContext.setQueryParam("fields[appPreOrders]", ObjectSerializer.serialize(fieldsAppPreOrders, "Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
        }

        // Query Params
        if (fieldsGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("fields[gameCenterEnabledVersions]", ObjectSerializer.serialize(fieldsGameCenterEnabledVersions, "Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGracePeriods !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGracePeriods]", ObjectSerializer.serialize(fieldsSubscriptionGracePeriods, "Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>", ""));
        }

        // Query Params
        if (fieldsEndUserLicenseAgreements !== undefined) {
            requestContext.setQueryParam("fields[endUserLicenseAgreements]", ObjectSerializer.serialize(fieldsEndUserLicenseAgreements, "Array<'agreementText' | 'app' | 'territories'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPages]", ObjectSerializer.serialize(fieldsAppCustomProductPages, "Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>", ""));
        }

        // Query Params
        if (fieldsAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("fields[appEncryptionDeclarations]", ObjectSerializer.serialize(fieldsAppEncryptionDeclarations, "Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (fieldsPerfPowerMetrics !== undefined) {
            requestContext.setQueryParam("fields[perfPowerMetrics]", ObjectSerializer.serialize(fieldsPerfPowerMetrics, "Array<'deviceType' | 'metricType' | 'platform'>", ""));
        }

        // Query Params
        if (limitAppClips !== undefined) {
            requestContext.setQueryParam("limit[appClips]", ObjectSerializer.serialize(limitAppClips, "number", ""));
        }

        // Query Params
        if (limitAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("limit[appCustomProductPages]", ObjectSerializer.serialize(limitAppCustomProductPages, "number", ""));
        }

        // Query Params
        if (limitAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("limit[appEncryptionDeclarations]", ObjectSerializer.serialize(limitAppEncryptionDeclarations, "number", ""));
        }

        // Query Params
        if (limitAppEvents !== undefined) {
            requestContext.setQueryParam("limit[appEvents]", ObjectSerializer.serialize(limitAppEvents, "number", ""));
        }

        // Query Params
        if (limitAppInfos !== undefined) {
            requestContext.setQueryParam("limit[appInfos]", ObjectSerializer.serialize(limitAppInfos, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentsV2 !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentsV2]", ObjectSerializer.serialize(limitAppStoreVersionExperimentsV2, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersions !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersions]", ObjectSerializer.serialize(limitAppStoreVersions, "number", ""));
        }

        // Query Params
        if (limitAvailableTerritories !== undefined) {
            requestContext.setQueryParam("limit[availableTerritories]", ObjectSerializer.serialize(limitAvailableTerritories, "number", ""));
        }

        // Query Params
        if (limitBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("limit[betaAppLocalizations]", ObjectSerializer.serialize(limitBetaAppLocalizations, "number", ""));
        }

        // Query Params
        if (limitBetaGroups !== undefined) {
            requestContext.setQueryParam("limit[betaGroups]", ObjectSerializer.serialize(limitBetaGroups, "number", ""));
        }

        // Query Params
        if (limitBuilds !== undefined) {
            requestContext.setQueryParam("limit[builds]", ObjectSerializer.serialize(limitBuilds, "number", ""));
        }

        // Query Params
        if (limitGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("limit[gameCenterEnabledVersions]", ObjectSerializer.serialize(limitGameCenterEnabledVersions, "number", ""));
        }

        // Query Params
        if (limitInAppPurchases !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchases]", ObjectSerializer.serialize(limitInAppPurchases, "number", ""));
        }

        // Query Params
        if (limitInAppPurchasesV2 !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchasesV2]", ObjectSerializer.serialize(limitInAppPurchasesV2, "number", ""));
        }

        // Query Params
        if (limitPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("limit[preReleaseVersions]", ObjectSerializer.serialize(limitPreReleaseVersions, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
        }

        // Query Params
        if (limitPromotedPurchases !== undefined) {
            requestContext.setQueryParam("limit[promotedPurchases]", ObjectSerializer.serialize(limitPromotedPurchases, "number", ""));
        }

        // Query Params
        if (limitReviewSubmissions !== undefined) {
            requestContext.setQueryParam("limit[reviewSubmissions]", ObjectSerializer.serialize(limitReviewSubmissions, "number", ""));
        }

        // Query Params
        if (limitSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("limit[subscriptionGroups]", ObjectSerializer.serialize(limitSubscriptionGroups, "number", ""));
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
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param include comma-separated list of relationships to include
     * @param fieldsBetaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsAppPriceSchedules the fields to include for returned resources of type appPriceSchedules
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsAlternativeDistributionKeys the fields to include for returned resources of type alternativeDistributionKeys
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param fieldsBetaGroups the fields to include for returned resources of type betaGroups
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsAppAvailabilities the fields to include for returned resources of type appAvailabilities
     * @param fieldsCustomerReviews the fields to include for returned resources of type customerReviews
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param fieldsBetaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
     * @param fieldsMarketplaceSearchDetails the fields to include for returned resources of type marketplaceSearchDetails
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsAppInfos the fields to include for returned resources of type appInfos
     * @param fieldsBetaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
     * @param fieldsAppPricePoints the fields to include for returned resources of type appPricePoints
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsPreReleaseVersions the fields to include for returned resources of type preReleaseVersions
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param fieldsAnalyticsReportRequests the fields to include for returned resources of type analyticsReportRequests
     * @param fieldsAppPrices the fields to include for returned resources of type appPrices
     * @param fieldsAppPreOrders the fields to include for returned resources of type appPreOrders
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsGameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
     * @param fieldsSubscriptionGracePeriods the fields to include for returned resources of type subscriptionGracePeriods
     * @param fieldsEndUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppCustomProductPages the fields to include for returned resources of type appCustomProductPages
     * @param fieldsAppEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param fieldsPerfPowerMetrics the fields to include for returned resources of type perfPowerMetrics
     * @param limitAppClips maximum number of related appClips returned (when they are included)
     * @param limitAppCustomProductPages maximum number of related appCustomProductPages returned (when they are included)
     * @param limitAppEncryptionDeclarations maximum number of related appEncryptionDeclarations returned (when they are included)
     * @param limitAppEvents maximum number of related appEvents returned (when they are included)
     * @param limitAppInfos maximum number of related appInfos returned (when they are included)
     * @param limitAppStoreVersionExperimentsV2 maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
     * @param limitAppStoreVersions maximum number of related appStoreVersions returned (when they are included)
     * @param limitAvailableTerritories maximum number of related availableTerritories returned (when they are included)
     * @param limitBetaAppLocalizations maximum number of related betaAppLocalizations returned (when they are included)
     * @param limitBetaGroups maximum number of related betaGroups returned (when they are included)
     * @param limitBuilds maximum number of related builds returned (when they are included)
     * @param limitGameCenterEnabledVersions maximum number of related gameCenterEnabledVersions returned (when they are included)
     * @param limitInAppPurchases maximum number of related inAppPurchases returned (when they are included)
     * @param limitInAppPurchasesV2 maximum number of related inAppPurchasesV2 returned (when they are included)
     * @param limitPreReleaseVersions maximum number of related preReleaseVersions returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param limitPromotedPurchases maximum number of related promotedPurchases returned (when they are included)
     * @param limitReviewSubmissions maximum number of related reviewSubmissions returned (when they are included)
     * @param limitSubscriptionGroups maximum number of related subscriptionGroups returned (when they are included)
     */
    public async appsGetInstance(id: string, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, include?: Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'>, fieldsBetaAppReviewDetails?: Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsAppPriceSchedules?: Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsAlternativeDistributionKeys?: Array<'app' | 'publicKey'>, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>, fieldsBetaGroups?: Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsAppAvailabilities?: Array<'app' | 'availableInNewTerritories' | 'availableTerritories'>, fieldsCustomerReviews?: Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, fieldsBetaLicenseAgreements?: Array<'agreementText' | 'app'>, fieldsMarketplaceSearchDetails?: Array<'app' | 'catalogUrl'>, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsAppInfos?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>, fieldsBetaAppLocalizations?: Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>, fieldsAppPricePoints?: Array<'app' | 'customerPrice' | 'equalizations' | 'priceTier' | 'proceeds' | 'territory'>, fieldsInAppPurchases?: Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'>, fieldsPreReleaseVersions?: Array<'app' | 'builds' | 'platform' | 'version'>, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsAnalyticsReportRequests?: Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'>, fieldsAppPrices?: Array<'app' | 'priceTier'>, fieldsAppPreOrders?: Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsGameCenterEnabledVersions?: Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>, fieldsSubscriptionGracePeriods?: Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>, fieldsEndUserLicenseAgreements?: Array<'agreementText' | 'app' | 'territories'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppCustomProductPages?: Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>, fieldsAppEncryptionDeclarations?: Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>, fieldsTerritories?: Array<'currency'>, fieldsPerfPowerMetrics?: Array<'deviceType' | 'metricType' | 'platform'>, limitAppClips?: number, limitAppCustomProductPages?: number, limitAppEncryptionDeclarations?: number, limitAppEvents?: number, limitAppInfos?: number, limitAppStoreVersionExperimentsV2?: number, limitAppStoreVersions?: number, limitAvailableTerritories?: number, limitBetaAppLocalizations?: number, limitBetaGroups?: number, limitBuilds?: number, limitGameCenterEnabledVersions?: number, limitInAppPurchases?: number, limitInAppPurchasesV2?: number, limitPreReleaseVersions?: number, limitPrices?: number, limitPromotedPurchases?: number, limitReviewSubmissions?: number, limitSubscriptionGroups?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsGetInstance", "id");
        }
























































        // Path Params
        const localVarPath = '/v1/apps/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'>", ""));
        }

        // Query Params
        if (fieldsBetaAppReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[betaAppReviewDetails]", ObjectSerializer.serialize(fieldsBetaAppReviewDetails, "Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
        }

        // Query Params
        if (fieldsGameCenterDetails !== undefined) {
            requestContext.setQueryParam("fields[gameCenterDetails]", ObjectSerializer.serialize(fieldsGameCenterDetails, "Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>", ""));
        }

        // Query Params
        if (fieldsAppPriceSchedules !== undefined) {
            requestContext.setQueryParam("fields[appPriceSchedules]", ObjectSerializer.serialize(fieldsAppPriceSchedules, "Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'>", ""));
        }

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionKeys !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionKeys]", ObjectSerializer.serialize(fieldsAlternativeDistributionKeys, "Array<'app' | 'publicKey'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissions !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissions]", ObjectSerializer.serialize(fieldsReviewSubmissions, "Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>", ""));
        }

        // Query Params
        if (fieldsBetaGroups !== undefined) {
            requestContext.setQueryParam("fields[betaGroups]", ObjectSerializer.serialize(fieldsBetaGroups, "Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>", ""));
        }

        // Query Params
        if (fieldsPromotedPurchases !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchases]", ObjectSerializer.serialize(fieldsPromotedPurchases, "Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>", ""));
        }

        // Query Params
        if (fieldsAppAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[appAvailabilities]", ObjectSerializer.serialize(fieldsAppAvailabilities, "Array<'app' | 'availableInNewTerritories' | 'availableTerritories'>", ""));
        }

        // Query Params
        if (fieldsCustomerReviews !== undefined) {
            requestContext.setQueryParam("fields[customerReviews]", ObjectSerializer.serialize(fieldsCustomerReviews, "Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>", ""));
        }

        // Query Params
        if (fieldsAppEvents !== undefined) {
            requestContext.setQueryParam("fields[appEvents]", ObjectSerializer.serialize(fieldsAppEvents, "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>", ""));
        }

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
        }

        // Query Params
        if (fieldsBetaLicenseAgreements !== undefined) {
            requestContext.setQueryParam("fields[betaLicenseAgreements]", ObjectSerializer.serialize(fieldsBetaLicenseAgreements, "Array<'agreementText' | 'app'>", ""));
        }

        // Query Params
        if (fieldsMarketplaceSearchDetails !== undefined) {
            requestContext.setQueryParam("fields[marketplaceSearchDetails]", ObjectSerializer.serialize(fieldsMarketplaceSearchDetails, "Array<'app' | 'catalogUrl'>", ""));
        }

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsAppInfos !== undefined) {
            requestContext.setQueryParam("fields[appInfos]", ObjectSerializer.serialize(fieldsAppInfos, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>", ""));
        }

        // Query Params
        if (fieldsBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("fields[betaAppLocalizations]", ObjectSerializer.serialize(fieldsBetaAppLocalizations, "Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>", ""));
        }

        // Query Params
        if (fieldsAppPricePoints !== undefined) {
            requestContext.setQueryParam("fields[appPricePoints]", ObjectSerializer.serialize(fieldsAppPricePoints, "Array<'app' | 'customerPrice' | 'equalizations' | 'priceTier' | 'proceeds' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchases !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchases]", ObjectSerializer.serialize(fieldsInAppPurchases, "Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'>", ""));
        }

        // Query Params
        if (fieldsPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("fields[preReleaseVersions]", ObjectSerializer.serialize(fieldsPreReleaseVersions, "Array<'app' | 'builds' | 'platform' | 'version'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroups]", ObjectSerializer.serialize(fieldsSubscriptionGroups, "Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (fieldsAnalyticsReportRequests !== undefined) {
            requestContext.setQueryParam("fields[analyticsReportRequests]", ObjectSerializer.serialize(fieldsAnalyticsReportRequests, "Array<'accessType' | 'app' | 'reports' | 'stoppedDueToInactivity'>", ""));
        }

        // Query Params
        if (fieldsAppPrices !== undefined) {
            requestContext.setQueryParam("fields[appPrices]", ObjectSerializer.serialize(fieldsAppPrices, "Array<'app' | 'priceTier'>", ""));
        }

        // Query Params
        if (fieldsAppPreOrders !== undefined) {
            requestContext.setQueryParam("fields[appPreOrders]", ObjectSerializer.serialize(fieldsAppPreOrders, "Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
        }

        // Query Params
        if (fieldsGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("fields[gameCenterEnabledVersions]", ObjectSerializer.serialize(fieldsGameCenterEnabledVersions, "Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGracePeriods !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGracePeriods]", ObjectSerializer.serialize(fieldsSubscriptionGracePeriods, "Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>", ""));
        }

        // Query Params
        if (fieldsEndUserLicenseAgreements !== undefined) {
            requestContext.setQueryParam("fields[endUserLicenseAgreements]", ObjectSerializer.serialize(fieldsEndUserLicenseAgreements, "Array<'agreementText' | 'app' | 'territories'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPages]", ObjectSerializer.serialize(fieldsAppCustomProductPages, "Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>", ""));
        }

        // Query Params
        if (fieldsAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("fields[appEncryptionDeclarations]", ObjectSerializer.serialize(fieldsAppEncryptionDeclarations, "Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (fieldsPerfPowerMetrics !== undefined) {
            requestContext.setQueryParam("fields[perfPowerMetrics]", ObjectSerializer.serialize(fieldsPerfPowerMetrics, "Array<'deviceType' | 'metricType' | 'platform'>", ""));
        }

        // Query Params
        if (limitAppClips !== undefined) {
            requestContext.setQueryParam("limit[appClips]", ObjectSerializer.serialize(limitAppClips, "number", ""));
        }

        // Query Params
        if (limitAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("limit[appCustomProductPages]", ObjectSerializer.serialize(limitAppCustomProductPages, "number", ""));
        }

        // Query Params
        if (limitAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("limit[appEncryptionDeclarations]", ObjectSerializer.serialize(limitAppEncryptionDeclarations, "number", ""));
        }

        // Query Params
        if (limitAppEvents !== undefined) {
            requestContext.setQueryParam("limit[appEvents]", ObjectSerializer.serialize(limitAppEvents, "number", ""));
        }

        // Query Params
        if (limitAppInfos !== undefined) {
            requestContext.setQueryParam("limit[appInfos]", ObjectSerializer.serialize(limitAppInfos, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentsV2 !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentsV2]", ObjectSerializer.serialize(limitAppStoreVersionExperimentsV2, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersions !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersions]", ObjectSerializer.serialize(limitAppStoreVersions, "number", ""));
        }

        // Query Params
        if (limitAvailableTerritories !== undefined) {
            requestContext.setQueryParam("limit[availableTerritories]", ObjectSerializer.serialize(limitAvailableTerritories, "number", ""));
        }

        // Query Params
        if (limitBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("limit[betaAppLocalizations]", ObjectSerializer.serialize(limitBetaAppLocalizations, "number", ""));
        }

        // Query Params
        if (limitBetaGroups !== undefined) {
            requestContext.setQueryParam("limit[betaGroups]", ObjectSerializer.serialize(limitBetaGroups, "number", ""));
        }

        // Query Params
        if (limitBuilds !== undefined) {
            requestContext.setQueryParam("limit[builds]", ObjectSerializer.serialize(limitBuilds, "number", ""));
        }

        // Query Params
        if (limitGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("limit[gameCenterEnabledVersions]", ObjectSerializer.serialize(limitGameCenterEnabledVersions, "number", ""));
        }

        // Query Params
        if (limitInAppPurchases !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchases]", ObjectSerializer.serialize(limitInAppPurchases, "number", ""));
        }

        // Query Params
        if (limitInAppPurchasesV2 !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchasesV2]", ObjectSerializer.serialize(limitInAppPurchasesV2, "number", ""));
        }

        // Query Params
        if (limitPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("limit[preReleaseVersions]", ObjectSerializer.serialize(limitPreReleaseVersions, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
        }

        // Query Params
        if (limitPromotedPurchases !== undefined) {
            requestContext.setQueryParam("limit[promotedPurchases]", ObjectSerializer.serialize(limitPromotedPurchases, "number", ""));
        }

        // Query Params
        if (limitReviewSubmissions !== undefined) {
            requestContext.setQueryParam("limit[reviewSubmissions]", ObjectSerializer.serialize(limitReviewSubmissions, "number", ""));
        }

        // Query Params
        if (limitSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("limit[subscriptionGroups]", ObjectSerializer.serialize(limitSubscriptionGroups, "number", ""));
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
     * @param filterInAppPurchaseType filter by attribute \&#39;inAppPurchaseType\&#39;
     * @param filterCanBeSubmitted filter by canBeSubmitted
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param limit maximum resources per page
     * @param limitApps maximum number of related apps returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsInAppPurchasesGetToManyRelated(id: string, filterInAppPurchaseType?: Array<'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION' | 'NON_CONSUMABLE' | 'CONSUMABLE' | 'NON_RENEWING_SUBSCRIPTION' | 'FREE_SUBSCRIPTION'>, filterCanBeSubmitted?: Array<string>, sort?: Array<'inAppPurchaseType' | '-inAppPurchaseType' | 'productId' | '-productId' | 'referenceName' | '-referenceName'>, fieldsInAppPurchases?: Array<'apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, limitApps?: number, include?: Array<'apps'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsInAppPurchasesGetToManyRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/apps/{id}/inAppPurchases'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterInAppPurchaseType !== undefined) {
            requestContext.setQueryParam("filter[inAppPurchaseType]", ObjectSerializer.serialize(filterInAppPurchaseType, "Array<'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION' | 'NON_CONSUMABLE' | 'CONSUMABLE' | 'NON_RENEWING_SUBSCRIPTION' | 'FREE_SUBSCRIPTION'>", ""));
        }

        // Query Params
        if (filterCanBeSubmitted !== undefined) {
            requestContext.setQueryParam("filter[canBeSubmitted]", ObjectSerializer.serialize(filterCanBeSubmitted, "Array<string>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'inAppPurchaseType' | '-inAppPurchaseType' | 'productId' | '-productId' | 'referenceName' | '-referenceName'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchases !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchases]", ObjectSerializer.serialize(fieldsInAppPurchases, "Array<'apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitApps !== undefined) {
            requestContext.setQueryParam("limit[apps]", ObjectSerializer.serialize(limitApps, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'apps'>", ""));
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
     * @param filterInAppPurchaseType filter by attribute \&#39;inAppPurchaseType\&#39;
     * @param filterName filter by attribute \&#39;name\&#39;
     * @param filterProductId filter by attribute \&#39;productId\&#39;
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsInAppPurchaseAppStoreReviewScreenshots the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots
     * @param fieldsInAppPurchaseAvailabilities the fields to include for returned resources of type inAppPurchaseAvailabilities
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsInAppPurchaseLocalizations the fields to include for returned resources of type inAppPurchaseLocalizations
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsInAppPurchasePriceSchedules the fields to include for returned resources of type inAppPurchasePriceSchedules
     * @param fieldsInAppPurchaseContents the fields to include for returned resources of type inAppPurchaseContents
     * @param limit maximum resources per page
     * @param limitInAppPurchaseLocalizations maximum number of related inAppPurchaseLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsInAppPurchasesV2GetToManyRelated(id: string, filterInAppPurchaseType?: Array<'CONSUMABLE' | 'NON_CONSUMABLE' | 'NON_RENEWING_SUBSCRIPTION'>, filterName?: Array<string>, filterProductId?: Array<string>, filterState?: Array<'MISSING_METADATA' | 'WAITING_FOR_UPLOAD' | 'PROCESSING_CONTENT' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'>, sort?: Array<'inAppPurchaseType' | '-inAppPurchaseType' | 'name' | '-name'>, fieldsInAppPurchaseAppStoreReviewScreenshots?: Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'inAppPurchaseV2' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, fieldsInAppPurchaseAvailabilities?: Array<'availableInNewTerritories' | 'availableTerritories' | 'inAppPurchase'>, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsInAppPurchaseLocalizations?: Array<'description' | 'inAppPurchaseV2' | 'locale' | 'name' | 'state'>, fieldsInAppPurchases?: Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'>, fieldsInAppPurchasePriceSchedules?: Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>, fieldsInAppPurchaseContents?: Array<'fileName' | 'fileSize' | 'inAppPurchaseV2' | 'lastModifiedDate' | 'url'>, limit?: number, limitInAppPurchaseLocalizations?: number, include?: Array<'appStoreReviewScreenshot' | 'content' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'promotedPurchase'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsInAppPurchasesV2GetToManyRelated", "id");
        }

















        // Path Params
        const localVarPath = '/v1/apps/{id}/inAppPurchasesV2'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterInAppPurchaseType !== undefined) {
            requestContext.setQueryParam("filter[inAppPurchaseType]", ObjectSerializer.serialize(filterInAppPurchaseType, "Array<'CONSUMABLE' | 'NON_CONSUMABLE' | 'NON_RENEWING_SUBSCRIPTION'>", ""));
        }

        // Query Params
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "Array<string>", ""));
        }

        // Query Params
        if (filterProductId !== undefined) {
            requestContext.setQueryParam("filter[productId]", ObjectSerializer.serialize(filterProductId, "Array<string>", ""));
        }

        // Query Params
        if (filterState !== undefined) {
            requestContext.setQueryParam("filter[state]", ObjectSerializer.serialize(filterState, "Array<'MISSING_METADATA' | 'WAITING_FOR_UPLOAD' | 'PROCESSING_CONTENT' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'inAppPurchaseType' | '-inAppPurchaseType' | 'name' | '-name'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchaseAppStoreReviewScreenshots !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchaseAppStoreReviewScreenshots]", ObjectSerializer.serialize(fieldsInAppPurchaseAppStoreReviewScreenshots, "Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'inAppPurchaseV2' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchaseAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchaseAvailabilities]", ObjectSerializer.serialize(fieldsInAppPurchaseAvailabilities, "Array<'availableInNewTerritories' | 'availableTerritories' | 'inAppPurchase'>", ""));
        }

        // Query Params
        if (fieldsPromotedPurchases !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchases]", ObjectSerializer.serialize(fieldsPromotedPurchases, "Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchaseLocalizations !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchaseLocalizations]", ObjectSerializer.serialize(fieldsInAppPurchaseLocalizations, "Array<'description' | 'inAppPurchaseV2' | 'locale' | 'name' | 'state'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchases !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchases]", ObjectSerializer.serialize(fieldsInAppPurchases, "Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchasePriceSchedules !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePriceSchedules]", ObjectSerializer.serialize(fieldsInAppPurchasePriceSchedules, "Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchaseContents !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchaseContents]", ObjectSerializer.serialize(fieldsInAppPurchaseContents, "Array<'fileName' | 'fileSize' | 'inAppPurchaseV2' | 'lastModifiedDate' | 'url'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitInAppPurchaseLocalizations !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchaseLocalizations]", ObjectSerializer.serialize(limitInAppPurchaseLocalizations, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreReviewScreenshot' | 'content' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'promotedPurchase'>", ""));
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
     * @param fieldsMarketplaceSearchDetails the fields to include for returned resources of type marketplaceSearchDetails
     */
    public async appsMarketplaceSearchDetailGetToOneRelated(id: string, fieldsMarketplaceSearchDetails?: Array<'app' | 'catalogUrl'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsMarketplaceSearchDetailGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/marketplaceSearchDetail'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsMarketplaceSearchDetails !== undefined) {
            requestContext.setQueryParam("fields[marketplaceSearchDetails]", ObjectSerializer.serialize(fieldsMarketplaceSearchDetails, "Array<'app' | 'catalogUrl'>", ""));
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
     * @param filterDeviceType filter by attribute \&#39;deviceType\&#39;
     * @param filterMetricType filter by attribute \&#39;metricType\&#39;
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     */
    public async appsPerfPowerMetricsGetToManyRelated(id: string, filterDeviceType?: Array<string>, filterMetricType?: Array<'DISK' | 'HANG' | 'BATTERY' | 'LAUNCH' | 'MEMORY' | 'ANIMATION' | 'TERMINATION'>, filterPlatform?: Array<'IOS'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPerfPowerMetricsGetToManyRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/apps/{id}/perfPowerMetrics'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterDeviceType !== undefined) {
            requestContext.setQueryParam("filter[deviceType]", ObjectSerializer.serialize(filterDeviceType, "Array<string>", ""));
        }

        // Query Params
        if (filterMetricType !== undefined) {
            requestContext.setQueryParam("filter[metricType]", ObjectSerializer.serialize(filterMetricType, "Array<'DISK' | 'HANG' | 'BATTERY' | 'LAUNCH' | 'MEMORY' | 'ANIMATION' | 'TERMINATION'>", ""));
        }

        // Query Params
        if (filterPlatform !== undefined) {
            requestContext.setQueryParam("filter[platform]", ObjectSerializer.serialize(filterPlatform, "Array<'IOS'>", ""));
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
     * @param fieldsAppPreOrders the fields to include for returned resources of type appPreOrders
     */
    public async appsPreOrderGetToOneRelated(id: string, fieldsAppPreOrders?: Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPreOrderGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/preOrder'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppPreOrders !== undefined) {
            requestContext.setQueryParam("fields[appPreOrders]", ObjectSerializer.serialize(fieldsAppPreOrders, "Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>", ""));
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
     * @param fieldsPreReleaseVersions the fields to include for returned resources of type preReleaseVersions
     * @param limit maximum resources per page
     */
    public async appsPreReleaseVersionsGetToManyRelated(id: string, fieldsPreReleaseVersions?: Array<'app' | 'builds' | 'platform' | 'version'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPreReleaseVersionsGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/apps/{id}/preReleaseVersions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("fields[preReleaseVersions]", ObjectSerializer.serialize(fieldsPreReleaseVersions, "Array<'app' | 'builds' | 'platform' | 'version'>", ""));
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
     * @param filterPriceTier filter by id(s) of related \&#39;priceTier\&#39;
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsAppPriceTiers the fields to include for returned resources of type appPriceTiers
     * @param fieldsAppPricePoints the fields to include for returned resources of type appPricePoints
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appsPricePointsGetToManyRelated(id: string, filterPriceTier?: Array<string>, filterTerritory?: Array<string>, fieldsAppPriceTiers?: Array<'pricePoints'>, fieldsAppPricePoints?: Array<'app' | 'customerPrice' | 'priceTier' | 'proceeds' | 'territory'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'app' | 'priceTier' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPricePointsGetToManyRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/apps/{id}/pricePoints'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPriceTier !== undefined) {
            requestContext.setQueryParam("filter[priceTier]", ObjectSerializer.serialize(filterPriceTier, "Array<string>", ""));
        }

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppPriceTiers !== undefined) {
            requestContext.setQueryParam("fields[appPriceTiers]", ObjectSerializer.serialize(fieldsAppPriceTiers, "Array<'pricePoints'>", ""));
        }

        // Query Params
        if (fieldsAppPricePoints !== undefined) {
            requestContext.setQueryParam("fields[appPricePoints]", ObjectSerializer.serialize(fieldsAppPricePoints, "Array<'app' | 'customerPrice' | 'priceTier' | 'proceeds' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'priceTier' | 'territory'>", ""));
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
     * @param fieldsAppPriceTiers the fields to include for returned resources of type appPriceTiers
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsAppPrices the fields to include for returned resources of type appPrices
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appsPricesGetToManyRelated(id: string, fieldsAppPriceTiers?: Array<'pricePoints'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsAppPrices?: Array<'app' | 'priceTier'>, limit?: number, include?: Array<'app' | 'priceTier'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPricesGetToManyRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/apps/{id}/prices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppPriceTiers !== undefined) {
            requestContext.setQueryParam("fields[appPriceTiers]", ObjectSerializer.serialize(fieldsAppPriceTiers, "Array<'pricePoints'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsAppPrices !== undefined) {
            requestContext.setQueryParam("fields[appPrices]", ObjectSerializer.serialize(fieldsAppPrices, "Array<'app' | 'priceTier'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'priceTier'>", ""));
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
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsPromotedPurchaseImages the fields to include for returned resources of type promotedPurchaseImages
     * @param limit maximum resources per page
     * @param limitPromotionImages maximum number of related promotionImages returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsPromotedPurchasesGetToManyRelated(id: string, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsInAppPurchases?: Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'>, fieldsPromotedPurchaseImages?: Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'>, limit?: number, limitPromotionImages?: number, include?: Array<'inAppPurchaseV2' | 'promotionImages' | 'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPromotedPurchasesGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/apps/{id}/promotedPurchases'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsPromotedPurchases !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchases]", ObjectSerializer.serialize(fieldsPromotedPurchases, "Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchases !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchases]", ObjectSerializer.serialize(fieldsInAppPurchases, "Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'>", ""));
        }

        // Query Params
        if (fieldsPromotedPurchaseImages !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchaseImages]", ObjectSerializer.serialize(fieldsPromotedPurchaseImages, "Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitPromotionImages !== undefined) {
            requestContext.setQueryParam("limit[promotionImages]", ObjectSerializer.serialize(limitPromotionImages, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'inAppPurchaseV2' | 'promotionImages' | 'subscription'>", ""));
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
    public async appsPromotedPurchasesGetToManyRelationship(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPromotedPurchasesGetToManyRelationship", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/relationships/promotedPurchases'
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
     * @param appPromotedPurchasesLinkagesRequest List of related linkages
     */
    public async appsPromotedPurchasesReplaceToManyRelationship(id: string, appPromotedPurchasesLinkagesRequest: AppPromotedPurchasesLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsPromotedPurchasesReplaceToManyRelationship", "id");
        }


        // verify required parameter 'appPromotedPurchasesLinkagesRequest' is not null or undefined
        if (appPromotedPurchasesLinkagesRequest === null || appPromotedPurchasesLinkagesRequest === undefined) {
            throw new RequiredError("AppsApi", "appsPromotedPurchasesReplaceToManyRelationship", "appPromotedPurchasesLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{id}/relationships/promotedPurchases'
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
            ObjectSerializer.serialize(appPromotedPurchasesLinkagesRequest, "AppPromotedPurchasesLinkagesRequest", ""),
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
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param fieldsActors the fields to include for returned resources of type actors
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param limit maximum resources per page
     * @param limitItems maximum number of related items returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsReviewSubmissionsGetToManyRelated(id: string, filterPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterState?: Array<'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, fieldsActors?: Array<'actorType' | 'apiKeyId' | 'userEmail' | 'userFirstName' | 'userLastName'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>, limit?: number, limitItems?: number, include?: Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsReviewSubmissionsGetToManyRelated", "id");
        }












        // Path Params
        const localVarPath = '/v1/apps/{id}/reviewSubmissions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPlatform !== undefined) {
            requestContext.setQueryParam("filter[platform]", ObjectSerializer.serialize(filterPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>", ""));
        }

        // Query Params
        if (filterState !== undefined) {
            requestContext.setQueryParam("filter[state]", ObjectSerializer.serialize(filterState, "Array<'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissionItems !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissionItems]", ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>", ""));
        }

        // Query Params
        if (fieldsActors !== undefined) {
            requestContext.setQueryParam("fields[actors]", ObjectSerializer.serialize(fieldsActors, "Array<'actorType' | 'apiKeyId' | 'userEmail' | 'userFirstName' | 'userLastName'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissions !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissions]", ObjectSerializer.serialize(fieldsReviewSubmissions, "Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitItems !== undefined) {
            requestContext.setQueryParam("limit[items]", ObjectSerializer.serialize(limitItems, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'>", ""));
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
     * @param fieldsSubscriptionGracePeriods the fields to include for returned resources of type subscriptionGracePeriods
     */
    public async appsSubscriptionGracePeriodGetToOneRelated(id: string, fieldsSubscriptionGracePeriods?: Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsSubscriptionGracePeriodGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/apps/{id}/subscriptionGracePeriod'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionGracePeriods !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGracePeriods]", ObjectSerializer.serialize(fieldsSubscriptionGracePeriods, "Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>", ""));
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
     * @param filterSubscriptionsState filter by attribute \&#39;subscriptions.state\&#39;
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param fieldsSubscriptionGroupLocalizations the fields to include for returned resources of type subscriptionGroupLocalizations
     * @param limit maximum resources per page
     * @param limitSubscriptions maximum number of related subscriptions returned (when they are included)
     * @param limitSubscriptionGroupLocalizations maximum number of related subscriptionGroupLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appsSubscriptionGroupsGetToManyRelated(id: string, filterReferenceName?: Array<string>, filterSubscriptionsState?: Array<'MISSING_METADATA' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'>, sort?: Array<'referenceName' | '-referenceName'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsSubscriptionGroupLocalizations?: Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'>, limit?: number, limitSubscriptions?: number, limitSubscriptionGroupLocalizations?: number, include?: Array<'subscriptionGroupLocalizations' | 'subscriptions'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsSubscriptionGroupsGetToManyRelated", "id");
        }












        // Path Params
        const localVarPath = '/v1/apps/{id}/subscriptionGroups'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterReferenceName !== undefined) {
            requestContext.setQueryParam("filter[referenceName]", ObjectSerializer.serialize(filterReferenceName, "Array<string>", ""));
        }

        // Query Params
        if (filterSubscriptionsState !== undefined) {
            requestContext.setQueryParam("filter[subscriptions.state]", ObjectSerializer.serialize(filterSubscriptionsState, "Array<'MISSING_METADATA' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'referenceName' | '-referenceName'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroups]", ObjectSerializer.serialize(fieldsSubscriptionGroups, "Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroupLocalizations !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroupLocalizations]", ObjectSerializer.serialize(fieldsSubscriptionGroupLocalizations, "Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitSubscriptions !== undefined) {
            requestContext.setQueryParam("limit[subscriptions]", ObjectSerializer.serialize(limitSubscriptions, "number", ""));
        }

        // Query Params
        if (limitSubscriptionGroupLocalizations !== undefined) {
            requestContext.setQueryParam("limit[subscriptionGroupLocalizations]", ObjectSerializer.serialize(limitSubscriptionGroupLocalizations, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
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
     * @param appUpdateRequest App representation
     */
    public async appsUpdateInstance(id: string, appUpdateRequest: AppUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppsApi", "appsUpdateInstance", "id");
        }


        // verify required parameter 'appUpdateRequest' is not null or undefined
        if (appUpdateRequest === null || appUpdateRequest === undefined) {
            throw new RequiredError("AppsApi", "appsUpdateInstance", "appUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{id}'
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
            ObjectSerializer.serialize(appUpdateRequest, "AppUpdateRequest", ""),
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

export class AppsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAlternativeDistributionKeyGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAlternativeDistributionKeyGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionKeyResponse >> {
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
            const body: AlternativeDistributionKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionKeyResponse", ""
            ) as AlternativeDistributionKeyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionKeyResponse", ""
            ) as AlternativeDistributionKeyResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAnalyticsReportRequestsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAnalyticsReportRequestsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalyticsReportRequestsResponse >> {
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
            const body: AnalyticsReportRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticsReportRequestsResponse", ""
            ) as AnalyticsReportRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyticsReportRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyticsReportRequestsResponse", ""
            ) as AnalyticsReportRequestsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppAvailabilityGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppAvailabilityGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppAvailabilityResponse >> {
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
            const body: AppAvailabilityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppAvailabilityResponse", ""
            ) as AppAvailabilityResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppAvailabilityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppAvailabilityResponse", ""
            ) as AppAvailabilityResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppClipsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppClipsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppClipsResponse >> {
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
            const body: AppClipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipsResponse", ""
            ) as AppClipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppClipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipsResponse", ""
            ) as AppClipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppCustomProductPagesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppCustomProductPagesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCustomProductPagesResponse >> {
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
            const body: AppCustomProductPagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCustomProductPagesResponse", ""
            ) as AppCustomProductPagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCustomProductPagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCustomProductPagesResponse", ""
            ) as AppCustomProductPagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppEncryptionDeclarationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppEncryptionDeclarationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEncryptionDeclarationsResponse >> {
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
            const body: AppEncryptionDeclarationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEncryptionDeclarationsResponse", ""
            ) as AppEncryptionDeclarationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEncryptionDeclarationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEncryptionDeclarationsResponse", ""
            ) as AppEncryptionDeclarationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppEventsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppEventsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventsResponse >> {
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
            const body: AppEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventsResponse", ""
            ) as AppEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventsResponse", ""
            ) as AppEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppInfosGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppInfosGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppInfosResponse >> {
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
            const body: AppInfosResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfosResponse", ""
            ) as AppInfosResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppInfosResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfosResponse", ""
            ) as AppInfosResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppPricePointsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppPricePointsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPricePointsV3Response >> {
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
            const body: AppPricePointsV3Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPricePointsV3Response", ""
            ) as AppPricePointsV3Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPricePointsV3Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPricePointsV3Response", ""
            ) as AppPricePointsV3Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppPriceScheduleGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppPriceScheduleGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPriceScheduleResponse >> {
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
            const body: AppPriceScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPriceScheduleResponse", ""
            ) as AppPriceScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPriceScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPriceScheduleResponse", ""
            ) as AppPriceScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppStoreVersionExperimentsV2GetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppStoreVersionExperimentsV2GetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentsV2Response >> {
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
            const body: AppStoreVersionExperimentsV2Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentsV2Response", ""
            ) as AppStoreVersionExperimentsV2Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionExperimentsV2Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentsV2Response", ""
            ) as AppStoreVersionExperimentsV2Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAppStoreVersionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAppStoreVersionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionsResponse >> {
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
            const body: AppStoreVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionsResponse", ""
            ) as AppStoreVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionsResponse", ""
            ) as AppStoreVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsAvailableTerritoriesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsAvailableTerritoriesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TerritoriesResponse >> {
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
            const body: TerritoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TerritoriesResponse", ""
            ) as TerritoriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TerritoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TerritoriesResponse", ""
            ) as TerritoriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsBetaAppLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBetaAppLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BetaAppLocalizationsWithoutIncludesResponse >> {
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
            const body: BetaAppLocalizationsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaAppLocalizationsWithoutIncludesResponse", ""
            ) as BetaAppLocalizationsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BetaAppLocalizationsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaAppLocalizationsWithoutIncludesResponse", ""
            ) as BetaAppLocalizationsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsBetaAppReviewDetailGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBetaAppReviewDetailGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BetaAppReviewDetailWithoutIncludesResponse >> {
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
            const body: BetaAppReviewDetailWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaAppReviewDetailWithoutIncludesResponse", ""
            ) as BetaAppReviewDetailWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BetaAppReviewDetailWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaAppReviewDetailWithoutIncludesResponse", ""
            ) as BetaAppReviewDetailWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsBetaGroupsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBetaGroupsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BetaGroupsWithoutIncludesResponse >> {
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
            const body: BetaGroupsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaGroupsWithoutIncludesResponse", ""
            ) as BetaGroupsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BetaGroupsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaGroupsWithoutIncludesResponse", ""
            ) as BetaGroupsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsBetaLicenseAgreementGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBetaLicenseAgreementGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BetaLicenseAgreementWithoutIncludesResponse >> {
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
            const body: BetaLicenseAgreementWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaLicenseAgreementWithoutIncludesResponse", ""
            ) as BetaLicenseAgreementWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BetaLicenseAgreementWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BetaLicenseAgreementWithoutIncludesResponse", ""
            ) as BetaLicenseAgreementWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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
     * @params response Response returned by the server for a request to appsBetaTestersDeleteToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBetaTestersDeleteToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("202", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to appsBuildsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsBuildsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BuildsWithoutIncludesResponse >> {
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
            const body: BuildsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildsWithoutIncludesResponse", ""
            ) as BuildsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildsWithoutIncludesResponse", ""
            ) as BuildsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsCiProductGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsCiProductGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiProductResponse >> {
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
            const body: CiProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiProductResponse", ""
            ) as CiProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiProductResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiProductResponse", ""
            ) as CiProductResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsCustomerReviewsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsCustomerReviewsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerReviewsResponse >> {
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
            const body: CustomerReviewsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerReviewsResponse", ""
            ) as CustomerReviewsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomerReviewsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerReviewsResponse", ""
            ) as CustomerReviewsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsEndUserLicenseAgreementGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsEndUserLicenseAgreementGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EndUserLicenseAgreementWithoutIncludesResponse >> {
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
            const body: EndUserLicenseAgreementWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndUserLicenseAgreementWithoutIncludesResponse", ""
            ) as EndUserLicenseAgreementWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EndUserLicenseAgreementWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EndUserLicenseAgreementWithoutIncludesResponse", ""
            ) as EndUserLicenseAgreementWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsGameCenterDetailGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsGameCenterDetailGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterDetailResponse >> {
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
            const body: GameCenterDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterDetailResponse", ""
            ) as GameCenterDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterDetailResponse", ""
            ) as GameCenterDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsGameCenterEnabledVersionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsGameCenterEnabledVersionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GameCenterEnabledVersionsResponse >> {
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
            const body: GameCenterEnabledVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterEnabledVersionsResponse", ""
            ) as GameCenterEnabledVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GameCenterEnabledVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GameCenterEnabledVersionsResponse", ""
            ) as GameCenterEnabledVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppsResponse >> {
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
            const body: AppsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppsResponse", ""
            ) as AppsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppsResponse", ""
            ) as AppsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppResponse >> {
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
            const body: AppResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppResponse", ""
            ) as AppResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppResponse", ""
            ) as AppResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsInAppPurchasesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsInAppPurchasesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InAppPurchasesResponse >> {
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
            const body: InAppPurchasesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasesResponse", ""
            ) as InAppPurchasesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InAppPurchasesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasesResponse", ""
            ) as InAppPurchasesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsInAppPurchasesV2GetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsInAppPurchasesV2GetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InAppPurchasesV2Response >> {
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
            const body: InAppPurchasesV2Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasesV2Response", ""
            ) as InAppPurchasesV2Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InAppPurchasesV2Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasesV2Response", ""
            ) as InAppPurchasesV2Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsMarketplaceSearchDetailGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsMarketplaceSearchDetailGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MarketplaceSearchDetailResponse >> {
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
            const body: MarketplaceSearchDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketplaceSearchDetailResponse", ""
            ) as MarketplaceSearchDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MarketplaceSearchDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketplaceSearchDetailResponse", ""
            ) as MarketplaceSearchDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPerfPowerMetricsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPerfPowerMetricsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<XcodeMetrics >> {
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
            const body: XcodeMetrics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "XcodeMetrics", ""
            ) as XcodeMetrics;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: XcodeMetrics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "XcodeMetrics", ""
            ) as XcodeMetrics;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPreOrderGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPreOrderGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPreOrderWithoutIncludesResponse >> {
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
            const body: AppPreOrderWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPreOrderWithoutIncludesResponse", ""
            ) as AppPreOrderWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPreOrderWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPreOrderWithoutIncludesResponse", ""
            ) as AppPreOrderWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPreReleaseVersionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPreReleaseVersionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PreReleaseVersionsWithoutIncludesResponse >> {
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
            const body: PreReleaseVersionsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PreReleaseVersionsWithoutIncludesResponse", ""
            ) as PreReleaseVersionsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PreReleaseVersionsWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PreReleaseVersionsWithoutIncludesResponse", ""
            ) as PreReleaseVersionsWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPricePointsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPricePointsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPricePointsV2Response >> {
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
            const body: AppPricePointsV2Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPricePointsV2Response", ""
            ) as AppPricePointsV2Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPricePointsV2Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPricePointsV2Response", ""
            ) as AppPricePointsV2Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPricesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPricesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPricesResponse >> {
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
            const body: AppPricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPricesResponse", ""
            ) as AppPricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPricesResponse", ""
            ) as AppPricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPromotedPurchasesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPromotedPurchasesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PromotedPurchasesResponse >> {
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
            const body: PromotedPurchasesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PromotedPurchasesResponse", ""
            ) as PromotedPurchasesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PromotedPurchasesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PromotedPurchasesResponse", ""
            ) as PromotedPurchasesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPromotedPurchasesGetToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPromotedPurchasesGetToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPromotedPurchasesLinkagesResponse >> {
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
            const body: AppPromotedPurchasesLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPromotedPurchasesLinkagesResponse", ""
            ) as AppPromotedPurchasesLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPromotedPurchasesLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPromotedPurchasesLinkagesResponse", ""
            ) as AppPromotedPurchasesLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsPromotedPurchasesReplaceToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsPromotedPurchasesReplaceToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appsReviewSubmissionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsReviewSubmissionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReviewSubmissionsResponse >> {
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
            const body: ReviewSubmissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionsResponse", ""
            ) as ReviewSubmissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReviewSubmissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionsResponse", ""
            ) as ReviewSubmissionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsSubscriptionGracePeriodGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsSubscriptionGracePeriodGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionGracePeriodResponse >> {
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
            const body: SubscriptionGracePeriodResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGracePeriodResponse", ""
            ) as SubscriptionGracePeriodResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionGracePeriodResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGracePeriodResponse", ""
            ) as SubscriptionGracePeriodResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsSubscriptionGroupsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsSubscriptionGroupsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionGroupsResponse >> {
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
            const body: SubscriptionGroupsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupsResponse", ""
            ) as SubscriptionGroupsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionGroupsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupsResponse", ""
            ) as SubscriptionGroupsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppResponse >> {
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
            const body: AppResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppResponse", ""
            ) as AppResponse;
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
            const body: AppResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppResponse", ""
            ) as AppResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
