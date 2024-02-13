import request from "./../utils/request";

export const login = (data: any) =>
  request({
    url: "/auth/login",
    method: "post",
    data,
  });

export const logout = (data: any) =>
  request({
    url: "/auth/logout",
    method: "post",
    data,
  });
