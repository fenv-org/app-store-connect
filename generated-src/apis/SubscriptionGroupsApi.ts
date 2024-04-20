// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { SubscriptionGroupCreateRequest } from '../models/SubscriptionGroupCreateRequest.ts';
import { SubscriptionGroupLocalizationsResponse } from '../models/SubscriptionGroupLocalizationsResponse.ts';
import { SubscriptionGroupResponse } from '../models/SubscriptionGroupResponse.ts';
import { SubscriptionGroupUpdateRequest } from '../models/SubscriptionGroupUpdateRequest.ts';
import { SubscriptionsResponse } from '../models/SubscriptionsResponse.ts';

/**
 * no description
 */
export class SubscriptionGroupsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param subscriptionGroupCreateRequest SubscriptionGroup representation
     */
    public async subscriptionGroupsCreateInstance(subscriptionGroupCreateRequest: SubscriptionGroupCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionGroupCreateRequest' is not null or undefined
        if (subscriptionGroupCreateRequest === null || subscriptionGroupCreateRequest === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsCreateInstance", "subscriptionGroupCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionGroups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionGroupCreateRequest, "SubscriptionGroupCreateRequest", ""),
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
    public async subscriptionGroupsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionGroups/{id}'
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
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param include comma-separated list of relationships to include
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionGroupLocalizations the fields to include for returned resources of type subscriptionGroupLocalizations
     * @param limitSubscriptionGroupLocalizations maximum number of related subscriptionGroupLocalizations returned (when they are included)
     * @param limitSubscriptions maximum number of related subscriptions returned (when they are included)
     */
    public async subscriptionGroupsGetInstance(id: string, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, include?: Array<'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionGroupLocalizations?: Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'>, limitSubscriptionGroupLocalizations?: number, limitSubscriptions?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsGetInstance", "id");
        }








        // Path Params
        const localVarPath = '/v1/subscriptionGroups/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroups]", ObjectSerializer.serialize(fieldsSubscriptionGroups, "Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroupLocalizations !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroupLocalizations]", ObjectSerializer.serialize(fieldsSubscriptionGroupLocalizations, "Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'>", ""));
        }

        // Query Params
        if (limitSubscriptionGroupLocalizations !== undefined) {
            requestContext.setQueryParam("limit[subscriptionGroupLocalizations]", ObjectSerializer.serialize(limitSubscriptionGroupLocalizations, "number", ""));
        }

        // Query Params
        if (limitSubscriptions !== undefined) {
            requestContext.setQueryParam("limit[subscriptions]", ObjectSerializer.serialize(limitSubscriptions, "number", ""));
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
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param fieldsSubscriptionGroupLocalizations the fields to include for returned resources of type subscriptionGroupLocalizations
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(id: string, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsSubscriptionGroupLocalizations?: Array<'customAppName' | 'locale' | 'name' | 'state' | 'subscriptionGroup'>, limit?: number, include?: Array<'subscriptionGroup'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/subscriptionGroups/{id}/subscriptionGroupLocalizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscriptionGroup'>", ""));
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
     * @param filterName filter by attribute \&#39;name\&#39;
     * @param filterProductId filter by attribute \&#39;productId\&#39;
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsSubscriptionPromotionalOffers the fields to include for returned resources of type subscriptionPromotionalOffers
     * @param fieldsSubscriptionOfferCodes the fields to include for returned resources of type subscriptionOfferCodes
     * @param fieldsSubscriptionAppStoreReviewScreenshots the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionAvailabilities the fields to include for returned resources of type subscriptionAvailabilities
     * @param fieldsSubscriptionGroups the fields to include for returned resources of type subscriptionGroups
     * @param fieldsSubscriptionIntroductoryOffers the fields to include for returned resources of type subscriptionIntroductoryOffers
     * @param fieldsSubscriptionPrices the fields to include for returned resources of type subscriptionPrices
     * @param fieldsSubscriptionLocalizations the fields to include for returned resources of type subscriptionLocalizations
     * @param limit maximum resources per page
     * @param limitSubscriptionLocalizations maximum number of related subscriptionLocalizations returned (when they are included)
     * @param limitIntroductoryOffers maximum number of related introductoryOffers returned (when they are included)
     * @param limitPromotionalOffers maximum number of related promotionalOffers returned (when they are included)
     * @param limitOfferCodes maximum number of related offerCodes returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionGroupsSubscriptionsGetToManyRelated(id: string, filterName?: Array<string>, filterProductId?: Array<string>, filterState?: Array<'MISSING_METADATA' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'>, sort?: Array<'name' | '-name'>, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsSubscriptionPromotionalOffers?: Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'>, fieldsSubscriptionOfferCodes?: Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>, fieldsSubscriptionAppStoreReviewScreenshots?: Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionAvailabilities?: Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'>, fieldsSubscriptionGroups?: Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>, fieldsSubscriptionIntroductoryOffers?: Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>, fieldsSubscriptionPrices?: Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>, fieldsSubscriptionLocalizations?: Array<'description' | 'locale' | 'name' | 'state' | 'subscription'>, limit?: number, limitSubscriptionLocalizations?: number, limitIntroductoryOffers?: number, limitPromotionalOffers?: number, limitOfferCodes?: number, limitPrices?: number, include?: Array<'appStoreReviewScreenshot' | 'group' | 'introductoryOffers' | 'offerCodes' | 'prices' | 'promotedPurchase' | 'promotionalOffers' | 'subscriptionAvailability' | 'subscriptionLocalizations'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsSubscriptionsGetToManyRelated", "id");
        }























        // Path Params
        const localVarPath = '/v1/subscriptionGroups/{id}/subscriptions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
            requestContext.setQueryParam("filter[state]", ObjectSerializer.serialize(filterState, "Array<'MISSING_METADATA' | 'READY_TO_SUBMIT' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'DEVELOPER_ACTION_NEEDED' | 'PENDING_BINARY_APPROVAL' | 'APPROVED' | 'DEVELOPER_REMOVED_FROM_SALE' | 'REMOVED_FROM_SALE' | 'REJECTED'>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'name' | '-name'>", ""));
        }

        // Query Params
        if (fieldsPromotedPurchases !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchases]", ObjectSerializer.serialize(fieldsPromotedPurchases, "Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPromotionalOffers !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPromotionalOffers]", ObjectSerializer.serialize(fieldsSubscriptionPromotionalOffers, "Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodes, "Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionAppStoreReviewScreenshots !== undefined) {
            requestContext.setQueryParam("fields[subscriptionAppStoreReviewScreenshots]", ObjectSerializer.serialize(fieldsSubscriptionAppStoreReviewScreenshots, "Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[subscriptionAvailabilities]", ObjectSerializer.serialize(fieldsSubscriptionAvailabilities, "Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionGroups !== undefined) {
            requestContext.setQueryParam("fields[subscriptionGroups]", ObjectSerializer.serialize(fieldsSubscriptionGroups, "Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionIntroductoryOffers !== undefined) {
            requestContext.setQueryParam("fields[subscriptionIntroductoryOffers]", ObjectSerializer.serialize(fieldsSubscriptionIntroductoryOffers, "Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPrices]", ObjectSerializer.serialize(fieldsSubscriptionPrices, "Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[subscriptionLocalizations]", ObjectSerializer.serialize(fieldsSubscriptionLocalizations, "Array<'description' | 'locale' | 'name' | 'state' | 'subscription'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitSubscriptionLocalizations !== undefined) {
            requestContext.setQueryParam("limit[subscriptionLocalizations]", ObjectSerializer.serialize(limitSubscriptionLocalizations, "number", ""));
        }

        // Query Params
        if (limitIntroductoryOffers !== undefined) {
            requestContext.setQueryParam("limit[introductoryOffers]", ObjectSerializer.serialize(limitIntroductoryOffers, "number", ""));
        }

        // Query Params
        if (limitPromotionalOffers !== undefined) {
            requestContext.setQueryParam("limit[promotionalOffers]", ObjectSerializer.serialize(limitPromotionalOffers, "number", ""));
        }

        // Query Params
        if (limitOfferCodes !== undefined) {
            requestContext.setQueryParam("limit[offerCodes]", ObjectSerializer.serialize(limitOfferCodes, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreReviewScreenshot' | 'group' | 'introductoryOffers' | 'offerCodes' | 'prices' | 'promotedPurchase' | 'promotionalOffers' | 'subscriptionAvailability' | 'subscriptionLocalizations'>", ""));
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
     * @param subscriptionGroupUpdateRequest SubscriptionGroup representation
     */
    public async subscriptionGroupsUpdateInstance(id: string, subscriptionGroupUpdateRequest: SubscriptionGroupUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsUpdateInstance", "id");
        }


        // verify required parameter 'subscriptionGroupUpdateRequest' is not null or undefined
        if (subscriptionGroupUpdateRequest === null || subscriptionGroupUpdateRequest === undefined) {
            throw new RequiredError("SubscriptionGroupsApi", "subscriptionGroupsUpdateInstance", "subscriptionGroupUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionGroups/{id}'
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
            ObjectSerializer.serialize(subscriptionGroupUpdateRequest, "SubscriptionGroupUpdateRequest", ""),
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

export class SubscriptionGroupsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionGroupsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionGroupsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionGroupResponse >> {
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
            const body: SubscriptionGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupResponse", ""
            ) as SubscriptionGroupResponse;
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
            const body: SubscriptionGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupResponse", ""
            ) as SubscriptionGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionGroupsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionGroupsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to subscriptionGroupsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionGroupsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionGroupResponse >> {
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
            const body: SubscriptionGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupResponse", ""
            ) as SubscriptionGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupResponse", ""
            ) as SubscriptionGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionGroupLocalizationsResponse >> {
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
            const body: SubscriptionGroupLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupLocalizationsResponse", ""
            ) as SubscriptionGroupLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionGroupLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupLocalizationsResponse", ""
            ) as SubscriptionGroupLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionGroupsSubscriptionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionGroupsSubscriptionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionsResponse >> {
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
            const body: SubscriptionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionsResponse", ""
            ) as SubscriptionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionsResponse", ""
            ) as SubscriptionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionGroupsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionGroupsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionGroupResponse >> {
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
            const body: SubscriptionGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupResponse", ""
            ) as SubscriptionGroupResponse;
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
            const body: SubscriptionGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionGroupResponse", ""
            ) as SubscriptionGroupResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
