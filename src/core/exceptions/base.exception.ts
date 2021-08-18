import { ErrorType, ExceptionStatusCode } from "../commons/enums";
import { Exception } from "./exception";

export abstract class BaseException implements Exception {

    private _status: number = ExceptionStatusCode.INTERNAL_SERVER_ERROR;
    private _errorType: ErrorType = ErrorType.Unexpected;
    private _message: string;
    private _errors: any[];

    protected constructor(status: number, errorType: ErrorType, message: string = null, errors: string[] = null) {
        this._status = status;
        this._errorType = errorType;
        this._message = message;
        this._errors = errors;
    }

    getResponse(): Exception {
        return this;
    }

    getStatus(): number {
        return this._status;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number ) {
        this._status = value;
    }

    get errorType(): ErrorType {
        return this._errorType;
    }

    set errorType(value: ErrorType) {
        this._errorType = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get errors(): any[] {
        return this._errors;
    }

    set errors(value: any[]) {
        this._errors = value;
    }

}