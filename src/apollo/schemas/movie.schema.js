const { gql } = require('apollo-server-express');

module.exports = gql`
    type Movie {
        id: ID
        title: String
        
        description: String,
        img: String
    }
    type Query {
        getMovies:[Movie]
        getMovie(id:ID):Movie!
    }
    type Mutation {
        createMovie(title:String!,description: String, img:String):Movie
        updateMovie(id:ID!,title:String!,description: String, img:String):Movie
    }
`