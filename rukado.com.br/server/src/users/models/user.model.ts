import { Entity, PrimaryKey, Property } from '@drizzle-orm/mysql';

@Entity()
export class User {
  @PrimaryKey()
  id: number;

  @Property()
  email: string;

  @Property()
  name: string;

  @Property()
  provider: string; // Pode ser "google", "local", etc.
}
