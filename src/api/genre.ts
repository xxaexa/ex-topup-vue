import request from "./../utils/request";

export const getGenres = (params: any) =>
  request({
    url: "/genre",
    method: "get",
    params,
  });

export const getVoucher = (data: any) =>
  request({
    url: "/users/info",
    method: "post",
    data,
  });

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "get",
  });

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: "put",
    data,
  });

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: "delete",
  });
