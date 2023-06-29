/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * OpenAPI spec version: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig {
    'autoDelete'?: boolean;
    'durable'?: boolean;
    'internal'?: boolean;
    'noWait'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoDelete",
            "baseName": "autoDelete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "durable",
            "baseName": "durable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "internal",
            "baseName": "internal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "noWait",
            "baseName": "noWait",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

