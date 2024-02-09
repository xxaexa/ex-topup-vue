import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "./../../store";
import { getVouchers } from "../../api/voucher";
import type { IVoucherState, voucher } from "../../types";

@Module({ dynamic: true, store, name: "Voucher" })
class Voucher extends VuexModule implements IVoucherState {
  public vouchers: voucher[] = [];
  public isLoading: boolean = false;

  @Mutation
  private SET_VOUCHERS(vouchers: voucher[]) {
    this.vouchers = vouchers;
  }

  @Mutation
  private ADD_VOUCHER(voucher: voucher) {
    this.vouchers.push(voucher);
  }
  @Mutation
  private SET_LOADING(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Action
  public async addVoucher(voucher: voucher) {
    this.ADD_VOUCHER(voucher);
  }

  @Action
  public async getVouchers() {
    this.SET_LOADING(true);
    try {
      const response = await getVouchers({});
      if (response && response.data) {
        this.SET_VOUCHERS(response.data);
      }
    } finally {
      this.SET_LOADING(false);
    }
  }
}

export const VoucherModule = getModule(Voucher, store);
