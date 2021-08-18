import { ErrorType, ExceptionStatusCode } from "../commons/enums";
import { BaseException } from "./base.exception";

export class AlreadyExistsException extends BaseException {
    
    constructor( message?: string ){
        super( ExceptionStatusCode.BAD_REQUEST, ErrorType.AlreadyExists, message );
    }
    
}