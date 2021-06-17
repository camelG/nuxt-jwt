import encoding from "encoding-japanese";
import Papa from "papaparse";
import store from "@/store";
import pdfMake from "pdfmake";

export function getCompanyPersonalTypeName(id) {
  const data = store.state.options.companyPersonalType.find(el => el.id === id);
  return data && data.text;
}
export function getGenderName(id) {
  const data = store.state.options.gender.find(el => el.id === id);
  return data && data.text;
}
export function getSameToCustomerSelectName(id) {
  const data = store.state.options.sameToCustomerSelect.find(
    el => el.id === id
  );
  return data && data.text;
}
export function getHcloSettlementTypeName(id) {
  const data = store.state.options.hcloSettlementType.find(el => el.id === id);
  return data && data.text;
}

export function getHcloProductsName(id) {
  const data = store.state.options.hcloProducts.find(el => el.id === id);
  return data && data.name;
}

export function getHcloItemsName(id) {
  const data = store.state.options.hcloItems.find(el => el.id === id);
  return data && data.name;
}

export function getHcloItemByProduct(product) {
  if (!product) return;
  const data = store.state.options.hcloItems.find(
    el => el.group === product.group
  );
  return data && data.name;
}

export function getImportantContactName(id) {
  const data = store.state.options.importantContactType.find(
    el => el.id === id
  );
  return data && data.text;
}

export function getObjById(array, id) {
  return array.find(el => el.id === id);
}

export function prefName(id) {
  const data = store.state.options.pref.find(el => el.id === id);
  return data && data.text;
}

export function genderName(id) {
  const data = store.state.options.gender.find(el => el.id === id);
  return data && data.text;
}

export function settleName(id) {
  const data = this.$store.state.options.settleType.find(
    e => e.settlement_type_master_id === id
  );
  return data && data.name;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function DLPdf(title, payload) {
  const data = new Uint8Array(payload);
  const blob = new Blob([data], { type: "application/pdf" });

  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `${title}.pdf`;
  link.click();
}

export function DLCsv(title, data, header) {
  const config = {
    delimiter: ",",
    header: header,
    newline: "\r\n"
  };

  // 区切り文字へ変換
  const delimiterString = Papa.unparse(data, config);

  // blodへの変換
  const strArray = encoding.stringToCode(delimiterString);
  const convertedArray = encoding.convert(strArray, "SJIS", "UNICODE");
  const UintArray = new Uint8Array(convertedArray);
  const blob = new Blob([UintArray], { type: "text/csv" });

  // download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `${title}.csv`;
  link.click();
}

export function DLText(title, data) {
  // blodへの変換
  const strArray = encoding.stringToCode(data);

  const convertedArray = encoding.convert(strArray, "SJIS", "UNICODE");
  const UintArray = new Uint8Array(convertedArray);
  const blob = new Blob([UintArray], { type: "text/plain" });

  // download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `${title}.txt`;
  link.click();
}

export function createDdf(data) {
  return pdfMake.createPdfKitDocument(data).download();
}
