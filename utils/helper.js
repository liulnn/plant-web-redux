export function dict2array(dict, key) {
    var array = [];
    for (var item in dict) {
        if (key) {
            dict[item][key] = item;
        }
        array.push(dict[item])
    }
    return array;
}