import { Model, Sequelize, DataTypes } from "sequelize";

export interface IReferralAttributes {
  id: number;
  code: string;
  referrer: string;
  created_at: Date;
  updated_at: Date;
}

export class Referral
  extends Model<IReferralAttributes, Partial<IReferralAttributes>>
  implements IReferralAttributes
{
  declare id: number;
  declare code: string;
  declare referrer: string;
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
        code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: {
              msg: "code is required",
            },
            notNull: {
              msg: "code is required",
            },
          },
        },
        referrer: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: null,
          references: {
            model: { tableName: "admins" },
            key: "id",
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
          unique: true,
          validate: {
            notEmpty: {
              msg: "referrer is required",
            },
            notNull: {
              msg: "referrer is required",
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
        tableName: "referrals",
        modelName: "referrals",
        underscored: true,
      }
    );
  }
}
