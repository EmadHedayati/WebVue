import Model from "./Model";
import Team from "./Team";

class LeagueTeam extends Model {
    getAttributes() {
        return {
            team: {
                type: Team,
                default: '',
            },
            rank: {
                type: Number,
                default: ''
            },
            points: {
                type: Number,
                default: ''
            },
            played: {
                type: Number,
                default: ''
            },
            goalDifference: {
                type: Number,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default LeagueTeam;
