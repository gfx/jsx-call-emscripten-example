
native class C {
  static function ccall.<T>(name : string, returnType : string, argsType : string[], args : variant[]) : T;
} = "require('./add.js')";

class _Main {
  static function main(args : string[]) : void {
    var r = C.ccall.<number>("add", "number", ["number", "number"], [10, 20] : variant[]);
    log r;
  }
}

// vim: set tabstop=2 shiftwidth=2 expandtab:

