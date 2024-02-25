const Student =(name,id,graduate)=>{
    return (
    <div>
       <h3> info </h3>
       <div id="userinfo">
       <ul>
        <li>Student name: {name}</li>
        <li>Student ID:{id}</li>
        <li>{graduate 
       ?`${name} is a graduate student`
       :`${name} is a graduate student`
       }</li>
       </ul>
       </div>
        <img src="/photo/download.jpg" id="ASU"/>
        
    </div>
    )
};
export default Student;