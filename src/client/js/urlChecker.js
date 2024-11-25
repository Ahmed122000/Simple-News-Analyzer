function checkForUrl(inputText) {
    try{
        new URL(inputText)
        return true;
    }catch(error){
        return false;
    }
}

export { checkForUrl };
