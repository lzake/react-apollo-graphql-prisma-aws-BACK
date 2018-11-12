//mutatation is for PUSHING data, whereas query is for GETTING data
const Query = {
    dogs(parent, args, ctx, info){
        return global.dogs = global.dogs || []
        return global.dogs
     }
};

module.exports = Query;
