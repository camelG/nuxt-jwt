import { DLCsv } from "./func";
import { getContractDataByContractIds } from "@/api/contract";

export function hcloData(ids) {
  const title = "次亜塩素酸データ";
  const content = [];
  const header = [
    "customer_id",
    "customer_code",
    "family_name",
    "personal_name",
    "family_kana",
    "personal_kana",
    "company_name",
    "company_kana",
    "department",
    "gender",
    "birthday",
    "postal_code",
    "pref",
    "city",
    "town",
    "mail_address",
    "code",
    "building",
    "tel",
    "memo",
    "contract_id",
    "delivery_name",
    "delivery_address",
    "v_name",
    "v_postal",
    "v_address",
    "v_tel",
    "v_acceptance",
    "products"
  ];
  getContractDataByContractIds(ids).then(data => {
    data.forEach(el => {
      content.push([
        el.customer_id,
        el.customer_code,
        el.family_name,
        el.personal_name,
        el.family_kana,
        el.personal_kana,
        el.company_name,
        el.company_kana,
        el.department,
        el.gender,
        el.birthday,
        el.postal_code,
        el.pref,
        el.city,
        el.town,
        el.mail_address,
        el.code,
        el.building,
        el.tel,
        el.memo,
        el.contract_id,
        el.delivery_name,
        el.delivery_address,
        el.v_name,
        el.v_postal,
        el.v_address,
        el.v_tel,
        el.v_acceptance,
        JSON.stringify(el.products)
      ]);
    });
    DLCsv(title, content, header);
  });
}
