let data = {
  name: 'Cicero',
  avatar: 'https://github.com/cmrib.png',
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
  "value-hour": 75,
}


module.exports = {
  get(){
    return data
  },
  
  update(newData){
    data = newData    
  }
}