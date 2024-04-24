const { Pool } = require('pg');

class Database {
    constructor(options) {
        this.options = options
        this.db = null
    }
    validateHeaderName() {
        const {host, user, password, database} = this.options
        if (!host|| !user || !password || !database) {
        throw new Error('All options must be provided')
        }
        return
    }

    connect () {
        this.validateHeaderName()
        const {host, user, password, database} = this.options

        this.db = new Pool(
            {
                user: user,
                password: password,
                host: host,
                database: database
            },
            console.log('Connected to the employee database!')
        )
    }
    disconnect () {
        this.db.end() 
    }
}

module.exports = Database