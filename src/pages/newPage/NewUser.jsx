import './newUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
           <h1 className="newUserTitle">New User</h1>
           <form action="" className="newUserFrom">
           <div className="newUserItem">
                   <label htmlFor="">Username</label>
                   <input type="text" placeholder='john'/>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Full Name</label>
                   <input type="text" placeholder='John Smith'/>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Email</label>
                   <input type="email" placeholder='john@gmail.com'/>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Password</label>
                   <input type="email" placeholder='password'/>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Phone</label>
                   <input type="email" placeholder='+ 1 123 453 93'/>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Address</label>
                   <input type="email" placeholder='New York | USE'/>
               </div>
               <div className="newUserItem">
                   <label htmlFor="">Gender</label>
                   <div className="newUserGender">
                   <input type="radio" name='gender' id='male' value='male'/>
                   <label for="male">Male</label>
                   <input type="radio" name='gender' id='female' value='female'/>
                   <label for="female">Female</label>
                   <input type="radio" name='gender' id='other' value='other'/>
                   <label for="other">Other</label>
                   </div>
               </div>
               <div className="newUserItem">
               <label >Active</label>
               <select className='newUserSelect' name='active' id='active'>
                 <option value='yes'>Yes</option>
                 <option value='no'>No</option>
               </select>
               </div>
               <button className="newUserButton">Create</button>
           </form>
        </div>
    );
}

