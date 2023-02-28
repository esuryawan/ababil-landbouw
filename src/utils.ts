export function grupIndex(g: number): number {
   switch (true) {
      case g <= 1965: return 0;
      case g <= 1970: return 1;
      case g <= 1975: return 2;
      case g <= 1980: return 3;
      case g <= 1985: return 4;
      case g <= 1990: return 5;
      case g <= 1995: return 6;
      case g <= 2000: return 7;
      case g <= 2005: return 8;
      case g <= 2010: return 9;
      case g <= 2015: return 10;
      default: return 11;
   }
}
