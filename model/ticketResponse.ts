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
import { DebugModeLog } from './debugModeLog';
import { ErrorValidationProblem } from './errorValidationProblem';
import { Ticket } from './ticket';
import { WarningValidationProblem } from './warningValidationProblem';

export class TicketResponse {
    'model': Ticket;
    'warnings': Array<WarningValidationProblem>;
    'errors': Array<ErrorValidationProblem>;
    'logs'?: Array<DebugModeLog>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "model",
            "baseName": "model",
            "type": "Ticket"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<WarningValidationProblem>"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorValidationProblem>"
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "Array<DebugModeLog>"
        }    ];

    static getAttributeTypeMap() {
        return TicketResponse.attributeTypeMap;
    }
}

