class UserDto {
    constructor(model) {
        this.id = model._id
        this.email = model.email
        this.username = model.username
        this.role = model.role
        this.deletedAt = model.deletedAt
        this.createdAt = model.createdAt
        this.updatedAt = model.updatedAt
    }
}

module.exports = UserDto;