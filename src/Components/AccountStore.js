import { makeAutoObservable } from "mobx";

class AccountStore {
    accountAddress = null
    userData = [];

    constructor() {
        makeAutoObservable(this);
    }

    changeAccountAddress(addr) {
        this.accountAddress = addr;
    }

    setUserData(val) {
        this.userData = val;
    }

    getUserData() {
        return this.userData;
    }

    getAccountAddress() {
        return this.accountAddress
    }
}

export default new AccountStore();