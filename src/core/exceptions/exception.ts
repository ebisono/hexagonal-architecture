import { ErrorType } from "../commons/enums";

export interface Exception {
    errorType: ErrorType;
    message: string;
    status: number;
    errors: any[];
}