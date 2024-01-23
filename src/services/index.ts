import axiosInstance from "@/configs/axios.config";

export const getProjectGeneral = () => {
  return axiosInstance.get(`/project/general`);
};

export const getProject = () => {
  return axiosInstance.get(`/project`);
};

export const getProjectDetail = (id: any) => {
  return axiosInstance.get(`/project/${id}`);
};

export const searchProjectName = ({ page, limit, sort, title, tags }: any) => {
  return axiosInstance.get(
    `/project?${title ? "title=" + title : ""}&page=${
      page ?? 1
    }&limit=${limit}${sort ? "&sort=" + sort : ""}${tags.length ? "&tags=" + tags?.toString() : ""}`,
  );
};

export const getProjectFeatured = () => {
  return axiosInstance.get("/project/featured");
};

export const getListTagRequest = () => {
  return axiosInstance.get("/project/tags");
};
