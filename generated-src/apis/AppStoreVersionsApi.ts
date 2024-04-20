// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AgeRatingDeclarationWithoutIncludesResponse } from '../models/AgeRatingDeclarationWithoutIncludesResponse.ts';
import { AlternativeDistributionPackageResponse } from '../models/AlternativeDistributionPackageResponse.ts';
import { AppClipDefaultExperienceResponse } from '../models/AppClipDefaultExperienceResponse.ts';
import { AppStoreReviewDetailResponse } from '../models/AppStoreReviewDetailResponse.ts';
import { AppStoreVersionAppClipDefaultExperienceLinkageRequest } from '../models/AppStoreVersionAppClipDefaultExperienceLinkageRequest.ts';
import { AppStoreVersionAppClipDefaultExperienceLinkageResponse } from '../models/AppStoreVersionAppClipDefaultExperienceLinkageResponse.ts';
import { AppStoreVersionBuildLinkageRequest } from '../models/AppStoreVersionBuildLinkageRequest.ts';
import { AppStoreVersionBuildLinkageResponse } from '../models/AppStoreVersionBuildLinkageResponse.ts';
import { AppStoreVersionCreateRequest } from '../models/AppStoreVersionCreateRequest.ts';
import { AppStoreVersionExperimentsResponse } from '../models/AppStoreVersionExperimentsResponse.ts';
import { AppStoreVersionExperimentsV2Response } from '../models/AppStoreVersionExperimentsV2Response.ts';
import { AppStoreVersionLocalizationsResponse } from '../models/AppStoreVersionLocalizationsResponse.ts';
import { AppStoreVersionPhasedReleaseWithoutIncludesResponse } from '../models/AppStoreVersionPhasedReleaseWithoutIncludesResponse.ts';
import { AppStoreVersionResponse } from '../models/AppStoreVersionResponse.ts';
import { AppStoreVersionSubmissionResponse } from '../models/AppStoreVersionSubmissionResponse.ts';
import { AppStoreVersionUpdateRequest } from '../models/AppStoreVersionUpdateRequest.ts';
import { BuildWithoutIncludesResponse } from '../models/BuildWithoutIncludesResponse.ts';
import { CustomerReviewsResponse } from '../models/CustomerReviewsResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';
import { RoutingAppCoverageWithoutIncludesResponse } from '../models/RoutingAppCoverageWithoutIncludesResponse.ts';

/**
 * no description
 */
export class AppStoreVersionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsAgeRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
     */
    public async appStoreVersionsAgeRatingDeclarationGetToOneRelated(id: string, fieldsAgeRatingDeclarations?: Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAgeRatingDeclarationGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/ageRatingDeclaration'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAgeRatingDeclarations !== undefined) {
            requestContext.setQueryParam("fields[ageRatingDeclarations]", ObjectSerializer.serialize(fieldsAgeRatingDeclarations, "Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>", ""));
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
     * @param fieldsAlternativeDistributionPackages the fields to include for returned resources of type alternativeDistributionPackages
     * @param fieldsAlternativeDistributionPackageVersions the fields to include for returned resources of type alternativeDistributionPackageVersions
     * @param limitVersions maximum number of related versions returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsAlternativeDistributionPackageGetToOneRelated(id: string, fieldsAlternativeDistributionPackages?: Array<'appStoreVersion' | 'versions'>, fieldsAlternativeDistributionPackageVersions?: Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>, limitVersions?: number, include?: Array<'versions'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAlternativeDistributionPackageGetToOneRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/alternativeDistributionPackage'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAlternativeDistributionPackages !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackages]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackages, "Array<'appStoreVersion' | 'versions'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageVersions !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVersions]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVersions, "Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>", ""));
        }

        // Query Params
        if (limitVersions !== undefined) {
            requestContext.setQueryParam("limit[versions]", ObjectSerializer.serialize(limitVersions, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'versions'>", ""));
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
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsAppClipAppStoreReviewDetails the fields to include for returned resources of type appClipAppStoreReviewDetails
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
     * @param fieldsAppClipDefaultExperienceLocalizations the fields to include for returned resources of type appClipDefaultExperienceLocalizations
     * @param limitAppClipDefaultExperienceLocalizations maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsAppClipDefaultExperienceGetToOneRelated(id: string, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsAppClipAppStoreReviewDetails?: Array<'appClipDefaultExperience' | 'invocationUrls'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppClipDefaultExperiences?: Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>, fieldsAppClipDefaultExperienceLocalizations?: Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'>, limitAppClipDefaultExperienceLocalizations?: number, include?: Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppClipDefaultExperienceGetToOneRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appClipDefaultExperience'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsAppClipAppStoreReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[appClipAppStoreReviewDetails]", ObjectSerializer.serialize(fieldsAppClipAppStoreReviewDetails, "Array<'appClipDefaultExperience' | 'invocationUrls'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperiences]", ObjectSerializer.serialize(fieldsAppClipDefaultExperiences, "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperienceLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperienceLocalizations]", ObjectSerializer.serialize(fieldsAppClipDefaultExperienceLocalizations, "Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'>", ""));
        }

        // Query Params
        if (limitAppClipDefaultExperienceLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appClipDefaultExperienceLocalizations]", ObjectSerializer.serialize(limitAppClipDefaultExperienceLocalizations, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'>", ""));
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
    public async appStoreVersionsAppClipDefaultExperienceGetToOneRelationship(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppClipDefaultExperienceGetToOneRelationship", "id");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * @param appStoreVersionAppClipDefaultExperienceLinkageRequest Related linkage
     */
    public async appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship(id: string, appStoreVersionAppClipDefaultExperienceLinkageRequest: AppStoreVersionAppClipDefaultExperienceLinkageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship", "id");
        }


        // verify required parameter 'appStoreVersionAppClipDefaultExperienceLinkageRequest' is not null or undefined
        if (appStoreVersionAppClipDefaultExperienceLinkageRequest === null || appStoreVersionAppClipDefaultExperienceLinkageRequest === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship", "appStoreVersionAppClipDefaultExperienceLinkageRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience'
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
            ObjectSerializer.serialize(appStoreVersionAppClipDefaultExperienceLinkageRequest, "AppStoreVersionAppClipDefaultExperienceLinkageRequest", ""),
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
     * @param fieldsAppStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
     * @param limitAppStoreReviewAttachments maximum number of related appStoreReviewAttachments returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsAppStoreReviewDetailGetToOneRelated(id: string, fieldsAppStoreReviewDetails?: Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppStoreReviewAttachments?: Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, limitAppStoreReviewAttachments?: number, include?: Array<'appStoreReviewAttachments' | 'appStoreVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppStoreReviewDetailGetToOneRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appStoreReviewDetail'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[appStoreReviewDetails]", ObjectSerializer.serialize(fieldsAppStoreReviewDetails, "Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppStoreReviewAttachments !== undefined) {
            requestContext.setQueryParam("fields[appStoreReviewAttachments]", ObjectSerializer.serialize(fieldsAppStoreReviewAttachments, "Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (limitAppStoreReviewAttachments !== undefined) {
            requestContext.setQueryParam("limit[appStoreReviewAttachments]", ObjectSerializer.serialize(limitAppStoreReviewAttachments, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreReviewAttachments' | 'appStoreVersion'>", ""));
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
     * @param limit maximum resources per page
     * @param limitAppStoreVersionExperimentTreatments maximum number of related appStoreVersionExperimentTreatments returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsAppStoreVersionExperimentsGetToManyRelated(id: string, filterState?: Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'STOPPED'>, fieldsAppStoreVersionExperiments?: Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsAppStoreVersionExperimentTreatments?: Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, limit?: number, limitAppStoreVersionExperimentTreatments?: number, include?: Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppStoreVersionExperimentsGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appStoreVersionExperiments'
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
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
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
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentTreatments !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentTreatments]", ObjectSerializer.serialize(limitAppStoreVersionExperimentTreatments, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'>", ""));
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
    public async appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated(id: string, filterState?: Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'STOPPED'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsAppStoreVersionExperimentTreatments?: Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsApps?: Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>, limit?: number, limitControlVersions?: number, limitAppStoreVersionExperimentTreatments?: number, include?: Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'latestControlVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appStoreVersionExperimentsV2'
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
     * @param filterLocale filter by attribute \&#39;locale\&#39;
     * @param fieldsAppScreenshotSets the fields to include for returned resources of type appScreenshotSets
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppPreviewSets the fields to include for returned resources of type appPreviewSets
     * @param fieldsAppStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
     * @param limit maximum resources per page
     * @param limitAppScreenshotSets maximum number of related appScreenshotSets returned (when they are included)
     * @param limitAppPreviewSets maximum number of related appPreviewSets returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated(id: string, filterLocale?: Array<string>, fieldsAppScreenshotSets?: Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppPreviewSets?: Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>, fieldsAppStoreVersionLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>, limit?: number, limitAppScreenshotSets?: number, limitAppPreviewSets?: number, include?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appStoreVersionLocalizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterLocale !== undefined) {
            requestContext.setQueryParam("filter[locale]", ObjectSerializer.serialize(filterLocale, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("fields[appScreenshotSets]", ObjectSerializer.serialize(fieldsAppScreenshotSets, "Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppPreviewSets !== undefined) {
            requestContext.setQueryParam("fields[appPreviewSets]", ObjectSerializer.serialize(fieldsAppPreviewSets, "Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("limit[appScreenshotSets]", ObjectSerializer.serialize(limitAppScreenshotSets, "number", ""));
        }

        // Query Params
        if (limitAppPreviewSets !== undefined) {
            requestContext.setQueryParam("limit[appPreviewSets]", ObjectSerializer.serialize(limitAppPreviewSets, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion'>", ""));
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
     * @param fieldsAppStoreVersionPhasedReleases the fields to include for returned resources of type appStoreVersionPhasedReleases
     */
    public async appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated(id: string, fieldsAppStoreVersionPhasedReleases?: Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appStoreVersionPhasedRelease'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreVersionPhasedReleases !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionPhasedReleases]", ObjectSerializer.serialize(fieldsAppStoreVersionPhasedReleases, "Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'>", ""));
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
     * @param fieldsAppStoreVersionSubmissions the fields to include for returned resources of type appStoreVersionSubmissions
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsAppStoreVersionSubmissionGetToOneRelated(id: string, fieldsAppStoreVersionSubmissions?: Array<'appStoreVersion'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, include?: Array<'appStoreVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsAppStoreVersionSubmissionGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/appStoreVersionSubmission'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreVersionSubmissions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionSubmissions]", ObjectSerializer.serialize(fieldsAppStoreVersionSubmissions, "Array<'appStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreVersion'>", ""));
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
     * @param fieldsBuilds the fields to include for returned resources of type builds
     */
    public async appStoreVersionsBuildGetToOneRelated(id: string, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsBuildGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/build'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBuilds !== undefined) {
            requestContext.setQueryParam("fields[builds]", ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>", ""));
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
    public async appStoreVersionsBuildGetToOneRelationship(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsBuildGetToOneRelationship", "id");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/relationships/build'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * @param appStoreVersionBuildLinkageRequest Related linkage
     */
    public async appStoreVersionsBuildUpdateToOneRelationship(id: string, appStoreVersionBuildLinkageRequest: AppStoreVersionBuildLinkageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsBuildUpdateToOneRelationship", "id");
        }


        // verify required parameter 'appStoreVersionBuildLinkageRequest' is not null or undefined
        if (appStoreVersionBuildLinkageRequest === null || appStoreVersionBuildLinkageRequest === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsBuildUpdateToOneRelationship", "appStoreVersionBuildLinkageRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/relationships/build'
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
            ObjectSerializer.serialize(appStoreVersionBuildLinkageRequest, "AppStoreVersionBuildLinkageRequest", ""),
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
     * @param appStoreVersionCreateRequest AppStoreVersion representation
     */
    public async appStoreVersionsCreateInstance(appStoreVersionCreateRequest: AppStoreVersionCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appStoreVersionCreateRequest' is not null or undefined
        if (appStoreVersionCreateRequest === null || appStoreVersionCreateRequest === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsCreateInstance", "appStoreVersionCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(appStoreVersionCreateRequest, "AppStoreVersionCreateRequest", ""),
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
     * @param filterRating filter by attribute \&#39;rating\&#39;
     * @param filterTerritory filter by attribute \&#39;territory\&#39;
     * @param existsPublishedResponse filter by publishedResponse
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsCustomerReviews the fields to include for returned resources of type customerReviews
     * @param fieldsCustomerReviewResponses the fields to include for returned resources of type customerReviewResponses
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionsCustomerReviewsGetToManyRelated(id: string, filterRating?: Array<string>, filterTerritory?: Array<'ABW' | 'AFG' | 'AGO' | 'AIA' | 'ALB' | 'AND' | 'ANT' | 'ARE' | 'ARG' | 'ARM' | 'ASM' | 'ATG' | 'AUS' | 'AUT' | 'AZE' | 'BDI' | 'BEL' | 'BEN' | 'BES' | 'BFA' | 'BGD' | 'BGR' | 'BHR' | 'BHS' | 'BIH' | 'BLR' | 'BLZ' | 'BMU' | 'BOL' | 'BRA' | 'BRB' | 'BRN' | 'BTN' | 'BWA' | 'CAF' | 'CAN' | 'CHE' | 'CHL' | 'CHN' | 'CIV' | 'CMR' | 'COD' | 'COG' | 'COK' | 'COL' | 'COM' | 'CPV' | 'CRI' | 'CUB' | 'CUW' | 'CXR' | 'CYM' | 'CYP' | 'CZE' | 'DEU' | 'DJI' | 'DMA' | 'DNK' | 'DOM' | 'DZA' | 'ECU' | 'EGY' | 'ERI' | 'ESP' | 'EST' | 'ETH' | 'FIN' | 'FJI' | 'FLK' | 'FRA' | 'FRO' | 'FSM' | 'GAB' | 'GBR' | 'GEO' | 'GGY' | 'GHA' | 'GIB' | 'GIN' | 'GLP' | 'GMB' | 'GNB' | 'GNQ' | 'GRC' | 'GRD' | 'GRL' | 'GTM' | 'GUF' | 'GUM' | 'GUY' | 'HKG' | 'HND' | 'HRV' | 'HTI' | 'HUN' | 'IDN' | 'IMN' | 'IND' | 'IRL' | 'IRQ' | 'ISL' | 'ISR' | 'ITA' | 'JAM' | 'JEY' | 'JOR' | 'JPN' | 'KAZ' | 'KEN' | 'KGZ' | 'KHM' | 'KIR' | 'KNA' | 'KOR' | 'KWT' | 'LAO' | 'LBN' | 'LBR' | 'LBY' | 'LCA' | 'LIE' | 'LKA' | 'LSO' | 'LTU' | 'LUX' | 'LVA' | 'MAC' | 'MAR' | 'MCO' | 'MDA' | 'MDG' | 'MDV' | 'MEX' | 'MHL' | 'MKD' | 'MLI' | 'MLT' | 'MMR' | 'MNE' | 'MNG' | 'MNP' | 'MOZ' | 'MRT' | 'MSR' | 'MTQ' | 'MUS' | 'MWI' | 'MYS' | 'MYT' | 'NAM' | 'NCL' | 'NER' | 'NFK' | 'NGA' | 'NIC' | 'NIU' | 'NLD' | 'NOR' | 'NPL' | 'NRU' | 'NZL' | 'OMN' | 'PAK' | 'PAN' | 'PER' | 'PHL' | 'PLW' | 'PNG' | 'POL' | 'PRI' | 'PRT' | 'PRY' | 'PSE' | 'PYF' | 'QAT' | 'REU' | 'ROU' | 'RUS' | 'RWA' | 'SAU' | 'SEN' | 'SGP' | 'SHN' | 'SLB' | 'SLE' | 'SLV' | 'SMR' | 'SOM' | 'SPM' | 'SRB' | 'SSD' | 'STP' | 'SUR' | 'SVK' | 'SVN' | 'SWE' | 'SWZ' | 'SXM' | 'SYC' | 'TCA' | 'TCD' | 'TGO' | 'THA' | 'TJK' | 'TKM' | 'TLS' | 'TON' | 'TTO' | 'TUN' | 'TUR' | 'TUV' | 'TWN' | 'TZA' | 'UGA' | 'UKR' | 'UMI' | 'URY' | 'USA' | 'UZB' | 'VAT' | 'VCT' | 'VEN' | 'VGB' | 'VIR' | 'VNM' | 'VUT' | 'WLF' | 'WSM' | 'YEM' | 'ZAF' | 'ZMB' | 'ZWE'>, existsPublishedResponse?: boolean, sort?: Array<'createdDate' | '-createdDate' | 'rating' | '-rating'>, fieldsCustomerReviews?: Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>, fieldsCustomerReviewResponses?: Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'>, limit?: number, include?: Array<'response'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsCustomerReviewsGetToManyRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/customerReviews'
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
     */
    public async appStoreVersionsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}'
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
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param include comma-separated list of relationships to include
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsAppStoreVersionSubmissions the fields to include for returned resources of type appStoreVersionSubmissions
     * @param fieldsAgeRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
     * @param fieldsAlternativeDistributionPackages the fields to include for returned resources of type alternativeDistributionPackages
     * @param fieldsCustomerReviews the fields to include for returned resources of type customerReviews
     * @param fieldsAppStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
     * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
     * @param fieldsRoutingAppCoverages the fields to include for returned resources of type routingAppCoverages
     * @param fieldsAppStoreVersionPhasedReleases the fields to include for returned resources of type appStoreVersionPhasedReleases
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param fieldsAppStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
     * @param limitAppStoreVersionExperiments maximum number of related appStoreVersionExperiments returned (when they are included)
     * @param limitAppStoreVersionExperimentsV2 maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
     * @param limitAppStoreVersionLocalizations maximum number of related appStoreVersionLocalizations returned (when they are included)
     */
    public async appStoreVersionsGetInstance(id: string, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, include?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'routingAppCoverage'>, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsAppStoreVersionSubmissions?: Array<'appStoreVersion'>, fieldsAgeRatingDeclarations?: Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>, fieldsAlternativeDistributionPackages?: Array<'appStoreVersion' | 'versions'>, fieldsCustomerReviews?: Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>, fieldsAppStoreReviewDetails?: Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsAppClipDefaultExperiences?: Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>, fieldsRoutingAppCoverages?: Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, fieldsAppStoreVersionPhasedReleases?: Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, fieldsAppStoreVersionLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>, limitAppStoreVersionExperiments?: number, limitAppStoreVersionExperimentsV2?: number, limitAppStoreVersionLocalizations?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsGetInstance", "id");
        }


















        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'routingAppCoverage'>", ""));
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
        if (fieldsAgeRatingDeclarations !== undefined) {
            requestContext.setQueryParam("fields[ageRatingDeclarations]", ObjectSerializer.serialize(fieldsAgeRatingDeclarations, "Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackages !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackages]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackages, "Array<'appStoreVersion' | 'versions'>", ""));
        }

        // Query Params
        if (fieldsCustomerReviews !== undefined) {
            requestContext.setQueryParam("fields[customerReviews]", ObjectSerializer.serialize(fieldsCustomerReviews, "Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'>", ""));
        }

        // Query Params
        if (fieldsAppStoreReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[appStoreReviewDetails]", ObjectSerializer.serialize(fieldsAppStoreReviewDetails, "Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperiences]", ObjectSerializer.serialize(fieldsAppClipDefaultExperiences, "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsRoutingAppCoverages !== undefined) {
            requestContext.setQueryParam("fields[routingAppCoverages]", ObjectSerializer.serialize(fieldsRoutingAppCoverages, "Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
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
        if (fieldsAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>", ""));
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
        if (limitAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionLocalizations]", ObjectSerializer.serialize(limitAppStoreVersionLocalizations, "number", ""));
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
     * @param fieldsRoutingAppCoverages the fields to include for returned resources of type routingAppCoverages
     */
    public async appStoreVersionsRoutingAppCoverageGetToOneRelated(id: string, fieldsRoutingAppCoverages?: Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsRoutingAppCoverageGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}/routingAppCoverage'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsRoutingAppCoverages !== undefined) {
            requestContext.setQueryParam("fields[routingAppCoverages]", ObjectSerializer.serialize(fieldsRoutingAppCoverages, "Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
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
     * @param appStoreVersionUpdateRequest AppStoreVersion representation
     */
    public async appStoreVersionsUpdateInstance(id: string, appStoreVersionUpdateRequest: AppStoreVersionUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsUpdateInstance", "id");
        }


        // verify required parameter 'appStoreVersionUpdateRequest' is not null or undefined
        if (appStoreVersionUpdateRequest === null || appStoreVersionUpdateRequest === undefined) {
            throw new RequiredError("AppStoreVersionsApi", "appStoreVersionsUpdateInstance", "appStoreVersionUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersions/{id}'
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
            ObjectSerializer.serialize(appStoreVersionUpdateRequest, "AppStoreVersionUpdateRequest", ""),
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

export class AppStoreVersionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAgeRatingDeclarationGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAgeRatingDeclarationGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgeRatingDeclarationWithoutIncludesResponse >> {
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
            const body: AgeRatingDeclarationWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgeRatingDeclarationWithoutIncludesResponse", ""
            ) as AgeRatingDeclarationWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgeRatingDeclarationWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgeRatingDeclarationWithoutIncludesResponse", ""
            ) as AgeRatingDeclarationWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAlternativeDistributionPackageGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAlternativeDistributionPackageGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageResponse >> {
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
            const body: AlternativeDistributionPackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageResponse", ""
            ) as AlternativeDistributionPackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionPackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageResponse", ""
            ) as AlternativeDistributionPackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppClipDefaultExperienceGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppClipDefaultExperienceGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppClipDefaultExperienceResponse >> {
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
            const body: AppClipDefaultExperienceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipDefaultExperienceResponse", ""
            ) as AppClipDefaultExperienceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppClipDefaultExperienceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipDefaultExperienceResponse", ""
            ) as AppClipDefaultExperienceResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppClipDefaultExperienceGetToOneRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppClipDefaultExperienceGetToOneRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionAppClipDefaultExperienceLinkageResponse >> {
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
            const body: AppStoreVersionAppClipDefaultExperienceLinkageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionAppClipDefaultExperienceLinkageResponse", ""
            ) as AppStoreVersionAppClipDefaultExperienceLinkageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionAppClipDefaultExperienceLinkageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionAppClipDefaultExperienceLinkageResponse", ""
            ) as AppStoreVersionAppClipDefaultExperienceLinkageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appStoreVersionsAppStoreReviewDetailGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppStoreReviewDetailGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreReviewDetailResponse >> {
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
            const body: AppStoreReviewDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreReviewDetailResponse", ""
            ) as AppStoreReviewDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreReviewDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreReviewDetailResponse", ""
            ) as AppStoreReviewDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppStoreVersionExperimentsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppStoreVersionExperimentsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentsResponse >> {
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
            const body: AppStoreVersionExperimentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentsResponse", ""
            ) as AppStoreVersionExperimentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionExperimentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentsResponse", ""
            ) as AppStoreVersionExperimentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentsV2Response >> {
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
     * @params response Response returned by the server for a request to appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppStoreVersionLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionLocalizationsResponse >> {
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
            const body: AppStoreVersionLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationsResponse", ""
            ) as AppStoreVersionLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationsResponse", ""
            ) as AppStoreVersionLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionPhasedReleaseWithoutIncludesResponse >> {
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
            const body: AppStoreVersionPhasedReleaseWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionPhasedReleaseWithoutIncludesResponse", ""
            ) as AppStoreVersionPhasedReleaseWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionPhasedReleaseWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionPhasedReleaseWithoutIncludesResponse", ""
            ) as AppStoreVersionPhasedReleaseWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsAppStoreVersionSubmissionGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsAppStoreVersionSubmissionGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionSubmissionResponse >> {
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
            const body: AppStoreVersionSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionSubmissionResponse", ""
            ) as AppStoreVersionSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionSubmissionResponse", ""
            ) as AppStoreVersionSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsBuildGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsBuildGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BuildWithoutIncludesResponse >> {
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
            const body: BuildWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildWithoutIncludesResponse", ""
            ) as BuildWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BuildWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuildWithoutIncludesResponse", ""
            ) as BuildWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsBuildGetToOneRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsBuildGetToOneRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionBuildLinkageResponse >> {
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
            const body: AppStoreVersionBuildLinkageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionBuildLinkageResponse", ""
            ) as AppStoreVersionBuildLinkageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionBuildLinkageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionBuildLinkageResponse", ""
            ) as AppStoreVersionBuildLinkageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsBuildUpdateToOneRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsBuildUpdateToOneRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appStoreVersionsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionResponse >> {
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
            const body: AppStoreVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionResponse", ""
            ) as AppStoreVersionResponse;
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
            const body: AppStoreVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionResponse", ""
            ) as AppStoreVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsCustomerReviewsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsCustomerReviewsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerReviewsResponse >> {
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
     * @params response Response returned by the server for a request to appStoreVersionsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appStoreVersionsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionResponse >> {
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
            const body: AppStoreVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionResponse", ""
            ) as AppStoreVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionResponse", ""
            ) as AppStoreVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsRoutingAppCoverageGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsRoutingAppCoverageGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RoutingAppCoverageWithoutIncludesResponse >> {
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
            const body: RoutingAppCoverageWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutingAppCoverageWithoutIncludesResponse", ""
            ) as RoutingAppCoverageWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RoutingAppCoverageWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RoutingAppCoverageWithoutIncludesResponse", ""
            ) as RoutingAppCoverageWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionResponse >> {
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
            const body: AppStoreVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionResponse", ""
            ) as AppStoreVersionResponse;
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
            const body: AppStoreVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionResponse", ""
            ) as AppStoreVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
