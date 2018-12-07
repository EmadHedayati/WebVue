class News {
    get _attributes(){
        return {
            id: {
                Number,
            },
            title: {
                String,
            },
            description: {
                String,
            },
            url: {
                String,
            },
            date: {
                Number,
            },
        }
    }

    constructor(id = 0, title = "Title", description = "Description", url = "logo.png", date = new Date().getTime()){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.date = date;
    }

}

export default News;
