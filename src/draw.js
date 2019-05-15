class Draw {
    constructor(sequence) {
        this.arrayAndIndexes = sequence;
        this.arr = this.arrayAndIndexes.arr;

    }



    drawArray() {

        const fixedColumnHeight = 15;

        let container = document.createElement('div');
        container.className = "line__inner";
        container.id = "line__inner";
        document.body.appendChild(container);

        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = fixedColumnHeight * this.arr[i]+'px';
            newDiv.style.display = 'inline-block';
        }

    }

    movement() {
        let listOfIndexes = this.arrayAndIndexes.indexes;   //indexes' stack (sort steps)

        const [...columns] = document.getElementsByClassName('line'); //columns => HTML objects

        return listOfIndexes.forEach((pos, i) => {


            columns.forEach((col, ind) => {
                const elemOffset = col.offsetWidth;


                if (ind === pos) {
                    col.style.backgroundColor = 'red';
                    col.style.left = pos + elemOffset + 'px';
                }

            });
        })


    }


}

export default Draw;