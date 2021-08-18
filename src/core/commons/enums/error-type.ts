export enum ErrorType {
    // Generic error types
    Unexpected = 'unexpected_error',
    Forbidden = 'forbidden',
    Unauthorized = 'unauthorized',
    NotFound = 'not_found',
    BadRequest = 'bad_request',
    AlreadyExists = 'already_exists',
    
    // Specific error types
    TokenExpired = 'token_expired',
    InvalidCredentials = 'invalid_credentials',
  }
  