export const nahrajZvuk = async (): Promise<Blob> => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];

  return new Promise((resolve) => {
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.onstop = () => resolve(new Blob(chunks, { type: 'audio/webm' }));
    
    mediaRecorder.start();
    setTimeout(() => mediaRecorder.stop(), 3000); // Max 3 vteřiny dle standardu
  });
};
