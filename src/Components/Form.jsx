import React,{useState} from "react";
import axios  from "axios";
import './Form.css'



function AddToCake(props) 
{
      const [addtocake,setAddtocake] = useState({
         product:"",
         flavor:"",
         price:"",
         occasian:"",
         weight:"",
      })
      let handleChange=(e)=>{
         const { name, value } = e.target;

         setAddtocake({
            ...addtocake,
            [name]: value,
         });
      }
      let handleSubmit=(event)=>{
         event.preventDefault();
         console.log(addtocake);
         axios.post("http://localhost:8000/addtocake",addtocake).then((res)=>{
            console.log(res);
         }).catch((e)=>{
            console.log(e);
         });
      }
      return(
         <form  onSubmit={handleSubmit}>
              <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
      <div id="addtocakepage" className="row " >
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="form-group">
             <h1 style={{textAlign:'center',color:"aqua"}}>QUERY FORM</h1> 
           </div>
      
          
          <div className="form-group">
             <label className="lable"> NAME : </label>
            <input type="text" name="flavor" className="form-control" onChange={handleChange}/><br></br><br></br>
            
            </div>
          <div className="form-group">
             <label className="lable"> AGE : </label>
             <input className="form-control" name="price" type="text"  onChange={handleChange} /><br></br><br></br>
          </div>
          <div className="form-group">
             <label className="lable"> HEIGHT : </label>
             <input type="text" name="occasian" className="form-control" onChange={handleChange}/><br></br><br></br>
           
          </div>
            <div className="form-group">
             <label className="lable"> MESSAGE FOR US : </label>
             <input className="form-control" name="weight" type="textarea" onChange={handleChange} /><br></br><br></br>
            
          </div>

          
          <div className="form-group">
             <center>
             <button className="btn" type="submit" name="btnsub" value="Submit">Submit</button><br></br><br></br>
             <button className="btn" type="submit" name="btncancel" value="Cancel">Cancel</button>
             </center>
          </div>
        </div>
        </div>
        </form>
      
        );
    }  
export default AddToCake;