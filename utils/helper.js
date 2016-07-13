export function dict2array(dict) {
    var array = [];
    for (var item in dict) {
        array.push(dict[item])
    }
    return array;
}