// Función para encriptar el texto
function encryptText() {
    let text = document.getElementById('inputText').value;
    let encryptedText = btoa(text); // Encripta el texto usando base64
    document.getElementById('resultText').textContent = encryptedText;
  }
  
  // Función para desencriptar el texto
  function decryptText() {
    let text = document.getElementById('inputText').value;
    try {
      let decryptedText = atob(text); // Desencripta el texto usando base64
      document.getElementById('resultText').textContent = decryptedText;
    } catch (e) {
      document.getElementById('resultText').textContent = "Error: texto no válido para desencriptar";
    }
  }