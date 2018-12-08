import Team from "./Team";
import Stadium from "./Stadium";
import Model from "./Model";

class Match extends Model {
    getAttributes() {
        return {
            id: {
                type: Number,
                default: ''
            },
            homeTeam: {
                type: Team,
                default: ''
            },
            awayTeam: {
                type: Team,
                default: ''
            },
            homeScore: {
                type: Number,
                default: ''
            },
            awayScore: {
                type: Number,
                default: ''
            },
            date: {
                type: Number,
                default: ''
            },
            stadium: {
                type: Stadium,
                default: ''
            },
            live: {
                type: Boolean,
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

export default Match;
