import mongooseModule from "mongoose";
import { ConnectProps } from "../types/ConnectProps";
import { buildUri } from "./buildUri";

export const connect = (
  mongoose: typeof mongooseModule,
  { database, ...props }: ConnectProps,
) =>
  mongoose.connect(buildUri(props), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    dbName: database,
  });
