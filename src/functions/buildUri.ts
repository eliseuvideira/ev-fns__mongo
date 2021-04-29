import { ConnectProps } from "../types/ConnectProps";

export const buildUri = ({
  protocol = "mongodb",
  username,
  password,
  server,
  port = 27017,
}: Omit<ConnectProps, "database">) =>
  `${protocol}://${
    username ? `${username}:${password}@` : ""
  }${server}:${port}`;
