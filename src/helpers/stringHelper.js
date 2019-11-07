export default {
    cutString : (string, maxLength) => {
        let result = '';
        //check string
        if(typeof string !== 'undefined'){
            result = string.length > maxLength ? string.slice(0, maxLength)+"..." : string;
        }

        return result;
    }
}