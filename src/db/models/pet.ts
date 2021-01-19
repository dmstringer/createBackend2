import {
  Table,
  Column,
  Model,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from "sequelize-typescript";
import Store from './Store';
import Owner from './Owner';

@Table({
  modelName: "Pet",
  tableName: "Pets",
})
export default class Pet extends Model<Pet> {
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  age: number;

  @Column
  weight: number;

  @Column
  gender: string;

  @Column
  breed: string;

  @ForeignKey(() => Store)
  @Column
  storeId: number;

  @ForeignKey(() => Owner)
  @Column
  ownerId: number;

  @Column
  hasShots: boolean;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
