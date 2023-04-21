import { AuthClient } from "../utils/axios/auth.api";

export const updateAddressAPI = async (id, newAddress) => {
  let data;
  try {
    data = await AuthClient.put(`address/${id}`, newAddress);
  } catch (e) {
    alert(e);
    return false;
  }
  return data.data;
};
