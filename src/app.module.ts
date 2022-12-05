import { UsersModule } from "./users/users.module";
import { Module } from "@nestjs/common";
import { FootballTeamModule } from "./footballTeam/football-team.module";
import { SeedModule } from "./seed/seed.module";

import { CommonModule } from "./common/common.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GroupsModule } from "./groups/groups.module";

@Module({
  imports: [
    CommonModule,
    UsersModule,
    FootballTeamModule,
    SeedModule,
    CommonModule,
    GroupsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
