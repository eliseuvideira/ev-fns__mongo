export interface ConnectProps {
  protocol?: "mongodb" | "mongodb+srv";
  user?: string;
  pass?: string;
  server: string;
  port?: number;
  database: string;
}
