export const systemSettingSchema = {

    SystemSetting: {

        type: "object",

        properties: {

            _id: {

                type: "string",

                example: "66a7f3e4a8b1c92f5d333333"

            },


            key: {

                type: "string",

                example:
                "maintenance_mode"

            },


            value: {

                type: "string",

                example:
                "false"

            },


            description: {

                type: "string",

                example:
                "Controls system maintenance state"

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