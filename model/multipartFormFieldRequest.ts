/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { EncodingEnum } from './encodingEnum';

/**
* # The MultipartFormField Object ### Description The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.  ### Usage Example Create a `MultipartFormField` to define a multipart form entry.
*/
export class MultipartFormFieldRequest {
    /**
    * The name of the form field
    */
    'name': string;
    /**
    * The data for the form field.
    */
    'data': string;
    /**
    * The encoding of the value of `data`. Defaults to `RAW` if not defined.
    */
    'encoding'?: EncodingEnum | null;
    /**
    * The file name of the form field, if the field is for a file.
    */
    'file_name'?: string | null;
    /**
    * The MIME type of the file, if the field is for a file.
    */
    'content_type'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "encoding",
            "baseName": "encoding",
            "type": "EncodingEnum"
        },
        {
            "name": "file_name",
            "baseName": "file_name",
            "type": "string"
        },
        {
            "name": "content_type",
            "baseName": "content_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MultipartFormFieldRequest.attributeTypeMap;
    }
}

