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
        }
    }

    constructor(id = 0, title = "Title", description = "Description", url = "logo.png"){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

}

export default News;
