var isShowAssetInfo = false;
var dropdownState = {
    chartType: false,
    chartPeriod: false,
    orderType: false,
    buySell: false,
    headerBlock: false,
    historyType: false,
    walletType: false,
};

function toggleAssetInfo () {
    isShowAssetInfo = !isShowAssetInfo;
    var tradingAssetInfo = document.getElementById('trading-asset-info-id');
    if (tradingAssetInfo) {
        if (isShowAssetInfo) {
            tradingAssetInfo.classList.add('trading-dropdown--open');
            tradingAssetInfo.classList.remove('trading-dropdown--hide');
        } else {
            tradingAssetInfo.classList.remove('trading-dropdown--open');
            tradingAssetInfo.classList.add('trading-dropdown--hide');
        }
    }
}

function toggleShow (what, item) {
    switch (what) {
        case 'chart-type':
            dropdownState.chartType = !dropdownState.chartType;
            var dropdown = document.getElementById('chart-type-dropdown-id');
            if (dropdown) {
                if (dropdownState.chartType) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'chart-period':
            dropdownState.chartPeriod = !dropdownState.chartPeriod;
            var dropdown = document.getElementById('chart-period-dropdown-id');
            if (dropdown) {
                if (dropdownState.chartPeriod) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            if (item){
                if (!item.classList.contains('select-menu__item--active')){
                    var parent = item.parentNode;
                    for (var i = 0; i < parent.childNodes.length; i++) {
                        if (parent.childNodes[i].classList !== undefined) {
                            if (parent.childNodes[i].classList.contains('select-menu__item--active')) {
                                parent.childNodes[i].classList.remove('select-menu__item--active');
                                break;
                            }
                        }
                    }
                    item.classList.add('select-menu__item--active');
                }
                var visibleEls = document.getElementsByClassName('form__body order-list__body');
                for (var i = 0; i < visibleEls.length; i++) {
                    if (visibleEls[i].classList !== undefined) {
                        if (!visibleEls[i].classList.contains('invisible')) {
                            visibleEls[i].classList.add('invisible');
                        }
                    }
                }

                var itemID = item.innerHTML.trim().toLowerCase().replace(/(\r\n|\n|\r)/gm,"") + '-orders';
                var rowID = document.getElementById(itemID);
                rowID.classList.remove('invisible');
            }
            break;    

        case 'order-type':
            dropdownState.orderType = !dropdownState.orderType;
            var dropdown = document.getElementById('order-type-dropdown-id');
            if (dropdown) {
                if (dropdownState.orderType) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'buy-sell':
            dropdownState.buySell = !dropdownState.buySell;
            var dropdown = document.getElementById('buy-sell-dropdown-id');
            if (dropdown) {
                if (dropdownState.buySell) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            if (item){
                if (!item.classList.contains('select-menu__item--active')){
                    var parent = item.parentNode;
                    for (var i = 0; i < parent.childNodes.length; i++) {
                        if (parent.childNodes[i].classList !== undefined) {
                            if (parent.childNodes[i].classList.contains('select-menu__item--active')) {
                                parent.childNodes[i].classList.remove('select-menu__item--active');
                                break;
                            }
                        }
                    }
                    item.classList.add('select-menu__item--active');
                }
                var visibleEls = document.getElementsByClassName('buy-sell__body');
                for (var i = 0; i < visibleEls.length; i++) {
                    if (visibleEls[i].classList !== undefined) {
                        if (!visibleEls[i].classList.contains('invisible')) {
                            visibleEls[i].classList.add('invisible');
                        }
                    }
                }

                var itemID = item.innerHTML.trim().toLowerCase().replace(/(\r\n|\n|\r)/gm,"") + '-id';
                var rowID = document.getElementById(itemID);
                rowID.classList.remove('invisible');
            }
            break;

        case 'header-block':
            dropdownState.headerBlock = !dropdownState.headerBlock;
            var dropdown = document.getElementById('header-block-dropdown-id');
            if (dropdown) {
                if (dropdownState.headerBlock) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'history-type':
            dropdownState.historyType = !dropdownState.historyType;
            var dropdown = document.getElementById('order-history-type-dropdown-id');
            if (dropdown) {
                if (dropdownState.historyType) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'wallet-type':
            dropdownState.walletType = !dropdownState.walletType;
            var dropdown = document.getElementById('wallet-type-dropdown-id');
            if (dropdown) {
                if (dropdownState.walletType) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;
    }
}

function selectDropdownItem (dropdown, item) {
    toggleShow(dropdown, item);
}
