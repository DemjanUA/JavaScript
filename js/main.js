'use strict';

var ScrollControler = function(node) {
    this.constructor = function () {
        console.log('build', this);
        window.addEventListener('scroll', () => {
            if (window.pageYOffset === 0) {
                this.lock();
            }  else if (!this.unlockFlag) {
                this.unlock();
            }
        });
        return this;
    };

    this.node = node;
    this.unlockFlag = 0;

    this.lock = function() {
        this.node.dataset['locker'] = 'lock';
        this.unlockFlag = 0;
    };

    this.unlock = function() {
        this.node.dataset['locker'] = 'unlock';
        this.unlockFlag = 1;
    };
}
new ScrollControler(document.querySelector('header')).constructor();