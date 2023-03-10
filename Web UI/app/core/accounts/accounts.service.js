(function() {
'use strict';

angular.module('core')
.service('AccountsService', AccountsService);

AccountsService.$inject = ['Web3Service', '$rootScope']
function AccountsService(Web3Service, $rootScope) {
  let AccountsService = this;

  let web3 = Web3Service.getWeb3();
  let currentAccount = web3.eth.defaultAccount = '0xdedb49385ad5b94a16f236a6890cf9e0b1e30392';

  AccountsService.getCurrentAccount = () => currentAccount;
  AccountsService.setCurrentAccount = (acc) => {
    $rootScope.$broadcast('currentInfo:change', {
      'currentAccount': acc
    });
    return currentAccount = acc;
  };
}

}());
