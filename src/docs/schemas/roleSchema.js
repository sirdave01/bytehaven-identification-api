export const roleSchema = {

    Role: {

        type: "object",

        properties: {

            _id: {
                type: "string",
                example: "66a7f3e4a8b1c92f5d111111"
            },

            name: {

                type: "string",

                example: "Super Admin"

            },

            description: {

                type: "string",

                example:
                "Full system access"

            },

            permissions: {

                type: "array",

                items: {

                    type: "string"

                },

                example: [

                    "create_user",
                    "update_user",
                    "delete_user"

                ]

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