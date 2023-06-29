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

import { IoArgoprojEventsV1alpha1BasicAuth } from '../models/IoArgoprojEventsV1alpha1BasicAuth';
import { IoK8sApiCoreV1SecretKeySelector } from '../models/IoK8sApiCoreV1SecretKeySelector';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1NATSAuth {
    'basic'?: IoArgoprojEventsV1alpha1BasicAuth;
    'credential'?: IoK8sApiCoreV1SecretKeySelector;
    'nkey'?: IoK8sApiCoreV1SecretKeySelector;
    'token'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "basic",
            "baseName": "basic",
            "type": "IoArgoprojEventsV1alpha1BasicAuth",
            "format": ""
        },
        {
            "name": "credential",
            "baseName": "credential",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "nkey",
            "baseName": "nkey",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1NATSAuth.attributeTypeMap;
    }

    public constructor() {
    }
}

