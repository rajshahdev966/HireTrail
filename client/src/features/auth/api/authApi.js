import hireTrailApi from "../../../shared/api/apiClient";

export const postLoginApi = async (data) => {

    const response = await hireTrailApi().post("/auth/login", data)
    return response.data.data


}
export const postRegisterApi = async (data) => {

    const response = await hireTrailApi().post("/auth/register", data)
    return response.data.data


}