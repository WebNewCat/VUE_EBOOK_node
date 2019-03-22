const env = require('./env')

let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
  resUrl = 'http://192.168.31.168:90'
  mp3FilePath = 'C:\Users\Joling\Desktop\resource\mp3'
  dbHost = 'localhost'
  dbUser = 'root'
  dbPwd = '1234'
} else if (env === 'prod') {
  resUrl = 'http://39.97.171.160'
  mp3FilePath = '/root/nginx/upload/mp3'
  dbHost = '39.97.171.160'
  dbUser = 'root'
  dbPwd = 'abc123.'
}

const category = [
  'Biomedicine',
  'BusinessandManagement',
  'ComputerScience',
  'EarthSciences',
  'Economics',
  'Engineering',
  'Education',
  'Environment',
  'Geography',
  'History',
  'Laws',
  'LifeSciences',
  'Literature',
  'SocialSciences',
  'MaterialsScience',
  'Mathematics',
  'MedicineAndPublicHealth',
  'Philosophy',
  'Physics',
  'PoliticalScienceAndInternationalRelations',
  'Psychology',
  'Statistics'
]

module.exports = {
  resUrl,
  category,
  mp3FilePath,
  dbHost,
  dbUser,
  dbPwd
}
