export const applicationSchema = {

    Application: {

        type: "object",

        properties: {

            _id: {

                type: "string",

                example: "66a7f3e4a8b1c92f5d222222"

            },


            name: {

                type: "string",

                example: "HavenChat"

            },


            description: {

                type: "string",

                example:
                "Messaging platform inside ByteHaven ecosystem"

            },


            status: {

                type: "string",

                enum: [

                    "active",
                    "inactive"

                ],

                example: "active"

            },


            version: {

                type: "string",

                example: "1.0.0"

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