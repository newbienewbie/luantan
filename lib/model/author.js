const emailHash = require('md5');

/**
 * comment author
 */
class Author {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.gravatar=this.getGravatar();
    }

    validate() {
        var errors = [];
        ['name', 'email'].forEach((property) => {
            if (!this[property]) {
                errors.push({
                    field: property,
                    message: 'Please enter ' + property
                });
            }
        });
        return errors;
    }

    getGravatar() {
        return 'https://www.gravatar.com/avatar/' + emailHash(this.email) + '?s=48';
    }

}


module.exports = Author;
