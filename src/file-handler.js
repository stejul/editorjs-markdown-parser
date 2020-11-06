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

export function fileUploadHandler(event) {
  console.log('it works somehow');
  const remark = require('remark');
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    console.log(remark().parse(e.target.result));
    return remark().parse(e.target.result);
    return e.target.result;
  };

  return reader.readAsText(file);
}

export function parseFromMarkdown(string) {
  const remark = require('remark');

  console.log(remark().parse(string));
  return remark().parse(string);
}
