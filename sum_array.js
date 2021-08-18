// В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.

function testArray(a, b) {
    var sum_a = 0;
    var sum_b = 0;
    for (var i = 0; i < a.length; i++) {
      sum_a += a[i];
    }
    for (var j = 0; j < b.length; j++) {
      sum_b += b[j];
    }
    res = sum_a + sum_b;
    return res;
}
