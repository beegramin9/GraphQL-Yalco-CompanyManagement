const { gql } = require('apollo-server')
const typeDefs = gql`
    # Query에 arg를 보낼 때는 Enum요소엔 ""을 쓰지 않는다.
    # String으로 정해진 것만 스트링취급해서 ""로 감싼다
    # sex: female, from: "California"
    enum Sex {
        male
        female
    }
    enum BloodType {
        A
        B
        AB
        O
    }
    enum Role {
        developer
        designer
        planner
    }
    enum NewOrUsed {
        new
        used
    }
`
module.exports = typeDefs