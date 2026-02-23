import { jsPDF } from "jspdf";
import { CardData } from "./Arasaac_API_Mustek";

export const generujTiskovePDF = (karty: CardData[]) => {
  const doc = new jsPDF();
  let x = 20;
  let y = 20;
  const cardSize = 50; // 5x5 cm
  const margin = 10;

  doc.setFontSize(10);
  doc.text("Piktos by Synthesis studio - Tiskový arch", 105, 10, { align: 'center' });

  karty.forEach((karta) => {
    // Ořezové značky (Crop marks)
    doc.setDrawColor(200);
    doc.line(x - 5, y, x + cardSize + 5, y); // Horní linka
    doc.line(x - 5, y + cardSize, x + cardSize + 5, y + cardSize); // Dolní linka
    doc.line(x, y - 5, x, y + cardSize + 5); // Levá linka
    doc.line(x + cardSize, y - 5, x + cardSize, y + cardSize + 5); // Pravá linka

    doc.setDrawColor(0);
    doc.rect(x, y, cardSize, cardSize); // Rámeček karty
    
    try {
      doc.addImage(karta.image, 'JPEG', x + 5, y + 5, 40, 40);
    } catch (e) {
      doc.text("Obrázek", x + 25, y + 25, { align: 'center' });
    }
    
    doc.setFontSize(8);
    doc.text(karta.label.toUpperCase(), x + 25, y + cardSize - 2, { align: 'center' });
    
    x += cardSize + margin;
    if (x > 160) { 
      x = 20; 
      y += cardSize + margin + 5; 
    }
    
    if (y > 240) {
      doc.addPage();
      x = 20;
      y = 20;
    }
  });
  doc.save("Piktos_Tisk_V0.1.20.pdf");
};
