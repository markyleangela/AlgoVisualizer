const numOfElements = 10;
const arr = new Array(numOfElements);

function start(){
    
    for(let i = 0; i < numOfElements; i++){
        arr[i] = Math.random();

    }
    showBars();
    
}

function refresh(){
    location.reload();
}

function play(){
    const sorting = document.getElementById("sorting").value;
    console.log(sorting);
    const copy = [...arr];
    var swaps;

    switch(sorting){
        case "bubble":
            swaps = bubbleSort(copy);
            break;
        case "selection":
            swaps = selectionSort(copy);
            break;
        case "insertion":
            swaps = insertionSort(copy);
            break;
    }

    animate(swaps);
}

function animate(swaps){
    if(swaps.length == 0){
        showBars();
        return;
    
    }
    const [i,j] = swaps.shift();
    [arr[i] , arr[j]] = [arr[j], arr[i]];
    showBars([i,j]);
    setTimeout(function(){
        animate(swaps);
    }, 1000);


}


function selectionSort(arr){
    const swaps = [];
    var lowestValueIndex = 0;


    for(let j = 0; j < arr.length; j++){
        for(let i = j +1; i < arr.length; i++){

            if(arr[i] < arr[lowestValueIndex]){
                lowestValueIndex = i;
            }
        }
        swaps.push([j,lowestValueIndex]);
        [arr[j], arr[lowestValueIndex]] = [arr[lowestValueIndex] , arr[j]]; // swaping

        lowestValueIndex = j + 1;
    }

    console.log(swaps);

    return swaps;
}


function bubbleSort(arr){
    const swaps=[];
    do {
        var swapped = false;
        for(let i = 1; i < arr.length; i++){
            if(arr[i-1] > arr[i]){
                swapped = true;
                swaps.push([i-1,i]);
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]]; // swapping
            }
        }
    }while(swapped);
    return swaps;
}



function insertionSort(arr){
    const swaps=[];
    var keyValue, j;
    for(let i = 1; i < arr.length; i++){
        keyValue = arr[i];
        j = i - 1;
    
        while(j >= 0 && keyValue < arr[j]){
            swaps.push([j+1, j]);
            console.log(j+1 , j);
            arr[j+1] = arr[j];
            j--;
        }

        arr[j + 1] = keyValue;
        

    }

    return swaps;
}



function showBars(indices){
    container.innerHTML = "";
    for(let i=0; i < arr.length; i++){
        const bar = document.createElement("div");
        bar.style.height = arr[i]* 100+ "%";
        bar.classList.add("bar")
        
        if(indices && indices.includes(i)){
            bar.style.backgroundColor = "red";
        }

        container.appendChild(bar);
    }
}

