export const userSchema = {

    User: {

        type: "object",

        required: [
            "first_name",
            "last_name",
            "username",
            "email",
            "password"
        ],

        properties: {

            _id: {
                type: "string",
                example: "66a7f3e4a8b1c92f5d123456"
            },

            first_name: {
                type: "string",
                example: "Caleb"
            },

            last_name: {
                type: "string",
                example: "Osigwe"
            },

            username: {
                type: "string",
                example: "caleb01"
            },

            email: {
                type: "string",
                format: "email",
                example: "caleb@example.com"
            },

            password: {
                type: "string",
                example: "hashed_password"
            },

            role_id: {
                type: "string",
                example: "66a7f3e4a8b1c92f5d654321"
            },

            status: {
                type: "string",
                enum: [
                    "active",
                    "inactive",
                    "suspended"
                ],
                example: "active"
            },

            created_at: {
                type: "string",
                format: "date-time"
            },

            updated_at: {
                type: "string",
                format: "date-time"
            }

        }

    }

};