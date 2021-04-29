import { ConnectProps } from "../types/ConnectProps";

export const buildUri = ({
  protocol = "mongodb",
  user,
  pass,
  server,
  port = 27017,
}: Omit<ConnectProps, "database">) =>
  `${protocol}://${user ? `${user}:${pass}@` : ""}${server}:${port}`;
