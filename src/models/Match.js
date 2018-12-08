import Team from "./Team";
import Stadium from "./Stadium";

class Match {
    get _attributes(){
        return {
            id: {
                Number,
            },
            homeTeam: {
                Team,
            },
            awayTeam: {
                Team,
            },
            homeScore: {
                Number,
            },
            awayScore: {
                Number,
            },
            date: {
                Number,
            },
            stadium: {
                Stadium,
            },
            live: {
                Boolean,
            },
            dateCreated: {
                Number,
            },
        }
    }

    constructor(id = 0, homeTeam, awayTeam, homeScore = 0, awayScore = 0, date = new Date().getTime(), stadium, live = false, dateCreated = new Date().getTime()){
        this.id = id;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.date = date;
        this.stadium = stadium;
        this.live = live;
        this.dateCreated = dateCreated;
    }

}

export default Match;
