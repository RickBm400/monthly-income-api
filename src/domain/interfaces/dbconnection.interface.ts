export interface DBConnection {
  connect(): Promise<any>;
  disconnect(): any;
}
