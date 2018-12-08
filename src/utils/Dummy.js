import Match from "../models/Match";
import News from "../models/News";
import Player from "../models/Player";
import Stadium from "../models/Stadium";
import Team from "../models/Team";

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
            image: this.randomImage(5),
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

    static randomTitle() {
        return "Title";
    }

    static randomShortTitle() {
        return "TIT";
    }

    static randomDescription() {
        return "Description";
    }
}

export default Dummy;
