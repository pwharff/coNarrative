function dosomething (config) {
    config = config || {};
    const { id, name } = config;
    console.log(id, name);
}

function doMore () {
    console.log('I did more than you did.');
}

module.exports = { dosomething, doMore };