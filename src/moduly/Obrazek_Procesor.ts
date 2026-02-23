export const procesujObrazek = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 300; // Optimalizace pro paměť
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        // Inteligentní ořez na střed (Square Crop)
        const sourceSize = Math.min(img.width, img.height);
        ctx?.drawImage(img, (img.width-sourceSize)/2, (img.height-sourceSize)/2, sourceSize, sourceSize, 0, 0, size, size);
        resolve(canvas.toDataURL('image/jpeg', 0.7)); // Komprese 70%
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};
