import { jsPDF } from "jspdf";
import { CardData } from "./Arasaac_API_Mustek";

export const generujTiskovePDF = (karty: CardData[]) => {
  const doc = new jsPDF();
  let x = 10;
  let y = 10;
  const cardSize = 50; // 5x5 cm

  karty.forEach((karta) => {
    doc.rect(x, y, cardSize, cardSize); // Rámeček pro ořez
    // Poznámka: addImage s URL může vyžadovat CORS nebo předem načtený obrázek
    // Pro demo účely předpokládáme, že URL je přístupné
    doc.addImage(karta.image, 'JPEG', x + 2, y + 2, 46, 46);
    doc.text(karta.label.toUpperCase(), x + 25, y + cardSize + 5, { align: 'center' });
    
    x += cardSize + 10;
    if (x > 150) { 
      x = 10; 
      y += cardSize + 20; 
    }
    
    // Kontrola přetečení stránky
    if (y > 250) {
      doc.addPage();
      x = 10;
      y = 10;
    }
  });
  doc.save("Piktos_Tisk_Daniel.pdf");
};
