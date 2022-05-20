function bbCode(sStartTag, sEndTag, sBoxId) {
  let bDouble = arguments.length > 1,
    oMsgInput = document.getElementById(sBoxId),
    nSelStart = oMsgInput.selectionStart,
    nSelEnd = oMsgInput.selectionEnd,
    sOldText = oMsgInput.value;

  oMsgInput.value =
    sOldText.substring(0, nSelStart) +
    (bDouble
      ? sStartTag + sOldText.substring(nSelStart, nSelEnd) + sEndTag
      : sStartTag) +
    sOldText.substring(nSelEnd);
  oMsgInput.setSelectionRange(
    bDouble || nSelStart === nSelEnd ? nSelStart + sStartTag.length : nSelStart,
    (bDouble ? nSelEnd : nSelStart) + sStartTag.length
  );
  oMsgInput.focus();
}

function bbMsg(btn, msg, def, sBoxId) {
  let newMsg = prompt(msg, def);
  if (newMsg) {
    bbCode("[" + btn + "=" + newMsg + "]", "[/" + btn + "]", sBoxId);
  } else {
    document.getElementById(sBoxId).focus();
  }
}

function bbEditorBtn(btnID) {
  const text = "t" + btnID;
  const vpBtn = "vpB-" + btnID;
  const vpModal = "vpM-" + btnID;
  const piruEditBtn = document.getElementById(btnID);
  return (
    "<div class='btn-group flex-wrap'><button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[b]','[/b]','" +
    text +
    "')\"}><i class='fa fa-bold'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[i]','[/i]','" +
    text +
    "')\"><i class='fa fa-italic'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[u]','[/u]','" +
    text +
    "')\"><i class='fa fa-underline'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[s]','[/s]','" +
    text +
    "')\"><i class='fa fa-strikethrough'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbMsg('url','Ingrese Url', 'https://','" +
    text +
    "')\"><i class='fa fa-link'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[img]','[/img]','" +
    text +
    "')\"><i class='fa fa-image'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbMsg('color','Ingrese color', 'red','" +
    text +
    "')\"><i class='fa fa-paint-brush'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbMsg('size','Ingrese tamaño', '13px','" +
    text +
    "')\"><i class='fa fa-text-height'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[quote]','[/quote]','" +
    text +
    "')\"><i class='fa fa-quote-left'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[code]','[/code]','" +
    text +
    "')\"><i class='fa fa-code'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[youtube]','[/youtube]','" +
    text +
    "')\"><i class='fa fa-youtube'></i></button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[jd]','[/jd]','" +
    text +
    "')\">Jdownloader</button> <button class='btn btn-outline-dark' type='button' onclick=\"bbCode('[vip]','[/vip]','" +
    text +
    "')\">Vip</button> <button id='" +
    vpBtn +
    "' class='btn btn-outline-dark' type='button' data-bs-toggle='modal' data-bs-target='#" +
    vpModal +
    "' title='Vista Previa'><i class='fa fa-eye'></i></button> </div>"
  );
}

const editor1 = document.getElementById("pirueditor-1");
const editor2 = document.getElementById("pirueditor-2");
const editor3 = document.getElementById("pirueditor-3");
const editor4 = document.getElementById("pirueditor-4");
const editor5 = document.getElementById("pirueditor-5");
const editor6 = document.getElementById("pirueditor-6");

editor1.innerHTML = bbEditorBtn("pirueditor-1");
editor2.innerHTML = bbEditorBtn("pirueditor-2");
editor3.innerHTML = bbEditorBtn("pirueditor-3");
editor4.innerHTML = bbEditorBtn("pirueditor-4");
editor5.innerHTML = bbEditorBtn("pirueditor-5");
editor6.innerHTML = bbEditorBtn("pirueditor-6");

// Boton Vista Previa
const vp1 = document.getElementById("vpB-pirueditor-1");
const vp2 = document.getElementById("vpB-pirueditor-2");
const vp3 = document.getElementById("vpB-pirueditor-3");
const vp4 = document.getElementById("vpB-pirueditor-4");
const vp5 = document.getElementById("vpB-pirueditor-5");
const vp6 = document.getElementById("vpB-pirueditor-6");

// Caja Vista Previa
const boxP1 = document.getElementById("boxPreview-1");
const boxP2 = document.getElementById("boxPreview-2");
const boxP3 = document.getElementById("boxPreview-3");
const boxP4 = document.getElementById("boxPreview-4");
const boxP5 = document.getElementById("boxPreview-5");
const boxP6 = document.getElementById("boxPreview-6");

// TextArea
const txtArea1 = document.getElementById("tpirueditor-1");
const txtArea2 = document.getElementById("tpirueditor-2");
const txtArea3 = document.getElementById("tpirueditor-3");
const txtArea4 = document.getElementById("tpirueditor-4");
const txtArea5 = document.getElementById("tpirueditor-5");
const txtArea6 = document.getElementById("tpirueditor-6");

// txtArea1.addEventListener("keyup", () => {
//   let txtAreaContent = txtArea1.value;
//   boxP1.innerHTML = BBCodeParser(txtAreaContent);
// });

vp1.addEventListener("click", (e) => {
  let txtAreaContent = txtArea1.value;
  boxP1.innerHTML = BBCodeParser(txtAreaContent);
});

// txtArea2.addEventListener("keyup", () => {
//   let txtAreaContent = txtArea2.value;
//   boxP2.innerHTML = BBCodeParser(txtAreaContent);
// });

vp2.addEventListener("click", (e) => {
  let txtAreaContent = txtArea2.value;
  boxP2.innerHTML = BBCodeParser(txtAreaContent);
});

// txtArea3.addEventListener("keyup", () => {
//   let txtAreaContent = txtArea3.value;
//   boxP3.innerHTML = BBCodeParser(txtAreaContent);
// });

vp3.addEventListener("click", (e) => {
  let txtAreaContent = txtArea3.value;
  boxP3.innerHTML = BBCodeParser(txtAreaContent);
});

// txtArea4.addEventListener("keyup", () => {
//   let txtAreaContent = txtArea4.value;
//   boxP4.innerHTML = BBCodeParser(txtAreaContent);
// });

vp4.addEventListener("click", (e) => {
  let txtAreaContent = txtArea4.value;
  boxP4.innerHTML = BBCodeParser(txtAreaContent);
});

// txtArea5.addEventListener("keyup", () => {
//   let txtAreaContent = txtArea5.value;
//   boxP5.innerHTML = BBCodeParser(txtAreaContent);
// });

vp5.addEventListener("click", (e) => {
  let txtAreaContent = txtArea5.value;
  boxP5.innerHTML = BBCodeParser(txtAreaContent);
});

// txtArea6.addEventListener("keyup", () => {
//   let txtAreaContent = txtArea6.value;
//   boxP6.innerHTML = BBCodeParser(txtAreaContent);
// });

vp6.addEventListener("click", (e) => {
  let txtAreaContent = txtArea6.value;
  boxP6.innerHTML = BBCodeParser(txtAreaContent);
});
