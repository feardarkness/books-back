import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * 1. Why text instead of char or character varying? For performance reasons, char is the slowest and character varying and
 *    text are mostly the same (per postgres docs)
 */

@Entity({
  name: "users",
})
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string = "";

  @Column({
    type: "text",
  })
  firstName!: string;

  @Column({
    type: "text",
  })
  lastName!: string;

  @Column({
    nullable: false,
    unique: true,
    type: "text",
  })
  email: string = "";

  @Column({
    nullable: false,
    type: "text",
  })
  password: string = "";

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export default User;
