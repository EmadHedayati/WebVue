import Model from "./Model";

class Table extends Model {
    getAttributes(){
        return {
            colList: {
                type: Array,
                default: ''
            },
            rowList: {
                type: Array,
                default: ''
            },
        }
    }

    constructor(attributes) {
        super(attributes);
    }
}

export default Table;
