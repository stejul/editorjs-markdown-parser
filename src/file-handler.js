export function fileHandler(content, fileName) {
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
