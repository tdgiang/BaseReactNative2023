import i18n from "../helper/i18/i18n";
import R from "../assets/R";

export const HISTORY_STATUS = {
  ALL: {
    code: "ALL",
    color: R.colors.secondary,
    icon: R.images.icCompleted,
    name: i18n.t("All"),
    status: "-1",
  },
  COMPLETED: {
    code: "COMPLETED",
    color: R.colors.secondary,
    icon: R.images.icCompleted,
    name: i18n.t("Completed"),
    status: "3",
  },
  IN_PROCESSING: {
    code: "IN_PROCESSING",
    color: R.colors.lightBlue,
    icon: R.images.icInfo,
    name: i18n.t("InProcessing"),
    status: "4",
  },
  FAILED: {
    code: "FAILED",
    color: R.colors.red1,
    icon: R.images.icFailed,
    name: i18n.t("Failed"),
    status: "7",
  },

  WATTING: {
    code: "TRANS_WAIT_APPROVED",
    color: R.colors.orange,
    icon: R.images.icInfo,
    name: i18n.t("InProcessing"),
    status: "4",
  },
};
export const SEX = {
  MALE: 0,
  FEMALE: 1,
};
export const TRANSACTION_TYPE = {
  ALL: {
    code: "ALL",
    color: R.colors.secondary,
    backgroundButton: R.images.bgDepositButton,
    name: i18n.t("All"),
    transferType: -1,
  },
  DEPOSIT: {
    code: "PUSH",
    color: R.colors.secondary,
    backgroundButton: R.images.bgDepositButton,
    name: i18n.t("Deposit"),
    transferType: 2,
    transferTypeTxt: "PUSH",
  },
  WITHDRAW: {
    code: "PULL",
    color: R.colors.red1,
    backgroundButton: R.images.bgWithdrawButton,
    name: i18n.t("Withdraw"),
    transferType: 1,
    transferTypeTxt: "PULL",
  },
  BORROW_REQUEST: {
    code: "BORROW_REQUEST",
    color: R.colors.gray1,
    backgroundButton: R.images.bgBorrowRequest,
    name: i18n.t("BorrowRequest"),
    transferType: 3,
    transferTypeTxt: "3",
  },
};
export const ACCOUNT_BANK_TYPE = {
  BANK: "Bank",
  CREDIT: "Credit",
};
export const CELL_COUNT = 4;
export const SHARE_TYPE = {
  ALL: 1,
  FACEBOOK: 2,
  TWITTER: 3,
};
export const RATINGS_TYPE = {
  REFER_FRIEND: 1,
  BENEFIT: 2,
};
export const LANGUAGE_LIST = [
  {
    id: 56,
    name: i18n.t("Vietnamese"),
    value: "vi",
    code: "vi",
  },
  {
    id: 57,
    name: i18n.t("English"),
    value: "en",
    code: "en",
  },
];

export const ASYNC_STORE_KEY = {
  TOKEN: "@TOKEN",
  FIREBASE: "@Firebase",
  ACCOUNT: "@ACCOUNT",
  LANGUAGE: "@LANGUAGE",
};

export const OTP_TYPE = {
  CHECK_PHONE_NUMBER: 0,
  FORGOT_PASSWORD: 1,
};
export const PROVINCE_LIST = [
  {
    id: 1,
    code: "AG",
    name: "An Giang",
  },
  {
    id: 2,
    code: "BR_VT",
    name: "Bà Rịa - Vũng Tàu",
  },
  {
    id: 3,
    code: "BL",
    name: "Bạc Liêu",
  },
  {
    id: 4,
    code: "BK",
    name: "Bắc Kạn",
  },
  {
    id: 5,
    code: "BC",
    name: "Bắc Giang",
  },
  {
    id: 6,
    code: "BN",
    name: "Bắc Ninh",
  },
  {
    id: 7,
    code: "BT",
    name: "Bến Tre",
  },
  {
    id: 8,
    code: "BD",
    name: "Bình Dương",
  },
  {
    id: 9,
    code: "BD",
    name: "Bình Định",
  },
  {
    id: 10,
    code: "BP",
    name: "Bình Phước",
  },
  {
    id: 11,
    code: "HN",
    name: "Hà Nội",
  },
  {
    id: 12,
    code: "HCM",
    name: "Hồ Chí Minh",
  },
];

export const DEVICE_EVENT_KEY = {
  RELOAD_BALANCE_WALLET: "reloadBalanceWallet",
  LOGOUT_EVENT: "logoutEvent",
};
