// let date =  (time)=>{return '处理后的时间123123' }
import fillzero from './fillzero.js';

let date = (time) => {
  let d = new Date();
  d.setTime(time);
  let year = d.getFullYear();
  let mon = d.getMonth() + 1;
  let dd = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();


  return `${fillzero(mon)}月${fillzero(dd)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
}
export default date;
