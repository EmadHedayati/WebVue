import Account from "./Account";

class Team extends Account {
    getAttributes() {
        return {
            shortTitle: {
                type: String,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Team;
