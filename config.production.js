module.exports = {
  subdomain: 'system',
  SECRET: '0xD58F835B69B207A76CA5F84a70a1D0d4C79dAC97', // temporary...
  email: {
    host: 'smtp.office365.com', // your sender-email smtp host
    port: 587, // smtp server port
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your sender-email',
      pass: 'your sender-email password' // generated ethereal password
    },
    secureConnection: false,
    tls: {
      ciphers: 'SSLv3'
    }
  },
  logger: {
    file: {
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: false,
      maxSize: '20m',
      maxFiles: '2d',
      level: 'info'
    },
    console: {
      level: 'silly'
    }
  },
  accessTokenCookieKey: 'access_token.board',
  ormconfig: {
     name: 'default',
     type: 'postgres',
     database: 'board-app',
     username: 'postgres',
     password: 'hatioLAB1008',
     host: 'hatiolab-dev-database-1.cluster-cb0sbyfvrh6h.ap-northeast-2.rds.amazonaws.com',
     port: 5432,
     synchronize: true,
     logging: true
  }  
}
