export const todayDate = () => {
    let yourDate = new Date();
    let offset = yourDate.getTimezoneOffset()
    yourDate = new Date (yourDate.getTime()-(offset*60*1000));
    let newDate = yourDate.toISOString().split('T')[0];
    return newDate;
}


