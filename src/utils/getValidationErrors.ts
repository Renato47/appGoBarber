import { ValidationError } from 'yup';

interface Errors {
  [Key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path || 'a'] = error.message;
  });

  return validationErrors;
}
