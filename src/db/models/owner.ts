import {
  Table,
  Column,
  Model,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";
import Pet from './Pet';

@Table({
  modelName: "Owner",
  tableName: "Owners",
})
export default class Owner extends Model<Owner> {
  @BelongsTo(() => Pet, 'ownerId')
  @Column
  id: number;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
