import Http from "./Http";

export const getAllSymtoms = (config) => Http.get("get_all_symptoms", config);
export const diagnoseDisease = (data) => Http.post("infer_disease", data);
