import { BaseException } from ".";
import { ErrorType, ExceptionStatusCode } from "../commons/enums";

export class ResourceNotFoundException extends BaseException {

    constructor( message?: string ){
        super( ExceptionStatusCode.NOT_FOUND, ErrorType.NotFound, message );
    }
}