export class Shift {
  public constructor(
 public GroupID?: number ,
 public GroupName?:string,
 public UserID?: number,
 public userName?: string,
 public ShiftDate?: Date,
 public FromDate?: Date,
 public ToDate?: Date,
 public ShiftTotal?: string,
 public IsDeleted?: boolean){}
}