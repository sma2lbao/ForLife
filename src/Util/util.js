export default {
  getMonthText: function (month) {
    const monthArray = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',];
    return monthArray[month];
  },
  getWeekText: function (day) {
    let weekText = '星 期 一';
    switch (day) {
      case 0:
        weekText = '星 期 日';
        break;
      case 1:
        weekText = '星 期 一';
        break;
      case 2:
        weekText = '星 期 二';
        break;
      case 3:
        weekText = '星 期 三';
        break;
      case 4:
        weekText = '星 期 四';
        break;
      case 5:
        weekText = '星 期 五';
        break;
      case 6:
        weekText = '星 期 六';
        break;
      default:
        weekText = '星 期 一';
    }
    return weekText;
  },
  getFirstDay: function (day) {
    let date = new Date(day);
    let first = new Date(date.getFullYear(), date.getMonth(), 1);
    return first.getTime();
  },
  getLastDay: function (day) {
    let date = new Date(day);
    let last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return last.getTime();
  }
}
