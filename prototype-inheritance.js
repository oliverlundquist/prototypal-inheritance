var inspect = require('util').inspect;
var oneway, onewayinheritor, twoway, twowayinheritor;

////
// Constructors
function Oneway () {};
function OnewayInheritor () {};
function Twoway () {};
function TwowayInheritor () {};

log(Oneway, OnewayInheritor, Twoway, TwowayInheritor);

Oneway.prototype.oneway = true;
OnewayInheritor.prototype = new Oneway();
OnewayInheritor.prototype.onewayinheritor = true;

log(Oneway, OnewayInheritor, Twoway, TwowayInheritor);

Twoway.prototype.twoway = true;
TwowayInheritor.prototype = Twoway.prototype;
TwowayInheritor.prototype.twowayinheritor = true;

log(Oneway, OnewayInheritor, Twoway, TwowayInheritor);

////
// Instances
console.log('-------------------------');
console.log('oneway instance:');
oneway = new Oneway();
for(a in oneway) console.log('>> ' + a);

console.log('-------------------------');
console.log('onewayinheritor instance:');
onewayinheritor = new OnewayInheritor();
for(a in onewayinheritor) console.log('>> ' + a);

console.log('-------------------------');
console.log('twoway instance:');
twoway = new Twoway();
for(a in twoway) console.log('>> ' + a);

console.log('-------------------------');
console.log('twowayinheritor instance:');
twowayinheritor = new TwowayInheritor();
for(a in twowayinheritor) console.log('>> ' + a);

console.log('-------------------------');

function log(Oneway, OnewayInheritor, Twoway, TwowayInheritor, oneway, twoway) {
    console.log('-------------------------');
    console.log('Oneway: '          + inspect(Oneway.prototype));
    console.log('OnewayInheritor: ' + inspect(OnewayInheritor.prototype));
    console.log('Twoway: '          + inspect(Twoway.prototype));
    console.log('TwowayInheritor: ' + inspect(TwowayInheritor.prototype));
};
