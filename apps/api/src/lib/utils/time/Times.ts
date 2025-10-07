import dayjs from "dayjs";

export class Times {
  public static readonly _sqlDateFormat = "YYYY-MM-DD";

  static format(s: string, format: string): string | undefined {
    const date = dayjs(s);
    if (!date.isValid()) return undefined;
    return date.format(format);
  }
}
