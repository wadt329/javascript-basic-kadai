//定数を宣言し、日付情報を代入
const toDay = new Date();

//年情報を取得し、定数を宣言・代入
const year = toDay.getFullYear();

//月情報を取得し、定数を宣言・代入(0～11のため、+1を行う)
const month = toDay.getMonth() + 1;

//日情報を取得し、定数を宣言・代入
const day = toDay.getDate();

//「●●●●年●●月●●日」で出力
console.log(year + '年' + month + '月' + day + '日');