const validator = {
  isPhone: (data) => {
    let pattern = /^(1[3456789])\d{9}$/;
    if (data == "") return false;
    return pattern.test(data);
  },
  isPassword: (data) => {
    let pattern = /^(\w){6,12}$/;
    if (data == "") return false;
    return pattern.test(data);
  },
  isPayPass: (data) => {
    let pattern = /^[0-9]{6}$/;
    if (data == "") return false;
    return pattern.test(data);
  },
  isIdCard: function (data) {
    var str = data;
    if (str == "") return false;
    var len = str.length;
    if (len == 15) {
      var reg = /^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/;
    } else if (len == 18) {
      var reg = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d|X|x)$/;
    } else {
      return false;
    }

    if (!reg.test(str)) return false;

    var part = str.match(reg);
    var year = (len == 15) ? ("19" + part[3]) : part[3];
    var date = new Date(year + "/" + part[4] + "/" + part[5]);
    if ((date.getFullYear() != year) ||
      ((date.getMonth() + 1) != (part[4] | 0)) ||
      (date.getDate() != (part[5] | 0)))
      return false;

    if (len == 15) return true;
    var wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var lastcode = "10X98765432";
    var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += parseInt(str.charAt(i)) * wi[i];
    }
    return (lastcode.charAt(sum % 11) == part[7].toUpperCase());
  },
  isBankNo(data) {
    return /^\d{16,19}$/.test(data);
  },
  isPositiveNum(data) {
    return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d{0,2})$/.test(data)
  },
  isInt(data) {
    return /^[+]{0,1}(\d+)$/.test(data)
  },
  isPrice(data) {
    return /^(?!^0*(\.0{1,3})?$)^\d{1,13}(\.\d{1,6})?$/.test(data)
  },
  bankNoCheck(bankno) {
    var lastNum = bankno.substr(bankno.length - 1, 1);//取出最后一位（与luhn进行比较）

    var first15Num = bankno.substr(0, bankno.length - 1);//前15或18位
    var newArr = new Array();
    for (var i = first15Num.length - 1; i > -1; i--) {    //前15或18位倒序存进数组
      newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = new Array();  //奇数位*2的积 <9
    var arrJiShu2 = new Array(); //奇数位*2的积 >9

    var arrOuShu = new Array();  //偶数位数组
    for (var j = 0; j < newArr.length; j++) {
      if ((j + 1) % 2 == 1) {//奇数位
        if (parseInt(newArr[j]) * 2 < 9)
          arrJiShu.push(parseInt(newArr[j]) * 2);
        else
          arrJiShu2.push(parseInt(newArr[j]) * 2);
      }
      else //偶数位
        arrOuShu.push(newArr[j]);
    }

    var jishu_child1 = new Array();//奇数位*2 >9 的分割之后的数组个位数
    var jishu_child2 = new Array();//奇数位*2 >9 的分割之后的数组十位数
    for (var h = 0; h < arrJiShu2.length; h++) {
      jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
      jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    }

    var sumJiShu = 0; //奇数位*2 < 9 的数组之和
    var sumOuShu = 0; //偶数位数组之和
    var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
    var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
      sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }

    for (var n = 0; n < arrOuShu.length; n++) {
      sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }

    for (var p = 0; p < jishu_child1.length; p++) {
      sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
      sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    }
    //计算总和
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

    //计算luhn值
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhn = 10 - k;

    return lastNum == luhn;
  }
}
export default validator