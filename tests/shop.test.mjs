import {test} from 'node:test';import assert from 'node:assert/strict';import {totals,products} from '../shop.mjs';
test('empty cart has no shipping',()=>assert.equal(totals([]).total,0));
test('shipping below threshold',()=>assert.equal(totals([{id:5,qty:1}]).total,23));
test('free shipping and coupon',()=>assert.deepEqual(totals([{id:1,qty:1},{id:5,qty:1}],'DOTS10'),{subtotal:107,discount:10.7,shipping:0,total:96.3}));
test('unknown coupon gives no discount',()=>assert.equal(totals([{id:1,qty:1}],'BAD').discount,0));
test('fixture includes unavailable product',()=>assert.ok(products.some(p=>p.stock===0)));
