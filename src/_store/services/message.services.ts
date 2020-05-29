import { of } from "rxjs";
import { shortMessages } from "../../_mocks/mocks";

export const getMessages = () => {
  return of(shortMessages)
}