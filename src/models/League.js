import Account from "./Account";
import Match from "./Match";
import Table from "./Table";

class League extends Account {
    getAttributes(){
        return {
            matchList: {
                type: Array,
                default: ''
            },
            nextMatch: {
                type: Match,
                default: ''
            },
            leagueTeamTable: {
                type: Table,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default League;
