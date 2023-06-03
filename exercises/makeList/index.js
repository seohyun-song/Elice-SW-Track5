import { inputExample, makeAdultList, makeChildList } from "./makeList.js";

const $adultNameList = document.getElementById("adultnamelist");
const $adultAgeList = document.getElementById("adultagelist");

const $childNameList = document.getElementById("childnamelist");
const $childAgeList = document.getElementById("childagelist");

// 태그 가져옴
const [adultNameListTags, adultAgeListTag] = makeAdultList(inputExample);
const [childNameListTags, childAgeListTag] = makeChildList(inputExample);

// 태그 삽입
$adultNameList.innerHTML = adultNameListTags;
$adultAgeList.innerHTML = adultAgeListTag;

$childNameList.innerHTML = childNameListTags;
$childAgeList.innerHTML = childAgeListTag;
