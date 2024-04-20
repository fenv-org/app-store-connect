// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { ReviewSubmissionCreateRequest } from '../models/ReviewSubmissionCreateRequest.ts';
import { ReviewSubmissionItemsResponse } from '../models/ReviewSubmissionItemsResponse.ts';
import { ReviewSubmissionResponse } from '../models/ReviewSubmissionResponse.ts';
import { ReviewSubmissionUpdateRequest } from '../models/ReviewSubmissionUpdateRequest.ts';
import { ReviewSubmissionsResponse } from '../models/ReviewSubmissionsResponse.ts';

/**
 * no description
 */
export class ReviewSubmissionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param reviewSubmissionCreateRequest ReviewSubmission representation
     */
    public async reviewSubmissionsCreateInstance(reviewSubmissionCreateRequest: ReviewSubmissionCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reviewSubmissionCreateRequest' is not null or undefined
        if (reviewSubmissionCreateRequest === null || reviewSubmissionCreateRequest === undefined) {
            throw new RequiredError("ReviewSubmissionsApi", "reviewSubmissionsCreateInstance", "reviewSubmissionCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/reviewSubmissions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reviewSubmissionCreateRequest, "ReviewSubmissionCreateRequest", ""),
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
     * @param filterApp filter by id(s) of related \&#39;app\&#39;
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param limitItems maximum number of related items returned (when they are included)
     */
    public async reviewSubmissionsGetCollection(filterApp: Array<string>, filterPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>, filterState?: Array<'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE'>, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>, limit?: number, include?: Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, limitItems?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterApp' is not null or undefined
        if (filterApp === null || filterApp === undefined) {
            throw new RequiredError("ReviewSubmissionsApi", "reviewSubmissionsGetCollection", "filterApp");
        }









        // Path Params
        const localVarPath = '/v1/reviewSubmissions';

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
        if (filterApp !== undefined) {
            requestContext.setQueryParam("filter[app]", ObjectSerializer.serialize(filterApp, "Array<string>", ""));
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
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissionItems !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissionItems]", ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>", ""));
        }

        // Query Params
        if (limitItems !== undefined) {
            requestContext.setQueryParam("limit[items]", ObjectSerializer.serialize(limitItems, "number", ""));
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
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param include comma-separated list of relationships to include
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param limitItems maximum number of related items returned (when they are included)
     */
    public async reviewSubmissionsGetInstance(id: string, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>, include?: Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, limitItems?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReviewSubmissionsApi", "reviewSubmissionsGetInstance", "id");
        }






        // Path Params
        const localVarPath = '/v1/reviewSubmissions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsReviewSubmissions !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissions]", ObjectSerializer.serialize(fieldsReviewSubmissions, "Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissionItems !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissionItems]", ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>", ""));
        }

        // Query Params
        if (limitItems !== undefined) {
            requestContext.setQueryParam("limit[items]", ObjectSerializer.serialize(limitItems, "number", ""));
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
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppCustomProductPageVersions the fields to include for returned resources of type appCustomProductPageVersions
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async reviewSubmissionsItemsGetToManyRelated(id: string, fieldsAppStoreVersionExperiments?: Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppCustomProductPageVersions?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, limit?: number, include?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReviewSubmissionsApi", "reviewSubmissionsItemsGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/reviewSubmissions/{id}/items'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreVersionExperiments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperiments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>", ""));
        }

        // Query Params
        if (fieldsReviewSubmissionItems !== undefined) {
            requestContext.setQueryParam("fields[reviewSubmissionItems]", ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPageVersions !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPageVersions]", ObjectSerializer.serialize(fieldsAppCustomProductPageVersions, "Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>", ""));
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
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2'>", ""));
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
     * @param reviewSubmissionUpdateRequest ReviewSubmission representation
     */
    public async reviewSubmissionsUpdateInstance(id: string, reviewSubmissionUpdateRequest: ReviewSubmissionUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReviewSubmissionsApi", "reviewSubmissionsUpdateInstance", "id");
        }


        // verify required parameter 'reviewSubmissionUpdateRequest' is not null or undefined
        if (reviewSubmissionUpdateRequest === null || reviewSubmissionUpdateRequest === undefined) {
            throw new RequiredError("ReviewSubmissionsApi", "reviewSubmissionsUpdateInstance", "reviewSubmissionUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/reviewSubmissions/{id}'
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
            ObjectSerializer.serialize(reviewSubmissionUpdateRequest, "ReviewSubmissionUpdateRequest", ""),
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

export class ReviewSubmissionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reviewSubmissionsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reviewSubmissionsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReviewSubmissionResponse >> {
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
            const body: ReviewSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionResponse", ""
            ) as ReviewSubmissionResponse;
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
            const body: ReviewSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionResponse", ""
            ) as ReviewSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reviewSubmissionsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reviewSubmissionsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReviewSubmissionsResponse >> {
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
     * @params response Response returned by the server for a request to reviewSubmissionsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reviewSubmissionsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReviewSubmissionResponse >> {
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
            const body: ReviewSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionResponse", ""
            ) as ReviewSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReviewSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionResponse", ""
            ) as ReviewSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reviewSubmissionsItemsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reviewSubmissionsItemsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReviewSubmissionItemsResponse >> {
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
            const body: ReviewSubmissionItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionItemsResponse", ""
            ) as ReviewSubmissionItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReviewSubmissionItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionItemsResponse", ""
            ) as ReviewSubmissionItemsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reviewSubmissionsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reviewSubmissionsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReviewSubmissionResponse >> {
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
            const body: ReviewSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionResponse", ""
            ) as ReviewSubmissionResponse;
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
            const body: ReviewSubmissionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReviewSubmissionResponse", ""
            ) as ReviewSubmissionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
