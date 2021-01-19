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
  modelName: "Store",
  tableName: "Stores",
})
export default class Store extends Model<Store> {
  @BelongsTo(() => Pet, 'storeId')
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
