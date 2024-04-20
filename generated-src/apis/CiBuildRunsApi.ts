// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BuildsResponse } from '../models/BuildsResponse.ts';
import { CiBuildActionsResponse } from '../models/CiBuildActionsResponse.ts';
import { CiBuildRunCreateRequest } from '../models/CiBuildRunCreateRequest.ts';
import { CiBuildRunResponse } from '../models/CiBuildRunResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class CiBuildRunsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param fieldsCiBuildActions the fields to include for returned resources of type ciBuildActions
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async ciBuildRunsActionsGetToManyRelated(id: string, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, fieldsCiBuildActions?: Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'>, limit?: number, include?: Array<'buildRun'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiBuildRunsApi", "ciBuildRunsActionsGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/ciBuildRuns/{id}/actions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiBuildRuns !== undefined) {
            requestContext.setQueryParam("fields[ciBuildRuns]", ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>", ""));
        }

        // Query Params
        if (fieldsCiBuildActions !== undefined) {
            requestContext.setQueryParam("fields[ciBuildActions]", ObjectSerializer.serialize(fieldsCiBuildActions, "Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'buildRun'>", ""));
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
     * @param filterBetaAppReviewSubmissionBetaReviewState filter by attribute \&#39;betaAppReviewSubmission.betaReviewState\&#39;
     * @param filterBuildAudienceType filter by attribute \&#39;buildAudienceType\&#39;
     * @param filterExpired filter by attribute \&#39;expired\&#39;
     * @param filterPreReleaseVersionPlatform filter by attribute \&#39;preReleaseVersion.platform\&#39;
     * @param filterPreReleaseVersionVersion filter by attribute \&#39;preReleaseVersion.version\&#39;
     * @param filterProcessingState filter by attribute \&#39;processingState\&#39;
     * @param filterUsesNonExemptEncryption filter by attribute \&#39;usesNonExemptEncryption\&#39;
     * @param filterVersion filter by attribute \&#39;version\&#39;
     * @param filterApp filter by id(s) of related \&#39;app\&#39;
     * @param filterAppStoreVersion filter by id(s) of related \&#39;appStoreVersion\&#39;
     * @param filterBetaGroups filter by id(s) of related \&#39;betaGroups\&#39;
     * @param filterPreReleaseVersion filter by id(s) of related \&#39;preReleaseVersion\&#39;
     * @param filterId filter by id(s)
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsBuildBundles the fields to include for returned resources of type buildBundles
     * @param fieldsBuildIcons the fields to include for returned resources of type buildIcons
     * @param fieldsBetaAppReviewSubmissions the fields to include for returned resources of type betaAppReviewSubmissions
     * @param fieldsBuildBetaDetails the fields to include for returned resources of type buildBetaDetails
     * @param fieldsBetaTesters the fields to include for returned resources of type betaTesters
     * @param fieldsPreReleaseVersions the fields to include for returned resources of type preReleaseVersions
     * @param fieldsBetaBuildLocalizations the fields to include for returned resources of type betaBuildLocalizations
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param fieldsBetaGroups the fields to include for returned resources of type betaGroups
     * @param limit maximum resources per page
     * @param limitIndividualTesters maximum number of related individualTesters returned (when they are included)
     * @param limitBetaGroups maximum number of related betaGroups returned (when they are included)
     * @param limitBetaBuildLocalizations maximum number of related betaBuildLocalizations returned (when they are included)
     * @param limitIcons maximum number of related icons returned (when they are included)
     * @param limitBuildBundles maximum number of related buildBundles returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async ciBuildRunsBuildsGetToManyRelated(id: string, filterBetaAppReviewSubmissionBetaReviewState?: Array<'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED'>, filterBuildAudienceType?: Array<'INTERNAL_ONLY' | 'APP_STORE_ELIGIBLE'>, filterExpired?: Array<string>, filterPreReleaseVersionPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterPreReleaseVersionVersion?: Array<string>, filterProcessingState?: Array<'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID'>, filterUsesNonExemptEncryption?: Array<string>, filterVersion?: Array<string>, filterApp?: Array<string>, filterAppStoreVersion?: Array<string>, filterBetaGroups?: Array<string>, filterPreReleaseVersion?: Array<string>, filterId?: Array<string>, sort?: Array<'preReleaseVersion' | '-preReleaseVersion' | 'uploadedDate' | '-uploadedDate' | 'version' | '-version'>, fieldsBuildBundles?: Array<'appClipDomainCacheStatus' | 'appClipDomainDebugStatus' | 'betaAppClipInvocations' | 'buildBundleFileSizes' | 'bundleId' | 'bundleType' | 'dSYMUrl' | 'deviceProtocols' | 'entitlements' | 'fileName' | 'hasOnDemandResources' | 'hasPrerenderedIcon' | 'hasSirikit' | 'includesSymbols' | 'isIosBuildMacAppStoreCompatible' | 'locales' | 'platformBuild' | 'requiredCapabilities' | 'sdkBuild' | 'supportedArchitectures' | 'usesLocationServices'>, fieldsBuildIcons?: Array<'iconAsset' | 'iconType' | 'name'>, fieldsBetaAppReviewSubmissions?: Array<'betaReviewState' | 'build' | 'submittedDate'>, fieldsBuildBetaDetails?: Array<'autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState'>, fieldsBetaTesters?: Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'>, fieldsPreReleaseVersions?: Array<'app' | 'builds' | 'platform' | 'version'>, fieldsBetaBuildLocalizations?: Array<'build' | 'locale' | 'whatsNew'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppEncryptionDeclarations?: Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, fieldsBetaGroups?: Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>, limit?: number, limitIndividualTesters?: number, limitBetaGroups?: number, limitBetaBuildLocalizations?: number, limitIcons?: number, limitBuildBundles?: number, include?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildBetaDetail' | 'buildBundles' | 'icons' | 'individualTesters' | 'preReleaseVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiBuildRunsApi", "ciBuildRunsBuildsGetToManyRelated", "id");
        }



































        // Path Params
        const localVarPath = '/v1/ciBuildRuns/{id}/builds'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterBetaAppReviewSubmissionBetaReviewState !== undefined) {
            requestContext.setQueryParam("filter[betaAppReviewSubmission.betaReviewState]", ObjectSerializer.serialize(filterBetaAppReviewSubmissionBetaReviewState, "Array<'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED'>", ""));
        }

        // Query Params
        if (filterBuildAudienceType !== undefined) {
            requestContext.setQueryParam("filter[buildAudienceType]", ObjectSerializer.serialize(filterBuildAudienceType, "Array<'INTERNAL_ONLY' | 'APP_STORE_ELIGIBLE'>", ""));
        }

        // Query Params
        if (filterExpired !== undefined) {
            requestContext.setQueryParam("filter[expired]", ObjectSerializer.serialize(filterExpired, "Array<string>", ""));
        }

        // Query Params
        if (filterPreReleaseVersionPlatform !== undefined) {
            requestContext.setQueryParam("filter[preReleaseVersion.platform]", ObjectSerializer.serialize(filterPreReleaseVersionPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>", ""));
        }

        // Query Params
        if (filterPreReleaseVersionVersion !== undefined) {
            requestContext.setQueryParam("filter[preReleaseVersion.version]", ObjectSerializer.serialize(filterPreReleaseVersionVersion, "Array<string>", ""));
        }

        // Query Params
        if (filterProcessingState !== undefined) {
            requestContext.setQueryParam("filter[processingState]", ObjectSerializer.serialize(filterProcessingState, "Array<'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID'>", ""));
        }

        // Query Params
        if (filterUsesNonExemptEncryption !== undefined) {
            requestContext.setQueryParam("filter[usesNonExemptEncryption]", ObjectSerializer.serialize(filterUsesNonExemptEncryption, "Array<string>", ""));
        }

        // Query Params
        if (filterVersion !== undefined) {
            requestContext.setQueryParam("filter[version]", ObjectSerializer.serialize(filterVersion, "Array<string>", ""));
        }

        // Query Params
        if (filterApp !== undefined) {
            requestContext.setQueryParam("filter[app]", ObjectSerializer.serialize(filterApp, "Array<string>", ""));
        }

        // Query Params
        if (filterAppStoreVersion !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersion]", ObjectSerializer.serialize(filterAppStoreVersion, "Array<string>", ""));
        }

        // Query Params
        if (filterBetaGroups !== undefined) {
            requestContext.setQueryParam("filter[betaGroups]", ObjectSerializer.serialize(filterBetaGroups, "Array<string>", ""));
        }

        // Query Params
        if (filterPreReleaseVersion !== undefined) {
            requestContext.setQueryParam("filter[preReleaseVersion]", ObjectSerializer.serialize(filterPreReleaseVersion, "Array<string>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'preReleaseVersion' | '-preReleaseVersion' | 'uploadedDate' | '-uploadedDate' | 'version' | '-version'>", ""));
        }

        // Query Params
        if (fieldsBuildBundles !== undefined) {
            requestContext.setQueryParam("fields[buildBundles]", ObjectSerializer.serialize(fieldsBuildBundles, "Array<'appClipDomainCacheStatus' | 'appClipDomainDebugStatus' | 'betaAppClipInvocations' | 'buildBundleFileSizes' | 'bundleId' | 'bundleType' | 'dSYMUrl' | 'deviceProtocols' | 'entitlements' | 'fileName' | 'hasOnDemandResources' | 'hasPrerenderedIcon' | 'hasSirikit' | 'includesSymbols' | 'isIosBuildMacAppStoreCompatible' | 'locales' | 'platformBuild' | 'requiredCapabilities' | 'sdkBuild' | 'supportedArchitectures' | 'usesLocationServices'>", ""));
        }

        // Query Params
        if (fieldsBuildIcons !== undefined) {
            requestContext.setQueryParam("fields[buildIcons]", ObjectSerializer.serialize(fieldsBuildIcons, "Array<'iconAsset' | 'iconType' | 'name'>", ""));
        }

        // Query Params
        if (fieldsBetaAppReviewSubmissions !== undefined) {
            requestContext.setQueryParam("fields[betaAppReviewSubmissions]", ObjectSerializer.serialize(fieldsBetaAppReviewSubmissions, "Array<'betaReviewState' | 'build' | 'submittedDate'>", ""));
        }

        // Query Params
        if (fieldsBuildBetaDetails !== undefined) {
            requestContext.setQueryParam("fields[buildBetaDetails]", ObjectSerializer.serialize(fieldsBuildBetaDetails, "Array<'autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState'>", ""));
        }

        // Query Params
        if (fieldsBetaTesters !== undefined) {
            requestContext.setQueryParam("fields[betaTesters]", ObjectSerializer.serialize(fieldsBetaTesters, "Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'>", ""));
        }

        // Query Params
        if (fieldsPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("fields[preReleaseVersions]", ObjectSerializer.serialize(fieldsPreReleaseVersions, "Array<'app' | 'builds' | 'platform' | 'version'>", ""));
        }

        // Query Params
        if (fieldsBetaBuildLocalizations !== undefined) {
            requestContext.setQueryParam("fields[betaBuildLocalizations]", ObjectSerializer.serialize(fieldsBetaBuildLocalizations, "Array<'build' | 'locale' | 'whatsNew'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
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
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
        }

        // Query Params
        if (fieldsBetaGroups !== undefined) {
            requestContext.setQueryParam("fields[betaGroups]", ObjectSerializer.serialize(fieldsBetaGroups, "Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitIndividualTesters !== undefined) {
            requestContext.setQueryParam("limit[individualTesters]", ObjectSerializer.serialize(limitIndividualTesters, "number", ""));
        }

        // Query Params
        if (limitBetaGroups !== undefined) {
            requestContext.setQueryParam("limit[betaGroups]", ObjectSerializer.serialize(limitBetaGroups, "number", ""));
        }

        // Query Params
        if (limitBetaBuildLocalizations !== undefined) {
            requestContext.setQueryParam("limit[betaBuildLocalizations]", ObjectSerializer.serialize(limitBetaBuildLocalizations, "number", ""));
        }

        // Query Params
        if (limitIcons !== undefined) {
            requestContext.setQueryParam("limit[icons]", ObjectSerializer.serialize(limitIcons, "number", ""));
        }

        // Query Params
        if (limitBuildBundles !== undefined) {
            requestContext.setQueryParam("limit[buildBundles]", ObjectSerializer.serialize(limitBuildBundles, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildBetaDetail' | 'buildBundles' | 'icons' | 'individualTesters' | 'preReleaseVersion'>", ""));
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
     * @param ciBuildRunCreateRequest CiBuildRun representation
     */
    public async ciBuildRunsCreateInstance(ciBuildRunCreateRequest: CiBuildRunCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'ciBuildRunCreateRequest' is not null or undefined
        if (ciBuildRunCreateRequest === null || ciBuildRunCreateRequest === undefined) {
            throw new RequiredError("CiBuildRunsApi", "ciBuildRunsCreateInstance", "ciBuildRunCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/ciBuildRuns';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(ciBuildRunCreateRequest, "CiBuildRunCreateRequest", ""),
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
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param include comma-separated list of relationships to include
     * @param fieldsCiBuildActions the fields to include for returned resources of type ciBuildActions
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param limitBuilds maximum number of related builds returned (when they are included)
     */
    public async ciBuildRunsGetInstance(id: string, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, include?: Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>, fieldsCiBuildActions?: Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, limitBuilds?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiBuildRunsApi", "ciBuildRunsGetInstance", "id");
        }







        // Path Params
        const localVarPath = '/v1/ciBuildRuns/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiBuildRuns !== undefined) {
            requestContext.setQueryParam("fields[ciBuildRuns]", ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>", ""));
        }

        // Query Params
        if (fieldsCiBuildActions !== undefined) {
            requestContext.setQueryParam("fields[ciBuildActions]", ObjectSerializer.serialize(fieldsCiBuildActions, "Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'>", ""));
        }

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
        }

        // Query Params
        if (limitBuilds !== undefined) {
            requestContext.setQueryParam("limit[builds]", ObjectSerializer.serialize(limitBuilds, "number", ""));
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

export class CiBuildRunsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciBuildRunsActionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciBuildRunsActionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiBuildActionsResponse >> {
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
            const body: CiBuildActionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildActionsResponse", ""
            ) as CiBuildActionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiBuildActionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildActionsResponse", ""
            ) as CiBuildActionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciBuildRunsBuildsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciBuildRunsBuildsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BuildsResponse >> {
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
            const body: BuildsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildsResponse", ""
            ) as BuildsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildsResponse", ""
            ) as BuildsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciBuildRunsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciBuildRunsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiBuildRunResponse >> {
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
            const body: CiBuildRunResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildRunResponse", ""
            ) as CiBuildRunResponse;
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
            const body: CiBuildRunResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildRunResponse", ""
            ) as CiBuildRunResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciBuildRunsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciBuildRunsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiBuildRunResponse >> {
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
            const body: CiBuildRunResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildRunResponse", ""
            ) as CiBuildRunResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiBuildRunResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildRunResponse", ""
            ) as CiBuildRunResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
