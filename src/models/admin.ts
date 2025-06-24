import { Model, Sequelize, DataTypes } from "sequelize";

export interface IAdminAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date | string;
  updated_at: Date | string;
}

export class Admin
  extends Model<IAdminAttributes, Partial<IAdminAttributes>>
  implements IAdminAttributes
{
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare created_at: Date | string;
  declare updated_at: Date | string;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "name is required",
            },
            notNull: {
              msg: "name is required",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "email is required",
            },
            notNull: {
              msg: "email is required",
            },
            isEmail: {
              msg: "email is invalid",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "password is required",
            },
            notNull: {
              msg: "password is required",
            },
          },
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        modelName: "admins",
        tableName: "admins",
        underscored: true,
        hooks: {
          beforeCreate: (data) => {
            if (data.created_at) data.created_at = new Date();
            if (data.updated_at) data.updated_at = new Date();
          },
        },
      }
    );
  }
}
