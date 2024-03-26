require("dotenv").config()

const get = (section) => {
    return process.env[section] ? process.env[section]: false;
}

module.exports={
    get
}
