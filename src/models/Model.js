class Model {
    get _attributes() {
        return {};
    }

    constructor(attributes) {
        this.setAttributes(attributes);
    }

    getAttributes() {
        return _.pickBy(this, (value, key) => {
            return key in this._attributes;
        });
    }

    setAttributes(attributes) {
        for (let key in this._attributes) {
            this[key] = this._attributes[key].default;
        }
        _.assign(this, _.pickBy(attributes, (value, key) => {
            return key in this._attributes;
        }));
        return this.getAttributes();
    }
}

export default Model;
