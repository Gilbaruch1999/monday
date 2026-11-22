import {
  assignedToID,
  domainID,
  goalCategoryID,
  issueTypeID,
  planningStatusID,
  sizeEstimationID,
  strategicCategoryID,
} from "@/utils/boarditem";

export const statusColId = "color_mm5fb7mm";

export const fieldsMap: Map<string, number> = new Map();

export function initFieldsMap() {
  fieldsMap.set("person", assignedToID);
  fieldsMap.set(statusColId, planningStatusID);
  fieldsMap.set("color_mm5fx8bd", issueTypeID);
  fieldsMap.set("color_mm5fj7av", domainID);
  fieldsMap.set("color_mm5fqavz", strategicCategoryID);
  fieldsMap.set("color_mm5k7m7a", goalCategoryID);
  fieldsMap.set("color_mm5fnp1x", sizeEstimationID);
}

export const itemsApplication = "Monday"
