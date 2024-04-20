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

import { AppRelationshipsAppClips } from '../models/AppRelationshipsAppClips.ts';
import { AppRelationshipsAppCustomProductPages } from '../models/AppRelationshipsAppCustomProductPages.ts';
import { AppRelationshipsAppEncryptionDeclarations } from '../models/AppRelationshipsAppEncryptionDeclarations.ts';
import { AppRelationshipsAppEvents } from '../models/AppRelationshipsAppEvents.ts';
import { AppRelationshipsAppInfos } from '../models/AppRelationshipsAppInfos.ts';
import { AppRelationshipsAvailableTerritories } from '../models/AppRelationshipsAvailableTerritories.ts';
import { AppRelationshipsBetaAppLocalizations } from '../models/AppRelationshipsBetaAppLocalizations.ts';
import { AppRelationshipsBetaAppReviewDetail } from '../models/AppRelationshipsBetaAppReviewDetail.ts';
import { AppRelationshipsBetaGroups } from '../models/AppRelationshipsBetaGroups.ts';
import { AppRelationshipsBetaLicenseAgreement } from '../models/AppRelationshipsBetaLicenseAgreement.ts';
import { AppRelationshipsBuilds } from '../models/AppRelationshipsBuilds.ts';
import { AppRelationshipsCiProduct } from '../models/AppRelationshipsCiProduct.ts';
import { AppRelationshipsEndUserLicenseAgreement } from '../models/AppRelationshipsEndUserLicenseAgreement.ts';
import { AppRelationshipsGameCenterDetail } from '../models/AppRelationshipsGameCenterDetail.ts';
import { AppRelationshipsGameCenterEnabledVersions } from '../models/AppRelationshipsGameCenterEnabledVersions.ts';
import { AppRelationshipsInAppPurchases } from '../models/AppRelationshipsInAppPurchases.ts';
import { AppRelationshipsInAppPurchasesV2 } from '../models/AppRelationshipsInAppPurchasesV2.ts';
import { AppRelationshipsPreOrder } from '../models/AppRelationshipsPreOrder.ts';
import { AppRelationshipsPreReleaseVersions } from '../models/AppRelationshipsPreReleaseVersions.ts';
import { AppRelationshipsPrices } from '../models/AppRelationshipsPrices.ts';
import { AppRelationshipsPromotedPurchases } from '../models/AppRelationshipsPromotedPurchases.ts';
import { AppRelationshipsReviewSubmissions } from '../models/AppRelationshipsReviewSubmissions.ts';
import { AppRelationshipsSubscriptionGracePeriod } from '../models/AppRelationshipsSubscriptionGracePeriod.ts';
import { AppRelationshipsSubscriptionGroups } from '../models/AppRelationshipsSubscriptionGroups.ts';
import { AppStoreVersionExperimentV2RelationshipsControlVersions } from '../models/AppStoreVersionExperimentV2RelationshipsControlVersions.ts';
import { AppStoreVersionRelationshipsAppStoreVersionExperiments } from '../models/AppStoreVersionRelationshipsAppStoreVersionExperiments.ts';
import { HttpFile } from '../http/http.ts';

export class AppRelationships {
    'appEncryptionDeclarations'?: AppRelationshipsAppEncryptionDeclarations;
    'ciProduct'?: AppRelationshipsCiProduct;
    'betaGroups'?: AppRelationshipsBetaGroups;
    'appStoreVersions'?: AppStoreVersionExperimentV2RelationshipsControlVersions;
    'preReleaseVersions'?: AppRelationshipsPreReleaseVersions;
    'betaAppLocalizations'?: AppRelationshipsBetaAppLocalizations;
    'builds'?: AppRelationshipsBuilds;
    'betaLicenseAgreement'?: AppRelationshipsBetaLicenseAgreement;
    'betaAppReviewDetail'?: AppRelationshipsBetaAppReviewDetail;
    'appInfos'?: AppRelationshipsAppInfos;
    'appClips'?: AppRelationshipsAppClips;
    'endUserLicenseAgreement'?: AppRelationshipsEndUserLicenseAgreement;
    'preOrder'?: AppRelationshipsPreOrder;
    'prices'?: AppRelationshipsPrices;
    'availableTerritories'?: AppRelationshipsAvailableTerritories;
    'inAppPurchases'?: AppRelationshipsInAppPurchases;
    'subscriptionGroups'?: AppRelationshipsSubscriptionGroups;
    'gameCenterEnabledVersions'?: AppRelationshipsGameCenterEnabledVersions;
    'appCustomProductPages'?: AppRelationshipsAppCustomProductPages;
    'inAppPurchasesV2'?: AppRelationshipsInAppPurchasesV2;
    'promotedPurchases'?: AppRelationshipsPromotedPurchases;
    'appEvents'?: AppRelationshipsAppEvents;
    'reviewSubmissions'?: AppRelationshipsReviewSubmissions;
    'subscriptionGracePeriod'?: AppRelationshipsSubscriptionGracePeriod;
    'gameCenterDetail'?: AppRelationshipsGameCenterDetail;
    'appStoreVersionExperimentsV2'?: AppStoreVersionRelationshipsAppStoreVersionExperiments;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appEncryptionDeclarations",
            "baseName": "appEncryptionDeclarations",
            "type": "AppRelationshipsAppEncryptionDeclarations",
            "format": ""
        },
        {
            "name": "ciProduct",
            "baseName": "ciProduct",
            "type": "AppRelationshipsCiProduct",
            "format": ""
        },
        {
            "name": "betaGroups",
            "baseName": "betaGroups",
            "type": "AppRelationshipsBetaGroups",
            "format": ""
        },
        {
            "name": "appStoreVersions",
            "baseName": "appStoreVersions",
            "type": "AppStoreVersionExperimentV2RelationshipsControlVersions",
            "format": ""
        },
        {
            "name": "preReleaseVersions",
            "baseName": "preReleaseVersions",
            "type": "AppRelationshipsPreReleaseVersions",
            "format": ""
        },
        {
            "name": "betaAppLocalizations",
            "baseName": "betaAppLocalizations",
            "type": "AppRelationshipsBetaAppLocalizations",
            "format": ""
        },
        {
            "name": "builds",
            "baseName": "builds",
            "type": "AppRelationshipsBuilds",
            "format": ""
        },
        {
            "name": "betaLicenseAgreement",
            "baseName": "betaLicenseAgreement",
            "type": "AppRelationshipsBetaLicenseAgreement",
            "format": ""
        },
        {
            "name": "betaAppReviewDetail",
            "baseName": "betaAppReviewDetail",
            "type": "AppRelationshipsBetaAppReviewDetail",
            "format": ""
        },
        {
            "name": "appInfos",
            "baseName": "appInfos",
            "type": "AppRelationshipsAppInfos",
            "format": ""
        },
        {
            "name": "appClips",
            "baseName": "appClips",
            "type": "AppRelationshipsAppClips",
            "format": ""
        },
        {
            "name": "endUserLicenseAgreement",
            "baseName": "endUserLicenseAgreement",
            "type": "AppRelationshipsEndUserLicenseAgreement",
            "format": ""
        },
        {
            "name": "preOrder",
            "baseName": "preOrder",
            "type": "AppRelationshipsPreOrder",
            "format": ""
        },
        {
            "name": "prices",
            "baseName": "prices",
            "type": "AppRelationshipsPrices",
            "format": ""
        },
        {
            "name": "availableTerritories",
            "baseName": "availableTerritories",
            "type": "AppRelationshipsAvailableTerritories",
            "format": ""
        },
        {
            "name": "inAppPurchases",
            "baseName": "inAppPurchases",
            "type": "AppRelationshipsInAppPurchases",
            "format": ""
        },
        {
            "name": "subscriptionGroups",
            "baseName": "subscriptionGroups",
            "type": "AppRelationshipsSubscriptionGroups",
            "format": ""
        },
        {
            "name": "gameCenterEnabledVersions",
            "baseName": "gameCenterEnabledVersions",
            "type": "AppRelationshipsGameCenterEnabledVersions",
            "format": ""
        },
        {
            "name": "appCustomProductPages",
            "baseName": "appCustomProductPages",
            "type": "AppRelationshipsAppCustomProductPages",
            "format": ""
        },
        {
            "name": "inAppPurchasesV2",
            "baseName": "inAppPurchasesV2",
            "type": "AppRelationshipsInAppPurchasesV2",
            "format": ""
        },
        {
            "name": "promotedPurchases",
            "baseName": "promotedPurchases",
            "type": "AppRelationshipsPromotedPurchases",
            "format": ""
        },
        {
            "name": "appEvents",
            "baseName": "appEvents",
            "type": "AppRelationshipsAppEvents",
            "format": ""
        },
        {
            "name": "reviewSubmissions",
            "baseName": "reviewSubmissions",
            "type": "AppRelationshipsReviewSubmissions",
            "format": ""
        },
        {
            "name": "subscriptionGracePeriod",
            "baseName": "subscriptionGracePeriod",
            "type": "AppRelationshipsSubscriptionGracePeriod",
            "format": ""
        },
        {
            "name": "gameCenterDetail",
            "baseName": "gameCenterDetail",
            "type": "AppRelationshipsGameCenterDetail",
            "format": ""
        },
        {
            "name": "appStoreVersionExperimentsV2",
            "baseName": "appStoreVersionExperimentsV2",
            "type": "AppStoreVersionRelationshipsAppStoreVersionExperiments",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

