class Model {
    constructor(attributes) {
        this.fillAttributes(attributes)
    }

    getAttributes() {
        return {}
    }

    fill(attributes) {
        attributes = attributes || {}
        this.fillAttributes(attributes)
        return this
    }

    fillAttributes(attributes) {
        attributes = attributes || {}
        for (let name of Object.keys(this.getAttributes())) {
            if (!attributes.hasOwnProperty(name)) {
                this.setAttribute(name, null)
            }
        }
        for (let [name, value] of Object.entries(attributes)) {
            this.setAttribute(name, value)
        }
        return this
    }

    setAttribute(name, value) {
        if (this.getAttributes().hasOwnProperty(name)) {
            let attribute = this.getAttributes()[name]
            if (value !== null && value !== undefined) {
                if (value.constructor !== attribute.type) {
                    throw new Error('Type mismatch exception for attribute ' + name + ', expected ' + attribute.type + ', got ' + value.constructor)
                }
            } else if (attribute.required) {
                throw new Error(`The ${name} attribute must be presents`)
            } else {
                if (attribute.type === Array || attribute.type === Object) {
                    value = attribute.default()
                } else {
                    value = attribute.default
                }
            }
        }
        this[name] = value
    }
}

export default Model
