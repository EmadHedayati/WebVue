import Account from "./Account";

class Team extends Account {
    get _attributes(){
        return {
            shortTitle: {
                String,
            },
        }
    }

    constructor(attributes, shortTitle){
        super(attributes);
        this.shortTitle = shortTitle;
    }
}

export default Team;
