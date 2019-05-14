class Draw {
    constructor(sequence) {
        this.arrayAndIndexes = sequence;
        this.arr = this.arrayAndIndexes.arr;

    }



    drawArray() {
        //alert(this.arrayAndIndexes.indexes);
        const fixedColumnHeight = 15;
        const columnMargin = 5;

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
            //newDiv.style.left = i * columnMargin + 'px';
            newDiv.style.display = 'inline-block';
        }

    }

    movement() {
        let listOfIndexes = this.arrayAndIndexes.indexes;   //indexes' stack (sort steps)

        const [...columns] = document.getElementsByClassName('line'); //columns => HTML objects

        return listOfIndexes.forEach((elem, i) => {


            columns.forEach((col, ind) => {
                const elemOffset = col.offsetWidth;
                //console.log(elemOffset);
                let position;
                if (ind === elem) {
                    console.log(ind, elem);

                    // alert(ind);
                    position = elem;
                    col.style.backgroundColor = 'red';
                    col.style.left = position + elemOffset + 'px';
                }
                else {
                    col.style.backgroundColor = 'blue';

                }
            });
        })



        // return columns.forEach((col, ind) => {
        //     const elemOffset = col.offsetLeft;
        //     console.log(elemOffset);
        //
        //     listOfIndexes.forEach((elem, i) => {
        //         if (ind === elem) {
        //
        //             alert(ind);
        //             let position = listOfIndexes[i];
        //             col.style.backgroundColor = 'red';
        //             return col.style.left = position + 'px';
        //         }
        //     });
        // })



    }


}

export default Draw;