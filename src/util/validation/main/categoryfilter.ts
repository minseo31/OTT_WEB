import { MainData } from "../../../type/data/MainData";
import { CategoryFilterType } from "../../../type/util/categorilFilterType";

// 인수로 전달 받은 카테고리 별로 필터링 하여 반환하는 유틸리티
export const categoryFilter = (
  allData: MainData[],
  category: CategoryFilterType
) => {
  const filter_Data = allData.filter((data: MainData) => {
    return data.categoryNames === category;
  });

  return filter_Data;
};
