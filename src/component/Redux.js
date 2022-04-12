import React, { useEffect, useState } from 'react'
import "./app.css"
import {useDispatch,useSelector} from 'react-redux'

function Redux() {
    useEffect(()=>{
        console.log('Redux useEffect')
    })

  return (
    <div>
        <div className='one'>
            <div className='two'>
            <h1>Redux Basics</h1>
            <p>Redux is state  managment library inReact tO manage state of componetents  </p>
            <p>We can Pass Data easily from Top to down in React compontex but to pass data from Down to Top level Componets Is Dificult so we use Redux </p>
            <p> <span>Store</span> we have a Store in Which we store the state and varible of Components and used   when we need them</p>
            <p>and can can display in any component </p>
            <p><span>Reducer </span>is functions  we can change the state of an component as needed </p>
            <p><span>Action</span>is main  Point that will trigger the Reducer</p>
            <p><span>State</span> The state of  Components </p>
            <p><span>Reduc ToolKit</span> Is The Tool</p>
            <p>Create a file store and import configure store  from ReduxToolKit  we can define our Reducer in that </p>
            <p> Creat  a file Reducer.js and define the customReducer there we wil pass two Objects inital stata and final state on what action will defined</p>
            <p><span>Reducer  </span>have two main Things one is <span>state </span> and <span>action</span> what will be state of componetent on what action these all need to be defined </p>
            <p>after define Reducer in customReducer Now use them in Store  Reducer </p>
            <p><span>Wrapp</span> we also need to wrapp the app withe Provide from redux pass <span>Store</span> as a props in  Provider  and we can use the all values in App</p>
            <p>Now <span>useDispatch </span> Hook from Redux and  pass the dispatch action </p>
            <p><span>useSelector </span> is a Hook that is used to get State on Action Type </p>
            <Example/>
            <p>we can Now use the state of componet in any componet in app as we needed  </p>
            <p>It is aklso use full beacuse the component is not re-rendering again and again </p>

                <Intt/>

            </div>
        </div>
    </div>
  )
}

export default Redux


function Example(){
    // const [value,setValue]=useState(0)
    const dispatch=useDispatch()

    // get bvalue from store
    const {c}=useSelector(state=>state.custom)

    const add=()=>{
        dispatch({type:'increment'})
    }
    const add20=()=>{
        dispatch({type:'incrementByValue',payload:20})
    }
    const min=()=>{
        dispatch({type:'decrement'})
    }
    
 return(<div className='three'>
        <h1>Example One</h1>
        <p>{c}</p>

        <div className='thr'>
            <button onClick={add} >Increse</button>
            <button onClick={add20} >Increse by 20</button>
            <button onClick={min}>Decrease</button>
        </div>
    

        {/* <button onClick={()=>{dispatch({type:'incrementByValue',payload:int})}}>Add</button> */}

    </div>)
}
// Input Data manuplate
export function Intt() {
    const [int,setInt]=useState("")
    const dispatch=useDispatch()

    // console.log(int)
    const {input}=useSelector(state=>state.custom)
    console.log(input)
    useEffect(() =>{
        console.log('Re-render component')
    },[])

    const onChange=(e)=>{
        setInt(e.target.value)
    }
    const hamz =(e) =>{
        e.preventDefault();
        dispatch({type:'update',payload:int})
    }
    const ham=(e) =>{
        e.preventDefault();
        dispatch({type:'remove'})
    }
    return(<div>
        <div className='intt'>
            <p>Handal Input dataa from the user</p>
            
            <input value={int} onChange={onChange} type='text' placeholder='Enter Value'/> 
            <button onClick={hamz}>Change Data</button>
            <button onClick={ham}>Remove Data</button>
            <p>{int}</p>
            <p>Below value is being show from Redux store we can also manuplate these values </p>
            <h1>{input}</h1>
            <NewC/>
            <ReduTh/>
        </div>
        </div>)
}
// new component
export function NewC(){
    const {input} = useSelector(state=>state.custom)
    return(<div>
        <div className='new'>
            <h1>Another Components</h1>
            <p>Data is being passed from redux store </p>
            <h1>{input}</h1>
            <p>we can also pass object from it and use it  </p>
        </div>
    </div>)
}

// three example of redux
export function ReduTh(){
    const {hamza} = useSelector(state=>state.custom)
   return(<div>
        <div>
            <h1>Redux Three</h1>
            <div className='user'> 
            <p><span>Name</span>{hamza.name}</p>
            <p><span>age</span>{hamza.age}</p>
            <p><span>city </span>{hamza.city}</p>
            <p><span>coun </span>{hamza.country}</p>
            <p><span>salary</span>{hamza.salary}</p>
            <p><span>Job</span>{hamza.job}</p>
            <p  className='sm'><span>date</span>{hamza.date}</p>
            </div>
            <ReduU/>
        </div>
    </div>)
}
export function ReduU(){
    const dispatch=useDispatch()
    
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const [salary,setSalary]=useState('')
    const [job,setJob]=useState('')
    
    const {hamza} = useSelector(state=>state.custom)
     
    console.log(`Global State That can easily be used in any component`)
    console.log(hamza)
     

 
    // input handeler set state 
     const handle=(e)=>{
        setName(e.target.value)
    }
    const handle1=(e)=>{
        setAge(e.target.value)
    }
    const handle2=(e)=>{
        setCity(e.target.value)
    }
    const handle3=(e)=>{
        setCountry(e.target.value)
    }
    const handle4=(e)=>{
        setSalary(e.target.value)
    }
    const handle5=(e)=>{
        setJob(e.target.value)
    }

    const nameChange = e => {
        e.preventDefault();
        // console.log(name+ age + city + country + salary + job)
        dispatch({type:'updateUserName',payload:name})
    };
    const ageChange = e => {
        e.preventDefault();
        dispatch({type:'updateUserAge',payload:age})
    };
    const cityChange = e => {
        e.preventDefault();
        dispatch({type:'updateUserCity',payload:city})
    };
    const countryChange = e => {
        e.preventDefault();
        dispatch({type:'updateUserCountry',payload:country})
    };
    const salaryChange = e => {
        e.preventDefault();
        dispatch({type:'updateUserSalary',payload:salary})
    };
    const jobChange = e => {
        e.preventDefault();
        dispatch({type:'updateUserJob',payload:job})
    };
    const onSubmi=()=>{
        console.log(`all Chanfges`)
    }

return(<div>
            <p>Update The User Data on Different Buttons</p>

        <div className='col'>
            <div className='inpu' >   
            {/* value={user.name} */}
            <input placeholder='name' onChange={handle}  />  
            <input placeholder='age'    onChange={handle1}/>
            <input placeholder='city'   onChange={handle2}/>
            <input placeholder='country'onChange={handle3} />
            <input placeholder='salary' onChange={handle4}/>
            <input placeholder='job'    onChange={handle5}/>
            </div>

            <div className='inpu'>
                <button onClick={nameChange}>Name</button>
                <button onClick={ageChange}>age</button>
                <button onClick={cityChange}>city</button>
                <button onClick={countryChange}>country</button>
                <button onClick={salaryChange}>salary</button>
                <button onClick={jobChange}>job</button>

            </div>


        </div>
        <p>chanags will be applies set data chart</p>
        <button onClick={onSubmi}>Add Change</button>

    </div>)
}