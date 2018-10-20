const graphql = require('graphql');
const UserType= require('./user_type');
const { GraphQLObjectType ,
GraphQLString,
GraphQLID
} = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
   user:{
      type:UserType,
      resolve(parentvalue, args,req){
        return req.user;
      }
   }
}
});

module.exports = RootQueryType;
