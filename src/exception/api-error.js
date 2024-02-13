class ApiError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User unauthorized')
    }

    static ForbiddenError() {
        return new ApiError(403, 'Forbidden')
    }

    static UserDeletedError() {
        return new ApiError(403, 'User has been deleted');
    }

    static ServerError() {
        return new ApiError(500, 'Internal Server Error');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static Conflict(message) {
        return new ApiError(409, message ? message : 'Conflict');
    }
}

module.exports = ApiError;