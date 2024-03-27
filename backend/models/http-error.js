class httpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}

