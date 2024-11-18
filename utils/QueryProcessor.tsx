export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "USB ID: 18-10938" );
  }

  if (query.toLowerCase().includes("name")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "Astrid A." );
  }

  if (query.toLowerCase().includes("largest")) {
    var regex = /(\d+)/g;
    var match = query.match(regex) || [];
    if (match) {
      var numbers = match.map(Number);
      var largest = Math.max(...numbers);
      return largest.toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    var regex = /(\d+)/g;
    var match = query.match(regex) || [];
    if (match) {
      var numbers = match.map(Number);
      var result = numbers.reduce((a, b) => a + b, 0);
      return result.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    var regex = /(\d+)/g;
    var match = query.match(regex) || [];
    if (match) {
      var numbers = match.map(Number);
      var result = numbers.reduce((a, b) => a * b, 1);
      return result.toString();
    }
  }

  if (query.toLowerCase().includes("a square and a cube")) {
    var regex = /(\d+)/g;
    var match = query.match(regex) || [];
    if (match) {
      var numbers = match.map(Number).filter(num => {
        var sqrt = Math.sqrt(num);
        var cbrt = Math.cbrt(num);
        return sqrt === Math.floor(sqrt) && cbrt === Math.floor(cbrt);
      });
      return numbers.join(", ");
    }
  }
  return "";
}
