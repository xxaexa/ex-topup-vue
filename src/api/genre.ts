import request from "./../utils/request";

export const getGenres = () =>
  request({
    url: "/genre",
    method: "get",
  });

export const getGenre = (name: string) =>
  request({
    url: `genre/${name}`,
    method: "get",
  });

export const addGenre = (data: any) =>
  request({
    url: `genre`,
    method: "post",
    data,
  });

export const updateGenre = (data: any, name: string) =>
  request({
    url: `genre/${name}`,
    method: "update",
    data,
  });

export const deleteGenre = (_id: string) =>
  request({
    url: `genre/${_id}`,
    method: "delete",
  });
