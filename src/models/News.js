import Model from "./Model";

class News extends Model {
    getAttributes(){
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
                type: String,
                default: new Date().getTime()
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default News;
