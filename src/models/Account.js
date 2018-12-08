import Model from "./Model";

class Account extends Model {
    getAttributes() {
        return {
            id: {
                type: Number,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            dateCreated: {
                type: Number,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Account;
