'use strict';

var ScrollControler = function(node) {
    this.constructor = function () {
        console.log('build ---------->', this);
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

var LogoScroll = function(node) {
    this.constructor = function () {
        console.log('build ---------->', this);
        this.logoNode.addEventListener('click', this.scrollEvent, false);
        return this;
    };

    this.logoNode = node;

    this.scrollEvent = function(event) {
        var timer = setInterval(function() {
            var bufferNumber = window.pageYOffset - 100;
            if (bufferNumber <= 0) {
                window.scrollTo(0, 0);
                clearInterval(timer);
            } else {
                window.scrollTo(0, bufferNumber - 100);
            }
        }, 5);

        event.preventDefault();
    };
} 

new ScrollControler(document.querySelector('header')).constructor();
new LogoScroll(document.querySelector('a.logo')).constructor();


var PickButtonsBar = function() {
    this.constructor = function () {
        console.log('build ---------->', this);


        let itemPack = document.createDocumentFragment();
        this.buttonList.forEach(e => {
            let item = e.cloneNode(2);
            itemPack.appendChild(item);
        });
        this.bar.appendChild(itemPack);

        this.bar.addEventListener('click', function(e) {
            if (e.target.nodeName.toLowerCase() === 'a') {
                console.log(e.target);
            }
        });

        return this;
    }
    this.plan = document.querySelector('[data-component="pickButtonsBar"]');
    this.bar = document.querySelector('.pick-buttons-bar');
    this.buttonList = Array.prototype.map.call(this.plan.children, e => e);
}

if (document.querySelector('[data-component="pickButtonsBar"]') && document.querySelector('.pick-buttons-bar')) {
    new PickButtonsBar().constructor();
}

window.onscroll = function() {
	console.log('yep');
}