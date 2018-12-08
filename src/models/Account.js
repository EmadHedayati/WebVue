class Account {
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
            image: {
                String,
            },
            dateCreated: {
                Number,
            },
        }
    }

    constructor(id = 0, title = "Title", description = "Description", image = "logo.png", dateCreated = new Date().getTime()){
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.dateCreated = dateCreated;
    }

}

export default Account;
