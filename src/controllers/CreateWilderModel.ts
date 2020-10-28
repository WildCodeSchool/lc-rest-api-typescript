/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsInt, IsString, MinLength, ValidateNested } from 'class-validator';

class Skill {
  @MinLength(2)
  title!: string;

  @IsInt()
  votes!: number;
}

class CreateWilderModel {
  @MinLength(6)
  name: string;

  @IsString()
  city: string;

  @Type(() => Skill)
  @ValidateNested({ each: true })
  skills: Skill[];

  constructor(name: string, city: string, skills: Skill[]) {
    this.name = name;
    this.city = city;
    this.skills = skills;
  }
}

export default CreateWilderModel;
