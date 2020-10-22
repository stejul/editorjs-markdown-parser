export function fileDownloadHandler(content, fileName) {
  const file = new File([content], { type: 'text/markdown', endings: 'transparent' });
  const url = URL.createObjectURL(file);

  const element = document.createElement('a');
  document.body.appendChild(element);
  element.href = url;
  element.download = fileName;
  element.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(element);
}

export function fileUploadHandler(){
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    console.log(event.target.result);
  });
}
