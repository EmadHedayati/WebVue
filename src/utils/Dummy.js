import Match from "../models/Match";
import News from "../models/News";
import Player from "../models/Player";
import Stadium from "../models/Stadium";
import Team from "../models/Team";
import Table from "../models/Table";

class Dummy {
    static match(id = 0) {
        return new Match({
            id: id,
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
            array.push(this.match(i));
        }
        return array;
    }

    static news(id = 0) {
        return new News({
            id: id,
            title: this.randomTitle(),
            description: this.randomDescription(),
            image: this.randomImage(),
            dataCreated: this.randomDate(),
        })
    }

    static newsList(num) {
        let array = [];
        for (let i = 0; i < num; i++) {
            array.push(this.news(i));
        }
        return array;
    }

    static player(id = 0) {
        return new Player({
            id: id,
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

    static stadium(id = 0) {
        return new Stadium({
            id: id,
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

    static team(id = 0) {
        return new Team({
            id: id,
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
            array.push(this.team(i));
        }
        return array;
    }

    static table(col = 4, row = 3) {
        let colList = [];
        colList.push(this.randomWord());
        for (let i = 0; i < col; i++) {
            colList.push(this.randomWord());
        }

        let rowList = [];
        for (let i = 0; i < row; i++) {
            rowList.push([]);
            for (let j = 0; j < col + 1; j++) {
                rowList[i].push(this.randomWord());
            }
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
