const config = {
  default: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
  },
  development: {
    extend: 'default',
    database: 'lecreo_dev',
  },
  test: {
    extend: 'default',
    database: 'wican_test',
  },
  production: process.env.DATABASE_URL ? {
    username: process.env.DATABASE_URL.toString().split('@')[0].split('://')[1].split(':')[0],
    password: process.env.DATABASE_URL.toString().split('@')[0].split('://')[1].split(':')[1],
    dialect: 'postgres',
    host: process.env.DATABASE_URL.toString().split('@')[1].split(':')[0],
    database: process.env.DATABASE_URL.toString().split('@')[1].split(':')[1].split('/')[1],
  } : {
    extend: 'default',
    database: 'lecreo_prod',
  },
};


Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = Object.assign({}, config[configValue.extend], configValue);
  }
});

module.exports = config;