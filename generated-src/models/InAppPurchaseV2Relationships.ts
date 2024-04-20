/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 3.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InAppPurchaseV2RelationshipsAppStoreReviewScreenshot } from '../models/InAppPurchaseV2RelationshipsAppStoreReviewScreenshot.ts';
import { InAppPurchaseV2RelationshipsContent } from '../models/InAppPurchaseV2RelationshipsContent.ts';
import { InAppPurchaseV2RelationshipsIapPriceSchedule } from '../models/InAppPurchaseV2RelationshipsIapPriceSchedule.ts';
import { InAppPurchaseV2RelationshipsInAppPurchaseAvailability } from '../models/InAppPurchaseV2RelationshipsInAppPurchaseAvailability.ts';
import { InAppPurchaseV2RelationshipsInAppPurchaseLocalizations } from '../models/InAppPurchaseV2RelationshipsInAppPurchaseLocalizations.ts';
import { InAppPurchaseV2RelationshipsPricePoints } from '../models/InAppPurchaseV2RelationshipsPricePoints.ts';
import { InAppPurchaseV2RelationshipsPromotedPurchase } from '../models/InAppPurchaseV2RelationshipsPromotedPurchase.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchaseV2Relationships {
    'inAppPurchaseLocalizations'?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizations;
    'pricePoints'?: InAppPurchaseV2RelationshipsPricePoints;
    'content'?: InAppPurchaseV2RelationshipsContent;
    'appStoreReviewScreenshot'?: InAppPurchaseV2RelationshipsAppStoreReviewScreenshot;
    'promotedPurchase'?: InAppPurchaseV2RelationshipsPromotedPurchase;
    'iapPriceSchedule'?: InAppPurchaseV2RelationshipsIapPriceSchedule;
    'inAppPurchaseAvailability'?: InAppPurchaseV2RelationshipsInAppPurchaseAvailability;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inAppPurchaseLocalizations",
            "baseName": "inAppPurchaseLocalizations",
            "type": "InAppPurchaseV2RelationshipsInAppPurchaseLocalizations",
            "format": ""
        },
        {
            "name": "pricePoints",
            "baseName": "pricePoints",
            "type": "InAppPurchaseV2RelationshipsPricePoints",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "InAppPurchaseV2RelationshipsContent",
            "format": ""
        },
        {
            "name": "appStoreReviewScreenshot",
            "baseName": "appStoreReviewScreenshot",
            "type": "InAppPurchaseV2RelationshipsAppStoreReviewScreenshot",
            "format": ""
        },
        {
            "name": "promotedPurchase",
            "baseName": "promotedPurchase",
            "type": "InAppPurchaseV2RelationshipsPromotedPurchase",
            "format": ""
        },
        {
            "name": "iapPriceSchedule",
            "baseName": "iapPriceSchedule",
            "type": "InAppPurchaseV2RelationshipsIapPriceSchedule",
            "format": ""
        },
        {
            "name": "inAppPurchaseAvailability",
            "baseName": "inAppPurchaseAvailability",
            "type": "InAppPurchaseV2RelationshipsInAppPurchaseAvailability",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseV2Relationships.attributeTypeMap;
    }

    public constructor() {
    }
}
