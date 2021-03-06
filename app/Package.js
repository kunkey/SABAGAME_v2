var Package_Model = require('../models/package');

const Package = (data) => {
    try {
        return new Promise((resolve, reject) => {
            Package_Model.find(data).exec((err, docs) => {
                if(err) {
                    reject(err);
                }else {
                    resolve(docs);
                }
                
            });
        })
    } catch(err) {
        console.log(err);
        return err;
    }
};


module.exports = {
    Package: Package
}