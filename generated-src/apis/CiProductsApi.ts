// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppResponse } from '../models/AppResponse.ts';
import { CiBuildRunsResponse } from '../models/CiBuildRunsResponse.ts';
import { CiProductResponse } from '../models/CiProductResponse.ts';
import { CiProductsResponse } from '../models/CiProductsResponse.ts';
import { CiWorkflowsResponse } from '../models/CiWorkflowsResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';
import { ScmRepositoriesResponse } from '../models/ScmRepositoriesResponse.ts';

/**
 * no description
 */
export class CiProductsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param filterId filter by id(s)
     * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
     * @param fieldsScmProviders the fields to include for returned resources of type scmProviders
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async ciProductsAdditionalRepositoriesGetToManyRelated(id: string, filterId?: Array<string>, fieldsScmGitReferences?: Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>, fieldsScmProviders?: Array<'repositories' | 'scmProviderType' | 'url'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, limit?: number, include?: Array<'defaultBranch' | 'scmProvider'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsAdditionalRepositoriesGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/ciProducts/{id}/additionalRepositories'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (fieldsScmGitReferences !== undefined) {
            requestContext.setQueryParam("fields[scmGitReferences]", ObjectSerializer.serialize(fieldsScmGitReferences, "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>", ""));
        }

        // Query Params
        if (fieldsScmProviders !== undefined) {
            requestContext.setQueryParam("fields[scmProviders]", ObjectSerializer.serialize(fieldsScmProviders, "Array<'repositories' | 'scmProviderType' | 'url'>", ""));
        }

        // Query Params
        if (fieldsScmRepositories !== undefined) {
            requestContext.setQueryParam("fields[scmRepositories]", ObjectSerializer.serialize(fieldsScmRepositories, "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'defaultBranch' | 'scmProvider'>", ""));
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
     * @param fieldsGameCenterDetails the fields to include for returned resources of type gameCenterDetails
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param fieldsBetaGroups the fields to include for returned resources of type betaGroups
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param fieldsBetaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsBetaAppLocalizations the fields to include for returned resources of type betaAppLocalizations
     * @param fieldsAppInfos the fields to include for returned resources of type appInfos
     * @param fieldsPreReleaseVersions the fields to include for returned resources of type preReleaseVersions
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param fieldsAppPreOrders the fields to include for returned resources of type appPreOrders
     * @param fieldsAppPrices the fields to include for returned resources of type appPrices
     * @param fieldsGameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsSubscriptionGracePeriods the fields to include for returned resources of type subscriptionGracePeriods
     * @param fieldsEndUserLicenseAgreements the fields to include for returned resources of type endUserLicenseAgreements
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppEncryptionDeclarations the fields to include for returned resources of type appEncryptionDeclarations
     * @param fieldsAppCustomProductPages the fields to include for returned resources of type appCustomProductPages
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limitAppEncryptionDeclarations maximum number of related appEncryptionDeclarations returned (when they are included)
     * @param limitBetaGroups maximum number of related betaGroups returned (when they are included)
     * @param limitAppStoreVersions maximum number of related appStoreVersions returned (when they are included)
     * @param limitPreReleaseVersions maximum number of related preReleaseVersions returned (when they are included)
     * @param limitBetaAppLocalizations maximum number of related betaAppLocalizations returned (when they are included)
     * @param limitBuilds maximum number of related builds returned (when they are included)
     * @param limitAppInfos maximum number of related appInfos returned (when they are included)
     * @param limitAppClips maximum number of related appClips returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param limitAvailableTerritories maximum number of related availableTerritories returned (when they are included)
     * @param limitInAppPurchases maximum number of related inAppPurchases returned (when they are included)
     * @param limitSubscriptionGroups maximum number of related subscriptionGroups returned (when they are included)
     * @param limitGameCenterEnabledVersions maximum number of related gameCenterEnabledVersions returned (when they are included)
     * @param limitAppCustomProductPages maximum number of related appCustomProductPages returned (when they are included)
     * @param limitInAppPurchasesV2 maximum number of related inAppPurchasesV2 returned (when they are included)
     * @param limitPromotedPurchases maximum number of related promotedPurchases returned (when they are included)
     * @param limitAppEvents maximum number of related appEvents returned (when they are included)
     * @param limitReviewSubmissions maximum number of related reviewSubmissions returned (when they are included)
     * @param limitAppStoreVersionExperimentsV2 maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async ciProductsAppGetToOneRelated(id: string, fieldsBetaAppReviewDetails?: Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsGameCenterDetails?: Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>, fieldsBetaGroups?: Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'>, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, fieldsBetaLicenseAgreements?: Array<'agreementText' | 'app'>, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsBetaAppLocalizations?: Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>, fieldsAppInfos?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>, fieldsPreReleaseVersions?: Array<'app' | 'builds' | 'platform' | 'version'>, fieldsInAppPurchases?: Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'>, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsAppPreOrders?: Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>, fieldsAppPrices?: Array<'app' | 'priceTier'>, fieldsGameCenterEnabledVersions?: Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsSubscriptionGracePeriods?: Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'>, fieldsEndUserLicenseAgreements?: Array<'agreementText' | 'app' | 'territories'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppEncryptionDeclarations?: Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>, fieldsAppCustomProductPages?: Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>, fieldsTerritories?: Array<'currency'>, limitAppEncryptionDeclarations?: number, limitBetaGroups?: number, limitAppStoreVersions?: number, limitPreReleaseVersions?: number, limitBetaAppLocalizations?: number, limitBuilds?: number, limitAppInfos?: number, limitAppClips?: number, limitPrices?: number, limitAvailableTerritories?: number, limitInAppPurchases?: number, limitSubscriptionGroups?: number, limitGameCenterEnabledVersions?: number, limitAppCustomProductPages?: number, limitInAppPurchasesV2?: number, limitPromotedPurchases?: number, limitAppEvents?: number, limitReviewSubmissions?: number, limitAppStoreVersionExperimentsV2?: number, include?: Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsAppGetToOneRelated", "id");
        }
















































        // Path Params
        const localVarPath = '/v1/ciProducts/{id}/app'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBetaAppReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[betaAppReviewDetails]", ObjectSerializer.serialize(fieldsBetaAppReviewDetails, "Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
        }

        // Query Params
        if (fieldsGameCenterDetails !== undefined) {
            requestContext.setQueryParam("fields[gameCenterDetails]", ObjectSerializer.serialize(fieldsGameCenterDetails, "Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'>", ""));
        }

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
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
        if (fieldsApps !== undefined) {
            requestContext.setQueryParam("fields[apps]", ObjectSerializer.serialize(fieldsApps, "Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>", ""));
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
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("fields[betaAppLocalizations]", ObjectSerializer.serialize(fieldsBetaAppLocalizations, "Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'>", ""));
        }

        // Query Params
        if (fieldsAppInfos !== undefined) {
            requestContext.setQueryParam("fields[appInfos]", ObjectSerializer.serialize(fieldsAppInfos, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>", ""));
        }

        // Query Params
        if (fieldsPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("fields[preReleaseVersions]", ObjectSerializer.serialize(fieldsPreReleaseVersions, "Array<'app' | 'builds' | 'platform' | 'version'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchases !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchases]", ObjectSerializer.serialize(fieldsInAppPurchases, "Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroups]", ObjectSerializer.serialize(fieldsSubscriptionGroups, "Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (fieldsAppPreOrders !== undefined) {
            requestContext.setQueryParam("fields[appPreOrders]", ObjectSerializer.serialize(fieldsAppPreOrders, "Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'>", ""));
        }

        // Query Params
        if (fieldsAppPrices !== undefined) {
            requestContext.setQueryParam("fields[appPrices]", ObjectSerializer.serialize(fieldsAppPrices, "Array<'app' | 'priceTier'>", ""));
        }

        // Query Params
        if (fieldsGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("fields[gameCenterEnabledVersions]", ObjectSerializer.serialize(fieldsGameCenterEnabledVersions, "Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
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
        if (fieldsAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("fields[appEncryptionDeclarations]", ObjectSerializer.serialize(fieldsAppEncryptionDeclarations, "Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPages]", ObjectSerializer.serialize(fieldsAppCustomProductPages, "Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limitAppEncryptionDeclarations !== undefined) {
            requestContext.setQueryParam("limit[appEncryptionDeclarations]", ObjectSerializer.serialize(limitAppEncryptionDeclarations, "number", ""));
        }

        // Query Params
        if (limitBetaGroups !== undefined) {
            requestContext.setQueryParam("limit[betaGroups]", ObjectSerializer.serialize(limitBetaGroups, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersions !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersions]", ObjectSerializer.serialize(limitAppStoreVersions, "number", ""));
        }

        // Query Params
        if (limitPreReleaseVersions !== undefined) {
            requestContext.setQueryParam("limit[preReleaseVersions]", ObjectSerializer.serialize(limitPreReleaseVersions, "number", ""));
        }

        // Query Params
        if (limitBetaAppLocalizations !== undefined) {
            requestContext.setQueryParam("limit[betaAppLocalizations]", ObjectSerializer.serialize(limitBetaAppLocalizations, "number", ""));
        }

        // Query Params
        if (limitBuilds !== undefined) {
            requestContext.setQueryParam("limit[builds]", ObjectSerializer.serialize(limitBuilds, "number", ""));
        }

        // Query Params
        if (limitAppInfos !== undefined) {
            requestContext.setQueryParam("limit[appInfos]", ObjectSerializer.serialize(limitAppInfos, "number", ""));
        }

        // Query Params
        if (limitAppClips !== undefined) {
            requestContext.setQueryParam("limit[appClips]", ObjectSerializer.serialize(limitAppClips, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
        }

        // Query Params
        if (limitAvailableTerritories !== undefined) {
            requestContext.setQueryParam("limit[availableTerritories]", ObjectSerializer.serialize(limitAvailableTerritories, "number", ""));
        }

        // Query Params
        if (limitInAppPurchases !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchases]", ObjectSerializer.serialize(limitInAppPurchases, "number", ""));
        }

        // Query Params
        if (limitSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("limit[subscriptionGroups]", ObjectSerializer.serialize(limitSubscriptionGroups, "number", ""));
        }

        // Query Params
        if (limitGameCenterEnabledVersions !== undefined) {
            requestContext.setQueryParam("limit[gameCenterEnabledVersions]", ObjectSerializer.serialize(limitGameCenterEnabledVersions, "number", ""));
        }

        // Query Params
        if (limitAppCustomProductPages !== undefined) {
            requestContext.setQueryParam("limit[appCustomProductPages]", ObjectSerializer.serialize(limitAppCustomProductPages, "number", ""));
        }

        // Query Params
        if (limitInAppPurchasesV2 !== undefined) {
            requestContext.setQueryParam("limit[inAppPurchasesV2]", ObjectSerializer.serialize(limitInAppPurchasesV2, "number", ""));
        }

        // Query Params
        if (limitPromotedPurchases !== undefined) {
            requestContext.setQueryParam("limit[promotedPurchases]", ObjectSerializer.serialize(limitPromotedPurchases, "number", ""));
        }

        // Query Params
        if (limitAppEvents !== undefined) {
            requestContext.setQueryParam("limit[appEvents]", ObjectSerializer.serialize(limitAppEvents, "number", ""));
        }

        // Query Params
        if (limitReviewSubmissions !== undefined) {
            requestContext.setQueryParam("limit[reviewSubmissions]", ObjectSerializer.serialize(limitReviewSubmissions, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentsV2 !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentsV2]", ObjectSerializer.serialize(limitAppStoreVersionExperimentsV2, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'>", ""));
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
     * @param filterBuilds filter by id(s) of related \&#39;builds\&#39;
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
     * @param fieldsScmPullRequests the fields to include for returned resources of type scmPullRequests
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param limit maximum resources per page
     * @param limitBuilds maximum number of related builds returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async ciProductsBuildRunsGetToManyRelated(id: string, filterBuilds?: Array<string>, sort?: Array<'number' | '-number'>, fieldsScmGitReferences?: Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, fieldsCiWorkflows?: Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>, fieldsScmPullRequests?: Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, limit?: number, limitBuilds?: number, include?: Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsBuildRunsGetToManyRelated", "id");
        }













        // Path Params
        const localVarPath = '/v1/ciProducts/{id}/buildRuns'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterBuilds !== undefined) {
            requestContext.setQueryParam("filter[builds]", ObjectSerializer.serialize(filterBuilds, "Array<string>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'number' | '-number'>", ""));
        }

        // Query Params
        if (fieldsScmGitReferences !== undefined) {
            requestContext.setQueryParam("fields[scmGitReferences]", ObjectSerializer.serialize(fieldsScmGitReferences, "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>", ""));
        }

        // Query Params
        if (fieldsCiBuildRuns !== undefined) {
            requestContext.setQueryParam("fields[ciBuildRuns]", ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>", ""));
        }

        // Query Params
        if (fieldsCiWorkflows !== undefined) {
            requestContext.setQueryParam("fields[ciWorkflows]", ObjectSerializer.serialize(fieldsCiWorkflows, "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>", ""));
        }

        // Query Params
        if (fieldsScmPullRequests !== undefined) {
            requestContext.setQueryParam("fields[scmPullRequests]", ObjectSerializer.serialize(fieldsScmPullRequests, "Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'>", ""));
        }

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
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
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>", ""));
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
     */
    public async ciProductsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/ciProducts/{id}'
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
     * @param filterProductType filter by attribute \&#39;productType\&#39;
     * @param filterApp filter by id(s) of related \&#39;app\&#39;
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param limitPrimaryRepositories maximum number of related primaryRepositories returned (when they are included)
     */
    public async ciProductsGetCollection(filterProductType?: Array<'APP' | 'FRAMEWORK'>, filterApp?: Array<string>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, limit?: number, include?: Array<'app' | 'bundleId' | 'primaryRepositories'>, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, fieldsCiWorkflows?: Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, limitPrimaryRepositories?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/v1/ciProducts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterProductType !== undefined) {
            requestContext.setQueryParam("filter[productType]", ObjectSerializer.serialize(filterProductType, "Array<'APP' | 'FRAMEWORK'>", ""));
        }

        // Query Params
        if (filterApp !== undefined) {
            requestContext.setQueryParam("filter[app]", ObjectSerializer.serialize(filterApp, "Array<string>", ""));
        }

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'bundleId' | 'primaryRepositories'>", ""));
        }

        // Query Params
        if (fieldsCiBuildRuns !== undefined) {
            requestContext.setQueryParam("fields[ciBuildRuns]", ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>", ""));
        }

        // Query Params
        if (fieldsCiWorkflows !== undefined) {
            requestContext.setQueryParam("fields[ciWorkflows]", ObjectSerializer.serialize(fieldsCiWorkflows, "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>", ""));
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
        if (limitPrimaryRepositories !== undefined) {
            requestContext.setQueryParam("limit[primaryRepositories]", ObjectSerializer.serialize(limitPrimaryRepositories, "number", ""));
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
     * @param include comma-separated list of relationships to include
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
     * @param fieldsApps the fields to include for returned resources of type apps
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param limitPrimaryRepositories maximum number of related primaryRepositories returned (when they are included)
     */
    public async ciProductsGetInstance(id: string, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, include?: Array<'app' | 'bundleId' | 'primaryRepositories'>, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, fieldsCiWorkflows?: Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, limitPrimaryRepositories?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsGetInstance", "id");
        }









        // Path Params
        const localVarPath = '/v1/ciProducts/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'bundleId' | 'primaryRepositories'>", ""));
        }

        // Query Params
        if (fieldsCiBuildRuns !== undefined) {
            requestContext.setQueryParam("fields[ciBuildRuns]", ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>", ""));
        }

        // Query Params
        if (fieldsCiWorkflows !== undefined) {
            requestContext.setQueryParam("fields[ciWorkflows]", ObjectSerializer.serialize(fieldsCiWorkflows, "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>", ""));
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
        if (limitPrimaryRepositories !== undefined) {
            requestContext.setQueryParam("limit[primaryRepositories]", ObjectSerializer.serialize(limitPrimaryRepositories, "number", ""));
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
     * @param filterId filter by id(s)
     * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
     * @param fieldsScmProviders the fields to include for returned resources of type scmProviders
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async ciProductsPrimaryRepositoriesGetToManyRelated(id: string, filterId?: Array<string>, fieldsScmGitReferences?: Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>, fieldsScmProviders?: Array<'repositories' | 'scmProviderType' | 'url'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, limit?: number, include?: Array<'defaultBranch' | 'scmProvider'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsPrimaryRepositoriesGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/ciProducts/{id}/primaryRepositories'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (fieldsScmGitReferences !== undefined) {
            requestContext.setQueryParam("fields[scmGitReferences]", ObjectSerializer.serialize(fieldsScmGitReferences, "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>", ""));
        }

        // Query Params
        if (fieldsScmProviders !== undefined) {
            requestContext.setQueryParam("fields[scmProviders]", ObjectSerializer.serialize(fieldsScmProviders, "Array<'repositories' | 'scmProviderType' | 'url'>", ""));
        }

        // Query Params
        if (fieldsScmRepositories !== undefined) {
            requestContext.setQueryParam("fields[scmRepositories]", ObjectSerializer.serialize(fieldsScmRepositories, "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'defaultBranch' | 'scmProvider'>", ""));
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
     * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
     * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
     * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async ciProductsWorkflowsGetToManyRelated(id: string, fieldsCiXcodeVersions?: Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>, fieldsCiWorkflows?: Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>, fieldsCiMacOsVersions?: Array<'name' | 'version' | 'xcodeVersions'>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, limit?: number, include?: Array<'macOsVersion' | 'product' | 'repository' | 'xcodeVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiProductsApi", "ciProductsWorkflowsGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/ciProducts/{id}/workflows'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiXcodeVersions !== undefined) {
            requestContext.setQueryParam("fields[ciXcodeVersions]", ObjectSerializer.serialize(fieldsCiXcodeVersions, "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>", ""));
        }

        // Query Params
        if (fieldsCiWorkflows !== undefined) {
            requestContext.setQueryParam("fields[ciWorkflows]", ObjectSerializer.serialize(fieldsCiWorkflows, "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>", ""));
        }

        // Query Params
        if (fieldsCiMacOsVersions !== undefined) {
            requestContext.setQueryParam("fields[ciMacOsVersions]", ObjectSerializer.serialize(fieldsCiMacOsVersions, "Array<'name' | 'version' | 'xcodeVersions'>", ""));
        }

        // Query Params
        if (fieldsCiProducts !== undefined) {
            requestContext.setQueryParam("fields[ciProducts]", ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>", ""));
        }

        // Query Params
        if (fieldsScmRepositories !== undefined) {
            requestContext.setQueryParam("fields[scmRepositories]", ObjectSerializer.serialize(fieldsScmRepositories, "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'macOsVersion' | 'product' | 'repository' | 'xcodeVersion'>", ""));
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

export class CiProductsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciProductsAdditionalRepositoriesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsAdditionalRepositoriesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ScmRepositoriesResponse >> {
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
            const body: ScmRepositoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScmRepositoriesResponse", ""
            ) as ScmRepositoriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ScmRepositoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScmRepositoriesResponse", ""
            ) as ScmRepositoriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciProductsAppGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsAppGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppResponse >> {
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
     * @params response Response returned by the server for a request to ciProductsBuildRunsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsBuildRunsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiBuildRunsResponse >> {
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
            const body: CiBuildRunsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildRunsResponse", ""
            ) as CiBuildRunsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiBuildRunsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiBuildRunsResponse", ""
            ) as CiBuildRunsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciProductsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to ciProductsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiProductsResponse >> {
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
            const body: CiProductsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiProductsResponse", ""
            ) as CiProductsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiProductsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiProductsResponse", ""
            ) as CiProductsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciProductsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiProductResponse >> {
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
     * @params response Response returned by the server for a request to ciProductsPrimaryRepositoriesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsPrimaryRepositoriesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ScmRepositoriesResponse >> {
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
            const body: ScmRepositoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScmRepositoriesResponse", ""
            ) as ScmRepositoriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ScmRepositoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScmRepositoriesResponse", ""
            ) as ScmRepositoriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciProductsWorkflowsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciProductsWorkflowsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiWorkflowsResponse >> {
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
            const body: CiWorkflowsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiWorkflowsResponse", ""
            ) as CiWorkflowsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiWorkflowsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiWorkflowsResponse", ""
            ) as CiWorkflowsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
