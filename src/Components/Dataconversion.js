export default function Dataconversion(timestamp) {
     let date= new Date(timestamp);
     return date.toLocaleString("en-GB", {timezone:"Asia/Kolkata"});

}
const time= Dataconversion("2025-03-01T00:32:07+00:00")
console.log(time)