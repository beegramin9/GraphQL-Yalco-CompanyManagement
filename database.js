const csvToJson = require('convert-csv-to-json')

const database = {
  teams: [],
  people: [],
  roles: [],
  softwares: [],
  equipments: [],
  supplies: []
}

Object.keys(database).forEach((key) => {
  // 각 Key에 대응하는 Value Array에 CSV파일을 ,로 구분해서
  // Json화 이후 넣는다
  database[key] = [
    ...database[key], 
    ...csvToJson.fieldDelimiter(',')
      .getJsonFromCsv(`./data-in-csv/${key}.csv`)
      // header는 자동으로 제외하고 넣는다
  ]
  // 해당 Key Array에 이미 무언가 있다면
  // => forEach문으로 Json 데이터가 잘 들어왔다면
  if (database[key].length > 0) {
    const firstItem = database[key][0];
    
    Object.keys(firstItem).forEach((itemKey) => {
      if (database[key].every((item) => {
        return /^-?\d+$/.test(item[itemKey])
      })) {
        database[key].forEach((item) => {
          item[itemKey] = Number(item[itemKey])
        })
      }
    })
  }
})

module.exports = database