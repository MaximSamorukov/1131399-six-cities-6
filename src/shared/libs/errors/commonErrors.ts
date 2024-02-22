import { CustomError } from './customError.js';
import { StatusCodes } from 'http-status-codes';

export class NoRequestedResourceError extends CustomError {
  constructor() {
    super();
    this.message = this.label.get('error.common.errorRequest');
    this.code = StatusCodes.NOT_FOUND;
  }
}

