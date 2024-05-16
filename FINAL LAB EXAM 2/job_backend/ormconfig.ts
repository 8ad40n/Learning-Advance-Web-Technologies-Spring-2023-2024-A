
import { Job } from 'src/entity/job.entity';
import { User } from 'src/entity/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  entities: [User,Job],
  synchronize: true,
};


export default config;