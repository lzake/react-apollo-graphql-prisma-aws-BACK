//mutatation is for PUSHING data, whereas query is for GETTING data
const mutations = {
    createDog(parent, args, ctx, info){
        global.dogs = global.dogs || []
        //create dog
        const newdog = {name: args.name}
        global.dogs.push(newdog)
        return newdog
     }
};

module.exports = mutations;
