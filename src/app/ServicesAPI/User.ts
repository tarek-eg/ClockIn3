export class User {
  public constructor(
    public UserID: number,
    public GroupID: number,
    public UserName: string,
    public LoginName: string,
    public Password: string,
    public UserColor: string,
    public UserLogo: string,
    public HourRate: number,
    public IsAdmin: boolean,
    public IsDeleted: boolean) { }
}