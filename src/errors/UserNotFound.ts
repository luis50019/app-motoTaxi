import { ApiError } from "./ApiError";

export class UserNotFound extends ApiError{
  constructor(message:string){
    super(message,404),
    this.name =" UserNotFound";
  }
}