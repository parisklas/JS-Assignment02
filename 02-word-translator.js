// Usage: Use simple conditional statements

// Create an application that prompts the user for a language code
// ("es", "de", "en", and "fr")
// Display translated 'Hello World' in selected language
// Default language should be English


let lang = prompt('Please enter the 2 letter code of your preferred language: \nEnglish - "en" \nGerman - "de" \nSpanish - "es" \nFrench - "fr"');


switch (lang) {
    case 'en' :
      document.write('Hello World!');
      break
    case 'de' :
      document.write('Hallo Welt!');
      break
    case 'es' :
      document.write('¡Hola Mundo!');
      break
    case 'fr' :
      document.write('Bonjour le monde!');
      break
    default :
      document.write('Hello World!');
};



/**
if (lang = 'en') {
    alert("Hello World!")
} else if (lang = 'de') {
    alert("Hallo Welt!")
} else if (lang = 'es') {
    alert("¡Hola Mundo!")
} else if (lang = 'fr') {
    alert("Bonjour le monde!")
};
 // above code did not work and I am not sure why - it only displayed Hello World in english
*/