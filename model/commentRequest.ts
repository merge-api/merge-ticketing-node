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

/**
* # The Location Object ### Description The `Comment` object is used to represent a comment on a ticket.  ### Usage Example TODO
*/
export class CommentRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'author'?: string | null;
    /**
    * The comment\'s text body.
    */
    'body'?: string | null;
    /**
    * The comment\'s text body formatted as html.
    */
    'html_body'?: string | null;
    'ticket'?: string | null;
    /**
    * When the third party\'s comment was created.
    */
    'remote_created_at'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "html_body",
            "baseName": "html_body",
            "type": "string"
        },
        {
            "name": "ticket",
            "baseName": "ticket",
            "type": "string"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CommentRequest.attributeTypeMap;
    }
}
