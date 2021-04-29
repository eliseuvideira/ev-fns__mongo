export interface ConnectProps {
  protocol?: "mongodb" | "mongodb+srv";
  username?: string;
  password?: string;
  server: string;
  port?: number;
  database: string;
}
