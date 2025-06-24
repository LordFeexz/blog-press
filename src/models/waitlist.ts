import { Model, Sequelize, DataTypes } from "sequelize";

export interface IWaitlistAttributes {
  id: number;
  email: string;
  company: string | null;
  website: string | null;
  referral: string | null;
  accept_marketing_email: boolean;
  created_at: Date;
  updated_at: Date;
}

export class Waitlist
  extends Model<IWaitlistAttributes, Partial<IWaitlistAttributes>>
  implements IWaitlistAttributes
{
  declare id: number;
  declare email: string;
  declare company: string | null;
  declare website: string | null;
  declare referral: string | null;
  declare accept_marketing_email: boolean;
  declare created_at: Date;
  declare updated_at: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
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
          unique: true,
        },
        company: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        website: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        referral: {
          type: DataTypes.UUID,
          allowNull: true,
          defaultValue: null,
          references: {
            model: { tableName: "admins" },
            key: "id",
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        },
        accept_marketing_email: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
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
        underscored: true,
        modelName: "waitlists",
        tableName: "waitlists",
      }
    );
  }
}
