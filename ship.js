function ship(length) {
    const Ship = (length) => {
        const getLength = () => length;
        const hit = (num) => {
            console.log("hit");

        };
        const isSunk = () => console.log("sunk");
        return { length, hit, isSunk };
    }

}
module.exports = ship;