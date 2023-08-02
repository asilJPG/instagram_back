import { User } from "../../users/model/user.model";

export class CreatePhotoDto {
  title: string;
  link: string;
  users: User[];
}
