import { InventoryClient } from "../utils/axios/inventory.api";
import { ProductClient } from "../utils/axios/product.api";
import { ReviewClient } from "../utils/axios/review.api";

export const getHomeProducts = (pageX, sort, filter) => {
  console.log(filter);
  const dataFilter = {
    filters: {},
    page: pageX,
    pageSize: 12,
    orderBy: "",
    sortBy: "0",
  };

  if (sort == 1) {
    dataFilter.orderBy = "basePrice";
    dataFilter.sortBy = "desc";
  } else if (sort == 2) {
    dataFilter.orderBy = "basePrice";
    dataFilter.sortBy = "asc";
  } else if (sort == 3) {
    dataFilter.orderBy = "star";
    dataFilter.sortBy = "desc";
  } else if (sort == 4) {
    dataFilter.orderBy = "star";
    dataFilter.sortBy = "asc";
  }

  if (filter?.price != "all") {
    const dataFilter1 = {
      filters: {
        priceRange: filter?.price,
        category: filter?.category,
        color: filter?.color,
        size: filter?.size,
      },
      page: 1,
      pageSize: 100,
      orderBy: "",
      sortBy: "0",
    };
    console.log(dataFilter1);
    return ProductClient.post("retrieveProduct", dataFilter1);
  } else {
    return ProductClient.post("retrieveProduct", dataFilter);
  }
};

export const getSearchProduct = async str => {
  const data = {
    searchTerm: str,
  };
  return await ProductClient.post("search", data);
};

export const getProductDetail = id => {
  return ProductClient.get(`allProducts/${id}`);
};

export const getProductDetail1 = async id => {
  return await ProductClient.get(`${id}`);
};

export const getVariantOfProduct = async id => {
  return await InventoryClient.get(
    `getProductVariantByProductId/${id}`,
  );
};

export const getReviewOfProduct = async (productId) => {
  return await ReviewClient.get(
    `getByProductId/${productId}`,
  );
};
