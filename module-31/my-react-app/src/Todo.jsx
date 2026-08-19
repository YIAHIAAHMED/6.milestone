// export default function Todo({task, isDone}){
//     return(
//         <li>Task:{task} </li>
//     )
// }

// export default function ToDo({tast, isDone}){
//    if(isDone){
//     return <li>Done: {tast} </li>
//    }
//    else{
//     return <li>Pending: {tast} </li>
//    }
// }

// export default function ToDo({ tast, isDone}) {
//     if (isDone) {
//         return <li>Done: {tast} </li>
//     }
//     return <li>Pending: {tast} </li>

// }

// conditional rendering: 3 ternary
// conditon ? true : false
// export default function ToDo({task, isDone, time=0}){
//     return isDone ? <li>Done: {task} {time} </li> : <li>Not Done:{task} </li>
// }

// conditional rendering: 4 &&
// export default function ToDo({task, isDone, time=0}){
//     return isDone && <li>Done Task:{task} time='100'  </li>
// }

// conditional rendering: 5 || done jodi false hoy
// export default function ToDo({task, isDone, time=0}){
//     return isDone || <li>Not Done Task:{task} time='100'  </li>
// }

// // conditinal rendering option 6 use variable
// export default function ToDo({task, isDone}){
//     if (isDone===true){
//         return null;
//     }
//     else{
//         return <li>Pending:</li>
//     }
// }

// conditinal rendering option 6 use variable
export default function ToDo({task, isDone}){
    let listItem;

    if (isDone===true){
        listItem = <li>Done:{task} </li>
    }
    else{
        listItem = <li>Pending:{task} </li>
    }
    return listItem
}