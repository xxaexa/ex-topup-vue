import request from "./../utils/request";

export const getVouchers = () =>
  request({
    url: "/voucher",
    method: "get",
  });

export const getVoucher = (name: string) =>
  request({
    url: `/voucher/${name}`,
    method: "get",
  });

export const getVoucherByGenre = (_id: string) =>
  request({
    url: `/voucher/genre/${_id}`,
    method: "get",
  });

export const updateVoucher = (data: any, _id: string) =>
  request({
    url: `/voucher/${_id}`,
    method: "update",
    data,
  });

export const deleteVoucher = (_id: string) =>
  request({
    url: `/voucher/${_id}`,
    method: "delete",
  });
