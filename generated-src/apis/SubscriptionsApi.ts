// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { PromotedPurchaseResponse } from '../models/PromotedPurchaseResponse.ts';
import { SubscriptionAppStoreReviewScreenshotResponse } from '../models/SubscriptionAppStoreReviewScreenshotResponse.ts';
import { SubscriptionAvailabilityResponse } from '../models/SubscriptionAvailabilityResponse.ts';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest.ts';
import { SubscriptionIntroductoryOffersLinkagesRequest } from '../models/SubscriptionIntroductoryOffersLinkagesRequest.ts';
import { SubscriptionIntroductoryOffersLinkagesResponse } from '../models/SubscriptionIntroductoryOffersLinkagesResponse.ts';
import { SubscriptionIntroductoryOffersResponse } from '../models/SubscriptionIntroductoryOffersResponse.ts';
import { SubscriptionLocalizationsResponse } from '../models/SubscriptionLocalizationsResponse.ts';
import { SubscriptionOfferCodesResponse } from '../models/SubscriptionOfferCodesResponse.ts';
import { SubscriptionPricePointsResponse } from '../models/SubscriptionPricePointsResponse.ts';
import { SubscriptionPricesLinkagesRequest } from '../models/SubscriptionPricesLinkagesRequest.ts';
import { SubscriptionPricesLinkagesResponse } from '../models/SubscriptionPricesLinkagesResponse.ts';
import { SubscriptionPricesResponse } from '../models/SubscriptionPricesResponse.ts';
import { SubscriptionPromotionalOffersResponse } from '../models/SubscriptionPromotionalOffersResponse.ts';
import { SubscriptionResponse } from '../models/SubscriptionResponse.ts';
import { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest.ts';

/**
 * no description
 */
export class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsSubscriptionAppStoreReviewScreenshots the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsAppStoreReviewScreenshotGetToOneRelated(id: string, fieldsSubscriptionAppStoreReviewScreenshots?: Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, include?: Array<'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsAppStoreReviewScreenshotGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/appStoreReviewScreenshot'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionAppStoreReviewScreenshots !== undefined) {
            requestContext.setQueryParam("fields[subscriptionAppStoreReviewScreenshots]", ObjectSerializer.serialize(fieldsSubscriptionAppStoreReviewScreenshots, "Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscription'>", ""));
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
     * @param subscriptionCreateRequest Subscription representation
     */
    public async subscriptionsCreateInstance(subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionCreateRequest' is not null or undefined
        if (subscriptionCreateRequest === null || subscriptionCreateRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsCreateInstance", "subscriptionCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionCreateRequest, "SubscriptionCreateRequest", ""),
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
    public async subscriptionsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/subscriptions/{id}'
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
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param include comma-separated list of relationships to include
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsSubscriptionPricePoints the fields to include for returned resources of type subscriptionPricePoints
     * @param fieldsSubscriptionPromotionalOffers the fields to include for returned resources of type subscriptionPromotionalOffers
     * @param fieldsSubscriptionOfferCodes the fields to include for returned resources of type subscriptionOfferCodes
     * @param fieldsSubscriptionAppStoreReviewScreenshots the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
     * @param fieldsSubscriptionAvailabilities the fields to include for returned resources of type subscriptionAvailabilities
     * @param fieldsSubscriptionPrices the fields to include for returned resources of type subscriptionPrices
     * @param fieldsSubscriptionIntroductoryOffers the fields to include for returned resources of type subscriptionIntroductoryOffers
     * @param fieldsSubscriptionLocalizations the fields to include for returned resources of type subscriptionLocalizations
     * @param limitIntroductoryOffers maximum number of related introductoryOffers returned (when they are included)
     * @param limitOfferCodes maximum number of related offerCodes returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param limitPromotionalOffers maximum number of related promotionalOffers returned (when they are included)
     * @param limitSubscriptionLocalizations maximum number of related subscriptionLocalizations returned (when they are included)
     */
    public async subscriptionsGetInstance(id: string, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, include?: Array<'appStoreReviewScreenshot' | 'group' | 'introductoryOffers' | 'offerCodes' | 'prices' | 'promotedPurchase' | 'promotionalOffers' | 'subscriptionAvailability' | 'subscriptionLocalizations'>, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsSubscriptionPricePoints?: Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>, fieldsSubscriptionPromotionalOffers?: Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'>, fieldsSubscriptionOfferCodes?: Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>, fieldsSubscriptionAppStoreReviewScreenshots?: Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'>, fieldsSubscriptionAvailabilities?: Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'>, fieldsSubscriptionPrices?: Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>, fieldsSubscriptionIntroductoryOffers?: Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>, fieldsSubscriptionLocalizations?: Array<'description' | 'locale' | 'name' | 'state' | 'subscription'>, limitIntroductoryOffers?: number, limitOfferCodes?: number, limitPrices?: number, limitPromotionalOffers?: number, limitSubscriptionLocalizations?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsGetInstance", "id");
        }


















        // Path Params
        const localVarPath = '/v1/subscriptions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreReviewScreenshot' | 'group' | 'introductoryOffers' | 'offerCodes' | 'prices' | 'promotedPurchase' | 'promotionalOffers' | 'subscriptionAvailability' | 'subscriptionLocalizations'>", ""));
        }

        // Query Params
        if (fieldsPromotedPurchases !== undefined) {
            requestContext.setQueryParam("fields[promotedPurchases]", ObjectSerializer.serialize(fieldsPromotedPurchases, "Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPricePoints !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPricePoints]", ObjectSerializer.serialize(fieldsSubscriptionPricePoints, "Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>", ""));
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
        if (fieldsSubscriptionAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[subscriptionAvailabilities]", ObjectSerializer.serialize(fieldsSubscriptionAvailabilities, "Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPrices]", ObjectSerializer.serialize(fieldsSubscriptionPrices, "Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionIntroductoryOffers !== undefined) {
            requestContext.setQueryParam("fields[subscriptionIntroductoryOffers]", ObjectSerializer.serialize(fieldsSubscriptionIntroductoryOffers, "Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[subscriptionLocalizations]", ObjectSerializer.serialize(fieldsSubscriptionLocalizations, "Array<'description' | 'locale' | 'name' | 'state' | 'subscription'>", ""));
        }

        // Query Params
        if (limitIntroductoryOffers !== undefined) {
            requestContext.setQueryParam("limit[introductoryOffers]", ObjectSerializer.serialize(limitIntroductoryOffers, "number", ""));
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
        if (limitPromotionalOffers !== undefined) {
            requestContext.setQueryParam("limit[promotionalOffers]", ObjectSerializer.serialize(limitPromotionalOffers, "number", ""));
        }

        // Query Params
        if (limitSubscriptionLocalizations !== undefined) {
            requestContext.setQueryParam("limit[subscriptionLocalizations]", ObjectSerializer.serialize(limitSubscriptionLocalizations, "number", ""));
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
     * @param subscriptionIntroductoryOffersLinkagesRequest List of related linkages
     */
    public async subscriptionsIntroductoryOffersDeleteToManyRelationship(id: string, subscriptionIntroductoryOffersLinkagesRequest: SubscriptionIntroductoryOffersLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsIntroductoryOffersDeleteToManyRelationship", "id");
        }


        // verify required parameter 'subscriptionIntroductoryOffersLinkagesRequest' is not null or undefined
        if (subscriptionIntroductoryOffersLinkagesRequest === null || subscriptionIntroductoryOffersLinkagesRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsIntroductoryOffersDeleteToManyRelationship", "subscriptionIntroductoryOffersLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/relationships/introductoryOffers'
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
            ObjectSerializer.serialize(subscriptionIntroductoryOffersLinkagesRequest, "SubscriptionIntroductoryOffersLinkagesRequest", ""),
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
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsSubscriptionPricePoints the fields to include for returned resources of type subscriptionPricePoints
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionIntroductoryOffers the fields to include for returned resources of type subscriptionIntroductoryOffers
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsIntroductoryOffersGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsSubscriptionPricePoints?: Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionIntroductoryOffers?: Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'subscription' | 'subscriptionPricePoint' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsIntroductoryOffersGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/introductoryOffers'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPricePoints !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPricePoints]", ObjectSerializer.serialize(fieldsSubscriptionPricePoints, "Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionIntroductoryOffers !== undefined) {
            requestContext.setQueryParam("fields[subscriptionIntroductoryOffers]", ObjectSerializer.serialize(fieldsSubscriptionIntroductoryOffers, "Array<'duration' | 'endDate' | 'numberOfPeriods' | 'offerMode' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
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
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
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
    public async subscriptionsIntroductoryOffersGetToManyRelationship(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsIntroductoryOffersGetToManyRelationship", "id");
        }



        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/relationships/introductoryOffers'
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
     * @param filterTerritory filter by territory
     * @param fieldsSubscriptionOfferCodeCustomCodes the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
     * @param fieldsSubscriptionOfferCodes the fields to include for returned resources of type subscriptionOfferCodes
     * @param fieldsSubscriptionOfferCodeOneTimeUseCodes the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionOfferCodePrices the fields to include for returned resources of type subscriptionOfferCodePrices
     * @param limit maximum resources per page
     * @param limitOneTimeUseCodes maximum number of related oneTimeUseCodes returned (when they are included)
     * @param limitCustomCodes maximum number of related customCodes returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsOfferCodesGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsSubscriptionOfferCodeCustomCodes?: Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>, fieldsSubscriptionOfferCodes?: Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>, fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionOfferCodePrices?: Array<'subscriptionPricePoint' | 'territory'>, limit?: number, limitOneTimeUseCodes?: number, limitCustomCodes?: number, limitPrices?: number, include?: Array<'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsOfferCodesGetToManyRelated", "id");
        }













        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/offerCodes'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodeCustomCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeCustomCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeCustomCodes, "Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodes, "Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodeOneTimeUseCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeOneTimeUseCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeOneTimeUseCodes, "Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodePrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodePrices]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodePrices, "Array<'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitOneTimeUseCodes !== undefined) {
            requestContext.setQueryParam("limit[oneTimeUseCodes]", ObjectSerializer.serialize(limitOneTimeUseCodes, "number", ""));
        }

        // Query Params
        if (limitCustomCodes !== undefined) {
            requestContext.setQueryParam("limit[customCodes]", ObjectSerializer.serialize(limitCustomCodes, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription'>", ""));
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
     * @param fieldsSubscriptionPricePoints the fields to include for returned resources of type subscriptionPricePoints
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsPricePointsGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsSubscriptionPricePoints?: Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPricePointsGetToManyRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/pricePoints'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPricePoints !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPricePoints]", ObjectSerializer.serialize(fieldsSubscriptionPricePoints, "Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>", ""));
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
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'territory'>", ""));
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
     * @param subscriptionPricesLinkagesRequest List of related linkages
     */
    public async subscriptionsPricesDeleteToManyRelationship(id: string, subscriptionPricesLinkagesRequest: SubscriptionPricesLinkagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPricesDeleteToManyRelationship", "id");
        }


        // verify required parameter 'subscriptionPricesLinkagesRequest' is not null or undefined
        if (subscriptionPricesLinkagesRequest === null || subscriptionPricesLinkagesRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPricesDeleteToManyRelationship", "subscriptionPricesLinkagesRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/relationships/prices'
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
            ObjectSerializer.serialize(subscriptionPricesLinkagesRequest, "SubscriptionPricesLinkagesRequest", ""),
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
     * @param filterSubscriptionPricePoint filter by id(s) of related \&#39;subscriptionPricePoint\&#39;
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsSubscriptionPricePoints the fields to include for returned resources of type subscriptionPricePoints
     * @param fieldsSubscriptionPrices the fields to include for returned resources of type subscriptionPrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsPricesGetToManyRelated(id: string, filterSubscriptionPricePoint?: Array<string>, filterTerritory?: Array<string>, fieldsSubscriptionPricePoints?: Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>, fieldsSubscriptionPrices?: Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'subscriptionPricePoint' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPricesGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/prices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterSubscriptionPricePoint !== undefined) {
            requestContext.setQueryParam("filter[subscriptionPricePoint]", ObjectSerializer.serialize(filterSubscriptionPricePoint, "Array<string>", ""));
        }

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPricePoints !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPricePoints]", ObjectSerializer.serialize(fieldsSubscriptionPricePoints, "Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPrices]", ObjectSerializer.serialize(fieldsSubscriptionPrices, "Array<'preserveCurrentPrice' | 'preserved' | 'startDate' | 'subscription' | 'subscriptionPricePoint' | 'territory'>", ""));
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
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscriptionPricePoint' | 'territory'>", ""));
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
    public async subscriptionsPricesGetToManyRelationship(id: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPricesGetToManyRelationship", "id");
        }



        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/relationships/prices'
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
     * @param fieldsPromotedPurchases the fields to include for returned resources of type promotedPurchases
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsInAppPurchases the fields to include for returned resources of type inAppPurchases
     * @param fieldsPromotedPurchaseImages the fields to include for returned resources of type promotedPurchaseImages
     * @param limitPromotionImages maximum number of related promotionImages returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsPromotedPurchaseGetToOneRelated(id: string, fieldsPromotedPurchases?: Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsInAppPurchases?: Array<'app' | 'appStoreReviewScreenshot' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'reviewNote' | 'state'>, fieldsPromotedPurchaseImages?: Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'>, limitPromotionImages?: number, include?: Array<'inAppPurchaseV2' | 'promotionImages' | 'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPromotedPurchaseGetToOneRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/promotedPurchase'
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
     * @param filterTerritory filter by territory
     * @param fieldsSubscriptionPromotionalOffers the fields to include for returned resources of type subscriptionPromotionalOffers
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionPromotionalOfferPrices the fields to include for returned resources of type subscriptionPromotionalOfferPrices
     * @param limit maximum resources per page
     * @param limitPrices maximum number of related prices returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsPromotionalOffersGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsSubscriptionPromotionalOffers?: Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionPromotionalOfferPrices?: Array<'subscriptionPricePoint' | 'territory'>, limit?: number, limitPrices?: number, include?: Array<'prices' | 'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsPromotionalOffersGetToManyRelated", "id");
        }









        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/promotionalOffers'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPromotionalOffers !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPromotionalOffers]", ObjectSerializer.serialize(fieldsSubscriptionPromotionalOffers, "Array<'duration' | 'name' | 'numberOfPeriods' | 'offerCode' | 'offerMode' | 'prices' | 'subscription'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPromotionalOfferPrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPromotionalOfferPrices]", ObjectSerializer.serialize(fieldsSubscriptionPromotionalOfferPrices, "Array<'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'prices' | 'subscription'>", ""));
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
     * @param fieldsSubscriptionAvailabilities the fields to include for returned resources of type subscriptionAvailabilities
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limitAvailableTerritories maximum number of related availableTerritories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsSubscriptionAvailabilityGetToOneRelated(id: string, fieldsSubscriptionAvailabilities?: Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'>, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsTerritories?: Array<'currency'>, limitAvailableTerritories?: number, include?: Array<'availableTerritories' | 'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsSubscriptionAvailabilityGetToOneRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/subscriptionAvailability'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionAvailabilities !== undefined) {
            requestContext.setQueryParam("fields[subscriptionAvailabilities]", ObjectSerializer.serialize(fieldsSubscriptionAvailabilities, "Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'>", ""));
        }

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
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
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'availableTerritories' | 'subscription'>", ""));
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
     * @param fieldsSubscriptions the fields to include for returned resources of type subscriptions
     * @param fieldsSubscriptionLocalizations the fields to include for returned resources of type subscriptionLocalizations
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionsSubscriptionLocalizationsGetToManyRelated(id: string, fieldsSubscriptions?: Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>, fieldsSubscriptionLocalizations?: Array<'description' | 'locale' | 'name' | 'state' | 'subscription'>, limit?: number, include?: Array<'subscription'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsSubscriptionLocalizationsGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/subscriptions/{id}/subscriptionLocalizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptions !== undefined) {
            requestContext.setQueryParam("fields[subscriptions]", ObjectSerializer.serialize(fieldsSubscriptions, "Array<'appStoreReviewScreenshot' | 'familySharable' | 'group' | 'groupLevel' | 'introductoryOffers' | 'name' | 'offerCodes' | 'pricePoints' | 'prices' | 'productId' | 'promotedPurchase' | 'promotionalOffers' | 'reviewNote' | 'state' | 'subscriptionAvailability' | 'subscriptionLocalizations' | 'subscriptionPeriod'>", ""));
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
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscription'>", ""));
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
     * @param subscriptionUpdateRequest Subscription representation
     */
    public async subscriptionsUpdateInstance(id: string, subscriptionUpdateRequest: SubscriptionUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsUpdateInstance", "id");
        }


        // verify required parameter 'subscriptionUpdateRequest' is not null or undefined
        if (subscriptionUpdateRequest === null || subscriptionUpdateRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "subscriptionsUpdateInstance", "subscriptionUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptions/{id}'
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
            ObjectSerializer.serialize(subscriptionUpdateRequest, "SubscriptionUpdateRequest", ""),
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

export class SubscriptionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsAppStoreReviewScreenshotGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsAppStoreReviewScreenshotGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionAppStoreReviewScreenshotResponse >> {
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
            const body: SubscriptionAppStoreReviewScreenshotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionAppStoreReviewScreenshotResponse", ""
            ) as SubscriptionAppStoreReviewScreenshotResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionAppStoreReviewScreenshotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionAppStoreReviewScreenshotResponse", ""
            ) as SubscriptionAppStoreReviewScreenshotResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionResponse >> {
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
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
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
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to subscriptionsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionResponse >> {
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
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsIntroductoryOffersDeleteToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsIntroductoryOffersDeleteToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to subscriptionsIntroductoryOffersGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsIntroductoryOffersGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionIntroductoryOffersResponse >> {
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
            const body: SubscriptionIntroductoryOffersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionIntroductoryOffersResponse", ""
            ) as SubscriptionIntroductoryOffersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionIntroductoryOffersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionIntroductoryOffersResponse", ""
            ) as SubscriptionIntroductoryOffersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsIntroductoryOffersGetToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsIntroductoryOffersGetToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionIntroductoryOffersLinkagesResponse >> {
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
            const body: SubscriptionIntroductoryOffersLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionIntroductoryOffersLinkagesResponse", ""
            ) as SubscriptionIntroductoryOffersLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionIntroductoryOffersLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionIntroductoryOffersLinkagesResponse", ""
            ) as SubscriptionIntroductoryOffersLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsOfferCodesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsOfferCodesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodesResponse >> {
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
            const body: SubscriptionOfferCodesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodesResponse", ""
            ) as SubscriptionOfferCodesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionOfferCodesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodesResponse", ""
            ) as SubscriptionOfferCodesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsPricePointsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsPricePointsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionPricePointsResponse >> {
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
            const body: SubscriptionPricePointsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPricePointsResponse", ""
            ) as SubscriptionPricePointsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionPricePointsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPricePointsResponse", ""
            ) as SubscriptionPricePointsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsPricesDeleteToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsPricesDeleteToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to subscriptionsPricesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsPricesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionPricesResponse >> {
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
            const body: SubscriptionPricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPricesResponse", ""
            ) as SubscriptionPricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionPricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPricesResponse", ""
            ) as SubscriptionPricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsPricesGetToManyRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsPricesGetToManyRelationshipWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionPricesLinkagesResponse >> {
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
            const body: SubscriptionPricesLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPricesLinkagesResponse", ""
            ) as SubscriptionPricesLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionPricesLinkagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPricesLinkagesResponse", ""
            ) as SubscriptionPricesLinkagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsPromotedPurchaseGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsPromotedPurchaseGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PromotedPurchaseResponse >> {
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
            const body: PromotedPurchaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PromotedPurchaseResponse", ""
            ) as PromotedPurchaseResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PromotedPurchaseResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PromotedPurchaseResponse", ""
            ) as PromotedPurchaseResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsPromotionalOffersGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsPromotionalOffersGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionPromotionalOffersResponse >> {
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
            const body: SubscriptionPromotionalOffersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPromotionalOffersResponse", ""
            ) as SubscriptionPromotionalOffersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionPromotionalOffersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionPromotionalOffersResponse", ""
            ) as SubscriptionPromotionalOffersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsSubscriptionAvailabilityGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsSubscriptionAvailabilityGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionAvailabilityResponse >> {
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
            const body: SubscriptionAvailabilityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionAvailabilityResponse", ""
            ) as SubscriptionAvailabilityResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionAvailabilityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionAvailabilityResponse", ""
            ) as SubscriptionAvailabilityResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsSubscriptionLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsSubscriptionLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionLocalizationsResponse >> {
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
            const body: SubscriptionLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionLocalizationsResponse", ""
            ) as SubscriptionLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionLocalizationsResponse", ""
            ) as SubscriptionLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionResponse >> {
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
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
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
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
