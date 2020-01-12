const DATA = 'DATA'
const DELETE ='DELETE'
const UPDATE = 'UPDATE'
const initState = {
    data:[]
}

const addingData = (state = initState, action) => {
    switch(action.type){
        case DATA:
             return {
                 ...state,
                 data: [...state.data, action.payload]
             }

        case DELETE:
             return{
                 ...state,
                 data: state.data.filter((e) => e.id !== action.id)
                
             }

        case UPDATE:
            
              let newState =  {...state}
              let data1 = newState.data.filter((e) =>e.id !==action.edit.id)
              data1.push(action.edit)
              data1 = data1.sort((a,b) => {
                  return a.id - b.id
              })

             return {
                 ...state,
                 data:data1
             } 
                   
        default:
            return state     
    }
}

export default addingData