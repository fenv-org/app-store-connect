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

import { AppClipAction } from '../models/AppClipAction.ts';
import { AppClipAdvancedExperienceAttributesPlace } from '../models/AppClipAdvancedExperienceAttributesPlace.ts';
import { AppClipAdvancedExperienceLanguage } from '../models/AppClipAdvancedExperienceLanguage.ts';
import { HttpFile } from '../http/http.ts';

export class AppClipAdvancedExperienceUpdateRequestDataAttributes {
    'action'?: AppClipAction;
    'isPoweredBy'?: boolean;
    'place'?: AppClipAdvancedExperienceAttributesPlace;
    'businessCategory'?: AppClipAdvancedExperienceUpdateRequestDataAttributesBusinessCategoryEnum;
    'defaultLanguage'?: AppClipAdvancedExperienceLanguage;
    'removed'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "AppClipAction",
            "format": ""
        },
        {
            "name": "isPoweredBy",
            "baseName": "isPoweredBy",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "place",
            "baseName": "place",
            "type": "AppClipAdvancedExperienceAttributesPlace",
            "format": ""
        },
        {
            "name": "businessCategory",
            "baseName": "businessCategory",
            "type": "AppClipAdvancedExperienceUpdateRequestDataAttributesBusinessCategoryEnum",
            "format": ""
        },
        {
            "name": "defaultLanguage",
            "baseName": "defaultLanguage",
            "type": "AppClipAdvancedExperienceLanguage",
            "format": ""
        },
        {
            "name": "removed",
            "baseName": "removed",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppClipAdvancedExperienceUpdateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppClipAdvancedExperienceUpdateRequestDataAttributesBusinessCategoryEnum {
    Automotive = 'AUTOMOTIVE',
    Beauty = 'BEAUTY',
    Bikes = 'BIKES',
    Books = 'BOOKS',
    Casino = 'CASINO',
    Education = 'EDUCATION',
    EducationJapan = 'EDUCATION_JAPAN',
    Entertainment = 'ENTERTAINMENT',
    EvCharger = 'EV_CHARGER',
    FinancialUsd = 'FINANCIAL_USD',
    FinancialCny = 'FINANCIAL_CNY',
    FinancialGbp = 'FINANCIAL_GBP',
    FinancialJpy = 'FINANCIAL_JPY',
    FinancialEur = 'FINANCIAL_EUR',
    Fitness = 'FITNESS',
    FoodAndDrink = 'FOOD_AND_DRINK',
    Gas = 'GAS',
    Grocery = 'GROCERY',
    HealthAndMedical = 'HEALTH_AND_MEDICAL',
    HotelAndTravel = 'HOTEL_AND_TRAVEL',
    Music = 'MUSIC',
    Parking = 'PARKING',
    PetServices = 'PET_SERVICES',
    ProfessionalServices = 'PROFESSIONAL_SERVICES',
    Shopping = 'SHOPPING',
    Ticketing = 'TICKETING',
    Transit = 'TRANSIT'
}

