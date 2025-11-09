import { ImageOff } from "lucide-react";
import { ReactNode } from "react";

export class AppCons {
  public static readonly APP_NAME = "stream-originals";
  public static readonly NOT_AVAILABLE = "~";
  public static readonly NO_IMAGE: ReactNode = <ImageOff
    className="h-36 w-36 text-gray-400 group-hover:brightness-90"
  />;
}

