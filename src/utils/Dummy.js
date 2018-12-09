import Match from "../models/Match";
import News from "../models/News";
import Player from "../models/Player";
import Stadium from "../models/Stadium";
import Team from "../models/Team";
import Table from "../models/Table";
import League from "../models/League";
import LeagueTeam from "../models/LeagueTeam";

class Dummy {
    static match() {
        return new Match({
            id: this.randomNumber(1000000),
            homeTeam: this.team(),
            awayTeam: this.team(),
            homeScore: this.randomNumber(5),
            awayScore: this.randomNumber(5),
            data: this.randomDate(),
            stadium: this.stadium(),
            live: this.randomBoolean(),
            dataCreated: this.randomDate(),
        })
    }

    static matchList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.match());
        }
        return array;
    }

    static news() {
        return new News({
            id: this.randomNumber(1000000),
            title: this.randomTitle(),
            description: this.randomDescription(),
            image: this.randomImage(),
            dataCreated: this.randomDate(),
        })
    }

    static newsList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.news());
        }
        return array;
    }

    static player() {
        return new Player({
            id: this.randomNumber(1000000),
            title: this.randomTitle(),
            description: this.randomDescription(),
            image: this.randomImage(),
            dataCreated: this.randomDate(),
        })
    }

    static playerList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.player(i));
        }
        return array;
    }

    static stadium() {
        return new Stadium({
            id: this.randomNumber(1000000),
            title: this.randomTitle(),
            description: this.randomDescription(),
            image: this.randomImage(),
            dataCreated: this.randomDate(),
        })
    }

    static stadiumList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.stadium(i));
        }
        return array;
    }

    static team() {
        return new Team({
            id: this.randomNumber(1000000),
            title: this.randomTitle(),
            shortTitle: this.randomShortTitle(),
            description: this.randomDescription(),
            image: this.randomImage(),
            dataCreated: this.randomDate(),
        })
    }

    static teamList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.team());
        }
        return array;
    }

    static leagueTeam(rank) {
        return new LeagueTeam({
            team: this.team(),
            points: this.randomNumber(20),
            rank: rank,
            played: this.randomNumber(16),
            goalDifference: this.randomNumber(40),
        })
    }

    static leagueTeamList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.leagueTeam(i + 1));
        }
        return array;
    }

    static league() {
        return new League({
            id: this.randomNumber(1000000),
            title: this.randomTitle(),
            description: this.randomDescription(),
            image: this.randomImage(),
            dataCreated: this.randomDate(),
            matchList: this.matchList(3),
            nextMatch: this.match(),
            leagueTeamTable: this.createLeagueTeamTable(this.leagueTeamList(16))
        })
    }

    static leagueList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.league());
        }
        return array;
    }

    static table(col = 4, row = 3, type = 'team') {
        let colList = [];
        colList.push(this.randomWord());
        for (let i = 0; i < col; i++) {
            colList.push(this.randomWord());
        }

        let rowList = [];
        for (let i = 0; i < row; i++) {
            rowList.push([]);
            if (type == 'team')
                rowList[i].push(this.team());
            if (type == 'player')
                rowList[i].push(this.player());
            for (let j = 0; j < col; j++) {
                rowList[i].push(this.randomWord());
            }
        }

        return new Table({
            colList: colList,
            rowList: rowList,
        })
    }

    static createLeagueTeamTable(leagueTeamTable) {
        let colList = [];
        colList.push('League Chart');
        colList.push('Rank');
        colList.push('Points');
        colList.push('Played');
        colList.push('Goal Difference');

        let rowList = [];
        for (let i = 0; i < leagueTeamTable.length; i++) {
            rowList.push([]);
            rowList[i].push(leagueTeamTable[i].team);
            rowList[i].push(leagueTeamTable[i].rank);
            rowList[i].push(leagueTeamTable[i].points);
            rowList[i].push(leagueTeamTable[i].played);
            rowList[i].push(leagueTeamTable[i].goalDifference);
        }

        return new Table({
            colList: colList,
            rowList: rowList,
        })
    }

    static randomNumber(max) {
        let random = Math.random() * max;
        return Math.floor(random);
    }

    static randomBoolean() {
        return Math.random() > 0.5;
    }

    static randomElement(array) {
        return array[this.randomNumber(array.length)];
    }

    static randomDate() {
        let date = new Date();
        date.setTime(date.getTime() + (this.randomNumber(4) - 2) * (24 * 60 * 60 * 1000));
        date.setHours(this.randomNumber(24));
        date.setMinutes(this.randomNumber(2) * 30);
        return date.getTime();
    }

    static randomImage() {
        let images = [
            "background_test_1.jpg",
            "background_test_2.jpg",
            "background_test_3.jpg",
            "background_test_4.jpg",
            "background_test_5.jpg",
        ];
        return this.randomElement(images);
    }

    static randomWord() {
        var faker = require('faker');
        return faker.lorem.words(1);
    }

    static randomTitle() {
        var faker = require('faker');
        return faker.lorem.words(3 + this.randomNumber(4));
    }

    static randomShortTitle() {
        let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        return this.randomElement(chars) + this.randomElement(chars) + this.randomElement(chars);
    }

    static randomDescription() {
        var faker = require('faker');
        return faker.lorem.sentence(15 + this.randomNumber(20));
    }
}

export default Dummy;
