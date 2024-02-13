import request from "./../utils/request";

export const getOrders = () =>
  request({
    url: "/order",
    method: "get",
  });

export const getOrder = (orderId: string) =>
  request({
    url: `order/${orderId}`,
    method: "get",
  });

export const addOrder = (data: any) =>
  request({
    url: `order`,
    method: "post",
    data,
  });

export const updateOrder = (data: any, _id: string) =>
  request({
    url: `order/${_id}`,
    method: "update",
    data,
  });

export const deleteOrder = (_id: string) =>
  request({
    url: `order/${_id}`,
    method: "delete",
  });
