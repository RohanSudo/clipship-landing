import assert from "node:assert/strict";
import test from "node:test";
import { parsePendingMarker, dismissConfirmedPending, removeMatchingPending, writeMatchingPending, pendingSupportKey } from "../src/lib/support-pending.ts";
const key = "1789000000000.123e4567-e89b-42d3-a456-426614174000";
const reference = "SC-123e4567-e89b-42d3-a456-426614174000";
test("restoration accepts only exact opaque key/reference, discarding any extra data", () => {
  assert.deepEqual(parsePendingMarker(JSON.stringify({ key, reference, details:"not retained" })), { key, reference });
  for (const raw of ["null", "[]", "{}", JSON.stringify({key:"invalid"}), JSON.stringify({key,reference:"CS-123"})]) assert.throws(() => parsePendingMarker(raw));
});
test("dismissal requires acknowledgment and matching marker, and removes only local pending key", () => {
  const values = new Map([[pendingSupportKey, JSON.stringify({key,reference})],["unrelated","preserve"]]);
  const storage = {getItem:name=>values.get(name)??null,removeItem:name=>values.delete(name)};
  assert.throws(()=>dismissConfirmedPending(storage,key,false));
  assert.throws(()=>dismissConfirmedPending(storage,`${key}different`,true));
  assert.ok(values.has(pendingSupportKey));
  dismissConfirmedPending(storage,key,true);
  assert.equal(values.has(pendingSupportKey),false);
  assert.equal(values.get("unrelated"),"preserve");
});
test("missing, corrupt, or blocked storage never reports dismissal", () => {
  for (const raw of [null,"broken"]) assert.throws(()=>dismissConfirmedPending({getItem:()=>raw,removeItem:()=>assert.fail("must not remove")},key,true));
  assert.throws(()=>dismissConfirmedPending({getItem:()=>JSON.stringify({key}),removeItem:()=>{throw new Error("blocked")}},key,true));
});
test("a delayed result cannot remove or overwrite a different request marker", () => {
  const secondKey = "1789000000001.123e4567-e89b-42d3-a456-426614174001";
  const values=new Map([[pendingSupportKey,JSON.stringify({key:secondKey})]]);
  const storage={getItem:name=>values.get(name)??null,setItem:(name,value)=>values.set(name,value),removeItem:name=>values.delete(name)};
  assert.equal(removeMatchingPending(storage,key),false);
  assert.equal(writeMatchingPending(storage,{key,reference}),false);
  assert.deepEqual(JSON.parse(values.get(pendingSupportKey)),{key:secondKey});
  assert.equal(writeMatchingPending(storage,{key:secondKey,reference}),true);
  assert.equal(removeMatchingPending(storage,secondKey),true);
  assert.equal(writeMatchingPending(storage,{key}),true);
});
