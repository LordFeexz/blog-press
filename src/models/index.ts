import "server-only";
import { Sequelize } from "sequelize";
import conf from "../config/config.json";
import "pg";
import "pg-hstore";
import { Admin } from "./admin";
import { Waitlist } from "./waitlist";
import { Referral } from "./referral";

let sequelize: Sequelize;

if (process.env.NODE_ENV === "production") {
  const url = process.env[conf.production.use_env_variable] as string;
  if (!url) throw new Error("DATABASE_URL must be set");

  sequelize = new Sequelize(url, {
    timezone: "+07:00",
    pool: {
      max: 20,
      idle: 10000,
      acquire: 30000,
    },
    logging: false,
    dialect: "postgres",
  });
} else {
  const devMode = conf.development;
  sequelize = new Sequelize(
    devMode.database,
    devMode.username,
    devMode.password,
    {
      timezone: "+07:00",
      dialect: "postgres",
      pool: {
        max: 20,
        idle: 10000,
        acquire: 30000,
      },
      logging: false,
    }
  );
}

const models = [Admin, Waitlist, Referral];
models.forEach((model) => model.initialize(sequelize));

Admin.hasMany(Waitlist, { foreignKey: "referral" });
Waitlist.belongsTo(Admin, { foreignKey: "referral" });
Admin.hasOne(Referral, { foreignKey: "referrer" });
Referral.belongsTo(Admin, { foreignKey: "referrer" });

export { sequelize as DB, Admin, Waitlist };
