class ValidationError extends Error {
  constructor(error = {}) {
    super(error.message);

    this.name = 'ValidationError';
    this.type = 'validation';
    this.field = error.field;
    this.errors = error.errors;
  }
}

class InternalServerError extends Error {
  constructor(error = {}) {
    super(error.message);

    this.name = 'InternalServerError';
    this.type = 'internal';
  }
}

module.exports = {
  ValidationError,
  InternalServerError,
};
